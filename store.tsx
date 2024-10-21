"use client"
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
import axios from "axios";
import { signInWithPopup, GoogleAuthProvider,signInWithRedirect } from 'firebase/auth';
import { auth } from "@/lib/firebase";




const provider = new GoogleAuthProvider();



const genAI = new GoogleGenerativeAI("AIzaSyBkN_dw2c36Pye-wVck7tnbZCN52IU_Spw");

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
    };
  


    const useDataStore = create(
      persist(
        (set) => ({
          data: [],
          loading: false,
          error: false,
          onGetData: async (promt: string) => {
            set({ loading: true });
    
            try {
              const chatSession = await model.startChat({
                generationConfig,
                history: [
                  {
                    role: "user",
                    parts: [
                      {
                        text: `create a json file that suggests places and activities based on this information: place: Colombo, solo trip, interested in food, culture, adventure, bear, dance, and sea sighting. Create a 3-day trip plan with image URLs for places, opening hours, contact info, ticket prices, and geo-location coordinates.`,
                      },
                    ],
                  },
                  {
                    role: "model",
                    parts: [
                      {
                        text: "```json\n{\"trip\": [{\"day\": \"Day 1: Food and Culture\", \"activities\": [{\"name\": \"Galle Face Green\", \"description\": \"Enjoy the bustling atmosphere of Galle Face Green...\"}]}, {\"day\": \"Day 2: Adventure...\"}]}\n\n```",
                      },
                    ],
                  },
                ],
              });
    
              // Awaiting the response from the chat session
              const result = await chatSession.sendMessage(promt);
              const jsonResponse =  result.response.text(); // Assuming the response is text
              const parsedData = JSON.parse(jsonResponse);
    
              set({ data: parsedData, loading: false });
            } catch (error) {
              console.error("Error fetching data:", error);
              set({ loading: false, error: true });
            }
          },
        }),
        {
          name: "response-storage",
          storage: createJSONStorage(() => sessionStorage), // Using sessionStorage for persisting
        }
      )
    );
    


 const useGetPlaceStore = create(persist((set:any) => ({
  startDate:null,
  endDate:null,
  value:[],
  interests:[],
  progressValue:0,
  tripType:"",
  setDataValue: (v:any) => set({value: v}),
  setProgressValue: (val:any) => set({progressValue:val}),
  setStartDate: (date:any) => set({startDate:date}),
  setEndDate: (date:any) => set({endDate:date}),
  setTripType : (type:any) => set({tripType:type}),
  setInterests : (items:any) => set({interests:items})
}),
{
  name: 'entries-storage',
  storage: createJSONStorage(() => sessionStorage), 
},))



const useAuthStore = create(persist((set) => ({
  userSignIn:false,
  isLogin:false ,
  auth_data:[],
  signOut: () => set({userSignIn:false,auth_data:null}) ,
  onGetData : async (accessToken:{accessToken:string}) => {
    set({isLogin:true})
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/json',
          },
        }
      );
      console.log('User Info:', response.data);
      if(response.data){
        set({userSignIn:true})
      }
      set({isLogin:false,auth_data:response.data})
    } catch (error) {
      set({isLogin:false})
      console.error('Error fetching user info:', error);
    }

  },
  onAuth_firebase: async() => {
    set({isLogin:true})
    try{
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      set({isLogin:false,auth_data:result.user,userSignIn:true})

    } catch (error){
      set({isLogin:false})
      console.error('Error fetching user info:', error);
    }
  },
}),{
  name: 'myAuth',
  storage: createJSONStorage(() => localStorage),
  version: 1
}))



export {useDataStore,useGetPlaceStore,useAuthStore}
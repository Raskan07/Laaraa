"use client"

import React from 'react'
import { MdLogout } from "react-icons/md";
import { PiBroadcastBold } from "react-icons/pi";
import { useAuthStore } from "../../../../store";
import { useRouter } from 'next/navigation'



function Profile() {
    const { auth_data,signOut } = useAuthStore();
    const router = useRouter()

    console.log(auth_data);


    const signOutWithCacahe = () => {
        signOut()
        router.push("/")
    }




   return (
    <div className=" flex flex-col items-center">
        {/* background Image */}
        <img  className="w-[100vw] h-[35vh] object-cover rounded-2xl shadow-md"  src="https://t3.ftcdn.net/jpg/07/66/63/94/360_F_766639404_pv4WgJxIRzh55uAT0gHuoTVySrFjjp7Y.jpg"  />

        
        <div className="w-full flex flex-col  items-center justify-center">
            {/* Use Details  */}
            <div className="md:w-[50%]  shadow-xl p-5 rounded-2xl bg-slate-50 mt-[-100px] flex flex-col w-full items-center justify-center">

                <img src={"/profile.jpg"}  className ="md:w-[120px] md:h-[120px] w-[80px] h-[80px] rounded-full object-fit "/>

                <h2 className="font-roboto text-2xl mt-[20px] ">{auth_data?.displayName}</h2>
                <p className="font-roboto text-sm mt-[0px] text-gray-600 ">{auth_data?.email}</p>


                <div className="flex md:flex-row flex-col   items-center justify-between w-full mt-[10px]">
                    <div className="flex flex-col items-center mt-[10px] justify-center">
                        <h2 className="font-roboto text-lg mt-[4px] font-[300]  ">Contribution</h2>
                        <p className="font-roboto text-2xl mt-[0px] text-gray-600 font-bold ">0</p>
                    </div>
                    <div className="flex flex-col items-center mt-[10px] justify-center">
                        <h2 className="font-roboto text-lg mt-[4px] font-[300]  ">Followers</h2>
                        <p className="font-roboto text-2xl mt-[0px] text-gray-600 font-bold ">0</p>
                    </div>
                    <div className="flex flex-col items-center mt-[10px] justify-center">
                        <h2 className="font-roboto text-lg mt-[4px] font-[300]  ">Following</h2>
                        <p className="font-roboto text-2xl mt-[0px] text-gray-600 font-bold ">0</p>
                    </div>
                </div>


                <button onClick={() => router.push("/my/trips")} className="md:w-[60%] w-[98%] p-2 rounded-full bg-blue-400 flex flex-row items-center justify-center gap-2 mt-[25px] hover:opacity-[85%]">
                    <p className="text-lg text-white font-bold font-roboto"> My Trips</p>
                    <PiBroadcastBold  className="text-lg text-white font-bold"/> 
                </button>


                <button onClick={signOutWithCacahe} className="md:w-[60%] w-[98%] p-2 rounded-full bg-red-400 flex flex-row items-center justify-center gap-2 mt-[10px] hover:opacity-[85%]">
                    <p className="text-lg text-white font-bold font-roboto"> Sign Out</p>
                    <MdLogout  className="text-lg text-white font-bold"/> 
                </button>


            </div>
            {/* Redirect To My Trips */}
            {/* Sign Out  */}

        </div>

       
    </div>
  )
}

export default Profile

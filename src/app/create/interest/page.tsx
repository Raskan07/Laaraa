"use client"
import React, { useState } from 'react';
import H1 from '@/components/fonts/H1';
import P_Normal from '@/components/fonts/P_Normal';
import { AiOutlinePlus } from "react-icons/ai";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { useGetPlaceStore,useDataStore } from "../../../../store";
import useOnHandleAI from '@/hooks/useOnHandleAI';




function Interest() {
  const datas = [
    {
      category: "Cultural and Historical Attractions",
      items: [
        "Museums",
        "Historical landmarks",
        "UNESCO World Heritage Sites",
        "Temples, Churches, Mosques",
        "Local festivals",
        "Traditional villages",
        "Palaces and royal residences",
        "Archaeological sites"
      ]
    },
    {
      category: "Natural Attractions",
      items: [
        "National parks",
        "Mountains and volcanoes",
        "Beaches",
        "Lakes and rivers",
        "Deserts",
        "Caves and caverns",
        "Forests and jungles",
        "Waterfalls"
      ]
    },
    {
      category: "Adventure and Outdoor Activities",
      items: [
        "Hiking and trekking",
        "Skiing and snowboarding",
        "Scuba diving and snorkeling",
        "Paragliding, skydiving, zip-lining",
        "Rock climbing",
        "Safari and wildlife tours",
        "Rafting, kayaking, and canoeing",
        "Cycling and biking tours"
      ]
    },
    {
      category: "City Tours and Urban Exploration",
      items: [
        "City sightseeing",
        "Walking tours",
        "Public markets",
        "Street food tours",
        "Nightlife",
        "Architecture"
      ]
    },
    {
      category: "Food and Culinary Experiences",
      items: [
        "Local cuisine",
        "Food festivals",
        "Cooking classes",
        "Wine tasting tours",
        "Street food and night markets"
      ]
    },
    {
      category: "Religious and Spiritual Experiences",
      items: [
        "Pilgrimage sites",
        "Retreats and meditation",
        "Temples and religious ceremonies"
      ]
    },
    {
      category: "Shopping and Souvenir Hunting",
      items: [
        "Shopping malls and districts",
        "Local handicrafts",
        "Souvenir shops",
        "Flea markets"
      ]
    },
    {
      category: "Festivals and Events",
      items: [
        "Music festivals",
        "Cultural festivals",
        "Film festivals",
        "Carnivals and parades"
      ]
    },
    {
      category: "Cruises and Island Hopping",
      items: [
        "River or ocean cruises",
        "Island hopping"
      ]
    },
    {
      category: "Health and Wellness Tourism",
      items: [
        "Spa retreats",
        "Hot springs",
        "Yoga and meditation retreats"
      ]
    },
    {
      category: "Art and Entertainment",
      items: [
        "Theater and opera",
        "Art galleries and exhibitions",
        "Street performances",
        "Film locations"
      ]
    },
    {
      category: "Luxury Travel",
      items: [
        "High-end resorts",
        "Private tours",
        "Gourmet dining"
      ]
    },
    {
      category: "Volunteer and Educational Tourism",
      items: [
        "Conservation projects",
        "Community volunteering",
        "Study tours"
      ]
    }
  ];

  const {setProgressValue,setInterests,value,startDate,endDate,interests,tripType} = useGetPlaceStore()
  const {onGetData} = useDataStore()
  const promt = `create a json file that suggest places and activity based on this information : place : ${value?.label} , trip type: ${tripType} , and i am interested in ${interests.map((item) => (item))}, create a trip plan from ${startDate} to ${endDate} days, each day must includes : image url for places , opening hours , contact information , rating  , tickets price , geo location coordinates`
  const [interest, setInterest] = useState([]);
  const router =  useRouter()


  console.log(promt)


  const onHandleSelection = (name:any) => {
    setInterest((prevInterests) => {
      // Avoid duplicates
      if (!prevInterests.includes(name)) {
        return [...prevInterests, name];
      }
      return prevInterests;
    });
  };


  const onHandleRoute =  () => {
    setInterests(interest)
    setProgressValue(100)
    onGetData(promt)
    router.push("/trip-builder")
    
  }




  return (
    <div className="mt-[60px] w-full text-center justify-center flex flex-col items-center">
      <H1 className="">Tell us. what you're interested in</H1>
      <P_Normal className="text-gray-600 text-center">
        Select that all apply
      </P_Normal>

      <div className="mt-[40px] w-full grid md:grid-cols-4 items-center">
        {datas.map((item, index) => (
          <Popover key={index}>
            <PopoverTrigger asChild>
            <h2 className={`m-2 inline-block border border-1 p-3 px-[10px] rounded-full text-nn cursor-pointer ${item.items.some(subItem => interest.includes(subItem)) ? "bg-green-400" : ""}`}>
                {item?.category}
              </h2>
            </PopoverTrigger>
            <PopoverContent className="">
              {item?.items.map((subItem:any, subIndex) => (
                <div
                  key={subIndex}
                  className={`p-2 cursor-pointer ${interest.includes(subItem) ? "bg-green-300 rounded-full my-1" : ""} `}
                  onClick={() => onHandleSelection(subItem)}
                >
                  {subItem}
                </div>
              ))}
            </PopoverContent>
          </Popover>
        ))}

        <div className="m-2 border border-1 p-3 px-[10px] rounded-full text-nn flex flex-row gap-2 items-center justify-center">
          <AiOutlinePlus />
          <p>Add interest</p>
        </div>
      </div>


      <div className="w-full flex flex-row items-end  justify-end mt-[60px] mb-[20px]">
        <Button  onClick={onHandleRoute}  className="px-10 py-[20px] rounded-full" disabled={!interest} >
          Next
        </Button>
      </div>


      
    </div>
  );
}

export default Interest;

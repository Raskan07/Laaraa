"use client"
import React, { useState } from 'react';
import H1 from '@/components/fonts/H1';
import P_Normal from '@/components/fonts/P_Normal';
import { IoPersonOutline } from "react-icons/io5";
import { BsBalloonHeartFill } from "react-icons/bs";
import { GiThreeFriends } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { useGetPlaceStore } from "../../../../store";



function TripType() {
  const [selectedTrip, setSelectedTrip] = useState("Solo Trip"); 
  const {setTripType,setProgressValue} = useGetPlaceStore()
  const router = useRouter()

  const typeOfTrip = [
    {
      title: "Solo Trip",
      icon: <IoPersonOutline className='text-[40px]' />,
    },
    {
      title: "Partner Trip",
      icon: <BsBalloonHeartFill className='text-[40px]' />,
    },
    {
      title: "Friends Trip",
      icon: <GiThreeFriends className='text-[40px]' />,
    },
    {
      title: "Family Trip",
      icon: <MdOutlineFamilyRestroom className='text-[40px]' />,
    },
  ];

  const handleSelectTrip = (title:any) => {
    setSelectedTrip(title); // Update state with the selected trip title
  };

  const onHandleRoute = () => {
    if (selectedTrip) { // Check if selectedTrip has a value
      setTripType(selectedTrip);
      setProgressValue(75);
      router.push("/create/interest");
    }
  }

  return (
    <div className="mt-[60px] w-full text-center justify-center flex flex-col items-center">
      <H1 className="">What kind of trip are you planning?</H1>
      <P_Normal className="text-gray-600 text-center">
        Select One
      </P_Normal>

      <div className='flex md:flex-row  flex-col items-center justify-between w-full mt-[40px]'>
        {typeOfTrip.map((item) => (
          <div
            key={item.title}
            className={`md:w-[25%] w-[80%] h-[200px] border border-1 m-4 rounded-md flex flex-col md:items-start items-center justify-center cursor-pointer
              ${selectedTrip === item.title ? 'border-4 border-green-400' : 'border-gray-300'}`}
            onClick={() => handleSelectTrip(item.title)} // Handle click to select trip
          >
            <div className="p-5">
              {item.icon}
              <p className="mt-[10px]">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-row items-end  justify-end mt-[60px] mb-[20px]">
        <Button onClick={onHandleRoute} className="px-10 py-[20px] rounded-full" disabled={!selectedTrip}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default TripType;

"use client"
import H1 from '@/components/fonts/H1'
import React from 'react'
import { GoPlus } from "react-icons/go";
import MyTripCard from '@/components/cards/MyTripCard';
import { useRouter } from 'next/navigation'


function Trips() {
  const router = useRouter()
  return (
    <div className="">
      {/* title of page */}
      <H1 className="">My Trips</H1>

      {/* create a new trip */}
      <button onClick={()=> router.push("/create")} className='flex flex-row items-center mt-[40px] mb-[18px] justify-center gap-3 w-full border-1 border md:h-[200px] h-[100px] rounded-lg'>
        <GoPlus className='md:text-2xl text-lg text-gray-700' />
        <h2 className='tmd:ext-2xl text-lg text-gray-600 font-roboto'>Create New Trip</h2>
      </button>

      {/* Trips Card */}

      <MyTripCard />
      <MyTripCard />
      
    </div>
  )
}

export default Trips

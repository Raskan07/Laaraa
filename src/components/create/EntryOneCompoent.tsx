"use client"
import React, { useState,useEffect, use } from 'react';
import H1 from '@/components/fonts/H1';
import P_Normal from '../fonts/P_Normal';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { IoIosSearch } from "react-icons/io";
import TravelList from './TravelList';
import {Button} from "@/components/ui/button"
import { useGetPlaceStore } from '../../../store';
import { useRouter } from 'next/navigation'




function EntryOneCompoent() {
  const [value, setValue] = useState<any | string>(null);
  const router = useRouter()
  // @ts-ignore
  const {setDataValue,setProgressValue} = useGetPlaceStore();





  useEffect(() => {
    setDataValue(value)

  },[value])

  const HandleRoute =  () => {
    setProgressValue(25)
    router.push("/create/datepicker")
  }


  return (
    <div className="mt-[40px] w-full text-center justify-center flex flex-col items-center ">
      <H1 className="">Where do you want to go?</H1>
      <P_Normal className="text-gray-600 text-center">
        Search or get inspired by popular destination
      </P_Normal>
      <div  className='h-[50px]'/>
      <div className="flex flex-row items-center md:w-[75%] border border-1 px-4 py-3 rounded-full">
        <IoIosSearch  className="text-[20px] text-gray-700 "/>
        <GooglePlacesAutocomplete
          apiKey="AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc"
          selectProps={{
            value,
            onChange: (e) => setValue(e),
            placeholder: 'Search By City or Town',
            styles: {
              control: (provided) => ({
                ...provided,
                border: 'none', // Remove the border
                boxShadow: 'none', // Remove box shadow
                width: '100%', // Make it take full width of parent
              }),
              input: (provided) => ({
                ...provided,
                boxShadow: 'none',
                textAlign: 'left' 
              }),
              placeholder: (provided) => ({
                ...provided,
                textAlign: 'left', // Ensure placeholder is also left-aligned
              }),
              singleValue: (provided) => ({
                ...provided,
                textAlign: 'left', // Ensure selected value is left-aligned
              }),
              container:(provided) => ({
                ...provided,
                width: '100%',
                
              })
            },
          }}
        />
      </div>

      {/* travel list */}
      <TravelList />

      <div className="w-full flex flex-row items-end  justify-end mt-[15px] mb-[20px]">
        <Button onClick={HandleRoute} className='px-10 py-[20px] rounded-full' disabled={!value} >Next</Button>
      </div>
    </div>
  );
}

export default EntryOneCompoent;
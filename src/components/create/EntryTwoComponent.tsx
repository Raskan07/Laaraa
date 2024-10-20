"use client";

import React, { useState } from "react";
import H1 from "@/components/fonts/H1";
import P_Normal from "../fonts/P_Normal";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { useGetPlaceStore } from '../../../store';



function EntryTwoComponent() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const {setStartDate,setEndDate,setProgressValue} = useGetPlaceStore()
  const route =  useRouter();

  const onHandleRoute = () => {
    if(date!){
      setStartDate(date?.from)
      setEndDate(date?.to)
      setProgressValue(50)

      route.push("/create/trip-type")

    }
  }
  return (
    <div className="mt-[40px] w-full text-center justify-center flex flex-col items-center ">
      <H1 className="">When are you going?</H1>
      <P_Normal className="text-gray-600 text-center">
        choose the date range
      </P_Normal>
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        classNames={{
          today: `border-amber-500`, // Add a border to today's date
          selected: `bg-amber-500 border-amber-500 text-white`, // Highlight the selected day
          root: `m-5 p-3  w-[75%] pt-[10px] pb-[15px] flex md:flex-row flex-col items-center  justify-center`, // Add a shadow to the root element
          chevron: `fill-amber-500`, // Change the color of the chevron
          months: `flex gap-8 m-4  w-full flex md:flex-row flex-col items-center justify-around`, // Flex container with gap between months and padding around
          month: `p-6   `,
          table: `p-2 mt-[20px]`,
        }}
      />

      <div className="w-full flex flex-row items-end  justify-end mt-[15px] mb-[20px] p-5 md:p-0">
        <Button onClick={onHandleRoute} className="px-10 py-[20px] rounded-full" disabled={!date}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default EntryTwoComponent;

import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

function TripCard({ item }: any) {
  return (
    <div className='md:w-[260px] h-[300px]'>
      <img 
        src="https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg" 
        className="w-full h-[70%] object-fit rounded-md" 
        alt="Trip Image" // added alt for better accessibility
      />
      <h2 className="font-roboto text-[18px] font-[600] text-black">{item?.name}</h2>
      <p className="text-[15px] text-gray-700 font-roboto ">
        {item?.description?.slice(0, 30)}... {/* Removed the dot here */}
      </p>
      <div className="flex flex-row gap-1 items-center">
        <MdOutlineStarPurple500 className="text-yellow-400" />
        <p className="text-[15px] text-gray-700 font-roboto">
          {item?.rating} rating
        </p>
      </div>
    </div>
  );
}

export default TripCard;

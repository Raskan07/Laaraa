import React from "react";
import { IoLocationOutline,IoCalendarOutline } from "react-icons/io5";

function MyTripCard() {
  return (
    <div className="w-full flex md:flex-row flex-col items-center border border-1 rounded-md my-[15px]">
        {/* image */}
        <img src="https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg" className="w-[100%] md:w-[300px] h-[160px] md:h-[200px] md:rounded-tl-lg md:rounded-bl-lg rounded-md " />

        <div className="flex flex-col md:p-5 mt-[10px] p-2">
          <h2 className="md:text-2xl text-xl  font-bold font-roboto ">Colombo for 3 days</h2>
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center gap-2 mt-2">
              <IoCalendarOutline />
              <p className="font-roboto">Sep 27 : sep 29,2024</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <IoLocationOutline />
              <p className="font-roboto">colombo</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default MyTripCard;

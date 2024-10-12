import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GetPlaceDetails } from '@/lib/GloabalAPI';
import { useEffect, useState } from "react";


function TripCard({ item }: any) {

  const [imgaeURL,setImageURL] = useState<string>()
  const [imageLoading,setImageLoaing] =  useState(false)


  const onGetImage = () => {

    if(!item?.name || item?.name == "undefined"){
      console.log("Label is undefined, skipping image fetch.");
      return;
    }

    setImageLoaing(true);


    GetPlaceDetails(item?.name).then(res => {
      console.log("respose",res.data?.result?.results[0])
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&maxheight=800&photo_reference=${res.data?.result?.results[0]?.photos[0]?.photo_reference}&key=AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc`
      console.log("photoUrl",photoUrl)
      setImageURL(photoUrl)
      setImageLoaing(false)
    })
  }

  useEffect(() => {
    item && onGetImage()
  },[item?.name])

  return (
    <div className='md:w-[260px] h-[300px]'>
      <img 
        src={imgaeURL} 
        className="w-full h-[70%] object-fit rounded-md" 
        alt="Trip Image" 
      />
      <h2 className="font-roboto text-[18px] font-[600] text-black">{item?.name}</h2>
      <p className="text-[15px] text-gray-700 font-roboto ">
        {item?.description?.slice(0, 30)}... 
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

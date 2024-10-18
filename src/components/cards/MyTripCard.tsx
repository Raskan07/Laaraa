import React from "react";
import { IoLocationOutline,IoCalendarOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from '@/lib/GloabalAPI';
import { SkeletonMyTripsCard } from "../skelton";



function MyTripCard({tripData}:any) {

  const [imgaeURL,setImageURL] = useState<string>()
  const [imageLoading,setImageLoaing] =  useState(false)

  

  const tripPlan = tripData?.ai_generates?.trip_plan;
  const tripPlanLength = tripData?.ai_generates?.trip_plan?.length || 0; 
  const firstTripDay = tripPlan?.[0]?.day || "N/A";
  const lastTripDay = tripPlan?.[tripPlan.length - 1]?.day || "N/A";
  const place = tripData?.ai_generates?.place

  const onGetImage = () => {

    if(!place || place == "undefined"){
      console.log("Label is undefined, skipping image fetch.");
      return;
    }

    setImageLoaing(true);


    GetPlaceDetails(place).then(res => {
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&maxheight=800&photo_reference=${res.data?.result?.results[0]?.photos[0]?.photo_reference}&key=AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc`
      setImageURL(photoUrl)
      setImageLoaing(false)
    })
  }

  useEffect(() => {
    onGetImage()
  },[place])


  if(imageLoading){
    return (
      <SkeletonMyTripsCard />
    )
  }

    




  return (
    <div className="w-full flex md:flex-row flex-col items-center border border-1 rounded-md my-[15px]">
        {/* image */}
        <img src={imgaeURL} className="w-[100%] md:w-[300px] h-[160px] md:h-[200px] md:rounded-tl-lg md:rounded-bl-lg rounded-md" />

        <div className="flex flex-col md:p-5 mt-[10px] p-2">
          <h2 className="md:text-2xl text-xl  font-bold font-roboto ">{tripData?.ai_generates?.place} for {tripPlanLength ? tripPlanLength + 1 : "" } days</h2>
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center gap-2 mt-2">
              <IoCalendarOutline />
              <p className="font-roboto">{firstTripDay} : {lastTripDay}</p>
            </div>
            <div className="flex flex-row items-center gap-2 mt-2">
              <IoLocationOutline />
              <p className="font-roboto">{tripData?.ai_generates?.place}</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default MyTripCard;

import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/lib/GloabalAPI";



type Props = {
  isPrimaryCard?: Boolean;
  data?:any
};

function PrimaryCard({ isPrimaryCard,data}: Props) {

  const [imgaeURL,setImageURL] = useState<string>()
  const [imageLoading,setImageLoaing] =  useState(false)


  const onGetImage = () => {

    if(!data?.placeName || data?.placeName == "undefined"){
      console.log("Label is undefined, skipping image fetch.");
      return;
    }

    setImageLoaing(true);


    GetPlaceDetails(data?.placeName).then(res => {
      console.log("respose",res.data?.result?.results[0])
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&maxheight=800&photo_reference=${res.data?.result?.results[0]?.photos[0]?.photo_reference}&key=AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc`
      console.log("photoUrl",photoUrl)
      setImageURL(photoUrl)
      setImageLoaing(false)
    })
  }

  

  useEffect(() => {
    data &&  onGetImage()
  }, [data?.placeName]);


  return (
    <div className="w-full md:w-[270px]">
      {/* image */}
      <div
        className="w-full md:w-[270] h-[220px] hover:opacity-90 bg-gray-100 object-cover no-repeat  rounded-md"
        style={{
          backgroundImage:
            `url('${imgaeURL}')`,
        }}
      >
        {/* header */}
        {isPrimaryCard && (
          <div className="w-full  mt-[20px] pt-[5px] flex flex-row items-end justify-end">
            <div className="rounded-full size-[36px] bg-white flex items-center justify-center m-[10px] ">
              <CiHeart className="size-[20px]" />
            </div>
          </div>
        )}

        {!isPrimaryCard && (
          <div className="font-extrabold text-[27px] h-[95%] flex items-end justify-end">
            <p className="w-[90%] text-white">Top Expereience</p>
          </div>
        )}
      </div>

      {/* footer */}
      {isPrimaryCard && (<div className="mt-3 p-1">
        {/* title */}
        <p className="w-[98%] text-[17px] font-bold font-roboto text-start capitalize leading-[1.2]">{data?.placeName}</p>
        <p className="text-[15px] text-gray-700 font-roboto ">
        {data?.description?.slice(0, 30)}... </p>        
        {/* rating */}
        <div className="flex flex-row gap-4 items-center">
            <IoIosStar className="text-yellow-400" /> 
            <p className="text-md w-[70%] font-roboto"> {data?.rating} rating</p>

            <FaArrowRightLong className="" />
        </div>
        {/* contact us */}
      </div>)}

    </div>
  );
}

export default PrimaryCard;

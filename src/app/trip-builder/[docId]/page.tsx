"use client";
import PlanCard from "@/components/cards/PlanCard";
import TripCard from "@/components/cards/TripCard";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { timeLineData } from "@/data";
import { Timeline } from "@/components/ui/timeline";
import { CiClock2 } from "react-icons/ci";
import Map from "@/lib/map";
import axios from 'axios';
import { GetPlaceDetails } from "@/lib/GloabalAPI";
import { Skeleton } from "@/components/ui/skeleton"
import { SkeletonImage,SkeletonRow,SkeletonCard} from "@/components/skelton";




const Trips = () => {
  const { docId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const [imgaeURL,setImageURL] = useState<string>()
  const [imageLoading,setImageLoaing] =  useState(false)

  console.log("imageLoading",imageLoading)

  const onGetInfo = async () => {
    setLoading(true);
    const docRef = doc(db, "AI_Trips", `${docId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data());
      setLoading(false);
    } else {
      console.log("No such document!");
      setLoading(false);
    }
  };


  const onGetImage = () => {

    if(!data?.entries?.placeData?.label || data?.entries?.placeData?.label == "undefined"){
      console.log("Label is undefined, skipping image fetch.");
      return;
    }

    setImageLoaing(true);


    GetPlaceDetails(data?.entries?.placeData?.label).then(res => {
      console.log("respose",res.data?.result?.results[0])
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&maxheight=800&photo_reference=${res.data?.result?.results[0]?.photos[0]?.photo_reference}&key=AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc`
      console.log("photoUrl",photoUrl)
      setImageURL(photoUrl)
      setImageLoaing(false)
    })
  }

  

  useEffect(() => {
    onGetInfo()

    data &&  onGetImage()
  }, [data?.entries?.placeData?.label]);


  if(data?.entries?.placeData?.label == "undefind" || data?.entries?.placeData?.label == null){
    return (
      <div className="flex flex-col w-full gap-3">
        <SkeletonImage />
        <SkeletonRow />
        <div className="flex mt-[30px] flex-col md:flex-row items-center gap-3">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    )
  }


  return (
    <div className="flex flex-col  "  >


      {/* header Image */}
      <div className="w-full flex flex-col items-center">
          <img
          src={imgaeURL}
          className="w-full md:h-[100vh] object-cover  rounded-md"
          alt=""
        />
        <div className="w-full flex flex-col items-start my-[32px]">
          <p className="text-[16px] text-gray-700 text-noraml leading-6  ">
            Review our recommendations for your trip
          </p>
          <h2 className="w-full text-start font-anton text-[42px]">
            {data?.entries?.placeData?.label}
          </h2>
          <p className="text-sm text-gray-700 text-roboto font-[300] font-roboto mt-[8px] text-start  md:w-[60%]">
            {data?.ai_generates?.description}
          </p>
          <div className="flex flex-row items-center mt-[12px] gap-2">
            <Badge
              variant="secondary"
              className="text-sm text-gray-700 text-roboto font-[300] "
            >
              {data?.entries?.tripType}
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm text-gray-700 text-roboto font-[300] "
            >
              october
            </Badge>
            <Badge
              variant="secondary"
              className="text-sm text-gray-700 text-roboto font-[300] "
            >
              5 days
            </Badge>
          </div>
        </div>
      </div>
      {/* hotel card */}

      <div className="flex flex-col items-start mt-[40px]">
        <p className="text-[24px] font-roboto font-[600]">
          See The Best Hotels{" "}
        </p>
        <div className="grid md:grid-cols-4 gap-[20px] mt-[30px] items-center">
          {data?.ai_generates?.hotels.map((item: any) => (
            <TripCard item={item} />
          ))}
        </div>
      </div>
      {/* plans days */}

      <PlanCard  data={data}/>
      
    </div>
  );
};

export default Trips;

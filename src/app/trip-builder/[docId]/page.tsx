"use client";
import PlanCard from "@/components/cards/PlanCard";
import TripCard from "@/components/cards/TripCard";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";


const Trips = () => {
  const { docId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);

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

  useEffect(() => {
    onGetInfo();
  }, []);

  return (
    <div className="flex flex-col  ">
      {/* header Image */}
      <div className="w-full flex flex-col items-center">
        <img
          src="https://nyc.eu/wp-content/uploads/2015/07/New_York_City-scaled.jpg"
          className="w-full md:h-[60%] h-auto rounded-md"
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
            {data?.ai_generates?.review}
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
      
    </div>
  );
};

export default Trips;

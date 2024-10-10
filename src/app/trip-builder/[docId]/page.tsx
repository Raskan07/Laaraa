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

      <div className="flex flex-col items-start mt-[40px]">
        <p className="text-[24px] font-roboto font-[600]">
          The Best Trip Plan for You {" "}
        </p>
        <div className="flex flex-col w-full mt-[30px] items-start">
          {data?.ai_generates?.trip_plan.map((item: any) => (
            <Accordion className="rounded-md w-full " type="single" collapsible>
            <AccordionItem value={item?.day}>
              <AccordionTrigger className="font-roboto text-[18px] font-[400] text-gray-900">{item?.day}</AccordionTrigger>
              <AccordionContent className="w-full flex flex-col">
                {
                  item?.activities.map((info:any) => (
                    <Timeline  data={[
                      {
                        title:"On with",
                        content: (
                          <div>
                            <p className="text-neutral-800  dark:text-neutral-200 text-xs md:text-[18px]  font-roboto mb-8">
                              {info?.whatToDo}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                              <img
                                src="https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_960_720.jpg"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                              />
                              <img
                                src="https://cdn.pixabay.com/photo/2017/08/29/10/13/sea-2692782_960_720.jpg"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                              />
                              <img
                                src="https://cdn.pixabay.com/photo/2017/01/28/19/31/landscape-2016308_960_720.jpg"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                              />
                              <img
                                src="https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_960_720.jpg"
                                alt="startup template"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                              />
                            </div>
                          </div>
                        ),
                      },
                      {
                        title:"is Open",
                        content: (
                            <p className="text-neutral-800 flex flex-row gap-2 items-center  text-xs md:text-[25px]  font-roboto mb-8">
                               <CiClock2  className="text-neutral-800"/>
                              {info?.openingHours}
                            </p>
                        ),
                      },
                      {
                        title:"Location",
                        content: (
                            <Map  location={info?.address} />
                        ),
                      }
                    ]} name={info?.placeName} description={info?.description} />
                  ))
                }
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          ))}
        </div>  
      </div>

      
    </div>
  );
};

export default Trips;

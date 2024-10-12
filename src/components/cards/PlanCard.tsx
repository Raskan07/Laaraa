import React from 'react'
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

function PlanCard({data}:any) {
  return (
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
  )
}

export default PlanCard

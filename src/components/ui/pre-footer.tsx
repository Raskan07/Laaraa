import React from 'react'
import { GiPathDistance } from "react-icons/gi";
import { BsCollection } from "react-icons/bs";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";

function PreFooter() {
    const data = [
        {
            id:"01",
            title:"AI-Powered Route Optimization",
            dsc:"Utilize AI for optimal travel routes. Our app ensures a seamless journey, calculating the best paths, travel times, and distances for city tours or cross-country road trips.",
            icon:<GiPathDistance className='text-[100px]' />
        },
        {
            id:"02",
            title:"All-in-One Travel Organizer",
            dsc:"Simplify travel planning with our all-in-one platform. Trip Planner AI consolidates hotel and flight details, manages bookings, and imports tips and guides. Organize all trip details in one place.",
            icon:<AiOutlineCodeSandbox className='text-[100px]' />
        },
        {
            id:"03",
            title:"Collaborative Group Planning Made Easy",
            dsc:"Collaborate on itineraries with companions. Our real-time feature makes group travel planning effortless, ensuring everyone stays informed and involved in the process.",
            icon:<FaMapLocationDot className='text-[100px]' />
        }
    ]
  return (
    <div className="flex flex-col items-center mt-[40px] mb-[20px] ">

        {/* containet 01 */}
        <div className="flex flex-col items-center">
            <h2 className='font-nn text-[1.875rem] py-1'>Customized <span className=" text-[2rem] font-black px-3 bg-fuchsia-400 font-roboto">Itineraries</span>  for Every Travel Dream</h2>
            <p className='text-gray-700 leading-6 capitalize font-roboto text-[17px] md:w-[60%] md:text-center text-start mt-[25px] mb-[70px]'>Trip Planner AI is your ultimate companion for any travel scenario. Whether it's a solo adventure, a family vacation, or a group expedition, our app tailors every aspect of your journey. Experience the convenience of:</p>
            </div>
        {/* containet 02 */}
        {/* <div className="flex flex-row items-center justify-between">
            {data.map((item:any) => (
                <div className="m-3 mx-2 flex flex-col items-center text-center  w-[30%] h-[230px]">
                    {item?.icon}
                    <h2 className='text-[1.5rem] font-black px-3 font-roboto '>{item.title}</h2>
                </div>
            ))}
        </div> */}
      
    </div>
  )
}

export default PreFooter;

import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col items-center mt-[40px] mb-[20px]">
    <div className="border border-t-[0.5px] border-gray-200 h-[0.5px]  mb-[20px] w-[100vw] " />
      {/* container -1  */}
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div className="my-[20px]">
          <img  className="w-[120px] h-[50px]" src="/logo1.png"/>
          <p className="font-nn text-start mt-[12px] text-[18px] font-[500] text-gray-600 md:w-[60%] ">Turn your next trip into a hassle-free experience with Trip Planner AI.</p>
          

          <p className="font-nn  mt-[5px] text-[18px] font-[500] text-gray-600 md:w-[60%] text-start">A product by <span className="font-bold text-black px-2 bg-lime-200">Aceternity</span></p>
          <p className="font-nn  mt-[5px] text-[18px] font-[500] text-gray-600 md:w-[60%] text-start">Building in public at <span className="font-bold text-black px-2 bg-lime-200">@raskan</span></p>

        </div>

        <div className="flex flex-row items-center justify-between gap-5 mt-[20px] md:mt-[2px]">
          <ul>
            <li className="font-roboto font-bold text-[20px]">Legal</li>
            <li className="font-roboto text-[17px] hover:underline cursor-pointer text-gray-700 mt-[5px]">Tearm and Condition</li>
            <li className="font-roboto text-[17px] hover:underline cursor-pointer text-gray-700 mt-[5px]">Privacy  Policy</li>
          </ul>
          <ul>
            <li className="font-roboto font-bold text-[20px]">Soppurt</li>
            <li className="font-roboto text-[17px] hover:underline cursor-pointer text-gray-700 mt-[5px]">Contact Us</li>
            <li className="font-roboto text-[17px] hover:underline cursor-pointer text-gray-700 mt-[5px]">Sponsor</li>
          </ul>
          <ul>
            <li className="font-roboto font-bold text-[20px]">Itinerails</li>
            <li className="font-roboto text-[17px] hover:underline cursor-pointer text-gray-700 mt-[5px]">Community Trips</li>
            <li className="font-roboto text-[17px] hover:underline cursor-pointer text-gray-700 mt-[5px]">Find Trips</li>
          </ul>
        </div>
      </div>

      <div className="border border-t-[0.5px]  border-gray-100  w-full  mb-[20px] mt-[60px]  " />
      {/* container -2  */}

      <div className="w-full flex flex-row items-start">
        <p className="text-start text-gray-600">© 2023 Trip Laara AI. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer

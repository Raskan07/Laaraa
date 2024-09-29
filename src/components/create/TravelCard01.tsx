import React from 'react'



function TravelCard01({item}:any) {
  return (
    <div className="md:w-[165px] flex flex-col items-center gap-2 md:gap-0 my-[10px] md:mt-[0px]">
      <img className="md:size-[160px] rounded-xl"  src={item?.imgUrl}/>
      <div className="flex flex-col items-start w-full ml-1 mt-[5px]">
        <p className="font-bold font-nn text-[17px] text-start">{item?.place}</p>
        <p className="font-[300] font-nn text-[14px] text-gray-600 text-start">{item?.city}</p>
      </div>
    </div>
  )
}

export default TravelCard01

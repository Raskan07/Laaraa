import React from 'react'

type Props = {
  title:string,
  src:string,
  desc?:string
}

function Bannercard({title,src,desc}:Props) {
  return (
    <div className='w-[340px] rounded-lg h-[200px] mb-3 border-1 border  flex flex-col items-start '>
      <div className="p-5">
      <div className="flex flex-row items-start gap-5 ">
        <img  src={src} className="size-[80px]"/>
        <p className="text-[1.5rem] font-anton text-[#212121]">{title}</p>
      </div>
      <p className="text-[1.0rem] mt-[10px] font-roboto text-gray-700 w-[300px]">{desc}</p>
      </div>
    </div>
  )
}

export default Bannercard

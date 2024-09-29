import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?:string,
    children:React.ReactNode
}

function Heading({className,children}:Props) {
  return (
    <h1 className={twMerge("font-anton md:text-[3rem] text-[2rem] text-[#212121]   tracking-wide ",className)}>
      {children}
    </h1>
  )
}

export default Heading

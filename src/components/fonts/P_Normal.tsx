import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?:string,
    children?:React.ReactNode
}

function P_Normal({className,children}:Props) {
  return (
    <h3 className={twMerge("md:text-[1.5rem] text-[16px]  font-nn font-[500] ",className)}>
    {children}
  </h3>
  )
}

export default P_Normal

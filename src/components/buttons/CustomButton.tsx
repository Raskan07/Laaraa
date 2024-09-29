"use client"

import React from 'react'
import { GiPathDistance } from "react-icons/gi";
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

type Props = {
  className?:string,
  title:string,
  path?:string
}




function CustomButton({className,title,path}:Props) {

const router = useRouter();
  return (
    <motion.div onClick={() => router.push(`${path}`) } initial={{ opacity: 0, scale: 0.2 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: "linear", }} className='flex flex-row items-center bg-gradient-to-br  font-roboto from-emerald-800  to-green-900 px-6 py-3 hover:opacity-90 cursor-pointer rounded-full shadow-sm  text-white gap-2 mt-[25px] text-[18px] '>
      <GiPathDistance className=''/>
      <p className='leading-7 font-[400]'>{title}</p>
    </motion.div>
  )
}

export default CustomButton

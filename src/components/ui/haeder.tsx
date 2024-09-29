import React from 'react'
import { Button } from './button'
import P_Normal from '../fonts/P_Normal'

function Header() {
  return (
    <div className='flex flex-row items-center justify-between py-[30px]'>
      <div className='flex flex-row bg-red-300 items-center '>
        <img  src='/logo1.png' alt='logo' className='w-[120px] h-[40px]'/>
      </div>
      <div className='flex flex-row gap-3'>
        <Button size={"lg"} variant="ghost" className='text-[16px] rounded-full font-noraml hidden md:flex'>Community Trips</Button>
        <Button size={"lg"} className='text-[16px] rounded-full font-noraml'>Sign in</Button>
      </div>
    </div>
  )
}

export default Header

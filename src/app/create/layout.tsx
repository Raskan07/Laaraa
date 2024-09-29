"use client"
import type { Metadata } from "next";
import { Progress } from '@/components/ui/progress';
import { useGetPlaceStore } from "../../../store";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>
)

{
  const {value,progressValue,setProgressValue} = useGetPlaceStore()

  
  return (
      <div
      className="flex flex-col items-center"
      >
      { progressValue > 0  && (<Progress value={progressValue} className='mt-[10px]' />)}
        {children}
      </div>
  );
}

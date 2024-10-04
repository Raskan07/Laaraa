"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Hairy from '../components/3d/Hairy';
import H1 from "@/components/fonts/H1";
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import CustomButton from "@/components/buttons/CustomButton";
import StickyNoteAnimation from "@/components/animations/StickyNoteAnimation";
import Hero from "@/components/pages/Hero";
import PreFooter from "@/components/ui/pre-footer";
import Footer from "@/components/ui/footer";
import { GoogleLogin,useGoogleLogin,useGoogleOneTapLogin } from '@react-oauth/google';



export default function Home() {
  const router = useRouter()

  useGoogleOneTapLogin({
    onSuccess: credentialResponse => console.log("One Tap Success:", credentialResponse),
    onError: () => console.log("One Tap Login Failed"),
  });
  
  return (
    <div className="flex flex-col items-center mt-[50px]">
      <h1 className="font-anton md:text-[4.5rem] text-[2.5rem]  text-center text-[#212121]">Your Next Journey, Optimized</h1>
      <p className="font-nn text-center mt-[12px] md:text-[20px] text-[17px] font-[500] text-gray-600">Build, personalize, and optimize your itineraries with our free AI trip planner. <br/> Designed for vacations, workations, and everyday adventures.</p>
      <CustomButton title="Create a new trip" path="/create" className="" />
      <Hero />
      <PreFooter />
    </div>
  );
}

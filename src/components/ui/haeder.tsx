"use client";
import React from "react";
import { Button } from "./button";
import P_Normal from "../fonts/P_Normal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleLogin,
  useGoogleLogin,
  useGoogleOneTapLogin,
} from "@react-oauth/google";
import { useAuthStore } from "../../../store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from 'next/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {
  // @ts-ignore
  const { onGetData, userSignIn, isLogin, data ,onAuth_firebase , signOut} = useAuthStore();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => onGetData(tokenResponse),
  });

    const router = useRouter()
  


  return (
    <div className="flex flex-row items-center justify-between py-[30px]">
      <div className="flex flex-row bg-red-300 items-center ">
        <img src="/logo1.png" alt="logo" className="w-[120px] h-[40px]" onClick={() => router.push("/")} />
      </div>
      <div className="flex flex-row gap-3">
        <Button
          size={"lg"}
          variant="ghost"
          className="text-[16px] rounded-full font-noraml hidden md:flex"
        >
          Community Trips
        </Button>

        {userSignIn ? (
          <div className="flex flex-col items-center">
 <Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AvatarFallback>CN</AvatarFallback>
          <AvatarImage src={data?.photoURL ? data?.photoURL : "/profile.jpg"} />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="DropdownMenuContent bg-white rounded-lg shadow-lg py-2 w-[175px] flex flex-col items-start justify-start text-sm"
          sideOffset={5}
        >
          <DropdownMenuLabel className="px-4 py-2 font-semibold text-gray-700">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="my-1 border-gray-300" />
          <DropdownMenuItem className="px-4 py-2 font-roboto hover:bg-gray-100 md:w-full cursor-pointer">
            My Trips
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 font-roboto hover:bg-gray-100 md:w-full  cursor-pointer">
            Write a review
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 hover:bg-gray-100 md:w-full  cursor-pointer">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 font-roboto hover:bg-gray-100 md:w-full  cursor-pointer">
            Bookings
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 font-roboto hover:bg-gray-100 md:w-full  cursor-pointer">
            Messages
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 font-roboto hover:bg-gray-100  md:w-full cursor-pointer">
            Account info
          </DropdownMenuItem>
          <DropdownMenuItem className="px-4 py-2 font-roboto hover:bg-gray-100 md:w-full  cursor-pointer text-red-500">
            <button onClick={() => signOut()}>Sign out</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Avatar>
            {/* <p className="text-sm mt-[2px] text-nn text-gray-700">{data?.name}</p> */}
          </div>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size={"lg"}
                className="text-[16px] rounded-full font-noraml"
              >
                Sign in
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]  w-[90%] rounded-md">
              <div className="flex flex-col items-center justify-center">
                {/* logo */}
                <div className="flex flex-row items-center justify-start ">
                  <img src={"/logo1.png"} className="w-[100px] " />
                </div>

                <h2 className="font-anton text-[1.5rem] mt-[15px]">Sign In</h2>
                {/* description */}
                <p className="text-md text-gray-600 text-center font-nn w-[80%]">
                  Sign in to save your trip plans and access them on any device.
                </p>
                {/* sign In Button */}

                <button
                  onClick={onAuth_firebase}
                  className="flex flex-row items-center md:mt-[40px]   mt-[15px] px-[25px] p-2 md:w-[80%] gap-2 justify-center border border-1 rounded-full shadow-sm  hover:bg-gray-50"
                >
                  <FcGoogle className={"text-[24px]"} />
                  <p className="text-gray-900">Continue with Google</p>
                </button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default Header;

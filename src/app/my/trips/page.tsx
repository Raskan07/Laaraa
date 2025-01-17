"use client";
import H1 from "@/components/fonts/H1";
import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import MyTripCard from "@/components/cards/MyTripCard";
import { useRouter } from "next/navigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuthStore } from "../../../../store";

function Trips() {
  // @ts-ignore
  const { auth_data } = useAuthStore();
  const [data, setData] = useState<any[]>([]);
  const [docId, setDocId] = useState("");

  const router = useRouter();

  const GetTrips = async () => {
    // Check if auth_data and auth_data.email exist
    if (!auth_data || !auth_data.email) {
      console.error("auth_data is not available");
      return; // Exit early if there's no auth data
    }

    const q = query(
      collection(db, "AI_Trips"),
      where("auth.email", "==", auth_data?.email)
    );

    try {
      const querySnapshot = await getDocs(q);
      const tripsArray: any[] = [];
      querySnapshot.forEach((doc) => {
        console.log("my Trips data", doc.id, " => ", doc.data());
        tripsArray.push({ ...doc.data(), docId: doc.id });
      });
      setData(tripsArray); // Update the state with the full array of trips
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  useEffect(() => {
    GetTrips();
  }, [auth_data]); // Make sure this runs when auth_data changes

  return (
    <div className="">
      {/* title of page */}
      <H1 className="">My Trips</H1>

      {/* create a new trip */}
      <button
        onClick={() => router.push("/create")}
        className="flex flex-row items-center mt-[40px] mb-[18px] justify-center gap-3 w-full border-1 border md:h-[200px] h-[100px] rounded-lg"
      >
        <GoPlus className="md:text-2xl text-lg text-gray-700" />
        <h2 className="tmd:ext-2xl text-lg text-gray-600 font-roboto">Create New Trip</h2>
      </button>

      {/* Trips Card */}
      <div className="w-full flex flex-col items-center">
        {data?.map((item, index) => (
          <MyTripCard key={index} tripData={item} docId={item.docId} />
        ))}
      </div>
    </div>
  );
}

export default Trips;

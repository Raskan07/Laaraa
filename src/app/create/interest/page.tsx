"use client";
import React, { useState } from "react";
import H1 from "@/components/fonts/H1";
import P_Normal from "@/components/fonts/P_Normal";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  useGetPlaceStore,
  useDataStore,
  useAuthStore,
} from "../../../../store";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Interest() {
  const datas = [
    {
      category: "Cultural and Historical Attractions",
      items: [
        "Museums",
        "Historical landmarks",
        "UNESCO World Heritage Sites",
        "Temples, Churches, Mosques",
        "Local festivals",
        "Traditional villages",
        "Palaces and royal residences",
        "Archaeological sites",
      ],
    },
    {
      category: "Natural Attractions",
      items: [
        "National parks",
        "Mountains and volcanoes",
        "Beaches",
        "Lakes and rivers",
        "Deserts",
        "Caves and caverns",
        "Forests and jungles",
        "Waterfalls",
      ],
    },
    {
      category: "Adventure and Outdoor Activities",
      items: [
        "Hiking and trekking",
        "Skiing and snowboarding",
        "Scuba diving and snorkeling",
        "Paragliding, skydiving, zip-lining",
        "Rock climbing",
        "Safari and wildlife tours",
        "Rafting, kayaking, and canoeing",
        "Cycling and biking tours",
      ],
    },
    {
      category: "City Tours and Urban Exploration",
      items: [
        "City sightseeing",
        "Walking tours",
        "Public markets",
        "Street food tours",
        "Nightlife",
        "Architecture",
      ],
    },
    {
      category: "Food and Culinary Experiences",
      items: [
        "Local cuisine",
        "Food festivals",
        "Cooking classes",
        "Wine tasting tours",
        "Street food and night markets",
      ],
    },
    {
      category: "Religious and Spiritual Experiences",
      items: [
        "Pilgrimage sites",
        "Retreats and meditation",
        "Temples and religious ceremonies",
      ],
    },
    {
      category: "Shopping and Souvenir Hunting",
      items: [
        "Shopping malls and districts",
        "Local handicrafts",
        "Souvenir shops",
        "Flea markets",
      ],
    },
    {
      category: "Festivals and Events",
      items: [
        "Music festivals",
        "Cultural festivals",
        "Film festivals",
        "Carnivals and parades",
      ],
    },
    {
      category: "Cruises and Island Hopping",
      items: ["River or ocean cruises", "Island hopping"],
    },
    {
      category: "Health and Wellness Tourism",
      items: ["Spa retreats", "Hot springs", "Yoga and meditation retreats"],
    },
    {
      category: "Art and Entertainment",
      items: [
        "Theater and opera",
        "Art galleries and exhibitions",
        "Street performances",
        "Film locations",
      ],
    },
    {
      category: "Luxury Travel",
      items: ["High-end resorts", "Private tours", "Gourmet dining"],
    },
    {
      category: "Volunteer and Educational Tourism",
      items: ["Conservation projects", "Community volunteering", "Study tours"],
    },
  ];

  const {
    setProgressValue,
    setInterests,
    value,
    startDate,
    endDate,
    interests,
    tripType,
  } = useGetPlaceStore();
  

  const promt2 = `create a JSON file . that has 3 separates arrays of items and name of place  that should be string and description about the place , first hotels that must contain : {name of the hotel, description, imgUrl, rating, fees,opening hours , geo coords:{lat,lang} , contact information, tickets } , second item is activity , create a trip plan based on this information : ${value?.label}, ${tripType}, duration of trip starts ${startDate} to ${endDate} , my interests in ${interests.map((item) => item)} the activity array seems should be : trip_plan : [
{
day:"oct 11 2024",
activites : [{
placeName: "string", 
address: "string", 
contact: "string", 
rating: "number", 
geoCoords: { lat: "number", lang: "number" }, 
description: "string", 
whatToDo: "string", 
ticketFees: "number", 
openingHours: "string", 
images: ["string", "string"] 
}]
}
] and finally create weather array , that has all weather information about the place and day
so all looks like : {
place:"",
description:"",
hotels:[],
trip_plan:[],
weather:[]`;
  const [interest, setInterest] = useState([]);
  const router = useRouter();

  const [uploadLoading, setUploadLoading] = useState(false);

  console.log("loading", uploadLoading);
  // @ts-ignore
  const { auth_data } = useAuthStore();
  // @ts-ignore
  const { onGetData, data, loading } = useDataStore();
  // @ts-ignore

  const GeneratePromt = () => {
    setUploadLoading(true);
    setInterests(interest); // Assuming `interest` is properly initialized and managed
    setProgressValue(100);
    onGetData(promt2);
    setUploadLoading(false);
  };

  const onHandleSelection = (name: any) => {
    setInterest((prevInterests) => {
      // Avoid duplicates
      if (!prevInterests.includes(name)) {
        return [...prevInterests, name];
      }
      return prevInterests;
    });
  };

  const onHandleRoute = async () => {
    const docId = Date.now().toString();

    // Ensure that 'data' exists and is not empty
    if (data) {
      try {
        await setDoc(doc(db, "AI_Trips", docId), {
          auth: auth_data, // array of data
          ai_generates: data, // array of data
          entries: {
            trip_start_date: startDate,
            trip_end_date: endDate,
            placeData: value, // array of data
            interests: interests,
            tripType: tripType,
          },
        });

        setUploadLoading(false);
        router.push(`/trip-builder/${docId}`);
      } catch (e) {
        console.error("Error adding document: ", e);
        setUploadLoading(false); // Ensure the loading stops on error
      }

      const GeneratePromt = () => {
        setUploadLoading(true);
        setInterests(interest); // Assuming `interest` is properly initialized and managed
        setProgressValue(100);
        onGetData(promt);
        setUploadLoading(false);
      };
    } else {
      console.error("Data is missing or empty, cannot proceed.");
      setUploadLoading(false); // Stop loading if data is missing
    }
  };

  return (
    <div className="mt-[60px] w-full text-center justify-center flex flex-col items-center">
      <H1 className="">Tell us. what you're interested in</H1>
      <P_Normal className="text-gray-600 text-center">
        Select that all apply
      </P_Normal>

      <div className="mt-[40px] w-full grid md:grid-cols-4 items-center">
        {datas.map((item, index) => (
          <Popover key={index}>
            <PopoverTrigger asChild>
              <h2
                className={`m-2 inline-block border border-1 p-3 px-[10px] rounded-full text-nn cursor-pointer ${
                  item.items.some((subItem) => interest.includes(subItem))
                    ? "bg-green-400"
                    : ""
                }`}
              >
                {item?.category}
              </h2>
            </PopoverTrigger>
            <PopoverContent className="">
              {item?.items.map((subItem: any, subIndex) => (
                <div
                  key={subIndex}
                  className={`p-2 cursor-pointer ${
                    interest.includes(subItem)
                      ? "bg-green-300 rounded-full my-1"
                      : ""
                  } `}
                  onClick={() => onHandleSelection(subItem)}
                >
                  {subItem}
                </div>
              ))}
            </PopoverContent>
          </Popover>
        ))}

        <div className="m-2 border border-1 p-3 px-[10px] rounded-full text-nn flex flex-row gap-2 items-center justify-center">
          <AiOutlinePlus />
          <p>Add interest</p>
        </div>
      </div>

      <div className="w-full flex flex-row items-end  justify-end mt-[60px] mb-[20px]">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={GeneratePromt}
              className="px-10 py-[20px] rounded-full"
              disabled={!interest && uploadLoading}
            >
              {uploadLoading ? "Generating..." : "Next"}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]  w-[90%] rounded-md">
            <div className="flex flex-col items-center justify-center">
              {/* logo */}
              <div className="flex flex-row items-center justify-start ">
                <img src={"/logo1.png"} className="w-[100px] " />
              </div>

              <h2 className="font-anton text-[1.5rem] mt-[15px]">
                {loading ? "Hold a Moment" : "Thank you for patience"}
              </h2>
              {/* description */}
              <p className="text-md text-gray-600 text-center font-nn w-[80%]">
                {loading ? "loading.... we are working on it" : "done"}
              </p>
              {/* sign In Button */}

              <button
                className="flex flex-row items-center md:mt-[40px]   mt-[15px] px-[25px] p-2 md:w-[80%] gap-2 justify-center border border-1 rounded-full shadow-sm  hover:bg-gray-50"
                disabled={loading}
                onClick={onHandleRoute}
              >
                {!loading ? (
                  "submit"
                ) : (
                  <p className="flex flex-row gap-2 items-center">
                    {" "}
                    Generating{" "}
                    <AiOutlineLoading3Quarters className="text-gray-700 animate-spin" />{" "}
                  </p>
                )}
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Interest;

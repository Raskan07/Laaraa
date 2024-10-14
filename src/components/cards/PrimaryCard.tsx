import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { GetPlaceDetails } from "@/lib/GloabalAPI";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  isPrimaryCard?: Boolean;
  data?: any;
};

function PrimaryCard({ isPrimaryCard, data }: Props) {
  const [imageURL, setImageURL] = useState<string>();
  const [imageLoading, setImageLoaing] = useState(false);

  const onGetImage = () => {
    if (!data?.placeName || data?.placeName == "undefined") {
      console.log("Label is undefined, skipping image fetch.");
      return;
    }

    setImageLoaing(true);

    GetPlaceDetails(data?.placeName).then((res) => {
      console.log("respose", res.data?.result?.results[0]);
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&maxheight=800&photo_reference=${res.data?.result?.results[0]?.photos[0]?.photo_reference}&key=AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc`;
      console.log("photoUrl", photoUrl);
      setImageURL(photoUrl);
      setImageLoaing(false);
    });
  };

  useEffect(() => {
    data && onGetImage();
  }, [data?.placeName]);

  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-[90vw] md:w-[270px] ">
          {/* image */}
          <div
            className="w-full md:w-[270] h-[220px] hover:opacity-90 bg-gray-100  no-repeat  rounded-md"
            style={{
              backgroundImage: `url('${imageURL}')`,
            }}
          >
            {/* header */}
            {isPrimaryCard && (
              <div className="w-full  mt-[20px] pt-[5px] flex flex-row items-end justify-end">
                <div className="rounded-full size-[36px] bg-white flex items-center justify-center m-[10px] ">
                  <CiHeart className="size-[20px]" />
                </div>
              </div>
            )}

            {!isPrimaryCard && (
              <div className="font-extrabold text-[27px] h-[95%] flex items-end justify-end">
                <p className="w-[90%] text-white">Top Expereience</p>
              </div>
            )}
          </div>

          {/* footer */}
          {isPrimaryCard && (
            <div className="mt-3">
              {/* title */}
              <p className="w-[98%] text-[17px] font-bold font-roboto text-start capitalize leading-[1.2]">
                {data?.placeName}
              </p>
              <p className="text-[15px] text-start text-gray-700 font-roboto ">
                {data?.description?.slice(0, 30)}...
              </p>
              {/* rating */}
              <div className="flex flex-row items-center gap-2">
                <IoIosStar className="text-yellow-400" />
                <p className="text-sm font-roboto text-gray-700">
                  {data?.rating} rating
                </p>
              </div>
              {/* contact us */}
            </div>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll h-full no-scrollbar w-[98vw] md:w-[600px] lg:w-[800px]">
        <SheetHeader>
          <img
            src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
            className="w-[100%] h-[260px] mt-[30px] rounded-md"
          />

          <div className="mt-[30px]">
            {/* title and rating */}
            <div className="mt-[20px]">
              <h2 className="font-anton text-2xl w-[90%] text-start">Crabing Factory</h2>
              <div className="flex flex-row gap-2 items-center">
                <IoIosStar className="text-yellow-400" />{" "}
                <p className="font-roboto font-[400] text-start">4.5 rating</p>
              </div>

              {/* overview */}
              <div className="mt-[30px]">
                <h2 className="text-[10px] font-[200] text-start ">Overview</h2>
                <p className="text-sm text-gray-600 font-roboto text-start">
                  Amangalla is a luxurious and historic hotel located within the
                  UNESCO World Heritage-listed Galle Fort in southern Sri Lanka.
                  This hotel is part of the renowned Aman Resorts group and is
                  known for its colonial charm, elegant interiors, and top-tier
                  service. Here’s an overview of what makes Amangalla stand out:
                </p>
              </div>

              {/* maps */}
              <div className="w-full h-[200px] bg-gray-300 mt-[20px] rounded-md"></div>

              {/* bar */}
              <div className="h-[1px] mt-[20px] w-full bg-gray-100 mb-[15px]" />

              {/*Reviews  */}
              <h2 className="text-[10px] font-[200] text-start ">Rating & Reviews</h2>
              <div className="flex flex-row gap-2 items-center mb-[25px]">
                <IoIosStar className="text-yellow-400" />{" "}
                <p className="font-roboto font-[400]">4.5 rating</p>
              </div>

              {/* review card */}
              <div className="w-full border border-1 mt-[10px] rounded-md ">
                <div className="p-2 flex flex-row items-center">
                  <img
                    src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
                    className="size-[40px] rounded-full "
                  />
                  <div className="ml-3">
                    <p className="text-[11px] text-gray-400">
                      software engineer
                    </p>
                    <p className="mt-[-3px] font-roboto">name name</p>
                  </div>
                </div>

                <p className="w-[100%] text-gray-600 md:text-sm text-[12px] p-3 font-roboto text-start">
                  'This approach will give you a smooth, scrollable container
                  without the visual clutter of a default scrollbar. You can
                  still scroll using the mouse wheel, trackpad, or touch'
                </p>
              </div>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default PrimaryCard;

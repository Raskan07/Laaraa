import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { GetPlaceDetails,GetPlaceInfo } from "@/lib/GloabalAPI";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import CustomMap from "../ui/map";


type Props = {
  isPrimaryCard?: Boolean;
  data?: any;
};

function PrimaryCard({ isPrimaryCard, data }: Props) {
  const [imageURL, setImageURL] = useState<string>();
  const [imageLoading, setImageLoaing] = useState(false);
  const [place_ID,setPlace_ID] = useState<string>("")
  const [placeInfo,setPlaceInfo] = useState([])

  const onGetImage = () => {
    if (!data?.placeName || data?.placeName == "undefined") {
      console.log("Label is undefined, skipping image fetch.");
      return;
    }

    setImageLoaing(true);

    GetPlaceDetails(data?.placeName).then((res) => {
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&maxheight=800&photo_reference=${res.data?.result?.results[0]?.photos[0]?.photo_reference}&key=AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc`;
      console.log("photoUrl", photoUrl);
      setImageURL(photoUrl);
      setImageLoaing(false);
      setPlace_ID(res.data?.result?.results[0]?.place_id)
    });
  };



  const OnGetPlaceInfo = () => {
    GetPlaceInfo(place_ID)
        .then(res => {
            console.log("response data comes", res?.data?.result);
            setPlaceInfo(res?.data?.result?.result)
        })
        .catch(err => {
            console.error("Error fetching place info", err);
        });
      }


  console.log(placeInfo?.formatted_address)

  useEffect(() => {
    data && onGetImage();
    place_ID && OnGetPlaceInfo()
  }, [data?.placeName,place_ID]);

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

          <img 
          src={imageURL}
          className="w-full md:w-[270] h-[220px] hover:opacity-90 bg-gray-100   rounded-md"
          />
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

      <Carousel>
      <CarouselContent>
        {
          placeInfo?.photos?.map((item,index) => (
            <CarouselItem key={index}>
              <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&maxheight=800&photo_reference=${item?.photo_reference}&key=AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc`}
            className="w-[100%] h-[260px] mt-[30px] rounded-md"
          />
            </CarouselItem>
          ))
        }
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


          

        <SheetHeader>

          <div className="mt-[30px]">
            {/* title and rating */}
            <div className="mt-[20px]">
              <h2 className="font-anton text-2xl w-[90%] text-start">{placeInfo?.name	}</h2>
              <div className="flex flex-row gap-2 items-center">
                <IoIosStar className="text-yellow-400" />{" "}
                <p className="font-roboto font-[400] text-start">{placeInfo?.rating} rating</p>
              </div>

              {/* open */}
              <p className={`${placeInfo?.current_opening_hours?.open_now ? "bg-green-600" : "bg-red-600"} font-roboto font-[400] text-start inline-block text-white px-3 rounded-full mt-[10px]`}>{placeInfo?.current_opening_hours?.open_now ? "open" : "close"	} now</p>

              
              {/* types */}

              {/* <div className="grid grid-cols-2 gap-1 mt-[10px]">
              {
                placeInfo?.types?.map((item) => (
                  <Badge
              variant="secondary"
              className="text-sm text-gray-700 text-roboto font-[300] "
            >
              {item}
            </Badge>

                ))
              }

              </div> */}
              {/* overview */}
              {
                placeInfo?.editorial_summary?.overview	 && (
                <div className="mt-[30px] mb-[20px]">
                <h2 className="text-[10px] font-[200] text-start ">Overview</h2>
                <p className="text-sm text-gray-600 font-roboto text-start">
                  {placeInfo?.editorial_summary?.overview}
                </p>
              </div> )
              
            }

              {/* maps */}
              <CustomMap lat={placeInfo?.geometry?.location?.lat} lan={placeInfo?.geometry?.location?.lng} />

              {/* bar */}
              <div className="h-[1px] mt-[20px] w-full bg-gray-100 mb-[15px]" />

              {/*Reviews  */}
              <h2 className="text-[10px] font-[200] text-start ">Rating & Reviews</h2>
              <div className="flex flex-row gap-2 items-center mb-[25px]">
                <IoIosStar className="text-yellow-400" />{" "}
                <p className="font-roboto font-[400]">{placeInfo?.rating} rating and reviews</p>
              </div>

              {/* review card */}

              <div className="flex flex-col items-center w-full">

              {
                placeInfo?.reviews?.map((item,index) => (
                  <div key={index} className="w-full border border-1 mt-[10px] rounded-md ">
                <div className="p-2 flex flex-row items-center">
                  <Image
                    src={`${item.profile_photo_url ? item.profile_photo_url : "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}`}
                    className="size-[40px] rounded-full "
                    alt={"user"}
                    width={40}
                    height={40}
                  />
                  <div className="ml-3">
                    <p className="text-[11px] text-gray-400">
                      {item?.relative_time_description	}
                    </p>
                    <p className="mt-[-3px] font-roboto">{item?.author_name	}</p>
                  </div>
                </div>

                <p className="w-[100%] text-gray-600 md:text-sm text-[12px] p-3 font-roboto text-start">
                 {
                  item?.text	
                 }
                </p>
              </div>
                ))
              }

              </div>
              
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default PrimaryCard;

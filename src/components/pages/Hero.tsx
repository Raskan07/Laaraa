import React from 'react'
import StickyNoteAnimation from '../animations/StickyNoteAnimation'
import Heading from '../fonts/H1'
import Bannercard from '../cards/Bannercard'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const testimonials = [
    {
      "id": 1,
      "name": "John Doe",
      "feedback": "Laara AI made my trip to Japan unforgettable! The itinerary was perfectly tailored to my interests, and the restaurant recommendations were spot-on. Highly recommend it!",
      "user_profile_url": "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      "rating": 5,
      "profession": "Software Engineer"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "feedback": "I was amazed by how Laara AI seamlessly integrated my social media posts into the itinerary. It felt like having a personal travel agent!",
      "user_profile_url": "https://blog.texasbar.com/files/2013/09/JessicaMangrum_smaller1.jpg",
      "rating": 4,
      "profession": "Marketing Manager"
    },
    {
      "id": 3,
      "name": "David Lee",
      "feedback": "As a busy professional, I appreciated the time-saving aspect of Laara AI. It took care of all the planning, leaving me free to enjoy my vacation.",
      "user_profile_url": "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
      "rating": 5,
      "profession": "Financial Analyst"
    },
  
    {
      "id": 4,
      "name": "John Doe",
      "feedback": "Laara AI made my trip to Japan unforgettable! The itinerary was perfectly tailored to my interests, and the restaurant recommendations were spot-on. Highly recommend it!",
      "user_profile_url": "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
      "rating": 5,
      "profession": "Software Engineer"
    },
    {
      "id": 5,
      "name": "Jane Smith",
      "feedback": "I was amazed by how Laara AI seamlessly integrated my social media posts into the itinerary. It felt like having a personal travel agent!",
      "user_profile_url": "https://blog.texasbar.com/files/2013/09/JessicaMangrum_smaller1.jpg",
      "rating": 4,
      "profession": "Marketing Manager"
    },
    {
      "id": 6,
      "name": "David Lee",
      "feedback": "As a busy professional, I appreciated the time-saving aspect of Laara AI. It took care of all the planning, leaving me free to enjoy my vacation.",
      "user_profile_url": "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
      "rating": 5,
      "profession": "Financial Analyst"
    },
];


function Hero() {
  return (
    <div className=" mt-[150px] flex flex-col w-full items-center ">
        <StickyNoteAnimation />
        <h2 className="font-anton md:text-[3rem] text-[2rem]  text-white  px-[25px] rounded-md  md:absolute  tracking-wide bg-[#212121] right-[450px] text-center ">Your  <span className="text-fuchsia-400">AI-Powered</span> Trip</h2>
      {/* item -1 */}



      <div className='flex md:flex-row flex-col w-full  justify-around mt-[60px] mb-[20px] items-start'>
        <div className="md:w-[40vw] ">
            <h3 className="font-anton inline-block text-[1.85rem] font-[400]  bg-lime-200 px-2 my-4 ">The most optimal</h3>
            <p className='text-gray-700 leading-6 capitalize font-roboto text-[17px]'>Craft your perfect itinerary with Laara AI. Our advanced algorithms take into account your selected explore-sights, dining, and lodging preferences to create the optimal travel plan tailored just for you.</p>
        </div>
        <img className="size-[250px]" src="https://tripplanner.ai/_next/image?url=%2Fillustrations%2Fdestinations2.webp&w=256&q=75" />
      </div>

      {/* item -2 */}


      <div className='flex md:flex-row  flex-col w-full  justify-around mt-[60px] mb-[20px] items-start'>
        <img className="size-[250px]" src="https://tripplanner.ai/_next/image?url=%2Fillustrations%2Fmap.webp&w=256&q=75" />
        <div className="md:w-[40vw] ">
            <h3 className="font-anton inline-block text-[1.85rem] font-[400]  bg-lime-200 px-2 my-4 ">Get Inspired </h3>
            <p className='text-gray-700 leading-6 capitalize font-roboto text-[17px]'>Extract valuable travel insights from Instagram reels and TikToks, explore the mentioned explore-sights, and effortlessly include them in your own adventure with Laara AI.</p>
        </div>
      </div>


      {/* plan */}
      <Heading className="mt-[40px] mb-[15px]">
      The only tool youll ever need!
      </Heading>
      <p className='text-gray-700 leading-6 capitalize font-roboto text-[17px] md:w-[50%] md:text-center text-start mt-[5px] mb-[70px]'>Say goodbye to the stress of planning and hello to personalized <br/> recommendations, efficient itineraries, and seamless dining experiences.</p>

      <div className='w-full flex md:flex-row flex-col items-center justify-between mb-[25px]'>
        <Bannercard title={"Optimal Route Planning"} src={"https://tripplanner.ai/_next/image?url=%2Fillustrations%2Fmap.webp&w=384&q=75"} desc="Our AI algorithms analyze your preferences to craft the most efficient route, saving you time and effort."  />
        <Bannercard title={"Personalize Your Adventure"} src={"https://tripplanner.ai/_next/image?url=%2Fillustrations%2Fstory.webp&w=384&q=75"} desc="Shape your journey by freely adding, editing, or deleting activities from your itinerary."  />
        <Bannercard title={"Local Cuisine Recommendations"} src={"https://tripplanner.ai/_next/image?url=%2Fillustrations%2Ffood.webp&w=384&q=75"} desc="Discover local cuisines and hidden gems recommended by our AI, tailored to your taste buds."  />
      </div>


      {/* feedback */}

      <Heading className="mt-[60px] mb-[15px] text-center">
      Dont take our word for it
      </Heading>
      <p className='text-gray-700 leading-6 capitalize font-roboto text-[17px] md:w-[50%] md:text-center text-start  mt-[5px] mb-[70px]'>See what our users have to say about revolutionizing their travel experiences with Laara AI.</p>

      <div className="mt-[10px] mb-[30px] ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>


    </div>
  )
}

export default Hero

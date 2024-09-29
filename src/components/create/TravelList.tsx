import React from 'react'
import TravelCard01 from './TravelCard01'

function TravelList() {
    const data = [
        {
          id: "1",
          place: "Taj Mahal",
          city: "Agra, India",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2d/1d/0f/img-20161230-041500-366.jpg?w=300&h=300&s=1",
        },
        {
          id: "2",
          place: "Eiffel Tower",
          city: "Paris, France",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2d/1d/0f/img-20161230-041500-366.jpg?w=300&h=300&s=1",
        },
        {
          id: "3",
          place: "Colosseum",
          city: "Rome, Italy",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2d/1d/0f/img-20161230-041500-366.jpg?w=300&h=300&s=1",
        },
        {
          id: "4",
          place: "Great Wall of China",
          city: "Beijing, China",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2d/1d/0f/img-20161230-041500-366.jpg?w=300&h=300&s=1",
        },
        {
          id: "5",
          place: "Machu Picchu",
          city: "Cusco, Peru",
          imgUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2d/1d/0f/img-20161230-041500-366.jpg?w=300&h=300&s=1",
        },
      ];
  return (
    <div className="w-full p-2 mt-[75px] mb-[40px] flex md:flex-row flex-col   items-center justify-between">
        {
            data.map((item) => (
                <TravelCard01 item={item} />
            ))
        }
    </div>
  )
}

export default TravelList

import React from 'react'
import TravelCard01 from './TravelCard01'

function TravelList() {
    const data = [
        {
          id: "1",
          place: "Taj Mahal",
          city: "Agra, India",
          imgUrl: "https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg",
        },
        {
          id: "2",
          place: "Eiffel Tower",
          city: "Paris, France",
          imgUrl: "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
        },
        {
          id: "3",
          place: "Colosseum",
          city: "Rome, Italy",
          imgUrl: "https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK.jpg",
        },
        {
          id: "4",
          place: "Great Wall of China",
          city: "Beijing, China",
          imgUrl: "https://parametric-architecture.com/wp-content/uploads/2024/08/Great-Wall-of-China-Puk-Khantho.webp",
        },
        {
          id: "5",
          place: "Machu Picchu",
          city: "Cusco, Peru",
          imgUrl: "https://www.peru.travel/contenido/atractivo/imagen/en/172/1.1/principal/machu-picchu.jpg",
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

"use client"
import React,{useState} from 'react'
import H1 from '@/components/fonts/H1'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"
import { onGetData } from '@/lib/Ai-modal';
import useOnHandleAI from '@/hooks/useOnHandleAI';
import { useDataStore,useGetPlaceStore } from '../../../store';
import EntryOneCompoent from '@/components/create/EntryOneCompoent';
import { Progress } from '@/components/ui/progress';
import EntryTwoComponent from '@/components/create/EntryTwoComponent'

function CreateTrip() {
  const [days,setDays] = useState<any|number>()
  const [people,setPeople] = useState<any|string>()
  const [budget,setBudget] = useState<any|string>()
  const [progress,setProgress] =  useState<any|number>(0)
  // @ts-ignore
  const {value,progressValue,setProgressValue} = useGetPlaceStore()


  const tripType = ["solo trip","partner trip" , "friends trip" ,"family trip" ]
  const interstes = ["food","culture","Must see Attraction","hidden gems","hiking and nature treaks","waterfall chasing","wine and bear","party"]

  const promt = `create a json file that suggest places and activity based on this information : place : ${value?.label} , solo trip , and i am interested in food , culture , adventure , bear , dance and sea sighting , create a trip plan for ${days} days must includes : image url for places , opening hours , contact information , rating  , tickets price , geo location coordinates`

  const {onHandlePromt} = useOnHandleAI(value)

  // @ts-ignore
  const {data,loading} = useDataStore()

  console.log("loading",loading)
  console.log("data",JSON.stringify(data?.trip,null,2))
  console.log("progressValue",typeof(progressValue))


  return (
    <div className='flex flex-col justify-center items-center'>
        <EntryOneCompoent />
    </div>
  )
}

export default CreateTrip


// <div className="flex flex-col items-center justify-center">
//       <H1 className=''>Create Trip</H1>
//       <div className='w-[400px] mt-[20px] flex flex-col'>
        {/* palces  */}
      {/* <GooglePlacesAutocomplete
      apiKey="AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc"
      selectProps={{
        value,
        onChange:(e) => setValue(e),
      }}
    /> */}

    {/* number of days */}
    {/* <Input placeholder='Number Of Days' className='mt-[20px]' value={days} onChange={(e) => setDays(e.target.value)}  />
    <Input placeholder='Number Of peoples' className='mt-[20px]' value={people} onChange={(e) => setPeople(e.target.value)}  />
    <Input placeholder='Budget $' className='mt-[20px]' value={budget} onChange={(e) => setBudget(e.target.value)}  /> */}

    {/* button for genearte  */}

    {/* <Button className="mt-[20px]" onClick={() => onHandlePromt(promt)}>Generate</Button> */}
    {/* </div>
    </div> */}

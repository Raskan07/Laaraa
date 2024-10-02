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


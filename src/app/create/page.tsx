"use client"
import React,{useState} from 'react'
import { useDataStore,useGetPlaceStore } from '../../../store';
import EntryOneCompoent from '@/components/create/EntryOneCompoent';


function CreateTrip() {

  return (
    <div className='flex flex-col justify-center items-center'>
        <EntryOneCompoent />
    </div>
  )
}

export default CreateTrip


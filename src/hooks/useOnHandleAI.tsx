import React from 'react'
import { useDataStore } from '../../store'

type Props = {
    label:string
}

function useOnHandleAI(value:Props) {
    //@ts-ignore
    const {onGetData} = useDataStore()

    const onHandlePromt = (p: string) => {
        if(!value?.label){
          console.log("please enter the place")
        }
        onGetData(p)
      }

      return {onHandlePromt}
}


export default useOnHandleAI

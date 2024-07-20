'use client'
import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Change = ({slug , rate}) => {
  
  const router = useRouter();
  const [date , setDate ]  = useState('');


  const handleOtherSubmit = async () => {
    try{
      const res = await axios.get('https://api-jgg9.onrender.com/api/disable' , {
        headers: {
          'token': slug
        },
        cache: 'no-store'
      });
      router.push('/')
    }catch(error){
      console.log(error)
    }
  }


  const handleEnable = async () => {
    try{
      const res = await axios.get('https://api-jgg9.onrender.com/api/enable' , {
        headers: {
          'token': slug
        },
        cache: 'no-store'
      });
      router.push('/')
    }catch(error){
      console.log(error)
    }
  }

  const handleSubmit = async () => {
    

    try{
      const res = await axios.post('https://api-jgg9.onrender.com/api/reserve' ,{id: slug , date:date});
      console.log(res.data);
      if(res.status == 200){
        window.location.realod();
      }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className=" static mx-auto mt-10 bg-white  rounded-lg overflow-hidden border-[0.5px]" style={{position: 'sticky !important'}}>
  <div className="text-2xl py-4 px-6  text-black text-start font-bold uppercase">
  €{rate && rate}/<sub className='text-[12px]'>per day</sub>
  </div>
  <div className="py-4 px-6">
    <div className='mb-4'>
        <ul>
            

        </ul>
    </div>
   
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
        Reservate a Day
      </label>
      <input  onChange={(e) => setDate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="Select a date" />
    </div>
    
   
    
   
   
    <div className="flex items-center justify-center mb-4">
    <button  onClick={handleSubmit} className="bg-red-600 w-full text-white py-2 px-4 rounded hover:bg-red-800 focus:outline-none focus:shadow-outline" >
        Reserve This Day
      </button>
     
    </div>


    <div className="flex items-center justify-center mb-4">
    <button  onClick={handleOtherSubmit} className="bg-red-600 w-full text-white py-2 px-4 rounded hover:bg-red-800 focus:outline-none focus:shadow-outline" >
    Make Car Unbookable
      </button>
     
    </div>

    <div className="flex items-center justify-center mb-4">
    <button  onClick={handleEnable} className="bg-red-600 w-full text-white py-2 px-4 rounded hover:bg-red-800 focus:outline-none focus:shadow-outline" >
    Make Car Bookable
      </button>
     
    </div>
  </div>
</div>
  )
}

export default Change
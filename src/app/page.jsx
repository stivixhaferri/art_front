import React from 'react'
import Mark from './(components)/Mark'
import Grid from './(components)/Grid'
import ResSearch from './(components)/ResSearch'
import Hero from './(components)/Hero'
import { Adder } from './(components)/Adder'
import Coffee from './(components)/Coffee'


const page = async () => {

  const data = await getData();
  
  const cars = data ? data.data : [];
  
  return (
    <div className='bg-[#F7F7F7]'>
      <div className="bg-black flex items-center w-full h-screen fixed top-0 left-0 right-0 bottom-0 ">
        <h2 className='text-2xl font-semibold w-full text-center'>Albanian Rental Tourims</h2>
        <p className='text-white w-full text-center'>Comming Soon</p>
      </div>
      <br />
      <Mark/>
      
      <Hero/>
      
      <ResSearch/>
      <div id='cars'>
      <Grid  cars={cars} />
      </div>
      
      <Adder/>
      <Coffee/>
    </div>
  )
}

export default page


const getData = async () => {
  try{
    const res = await fetch('https://api-jgg9.onrender.com/api/cars', {
      cache: 'no-store'
    });
    return res.json()
  }catch(error){
    return []
  }
}
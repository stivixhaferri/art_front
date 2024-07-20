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
    const res = await fetch('http://localhost:8000/api/cars', {
      cache: 'no-store'
    });
    return res.json()
  }catch(error){
    return []
  }
}
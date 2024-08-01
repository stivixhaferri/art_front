import React from 'react'
import Mark from './(components)/Mark'
import Grid from './(components)/Grid'
import ResSearch from './(components)/ResSearch'
import Hero from './(components)/Hero'
import { Adder } from './(components)/Adder'
import Coffee from './(components)/Coffee'
import Silver from './(components)/Silver'
import Card from './(components)/Card'


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
      <Silver/>


      <div className='lg:py-5 py-1 bg-black'>
        <img src="/mb.png" className='lg:w-[90%] w-full mx-auto lg:h-[500px] lg:object-cover object-contain ' alt="" />
      </div>

      <div className='flex lg:flex-row flex-col items-center lg:mt-0 mt-[-1%] py-[5%] px-[5%] bg-black'>
        <div className='lg:w-[30%] w-full'>
          <img src="/iphone.png" className='lg:w-[85%] w-[85%] mx-auto' alt="" />
        </div>
        <div className='lg:w-[70%] w-full  bg-black lg:py-0 py-5'>
          <h2 className='text-white text-3xl font-semibold'>Our Top Cars</h2>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
          {cars && cars.slice(0, 6).map((el, index) => (
        <Card
          key={index}
          title={el?.title}
          make={el?.make}
          model={el?.model}
          year={el?.year}
          city={el?.city}
          transmission={el?.transmission}
          fuel={el?.fuel}
          rate={el?.rate}
          cover={el?.cover}
          id={el._id}
          link={`/details/${el._id}`}
        />
      ))}
          </div>
        
        </div>
      </div>


    
      {/* <Adder/> */}
      <Coffee/>
    </div>
  )
}

export default page


const getData = async () => {
  try{
    const res = await fetch('https://server.albaniarentaltourism.com/api/cars', {
      cache: 'no-store'
    });
    return res.json()
  }catch(error){
    return []
  }
}



export const metadata = {
  title: 'Albania Rental Tourism | ART',
  description: 'Albania Rental Tourism (ART) is a platform where car owners can list their cars for free and clients can book cars by paying only 10% of the booking amount. Discover and book cars effortlessly in Albania!',
  keywords: 'Albania, car rental, tourism, booking, ART, Albania Rental Tourism',
  robots: 'index, follow',
  openGraph: {
    title: 'Albania Rental Tourism | ART',
    description: 'Albania Rental Tourism (ART) is a platform where car owners can list their cars for free and clients can book cars by paying only 10% of the booking amount. Discover and book cars effortlessly in Albania!',
    url: 'https://albaniarentaltourism.com/',
    type: 'website',
    site_name: 'Albania Rental Tourism',
  },
  canonical: 'https://albaniarentaltourism.com/',
};
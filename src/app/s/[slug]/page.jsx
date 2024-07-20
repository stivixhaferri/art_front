import React from 'react'
import Card from '@/app/(components)/Card'
import Cal from '@/app/(components)/Cal';
import { MdLocationOn } from "react-icons/md";
import Mark from '@/app/(components)/Mark';
import Link from 'next/link';
import Best from '@/app/(components)/Best';

const page = async ({params}) => {
  const slug = params.slug;
  let filteredCars;

  if (slug !== 'all') {
    const parts = slug.split("_");
  
    const city = parts[0].toLowerCase();
    const date = parts[1];
    const price = parseInt(parts[2], 10); 
  
    const data = await getData();
    const cars = data?.data || [];
  
    filteredCars = cars.filter(car => {
      const carCity = (car.city || '').toLowerCase();
      const carRate = car.rate;
      const carTransmission = (car.transmission || '').toLowerCase();
  
      return carCity === city && carRate <= price && carTransmission === date.toLowerCase();
    });
  }else if(slug == 'bmw'){
    const data = await getData();
    const cars = data?.data || [];
    filteredCars = cars.filter((el) => el.make.toLowerCase() == 'bmw')
  }
  else if (slug == 'volkswagen') {
    const data = await getData();
    const cars = data?.data || [];
    filteredCars = cars.filter((el) => el.make?.toLowerCase() === 'volkswagen');
    console.log('Filtered cars:', filteredCars); 
}
  else {
    const data = await getData();
    const cars = data?.data || [];
    filteredCars = cars;
  }
 

  return (
    <div className=' gap-3 flex flex-col min-h-[90vh] lg:pt-0 pt-[15%]'>
      {/* <Best/> */}

      <div className='w-full px-[5%] grid lg:grid-cols-4 grid-cols-1 gap-1 py-5'>
      {filteredCars.length > 0 ? (filteredCars.map((el , index) => {
        return <Card  key={index}
        title={el && el.title}
        make={el && el.make}
        model={el && el.model}
        year={el && el.year}
        city={el && el.city}
        transmission={el && el.transmission}
        fuel={el.fuel}
        rate={el && el.rate}
        cover={el && el.cover}
        id={el._id}
        link={`/details/${el._id}`}
        
        />
      })) : (<>
      No Cars Found
      </>)}
      
      
    </div>
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

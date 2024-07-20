import React from 'react'
import Card from '../(components)/Card'
import { cookies } from 'next/headers'

const page = async () => {

  const cookieStore = cookies()
  const theme = cookieStore.get('jwt');
  const token = theme && theme.value;

  const data = await getData(token && token)
  console.log(data.myCars);
  const cars = data ? data.myCars : []
  return (
    <div className='px-[5%] min-h-[90vh] grid lg:grid-cols-5 grid-cols-1 lg:pt-[0%] pt-[15%] gap-1 py-5'>
        {cars && cars.map((el , index) => {
          return <Card  key={index} title={el && el.title}
          make={el && el.make}
          model={el && el.model}
          year={el && el.year}
          city={el && el.city}
          transmission={el && el.transmission}
          fuel={el.fuel}
          rate={el && el.rate}
          cover={el && el.cover}
          id={el._id}
          link={`/my_cars/${el._id}`}
          location={el.location}
          />
        })}
        
      
    </div>
  )
}

export default page


const getData = async (token) => {
  try{
    const res = await fetch('https://api-jgg9.onrender.com/api/mycars', {
      headers: {
        'token': token
      },
      cache: 'no-store'
    });
    return res.json()
  }catch(error){
    return []
  }
}
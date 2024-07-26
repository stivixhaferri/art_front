import React from 'react'
import { FaCity } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import Link from 'next/link';

const Card = ({title, make , model , year , city , transmission, fuel , rate , cover , id , link}) => {
  
  return (
    <div className="relative mx-auto w-full  lg:max-w-sm pt-6  ">
  <Link href={`${link}`} className="relative bg-white inline-block w-full transform shadow-lg  transition-transform duration-300 ease-in-out border-[0px] overflow-hidden rounded-lg" >
    <div className="rounded-lg">
      <div className="relative flex h-52 justify-center overflow-hidden rounded-lg ">
        <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
          <img src={`${cover && cover}`} className='rounded-lg w-full h-full object-cover' alt />
        </div>
        <div className="absolute bottom-0 mb-3 flex justify-center">
         
        </div>
        <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white"> ART </span>
      </div>
      <div className="px-2">
        <div className="mt-1 grid grid-cols-2">
          <div className="flex items-center">
            <div className="relative">
              <h2 className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg" title="New York">{title && title.substring(0 ,10)}...</h2>
              <p className="mt-2 line-clamp-1 text-sm text-gray-800" title="New York, NY 10004, United States">{make && make} {model && model}</p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
              <span className="text-sm uppercase"> € </span>
              <span className="text-lg">{rate && rate}</span>/day
            </p>
          </div>
        </div>
       
        <div className="mt-2 grid grid-cols-2 grid-rows-1 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
          <p className="flex items-center text-gray-800 px-2 gap-2 xl:flex-row xl:items-center">
            <FaCity />
            <span className="xl:mt-0"> {city && city} </span>
          </p>
          <p className="flex items-center text-gray-800 px-2 gap-2 xl:flex-row xl:items-center">
            <FaBusinessTime />
            <span className="xl:mt-0"> {year && year} </span>
          </p>
          
        </div>
        
      </div>
    </div>
  </Link>
</div>
  )
}

export default Card
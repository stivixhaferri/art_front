'use client'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdOutlineOnlinePrediction } from "react-icons/md";


const Hero = () => {


    const text = "Albanian Rental Tourism".split(" ");
  return (
    <div className="w-full  px-[3%] flex lg:flex-row flex-col   lg:pt-5 pt-[15%] lg:pb-[5%] pb-3  border-b-[0.5px]">
       
        <div className='lg:w-[70%] w-full relative'>
        <div className='bg-red-500 opacity-[0.5] z-[1] lg:w-[450px] lg:h-[235px] w-[100px] h-[200px] absolute rounded-full lg:mr-[10%] mr-[20%] right-0 bottom-0 blur-3xl'> </div>
        {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          className={`lg:font-semibold z-[2] relative font-bold py-4 px-5 lg:text-[80px] text-[50px] `}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 1,
          }}
          className={`text-gray-700 py-4 relative z-[2] px-5 w-[20%] lg:text-[20px] text-[16px] `}
         
        >

          Makina juaj, udhëtimi juaj - zgjidhni me stil!
         
        </motion.span>
      
            <img src="hero.svg" className='lg:w-[70%] z-[2] relative w-full cursor-pointer lg:hover:ml-[15%] transition-all 0.3s ease-in-out' alt="" />
          
            
        </div>
        <div className='lg:w-[30%] w-full  flex flex-col justify-end relative'>
            <div className='absolute mt-[10%] mr-[15%] top-0 right-0 lg:flex hidden items-center gap-2'>
                <span>Rent From Everywhere</span>
                <MdOutlineOnlinePrediction />
            </div>
           <Link  href={'/s/all'} className='bg-black px-4 py-3 text-center text-white lg:w-[70%] w-full mx-auto mb-[15%] transition-all 1s ease-in-out border-black border-[1px] hover:text-black hover:bg-white'>SEARCH NOW</Link>
        </div>
    </div>
  )
}

export default Hero
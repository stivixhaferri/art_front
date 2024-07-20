'use client'
import React from 'react'
import { motion } from "framer-motion";
import { AccordionDemo } from '../(components)/AccordionDemo';
import Link from 'next/link';

const page = () => {
  return (
    <div>
<div className='lg:pt-5 pt-[15%] pb-[5%] flex'>
        <div className='w-full  pt-5 px-[5%]'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 1,
          }}
          className={`w-full justify-start text-start lg:text-[80px] text-[20px] font-semibold `}
        >
          Udhëtimi drejt <br /> Përsosmërisë
        </motion.span>
            
            <img src="about.svg" className='w-[60%] mx-auto' alt="" />

            <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 1,
          }}
          className={`w-full justify-end flex  text-end lg:text-[30px] text-[20px] font-semibold `}
        >
          Performanca e lartë kërkon <br /> më shumë  se kushte të përsosura
        </motion.span>
        </div>
    </div>


    <div className='flex lg:flex-row  flex-col'>
      <div className='lg:w-[50%] w-full'>
        <img src="wrengle.png" className='w-full' alt="" />
      </div>
      <div className='lg:w-[50%] w-full py-[5%] px-[5%] bg-black flex flex-col'>
        <span className='text-[#FF0000] font-semibold text-xl'>Kush Jemi Ne</span>
        <h1 className='text-white text-[80px] font-bold py-5'>Alabanian Rental<br /> Tourism</h1>
        <p className='text-white text-[20px]  py-5'>
        Një platformë në re që ofron mundësinë për të dhënë automjetet tuaja me qira dhe për të menaxhuar rezervimet e tyre në një mënyrë të thjeshtë dhe efikase. Platforma jonë përfshin funksionalitete të avancuara për të menaxhuar oraret, kushtet e qirasë, dhe pagesat, duke e bërë procesin të përshtatshëm dhe të sigurt për të gjithë përdoruesit.
        </p>
        <Link href={'/register'} className='bg-[#FF0000] justify-center text-white px-5 py-3 w-[35%] mt-5 text-center font-semibold'>Account</Link>
      </div>
    </div>



    <div className='flex lg:flex-row flex-col'>
    <div className='lg:w-[50%] w-full py-[5%] px-[5%] bg-[#FF0000] flex flex-col'>
        <span className='text-white font-semibold text-xl'>Misioni Ynë</span>
        <h1 className='text-white text-[80px] font-bold py-5'>OUR<br /> MISSION</h1>
        <p className='text-white text-[20px]  py-5'>
        Misioni ynë është të krijojmë një platformë që ofron një ndihmë të dobishme dhe inovative për pronarët dhe përdoruesit e automjeteve, duke e bërë procesin e qirasë dhe menaxhimit të rezervimeve sa më të thjeshtë dhe efikas të jetë e mundur. Ne jemi të përkushtuar për të ofruar shërbim të shkëlqyer dhe për të mbështetur klientët tanë në çdo hap të rrugës.
        </p>
        <Link href={'/contact'} className='bg-black text-center justify-center font-semibold text-white px-5 py-3 w-[35%] mt-5'>Na Kontaktoni</Link>
      </div>
      <div className='lg:w-[50%] w-full'>
        <img src="rt.png" className='w-full' alt="" />
      </div>
      
    </div>

          <div className='px-[5%] py-[5%]'>
            <h1 className='font-bold text-[70px]'>Frequently Asked Question </h1>
            <AccordionDemo/>
          </div>
         

    </div>
    
  )
}

export default page
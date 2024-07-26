import React from 'react'

export const Adder = () => {
  return (
    <section className="bg-black pb-[5%]">
      <div className="gap-16  items-center py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 w-full px-[5%]">
        <div className="font-light text-gray-500 sm:text-lg relative">
          <div className='w-[300px] absolute h-[187px] right-0 bottom-0 bg-red-600 blur-3xl'></div>
          <h2 className="mb-4 text-4xl relative tracking-tight font-extrabold text-white">
            Alabanian Rental Tourism
          </h2>
          <p className="mb-4 text-white py-4 relative z-[2] lg:text-[20px] text-[20px] ">
            Faleminderit që na zgjodhët për nevojat tuaja të qiradhënies së  makinave. Ne jemi një platformë e dedikuar për t&apos;ju ofruar zgjidhjet më të mira për udhëtimet tuaja. Me një gamë të gjerë makinash për çdo shije dhe nevojë, synojmë të bëjmë udhëtimin tuaj sa më të rehatshëm dhe të sigurt.
            
            
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
          <img
            className="w-[50%] mx-auto rounded-lg"
            src="/hand.svg"
            alt="office content 1"
          />
         
        </div>
      </div>
    </section>
  )
}

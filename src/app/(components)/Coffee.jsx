import React from 'react'
import BuyMeACoffee from './BuyMeACoffee'

const Coffee = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center  py-8 px-4 sm:px-6 lg:px-8">
        <div className='lg:w-[50%] w-full'>
            <img src="girl.svg" className='w-full' alt="" />
        </div>
        <div className='lg:w-[50%] w-full'>
            <span className='bg-black px-2 py-1 text-white rounded-2xl'>
            A jeni të kënaqur me përmbajtjen tonë?
            </span>
            <br />
            <h1 className='lg:text-[45px] pr-[5%] font-semibold pt-[5%]'>
            Klikoni per te na dhuruar një kafe për të mbështetur punën tone!
            </h1>
            <div className="mt-8">
                {/* <img
                className="h-14 cursor-pointer"
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me a Coffee"
                /> */}
                <BuyMeACoffee/>
            </div>
        </div>
</div>

  )
}

export default Coffee
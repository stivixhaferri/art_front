'use client'
import React from 'react'
import { PayPalScriptProvider , PayPalButtons } from '@paypal/react-paypal-js'
import Card from '@/app/(components)/Card'

const page = () => {
  return (
    <div>
        <div className='px-[10%] flex'>
            <div className='w-[70%] '>
                <PayPalScriptProvider >
                    <PayPalButtons/>
                </PayPalScriptProvider>
            </div>
            <div className='w-[30%]'>
                <Card/>
                <div className='my-3 py-3 border-t-[0.5px] border-b-[0.5px] mx-[3%]'>
                    <div className='flex items-center py-2 px-[3%] font-bold text-lg text-gray-600'>
                        Total: $250
                    </div>
                    <div className='flex items-center py-2 px-[3%] font-bold text-lg text-gray-600'>
                        Start Date: 05/11/2024
                    </div>
                    <div className='flex items-center py-2 px-[3%] font-bold text-lg text-gray-600'>
                        End Date: 05/11/2024
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default page
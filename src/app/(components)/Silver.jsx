import React from 'react'

const Silver = () => {
    return(
        <div className='w-full flex lg:flex-row flex-col  px-[5%] before:relative items-center  '>
            <div className='lg:w-[50%] w-full py-5   '>
                <h1 className='lg:text-[100px] text-[50px] font-semibold border-r-[0.5px] border-gray-200'>
                    <b className='text-red-600'>
                        LUXURY
                    </b>
                    <br />
                    Comes
                    <br />
                    Automatic
                </h1>
            </div>
            <div className='lg:w-[50%] w-full py-5 pl-5  '>
               
               <img src="/ss.png" className='w-[80%] mx-auto'  alt="" />

            </div>
        </div>
    )
}


export default Silver
import React from 'react'
import Link from 'next/link'

const Subnav = () => {
  return (
    <div className='flex justify-end py-1 gap-1 px-[3%] text-white   bg-black '>

       
            <Link href={'/'} className='px-4 py-2 text-sm hover:bg-gray-400 cursor-pointer rounded-3xl hover:bg-opacity-[0.5]'>Home</Link>
            <Link href={'/about'} className='px-4  py-2 text-sm hover:bg-gray-400 cursor-pointer rounded-3xl hover:bg-opacity-[0.5]'>About</Link>
            <Link href={'/contact'} className='px-4 py-2 text-sm hover:bg-gray-400 cursor-pointer rounded-3xl hover:bg-opacity-[0.5]'>Contact</Link>
            <Link href={'/terms'} className='px-4 py-2 text-sm hover:bg-gray-400 cursor-pointer rounded-3xl hover:bg-opacity-[0.5]'>Terms</Link>
       
    </div>
  )
}

export default Subnav
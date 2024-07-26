'use client'
import react, { useState } from 'react'
import axios from 'axios'


const Page = () => {


  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [number , setNumber] = useState('');
  const [message , setMessage] = useState('');


  const handleSubmit = async () => {
    try{
      const res = await axios.post('https://server.albaniarentaltourism.com/api/contact', {name , email , number , message}, {
        cache: 'no-store'
      });
      if(res.status == 200){
        window.location.reload();
      }
    }catch(error){
      console.log(error)
    }
  }
  return(
    <div className='min-h-[90vh] px-[5%] lg:py-[5%] pb-[5%] pt-[25%] flex lg:flex-row flex-col-reverse items-center'>
      <div className='lg:w-[50%] w-full'>
        <img src="contact.svg" className='w-full' alt="" />
      </div>
      <div className='lg:w-[50%] w-full'>
        <span className='bg-black px-2 py-1 text-white rounded-2xl text-[12px]'>Contact Us</span>
        <h2 className='text-4xl font-bold py-5'>Get in touch</h2>
        <b></b>
        <div className='flex py-1 text-black items-center gap-2'>
          <div className='w-[50%] flex flex-col'>
            <label htmlFor="" >Your Name*</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border-[0.5px] px-4 py-2 rounded-lg' />
          </div>
          <div className='w-[50%] flex flex-col'>
            <label htmlFor="" >Your Email*</label>
            <input type="text"  onChange={(e) => setEmail(e.target.value)} className='border-[0.5px] px-4 py-2 rounded-lg' />
          </div>
        </div>


        <div className='flex py-1 text-black items-center gap-2'>
          <div className='w-full flex flex-col'>
            <label htmlFor="" >Your Number*</label>
            <input type="text" onChange={(e) => setNumber(e.target.value)} className='border-[0.5px] px-4 py-2 rounded-lg' />
          </div>
          
        </div>


        <div className='flex py-1 text-black items-center gap-2'>
          <div className='w-full flex flex-col'>
            <label htmlFor="" >Your Message*</label>
            <textarea rows="5" onChange={(e) => setMessage(e.target.value)} type="text" className='border-[0.5px] px-4 py-2 rounded-lg' ></textarea>
          </div>
          
        </div>


        
        <div className='flex py-1 text-black items-center gap-2'>
          <div className='w-full flex flex-col'>
            
            <button onClick={handleSubmit} className='bg-black w-full text-white rounded mt-2 py-2 '>Submit</button>
          </div>
          
        </div>




      </div>
    </div>
  )
}

export default Page
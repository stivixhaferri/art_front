import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import Book from '@/app/(components)/Book';
  import { FaCity } from "react-icons/fa6";
  import { BsFillFuelPumpFill } from "react-icons/bs";
  import { SiGoogleearthengine } from "react-icons/si";
  import { MdUpdate } from "react-icons/md";
  import { FaFlag } from "react-icons/fa6";
  import { VscWorkspaceTrusted } from "react-icons/vsc";
  import { MdDocumentScanner } from "react-icons/md";
  import { IoShieldCheckmark } from "react-icons/io5";
  import { IoPricetagsSharp } from "react-icons/io5";
  import Comments from '@/app/(components)/Comments';
  import Card from '@/app/(components)/Card';
import Change from '@/app/(components)/Change';
import Bookings from '@/app/(components)/Bookings';


const Page = async ({params}) => {

    const slug = params.id;
    console.log(slug);

    const data = await getData(slug);
    console.log(data.data, 'data');
    const car = data && data.data ? data.data[0] : null; 

    if (!car) {
        return <div>No car data available</div>;
    }
  return (
    <div className='px-[10%] lg:py-5 pt-[20%] pb-[5%]'>
        <div className='flex items-center'>
            <div className='flex w-[50%] items-center' >
                <h1 className='font-bold text-2xl'>{car && car.title}</h1>
            </div>
            <div className='w-[50%] flex pr-5 items-center gap-1 justify-end'>
                <button className='flex items-center gap-2'>
                    <FaRegHeart /> 
                    Save
                </button>
            
            </div>
        </div>


        
        <div className='flex gap-3 lg:flex-row flex-col items-center lg:h-[50vh] py-2 rounded-2xl overflow-hidden'>
            <div className='lg:w-[50%] w-full'>
            <AlertDialog>
            <AlertDialogTrigger className='w-full'>
            <img  src={`${car && car.cover}`} className='w-full  h-full object-cover cursor-pointer' alt="" />
            </AlertDialogTrigger>
            <AlertDialogContent className="lg:w-[80%] mx-auto" >
                <AlertDialogHeader>

                <AlertDialogDescription>
                <img  src={`${car && car.cover}`} className=' h-[70vh] mx-auto object-contain cursor-pointer' alt="" />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
               
            </div>
            <div className='lg:w-[50%] w-full gap-3 py-2 grid grid-cols-2 grid-rows-2'>


            <AlertDialog>
            <AlertDialogTrigger>
            <img  src={`${car && car.images[0]}`} className='w-full object-cover h-full cursor-pointer' alt="" />
            </AlertDialogTrigger>
            <AlertDialogContent className="lg:w-[80%] mx-auto" >
                <AlertDialogHeader>

                <AlertDialogDescription>
                <img  src={`${car && car.images[0]}`} className='object-contain mx-auto h-[70vh] cursor-pointer' alt="" />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>




            <AlertDialog>
            <AlertDialogTrigger>
            <img  src={`${car && car.images[1]}`} className='w-full object-cover h-full cursor-pointer' alt="" />
            </AlertDialogTrigger>
            <AlertDialogContent className="lg:w-[80%] mx-auto" >
                <AlertDialogHeader>

                <AlertDialogDescription>
                <img  src={`${car && car.images[1]}`} className='object-contain mx-auto h-[70vh] cursor-pointer' alt="" />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>




            <AlertDialog>
            <AlertDialogTrigger>
            <img  src={`${car && car.images[2]}`} className='w-full object-cover h-full cursor-pointer' alt="" />
            </AlertDialogTrigger>
            <AlertDialogContent className="lg:w-[80%] mx-auto" >
                <AlertDialogHeader>

                <AlertDialogDescription>
                <img  src={`${car && car.images[2]}`} className='object-contain mx-auto h-[70vh] cursor-pointer' alt="" />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>




            <AlertDialog>
            <AlertDialogTrigger>
            <img  src={`${car && car.images[3] ?  car.images[3] : car.cover}`} className='w-full object-cover h-full cursor-pointer' alt="" />
            </AlertDialogTrigger>
            <AlertDialogContent className="lg:w-[80%] mx-auto" >
                <AlertDialogHeader>

                <AlertDialogDescription>
                <img  src={`${car && car.images[3] ?  car.images[3] : car.cover}`} className='w-full ovject-contain h-[70vh] cursor-pointer' alt="" />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
            </div>
        </div>
        {/*more*/}
        <div className='flex lg:flex-row flex-col-reverse pb-[5%]'>

            <div className='lg:w-[70%] w-full pt-5'>
                <div className='py-5'>
                    <h2 className='text-3xl font-bold'>{car && car.make}  {car && car.model} {car && car.year}</h2>
                </div>
                <div className='lg:w-[40%] w-full grid grid-cols-3 grid-rows-1 gap-5'>
                    <div className='flex items-center gap-2 text-gray-500 text-xl'>
                        <FaCity />
                        {car && car.city}
                    </div>

                    <div className='flex items-center gap-2 text-gray-500 text-xl'>
                        <BsFillFuelPumpFill />
                        {car && car.fuel}
                    </div>


                    <div className='flex items-center gap-2 text-gray-500 text-xl'>
                        <SiGoogleearthengine />
                        {car && car.transmission}
                    </div>
                </div>
                <div className='py-5 my-[5%] border-t-[0.5px] border-b-[0.5px] w-[90%]'>
                    <ul>
                        <li className='py-3'>
                            <div className='flex gap-3 items-center'>
                                <IoShieldCheckmark className='text-[30px] font-semibold text-gray-700' />
                                <div>
                                    <h2 className='font-semibold'>Reliable Vehicle</h2>
                                    <p>
                                        A well-maintained car that is ready for any journey.
                                    </p>
                                </div>
                            </div>
                        </li>


                        <li className='py-3'>
                            <div className='flex gap-3 items-center'>
                                <MdDocumentScanner className='text-[30px] font-semibold text-gray-700' />
                                <div>
                                    <h2 className='font-semibold'>Comprehensive Insurance</h2>
                                    <p>
                                        Coverage included for peace of mind.
                                    </p>
                                </div>
                            </div>
                        </li>


                        <li className='py-3'>
                            <div className='flex gap-3 items-center'>
                                <IoPricetagsSharp className='text-[30px] font-semibold text-gray-700' />
                                <div>
                                    <h2 className='font-semibold'>Affordable Rates</h2>
                                    <p>
                                        Competitive pricing for quality service.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                
                

               {/* <Bookings   id={slug}/> */}
            </div>
            <div className='lg:w-[30%] w-full'>
                
                <Change slug={slug}  rate={car && car.rate}  />
                <div className="mb-4 lg:mx-[4%] bg-white my-2 rounded p-2 border-[0.5px]">
          <p className="block text-gray-700 font-bold mb-2">Unavailable Dates:</p>
          <ul className='grid grid-cols-4 gap-1'>
            {car?.other?.map((date, index) => (
              <li key={index} className="text-black text-[14px] text-center rounded-xl p-1 bg-gray-200 opacity-[0.9] font-semibold">{new Date(date).toLocaleDateString()}</li>
            ))}
          </ul>
        </div>
            </div>
        </div>
        
    </div>
  )
}

export default Page



const getData = async (id) => {
    try {
        const res = await fetch('https://api-jgg9.onrender.com/api/mycar', {
            headers: {
                'token': id
            },
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        return await res.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return { data: null };
    }
};

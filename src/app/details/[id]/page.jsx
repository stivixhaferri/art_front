
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
import { Car } from 'lucide-react';


const Detail = async ({params}) => {

    const slug = params.id;
    console.log(slug);

    const data = await getData(slug);
    console.log(data.data, 'data');
    const car = data && data.data ? data.data[0] : null; // Ensure car is defined
    const randoms = await getRandomCars();
    const randomCars = randoms && randoms.data ? randoms.data : null;


   

    
    if (!car) {
        return <div>No car data available</div>;
    }
  return (
    <div className='px-[5%] lg:px-[10%] lg:py-5 pt-[25%] pb-[5%]'>
        <div className='flex items-center'>
            <div className='flex w-[50%] items-center' >
                <h1 className='font-bold text-2xl'>{car && car.title}</h1>
            </div>
            <div className='w-[50%] flex items-center gap-1 justify-end'>
                <button className='flex items-center gap-2'>
                    <FaRegHeart /> 
                    Save
                </button>
            
            </div>
        </div>


        <div className='flex   lg:flex-col flex-col gap-3 items-center  lg:py-2 py-[2] lg:py-0 lg:rounded-2xl overflow-hidden'>
            <div className='w-full'>
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
            <div className='w-full gap-3 py-2 grid grid-cols-4  grid-rows-1'>


            <AlertDialog>
            <AlertDialogTrigger>
            <img  src={`${car && car.images[0]}`} className='lg:w-full object-contain mx-auto lg:h-full cursor-pointer' alt="" />
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
                <img  src={`${car && car.images[2]}`} className='object-contain mx-auto h-[70vh] cursor-pointer'   alt="" />
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
                <img  src={`${car && car.images[3] ?  car.images[3] : car.cover}`} className='mx-auto ovject-contain h-[70vh] cursor-pointer' alt="" />
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
        <div className='flex lg:flex-row flex-col-reverse lg:py-5 pb-[5%]'>

            <div className='lg:w-[70%] w-full pt-5'>
                <div className='py-5'>
                    <h2 className='text-3xl font-bold'>{car && car.make}  {car && car.model} {car && car.year}</h2>
                </div>
                <div className='w-[40%] grid grid-cols-3 grid-rows-1 gap-5'>
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
                <div className='py-2'>
                    <h2 className='text-xl font-semibold py-2'>Description:</h2>
                    <p className='rounded-lg pr-2 text-gray-800 w-[90%]'>
 {car && car.description}
</p>

                </div>

                <div className='mb-5 mt-[5%] lg:w-[90%] w-full'>
                    <h2 className='py-2 font-semibold text-xl'>Location:</h2>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sru!4v1720526739538!5m2!1sen!2sru" className='w-full lg:h-[350px]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <div 
                    dangerouslySetInnerHTML={{ __html: car && car.location }} 
                    className='w-full lg:w-full lg:h-[350px]'
                    />
                </div>
                <div className='lg:my-[5%] mt-[15%] w-[90%]'>
                    <Comments  id={car && car._id}/>
                </div>
                <div className='my-5 grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3  gap-3'>
                    {randoms && randoms.cars.map((el ,index) => {
                        return <Card key={index}
                        title={el && el.title}
                        make={el && el.make}
                        model={el && el.model}
                        year={el && el.year}
                        city={el && el.city}
                        transmission={el && el.transmission}
                        fuel={el.fuel}
                        rate={el && el.rate}
                        cover={el && el.cover}
                        id={el._id}
                        link={`/details/${el._id}`}
                        
                        />
                    })}
                    
                   
                </div>
            </div>
            <div className='lg:w-[30%] w-full'>
                <div className='w-full p-2 border-[0.5px] lg:my-1 my-5 rounded text-start bg-white text-sm'>
                    <b>Attention</b> You need to pay <b>10%</b> of the price to book the car.
                    <hr className='my-2' />
                    <b>Kujdes</b> Duhet të paguani <b>10%</b> të çmimit për të rezervuar makinën.
                </div>
                {car && car.disable == 'false' ? <Book   id={car._id}  />   : <div className='w-full p-2 border-[0.5px] rounded text-center bg-gray-200 text-lg'>This car can not be booked for a period of time</div>}
                
                <div className='flex items-center py-3 underline justify-center gap-3'>
                    <FaFlag />
                    <p className='font-semibold'>
                        Report This Post
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Detail


const getData = async (id) => {
    try {
        const res = await fetch('https://server.albaniarentaltourism.com/api/mycar', {
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

const getRandomCars = async () => {
    try{
        const res = await fetch('https://server.albaniarentaltourism.com/api/random', {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        return await res.json();
    }catch (error) {
        console.error('Fetch error:', error);
        return { data: null };
    }
}
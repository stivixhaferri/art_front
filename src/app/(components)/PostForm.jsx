'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'


const PostForm = ({ token }) => {

    
    const router = useRouter()

    const { toast } = useToast()
    
    const [title, setTitle] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [rate, setRate] = useState();
    const [city, setCity] = useState('');
    const [fuel, setFuel] = useState('');
    const [transmission, setTransmission] = useState('');
    const [year, setYear] = useState();
    // const [startDate, setStartDate] = useState();
    // const [endDate, setEndDate] = useState();
    const [cover, setCover] = useState(null);
    const [images, setImages] = useState([]);
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
        if (e.target.name === 'cover') {
            setCover(e.target.files[0]);
        } else {
            setImages(Array.from(e.target.files));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('make', make);
        formData.append('model', model);
        formData.append('rate', rate);
        formData.append('city', city);
        formData.append('fuel', fuel);
        formData.append('transmission', transmission);
        formData.append('year', year);
        // formData.append('start_date', startDate);
        // formData.append('end_date', endDate);
        formData.append('location', location);
        formData.append('description', description);
        if (cover) {
            formData.append('cover', cover);
        }
        images.forEach((image, index) => {
            formData.append('images', image);
        });

        try {
            const response = await axios.post('https://api-jgg9.onrender.com/api/post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'token': token
                }
            });
            
            if(response.data.status == 700){
             
                toast({
                    title: "Your Account is not yet verified",
                    description: "Wait for your account to verify to post Cars in ART website",
                  })
            }else if(response.data.message == "Car created successfully."){
                router.push('/')
            }
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='lg:px-[10%] px-[5%] justify-center lg:pt-[0%] pt-[15%]  gap-5  min-h-[90vh]'>
            <div className=''>
                <span className='text-[12px] bg-black text-white px-2 py-1 rounded-2xl'>ART</span>
                <h2 className='text-[40px]  font-bold'>POST YOUR CAR</h2>
            </div>
            <div className='flex pb-[5%] pt-3 w-full mx-auto'>
            <div className='lg:w-[70%]  w-full'>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="" className='font-semibold'>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Lorem Ipsum Dolor sit amet' className='px-4 py-2 border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2' />
                </div>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="" className='font-semibold'>Mark</label>
                    <input type="text" onChange={(e) => setMake(e.target.value)} placeholder='Ford' className='px-4 py-2 border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2' />
                </div>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="" className='font-semibold'>Model</label>
                    <input type="text" placeholder='Focus' onChange={(e) => setModel(e.target.value)} className='px-4 py-2 border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2' />
                </div>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="" className='font-semibold'>Rate per day</label>
                    <input type="number" onChange={(e) => setRate(e.target.value)} placeholder='Cmimi ne  € per nje dite ' className='px-4 py-2 border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2' />
                </div>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="city" className='font-semibold'>Qyteti</label>
                    <select id="city" onChange={(e) => setCity(e.target.value)} className='px-4 py-2 border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2'>
                        <option value="">-||-</option>
                        <option value="Tirane">Tirane</option>
                        <option value="Durres">Durres</option>
                        <option value="Vlore">Vlore</option>
                        <option value="Shkoder">Shkoder</option>
                        <option value="Fier">Fier</option>
                        <option value="Korçe">Korçe</option>
                        <option value="Elbasan">Elbasan</option>
                        <option value="Berat">Berat</option>
                        <option value="Lushnje">Lushnje</option>
                        <option value="Pogradec">Pogradec</option>
                        <option value="Kukes">Kukes</option>
                        <option value="Lezhe">Lezhe</option>
                        <option value="Gjirokaster">Gjirokaster</option>
                        <option value="Sarande">Sarande</option>
                        <option value="Peshkopi">Peshkopi</option>
                        <option value="Bajram Curri">Bajram Curri</option>
                        <option value="Librazhd">Librazhd</option>
                        <option value="Tepelene">Tepelene</option>
                        <option value="Peqin">Peqin</option>
                        <option value="Gramsh">Gramsh</option>
                        <option value="Burrel">Burrel</option>
                        <option value="Poliçan">Poliçan</option>
                        <option value="Permet">Permet</option>
                        <option value="Sarande">Sarande</option>
                        <option value="Vore">Vore</option>
                        <option value="Kamez">Kamez</option>
                    </select>
                </div>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="fuel" className='font-semibold'>Karburanti</label>
                    <select id="fuel" onChange={(e) => setFuel(e.target.value)} className='px-4 py-2 border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2'>
                        <option value="">-||-</option>
                        <option value="Oil">Oil</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Electric">Electric</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="transmission" className='font-semibold'>Transmission</label>
                    <select id="transmission" onChange={(e) => setTransmission(e.target.value)} className='px-4 py-2 border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2'>
                        <option value="">Select fuel type</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                    </select>
                </div>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="year" className='font-semibold'>Year</label>
                    <input type="number" onChange={(e) => setYear(e.target.value)} placeholder='2024' className='px-4 py-2 border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2' />
                </div>

                <div className='py-2 flex flex-col'>
                    <label htmlFor="cover" className='font-semibold'>Cover Image</label>
                    <div className='border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2'>
                        <input type="file" name="cover" accept="image/*" onChange={handleFileChange} />
                    </div>
                </div>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="images" className='font-semibold'>Images</label>
                    <div className='border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2'>
                        <input type="file" name="images" accept="image/*" onChange={handleFileChange} multiple />
                    </div>
                </div>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="location" className='font-semibold'>Location</label>
                    <input type="text" onChange={(e) => setLocation(e.target.value)} placeholder='Location' className='px-4 py-2 border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2' />
                </div>
                <div className='py-2 flex flex-col'>
                    <label htmlFor="description" className='font-semibold'>Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} placeholder='Description' className='px-4 py-2 border-[0.5px] rounded-lg lg:w-[60%] w-full mt-2' />
                </div>
                <div className='py-2 flex flex-col'>
                    <button type="submit" className='lg:w-[60%] w-full bg-red-600 px-4 py-3 text-white rounded-lg'>SUBMIT</button>
                </div>
               
            </div>
            <div className='lg:w-[30%] lg:flex hidden'></div>
            </div>
           
        </form>
    )
}

export default PostForm;

'use client'
import react from 'react'
import {useState , useEffect} from 'react'
import { useRouter } from 'next/navigation'

const ResSearch = () => {


    const router = useRouter();
    const [city , setCity] = useState('');
    const [transmission , setTransmission] = useState('');
    const [price , setPrice] = useState('');


    const handleSubmit = () => {
        router.push(`/s/${city.toLowerCase()}_${transmission}_${price}`)
    }
    return(
        <div className='lg:hidden mt-[5%] w-[95%] gap-1 mx-auto flex-col rounded-lg border-[0.5px] p-2 bg-white items-center pt-3'>
            <div className='w-full my-1'>
                
                <select  onChange={(e) => setCity(e.target.value)} className='w-full px-4 py-2 border-[0.5px] rounded cursor-pointer' >
                        <option value="">Select City</option>
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
            <div className='w-full my-1'>
                <select  onChange={(e) => setTransmission(e.target.value)} className='w-full border-[0.5px] rounded px-4 py-2 cursor-pointer' >
                    <option value="">Select Transmission</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                </select>
            </div>
            <div className='w-full my-1'>
                <input type="text" onChange={(e) => setPrice(e.target.value)}  className='px-4 cursor-pointer py-2 w-full border-[0.5px] rounded' placeholder='Max price in €' />
            </div>
            <div className='w-full my-1'>
                <button onClick={handleSubmit} className='bg-[#DC2626] cursor-pointer px-4 py-2 w-full text-white rounded'>Search</button>
            </div>
        </div>
    )
}


export default ResSearch
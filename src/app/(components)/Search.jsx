'use client'
import React, {useState , useEffect} from 'react'
import { useRouter } from 'next/navigation'

const Search = () => {

  const router = useRouter();

  const [location , setLocation] = useState('location');
  const [transmission, setTransmission] = useState('');
  const [price , setPrice] = useState();

  const handleSearch = () => {
   
      router.push(`/s/${location ? location.toLowerCase() : 'n' }_${transmission ? transmission : 'n' }_${price ? price : 'n'}`)
    
  }



  return (
    <div className="bar">
  <div className="location">
    <p>City</p>
    <select onChange={(e) => setLocation(e.target.value)} className='txt '  id="">
      <option value="">Select</option>
      <option value="tirane">Tirane</option>
                        <option value="durres">Durres</option>
                        <option value="vlore">Vlore</option>
                        <option value="shkoder">Shkoder</option>
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
  <div className="check-in">
    <p>Transmission</p>
    <select onChange={(e) => setTransmission(e.target.value)} className='txt' placeholder="Add dates" >
      <option value="">Select</option>
      <option value="automatic">Automatic</option>
      <option value="manual">Manual</option>
    </select>
  </div>
  
  <div className="guests">
    <p>Price</p>
    <input type="number" onChange={(e) => setPrice(e.target.value)} className='txt' placeholder="Max Price " />
   
  </div>

  <div className="check-out flex items-center">
    <button className='px-4 py-2 text-[16px] mx-auto  rounded-3xl bg-red-600 text-white ' onClick={handleSearch}>Search</button>
  </div>
</div>
  )
}

export default Search
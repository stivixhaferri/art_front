'use client'
import React, {useState , useEffect} from 'react'
import { useRouter } from 'next/navigation'

const Search = () => {

  const router = useRouter();

  const [location , setLocation] = useState('location');
  const [transmission, setTransmission] = useState('');
  const [price , setPrice] = useState();

  const handleSearch = () => {
    if(location != '' && transmission != '' && price != ""){
      router.push(`/s/${location.toLowerCase()}_${transmission}_${price}`)
    }
  }



  return (
    <div className="bar">
  <div className="location">
    <p>City</p>
    <input type="text" onChange={(e) => setLocation(e.target.value)} className='txt' placeholder="Enter the City" />
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
    <input type="number" onChange={(e) => setPrice(e.target.value)} className='txt' placeholder="Max Price per Day" />
   
  </div>

  <div className="check-out flex items-center">
    <button className='px-4 py-2 text-[16px] mx-auto  rounded-3xl bg-red-600 text-white ' onClick={handleSearch}>Search</button>
  </div>
</div>
  )
}

export default Search
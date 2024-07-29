'use client'
import React, { useState, useEffect } from 'react';
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
} from "@/components/ui/alert-dialog";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import PayPalButton from './PayPalButton';

const Book = ({ id }) => {
  const [car, setCar] = useState();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('');
  const [isDateRangeValid, setIsDateRangeValid] = useState(true);

  const [showPayPalButton, setShowPayPalButton] = useState(false);

  const getCar = async () => {

  
    try {
      const res = await axios.get('https://api-jgg9.onrender.com/api/mycar', {
        headers: {
          'token': id
        },
        cache: 'no-store'
      });

      const myData = res.data.data;
      setCar(myData[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCar();
  }, []);


  const handlePaymentSuccess = async (order) => {
    try {
     
      const res = await axios.post('https://server.albaniarentaltourism.com/api/book',  {email , phone , startDate , endDate , message , car_id: id  , total} );

      
      if(res.status == 200){
        window.location.reload();
      }
       else {
        // Handle booking error
        console.error('Booking failed:', result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const isDateRangeOverlapping = (start, end) => {
    const reservedDates = car?.other || [];
    const startDate = new Date(start);
    const endDate = new Date(end);

    for (const reservedDate of reservedDates) {
      const reserved = new Date(reservedDate);
      if (
        (reserved >= startDate && reserved <= endDate) || 
        (startDate <= reserved && endDate >= reserved)
      ) {
        return true;
      }
    }
    return false;
  };


  const router = useRouter()
  const handleDateChange = (e, setDate, isStart) => {
    const selectedDate = e.target.value;

    if (isStart) {
      if (endDate && isDateRangeOverlapping(selectedDate, endDate)) {
        setIsDateRangeValid(false);
        alert('This date range is not available.');
      } else {
        setIsDateRangeValid(true);
        setDate(selectedDate);
      }
    } else {
      if (startDate && isDateRangeOverlapping(startDate, selectedDate)) {
        setIsDateRangeValid(false);
        alert('This date range is not available.');
      } else {
        setIsDateRangeValid(true);
        setDate(selectedDate);
        
      }
    }
  };

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      if (car && days > 0) {
        setTotal(days * car.rate);
      } else {
        setTotal(0);
      }
    }
  }, [startDate, endDate, car]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className=" static mx-auto mt-10 bg-white rounded-lg overflow-hidden border-[0.5px]" style={{position: 'sticky !important'}}>
      <div className="text-2xl py-4 px-6 text-black text-start font-bold uppercase">
        €{car && car.rate}/<sub className='text-[12px]'>per day</sub>
      </div>

      <form className="py-4 px-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input onChange={(e) => setPhone(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter your phone number" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="startDate">
            Reservate Day
          </label>
          <input onChange={(e) => handleDateChange(e, setStartDate, true)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="startDate" type="date" placeholder="Select a date" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="endDate">
            Drop Off Day
          </label>
          <input onChange={(e) => handleDateChange(e, setEndDate, false)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" type="date" placeholder="Select a date" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="total">
            Total
          </label>
          <input value={total} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="total" type="tel" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea onChange={(e) => setMessage(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows={4} placeholder="Enter any additional information" defaultValue={""} />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 font-bold mb-2">Unavailable Dates:</p>
          <ul className='grid grid-cols-4 gap-1'>
            {car?.other?.map((date, index) => (
              <li key={index} className="text-black text-[14px] text-center rounded-xl p-1 bg-gray-200 opacity-[0.9] font-semibold">{new Date(date).toLocaleDateString()}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center mb-4">
          <AlertDialog>
            <AlertDialogTrigger disabled={!isDateRangeValid}>
              <div className={`w-full py-2 text-[10px] px-4 rounded text-white focus:outline-none focus:shadow-outline ${isDateRangeValid ? 'bg-red-600 hover:bg-red-800' : 'bg-gray-400 cursor-not-allowed'}`}>
                Book Appointment
              </div>
            </AlertDialogTrigger>
            {isDateRangeValid && (
              <AlertDialogContent className="lg:w-[30%] w-[90%] max-h-[80%]  overflow-y-auto">
                <AlertDialogHeader>
                  <AlertDialogTitle>Pay For Reservation</AlertDialogTitle>
                  <AlertDialogDescription>
                    <PayPalButton total={total} onSuccess={handlePaymentSuccess} />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            )}
          </AlertDialog>
        </div>
      </form>
    </div>
  );
};

export default Book;

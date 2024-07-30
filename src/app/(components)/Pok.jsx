'use client';
import React, { useState, useEffect } from 'react';

const Pok = () => {
  const [formState, setFormState] = useState({
    email: '',
    holdersName: '',
    countryCode: 'AL',
    address1: '',
    locality: '',
    postalCode: '',
    phoneNumber: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (isFormSubmitted && window.PokPayment) {
      window.PokPayment.renderForm(
        'payment-form-container',
        'SX41608',
        () => { console.log('Payment Successful'); },
        () => { console.log('Payment Failed'); },
        {
          env: 'staging', // Change to 'production' to use Production API-s
          initialState: formState,
        }
      );
    }
  }, [isFormSubmitted, formState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  useEffect(() => {
    // Load the PokPayment script dynamically
    const script = document.createElement('script');
    script.src = 'https://static.pokpay.io/public/dist/pokpayments/pok-payment.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script element on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="holdersName">
            Holder Name
          </label>
          <input
            type="text"
            name="holdersName"
            value={formState.holdersName}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="holdersName"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="countryCode">
            Country Code
          </label>
          <input
            type="text"
            name="countryCode"
            value={formState.countryCode}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="countryCode"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address1">
            Address
          </label>
          <input
            type="text"
            name="address1"
            value={formState.address1}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="locality">
            Locality
          </label>
          <input
            type="text"
            name="locality"
            value={formState.locality}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="locality"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="postalCode">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            value={formState.postalCode}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="postalCode"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formState.phoneNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      <div id="payment-form-container" className="mt-4"></div>
    </div>
  );
};

export default Pok;

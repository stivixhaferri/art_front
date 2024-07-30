'use client'
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
        'SDK_ORDER_ID',
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Holder's Name:
          <input
            type="text"
            name="holdersName"
            value={formState.holdersName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Country Code:
          <input
            type="text"
            name="countryCode"
            value={formState.countryCode}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address1"
            value={formState.address1}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Locality:
          <input
            type="text"
            name="locality"
            value={formState.locality}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={formState.postalCode}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formState.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div id="payment-form-container"></div>
    </div>
  );
};

export default Pok;

'use client'
import React, { useEffect, useRef } from 'react';

const PayPalButton = ({ onSuccess }) => {
  const paypalRef = useRef();

  useEffect(() => {
    if (window.paypal && !paypalRef.current) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '5.00' 
              }
            }]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          onSuccess(order);
        }
      }).render('#paypal-button-container');
      paypalRef.current = true;
    }
  }, [onSuccess]);

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;

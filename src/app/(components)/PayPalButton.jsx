'use client'
import React, { useEffect, useRef } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ onSuccess, total}) => {
  const paypalRef = useRef();

  useEffect(() => {
    if (window.paypal && !paypalRef.current) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: `${total * 0.10}` 
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

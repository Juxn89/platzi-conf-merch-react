import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

import config from '../config/index';

import '../styles/components/Payment.css';

import { PayPalButton } from 'react-paypal-button';

export const Payment = () => {
  const {State, addNewOrder} = useContext(AppContext);
  const { cart, buyer } = State;
  const totalPrice = cart.reduce((prev, curr) => prev + curr.price, 0);

  console.log(config.paypalClientID);

  const PayPalOptions = {
    clientId: config.paypalClientID,
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyle = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);

    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }

      addNewOrder(newOrder);
      Navigate('/checkout/success', { replace: true })
    }
  }

  return (
    <div className='Payment'>
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map(item => (
            <div className="Payment-item" key={ `Payment-item-${ item.id }` }>
              <div className="Payment-element">
                <h4>{ item.title }</h4>
                <span>${ item.price }</span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions= { PayPalOptions } 
            buttonStyles= { buttonStyle } 
            amount= { totalPrice } 
            onPaymentStart={ () => console.log('Start payment') }
            onPaymentSuccess= { handlePaymentSuccess }
            onPaymentError= { (data) => console.log('Error...', data) }
            onPaymentCancel= { (data) => console.log('Cancel...', data) }
          />
        </div>        
      </div>
    </div>
  )
}

import React from 'react'
import {CartProvider} from 'use-shopping-cart'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log("VITE_BASE_PATH: ", import.meta.env.VITE_BASE_PATH);
console.log("VITE_STRIPE_PUBLIC_KEY: ", import.meta.env.VITE_STRIPE_PUBLIC_KEY);
console.log("VITE_STRIPE_SUCCESS_URL: ", import.meta.env.VITE_STRIPE_SUCCESS_URL);
console.log("VITE_STRIPE_CANCEL_URL: ", import.meta.env.VITE_STRIPE_CANCEL_URL);

/**
 * Renders the app
 */
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={import.meta.env.VITE_STRIPE_PUBLIC_KEY}
          successUrl={import.meta.env.VITE_STRIPE_SUCCESS_URL}
          cancelUrl={import.meta.env.VITE_STRIPE_CANCEL_URL}
          currency="EUR"
          allowedCountries={['US', 'GB', 'DE']}
          billingAddressCollection={true}
      >
        <App/>
      </CartProvider>
    </React.StrictMode>,
)

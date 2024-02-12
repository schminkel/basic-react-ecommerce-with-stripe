import React from 'react'
import {CartProvider} from 'use-shopping-cart'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/**
 * Renders the app
 */
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.VITE_STRIPE_PUBLIC_KEY}
          successUrl={process.env.VITE_STRIPE_SUCCESS_URL}
          cancelUrl={process.env.VITE_STRIPE_CANCEL_URL}
          currency="EUR"
          allowedCountries={['US', 'GB', 'DE']}
          billingAddressCollection={true}
      >
        <App/>
      </CartProvider>
    </React.StrictMode>,
)

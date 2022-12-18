import React from 'react'
import { CartProvider } from 'use-shopping-cart'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}
      successUrl="http://127.0.0.1:5173/"
      cancelUrl="http://127.0.0.1:5173/"
      currency="EUR"
      allowedCountries={['US', 'GB', 'DE']}
      billingAddressCollection={true}
      >
      <App />
    </CartProvider>
  </React.StrictMode>,
)

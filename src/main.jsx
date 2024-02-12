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
          stripe={__VITE_STRIPE_PUBLIC_KEY__}
          successUrl={__VITE_STRIPE_SUCCESS_URL__}
          cancelUrl={__VITE_STRIPE_CANCEL_URL__}
          currency="EUR"
          allowedCountries={['US', 'GB', 'DE']}
          billingAddressCollection={true}
      >
        <App/>
      </CartProvider>
    </React.StrictMode>,
)

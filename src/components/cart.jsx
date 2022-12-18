import React from "react";
import { useShoppingCart } from "use-shopping-cart";

/**
 * Formats the value to a currency string
 */
const formatCurrencyString = (value, currency) => {
  // console.log(value, currency);
  const price = (value / 100).toFixed(2);
  const numberFormat = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: currency,
  });
  return numberFormat.format(price);
};

export function Cart(props) {

  const { formattedTotalPrice, redirectToCheckout, cartCount, clearCart, cartDetails  } = useShoppingCart();
  const cartProducts = Object.values(cartDetails);

  return (
    <>
      {/* This is where we'll render our cart */}
      <p className="flex justify-center" >Number of Items: {cartCount}</p>
      <p className="flex justify-center" >
        Total: {formattedTotalPrice}
      </p>
      <div className="flex justify-center py-2">
        {/* Redirects the user to Stripe */}
        <button
          type="button"
          className="rounded-md border border-transparent bg-green-400 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-green-500"
          onClick={() => redirectToCheckout()}
        >
          Checkout
        </button>
      </div>

      <div className="flex justify-center">
        {/* Clears the cart */}
        <button
          type="button"
          className="rounded-md border border-transparent bg-red-400 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-red-500"
          onClick={() => clearCart()}
        >
          Clear Cart
        </button>
      </div>
      

      {/* {console.log("cartDetails: ", cartDetails)} */}

      {/* <ul>
      {cartProducts.map((cartProduct) => (
        <li key={cartProduct.id} className="list-disc">{cartProduct.name}</li>
      ))}
      </ul> */}

      {/* <div className="flex justify-center">
        <DebugCart />
      </div> */}
    </>
  );
};

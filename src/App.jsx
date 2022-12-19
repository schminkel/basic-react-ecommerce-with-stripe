import { useState } from "react";
import { Products } from "./components/products";
import { Cart } from "./components/cart";
import { Cart2 } from "./components/cart2";
import { useShoppingCart, DebugCart } from "use-shopping-cart";

const productData = [
  {
    name: "Bananas",
    //price_id: "price_1MDu1RHxQ9v68qpGAyB0AqfW", // LIVE mode, see stripe dashboard
    price_id: "price_1MEC6HHxQ9v68qpGWX3u48GP", // TEST mode, see stripe dashboard
    description: "The banana is rich in fibre, potassium and some beneficial vitamins for health. It is a good fruit for everybody except for diabetic, due to its high starch and sugar contents.",
    price: 399,
    imageSrc: "http://127.0.0.1:5173/bananas.jpg",
    imageAlt: "Image of bananas.",
    currency: "EUR",
  },
  {
    name: "Apples",
    // price_id: "price_1ME71oHxQ9v68qpGfFSNGx5a", // LIVE mode, see stripe dashboard
    price_id: "price_1MECASHxQ9v68qpGhO3uWriR", // TEST mode, see stripe dashboard
    description: "The apple is a fruit that is rich in fibre, vitamins and minerals. It is a good fruit for everybody except for diabetic and obese people, due to its high starch and sugar contents.",
    price: 499,
    imageSrc: "http://127.0.0.1:5173/apples.jpg",
    imageAlt: "Image of apples.",
    currency: "EUR",
  },
  {
    name: "Oranges",
    // price_id: "price_1ME79IHxQ9v68qpGSsCw3F1T", // LIVE mode, see stripe dashboard
    price_id: "price_1MECBeHxQ9v68qpGXTI1ZOd5", // TEST mode, see stripe dashboard
    description: "The term orange may refer to a number of citrus trees that produces fruit for people to eat. Oranges are a very good source of Vitamin C. Orange juice is an important part of many people's breakfast.",
    price: 599,
    imageSrc: "http://127.0.0.1:5173/oranges.jpg",
    imageAlt: "Image of oranges.",
    currency: "EUR",
  },
  {
    name: "Mini Bananas",
    //price_id: "price_1MGQtiHxQ9v68qpGz18vp3u9", // LIVE mode, see stripe dashboard
    price_id: "price_1MGTuWHxQ9v68qpGF6QHH2A3", // TEST mode, see stripe dashboard
    description: "The banana is rich in fibre, potassium and some beneficial vitamins for health. It is a good fruit for everybody except for diabetic and obese people, due to its high starch and sugar contents.",
    price: 299,
    imageSrc: "http://127.0.0.1:5173/mini-bananas.jpg",
    imageAlt: "Image of mini bananas.",
    currency: "EUR",
  },
];

function App() {
  /* Gets the totalPrice and a method for redirecting to stripe */
  const { totalPrice, redirectToCheckout, cartCount, clearCart, cartDetails } = useShoppingCart();



  return (
    <div className="App">
      <div className="grid grid-cols-1 md:grid-cols-3 gab-2">

        <div className="col-span-2">
          <div className="flex justify-center text-3xl m-4">Products List</div>
          {/* Renders the products */}
          <Products product={productData} />
        </div>

        <div className="grid grid-cols-1 gap-6 content-start">
          <div className="flex justify-center text-3xl m-4">Shopping Cart</div>
          {/* Renders the shopping cart */}
          <Cart2/>
        </div>

      </div>
    </div>
  );
}

export default App;

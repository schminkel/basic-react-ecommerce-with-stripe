import React from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useShoppingCart } from "use-shopping-cart";
import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  // More products...
]

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
]


export function Cart2(props) {

  const { setItemQuantity, formattedTotalPrice, redirectToCheckout, cartCount, clearCart, cartDetails, removeItem } = useShoppingCart();

  const cartProducts = Object.values(cartDetails);

  // handle onChange event of the quantity dropdown
  const handleQuantityChange = function (e, productId) {
    console.log("e: ", e);
    console.log("productId: ", productId);

    const newQuantity = parseInt(e.value, 10);
    setItemQuantity(productId, newQuantity);
  }

  return (
    <>
      {console.log("cartProducts: ", cartProducts)}

      {/* <ul>
      {cartProducts.map((cartProduct) => (
        <li key={cartProduct.id} className="list-disc">{cartProduct.name}</li>
      ))}
      </ul> */}

      <form className="mt-0 ml-8 mr-8 mb-8">
        <div >
          <h2 className="sr-only">Items in your shopping cart</h2>
          <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">

            {cartProducts.map((product, productIdx) => (

              <li key={product.formattedValue} className="flex py-6 xl:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-24 w-24 rounded-lg object-cover object-center xl:h-32 xl:w-32"
                  />
                </div>

                <div className="relative ml-4 flex flex-1 flex-col justify-between xl:ml-6">
                  <div>
                    <div className="flex justify-between xl:grid xl:grid-cols-2">
                      <div className="pr-6">
                        <h3 className="text-sm">
                          <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        {product.size ? <p className="mt-1 text-sm text-gray-500">{product.size}</p> : null}
                      </div>

                      <p className="text-right text-sm font-medium text-gray-900">{product.formattedValue}</p>
                    </div>

                    <div className="mt-4 flex items-center xl:absolute xl:top-0 xl:left-1/2 xl:mt-0 xl:block">


                      { /* get index of options array that matches product.quantity */ }
                      { /* indexSelected = (options.findIndex(x => x.value == product.quantity)) */ }
                      <Select
                          value={options.value}
                          options={options}
                          defaultValue={options[(options.findIndex(x => x.value == product.quantity))]}
                          className="border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 xl:text-sm"
                          onChange={e => handleQuantityChange(e, product.id)}/>


                      <button
                        type="button"
                        className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 xl:ml-0 xl:mt-3"
                        onClick={() => removeItem(product.id)}>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>

                  {/* <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                    {product.inStock ? (
                      <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                    ) : (
                      <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                    )}

                    <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
                  </p> */}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Order summary */}
        <div className="mt-10">
          <div className="rounded-lg bg-gray-50 px-4 py-6 xl:p-6 xl:p-8">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <dl className="-my-4 divide-y divide-gray-200 text-sm">
                {/* <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">$99.00</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd className="font-medium text-gray-900">$5.00</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Tax</dt>
                  <dd className="font-medium text-gray-900">$8.32</dd>
                </div> */}
                <div className="flex items-center justify-between py-4">
                  <dt className="text-base font-medium text-gray-900">Order total</dt>
                  <dd className="text-base font-medium text-gray-900">{formattedTotalPrice}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              onClick={() => redirectToCheckout()}>
              Checkout
            </button>
          </div>

          <div className="mt-10">
            <button
              type="button"
              className="w-full rounded-md border border-transparent bg-red-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              onClick={() => clearCart()}>
              Clear Cart
            </button>
          </div>

        </div>
      </form>
    </>
  );
}

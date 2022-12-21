import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useShoppingCart } from "use-shopping-cart";
import { toast } from 'react-toastify';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar(props) {

  const { redirectToCheckout, handleCartClick, shouldDisplayCart, cartCount } = useShoppingCart();
  const notImplemented = () =>
    toast("🦄 NOT implemented yet!", {
      position: "top-left", // top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark", // dark, light, colored
    });

  return (
    <>
      <Disclosure as="nav" className="sticky top-0 z-40 bg-white bg-opacity-90 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="http://127.0.0.1:5173/shop.svg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="http://127.0.0.1:5173/shop.svg"
                    alt="Your Company"
                  />
                  
                </div>
                
                <div className="flex flex-shrink-0 items-center ml-3 mr-3 text-xl font-medium">
                  Fruits Online
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Fruits
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    onClick={() => notImplemented()}
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="absolute mt-0 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {/* Checkout Button */}
                <div className="flex-shrink-0 mr-4 hidden sm:block">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => redirectToCheckout()}
                  >
                    <span>Checkout</span>
                  </button>
                </div>

                {/* Cart Button */}
                <button
                  type="button"
                  className="rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={() => handleCartClick()}
                >
                  <span className="sr-only">View notifications</span>
                  <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
                </button>
                { /* Cart Counter */ }
                {cartCount > 0 &&
                  <span className="absolute right-2 sm:right-0 top-2 rounded-full bg-red-600 w-6 h-6 top right p-0.5 m-0 text-white font-normal text-sm text-center hover:cursor-pointer hover:bg-red-700"
                  onClick={() => handleCartClick()}>{cartCount}
                  </span>
                }
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Fruits
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                onClick={() => notImplemented()}
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
      </Disclosure>
    </>
  )

}
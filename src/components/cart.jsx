import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useShoppingCart } from "use-shopping-cart";
import Select from "react-select";

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
];

export function Cart(props) {

  const {
    handleCartClick,
    shouldDisplayCart,
    setItemQuantity,
    formattedTotalPrice,
    redirectToCheckout,
    cartDetails,
    removeItem,
  } = useShoppingCart();

  const cartProducts = Object.values(cartDetails);

  // handle onChange event of the quantity dropdown
  const handleQuantityChange = function (e, productId) {
    const newQuantity = parseInt(e.value, 10);
    setItemQuantity(productId, newQuantity);
  };

  return (
    <Transition.Root show={shouldDisplayCart} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => handleCartClick()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => handleCartClick()}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {/* Product list */}
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartProducts.map((product, productIdx) => (
                              <li
                                key={product.formattedValue}
                                className="flex py-6"
                              >
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-300">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">

                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                        <div className="text-left text-xs font-thin text-gray-500">
                                          ({product.formattedPrice}
                                          &nbsp;/&nbsp;each)
                                        </div>
                                      </h3>
                                      <p className="text-right text-sm font-medium text-gray-900">
                                        {product.formattedValue}
                                      </p>
                                    </div>
                                    <p className="mt-1"></p>
                                  </div>
                                  
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="text-gray-500">
                                      {/* Select quantity dropdown */}
                                      <Select
                                        value={options.value}
                                        options={options}
                                        
                                        defaultValue={
                                          options[
                                            options.findIndex(
                                              (x) => x.value == product.quantity // get index of options array that matches product.quantity
                                            )
                                          ]
                                        }
                                        className="border-gray-300 py-3.5 text-left text-base font-normal leading-5 text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                        
                                        onChange={(e) =>
                                          handleQuantityChange(e, product.id)
                                        }
                                      />
                                    </div>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500 py-5"
                                        onClick={() => removeItem(product.id)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>

                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{formattedTotalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          onClick={() => redirectToCheckout()}
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500"></div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

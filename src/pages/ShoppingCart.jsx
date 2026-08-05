import React, { useState, useEffect } from "react";
import Container from "../components/layouts/Container";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts/2");
        const data = await response.json();

        if (data && data.products) {
          setCartItems(data.products);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartData();
  }, []);

  const handleQuantityChange = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity =
            type === "increase" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems
    .slice(0, 2)
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="py-6 sm:py-10 md:py-16 font-pop text-[#1a1a1a]">
      <Container>
        {/* Title */}
        <h1 className="text-center font-semibold text-2xl sm:text-3xl mb-6 sm:mb-8">
          My Shopping Cart
        </h1>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Cart Table & Coupon */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Cart Table Container */}
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-xs text-gray-400 font-medium tracking-wider">
                      <th className="py-4 px-4 sm:px-6 uppercase">Product</th>
                      <th className="py-4 px-3 sm:px-4 uppercase">Price</th>
                      <th className="py-4 px-3 sm:px-4 uppercase text-center">
                        Quantity
                      </th>
                      <th className="py-4 px-3 sm:px-4 uppercase">Subtotal</th>
                      <th className="py-4 px-4 sm:px-6"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {cartItems.length > 0 ? (
                      cartItems.slice(0, 2).map((item) => (
                        <tr key={item.id}>
                          {/* Product Image & Name */}
                          <td className="py-4 px-4 sm:px-6">
                            <div className="flex items-center gap-3">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded flex-shrink-0"
                              />
                              <span className="font-medium text-gray-800 line-clamp-1">
                                {item.title}
                              </span>
                            </div>
                          </td>

                          {/* Price */}
                          <td className="py-4 px-3 sm:px-4 text-gray-700 font-medium whitespace-nowrap">
                            ${item.price.toFixed(2)}
                          </td>

                          {/* Quantity Buttons */}
                          <td className="py-4 px-3 sm:px-4">
                            <div className="flex items-center justify-between border border-gray-200 rounded-full py-1.5 px-3 w-[90px] sm:w-[110px] mx-auto bg-gray-50">
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.id, "decrease")
                                }
                                className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-gray-500 hover:text-black font-bold text-sm sm:text-base"
                              >
                                -
                              </button>
                              <span className="font-medium text-gray-800 text-xs sm:text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.id, "increase")
                                }
                                className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-gray-500 hover:text-black font-bold text-sm sm:text-base"
                              >
                                +
                              </button>
                            </div>
                          </td>

                          {/* Subtotal for each item */}
                          <td className="py-4 px-3 sm:px-4 font-bold text-gray-900 whitespace-nowrap">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>

                          {/* Remove Item Button */}
                          <td className="py-4 px-4 sm:px-6 text-right">
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 text-xs transition-colors ml-auto"
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="py-8 text-center text-gray-500"
                        >
                          Your cart is empty!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Cart Table Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 border-t border-gray-100 bg-white">
                <button className="w-full sm:w-auto px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-full transition-colors">
                  Return to shop
                </button>
                <button className="w-full sm:w-auto px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-full transition-colors">
                  Update Cart
                </button>
              </div>
            </div>

            {/* Responsive Coupon Code Section */}
            <div className="border border-gray-200 rounded-lg p-4 sm:p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-semibold text-base sm:text-lg text-gray-800 whitespace-nowrap">
                Coupon Code
              </span>
              <div className="relative w-full sm:max-w-md flex items-center">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="w-full border border-gray-200 rounded-full py-3 pl-5 pr-32 sm:pr-36 text-sm focus:outline-none focus:border-gray-400"
                />
                <button className="absolute right-0 top-0 bottom-0 h-full px-5 sm:px-8 bg-[#333333] hover:bg-black text-white text-xs sm:text-[15px] font-semibold rounded-full transition-colors flex items-center justify-center">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Cart Total Sidebar */}
          <div className="lg:col-span-4 border border-gray-200 rounded-lg p-5 sm:p-6 bg-white flex flex-col gap-4">
            <h2 className="text-lg sm:text-xl font-medium text-gray-900">
              Cart Total
            </h2>

            <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
              <span className="text-gray-500">Subtotal:</span>
              <span className="font-semibold text-gray-800">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
              <span className="text-gray-500">Shipping:</span>
              <span className="font-medium text-gray-800">Free</span>
            </div>

            <div className="flex items-center justify-between text-base py-2">
              <span className="text-gray-600 font-normal">Total:</span>
              <span className="font-bold text-gray-900 text-lg">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <button className="w-full py-3.5 mt-2 bg-primary hover:opacity-95 text-white font-semibold text-sm rounded-full transition-opacity">
              Proceed to checkout
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ShoppingCart;

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';
import Navbar from '../Navbar/page'; // Adjust the path based on your Navbar location
import Footer from '../Footer/page';

const CartItem = () => {
  // State for quantity and subtotal
  const [quantity, setQuantity] = useState(1);
  const price = 650; // Price of the product
  
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg mb-4 gap-4 sm:flex-col md:flex-row">
      {/* Product Image and Details */}
      <div className="flex items-center gap-4">
        <Image src="/led.png" alt="LCD Monitor" width={60} height={60} />
        <div>
          <p className="font-semibold hidden sm:block text-lg">IPS LCD Gaming Monitor</p>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col items-center">
        <p className="text-gray-800 font-semibold text-xl">${price}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2">
        <button 
          onClick={handleDecrease} 
          className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          <Minus size={16} />
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button 
          onClick={handleIncrease} 
          className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* Subtotal */}
      <div className="flex flex-col items-center">
        <p className="text-gray-800 font-semibold text-xl">Subtotal</p>
        <p className="text-lg font-bold text-red-600">${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default function CartPage() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      <div className="py-12 px-4 sm:px-8 md:px-28">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Your Cart</h2>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 sm:mt-0">
              Proceed to Checkout
            </button>
          </div>
          
          {/* Cart Items List */}
          <CartItem />
          <CartItem />
          <CartItem />

          {/* Total */}
          <div className="flex flex-col sm:flex-row gap-5 justify-between items-center sm:justify-end mt-8">
            <p className="text-xl font-semibold">Total</p>
            <p className="text-2xl font-bold text-red-600">${(650 * 3).toFixed(2)}</p>
          </div>
        </div>
      </div>
      < Footer />
    </>

  );
}

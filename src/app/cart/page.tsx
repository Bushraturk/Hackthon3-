

'use client';

import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaAngleRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { urlFor } from '@/lib/sanityImageUtils';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  discountPercent: number;
  category: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  rating: number;
  quantity: number;
};

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]); // Cart items state
  const [loading, setLoading] = useState(true); // Loading state
  const router = useRouter(); // Router to navigate to checkout

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (storedCart.length) {
      setCartItems(storedCart);
    }
    setLoading(false);
  }, []);

  // Handle quantity change (increment/decrement)
  const handleQuantityChange = (index: number, type: 'increment' | 'decrement') => {
    const updatedCartItems = [...cartItems];
    const item = updatedCartItems[index];

    if (type === 'increment') {
      item.quantity += 1;
    } else if (type === 'decrement' && item.quantity > 1) {
      item.quantity -= 1;
    }

    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  // Remove item from the cart
  const handleRemoveItem = (index: number) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  // Calculate the subtotal of the cart
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = Number(item.price);
      const quantity = Number(item.quantity);
      if (!isNaN(price) && !isNaN(quantity)) {
        return acc + price * quantity;
      }
      return acc;
    }, 0);
  };

  // Calculate total discount
  const calculateDiscount = () => {
    return cartItems.reduce((acc, item) => {
      const price = Number(item.price);
      const discountPercent = Number(item.discountPercent);
      const quantity = Number(item.quantity);
      if (!isNaN(price) && !isNaN(discountPercent) && !isNaN(quantity)) {
        return acc + (price * discountPercent * quantity) / 100;
      }
      return acc;
    }, 0);
  };

  // Calculate final total
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const deliveryFee = 15; // Fixed delivery fee
    if (!isNaN(subtotal) && !isNaN(discount)) {
      return subtotal - discount + deliveryFee;
    }
    return 0;
  };

  // Redirect to checkout page
  const handleCheckout = () => {
    router.push('/Checkout');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const total = calculateTotal();

  return (
    <section className="p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <nav className="ml-4 sm:ml-20 text-sm text-gray-700 mb-4">
          <ol className="flex space-x-2">
            <li>Home</li>
            <li><FaAngleRight size={20} /></li>
            <li>Cart</li>
          </ol>
        </nav>

        <div className="space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => {
              const imageURL = item.image?.asset?._ref 
                ? urlFor(item.image).url() 
                : '/path/to/fallback-image.jpg'; // Fallback image if no image URL exists

              // Total price for the product
              const productTotal = (item.price * item.quantity).toFixed(2);

              return (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4 relative">
                  <Image 
                    src={imageURL} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-lg object-cover" 
                    width={100} 
                    height={100}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.category}</p>
                    <p className="mt-2 font-semibold">${item.price}</p>
                    {/* Show total price for this product */}
                    <p className="text-sm text-gray-600">Total: ${productTotal}</p>
                  </div>
                  <div className="absolute top-0 right-0">
                    <button onClick={() => handleRemoveItem(index)} className="text-red-500">
                      <RiDeleteBin6Fill size={20} />
                    </button>
                  </div>
                  <div className="flex mt-4 bg-gray-100 border rounded-lg items-center gap-2 px-3 py-1">
                    <button
                      className={`text-gray-500 border rounded px-3 py-1 ${item.quantity <= 1 ? 'cursor-not-allowed' : ''}`}
                      onClick={() => handleQuantityChange(index, 'decrement')}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-gray-700">{item.quantity}</span>
                    <button
                      className="text-gray-500 border rounded px-3 py-1"
                      onClick={() => handleQuantityChange(index, 'increment')}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="w-full bg-white shadow-md p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Discount (-10%)</span>
              <span className="text-red-500">-${calculateDiscount().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Delivery Fee</span>
              <span>$15.00</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6">
            <input type="radio" id="cod" name="payment" value="cash-on-delivery" defaultChecked />
            <label htmlFor="cod" className="ml-2 text-lg font-medium">Cash on Delivery</label>
          </div>

          {/* Checkout Button */}
          <div>
            <button 
              className={`w-full bg-black text-white rounded p-3 mt-4 hover:bg-gray-800 transition ${total > 0 ? '' : 'cursor-not-allowed opacity-50'}`}
              onClick={handleCheckout}
              disabled={total <= 0} // Disable button if total is 0
            >
              Proceed to Checkout →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;





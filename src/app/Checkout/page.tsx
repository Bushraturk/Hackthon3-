'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaAngleLeft } from 'react-icons/fa';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]); // Define the type here
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
    setLoading(false);
  }, []);

  // Handle user details input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  // Calculate the total price from cart
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = item.price * item.quantity;
      return acc + price;
    }, 0);
  };

  const total = calculateTotal();

  // Handle checkout form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle your form submission, e.g., send data to an API
    console.log('Checkout details:', userDetails);
    alert('Checkout successful!');
    // Redirect to a confirmation page or back to home page
    router.push('/');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="p-6 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <nav className="ml-4 sm:ml-20 text-sm text-gray-700 mb-4">
          <ol className="flex space-x-2">
            <li className="cursor-pointer" onClick={() => router.push('/cart')}>Cart</li>
            <li><FaAngleLeft size={20} /></li>
            <li>Checkout</li>
          </ol>
        </nav>

        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-lg">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded-lg mt-2"
              />
            </div>
            <div>
              <label htmlFor="address" className="block font-medium text-lg">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded-lg mt-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block font-medium text-lg">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={userDetails.city}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg mt-2"
                />
              </div>
              <div>
                <label htmlFor="postalCode" className="block font-medium text-lg">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={userDetails.postalCode}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg mt-2"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-6 bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between text-lg">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment method */}
          <div className="mt-4">
            <h3 className="font-medium text-lg">Payment Method</h3>
            <div className="flex gap-4">
              <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" defaultChecked />
              <label htmlFor="creditCard">Credit Card</label>
              <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" />
              <label htmlFor="cashOnDelivery">Cash on Delivery</label>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutPage;

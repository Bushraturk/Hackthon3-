'use client' // Enabling client-side rendering for the component

import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa"; // Importing dropdown icon
import { FiShoppingCart } from "react-icons/fi"; // Importing shopping cart icon
import { HiOutlineUserCircle } from "react-icons/hi2"; // Importing user profile icon
import { GiHamburgerMenu } from "react-icons/gi"; // Importing hamburger menu icon
import SearchBar from "@/app/Component/SearchBar"; // Importing the SearchBar component

// Shop Dropdown Component
const ShopDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility

  const toggleDropdown = () => setIsOpen(!isOpen); // Toggle function to open/close dropdown

  return (
    <div className="relative flex">
      <button
        className="text-base px-2 py-0 ml-5 text-gray-700 rounded flex items-center"
        onClick={toggleDropdown} // Clicking this button will toggle the dropdown
      >
        Shop <FaAngleDown className="ml-2" /> {/* Displaying the dropdown arrow */}
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 mt-4 w-48 bg-white border border-gray-200 rounded shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing the dropdown when clicking inside
        >
          {/* Dropdown Links */}
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Men
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Women
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Kids
          </Link>
        </div>
      )}
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the hamburger menu

  return (
    <header className="text-gray-600 body-font border-b">
      {/* Desktop Navigation (Large Screens) */}
      <div className="hidden lg:flex justify-between items-center px-6 py-4">
        <div className="flex text-black items-center space-x-4">
          {/* Shop.CO Logo */}
          <Link href="#" className="text-2xl font-serif font-bold">
            SHOP.CO
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 mt-2">
          <ShopDropdown /> {/* Dropdown for "Shop" options */}
          <Link href="/HomePage" className="text-base hover:text-gray-900">
            Home
          </Link>
          <Link href="/AboutUs" className="text-base hover:text-gray-900">
            About Us
          </Link>
          <Link href="/ContactUs" className="text-base hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Search Bar Component */}
        <SearchBar />

        {/* Icons for Cart and User Profile */}
        <div className="flex space-x-6">
          <Link href="/cart" className="hover:text-gray-900">
            <FiShoppingCart size={20} /> {/* Shopping Cart Icon */}
          </Link>
          <Link href="/UserProfile" className="hover:text-gray-900">
            <HiOutlineUserCircle size={20} /> {/* User Profile Icon */}
          </Link>
        </div>
      </div>

      {/* Mobile Navigation (Small Screens) */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        <button
          className="text-2xl"
          onClick={() => setIsMenuOpen((prev) => !prev)} // Toggle the mobile menu
        >
          <GiHamburgerMenu /> {/* Hamburger Menu Icon */}
        </button>

        {/* Shop.CO Logo */}
        <Link href="#" className="text-2xl font-serif font-bold">
          SHOP.CO
        </Link>

        {/* Icons for Cart and User Profile */}
        <div className="flex space-x-4">
          <Link href="/cart" className="hover:text-gray-900">
            <FiShoppingCart size={20} />
          </Link>
          <Link href="/UserProfile" className="hover:text-gray-900">
            <HiOutlineUserCircle size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col bg-gray-100 px-4 py-3 space-y-3">
          {/* Links for Mobile View */}
          <Link href="/HomePage" className="text-base hover:text-gray-900">
            Home
          </Link>
          <Link href="/AboutUs" className="text-base hover:text-gray-900">
            About Us
          </Link>
          <Link href="/ContactUs" className="text-base hover:text-gray-900">
            Contact
          </Link>
          <ShopDropdown /> {/* Dropdown for "Shop" options in mobile view */}
        </div>
      )}
    </header>
  );
};

export default Navbar;


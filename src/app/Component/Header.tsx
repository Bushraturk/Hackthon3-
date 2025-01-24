'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "@/app/Component/SearchBar"; // Import SearchBar component



const ShopDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex">
      <button
        className="text-base px-2 py-0 ml-5 text-gray-700 rounded flex items-center"
        onClick={toggleDropdown}
      >
        Shop <FaAngleDown className="ml-2" />
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-4 w-48 bg-white border border-gray-200 rounded shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
        >
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  
  return (
    <header className="text-gray-600 body-font border-b">
      <div className="hidden lg:flex justify-between items-center px-6 py-4">
        <div className="flex text-black items-center space-x-4">
          <Link href="/" className="text-2xl font-serif font-bold">
            SHOP.CO
          </Link>
        </div>

        <nav className="flex space-x-8 mt-2">
          <ShopDropdown />
          <Link href="#" className="text-base hover:text-gray-900">
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

        <div className="flex space-x-6">
          <Link href="/cart" className="hover:text-gray-900">
            <FiShoppingCart size={20} />
          </Link>
          <Link href="/UserProfile" className="hover:text-gray-900">
            <HiOutlineUserCircle size={20} />
          </Link>
        </div>
      </div>

      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        <button
          className="text-2xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>

        <Link href="/" className="text-2xl font-serif font-bold">
          SHOP.CO
        </Link>

        <div className="flex space-x-4">
          <Link href="/cart" className="hover:text-gray-900">
            <FiShoppingCart size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-900">
            <HiOutlineUserCircle size={20} />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col bg-gray-100 px-4 py-3 space-y-3">
          <Link href="#" className="text-base hover:text-gray-900">
            Onsale
          </Link>
          <Link href="/AboutUs" className="text-base hover:text-gray-900">
            About Us
          </Link>
          <Link href="/ContactUs" className="text-base hover:text-gray-900">
            Contact
          </Link>
          <ShopDropdown />
        </div>
      )}
    </header>
  );
};

export default Navbar;

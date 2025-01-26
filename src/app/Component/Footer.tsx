import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  FaPaypal,
  FaGooglePay,
  FaApple,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-black body-font bg-[#F2F0F1]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-[30px] mb-3">
                Shop.co
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-black">
                    We have clothes that suits your style and which you’re proud
                    to wear. From women to men.
                  </p>{" "}
                </li>
                <div className="flex w-full py-4 px-5 mt-0 pt-0 md:h-auto justify-end items-end">
                  <div className="flex gap-5">
                    <a
                      href="#"
                      className="text-3xl text-blue-500 hover:text-blue-700"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="#"
                      className="text-3xl text-pink-500 hover:text-pink-700"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#"
                      className="text-3xl text-blue-400 hover:text-blue-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-3xl text-black hover:text-gray-800"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="#"
                      className="text-3xl text-blue-600 hover:text-blue-800"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-black">About</a>
                </li>
                <li>
                  <a className="text-black">Features</a>
                </li>
                <li>
                  <a className="text-black">Work</a>
                </li>
                <li>
                  <a className="text-black">Career</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                HELP
              </h2>

              <nav className="list-none mb-10">
                <li>
                  <a className="text-black">Customer Support</a>
                </li>
                <li>
                  <a className="text-black">Delivery Details</a>
                </li>
                <li>
                  <a className="text-black">Terms & Conditions</a>
                </li>
                <li>
                  <a className="text-black">Privacy Policy</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                F A Q
              </h2>

              <nav className="list-none mb-10">
                <li>
                  <a className="text-black">Account</a>
                </li>
                <li>
                  <a className="text-black">Manage Deliveries</a>
                </li>
                <li>
                  <a className="text-black">Orders</a>
                </li>
                <li>
                  <a className="text-black">Payments</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                RESOURCES
              </h2>

              <nav className="list-none mb-10">
                <li>
                  <a className="text-black"> Free eBooks</a>
                </li>
                <li>
                  <a className="text-black">Development Tutorial</a>
                </li>
                <li>
                  <a className="text-black">How to - Blog</a>
                </li>
                <li>
                  <a className="text-black">Youtube Playlist</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4"></div>
          </div>
        </div>
        <div className="h-px bg-gray-300 text-black my-4" />

        {/*  */}
        <div className="bg-[#F2F0F1]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
            <p className="text-black text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            <div className="flex w-full py-4 px-5 mt-0 pt-0 md:h-auto justify-end items-end gap-5">
              <a
                href="#"
                className="text-3xl text-blue-500 hover:text-blue-700"
              >
                <FaPaypal />
              </a>
              <a
                href="#"
                className="text-3xl text-green-500 hover:text-green-700"
              >
                <FaGooglePay />
              </a>
              <a href="#" className="text-3xl text-black hover:text-gray-800">
                <FaApple />
              </a>
              <a
                href="#"
                className="text-3xl text-blue-700 hover:text-blue-900"
              >
                <FaCcVisa />
              </a>
              <a
                href="#"
                className="text-3xl text-blue-600 hover:text-blue-800"
              >
                <FaCcMastercard />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

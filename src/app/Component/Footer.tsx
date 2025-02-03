import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaPaypal,
  FaGooglePay,
  FaApple,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Shop.co Brand */}
          <div>
            <h2 className="text-2xl font-bold">Shop.co</h2>
            <p className="text-sm mt-3">
              We have clothes that suit your style and which you’re proud to
              wear. From women to men.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <FaFacebook className="text-2xl text-blue-500 cursor-pointer hover:text-blue-700" />
              <FaInstagram className="text-2xl text-pink-500 cursor-pointer hover:text-pink-700" />
              <FaTwitter className="text-2xl text-blue-400 cursor-pointer hover:text-blue-600" />
              <FaGithub className="text-2xl text-gray-800 cursor-pointer hover:text-gray-900" />
              <FaLinkedin className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800" />
            </div>
          </div>

          {/* Footer Links */}
          {[
            { title: "Company", links: ["About", "Features", "Work", "Career"] },
            { title: "Help", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
            { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
            { title: "Resources", links: ["Free eBooks", "Development Tutorial", "How to - Blog", "YouTube Playlist"] },
          ].map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <ul className="mt-3 space-y-2">
                {section.links.map((link, i) => (
                  <li key={i} className="text-sm cursor-pointer hover:text-gray-600">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 my-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Shop.co © {new Date().getFullYear()}, All Rights Reserved</p>
          {/* Payment Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <FaPaypal className="text-2xl text-blue-500 cursor-pointer hover:text-blue-700" />
            <FaGooglePay className="text-2xl text-green-500 cursor-pointer hover:text-green-700" />
            <FaApple className="text-2xl text-black cursor-pointer hover:text-gray-700" />
            <FaCcVisa className="text-2xl text-blue-700 cursor-pointer hover:text-blue-900" />
            <FaCcMastercard className="text-2xl text-red-600 cursor-pointer hover:text-red-800" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


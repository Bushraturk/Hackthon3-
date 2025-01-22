import React from "react";
import Image from "next/image";

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
                <li className="flex mt-10 gap-3 items-center sm:justify-center sm:items-center">
                  <Image
                    src="/1.png"
                    alt="Twitter"
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-md"
                  />
                  <Image
                    src="/2.png"
                    alt="facebook"
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-md"
                  />
                  <Image
                    src="/3.png"
                    alt="insta"
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-md"
                  />
                  <Image
                    src="/4.png"
                    alt="Github"
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-md"
                  />
                </li>
               
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

            <div className="flex w-full py-4 px-5 mt-0 pt-0 md:h-auto justify-end items-end">
              <Image
                src="/Badge.png"
                alt="Hero Image"
                // layout="fill"
                // objectFit="cover"
                className="rounded-md"
              />
              <Image
                src="/Badge2.png"
                alt=""
                // layout="fill"
                // objectFit="cover"
                className="rounded-md"
              />
              <Image
                src="/Badge3.png"
                alt="Hero Image"
                // layout="fill"
                // objectFit="cover"
                className="rounded-md"
              />
              <Image
                src="/Badge5.png"
                alt="Hero Image"
                // layout="fill"
                // objectFit="cover"
                className="rounded-md"
              />
              <Image
                src="/Badge6.png"
                alt="Hero Image"
                // layout="fill"
                // objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

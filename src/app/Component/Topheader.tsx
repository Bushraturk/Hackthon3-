

import React from "react";
import { RxCross1 } from "react-icons/rx";
import { SignUpButton } from "@clerk/nextjs";

export default function TopHeader() {
  return (
    <div className="w-full bg-black text-white px-4 py-3">
      {/* Container */}
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-[1200px] mx-auto gap-2">
        {/* Left Side: Sale Message */}
        <p className="text-sm sm:text-base lg:ml-40 text-center sm:text-left leading-relaxed flex-1">
          Sign up and get <span className="font-bold">20% off</span> on your first order.{" "}
          {/* Wrap this part with SignUpButton */}
          <SignUpButton>
            <span className="font-bold ml-1 cursor-pointer underline hover:text-gray-300">
              Sign Up Now
            </span>
          </SignUpButton>
        </p>

        {/* Close Icon */}
        <button
          type="button"
          aria-label="Close"
          className="flex items-center justify-center sm:ml-4 mt-2 sm:mt-0 text-gray-400 hover:text-gray-300 transition"
        >
          <RxCross1 size={20} />
        </button>
      </div>
    </div>
  );
}
























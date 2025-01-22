import React from "react";
import Image from "next/image";

const BrowseByDressStyle = () => {
  // Data for the images and titles
  const dressStyles = [
    { title: "Casual", imgSrc: "/image-1.png", styles: "w-[407px] h-[289px]" },
    { title: "Formal", imgSrc: "/image-2.png", styles: "w-[684px] h-[289px]" },
    { title: "Party", imgSrc: "/image-3.png", styles: "w-[684px] h-[289px]" },
    { title: "Gym", imgSrc: "/image-4.png", styles: "w-[407px] h-[289px]" },
  ];

  return (
    <div className="w-full bg-gray-100 py-10 px-6 flex justify-center">
      <div className="max-w-[1440px] w-full">
        {/* Title */}
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
          Browse By Dress Style
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 ml-20 mr-20 gap-5 lg:gap-4 justify-items-center">
          {dressStyles.map((style, index) => (
            <div
              key={index}
              className={`relative rounded-[20px] overflow-hidden bg-white shadow-lg ${style.styles}`}
            >
              {/* Image */}
              <Image
                src={style.imgSrc}
                alt={style.title}
                layout="fill"
                className="object-cover"
              />
              {/* Title Overlay */}
              <div className="absolute inset-0 bg-opacity-40 flex">
                <span className="text-black text-lg lg:text-2xl mt-5 ml-5 font-semibold">
                  {style.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseByDressStyle;




















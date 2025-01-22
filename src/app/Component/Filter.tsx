// "use client";
// import React from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { IoIosArrowUp } from "react-icons/io";
// import { FaAngleRight } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";

// const Filter = () => {
//   return (
//     <div className="flex flex-col lg:flex-row bg-white">
//       {/* Left Side (Filter Section) */}
//       <div className="w-full ml-8 lg:w-1/4 p-4">
//         <nav className="text-sm text-black mb-4">
//           <ol className="flex space-x-2">
//             <li>Home</li>
//             <li><FaAngleRight size={20} /></li>
//             <li>Casual</li>
//           </ol>
//         </nav>

//         <aside className="space-y-6">
//           <div>
//             <h3 className="flex justify-between text-lg">
//               Filters
//               <span className="w-10"><img src="frame1.png" alt="frame" className="w-auto h-auto" /></span>
//             </h3>
//             <div className="border-b border-gray-200" />
//           </div>

//           {/* Categories */}
//           <div className="w-full bg-white flex flex-col justify-start p-4">
//             <ul className="text-gray-700 text-sm space-y-4">
//               <li className="flex justify-between pb-2">T-Shirts <MdOutlineKeyboardArrowRight /></li>
//               <li className="flex justify-between pb-2">Shorts <MdOutlineKeyboardArrowRight /></li>
//               <li className="flex justify-between pb-2">Shirts <MdOutlineKeyboardArrowRight /></li>
//               <li className="flex justify-between pb-2">Hoodies <MdOutlineKeyboardArrowRight /></li>
//               <li className="flex justify-between pb-2">Jeans <MdOutlineKeyboardArrowRight /></li>
//             </ul>
//           </div>

//           <div className="h-px bg-gray-200 text-black my-4" />

//           {/* Price */}
//           <div>
//             <h3 className="flex justify-between text-lg font-bold mb-4">
//               Price <IoIosArrowUp />
//             </h3>
//             {/* <img src="Group 6.png" alt="slider" /> */}
//             <p className="flex justify-between text-sm">$50 <span>$200</span></p>
//           </div>

//           {/* Colors */}
//           <div className="bg-white w-full flex flex-col justify-start p-4">
//             <h3 className="flex justify-between text-lg font-bold mb-4">
//               Colors <IoIosArrowUp />
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {["#00FF00", "#FF0000", "#FFFF00", "#FFA500", "#00FFFF", "#800080", "#FF1493", "#FFFFFF"].map((color, index) => (
//                 <div key={index} className={`w-8 h-8 rounded-full border ${color === "#00FF00" ? "ring-2 ring-white" : ""}`} style={{ backgroundColor: color }}></div>
//               ))}
//             </div>
//           </div>

//           {/* Sizes */}
//           <div className="bg-white border border-gray-50">
//             <h3 className="flex justify-between text-lg font-bold mb-4">
//               Sizes <IoIosArrowUp />
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map((size, index) => (
//                 <button key={index} className={`px-4 py-2 rounded-full text-sm border hover:bg-black hover:text-white ${size === "Large" ? "bg-white text-black" : "text-black"}`}>
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Dress Style */}
//           <div className="w-full border border-gray-50 flex flex-col justify-start p-4">
//             <h3 className="flex justify-between text-lg font-bold mb-4">
//               Dress Style <IoIosArrowUp />
//             </h3>
//             <ul className="text-gray-700 text-sm space-y-4">
//               <li className="flex justify-between pb-2">Casual <MdOutlineKeyboardArrowRight /></li>
//               <li className="flex justify-between pb-2">Formal <MdOutlineKeyboardArrowRight /></li>
//               <li className="flex justify-between pb-2">Party <MdOutlineKeyboardArrowRight /></li>
//               <li className="flex justify-between pb-2">Gym <MdOutlineKeyboardArrowRight /></li>
//             </ul>
//           </div>

//           {/* Apply Filter Button */}
//           <div className="text-center mt-4">
//             <button className="w-full py-3 bg-black text-white rounded-full text-sm font-bold">
//               Apply Filter
//             </button>
//           </div>
//         </aside>
//       </div>
//       {/* Right Side (Products Grid) */}
//       <div className="w-full lg:w-3/4 px-4 py-8">
//         <div className="flex justify-between">
//           <h2 className="text-2xl mt-3 ml-5">Casual</h2>
//           <p className="flex text-sm text-gray-400">
//             Showing 1-10 of 100 Products{" "}
//             <span className="text-sm flex">
//               Sort by:{" "}
//               <button className="text-black flex">
//                 Most Popular <IoIosArrowDown />
//               </button>
//             </span>
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
//           {/* Product */}
//           {[ 
//             {
//               image: "/Tshirt2.png",
//               title: "Gradient Graphic T-shirt",
//               price: "$145",
//               discount: null,
//             },
//             {
//               image: "/Tshirt3.png",
//               title: "Polo with Tipping Details",
//               price: "$180",
//               discount: null,
//             },
//             {
//               image: "/Tshirt4.png",
//               title: "Black Stripped T-shirt",
//               price: "$120",
//               discount: "$150",
//             },
//             {
//               image: "/img2.png",
//               title: "Skinny Fit Jeans",
//               price: "$240",
//               discount: "$260",
//             },
//             {
//               image: "/img3.png",
//               title: "Checkered Shirt",
//               price: "$180",
//               discount: null,
//             },
//             {
//               image: "/img4.png",
//               title: "Sleeve Striped T-shirt",
//               price: "$130",
//               discount: "$160",
//             },
//             {
//               image: "/img5.png",
//               title: "VERTICAL STRIPED SHIRT",
//               price: "$212",
//               discount: "$232",
//             },
//             {
//               image: "/img6.png",
//               title: "COURAGE GRAPHIC T-SHIRT",
//               price: "$145",
//               discount: null,
//             },
//             {
//               image: "/img7.png",
//               title: "LOOSE FIT BERMUDA SHORTS",
//               price: "$80",
//               discount: null,
//             },
           
//           ].map((product, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md p-4">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-lg font-semibold">{product.title}</h3>
//               <div className="flex items-center mt-2">
//                 <span className="text-yellow-400">★★★★★</span>
//                 <span className="text-sm text-gray-500 ml-2">(5.0/5)</span>
//               </div>
//               <div className="flex mt-2 gap-4">
//                 <span className="text-lg font-bold">{product.price}</span>
//                 <span className="text-lg line-through text-gray-500">
//                   {product.discount}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

   

//         {/* Pagination */}
//         <div className="mt-8 flex space-x-2">
//           <button className="px-4 py-2 border rounded-md bg-gray-200">Previous</button>
//           {[...Array(10)].map((_, pageIndex) => (
//             <button
//               key={pageIndex}
//               className={`px-4 py-2 border rounded-md ${pageIndex === 0 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
//             >
//               {pageIndex + 1}
//             </button>
//           ))}
//           <button className="px-4 py-2 border rounded-md bg-gray-200">Next</button>
//         </div>
//       </div>
//     </div>
//  ); 
// };

// export default Filter;



      
// 'use client'
// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { GrFormSubtract } from "react-icons/gr";
// import { IoIosAdd } from "react-icons/io";
// import YouMightAlsoLike from "./Tshirt";
// import ReviewsSection from "./review"




// export default function ProductPage() {
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");

//   const sizes = ["Small", "Medium", "Large", "X-Large"];
//   const colors = ["Red", "Blue", "Green", "Black"]; // Example colors

//   return (
//     <div className="max-w-5xl mx-auto p-4 bg-white">
//       {/* Breadcrumb */}
//       <nav className="text-sm text-gray-600 mb-4">
//         <ol className="flex space-x-2">
//           <li>Home</li>
//           <li>/</li>
//           <li>Shop</li>
//           <li>/</li>
//           <li>Men</li>
//           <li>/</li>
//           <li>T-shirts</li>
//         </ol>
//       </nav>
//        <div className="flex flex-col md:flex-row gap-4 mr-9 mb-10">
//   {/* Side Images (stacked vertically on mobile, aligned horizontally on desktop) */}
//   <div className="flex flex-col gap-4 md:w-1/4">
//     <img
//       src="/image02.png"
//       alt="Product Image 2"
//       className="w-full md:w-32 md:h-32 rounded-lg shadow-md"
//     />
//     <img
//       src="/image03.png"
//       alt="Product Image 3"
//       className="w-full md:w-32 md:h-32 rounded-lg shadow-md"
//     />
//     <img
//       src="/image04.png"
//       alt="Product Image 4"
//       className="w-full md:w-32 md:h-32 rounded-lg shadow-md"
//     />
//   </div> 
// {/* left-56 */}
//   {/* Main Image (centered on desktop) */}
//    <div className="flex md:w-2/3 md:ml-2">
//     <img
//       src="/image01.png"
//       alt="Main Product Image"
      
//       className="w-[464px] h-[430px] top[216px] rounded-lg shadow-lg"
//     />
//   </div> 
 
//    {/* Product Details */}
//         <div className="flex-1 space-y-4">
//           <h1 className="text-2xl font-bold text-gray-900">
//             One Life Graphic T-shirt
//           </h1>
//           <div className="flex items-center space-x-2">
//             <div className="flex items-center text-yellow-400">
//               {[...Array(4)].map((_, i) => (
//                 <FaStar key={i} className="h-5 w-5" />
//               ))}
//               <FaStar className="h-5 w-5 text-gray-400" />
//             </div>
//             <p className="text-sm text-gray-500">(4.5/5)</p>
//           </div>

//           {/* Price */}
//            <div className="flex items-baseline space-x-2">
//             <p className="text-2xl font-bold text-black">$260</p>
//             <p className="line-through text-gray-400">$300</p>
//             <p className="text-sm text-red-500">-40%</p>
//           </div>

//           <p className="text-gray-700">
//             This graphic t-shirt is perfect for any occasion. Crafted from a soft and
//             breathable fabric, it offers superior comfort and style.
//           </p>

//           {/* Color Selector */}
//            <div>
//             <h3 className="font-semibold">Select Colors</h3>
//             <div className="flex space-x-2 mt-2">
//               {colors.map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`h-8 w-8 rounded-full border-2 ${
//                     selectedColor === color
//                       ? "border-black"
//                       : "border-gray-300"
//                   }`}
//                   style={{ backgroundColor: color.toLowerCase() }}
//                 />
//               ))}
//             </div>
//           </div> 

//           {/* Size Selector */}
//           <div>
//             <h3 className="font-semibold">Choose Size</h3>
//             <div className="flex space-x-2 mt-2">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-4 py-2 border rounded-full bg-[#F2F0F1] ${
//                     selectedSize === size
//                       ? "bg-gray-800 text-white"
//                       : "bg-white text-gray-800"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart */}
//           <div className="flex items-center space-x-4">
            
//             <p className="text-black flex gap-6"> <GrFormSubtract size={20} />
//              1 <IoIosAdd size={20} />
//             </p>
//             <button className="px-6 py-2 w-[400px] h-[52px] bg-black border text-white rounded-full shadow-lg hover:bg-white hover:text-black hover:border-black">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//        <div className="mt-8">
//         <div className="flex space-x-4 border-b">
//           <button className="py-2 px-4 font-semibold text-gray-800 border-b-2 border-blue-500">
//             Product Details
//           </button>
//           <button className="py-2 px-4 text-gray-600 hover:text-gray-800">
//             Rating & Reviews
//           </button>
//           <button className="py-2 px-4 text-gray-600 hover:text-gray-800">
//             FAQs
//           </button>
//         </div> 
        
//      </div>
    
     
//    </div>
//   );
// }

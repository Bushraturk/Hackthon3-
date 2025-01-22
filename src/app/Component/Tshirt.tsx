import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const YouMightAlsoLike = () => {
  // Product data array
  const products = [
    {
      name: "Polo with Contrast Trims",
      id: "9", // Unique ID for each product
      price: 212, // Original price
      discountedPrice: 242, // Discounted price
      imageUrl: '/Tshirt1.png', // Image URL
      rating: 4.0, // Product rating
    },
    {
      name: "Gradient Graphic T-shirt",
      id: "10",
      price: 145,
      discountedPrice: 180,
      imageUrl: '/Tshirt2.png',
      rating: 3.5,
    },
    {
      name: "Polo with Tipping Details",
      id: "11",
      price: 120,
      discountedPrice: 150,
      imageUrl: '/Tshirt3.png',
      rating: 4.5,
    },
    {
      name: "Black Striped",
      id: "12",
      price: 180,
      discountedPrice: 150,
      imageUrl: '/Tshirt4.png',
      rating: 5.0,
    },
  ];

  return (
    <div className="my-12">
      {/* Section Title */}
      <h2 className="flex justify-center items-center font-extrabold text-3xl mb-6">
        You Might Also Like
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          // Link to individual product page
          <Link key={index} href={`/product/${product.id}`} passHref>
            {/* Product Card Container */}
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-2xl transition flex flex-col">
              {/* Image Container */}
              <div className="relative mb-4 flex-grow">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover rounded-md w-full h-auto"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold">{product.name}</h3>

              {/* Product Rating */}
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  ({product.rating.toFixed(1)}/5)
                </span>
              </div>

              {/* Product Price */}
              <div className="flex justify-between mt-2">
                <span className="text-lg font-bold">${product.discountedPrice}</span>
                <span className="text-sm line-through text-gray-500">${product.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default YouMightAlsoLike;
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const YouMightAlsoLike = () => {
//   const products = [
//     {
//       name: "Polo with Contrast Trims",
//       id: "9", // Ensure the ID is a string for dynamic routing
//       price: 212,
//       discountedPrice: 242,
//       imageUrl: '/Tshirt1.png',
//     },
//     {
//       name: "Gradient Graphic T-shirt",
//       id: "10",
//       price: 145,
//       discountedPrice: 180,
//       imageUrl: '/Tshirt2.png',
//     },
//     {
//       name: "Polo with Tipping Details",
//       id: "11",
//       price: 120,
//       discountedPrice: 150,
//       imageUrl: '/Tshirt3.png',
//     },
//     {
//       name: "Black Striped T-shirt",
//       id: "12",
//       price: 180,
//       discountedPrice: 150,
//       imageUrl: '/Tshirt4.png',
//     },
//   ];

//   return (
//     <div className="my-12">
//       <h2 className="flex justify-center items-center font-extrabold text-3xl mb-6">You Might Also Like</h2>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <Link key={index} href={`/product/${product.id}`} passHref>
//             <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-2xl transition">
//               <div className="relative mb-4">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.name}
//                   width={300}
//                   height={300}
//                   className="object-cover rounded-md"
//                 />
//               </div>
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <div className="flex items-center mt-2">
//                 <span className="text-yellow-400">★★★★☆</span>
//                 <span className="text-sm text-gray-500 ml-2">(4.0/5)</span>
//               </div>
//               <div className="flex justify-between mt-2">
//                 <span className="text-lg font-bold">${product.discountedPrice}</span>
//                 <span className="text-sm line-through text-gray-500">${product.price}</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default YouMightAlsoLike;
// import React from 'react';

// const YouMightAlsoLike = () => {
//   return (
//     <div className="my-12">
//       <h2 className="flex justify-center items-center font-extrabold text-3xl mb-6">You Might Also Like</h2>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
//         {/* Product 1 */}
//         <div className="bg-white rounded-lg shadow-md p-4">
//           <img src="/Tshirt1.png" alt="Polo with Contrast Trims" className="w-full h-48 object-cover rounded-md mb-4" />
//           <h3 className="text-lg font-semibold">Polo with Contrast Trims</h3>
//           <div className="flex items-center mt-2">
//             <span className="text-yellow-400">★★★★☆</span>
//             <span className="text-sm text-gray-500 ml-2">(4.0/5)</span>
//           </div>
//           <div className="flex justify-between mt-2">
//             <span className="text-lg font-bold">$212</span>
//             <span className="text-sm line-through text-gray-500">$242</span>
//           </div>
//         </div>

//         {/* Product 2 */}
//         <div className="bg-white rounded-lg shadow-md p-4">
//           <img src="/Tshirt2.png" alt="Gradient Graphic T-shirt" className="w-full h-48 object-cover rounded-md mb-4" />
//           <h3 className="text-lg font-semibold">Gradient Graphic T-shirt</h3>
//           <div className="flex items-center mt-2">
//             <span className="text-yellow-400">★★★☆☆</span>
//             <span className="text-sm text-gray-500 ml-2">(3.5/5)</span>
//           </div>
//           <div className="flex justify-between mt-2">
//             <span className="text-lg font-bold">$145</span>
//             <span className="text-sm line-through text-gray-500">$180</span>
//           </div>
//         </div>

//         {/* Product 3 */}
//         <div className="bg-white rounded-lg shadow-md p-4">
//           <img src="/Tshirt3.png" alt="Polo with Tipping Details" className="w-full h-48 object-cover rounded-md mb-4" />
//           <h3 className="text-lg font-semibold">Polo with Tipping Details</h3>
//           <div className="flex items-center mt-2">
//             <span className="text-yellow-400">★★★★☆</span>
//             <span className="text-sm text-gray-500 ml-2">(4.5/5)</span>
//           </div>
//           <div className="flex justify-between mt-2">
//             <span className="text-lg font-bold">$120</span>
//             <span className="text-sm line-through text-gray-500">$150</span>
//           </div>
//         </div>

//         {/* Product 4 */}
//         <div className="bg-white rounded-lg shadow-md p-4">
//           <img src="/Tshirt4.png" alt="Black Striped T-shirt" className="w-full h-48 object-cover rounded-md mb-4" />
//           <h3 className="text-lg font-semibold">Black Striped T-shirt</h3>
//           <div className="flex items-center mt-2">
//             <span className="text-yellow-400">★★★★★</span>
//             <span className="text-sm text-gray-500 ml-2">(5.0/5)</span>
//           </div>
//           <div className="flex justify-between mt-2">
//             <span className="text-lg font-bold">$180</span>
//             <span className="text-sm line-through text-gray-500">$150</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YouMightAlsoLike;


// // w-[295] h-[298] top-[1991px] left-[730px] cataigerious
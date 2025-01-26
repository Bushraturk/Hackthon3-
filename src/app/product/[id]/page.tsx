'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation'; // Next.js hook to get dynamic params (id) and useRouter
import { client } from '@/lib/sanity'; // Sanity client for fetching data
import { urlFor } from '@/lib/sanityImageUtils'; // Helper function to fetch image URL
import ReviewsSection from '@/app/Component/review'; // Assuming this is a reviews component
import NewsletterSubscription from '@/app/Component/Newsletter';
import Image from 'next/image';

type Product = {
  id: number; // Product ID as a number
  name: string;
  price: number;
  description: string;
  discountPercent: number;
  category: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  rating: number;
};

const ProductDetail: React.FC = () => {
  const { id } = useParams(); // Get the dynamic product ID from the URL
  const [product, setProduct] = useState<Product | null>(null); // Store product details
  const [loading, setLoading] = useState(true); // Loading state for fetching product
  const router = useRouter(); // Use router to navigate to cart page

  // Fetch the product details when the component mounts
  useEffect(() => {
    if (!id) return;

    const numericId = Number(id); // Convert the ID to a number
    if (isNaN(numericId)) {
      console.error('Invalid ID format');
      setLoading(false);
      return;
    }

    // Fetch product data from Sanity using the ID
    const fetchProduct = async () => {
      try {
        const productData = await client.fetch(
          `*[_type == "product" && id == $id][0]{
            id,
            name,
            price,
            description,
            discountPercent,
            category,
            image,
            rating
          }`,
          { id: numericId } // Pass the numeric ID to Sanity query
        );
        setProduct(productData); // Set the fetched product data
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProduct();
  }, [id]); // Re-run effect when the ID changes

  // If data is still loading, show a loading message
  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  // If product is not found, show an error message
  if (!product) {
    return <p className="text-center mt-8">Product not found.</p>;
  }

  const imageURL = urlFor(product.image).url(); // Get the product image URL using the helper function

  // Handle adding product to cart
  const handleAddToCart = (product: Product) => {
    // Get the current cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Add the current product to the cart
    cart.push(product);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    router.push('/cart');
  };

  return (
    <section className="p-6 bg-white">
      {/* Container for product details */}
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Section Title - Heading for Product Details */}
        <h2 className="font-extrabold mt-4 text-3xl mb-6 text-center sm:text-left">
          Product Details
        </h2>

        {/* Main product layout for desktop and mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Product image section (will be displayed beside product details on desktop) */}
          <div className="relative w-full h-96 sm:h-128 lg:h-auto">
            <Image
              src={imageURL}
              alt={product.name || 'Product Image'}
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Product information section */}
          <div className="space-y-6 sm:space-y-8">

            {/* Product name */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Product description */}
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              {product.description}
            </p>

            {/* Price section with discount if available */}
            <div className="flex justify-center sm:justify-start items-center gap-2">
              {product.discountPercent > 0 ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${Math.round(product.price / (1 - product.discountPercent / 100))}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-semibold text-gray-900">
                  ${product.price}
                </span>
              )}
            </div>

            {/* Category section */}
            <div className="flex justify-center sm:justify-start items-center">
              <span className="text-lg font-medium text-gray-600">Category:</span>
              <span className="ml-2 text-lg text-gray-800 font-semibold">
                {product.category}
              </span>
            </div>

            {/* Rating section */}
            <div className="flex justify-center sm:justify-start items-center">
              <span className="text-lg font-medium text-gray-600">Rating:</span>
              <span className="ml-2 text-lg text-yellow-500 font-semibold">
                {product.rating}/5
              </span>
            </div>

            {/* Add to Cart button */}
            <button
              className="bg-black text-white px-36 py-2 rounded-lg text-lg w-full sm:w-auto hover:bg-blue-600 transition-all"
              onClick={() => handleAddToCart(product)} // Add to Cart functionality
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* Newsletter Section */}
      <NewsletterSubscription />
    </section>
  );
};

export default ProductDetail;



'use client';

import React, { useState, useEffect } from 'react'; 
import Image from 'next/image'; 
import Link from 'next/link'; 
import { client } from '@/lib/sanity'; 
import { urlFor } from '@/lib/sanityImageUtils'; 
import { FaStar } from 'react-icons/fa';

type Product = {
  id: number;
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
  size?: string;
  color?: string;
};

// const formatProductNameForURL = (name: string) => {
//   return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
// };

const RatingStars: React.FC<{ rating: number; onRatingChange: (newRating: number) => void }> = ({ rating, onRatingChange }) => {
  const handleStarClick = (star: number) => {
    onRatingChange(star);
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={20}
          className={star <= rating ? 'text-yellow-500' : 'text-gray-300'}
          onClick={() => handleStarClick(star)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};

const ProductListing: React.FC = () => {
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [topSelling, setTopSelling] = useState<Product[]>([]);
  const [showMoreNewArrivals, setShowMoreNewArrivals] = useState(false);
  const [showMoreTopSelling, setShowMoreTopSelling] = useState(false);

  useEffect(() => {
    const fetchNewArrivals = client.fetch<Product[]>(`
      *[_type == "product" && id >= 1 && id <= 6] {
        id,
        name,
        price,
        description,
        discountPercent,
        category,
        image,
        rating,
        size,
        color
      }
    `);

    const fetchTopSelling = client.fetch<Product[]>(`
      *[_type == "product" && id >= 7 && id <= 13] {
        id,
        name,
        price,
        description,
        discountPercent,
        category,
        image,
        rating,
        size,
        color
      }
    `);

    Promise.all([fetchNewArrivals, fetchTopSelling])
      .then(([newArrivalsData, topSellingData]) => {
        setNewArrivals(newArrivalsData);
        setTopSelling(topSellingData);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const handleRatingChange = (productId: number, newRating: number) => {
    setNewArrivals((prevArrivals) =>
      prevArrivals.map((product) =>
        product.id === productId ? { ...product, rating: newRating } : product
      )
    );
    setTopSelling((prevTopSelling) =>
      prevTopSelling.map((product) =>
        product.id === productId ? { ...product, rating: newRating } : product
      )
    );
  };

  const renderProductCards = (products: Product[], limit: boolean) =>
    (limit ? products.slice(0, 4) : products).map((product) => {
      const imageURL = urlFor(product.image).url();

      return (
        <div
          key={product.id}
          className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white cursor-pointer"
        >
          <Link href={`/product/${product.id}`}>
            <Image
              src={imageURL}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover rounded-lg w-full h-80 md:h-96 lg:h-112"
            />
            <h3 className="font-semibold text-lg mt-2 text-center text-gray-800">
              {product.name}
            </h3>
          </Link>
          <div className="mt-2">
            <RatingStars rating={product.rating} onRatingChange={(newRating) => handleRatingChange(product.id, newRating)} />
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.discountPercent > 0 && (
              <span className="text-sm text-gray-500 line-through">
                ${Math.round(product.price / (1 - product.discountPercent / 100)).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      );
    });

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderProductCards(newArrivals, !showMoreNewArrivals)}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-400"
          onClick={() => setShowMoreNewArrivals(!showMoreNewArrivals)}
        >
          {showMoreNewArrivals ? 'Show Less' : 'View All'}
        </button>
      </div>

      <h2 className="text-4xl font-bold my-8 text-center text-gray-800">
        Top Selling
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderProductCards(topSelling, !showMoreTopSelling)}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-400"
          onClick={() => setShowMoreTopSelling(!showMoreTopSelling)}
        >
          {showMoreTopSelling ? 'Show Less' : 'View All'}
        </button>
      </div>
    </section>
  );
};

export default ProductListing;

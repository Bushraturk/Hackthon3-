"use client";

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { client } from "@/sanity/lib/client"; // Sanity client import
import Image from "next/image";

interface Product {
  _id: string; // Ensure ID exists
  name: string;
  category: string;
  price: number;
  description: string;
  discountPercent: number;
  image: string;
  rating: number;
}

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (debouncedQuery.trim() === "") {
        setProducts([]);
        return;
      }

      setLoading(true);
      try {
        const results: Product[] = await client.fetch(
          `*[_type == "product" && _id != null && (name match $searchQuery || category match $searchQuery)]{
            _id,
            name,
            category,
            price,
            description,
            discountPercent,
            "image": image.asset->url,
            rating
          }`,
          { searchQuery: `${debouncedQuery}*` }
        );
        setProducts(results);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedQuery]);

  return (
    <div className="p-6">
      <div className="relative w-[350px] mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products"
          className="w-full py-2 px-4 bg-gray-100 rounded-3xl outline-none text-sm"
        />
        <FaSearch className="absolute right-4 top-2/4 transform -translate-y-2/4 text-gray-500" />
      </div>

      {loading && <p className="text-center mt-4">Searching...</p>}

      {!loading && products.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="p-4 border rounded-lg shadow-md bg-white">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
                width={150}
                height={150}
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-sm text-blue-500">Category: {product.category}</p>
              <p className="text-sm text-green-500">Price: ${product.price.toFixed(2)}</p>
              <p className="text-sm text-yellow-500">Rating: ★ {product.rating}</p>
              {product.discountPercent > 0 && (
                <p className="text-sm text-red-500">Discount: {product.discountPercent}%</p>
              )}
            </div>
          ))}
        </div>
      )}

      {!loading && products.length === 0 && query && (
        <p className="text-center mt-4 text-gray-600">
          No products found for &quot;{query}&quot;.
        </p>
      )}
    </div>
  );
};

export default SearchBar;


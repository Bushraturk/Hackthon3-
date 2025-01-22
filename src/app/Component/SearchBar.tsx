'use client';

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { client } from "@/sanity/lib/client"; // Adjust path as needed
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  discountPercent: number;
  category: string;
  image: string;
  rating: number;
}

const SearchBar = () => {
  const [query, setQuery] = useState<string>(""); // State to manage user input
  const [debouncedQuery, setDebouncedQuery] = useState<string>(""); // State for debounced query
  const [products, setProducts] = useState<Product[]>([]); // State to store fetched products
  const [loading, setLoading] = useState<boolean>(false); // State for loading status

  // Debounce the query input to avoid excessive API calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(query); // Update debounced query after 500ms
    }, 500);

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or query change
  }, [query]);

  // Fetch products from Sanity based on the debounced query
  useEffect(() => {
    const fetchProducts = async () => {
      if (debouncedQuery.trim() === "") {
        setProducts([]); // If no query, clear products
        return;
      }

      setLoading(true); // Set loading state to true while fetching
      try {
        const results: Product[] = await client.fetch(
          `*[_type == "product" && name match $searchQuery]{ 
            _id as id,
            name,
            price,
            description,
            discountPercent,
            category,
            "image": image.asset->url,
            rating 
          }`,
          { searchQuery: `${debouncedQuery}*` } // Match products by the debounced query
        );
        setProducts(results); // Set fetched products
      } catch (error) {
        console.error("Error fetching products:", error); // Log errors
      } finally {
        setLoading(false); // Set loading state to false after fetching
      }
    };

    fetchProducts();
  }, [debouncedQuery]); // Re-run effect when the debounced query changes

  return (
    <div className="p-6">
      {/* Search Input */}
      <div className="relative w-[350px] mx-auto">
        <input
          type="text"
          value={query} // Set query value
          onChange={(e) => setQuery(e.target.value)} // Update query on change
          placeholder="Search for products"
          className="w-full py-2 px-4 bg-gray-100 rounded-3xl outline-none text-sm"
        />
        <FaSearch className="absolute right-4 top-2/4 transform -translate-y-2/4 text-gray-500" />
      </div>

      {loading && <p className="text-center mt-4">Searching...</p>} {/* Loading message */}

      {/* Display Results */}
      {!loading && products.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <Image
                src={product.image}
                alt={product.name} // Product name as alt text
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-sm text-blue-500 mt-2">
                Category: {product.category}
              </p>
              <p className="text-sm text-green-500">
                Price: ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-yellow-500">
                Rating: ★ {product.rating}
              </p>
              {product.discountPercent > 0 && (
                <p className="text-sm text-red-500">
                  Discount: {product.discountPercent}%
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* No products found message */}
      {!loading && products.length === 0 && query && (
        <p className="text-center mt-4 text-gray-600">
          No products found for &quot{query}. {/* Display query inside quotes */}
        </p>
      )}
    </div>
  );
};

export default SearchBar;

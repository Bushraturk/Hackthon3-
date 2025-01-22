'use client';

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Samantha D.",
      date: "Posted on August 14, 2023",
      content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
      rating: 5,
    },
    {
      name: "Alex M.",
      date: "Posted on August 15, 2023",
      content: `"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
      rating: 4,
    },
    {
      name: "Ethan R.",
      date: "Posted on August 16, 2023",
      content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
      rating: 5,
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    content: "",
    rating: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = () => {
    if (newReview.name && newReview.content && newReview.rating) {
      setReviews([
        ...reviews,
        {
          ...newReview,
          date: `Posted on ${new Date().toLocaleDateString()}`,
        },
      ]);
      setNewReview({ name: "", content: "", rating: 0 });
      alert("Thank you for your review!");
    } else {
      alert("Please fill in all fields and select a rating.");
    }
  };

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 md:gap-0">
        <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
          All Reviews <span className="text-sm">({reviews.length})</span>
        </h2>
        <p className="text-sm text-gray-600">
          Average Rating: <span className="text-yellow-500">★ {averageRating.toFixed(1)}</span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="text-black flex bg-[#F2F0F1] w-full md:w-28 justify-center items-center gap-2 rounded-full text-sm px-4 py-2 hover:underline">
            Latest <FaAngleDown />
          </button>
          <button className="text-white bg-black rounded-full w-full md:w-32 text-sm px-4 py-2 hover:underline">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 border rounded-lg shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              {review.name[0]}
            </div>
            <div>
              <p className="flex items-center text-yellow-500 mb-1">
                {"★".repeat(review.rating)}{" "}
                {"☆".repeat(5 - review.rating)}
              </p>
              <p className="font-semibold">{review.name}</p>
              <p className="mt-2">{review.content}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newReview.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="content"
            placeholder="Your Review"
            value={newReview.content}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center gap-2">
            <p className="font-medium">Rating:</p>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRatingChange(star)}
                className={`text-lg ${
                  star <= newReview.rating ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;

import React from "react";
import HeroSection from "../Component/Hero";
import CategoryNav from "../Component/CategoryNav";
import ProductListing from "../Component/Productlist";
import BrowseByDressStyle from "../Component/Dressstyle";
import NewsletterSubscription from "../Component/Newsletter";
import TestimonialCarousel from "../Component/Testi";

const page = () => {
  return (
    <div>
      <HeroSection />
      <CategoryNav />
      <ProductListing />
      <BrowseByDressStyle />
      <TestimonialCarousel />
      <NewsletterSubscription />
    </div>
  );
};

export default page;

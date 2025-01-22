import HeroSection from "./Component/Hero";
import NewArrivals from "./Component/Productlist";
import TestimonialCarousel from "./Component/Testi";
import NewsletterSubscription from "./Component/Newsletter";
import BrowseByDressStyle from "./Component/Dressstyle";
import CategoryNav from '@/app/Component/CategoryNav'; // Import CategoryNav component


export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoryNav />
      <NewArrivals />
      
      <BrowseByDressStyle />

      <TestimonialCarousel />
      <NewsletterSubscription />
      

      
    </div>
  );
}

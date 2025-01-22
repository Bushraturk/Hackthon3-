import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Alex K.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 4,
  },
  {
    name: "James L.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 4.5,
  },
  {
    name: "Mooen",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
];

export function TestimonialCarousel() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading Section */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-left">Our Happy Customers</h2>
          
        </div>

        {/* Carousel Section */}
        <Carousel className="w-full relative">
          {/* Previous and Next Buttons */}
          <CarouselPrevious className="absolute left-0 top-3/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full hover:bg-gray-400 z-10" />
          <CarouselNext className="absolute right-0 top-3/2 transform -translate-y-1/2 p-2 bg-gray-300 rounded-full hover:bg-gray-400 z-10" />

          <CarouselContent className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index} 
                className="md:basis-1/2 lg:basis-1/3 transition-transform duration-200 hover:scale-105"
              >
                <div className="p-4">
                  <Card className="shadow-lg rounded-lg">
                    <CardContent className="flex flex-col items-center text-center">
                      {/* Rating Section */}
                      <div className="flex items-center justify-center mb-4">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={`text-yellow-500 text-lg ${
                              i + 0.5 <= testimonial.rating
                                ? ""
                                : i + 1 <= testimonial.rating
                                ? "opacity-75"
                                : "opacity-50"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      {/* Testimonial Text */}
                      <p className="italic text-gray-600 mb-4">{`"${testimonial.text}"`}</p>
                      {/* Customer Name */}
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialCarousel;



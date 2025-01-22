// components/HeroSection.jsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#F2F0F1] px-4 md:px-8 py-9">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Section: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl ml-10 font-extrabold text-gray-900">
            Find Clothes <br /> That Matches <br /> Your Style
          </h1>
          <p className="text-gray-600 text-lg mt-4 ml-10">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mt-6 w-52 ml-10 bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800">
            Shop Now
          </button>
          <div className="mt-8 lg:hidden flex justify-center md:justify-start space-x-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">200+</h3>
              <p className="text-gray-600">International Brands</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">2,000+</h3>
              <p className="text-gray-600">High-Quality Products</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">30,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/hero1.png" // Replace with the actual image path
            alt="Hero Section"
            fill
            className="object-cover rounded-lg"
          />
          {/* First Column */}
          <div className="items-center mt-5">
            <Image
              src="/public/vector.png"
              alt="Vector"
              width={100}
              height={100}
              className="w-[100px] h-auto bg-black text-black"
            />
            <Image
              src="/public/vector1.png"
              alt="Vector1"
              width={100}
              height={100}
              className="w-[100px] h-auto bg-black mt-4"
            />
          </div>
          <div className="bg-black text-white mt-6 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center bg-black text-white px-4 sm:px-8 lg:px-32 py-14">
        {/* Logo Container */}
        <div className="flex justify-center items-center flex-wrap gap-4 md:gap-8 max-w-6xl w-full">
          {/* Logo 1 */}
          <Image
            src="logo1.png"
            alt="Logo 1"
            className="w-[80px] sm:w-[100px] md:w-[140px] lg:w-[166px] h-auto"
          />
          {/* Logo 2 */}
          <Image
            src="logo2.png"
            alt="Logo 2"
            className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] h-auto"
          />
          {/* Logo 3 */}
          <Image
            src="logo3.png"
            alt="Logo 3"
            className="w-[90px] sm:w-[110px] md:w-[130px] lg:w-[156px] h-auto"
          />
          {/* Logo 4 */}
          <Image
            src="logo4.png"
            alt="Logo 4"
            className="w-[110px] sm:w-[130px] md:w-[150px] lg:w-[194px] h-auto"
          />
          {/* Logo 5 */}
          <Image
            src="logo5.png"
            alt="Logo 5"
            className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[206px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}

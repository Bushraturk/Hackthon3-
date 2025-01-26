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
          {/* Hero Image */}
          <Image
            src="/hero1.png" // Replace with the actual image path
            alt="Hero Section"
            width= {200}
            height={100}
            quality={100} // Increase quality (default is 75)

            // objectFit="cover"
            className="relative object-cover w-full h-[450px] md:h-[500px]
            "
          />

          <div className="bg-black text-white mt-6 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center bg-black text-white px-4 sm:px-8 lg:px-32 py-14">
        {/* Logo Container */}
        <div className="flex justify-center items-center flex-wrap gap-4 md:gap-8 max-w-6xl w-full">
          {/* Logo 1 */}
          <Image
            src="/logo1.png"
            alt="Logo 1"
            width={800} // Default width (intrinsic size se adjust ho jayega)
            height={800} // Default height (intrinsic size se adjust ho jayega)
            className="w-[80px] sm:w-[100px] md:w-[140px] lg:w-[166px] h-auto" // Responsive sizes
            layout="intrinsic" // Auto adjust karne ke liye intrinsic layout
          />
          {/* Logo 2 */}
          <Image
            src="/logo2.png"
            alt="Logo 2"
            width={120} // Default width (lg size ke liye)
            height={120} // Default height (lg size ke liye)
            className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] h-auto" // Responsive sizes
          />
          {/* Logo 3 */}
          <Image
            src="/logo3.png"
            alt="Logo 3"
            width={156} // Default width (lg size ke liye)
            height={156} // Default height (lg size ke liye)
            className="w-[90px] sm:w-[110px] md:w-[130px] lg:w-[156px] h-auto" // Responsive sizes
          />
          {/* Logo 4 */}
          <Image
            src="/logo4.png"
            alt="Logo 4"
            width={194} // Default width (lg size ke liye)
            height={194} // Default height (lg size ke liye)
            className="w-[110px] sm:w-[130px] md:w-[150px] lg:w-[194px] h-auto" // Responsive sizes
          />
          {/* Logo 5 */}
          <Image
            src="/logo5.png"
            alt="Logo 5"
            width={206} // Default width (lg size ke liye)
            height={206} // Default height (lg size ke liye)
            className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[206px] h-auto" // Responsive sizes
          />
        </div>
      </div>
    </section>
  );
}

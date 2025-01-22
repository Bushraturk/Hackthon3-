const AboutUs = () => {
    return (
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="bg-black text-white p-10 rounded-lg shadow-lg mb-10">
            {/* Title and Introduction */}
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg">
                Welcome to <span className="text-amber-500">SHOP.CO</span>, your ultimate destination for stylish and high-quality
                fashion. We are passionate about delivering the best shopping experience.
              </p>
            </div>
          </section>
  
          {/* Our Story Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            {/* Story Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="text-amber-500 font-extrabold">SHOP.CO</span> started with a simple idea: to make trendy, comfortable, and
                affordable fashion accessible to everyone. Over the years, we’ve grown into a
                community-driven brand, putting our customers at the heart of everything we do. From
                humble beginnings to a thriving online presence, our journey is rooted in our passion
                for style and our commitment to quality.
              </p>
            </div>
          </section>
  
          {/* Core Values Section */}
          <section className="text-center mb-16">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Quality', icon: '✨', description: 'We never compromise on quality.' },
                { title: 'Customer First', icon: '❤️', description: 'You are our priority.' },
                { title: 'Innovation', icon: '💡', description: 'We embrace new ideas and trends.' },
                { title: 'Sustainability', icon: '🌱', description: 'We care about the planet.' },
              ].map((value, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                  {/* Core Value Icon */}
                  <div className="text-4xl mb-4">{value.icon}</div>
                  {/* Core Value Title */}
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  {/* Core Value Description */}
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Mission and Vision Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            {/* Mission and Vision Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is to bring the latest fashion trends to your doorstep while ensuring
                exceptional customer service. We envision a world where style meets sustainability,
                empowering individuals to express themselves confidently and responsibly.
              </p>
            </div>
          </section>
  
          {/* Call to Action Section */}
          <section className="bg-black text-white text-center p-10 rounded-lg shadow-lg">
            {/* CTA Content */}
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-lg mb-6">
              Be part of our story and discover the latest in fashion. Stay connected with us and
              experience the joy of shopping at <span className="text-amber-500">SHOP.CO</span>.
            </p>
            {/* CTA Button */}
            <a
              href="/HeroSection"
              className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-amber-700 transition"
            >
              Shop Now
            </a>
          </section>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  
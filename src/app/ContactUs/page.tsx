const ContactUs = () => {
    return (
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="bg-black text-white p-10 rounded-lg shadow-lg mb-10">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg">
                We’d love to hear from you! Whether you have a question about our products, services, or anything else, our team is ready to answer your queries.
              </p>
            </div>
          </section>
  
          {/* Contact Information Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Email Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Email Us</h2>
              <p className="text-gray-700 mb-4">Have any questions? Send us an email!</p>
              <p className="text-amber-500 font-semibold">support@shop.co</p>
            </div>
            {/* Phone Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Call Us</h2>
              <p className="text-gray-700 mb-4">We’re available 9 AM - 6 PM (Mon - Fri).</p>
              <p className="text-amber-500 font-semibold">+1 (123) 456-7890</p>
            </div>
            {/* Address Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Us</h2>
              <p className="text-gray-700 mb-4">Stop by our office for a chat!</p>
              <p className="text-amber-500 font-semibold">
                123 Fashion Ave, <br /> New York, NY 10001
              </p>
            </div>
          </section>
  
          {/* Contact Form Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Get in Touch</h2>
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-amber-500"
                  required
                />
              </div>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-amber-500"
                  required
                />
              </div>
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here"
                  rows={5}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-amber-500"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-amber-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>
  
          {/* Map Section */}
          <section className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24177.31380364479!2d-74.01183372399241!3d40.71277625089557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19d6e69e81%3A0x72a979ba4cf69e7!2sFashion%20District%20NYC!5e0!3m2!1sen!2sus!4v1674140700000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </section>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  
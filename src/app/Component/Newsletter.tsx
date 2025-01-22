'use client';
import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold sm:text-center md:text-left">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:items-center gap-4 w-full md:w-auto"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-white text-black p-3 px-4 w-full md:w-[400px] h-[52px] rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-500"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 w-full md:w-[400px] bg-black border text-white rounded-full shadow-md hover:bg-white hover:text-black hover:border-black transition"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;









// 'use client'
// import React, { useState } from 'react';

// const NewsletterSubscription = () => {
//   const [email, setEmail] = useState('');

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Logic for subscribing (e.g., send email to the backend)
//     alert(`Subscribed with email: ${email}`);
//   };

//   return (
//     <section className="bg-black text-white py-16">
//       <div className="flex justify-between">
//         <h2 className="text-4xl ml-10 left-24 font-bold mb-4">STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h2>
//         <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
//           <input
//             type="email"
            
//             placeholder= "Enter your email Adddress"
//             className="bg-white text-black ml-56 p-3 px-6 py-2 w-[400px] h-[52px] rounded-full hover:bg-black gap-7"
//             value={email}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//             required
//           />
          
//           <button className="px-6 py-2 w-[400px] ml-56 h-[52px] bg-black border text-white rounded-full shadow-lg hover:bg-white hover:text-black hover:border-black">
//           Subscribe to Newsletter

//             </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default NewsletterSubscription;

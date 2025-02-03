

// // // next.config.ts
// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['cdn.sanity.io','randomuser.me'], // Allow images from Sanity CDN
//   },
//   reactStrictMode: true,
//   // swcMinify: true,
  
// };

// export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'randomuser.me'], // Allow images from Sanity CDN
  },
  reactStrictMode: true,
  // swcMinify: true, // اگر آپ چاہیں تو اس کو ان کامنٹ کر سکتے ہیں
};

export default nextConfig;

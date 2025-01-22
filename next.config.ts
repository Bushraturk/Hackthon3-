// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
  },
  reactStrictMode: true,
  // swcMinify: true,
};

export default nextConfig;
// // next.config.ts
// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['cdn.sanity.io'], // Allow images from Sanity CDN
//   },
//   // Other configurations (if any)
// };

// export default nextConfig;
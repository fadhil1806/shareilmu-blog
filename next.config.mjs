/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "k31kdl3eukazsfrf.public.blob.vercel-storage.com",
      },
    ],
  },
  redirects: async () => {
    return [];
  },
};

export default nextConfig;

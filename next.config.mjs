/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.7nft.store',
        port: '',
      },
    ],
  },
};

export default nextConfig;

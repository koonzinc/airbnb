/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org", "images.squarespace-cdn.com"],
  },
};

module.exports = nextConfig;

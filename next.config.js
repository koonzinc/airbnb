/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "images.squarespace-cdn.com",
      "links.papareact.com",
      "a0.muscache.com",
    ],
  },
  env: {
    mapbox:
      "pk.eyJ1Ijoid2tvb256IiwiYSI6ImNsOXlqbmpzeDA1ajQzb3FsYXh0Zzdib2IifQ.08Aw8dK_3_YubWnWU5440w",
  },
};

module.exports = nextConfig;

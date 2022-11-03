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
      "pk.eyJ1Ijoid2tvb256IiwiYSI6ImNsYTE3dW83ZjA0dm4zbnBxOWFjNHQ5emYifQ.rG0jMKGGTOSejtEoZkIGSw",
  },
};

module.exports = nextConfig;


// public token: pk.eyJ1Ijoid2tvb256IiwiYSI6ImNsYTE3dW83ZjA0dm4zbnBxOWFjNHQ5emYifQ.rG0jMKGGTOSejtEoZkIGSw
// access token: pk.eyJ1Ijoid2tvb256IiwiYSI6ImNsYTE3dW83ZjA0dm4zbnBxOWFjNHQ5emYifQ.rG0jMKGGTOSejtEoZkIGSw
// style url: mapbox://styles/wkoonz/cl9yjr8pw000v14o01n8fgboe
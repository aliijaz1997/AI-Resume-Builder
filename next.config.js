require("dotenv").config(); // Load environment variables
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pbs.twimg.com", "s3.amazonaws.com", "img.freepik.com"],
  },
  swcMinify: false,
};

module.exports = nextConfig;

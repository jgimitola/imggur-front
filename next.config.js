/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["jgimitola-imggur-bucket.s3.us-east-2.amazonaws.com"],
  },
};

module.exports = nextConfig;

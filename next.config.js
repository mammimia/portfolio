/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"],
  },
  assetPrefix: isProd ? "https://mammimia.github.io/portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

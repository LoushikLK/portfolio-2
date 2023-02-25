/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lkcodes.netlify.app",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loushik.dev",
      },
    ],
  },
};

module.exports = nextConfig;

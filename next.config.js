/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/GET",
        destination: `http://localhost:4000`,
      },
    ];
  },
};

module.exports = nextConfig;

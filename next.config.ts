// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.unsplashusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;

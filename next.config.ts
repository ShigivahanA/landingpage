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
      {
        protocol: 'https',
        hostname: 'ljyojfjihkfxdjfmlpxu.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;

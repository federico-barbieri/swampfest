/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeimg.com',
      },
      {
        protocol: 'https',
        hostname: 'fierce-veiled-exception.glitch.me',
     // hostname: 'localhost:8080',
      },
    ],
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.metacritic.com',
        port: '',
      },
    ],
  }
}

module.exports = nextConfig


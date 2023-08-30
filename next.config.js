/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-cdn.incrowdsports.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // output: 'export',
}

module.exports = nextConfig

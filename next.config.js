/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // loader: 'imgix',
    // path: 'https://api.spoonacular.com/',
    domains: ['spoonacular.com'],
  },
}

module.exports = nextConfig

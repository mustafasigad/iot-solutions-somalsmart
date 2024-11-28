// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
      unoptimized: true
    },
    // Add env configuration here
    env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    }
    basePath: '/iot-solutions-somalsmart',
  }
  
  module.exports = nextConfig

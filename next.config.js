/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  basePath: '/iot-solutions-somalsmart/',
  trailingSlash: true
<<<<<<< HEAD
};
=======
};
>>>>>>> 350d92d9b2f9bdc3b06c116c5ca553e9be568716

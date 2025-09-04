/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async rewrites() {
    return [
      {
        source: '/forever-docs/:path*',
        destination: process.env.NEXT_PUBLIC_FOREVERDOCS_BASE_URL ? 
          `${process.env.NEXT_PUBLIC_FOREVERDOCS_BASE_URL}/:path*` : 
          '/forever-docs',
      },
      {
        source: '/from-the-block-to-the-blockchain/:path*',
        destination: process.env.NEXT_PUBLIC_FTB2B_BASE_URL ? 
          `${process.env.NEXT_PUBLIC_FTB2B_BASE_URL}/:path*` : 
          '/from-the-block-to-the-blockchain',
      },
    ];
  },
}

export default nextConfig

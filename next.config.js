/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  async rewrites() {
    return [
      // 确保 /distributor（无后续路径）也走 API，避免 403
      {
        source: '/distributor',
        destination: '/api/distributor',
      },
      {
        source: '/distributor/:path*',
        destination: '/api/distributor/:path*',
      },
      {
        source: '/id/:path*',
        destination: '/api/id/:path*',
      },
      {
        source: '/gameapi/:path*',
        destination: '/api/gameapi/:path*',
      },
      {
        source: '/acs',
        destination: '/api/acs',
      },
      {
        source: '/acs/:path*',
        destination: '/api/acs/:path*',
      },
      {
        source: '/auth/:path*',
        destination: '/api/auth/:path*',
      },
      {
        source: '/paygate/:path*',
        destination: '/api/paygate/:path*',
      },
      {
        source: '/sa/:path*',
        destination: '/api/sa/:path*',
      },
      {
        source: '/sport/:path*',
        destination: '/api/sport/:path*',
      },
      {
        source: '/admin/:path*',
        destination: '/api/admin/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

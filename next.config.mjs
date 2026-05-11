/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'file.aiquickdraw.com', pathname: '/**' },
      { protocol: 'https', hostname: 'tempfile.aiquickdraw.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org', pathname: '/**' },
    ],
  },
  trailingSlash: true,
};
export default nextConfig;

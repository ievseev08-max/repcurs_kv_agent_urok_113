import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Родительская папка тоже содержит package-lock — фиксируем корень трейсинга на этот проект
  outputFileTracingRoot: __dirname,
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

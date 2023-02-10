/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: process.env.BUILD_DIR,
  skipTrailingSlashRedirect: true
}

module.exports = nextConfig

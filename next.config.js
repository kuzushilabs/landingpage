/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.civitai.com', 'files.slack.com'],
  },
};

module.exports = nextConfig;

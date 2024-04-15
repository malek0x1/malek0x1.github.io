/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      }, {
        protocol: "https",
        hostname: "malek0x1.github.io",
      },
    ]
  }
};

export default nextConfig;

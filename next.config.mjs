/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  // For GitHub Pages project sites, set NEXT_PUBLIC_BASE_PATH="/<repo-name>"
  // Example: "/aitrona"
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;


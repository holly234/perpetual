/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: import.meta.dirname
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true
      },
      {
        source: "/blog/:slug*",
        destination: "/",
        permanent: true
      }
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;

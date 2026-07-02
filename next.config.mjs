/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/quote", destination: "/requirement", permanent: true },
      {
        source: "/insights/how-to-import-goods-from-india",
        destination: "/insights/how-to-source-products-from-india",
        permanent: true,
      },
      {
        source: "/insights/ocean-vs-air-freight",
        destination: "/insights/fob-cif-cfr-explained",
        permanent: true,
      },
      // Product lines removed from scope — send old URLs to the portfolio.
      {
        source: "/products/leather-products",
        destination: "/#products",
        permanent: true,
      },
      {
        source: "/products/handicrafts-decor",
        destination: "/#products",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

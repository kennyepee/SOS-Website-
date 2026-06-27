/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/college-pro-sessions",
        destination: "/2026-703-warriors",
        permanent: false,
      },
      {
        source: "/summer-cohort",
        destination: "/2026-703-warriors",
        permanent: false,
      },
    ]
  },
}

export default nextConfig

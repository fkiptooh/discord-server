/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Changes Made and the downgrade to a lower version of Next.
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
};

module.exports = nextConfig

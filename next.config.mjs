/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compiler: {},
  images: {
    unoptimized: true,
  },
  typedRoutes: true,
  reactCompiler: true,
};

export default nextConfig;

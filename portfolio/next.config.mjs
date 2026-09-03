/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone", // Only for docker containerization
  reactStrictMode: true,
  poweredByHeader: false, // Strips 'X-Powered-By: Next.js' to prevent fingerprinting
  transpilePackages: ["lucide-react"],
};

export default nextConfig;

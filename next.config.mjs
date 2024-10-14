/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'maps.googleapis.com',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 'w7.pngwing.com',
          },
        ],
      },
};

export default nextConfig;

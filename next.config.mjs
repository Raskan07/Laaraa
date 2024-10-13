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
            pathname: '/maps/api/place/photo',
          },
        ],
      },
};

export default nextConfig;

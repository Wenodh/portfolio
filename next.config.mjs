/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ protocol: 'https', hostname: 'images.app.goo.gl' }],
    },
};

export default nextConfig;

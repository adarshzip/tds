/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'drive.google.com',
                port: '',
                pathname: "/**",
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/prospects',
                destination: '/recruiting',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

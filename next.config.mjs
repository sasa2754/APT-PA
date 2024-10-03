/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/matematicas",
                destination: "/maths",
            },
            {
                source: "/generalFunction",
                destination: "/generalFunction",
            },
            {
                source: "/card",
                destination: "/cards",
            },
        ]
    }
};

export default nextConfig;

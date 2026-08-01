import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    rewrites: async () =>
        [
            {
                source: "/.well-known/atproto-did",
                destination: "/bsky_auth"
            }
        ]
}

export default nextConfig
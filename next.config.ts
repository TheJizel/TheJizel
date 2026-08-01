import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    redirects: async () => [
        {
            source: "/",
            destination: "https://bsky.app/profile/thejizel.com",
            permanent: false
        }
    ],
    rewrites: async () =>
        [
            {
                source: "/.well-known/atproto-did",
                destination: "/bsky_auth"
            }
        ]
}

export default nextConfig
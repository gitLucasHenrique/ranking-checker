/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        customKey: 'customKey',
      },
    compiler: {
      styledComponents: true,
    },
    reactStrictMode: true,
}

module.exports = nextConfig

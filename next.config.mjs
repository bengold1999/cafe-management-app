/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.resolve.alias.sqlite3 = 'noop2';
      return config;
    },
  }
  
  export default nextConfig;
  
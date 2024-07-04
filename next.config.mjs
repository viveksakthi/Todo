// next.config.mjs
import withSourceMaps from '@zeit/next-source-maps';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  // reactStrictMode: false,
  // other configuration options...
};

export default withSourceMaps(nextConfig);

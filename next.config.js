/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    images: {
      domains: ['m.media-amazon.com'],
    },
  };

  return nextConfig;
};

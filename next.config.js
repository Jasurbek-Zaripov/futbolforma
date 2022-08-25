const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig}*/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...nextTranslate(),
};

module.exports = nextConfig;

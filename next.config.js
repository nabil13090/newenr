/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Export statique pour Hostinger
  images: {
    unoptimized: true, // Obligatoire pour static export
  },
  // Optimisations pour la production
  compress: true,
  poweredByHeader: false, // Sécurité : masquer le header X-Powered-By
  // Trailing slash pour compatibilité Hostinger
  trailingSlash: true,
}

module.exports = nextConfig

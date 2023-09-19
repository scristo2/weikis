/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en"
  },

  async rewrites() {
    return [
      {
        source: '/es/mi-cuenta/inicio',
        destination: '/es/account/home',
        locale: false
        // automatically passes the locale on


      },

    ]
  },

  images: {
    domains: ['firebasestorage.googleapis.com'],
  },

}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["184.72.130.92/"]
  },

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["default", "es", "en"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'default',
    localeDetection: false,
  },
}



module.exports = nextConfig
 
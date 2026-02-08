/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  
  // 301 Redirects
  async redirects() {
    return [
      // Eski domain'den yeni domain'e yönlendirme (hosting seviyesinde de yapılmalı)
      // Bu redirectler aynı domain içindeki path değişiklikleri için
      {
        source: '/hizmetler/kombi',
        destination: '/hizmetler/kombi-servisi',
        permanent: true,
      },
      {
        source: '/hizmetler/dogalgaz',
        destination: '/hizmetler/dogalgaz-tesisati',
        permanent: true,
      },
      {
        source: '/hizmetler/petek',
        destination: '/hizmetler/petek-temizleme',
        permanent: true,
      },
      {
        source: '/hizmetler/gunes',
        destination: '/hizmetler/gunes-enerjisi',
        permanent: true,
      },
      {
        source: '/musteri-yorumlari',
        destination: '/yorumlar',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/iletisim',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/hizmetler',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Headers for SEO and Security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow'
          },
        ],
      },
    ]
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig

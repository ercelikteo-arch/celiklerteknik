import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Chatbot from '@/components/Chatbot'
import { siteConfig } from '@/config/siteConfig'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://celiklerteknik.com'),
  title: {
    default: 'Çelikler Teknik - Çanakkale Doğalgaz, Kombi, Isı Pompası Uzmanı',
    template: '%s | Çelikler Teknik'
  },
  description: 'Çanakkale genelinde doğalgaz tesisatı, kombi montajı, ısı pompası sistemleri, güneş enerji ve tesisat hizmetleri. 20+ yıllık tecrübe, garantili işçilik. 7/24 acil servis.',
  keywords: ['çanakkale doğalgaz', 'çanakkale kombi', 'ısı pompası çanakkale', 'tesisat çanakkale', 'güneş enerjisi çanakkale', 'petek temizleme çanakkale', 'kombi servisi', 'doğalgaz tesisatı', 'yerden ısıtma'],
  authors: [{ name: 'Çelikler Teknik' }],
  creator: 'Çelikler Teknik',
  publisher: 'Çelikler Teknik',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://celiklerteknik.com',
  },
  openGraph: {
    title: 'Çelikler Teknik - Çanakkale Isıtma ve Tesisat Çözümleri',
    description: 'Profesyonel doğalgaz, kombi, ısı pompası ve tesisat hizmetleri. 20+ yıl tecrübe, garantili işçilik.',
    url: 'https://celiklerteknik.com',
    siteName: 'Çelikler Teknik',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://celiklerteknik.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Çelikler Teknik - Çanakkale Doğalgaz ve Isıtma Sistemleri',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Çelikler Teknik - Çanakkale Doğalgaz, Kombi, Isı Pompası',
    description: 'Profesyonel doğalgaz, kombi, ısı pompası ve tesisat hizmetleri',
    images: ['https://celiklerteknik.com/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || siteConfig.seo.googleVerification || '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="geo.region" content="TR-17" />
        <meta name="geo.placename" content="Çanakkale" />
        {/* Google Search Console Verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        )}
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {/* Google Analytics 4 */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
        <Chatbot />
      </body>
    </html>
  )
}

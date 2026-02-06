import { NextResponse } from 'next/server'

const baseUrl = 'https://celiklerteknik.com'

// İlçeler
const districts = [
  'canakkale-merkez', 'biga', 'gelibolu', 'ezine', 'lapseki', 'can',
  'ayvacik', 'bayramic', 'eceabat', 'bozcaada', 'gokceada', 'yenice'
]

// Hizmetler
const services = [
  'dogalgaz-tesisati', 'kombi-servisi', 'isi-pompasi', 
  'gunes-enerjisi', 'su-tesisati', 'petek-temizleme', 'yerden-isitma'
]

// Blog yazıları
const blogSlugs = [
  'isi-pompasi-nedir', 'kombi-mi-isi-pompasi-mi', 'petek-temizligi-ne-zaman-yapilmali',
  'dogalgaz-tesisati-dikkat-edilmesi-gerekenler', 'yerden-isitma-mi-petek-mi',
  'gunes-enerjisi-avantajlari', 'kombi-bakimi-ne-zaman', 'tesisatci-secerken-dikkat',
  'enerji-tasarrufu-yontemleri', 'isi-kaybi-hesaplama'
]

// Longtail SEO sayfaları
const longtailPages = [
  'kombi-neden-su-akitir', 'petek-neden-isinmaz', 'kombi-basinc-dusuyor',
  'isi-pompasi-elektrik-tuketimi', 'kombi-ariza-kodlari', 'petek-temizligi-fiyatlari'
]

function generateSitemapXml() {
  const today = new Date().toISOString().split('T')[0]
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/hizmetler</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/urunler</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/referanslar</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/yorumlar</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/teklif-al</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/kesif-randevu</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/iletisim</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`

  // Hizmet sayfaları
  services.forEach(service => {
    xml += `
  <url>
    <loc>${baseUrl}/hizmetler/${service}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  })

  // İlçe sayfaları
  districts.forEach(district => {
    xml += `
  <url>
    <loc>${baseUrl}/ilceler/${district}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  })

  // Blog sayfaları
  blogSlugs.forEach(slug => {
    xml += `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  })

  // Programmatic SEO sayfaları (İlçe + Hizmet)
  districts.forEach(district => {
    services.forEach(service => {
      xml += `
  <url>
    <loc>${baseUrl}/hizmet/${district}-${service}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    })
  })

  // Longtail SEO sayfaları
  longtailPages.forEach(page => {
    xml += `
  <url>
    <loc>${baseUrl}/rehber/${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`
  })

  xml += `
</urlset>`

  return xml
}

export async function GET() {
  const sitemap = generateSitemapXml()
  
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

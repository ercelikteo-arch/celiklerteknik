import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

const baseUrl = 'https://celiklerteknik.com'

async function generateSitemapXml() {
  const today = new Date().toISOString().split('T')[0]
  
  // Veritabanından dinamik veriler çek
  const [districts, services, blogPosts, products, references] = await Promise.all([
    prisma.district.findMany({ select: { slug: true } }),
    prisma.service.findMany({ select: { slug: true } }),
    prisma.blogPost.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } }),
    prisma.product.findMany({ select: { slug: true } }),
    prisma.reference.findMany({ where: { published: true }, select: { slug: true } }),
  ])
  
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
  </url>
  <url>
    <loc>${baseUrl}/sss</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/garanti-ve-servis-politikasi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/kombi-mi-isi-pompasi-mi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/gunes-enerjisi-mi-sofben-mi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/yerden-isitma-mi-petek-mi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/yazlikta-kisin-donma-onleme</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/mustakil-ev-isi-pompasi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/villa-icin-isinma-sistemi-secimi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`

  // Hizmet sayfaları (DB'den)
  for (const service of services) {
    xml += `
  <url>
    <loc>${baseUrl}/hizmetler/${service.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  }

  // İlçe sayfaları (DB'den)
  for (const district of districts) {
    xml += `
  <url>
    <loc>${baseUrl}/ilceler/${district.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  }

  // Blog sayfaları (DB'den - sadece yayınlananlar)
  for (const post of blogPosts) {
    const lastmod = post.updatedAt ? post.updatedAt.toISOString().split('T')[0] : today
    xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  }

  // Ürün sayfaları (DB'den)
  for (const product of products) {
    xml += `
  <url>
    <loc>${baseUrl}/urunler/${product.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  }

  // Referans sayfaları (DB'den)
  for (const ref of references) {
    xml += `
  <url>
    <loc>${baseUrl}/referanslar/${ref.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`
  }

  // Programmatic SEO sayfaları (İlçe + Hizmet kombinasyonları)
  for (const district of districts) {
    for (const service of services) {
      xml += `
  <url>
    <loc>${baseUrl}/hizmet/${district.slug}-${service.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    }
  }

  xml += `
</urlset>`

  return xml
}

export async function GET() {
  try {
    const sitemap = await generateSitemapXml()
    
    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Sitemap generation error:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}

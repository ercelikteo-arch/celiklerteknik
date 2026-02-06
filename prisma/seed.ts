import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('Admin123!', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@celiklerteknik.com' },
    update: {},
    create: {
      email: 'admin@celiklerteknik.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'ADMIN'
    }
  })
  console.log('✅ Admin user created:', admin.email)

  // Create editor user
  const editor = await prisma.user.upsert({
    where: { email: 'editor@celiklerteknik.com' },
    update: {},
    create: {
      email: 'editor@celiklerteknik.com',
      password: hashedPassword,
      name: 'Editör',
      role: 'EDITOR'
    }
  })
  console.log('✅ Editor user created:', editor.email)

  // Create site settings
  await prisma.siteSettings.upsert({
    where: { id: 'main' },
    update: {},
    create: {
      id: 'main',
      companyName: 'Çelikler Teknik',
      phone: '0286 566 1055',
      phoneSecondary: '0532 473 9862',
      whatsapp: '0532 473 9862',
      email: 'info@celiklerteknik.com',
      adminEmail: 'admin@celiklerteknik.com',
      workingHours: 'Pazartesi - Cumartesi: 08:30 - 19:00',
      workingHoursSunday: 'Pazar: Kapalı',
      addressGelibolu: 'Küçük Sanayi Sitesi 7. Sokak No:4, Gelibolu/Çanakkale',
      addressLapseki: 'Çardak E90 Karayolu Üzeri, Lapseki/Çanakkale',
      mapLinkGelibolu: 'https://maps.app.goo.gl/1ZnMDWygJr6L8PUa6',
      mapLinkLapseki: 'https://maps.app.goo.gl/QthegNNx69m1pdCM8',
      siteTitleTemplate: '%s | Çelikler Teknik',
      defaultMetaDescription: 'Çanakkale genelinde doğalgaz tesisatı, kombi montajı, ısı pompası sistemleri, güneş enerji ve tesisat hizmetleri.'
    }
  })
  console.log('✅ Site settings created')

  // Create districts
  const districts = [
    { slug: 'canakkale-merkez', name: 'Çanakkale Merkez', population: '180.000', order: 1 },
    { slug: 'biga', name: 'Biga', population: '60.000', order: 2 },
    { slug: 'gelibolu', name: 'Gelibolu', population: '30.000', order: 3 },
    { slug: 'ezine', name: 'Ezine', population: '25.000', order: 4 },
    { slug: 'lapseki', name: 'Lapseki', population: '15.000', order: 5 },
    { slug: 'can', name: 'Çan', population: '35.000', order: 6 },
    { slug: 'ayvacik', name: 'Ayvacık', population: '20.000', order: 7 },
    { slug: 'bayramic', name: 'Bayramiç', population: '18.000', order: 8 },
    { slug: 'eceabat', name: 'Eceabat', population: '8.000', order: 9 },
    { slug: 'bozcaada', name: 'Bozcaada', population: '3.000', order: 10 },
    { slug: 'gokceada', name: 'Gökçeada', population: '10.000', order: 11 },
    { slug: 'yenice', name: 'Yenice', population: '22.000', order: 12 },
  ]

  for (const district of districts) {
    await prisma.district.upsert({
      where: { slug: district.slug },
      update: { order: district.order },
      create: district
    })
  }
  console.log('✅ Districts created:', districts.length)

  // Create services
  const services = [
    { slug: 'dogalgaz-tesisati', name: 'Doğalgaz Tesisatı', shortName: 'Doğalgaz', description: 'Profesyonel doğalgaz tesisatı kurulumu', keywords: ['doğalgaz', 'gaz tesisatı'], order: 1 },
    { slug: 'kombi-servisi', name: 'Kombi Servisi', shortName: 'Kombi', description: 'Tüm markalarda kombi montajı ve bakımı', keywords: ['kombi', 'kombi servisi'], order: 2 },
    { slug: 'isi-pompasi', name: 'Isı Pompası', shortName: 'Isı Pompası', description: 'Enerji tasarruflu ısı pompası sistemleri', keywords: ['ısı pompası', 'heat pump'], order: 3 },
    { slug: 'petek-temizleme', name: 'Petek Temizleme', shortName: 'Petek', description: 'Profesyonel petek temizliği', keywords: ['petek temizleme', 'radyatör'], order: 4 },
    { slug: 'su-tesisati', name: 'Su Tesisatı', shortName: 'Su Tesisatı', description: 'Temiz ve atık su tesisatı', keywords: ['su tesisatı', 'tesisat'], order: 5 },
    { slug: 'gunes-enerjisi', name: 'Güneş Enerjisi', shortName: 'Güneş', description: 'Güneş enerjisi sistemleri', keywords: ['güneş enerjisi', 'solar'], order: 6 },
    { slug: 'yerden-isitma', name: 'Yerden Isıtma', shortName: 'Yerden Isıtma', description: 'Yerden ısıtma sistemi kurulumu', keywords: ['yerden ısıtma'], order: 7 },
    { slug: 'bakim-onarim', name: 'Bakım ve Onarım', shortName: 'Bakım', description: 'Periyodik bakım ve onarım hizmetleri', keywords: ['bakım', 'onarım', 'servis'], order: 8 },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: { order: service.order },
      create: service
    })
  }
  console.log('✅ Services created:', services.length)

  // Create sample reviews
  const reviews = [
    { name: 'Ahmet Yılmaz', district: 'Gelibolu', rating: 5, comment: 'Çok profesyonel bir ekip. Kombi montajını hızlı ve temiz bir şekilde yaptılar.', published: true },
    { name: 'Fatma Demir', district: 'Lapseki', rating: 5, comment: 'Isı pompası sistemimizi kurdular. Enerji faturamız yarıya düştü. Teşekkürler!', published: true },
    { name: 'Mehmet Kaya', district: 'Biga', rating: 4, comment: 'Petek temizliği için geldiler. İşlerini iyi yapıyorlar, fiyatlar makul.', published: true },
    { name: 'Ayşe Çelik', district: 'Çanakkale Merkez', rating: 5, comment: 'Doğalgaz tesisatımızı yaptırdık. Güvenilir ve kaliteli iş çıkardılar.', published: true },
    { name: 'Ali Öztürk', district: 'Ezine', rating: 5, comment: 'Acil su kaçağı için aradık, aynı gün geldiler. Çok memnun kaldık.', published: true },
  ]

  for (const review of reviews) {
    const existing = await prisma.review.findFirst({ where: { name: review.name } })
    if (!existing) {
      await prisma.review.create({ data: review })
    }
  }
  console.log('✅ Sample reviews created')

  // Create sample blog posts
  const blogPosts = [
    {
      title: 'Isı Pompası Nedir? Nasıl Çalışır?',
      slug: 'isi-pompasi-nedir',
      excerpt: 'Isı pompası sistemlerinin çalışma prensibi, avantajları ve dezavantajları hakkında detaylı bilgi.',
      content: '<h2>Isı Pompası Nedir?</h2><p>Isı pompası, dış ortamdan aldığı düşük sıcaklıktaki ısıyı yüksek sıcaklığa çevirerek evinizi ısıtan modern bir teknolojidir.</p><h2>Avantajları</h2><ul><li>Yüksek enerji verimliliği</li><li>Düşük işletme maliyeti</li><li>Çevre dostu</li></ul>',
      category: 'Isıtma Sistemleri',
      tags: ['ısı pompası', 'enerji tasarrufu', 'ısıtma'],
      published: true,
      readingTime: 5,
      coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      authorId: admin.id
    },
    {
      title: 'Kombi Bakımı Ne Zaman Yapılmalı?',
      slug: 'kombi-bakimi-ne-zaman',
      excerpt: 'Kombi bakımının önemi, ne sıklıkla yapılması gerektiği ve bakım sürecinde yapılanlar.',
      content: '<h2>Kombi Bakımı Neden Önemli?</h2><p>Düzenli bakım, kombinin verimli çalışmasını ve uzun ömürlü olmasını sağlar.</p><h2>Bakım Sıklığı</h2><p>Yılda bir kez, tercihen ısıtma sezonu öncesi yapılmalıdır.</p>',
      category: 'Bakım',
      tags: ['kombi', 'bakım', 'servis'],
      published: true,
      readingTime: 4,
      coverImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800',
      authorId: admin.id
    }
  ]

  for (const post of blogPosts) {
    const existing = await prisma.blogPost.findUnique({ where: { slug: post.slug } })
    if (!existing) {
      await prisma.blogPost.create({ data: post })
    }
  }
  console.log('✅ Sample blog posts created')

  // Create sample products
  const products = [
    {
      name: 'Vaillant ecoTEC Plus 24 kW',
      slug: 'vaillant-ecotec-plus-24',
      shortDescription: 'Yoğuşmalı kombi, yüksek verimlilik',
      description: 'Vaillant ecoTEC Plus serisi, yüksek verimli yoğuşmalı teknolojisi ile enerji tasarrufu sağlar.',
      price: 45000,
      category: 'Kombiler',
      images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400'],
      inStock: true,
      featured: true
    },
    {
      name: 'Daikin Altherma 8 kW',
      slug: 'daikin-altherma-8kw',
      shortDescription: 'Hava kaynaklı ısı pompası',
      description: 'Daikin Altherma, yüksek COP değeri ile enerji tasarrufu sağlayan ısı pompası sistemidir.',
      price: 95000,
      category: 'Isı Pompaları',
      images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'],
      inStock: true,
      featured: true
    }
  ]

  for (const product of products) {
    const existing = await prisma.product.findUnique({ where: { slug: product.slug } })
    if (!existing) {
      await prisma.product.create({ data: product })
    }
  }
  console.log('✅ Sample products created')

  // Create sample references
  const references = [
    {
      title: 'Villa Isı Pompası Kurulumu',
      slug: 'villa-isi-pompasi-kurulumu',
      location: 'Çanakkale Merkez',
      projectType: 'Konut',
      serviceType: 'Isı Pompası',
      duration: '5 gün',
      summary: '250 m² villa için 16 kW ısı pompası ve yerden ısıtma sistemi kurulumu yapıldı.',
      benefits: ['%60 enerji tasarrufu', 'Sessiz çalışma', 'Uzaktan kontrol'],
      beforeImages: [],
      afterImages: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'],
      published: true
    },
    {
      title: 'Apartman Doğalgaz Tesisatı',
      slug: 'apartman-dogalgaz-tesisati',
      location: 'Biga',
      projectType: 'Apartman',
      serviceType: 'Doğalgaz Tesisatı',
      duration: '10 gün',
      summary: '12 daireli apartman için komple doğalgaz tesisatı projesi tamamlandı.',
      benefits: ['TSE belgeli malzeme', '2 yıl garanti', 'Güvenli kurulum'],
      beforeImages: [],
      afterImages: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600'],
      published: true
    }
  ]

  for (const ref of references) {
    const existing = await prisma.reference.findUnique({ where: { slug: ref.slug } })
    if (!existing) {
      await prisma.reference.create({ data: ref })
    }
  }
  console.log('✅ Sample references created')

  console.log('🎉 Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

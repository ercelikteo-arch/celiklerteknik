import { Metadata } from 'next'
import Link from 'next/link'
import { FaMapMarkerAlt, FaTools, FaArrowRight } from 'react-icons/fa'
import Breadcrumb from '@/components/Breadcrumb'
import { prisma } from '@/lib/prisma'

export const revalidate = 3600 // ISR: 1 saat
export const dynamic = 'force-dynamic' // Build sırasında DB'ye bağlanma

export const metadata: Metadata = {
  title: 'Referanslar - Tamamlanan Projeler | Çelikler Teknik',
  description: 'Çanakkale genelinde tamamladığımız ısı pompası, kombi, doğalgaz ve tesisat projeleri. Öncesi-sonrası fotoğrafları ile referanslarımız.',
  keywords: ['çelikler teknik referanslar', 'çanakkale tesisat projeleri', 'ısı pompası kurulum örnekleri'],
  alternates: {
    canonical: 'https://celiklerteknik.com/referanslar',
  },
  openGraph: {
    title: 'Referanslar - Tamamlanan Projeler | Çelikler Teknik',
    description: 'Çanakkale genelinde tamamladığımız projeler',
    url: 'https://celiklerteknik.com/referanslar',
    type: 'website',
  },
}

async function getReferences() {
  return prisma.reference.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })
}

export default async function ReferanslarPage() {
  const references = await getReferences()

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[{ name: 'Referanslar', href: '/referanslar' }]} />

      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Referanslarımız</h1>
          <p className="text-xl text-gray-200">
            Çanakkale genelinde tamamladığımız projeler
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          {references.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Henüz referans bulunmuyor.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {references.map((ref) => (
                <div key={ref.id} className="card group overflow-hidden">
                  {/* Before/After Images */}
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    {ref.afterImages[0] ? (
                      <img
                        src={ref.afterImages[0]}
                        alt={ref.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : ref.beforeImages[0] ? (
                      <img
                        src={ref.beforeImages[0]}
                        alt={ref.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Görsel yok</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                      {ref.projectType}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-primary mb-2 font-display">
                    {ref.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-secondary" />
                      <span>{ref.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaTools className="text-secondary" />
                      <span>{ref.serviceType}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{ref.summary}</p>

                  {ref.benefits.length > 0 && (
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                      {ref.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {ref.duration && (
                    <p className="text-sm text-gray-500">
                      Süre: {ref.duration}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 font-display">
            Projenizi Birlikte Gerçekleştirelim
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Isıtma ve tesisat ihtiyaçlarınız için ücretsiz keşif ve teklif alın.
            Uzman ekibimiz sizin için en uygun çözümü sunacaktır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/teklif-al"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Ücretsiz Teklif Al</span>
              <FaArrowRight />
            </Link>
            <Link
              href="/kesif-randevu"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>Keşif Randevusu</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

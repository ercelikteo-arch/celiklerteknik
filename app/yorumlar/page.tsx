import { prisma } from '@/lib/prisma'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'

export const revalidate = 3600 // ISR: 1 saat
export const dynamic = 'force-dynamic' // Build sırasında DB'ye bağlanma

export const metadata = {
  title: 'Müşteri Yorumları - Çelikler Teknik | Çanakkale',
  description: 'Çanakkale genelinde hizmet verdiğimiz müşterilerimizin yorumları. %98 müşteri memnuniyeti.',
  keywords: 'çelikler teknik yorumlar, çanakkale tesisatçı yorumlar, müşteri memnuniyeti',
  alternates: {
    canonical: 'https://celiklerteknik.com/yorumlar',
  },
  openGraph: {
    title: 'Müşteri Yorumları - Çelikler Teknik',
    description: 'Müşterilerimizin deneyimlerini okuyun',
    url: 'https://celiklerteknik.com/yorumlar',
  },
}

async function getReviews() {
  return prisma.review.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })
}

export default async function YorumlarPage() {
  const reviews = await getReviews()
  
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
    : '5.0'
  const totalReviews = reviews.length

  return (
    <div className="min-h-screen">
      {/* JSON-LD Schema for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Çelikler Teknik',
            url: 'https://celiklerteknik.com',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: averageRating,
              reviewCount: totalReviews || 1,
              bestRating: '5',
              worstRating: '1',
            },
            review: reviews.map((review) => ({
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: review.name,
              },
              datePublished: review.createdAt.toISOString().split('T')[0],
              reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating,
                bestRating: '5',
                worstRating: '1',
              },
              reviewBody: review.comment,
            })),
          }),
        }}
      />

      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Müşteri Yorumları</h1>
          <p className="text-xl text-gray-200 mb-6">
            Çanakkale genelinde hizmet verdiğimiz müşterilerimizin deneyimleri
          </p>
          <div className="flex items-center gap-6">
            <div className="bg-white text-primary px-6 py-3 rounded-lg">
              <p className="text-3xl font-bold">{averageRating}</p>
              <p className="text-sm">Ortalama Puan</p>
            </div>
            <div className="bg-white text-primary px-6 py-3 rounded-lg">
              <p className="text-3xl font-bold">{totalReviews}</p>
              <p className="text-sm">Toplam Yorum</p>
            </div>
            <div className="bg-white text-primary px-6 py-3 rounded-lg">
              <p className="text-3xl font-bold">%98</p>
              <p className="text-sm">Memnuniyet</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          {reviews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Henüz yorum bulunmuyor.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  name={review.name}
                  district={review.district}
                  rating={review.rating}
                  comment={review.comment}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 font-display">
            Siz de Memnun Müşterilerimize Katılın
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Profesyonel hizmet için hemen teklif alın
          </p>
          <Link href="/teklif-al" className="btn-primary inline-block">
            Ücretsiz Teklif Al
          </Link>
        </div>
      </section>
    </div>
  )
}

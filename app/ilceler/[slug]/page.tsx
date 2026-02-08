import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaPhone, FaCheckCircle } from 'react-icons/fa'
import { prisma } from '@/lib/prisma'
import DistrictCTA from '@/components/DistrictCTA'

async function getDistrict(slug: string) {
  return prisma.district.findUnique({
    where: { slug, active: true }
  })
}

async function getAllDistricts() {
  return prisma.district.findMany({
    where: { active: true },
    select: { slug: true }
  })
}

export async function generateStaticParams() {
  const districts = await getAllDistricts()
  return districts.map((district) => ({
    slug: district.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const district = await getDistrict(params.slug)
  
  if (!district) {
    return {
      title: 'İlçe Bulunamadı',
    }
  }

  return {
    title: `${district.name} Tesisatçı - Doğalgaz, Kombi, Isı Pompası | Çelikler Teknik`,
    description: `${district.name} ve çevresinde profesyonel tesisat, doğalgaz, kombi ve ısı pompası hizmetleri. Hızlı servis, uygun fiyat, garantili işçilik.`,
    keywords: `${district.name} tesisatçı, ${district.name} doğalgaz, ${district.name} kombi, ${district.name} ısı pompası`,
  }
}

export default async function DistrictPage({ params }: { params: { slug: string } }) {
  const district = await getDistrict(params.slug)

  if (!district) {
    notFound()
  }

  // Varsayılan içerik oluştur
  const defaultContent = `
    <p><strong>${district.name}</strong> ve çevresinde 20 yılı aşkın tecrübemizle profesyonel tesisat hizmetleri sunuyoruz.</p>
    <p>Doğalgaz tesisatı, kombi montajı ve servisi, ısı pompası sistemleri, su tesisatı ve petek temizliği konularında uzman ekibimizle yanınızdayız.</p>
    ${district.serviceNote ? `<p><em>${district.serviceNote}</em></p>` : ''}
  `

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            {district.name} Tesisatçı
          </h1>
          <p className="text-xl text-gray-200">
            Profesyonel tesisat, doğalgaz, kombi ve ısı pompası hizmetleri
          </p>
          {district.population && (
            <p className="text-sm text-gray-300 mt-2">Nüfus: {district.population}</p>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              dangerouslySetInnerHTML={{ __html: district.uniqueContent || defaultContent }} 
              className="prose prose-lg max-w-none mb-8" 
            />

            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              {district.name}'de Sunduğumuz Hizmetler
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="card">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-2">Doğalgaz Tesisatı</h3>
                    <p className="text-gray-600 text-sm">Güvenli ve standartlara uygun doğalgaz tesisatı kurulumu</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-2">Kombi Servisi</h3>
                    <p className="text-gray-600 text-sm">Tüm markalarda kombi montaj, bakım ve onarım</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-2">Isı Pompası</h3>
                    <p className="text-gray-600 text-sm">Enerji tasarruflu ısı pompası sistemleri</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-2">Su Tesisatı</h3>
                    <p className="text-gray-600 text-sm">Temiz ve atık su tesisatı hizmetleri</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-2">Petek Temizliği</h3>
                    <p className="text-gray-600 text-sm">Profesyonel petek temizleme hizmeti</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-primary mb-2">Acil Servis</h3>
                    <p className="text-gray-600 text-sm">Mesai dışı acil durumlar için öncelikli destek</p>
                  </div>
                </div>
              </div>
            </div>

            <DistrictCTA districtName={district.name} />
          </div>
        </div>
      </section>
    </div>
  )
}

// Dinamik sayfa olarak işaretle - yeni ilçeler için
export const dynamic = 'force-dynamic'
export const revalidate = 60 // 60 saniyede bir yeniden oluştur

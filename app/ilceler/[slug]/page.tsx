import Link from 'next/link'
import { FaPhone, FaCheckCircle } from 'react-icons/fa'
import { districts } from '@/data/districts'

export async function generateStaticParams() {
  return districts.map((district) => ({
    slug: district.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const district = districts.find((d) => d.slug === params.slug)
  
  if (!district) {
    return {
      title: 'İlçe Bulunamadı',
    }
  }

  return {
    title: `${district.name} Tesisatçı - Doğalgaz, Kombi, Isı Pompası | Çelikler Yapı`,
    description: `${district.name} ve çevresinde profesyonel tesisat, doğalgaz, kombi ve ısı pompası hizmetleri. Hızlı servis, uygun fiyat, garantili işçilik.`,
    keywords: `${district.name} tesisatçı, ${district.name} doğalgaz, ${district.name} kombi, ${district.name} ısı pompası`,
  }
}

export default function DistrictPage({ params }: { params: { slug: string } }) {
  const district = districts.find((d) => d.slug === params.slug)

  if (!district) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">İlçe bulunamadı</h1>
          <Link href="/" className="text-secondary hover:underline">
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    )
  }

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
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: district.content }} className="prose prose-lg max-w-none mb-8" />

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
                    <p className="text-gray-600 text-sm">7/24 acil arıza müdahale hizmeti</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                {district.name}'de Hizmetinizdeyiz
              </h3>
              <p className="mb-6">Ücretsiz keşif ve teklif için hemen arayın</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/teklif-al" className="btn-primary bg-white text-primary hover:bg-gray-100">
                  Teklif Al
                </Link>
                <a href="tel:+902862170000" className="btn-secondary flex items-center justify-center gap-2">
                  <FaPhone />
                  <span>0286 217 00 00</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

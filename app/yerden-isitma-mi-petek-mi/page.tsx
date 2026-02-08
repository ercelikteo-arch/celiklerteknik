import Link from 'next/link'
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'

export const metadata: Metadata = {
  title: 'Yerden Isıtma mı Petek mi? Hangisi Daha İyi? | Çelikler Teknik',
  description: 'Yerden ısıtma ve petek (radyatör) karşılaştırması. Hangisi daha ekonomik ve konforlu? Yeni ev ve tadilat için doğru seçim rehberi.',
  keywords: 'yerden ısıtma mı petek mi, radyatör yerden ısıtma karşılaştırma, döşemeden ısıtma, kalorifer petek',
  alternates: {
    canonical: 'https://celiklerteknik.com/yerden-isitma-mi-petek-mi',
  },
}

const comparisonData = [
  { feature: 'Isı Dağılımı', yerden: 'Homojen, tüm zemin eşit', petek: 'Petek çevresinde yoğun', winner: 'yerden' },
  { feature: 'Konfor', yerden: 'Çok yüksek (sıcak zemin)', petek: 'İyi', winner: 'yerden' },
  { feature: 'Enerji Tasarrufu', yerden: '%15-25 daha az', petek: 'Standart', winner: 'yerden' },
  { feature: 'İlk Yatırım', yerden: 'Yüksek', petek: 'Düşük-Orta', winner: 'petek' },
  { feature: 'Kurulum Süresi', yerden: 'Uzun (şap kuruma)', petek: 'Kısa', winner: 'petek' },
  { feature: 'Mevcut Eve Uygulama', yerden: 'Zor (zemin yükselmesi)', petek: 'Kolay', winner: 'petek' },
  { feature: 'Estetik', yerden: 'Görünmez', petek: 'Duvarda yer kaplar', winner: 'yerden' },
  { feature: 'Isı Pompası Uyumu', yerden: 'Mükemmel', petek: 'Orta', winner: 'yerden' },
  { feature: 'Tepki Süresi', yerden: 'Yavaş (24-48 saat)', petek: 'Hızlı (30 dk)', winner: 'petek' },
  { feature: 'Bakım', yerden: 'Neredeyse yok', petek: 'Yıllık hava alma', winner: 'yerden' },
]

const faqItems = [
  {
    q: 'Yerden ısıtma mevcut eve yapılabilir mi?',
    a: 'Evet, tadilat sırasında yapılabilir. Ancak zemin 8-10 cm yükselir, kapı kasaları ve eşikler ayarlanmalıdır. Elektrikli yerden ısıtma daha ince profilli olduğu için tadilatlar için daha uygundur.'
  },
  {
    q: 'Yerden ısıtma arızalanırsa ne olur?',
    a: 'Kaliteli malzeme ve doğru kurulumda arıza riski çok düşüktür. Olası sorunlar termal kamera ile tespit edilir, minimum müdahale ile onarılır. Borular 50+ yıl dayanıklıdır.'
  },
  {
    q: 'Yerden ısıtma ile halı kullanılabilir mi?',
    a: 'Evet, ancak ince ve ısı geçirgen halılar tercih edilmelidir. Kalın halılar ısı transferini azaltır ve verimi düşürür. İdeal olan halısız kullanımdır.'
  },
  {
    q: 'Hangi zemin kaplaması uygun?',
    a: 'Seramik ve mermer en ideal olanlardır. Laminat ve özel parke de uygundur. Zemin kaplaması seçerken "yerden ısıtmaya uygun" ibaresine dikkat edin.'
  },
  {
    q: 'Yerden ısıtma ne kadar sürede ısınır?',
    a: 'İlk açılışta 24-48 saat sürebilir. Sonrasında sistem sıcak kaldığı için hızlı tepki verir. Sürekli çalıştırıldığında en verimli sonucu verir.'
  }
]

export default function YerdenIsitmaMiPetekMiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Yerden Isıtma mı Petek mi?
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Eviniz için en konforlu ve ekonomik ısıtma sistemini seçin
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Isıtma sistemi seçimi, evinizin konforunu ve enerji giderlerinizi doğrudan etkiler. 
              <strong> Yerden ısıtma</strong> modern ve konforlu bir çözümken, 
              <strong> petek (radyatör)</strong> geleneksel ve pratik bir alternatiftir.
            </p>
            <p className="text-lg text-gray-700">
              Her iki sistemin de kendine göre avantajları var. Doğru seçim; evinizin durumuna, 
              bütçenize ve beklentilerinize göre değişir.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Isı Dağılımı Farkı
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="font-bold text-primary text-xl mb-3">Yerden Isıtma</h3>
                <div className="bg-gradient-to-t from-orange-300 to-orange-100 h-24 rounded-lg mb-3 flex items-end justify-center pb-2">
                  <span className="text-sm text-orange-800">Eşit sıcaklık dağılımı</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Isı zeminden yukarı doğru yayılır. Tüm oda eşit sıcaklıkta.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="font-bold text-primary text-xl mb-3">Petek (Radyatör)</h3>
                <div className="bg-gradient-to-r from-orange-100 via-orange-300 to-orange-100 h-24 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-sm text-orange-800">Petek çevresinde yoğun</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Isı petek çevresinde yoğun, uzak köşeler daha soğuk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Detaylı Karşılaştırma
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">Özellik</th>
                    <th className="p-4 text-center">Yerden Isıtma</th>
                    <th className="p-4 text-center">Petek</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-gray-800">{row.feature}</td>
                      <td className={`p-4 text-center ${row.winner === 'yerden' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600'}`}>
                        {row.yerden}
                      </td>
                      <td className={`p-4 text-center ${row.winner === 'petek' ? 'bg-orange-50 text-orange-700 font-semibold' : 'text-gray-600'}`}>
                        {row.petek}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Hangi Durumda Hangisi?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Yerden Isıtma */}
              <div className="card border-2 border-blue-200 bg-blue-50">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">🔥 Yerden Isıtma Tercih Edin</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Yeni inşaat yapıyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Isı pompası kullanacaksanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Maksimum konfor istiyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Minimalist tasarım seviyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Uzun vadeli tasarruf öncelikliyse</span>
                  </li>
                </ul>
              </div>

              {/* Petek */}
              <div className="card border-2 border-orange-200 bg-orange-50">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">🌡️ Petek Tercih Edin</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Mevcut binada oturuyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Bütçeniz sınırlıysa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Hızlı ısınma istiyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Tadilat yapmak istemiyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Kirada oturuyorsanız</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hibrit Öneri */}
            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-green-700 mb-3">💡 Hibrit Çözüm</h3>
              <p className="text-gray-700">
                Bazı durumlarda her iki sistemi birlikte kullanmak mantıklı olabilir. 
                Örneğin: yaşam alanlarında yerden ısıtma, yatak odalarında petek. 
                Veya ana ısıtma yerden, hızlı ısınma gereken banyoda ek petek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="card">
                  <h3 className="font-bold text-primary mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Eviniz İçin Doğru Sistemi Birlikte Belirleyelim
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif ile evinizi inceliyor, ısı kaybı hesabı yapıyor ve en uygun sistemi öneriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kesif-randevu"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ücretsiz Keşif İste
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.formatted.replace('+', '')}`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp />
              WhatsApp ile Danışın
            </a>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a }
            }))
          })
        }}
      />
    </div>
  )
}

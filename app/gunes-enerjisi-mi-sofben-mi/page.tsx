import Link from 'next/link'
import { FaCheckCircle, FaSun, FaFire, FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'

export const metadata: Metadata = {
  title: 'Güneş Enerjisi mi Şofben mi? Sıcak Su İçin Hangisi? | Çelikler Teknik',
  description: 'Güneş enerjisi ve şofben karşılaştırması. Sıcak su için hangisi daha ekonomik? Vakum tüplü sistem mi elektrikli şofben mi? Detaylı analiz.',
  keywords: 'güneş enerjisi mi şofben mi, sıcak su sistemi, vakum tüplü güneş enerjisi, elektrikli şofben, termosifon',
  alternates: {
    canonical: 'https://celiklerteknik.com/gunes-enerjisi-mi-sofben-mi',
  },
}

const comparisonData = [
  { feature: 'İlk Yatırım', gunes: '15-30 bin TL', sofben: '3-8 bin TL', winner: 'sofben' },
  { feature: 'Aylık İşletme', gunes: '0 TL (güneşten)', sofben: '200-500 TL elektrik', winner: 'gunes' },
  { feature: 'Yıllık Tasarruf', gunes: '%60-80', sofben: '-', winner: 'gunes' },
  { feature: 'Amortisman', gunes: '2-3 yıl', sofben: '-', winner: 'gunes' },
  { feature: 'Ömür', gunes: '15-20 yıl', sofben: '5-10 yıl', winner: 'gunes' },
  { feature: 'Bakım', gunes: 'Yılda 1 kez', sofben: 'Yılda 1 kez', winner: 'esit' },
  { feature: 'Kışın Performans', gunes: 'Düşer (%40-60)', sofben: 'Sabit', winner: 'sofben' },
  { feature: 'Kurulum', gunes: 'Çatı/teras gerekli', sofben: 'Her yere', winner: 'sofben' },
  { feature: 'Çevre Dostu', gunes: 'Sıfır emisyon', sofben: 'Elektrik tüketimi', winner: 'gunes' },
]

const faqItems = [
  {
    q: 'Güneş enerjisi kışın sıcak su verir mi?',
    a: 'Evet, vakum tüplü sistemler kışın da çalışır. Verim %40-60 düşse de yine sıcak su üretir. Çok soğuk günler için elektrikli rezistans desteği veya kombi entegrasyonu yapılabilir.'
  },
  {
    q: 'Apartman dairesine güneş enerjisi takılır mı?',
    a: 'Çatı veya teras kullanım hakkınız varsa takılabilir. Kat mülkiyeti izni gerekebilir. Alternatif olarak balkon tipi küçük sistemler de mevcuttur.'
  },
  {
    q: 'Şofben mi termosifon mu?',
    a: 'Şofben anlık ısıtır, termosifon depolar. Az kullanımda şofben, çok kullanımda termosifon veya güneş enerjisi daha mantıklıdır.'
  },
  {
    q: 'Güneş enerjisi bakım gerektirir mi?',
    a: 'Minimum bakım yeterli. Yılda 1-2 kez tüplerin temizlenmesi ve genel kontrol önerilir. Hareketli parça olmadığı için arıza riski düşüktür.'
  },
  {
    q: 'Kaç yılda kendini amorti eder?',
    a: 'Ortalama 2-3 yılda yatırım geri dönüşü sağlar. Elektrik fiyatları arttıkça bu süre kısalır. Sistem 15-20 yıl çalıştığı için uzun vadede büyük tasarruf sağlar.'
  }
]

export default function GunesEnerjisiMiSofbenMiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Güneş Enerjisi mi Şofben mi?
          </h1>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
            Sıcak su ihtiyacınız için en ekonomik çözümü bulun
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Sıcak su, günlük yaşamın vazgeçilmez bir parçası. Banyo, mutfak, temizlik... 
              Her gün litrelerle sıcak su tüketiyoruz. Peki bu suyu ısıtmanın en ekonomik yolu hangisi?
            </p>
            <p className="text-lg text-gray-700">
              <strong>Vakum tüplü güneş enerjisi</strong> güneşten ücretsiz enerji alırken, 
              <strong> şofben</strong> elektrik veya doğalgaz ile anlık ısıtma yapar. 
              Her ikisinin de avantaj ve dezavantajları var.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
              <p className="text-blue-800">
                <strong>Not:</strong> Bu karşılaştırmada vakum tüplü güneş enerjisi sistemlerinden bahsediyoruz. 
                Bu sistemler elektrik üretmez, sadece sıcak su üretir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Karşılaştırma Tablosu
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">Özellik</th>
                    <th className="p-4 text-center">
                      <FaSun className="inline mr-2" />
                      Güneş Enerjisi
                    </th>
                    <th className="p-4 text-center">
                      <FaFire className="inline mr-2" />
                      Şofben
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-gray-800">{row.feature}</td>
                      <td className={`p-4 text-center ${row.winner === 'gunes' ? 'bg-yellow-50 text-yellow-700 font-semibold' : 'text-gray-600'}`}>
                        {row.gunes}
                      </td>
                      <td className={`p-4 text-center ${row.winner === 'sofben' ? 'bg-orange-50 text-orange-700 font-semibold' : 'text-gray-600'}`}>
                        {row.sofben}
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Hangi Durumda Hangisi?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Güneş Enerjisi */}
              <div className="card border-2 border-yellow-200 bg-yellow-50">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">☀️ Güneş Enerjisi Tercih Edin</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Müstakil ev veya villa ise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Çatı/teras kullanım hakkınız varsa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Uzun vadeli tasarruf istiyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Kalabalık aile (4+ kişi) iseniz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Yazlık/köy evinde kullanacaksanız</span>
                  </li>
                </ul>
              </div>

              {/* Şofben */}
              <div className="card border-2 border-orange-200 bg-orange-50">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">🔥 Şofben Tercih Edin</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Apartman dairesinde oturuyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Bütçeniz sınırlıysa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Kirada oturuyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Az sıcak su tüketiyorsanız (1-2 kişi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Hızlı ve pratik çözüm istiyorsanız</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Example */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              10 Yıllık Maliyet Karşılaştırması
            </h2>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 mb-4 text-center">
                <em>4 kişilik aile, günde 150 litre sıcak su kullanımı</em>
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                  <FaSun className="text-4xl text-yellow-500 mx-auto mb-2" />
                  <h4 className="font-bold text-yellow-600 mb-3">Güneş Enerjisi</h4>
                  <ul className="text-sm space-y-2 text-gray-700 text-left">
                    <li>İlk Yatırım: ~20.000 TL</li>
                    <li>10 Yıl Elektrik: ~10.000 TL*</li>
                    <li className="font-bold text-yellow-700">Toplam: ~30.000 TL</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">*Kış desteği için</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <FaFire className="text-4xl text-orange-500 mx-auto mb-2" />
                  <h4 className="font-bold text-orange-600 mb-3">Elektrikli Şofben</h4>
                  <ul className="text-sm space-y-2 text-gray-700 text-left">
                    <li>İlk Yatırım: ~5.000 TL</li>
                    <li>10 Yıl Elektrik: ~40.000 TL</li>
                    <li className="font-bold text-orange-700">Toplam: ~45.000 TL</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">&nbsp;</p>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mt-6 text-center">
                <p className="text-green-800 font-semibold">
                  💰 10 yılda güneş enerjisi ile ~15.000 TL tasarruf!
                </p>
              </div>
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
            Size En Uygun Sistemi Belirleyelim
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif ile evinizi inceliyor, ihtiyacınıza göre en doğru öneriyi sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/teklif-al"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ücretsiz Teklif Al
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.formatted.replace('+', '')}`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp />
              WhatsApp
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

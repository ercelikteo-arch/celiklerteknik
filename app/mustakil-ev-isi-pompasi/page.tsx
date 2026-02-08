import Link from 'next/link'
import { FaCheckCircle, FaHome, FaLeaf, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'

export const metadata: Metadata = {
  title: 'Müstakil Ev İçin Isı Pompası | Köy Evi, Bağ Evi | Çelikler Teknik',
  description: 'Müstakil ev, köy evi ve bağ evleri için ısı pompası çözümleri. Doğalgaz olmayan bölgelerde ekonomik ısıtma. Kurulum ve maliyet rehberi.',
  keywords: 'müstakil ev ısı pompası, köy evi ısıtma, bağ evi ısı pompası, doğalgaz olmayan ev ısıtma',
  alternates: {
    canonical: 'https://celiklerteknik.com/mustakil-ev-isi-pompasi',
  },
}

const advantages = [
  {
    title: 'Doğalgaz Bağımsızlığı',
    description: 'Doğalgaz hattı olmayan köy, bağ ve yazlık evlerde sorunsuz çalışır.',
    icon: '🏡'
  },
  {
    title: '%70 Enerji Tasarrufu',
    description: 'Elektrikli ısıtıcılara göre %70, tüp/mazota göre %50 tasarruf sağlar.',
    icon: '💰'
  },
  {
    title: 'Yazın Soğutma',
    description: 'Aynı sistem ile yazın klima gibi soğutma yapabilirsiniz.',
    icon: '❄️'
  },
  {
    title: 'Çevre Dostu',
    description: 'Fosil yakıt kullanmaz, karbon emisyonu sıfıra yakındır.',
    icon: '🌱'
  },
  {
    title: 'Uzun Ömür',
    description: '20-25 yıl sorunsuz çalışır, bakım maliyeti düşüktür.',
    icon: '⏱️'
  },
  {
    title: 'Devlet Desteği',
    description: 'Yenilenebilir enerji teşviklerinden yararlanabilirsiniz.',
    icon: '📋'
  }
]

const scenarios = [
  {
    title: 'Köy Evi (100-150 m²)',
    specs: '8-12 kW ısı pompası',
    cost: '80.000 - 120.000 TL',
    savings: 'Yıllık ~8.000 TL tasarruf',
    note: 'Mevcut peteklerle uyumlu çalışır'
  },
  {
    title: 'Bağ Evi (80-120 m²)',
    specs: '6-10 kW ısı pompası',
    cost: '70.000 - 100.000 TL',
    savings: 'Yıllık ~6.000 TL tasarruf',
    note: 'Yerden ısıtma ile ideal kombinasyon'
  },
  {
    title: 'Müstakil Ev (150-200 m²)',
    specs: '12-16 kW ısı pompası',
    cost: '120.000 - 180.000 TL',
    savings: 'Yıllık ~12.000 TL tasarruf',
    note: 'Çok katlı evlerde kat başına hesaplama'
  }
]

const faqItems = [
  {
    q: 'Köy evinde elektrik yeterli mi?',
    a: 'Çoğu köy evinde mevcut elektrik yeterlidir. 8-12 kW ısı pompası için tek fazlı 16A yeterli olabilir. Büyük sistemlerde 3 fazlı elektrik gerekebilir. Keşifte kontrol ediyoruz.'
  },
  {
    q: 'Mevcut peteklerimle çalışır mı?',
    a: 'Evet, yüksek sıcaklık ısı pompaları (HT) mevcut petek sisteminizle uyumludur. Ancak yerden ısıtma ile kombinasyon en yüksek verimi sağlar.'
  },
  {
    q: 'Kışın -10°C\'de çalışır mı?',
    a: 'Modern ısı pompaları -25°C\'ye kadar verimli çalışır. Çanakkale ikliminde tüm kış boyunca sorunsuz çalışır.'
  },
  {
    q: 'Bakım gerektirir mi?',
    a: 'Yılda bir kez periyodik bakım yeterlidir. Filtre temizliği ve genel kontrol yapılır. Bakım maliyeti çok düşüktür.'
  },
  {
    q: 'Kaç yılda kendini amorti eder?',
    a: 'Tüp veya mazot kullanıyorsanız 3-4 yılda, elektrikli ısıtıcı kullanıyorsanız 4-5 yılda amortisman sağlar.'
  }
]

export default function MustakilEvIsiPompasiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FaHome className="text-5xl mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Müstakil Ev İçin Isı Pompası
          </h1>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Köy evi, bağ evi ve müstakil evlerde ekonomik ve çevre dostu ısıtma
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Doğalgaz Olmayan Evlerde Isıtma Sorunu
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Köy evleri, bağ evleri ve şehir dışındaki müstakil evlerin çoğunda doğalgaz hattı yoktur. 
              Bu evlerde genellikle <strong>tüp, mazot, odun/kömür veya elektrikli ısıtıcılar</strong> kullanılır. 
              Ancak bu yöntemler hem pahalı hem de zahmetlidir.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Isı pompası</strong>, bu evler için ideal bir çözümdür. Sadece elektrik ile çalışır, 
              doğalgaz hattına ihtiyaç duymaz ve diğer yöntemlere göre çok daha ekonomiktir.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Müstakil Evde Isı Pompası Avantajları
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((item, index) => (
                <div key={index} className="card text-center">
                  <span className="text-4xl mb-3 block">{item.icon}</span>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Örnek Senaryolar ve Maliyetler
            </h2>

            <div className="space-y-6">
              {scenarios.map((scenario, index) => (
                <div key={index} className="card border-l-4 border-green-500">
                  <h3 className="font-bold text-primary text-xl mb-4">{scenario.title}</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500 block">Sistem</span>
                      <span className="font-semibold">{scenario.specs}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Tahmini Maliyet</span>
                      <span className="font-semibold">{scenario.cost}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Tasarruf</span>
                      <span className="font-semibold text-green-600">{scenario.savings}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Not</span>
                      <span className="font-semibold">{scenario.note}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              * Fiyatlar tahminidir, kesin fiyat keşif sonrası belirlenir.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Isıtma Yöntemleri Karşılaştırması
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">Yöntem</th>
                    <th className="p-4 text-center">Aylık Maliyet*</th>
                    <th className="p-4 text-center">Konfor</th>
                    <th className="p-4 text-center">Pratiklik</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="p-4 font-semibold text-green-700">Isı Pompası</td>
                    <td className="p-4 text-center text-green-700 font-bold">500-800 TL</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-4">Tüp (LPG)</td>
                    <td className="p-4 text-center">1.500-2.500 TL</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4">Mazot</td>
                    <td className="p-4 text-center">2.000-3.000 TL</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-4">Elektrikli Isıtıcı</td>
                    <td className="p-4 text-center">2.500-4.000 TL</td>
                    <td className="p-4 text-center">⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4">Odun/Kömür</td>
                    <td className="p-4 text-center">800-1.500 TL</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              * 120 m² ev için kış ayları ortalaması (tahmini)
            </p>
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
            Eviniz İçin Ücretsiz Keşif ve Teklif
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Köy eviniz, bağ eviniz veya müstakil eviniz için en uygun ısı pompası sistemini birlikte belirleyelim.
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

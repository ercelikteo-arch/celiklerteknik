import Link from 'next/link'
import { FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'

export const metadata: Metadata = {
  title: 'Villa İçin Isınma Sistemi Seçimi | Lüks Ev Isıtma | Çelikler Teknik',
  description: 'Villa ve lüks evler için ısınma sistemi rehberi. Isı pompası, yerden ısıtma, merkezi sistem. Konfor ve tasarruf odaklı çözümler.',
  keywords: 'villa ısıtma sistemi, lüks ev ısıtma, villa ısı pompası, villa yerden ısıtma, büyük ev ısıtma',
  alternates: {
    canonical: 'https://celiklerteknik.com/villa-icin-isinma-sistemi-secimi',
  },
}

const systemOptions = [
  {
    name: 'Isı Pompası + Yerden Isıtma',
    rating: 5,
    description: 'En ideal kombinasyon. Maksimum konfor ve tasarruf.',
    pros: ['%70 enerji tasarrufu', 'Homojen ısı dağılımı', 'Yazın soğutma', 'Sessiz çalışma'],
    cons: ['Yüksek ilk yatırım', 'Yeni inşaat için ideal'],
    cost: '200.000 - 400.000 TL',
    bestFor: 'Yeni villa projeleri'
  },
  {
    name: 'Isı Pompası + Fancoil',
    rating: 4,
    description: 'Hızlı ısınma ve soğutma. Mevcut villalara uygun.',
    pros: ['Hızlı tepki süresi', 'Isıtma + soğutma', 'Oda bazlı kontrol', 'Kolay kurulum'],
    cons: ['Fancoil görünür', 'Hafif ses'],
    cost: '150.000 - 300.000 TL',
    bestFor: 'Mevcut villalar, tadilat'
  },
  {
    name: 'Yoğuşmalı Kombi + Yerden Isıtma',
    rating: 4,
    description: 'Doğalgaz varsa ekonomik ve konforlu çözüm.',
    pros: ['Düşük ilk yatırım', 'Yüksek verim', 'Güvenilir teknoloji'],
    cons: ['Doğalgaz bağımlılığı', 'Soğutma yok'],
    cost: '80.000 - 150.000 TL',
    bestFor: 'Doğalgaz olan bölgeler'
  },
  {
    name: 'Merkezi Kazan + Petek',
    rating: 3,
    description: 'Geleneksel ve güvenilir. Büyük villalar için.',
    pros: ['Kanıtlanmış teknoloji', 'Yedek parça kolay', 'Düşük maliyet'],
    cons: ['Yüksek işletme maliyeti', 'Estetik sorun', 'Soğutma yok'],
    cost: '50.000 - 100.000 TL',
    bestFor: 'Bütçe odaklı projeler'
  }
]

const considerations = [
  {
    title: 'Villa Büyüklüğü',
    description: 'Metrekare arttıkça sistem kapasitesi ve maliyet artar. 200 m² üzeri villalarda merkezi sistem şart.',
    icon: '📐'
  },
  {
    title: 'Kat Sayısı',
    description: 'Çok katlı villalarda kat başına ayrı kontrol önemli. Yerden ısıtmada her kat ayrı devre olmalı.',
    icon: '🏢'
  },
  {
    title: 'Yalıtım Durumu',
    description: 'İyi yalıtım = düşük kapasite = düşük maliyet. Yalıtımsız villada sistem 2 kat büyük olabilir.',
    icon: '🧱'
  },
  {
    title: 'Kullanım Sıklığı',
    description: 'Sürekli oturulan villa ile yazlık villa için farklı sistemler mantıklı olabilir.',
    icon: '📅'
  },
  {
    title: 'Havuz ve Spa',
    description: 'Havuz ısıtması için ısı pompası ideal. Spa ve hamam için ek kapasite gerekir.',
    icon: '🏊'
  },
  {
    title: 'Estetik Beklenti',
    description: 'Lüks villalarda görünmez sistem (yerden ısıtma) tercih edilir. Petek estetik bozar.',
    icon: '✨'
  }
]

const faqItems = [
  {
    q: '300 m² villa için hangi sistem önerirsiniz?',
    a: 'Yeni inşaat ise ısı pompası + yerden ısıtma ideal. Mevcut villa ise ısı pompası + fancoil veya yoğuşmalı kombi + petek değerlendirilebilir. Keşif sonrası net öneri veririz.'
  },
  {
    q: 'Villa ısıtma maliyeti ne kadar?',
    a: 'Sistem seçimine göre değişir. Isı pompası ile 300 m² villa aylık 1.000-1.500 TL, doğalgaz ile 2.500-4.000 TL civarı olabilir.'
  },
  {
    q: 'Havuz ısıtması için ayrı sistem mi gerekir?',
    a: 'Hayır, ısı pompası hem ev hem havuz ısıtması yapabilir. Ancak kapasite buna göre hesaplanmalı. Alternatif olarak havuza özel küçük ısı pompası da kurulabilir.'
  },
  {
    q: 'Akıllı ev sistemleri ile entegre olur mu?',
    a: 'Evet, modern ısı pompaları ve kombiler akıllı ev sistemleri ile entegre çalışır. Uzaktan kontrol, zamanlama ve enerji takibi yapılabilir.'
  },
  {
    q: 'Jeneratör ile çalışır mı?',
    a: 'Evet, elektrik kesintilerinde jeneratör ile çalışabilir. Ancak jeneratör kapasitesi ısı pompası gücüne uygun olmalı.'
  }
]

export default function VillaIsinmaSistemiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-5xl mb-4 block">🏰</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Villa İçin Isınma Sistemi Seçimi
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Lüks ve konforlu yaşam için doğru ısıtma sistemi rehberi
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Villa Isıtmasında Doğru Seçim
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Villalar, standart dairelerden farklı ısıtma ihtiyaçlarına sahiptir. 
              Büyük metrekare, yüksek tavan, çok kat, havuz, spa gibi özel alanlar... 
              Tüm bunlar sistem seçimini etkiler.
            </p>
            <p className="text-lg text-gray-700">
              Doğru sistem seçimi hem <strong>konforunuzu</strong> hem de <strong>enerji giderlerinizi</strong> doğrudan etkiler. 
              Bu rehberde villa sahipleri için en uygun ısıtma sistemlerini karşılaştırıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* System Options */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Villa İçin Isıtma Sistemleri
            </h2>

            <div className="space-y-6">
              {systemOptions.map((system, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-primary">{system.name}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < system.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{system.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Avantajlar</h4>
                        <ul className="text-sm space-y-1">
                          {system.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Dezavantajlar</h4>
                        <ul className="text-sm space-y-1">
                          {system.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-orange-500">•</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Detaylar</h4>
                        <p className="text-sm"><strong>Maliyet:</strong> {system.cost}</p>
                        <p className="text-sm"><strong>İdeal:</strong> {system.bestFor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Considerations */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Sistem Seçerken Dikkat Edilecekler
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {considerations.map((item, index) => (
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

      {/* Recommendation */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Uzman Önerimiz
            </h2>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-700 mb-4">
                🏆 Villa İçin En İyi Kombinasyon
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Isı Pompası + Yerden Isıtma + Akıllı Kontrol</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Bu kombinasyon; maksimum konfor, minimum işletme maliyeti ve modern yaşam standartları sunar. 
                Yazın soğutma, kışın ısıtma, her odada ayrı sıcaklık kontrolü ve uzaktan yönetim imkanı sağlar.
              </p>
              <p className="text-gray-600">
                Yeni villa inşaatlarında bu sistemi şiddetle öneriyoruz. 
                Mevcut villalarda ise durum değerlendirmesi sonrası en uygun çözümü sunuyoruz.
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
            Villanız İçin Özel Proje ve Teklif
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif ile villanızı inceliyor, ısı kaybı hesabı yapıyor ve size özel proje sunuyoruz.
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

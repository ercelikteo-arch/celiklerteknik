import Link from 'next/link'
import { FaCheckCircle, FaTimesCircle, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'

export const metadata: Metadata = {
  title: 'Kombi mi Isı Pompası mı? Hangisi Daha Avantajlı? | Çelikler Teknik',
  description: 'Kombi ve ısı pompası karşılaştırması. Hangisi daha ekonomik? Hangi durumda hangisi mantıklı? Detaylı analiz ve uzman önerileri.',
  keywords: 'kombi mi ısı pompası mı, ısı pompası kombi karşılaştırma, hangisi daha ekonomik, ısıtma sistemi seçimi',
  alternates: {
    canonical: 'https://celiklerteknik.com/kombi-mi-isi-pompasi-mi',
  },
}

const comparisonData = [
  { feature: 'İlk Yatırım Maliyeti', kombi: 'Düşük (15-40 bin TL)', isiPompasi: 'Yüksek (80-200 bin TL)', winner: 'kombi' },
  { feature: 'Aylık İşletme Maliyeti', kombi: 'Orta-Yüksek', isiPompasi: 'Düşük (%50-70 tasarruf)', winner: 'isi' },
  { feature: 'Enerji Verimliliği', kombi: '%92-98', isiPompasi: '%300-500 (COP 3-5)', winner: 'isi' },
  { feature: 'Çevre Dostu', kombi: 'CO2 emisyonu var', isiPompasi: 'Sıfır emisyon', winner: 'isi' },
  { feature: 'Soğutma Özelliği', kombi: 'Yok', isiPompasi: 'Var (yazın klima)', winner: 'isi' },
  { feature: 'Kurulum Kolaylığı', kombi: 'Kolay', isiPompasi: 'Orta (dış ünite gerekli)', winner: 'kombi' },
  { feature: 'Bakım Maliyeti', kombi: 'Düşük', isiPompasi: 'Düşük', winner: 'esit' },
  { feature: 'Ömür', kombi: '15-20 yıl', isiPompasi: '20-25 yıl', winner: 'isi' },
  { feature: 'Doğalgaz Bağımlılığı', kombi: 'Var', isiPompasi: 'Yok', winner: 'isi' },
  { feature: 'Amortisman Süresi', kombi: '-', isiPompasi: '4-6 yıl', winner: 'isi' },
]

const faqItems = [
  {
    q: 'Isı pompası gerçekten %70 tasarruf sağlar mı?',
    a: 'Evet, doğru boyutlandırılmış ve kurulmuş bir ısı pompası doğalgaz kombiye göre %50-70 arası tasarruf sağlar. Bu oran evin yalıtımına, iklime ve kullanım alışkanlıklarına göre değişir.'
  },
  {
    q: 'Kombim varken ısı pompasına geçmeli miyim?',
    a: 'Kombiniz yeni ve sorunsuz çalışıyorsa acele etmeyin. Kombi ömrünü tamamladığında veya doğalgaz fiyatları çok arttığında geçiş mantıklı olur. Mevcut kombinizi yedek olarak tutabilirsiniz.'
  },
  {
    q: 'Isı pompası kışın verimli çalışır mı?',
    a: 'Modern ısı pompaları -25°C\'ye kadar verimli çalışır. Çanakkale\'nin ılıman ikliminde tüm kış boyunca sorunsuz çalışır.'
  },
  {
    q: 'Hangi durumda kombi daha mantıklı?',
    a: 'Bütçe kısıtlıysa, kirada oturuyorsanız veya kısa vadeli düşünüyorsanız kombi daha mantıklı. Ayrıca doğalgaz fiyatı çok düşük bölgelerde kombi avantajlı olabilir.'
  },
  {
    q: 'Hibrit sistem (kombi + ısı pompası) mantıklı mı?',
    a: 'Evet, özellikle çok soğuk bölgelerde hibrit sistem ideal. Isı pompası ana ısıtmayı yapar, çok soğuk günlerde kombi devreye girer. Maksimum verim ve güvenlik sağlar.'
  }
]

export default function KombiMiIsiPompasiMiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Kombi mi Isı Pompası mı?
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Eviniz için en doğru ısıtma sistemini seçmenize yardımcı oluyoruz
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Isıtma sistemi seçimi, evinizin konforunu ve aylık giderlerinizi doğrudan etkiler. 
              <strong> Kombi</strong> geleneksel ve güvenilir bir çözümken, <strong>ısı pompası</strong> modern ve enerji tasarruflu bir alternatiftir. 
              Peki hangisi sizin için daha uygun?
            </p>
            <p className="text-lg text-gray-700">
              Bu karşılaştırmada her iki sistemin avantaj ve dezavantajlarını, maliyetlerini ve hangi durumda hangisinin mantıklı olduğunu detaylı şekilde inceliyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Detaylı Karşılaştırma Tablosu
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left">Özellik</th>
                    <th className="p-4 text-center">Kombi</th>
                    <th className="p-4 text-center">Isı Pompası</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-gray-800">{row.feature}</td>
                      <td className={`p-4 text-center ${row.winner === 'kombi' ? 'bg-green-50 text-green-700 font-semibold' : 'text-gray-600'}`}>
                        {row.kombi}
                      </td>
                      <td className={`p-4 text-center ${row.winner === 'isi' ? 'bg-green-50 text-green-700 font-semibold' : 'text-gray-600'}`}>
                        {row.isiPompasi}
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
              {/* Kombi */}
              <div className="card border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">🔥 Kombi Tercih Edin</h3>
                <ul className="space-y-3">
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
                    <span>Doğalgaz altyapısı hazırsa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Hızlı kurulum istiyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Dış ünite için yer yoksa</span>
                  </li>
                </ul>
              </div>

              {/* Isı Pompası */}
              <div className="card border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">❄️ Isı Pompası Tercih Edin</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Uzun vadeli düşünüyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Enerji tasarrufu öncelikliyse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Yazın soğutma da istiyorsanız</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Doğalgaz yoksa veya pahalıysa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>Çevre dostu çözüm istiyorsanız</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Maliyet Analizi (Örnek Senaryo)
            </h2>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 mb-4 text-center">
                <em>150 m² ev, orta yalıtım, Çanakkale iklimi için yaklaşık değerler</em>
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-600 mb-3">Kombi (10 Yıllık)</h4>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>İlk Yatırım: ~25.000 TL</li>
                    <li>Yıllık Doğalgaz: ~15.000 TL</li>
                    <li>10 Yıl Toplam: ~175.000 TL</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-600 mb-3">Isı Pompası (10 Yıllık)</h4>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li>İlk Yatırım: ~120.000 TL</li>
                    <li>Yıllık Elektrik: ~5.000 TL</li>
                    <li>10 Yıl Toplam: ~170.000 TL</li>
                  </ul>
                </div>
              </div>

              <p className="text-center text-gray-600 mt-4 text-sm">
                * Bu değerler tahminidir. Gerçek maliyetler evin durumuna ve enerji fiyatlarına göre değişir.
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
            Eviniz İçin En Uygun Sistemi Birlikte Belirleyelim
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif ile evinizi inceliyor, ihtiyacınıza göre en doğru öneriyi sunuyoruz.
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

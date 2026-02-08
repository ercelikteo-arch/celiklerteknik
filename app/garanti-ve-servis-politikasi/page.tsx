'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaShieldAlt, FaTools, FaClipboardList, FaHeadset, FaChevronDown, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'

const faqItems = [
  {
    q: 'Garanti süresi ne kadar?',
    a: 'İşçilik garantimiz 2 yıldır. Ürün garantisi ise üreticiye göre değişir: kombiler 3-5 yıl, ısı pompaları 5-7 yıl, güneş enerjisi sistemleri 2-5 yıl. Garanti belgeleri teslimatta verilir.'
  },
  {
    q: 'Yetkili servis mi siz mi geliyorsunuz?',
    a: 'Montaj ve işçilik kaynaklı sorunlarda biz geliyoruz. Ürün kaynaklı arızalarda (kompresör, kart vb.) yetkili servise yönlendiriyoruz ve süreci sizin adınıza takip ediyoruz.'
  },
  {
    q: 'Aynı gün servis olur mu?',
    a: 'Yoğunluk durumuna göre mümkün olan en kısa sürede randevu veriyoruz. Acil durumlar (gaz kaçağı, su baskını) öncelikli değerlendirilir. Kesin süre telefonda bildirilir.'
  },
  {
    q: 'Uzak ilçelerde servis nasıl oluyor?',
    a: 'Çanakkale\'nin tüm ilçelerine hizmet veriyoruz. Uzak bölgelerde randevu planlaması yapılır, aynı gün birden fazla iş birleştirilerek verimli hizmet sunulur.'
  },
  {
    q: 'Garanti dışı durumlar nelerdir?',
    a: 'Kullanıcı hatası, yetkisiz müdahale, doğal afet, elektrik dalgalanması ve bakım ihmalinden kaynaklanan arızalar garanti kapsamı dışındadır.'
  },
  {
    q: 'Arıza kaydı nasıl oluşturulur?',
    a: 'Telefon, WhatsApp veya web sitemizdeki arıza formu ile kayıt oluşturabilirsiniz. Kayıt sonrası size takip numarası verilir ve en kısa sürede geri dönüş yapılır.'
  }
]

export default function GarantiServisPolitikasiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FaShieldAlt className="text-5xl mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Garanti ve Servis Politikası
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Şeffaf, güvenilir ve müşteri odaklı hizmet anlayışımız
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Garanti Türleri */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center gap-3">
                <FaShieldAlt className="text-secondary" />
                Garanti Türleri
              </h2>
              
              <div className="space-y-6">
                <div className="card border-l-4 border-green-500">
                  <h3 className="font-bold text-primary text-xl mb-3">Ürün Garantisi (Üretici Garantisi)</h3>
                  <p className="text-gray-600 mb-3">
                    Satın aldığınız ürünlerin üretici firması tarafından verilen garantidir. 
                    Ürün kaynaklı arızalarda (kompresör, elektronik kart, sensör vb.) yetkili servis devreye girer.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Kombiler: 3-5 yıl (markaya göre değişir)</li>
                    <li>• Isı Pompaları: 5-7 yıl</li>
                    <li>• Güneş Enerjisi: 2-5 yıl</li>
                    <li>• Tesisat Malzemeleri: 2-10 yıl</li>
                  </ul>
                </div>

                <div className="card border-l-4 border-blue-500">
                  <h3 className="font-bold text-primary text-xl mb-3">İşçilik ve Montaj Garantisi</h3>
                  <p className="text-gray-600 mb-3">
                    Çelikler Teknik olarak yaptığımız tüm montaj ve işçilik için <strong>2 yıl garanti</strong> veriyoruz. 
                    Montaj hatası, bağlantı sorunu veya işçilik kaynaklı arızalarda ücretsiz onarım yapıyoruz.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tesisat bağlantıları</li>
                    <li>• Montaj işçiliği</li>
                    <li>• Kaynak ve lehim işleri</li>
                    <li>• Sistem ayarları</li>
                  </ul>
                </div>

                <div className="card border-l-4 border-orange-500 bg-orange-50">
                  <h3 className="font-bold text-primary text-xl mb-3">Garanti Kapsamı Dışında Kalan Durumlar</h3>
                  <p className="text-gray-600 mb-3">
                    Aşağıdaki durumlarda garanti geçersiz olur:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kullanıcı hatası veya ihmali</li>
                    <li>• Yetkisiz kişi veya firma müdahalesi</li>
                    <li>• Periyodik bakım yaptırılmaması</li>
                    <li>• Doğal afet (deprem, sel, yıldırım)</li>
                    <li>• Elektrik dalgalanması kaynaklı hasarlar</li>
                    <li>• Ürünün amacı dışında kullanımı</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Servis Süreci */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center gap-3">
                <FaTools className="text-secondary" />
                Servis Süreci Nasıl İşler?
              </h2>

              <div className="bg-gray-50 rounded-xl p-6">
                <ol className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">1</span>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Arıza Bildirimi</h4>
                      <p className="text-gray-600">
                        Telefon, WhatsApp veya web formu ile arızanızı bildirin. 
                        Sorunu kısaca anlatmanız yeterli.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">2</span>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Ön Değerlendirme</h4>
                      <p className="text-gray-600">
                        Teknik ekibimiz sorunu telefonda değerlendirir. 
                        Basit sorunlar uzaktan çözülebilir, gerekirse randevu verilir.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">3</span>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Yerinde İnceleme</h4>
                      <p className="text-gray-600">
                        Teknisyenimiz arızayı yerinde inceler. 
                        Sorunun kaynağı (ürün mü, işçilik mi) belirlenir.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">4</span>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Çözüm ve Yönlendirme</h4>
                      <p className="text-gray-600">
                        İşçilik kaynaklı ise biz onarıyoruz. 
                        Ürün kaynaklı ise yetkili servise yönlendirip süreci takip ediyoruz.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">5</span>
                    <div>
                      <h4 className="font-bold text-primary mb-1">Bilgilendirme</h4>
                      <p className="text-gray-600">
                        Her aşamada sizi bilgilendiriyoruz. 
                        Tahmini süre ve maliyet (garanti dışı ise) önceden söylenir.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Arıza Kaydı */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center gap-3">
                <FaClipboardList className="text-secondary" />
                Arıza Kaydı ve Takip
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="font-bold text-primary mb-3">Arıza Kaydı Açıldığında</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>✓ Size takip numarası verilir</li>
                    <li>✓ Kayıt sistemimize işlenir</li>
                    <li>✓ Uygun teknisyen atanır</li>
                    <li>✓ Randevu için geri dönüş yapılır</li>
                  </ul>
                </div>

                <div className="card">
                  <h3 className="font-bold text-primary mb-3">Geri Dönüş Süreleri</h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Acil durumlar: Aynı gün içinde</li>
                    <li>• Normal arızalar: 1-2 iş günü</li>
                    <li>• Bakım talepleri: 3-5 iş günü</li>
                    <li className="text-orange-600 text-xs mt-2">
                      * Yoğunluk ve hava koşullarına göre değişebilir
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Not:</strong> Kış aylarında ve sezon başlarında yoğunluk artabilir. 
                  Acil olmayan talepler için sabırlı olmanızı rica ederiz. 
                  Acil durumlar (gaz kaçağı, su baskını) her zaman önceliklidir.
                </p>
              </div>
            </div>

            {/* SSS */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center gap-3">
                <FaHeadset className="text-secondary" />
                Sık Sorulan Sorular
              </h2>

              <div className="space-y-3">
                {faqItems.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-800">{item.q}</span>
                      <FaChevronDown 
                        className={`text-secondary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                      <p className="px-6 pb-4 text-gray-600">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Arıza veya Sorunuz mu Var?
              </h3>
              <p className="mb-6 text-gray-200">
                Hemen bize ulaşın, en kısa sürede yardımcı olalım
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteConfig.contact.phone.formatted.primary}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <FaPhone />
                  {siteConfig.contact.phone.primary}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.formatted.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp />
                  WhatsApp
                </a>
                <Link
                  href="/ariza-kaydi"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  <FaClipboardList />
                  Arıza Kaydı
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a
              }
            }))
          })
        }}
      />
    </div>
  )
}

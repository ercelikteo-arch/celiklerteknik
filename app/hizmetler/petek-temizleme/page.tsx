import Link from 'next/link'
import { FaCheckCircle, FaPhone, FaThermometerHalf, FaLeaf, FaMoneyBillWave } from 'react-icons/fa'
import { Metadata } from 'next'
import { ServiceSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Petek Temizleme Çanakkale | Radyatör Temizliği | Çelikler Yapı',
  description: 'Çanakkale petek temizleme hizmeti. Profesyonel radyatör temizliği, kombi petek yıkama. %30 enerji tasarrufu. Aynı gün servis, garantili işçilik.',
  keywords: 'petek temizleme çanakkale, radyatör temizliği, petek yıkama, kombi petek temizleme, kalorifer temizliği',
  alternates: {
    canonical: 'https://celiklerteknik.com/hizmetler/petek-temizleme',
  },
  openGraph: {
    title: 'Petek Temizleme Çanakkale | Çelikler Teknik',
    description: 'Profesyonel petek temizleme ile %30 enerji tasarrufu. Aynı gün servis.',
    url: 'https://celiklerteknik.com/hizmetler/petek-temizleme',
  },
}

export default function PetekTemizlemePage() {
  return (
    <div className="min-h-screen">
      <ServiceSchema 
        name="Petek Temizleme Çanakkale"
        description="Çanakkale petek temizleme hizmeti. Profesyonel radyatör temizliği, kombi petek yıkama. %30 enerji tasarrufu. Aynı gün servis, garantili işçilik."
        url="https://celiklerteknik.com/hizmetler/petek-temizleme"
      />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Petek Temizleme</h1>
          <p className="text-xl text-gray-200">
            Profesyonel petek ve radyatör temizliği ile verimli ısınma
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro */}
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Petek Temizliği Neden Önemli?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Petekler zamanla içlerinde <strong>kireç, pas ve tortu</strong> biriktirir. Bu birikintiler ısı transferini engeller, 
              kombinin daha fazla çalışmasına ve enerji tüketiminin artmasına neden olur. Düzenli petek temizliği ile 
              <strong> %30'a varan enerji tasarrufu</strong> sağlayabilirsiniz.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Çelikler Yapı olarak Çanakkale genelinde profesyonel petek temizleme hizmeti sunuyoruz. 
              Özel kimyasallar ve yüksek basınçlı yıkama sistemiyle peteklerinizi fabrika çıkışı gibi temizliyoruz.
            </p>

            {/* Avantajlar */}
            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="card text-center border-t-4 border-green-500">
                <FaMoneyBillWave className="text-green-500 text-4xl mx-auto mb-4" />
                <h4 className="font-bold text-primary mb-2">%30 Tasarruf</h4>
                <p className="text-gray-600 text-sm">
                  Temiz petekler daha az enerji ile daha çok ısı üretir
                </p>
              </div>

              <div className="card text-center border-t-4 border-orange-500">
                <FaThermometerHalf className="text-orange-500 text-4xl mx-auto mb-4" />
                <h4 className="font-bold text-primary mb-2">Eşit Isınma</h4>
                <p className="text-gray-600 text-sm">
                  Tüm odalar eşit sıcaklıkta, soğuk köşeler kalmaz
                </p>
              </div>

              <div className="card text-center border-t-4 border-blue-500">
                <FaLeaf className="text-blue-500 text-4xl mx-auto mb-4" />
                <h4 className="font-bold text-primary mb-2">Uzun Ömür</h4>
                <p className="text-gray-600 text-sm">
                  Temiz sistem daha az yıpranır, kombi ömrü uzar
                </p>
              </div>
            </div>

            {/* Belirtiler */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Petek Temizliği Gerektiğinin Belirtileri
            </h3>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">⚠️</span>
                  <span className="text-gray-700">Peteklerin alt kısmı sıcak, üst kısmı soğuk kalıyor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">⚠️</span>
                  <span className="text-gray-700">Bazı petekler hiç ısınmıyor veya geç ısınıyor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">⚠️</span>
                  <span className="text-gray-700">Kombi sürekli çalışıyor ama ev ısınmıyor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">⚠️</span>
                  <span className="text-gray-700">Doğalgaz/elektrik faturası normalden yüksek</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">⚠️</span>
                  <span className="text-gray-700">Peteklerden ses geliyor (şıkırtı, fokurdama)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">⚠️</span>
                  <span className="text-gray-700">Son temizlikten 2 yıldan fazla zaman geçmiş</span>
                </li>
              </ul>
            </div>

            {/* Temizlik Süreci */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Petek Temizleme Nasıl Yapılır?
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-neutral rounded-lg">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-primary">Sistem Kontrolü</h4>
                  <p className="text-gray-600">Tüm petekler ve bağlantılar kontrol edilir, sorunlu noktalar tespit edilir.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral rounded-lg">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-primary">Kimyasal Uygulama</h4>
                  <p className="text-gray-600">Özel temizlik kimyasalı sisteme enjekte edilir, kireç ve pas çözülür.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral rounded-lg">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-primary">Yüksek Basınçlı Yıkama</h4>
                  <p className="text-gray-600">Her petek ayrı ayrı yüksek basınçlı su ile yıkanır, tortu dışarı atılır.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral rounded-lg">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <h4 className="font-bold text-primary">Koruma ve Test</h4>
                  <p className="text-gray-600">Sisteme korozyon önleyici eklenir, tüm petekler test edilir.</p>
                </div>
              </div>
            </div>

            {/* Fiyatlar */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              2026 Petek Temizleme Fiyatları
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="card border-2 border-secondary">
                <h4 className="font-bold text-primary mb-3 text-lg">Daire (1+1 - 2+1)</h4>
                <p className="text-3xl font-bold text-secondary mb-2">1.200 - 2.000 ₺</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ 3-6 petek temizliği</li>
                  <li>✓ Kimyasal dahil</li>
                  <li>✓ 1 yıl garanti</li>
                </ul>
              </div>

              <div className="card border-2 border-secondary">
                <h4 className="font-bold text-primary mb-3 text-lg">Daire (3+1 - 4+1)</h4>
                <p className="text-3xl font-bold text-secondary mb-2">2.000 - 3.500 ₺</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ 7-12 petek temizliği</li>
                  <li>✓ Kimyasal dahil</li>
                  <li>✓ 1 yıl garanti</li>
                </ul>
              </div>

              <div className="card border-2 border-secondary">
                <h4 className="font-bold text-primary mb-3 text-lg">Villa / Müstakil</h4>
                <p className="text-3xl font-bold text-secondary mb-2">3.500 - 6.000 ₺</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ 12+ petek temizliği</li>
                  <li>✓ Kimyasal dahil</li>
                  <li>✓ 1 yıl garanti</li>
                </ul>
              </div>

              <div className="card border-2 border-primary bg-primary text-white">
                <h4 className="font-bold mb-3 text-lg">Kombi Bakımı + Petek</h4>
                <p className="text-3xl font-bold mb-2">PAKET FİYAT</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Kombi bakımı dahil</li>
                  <li>✓ %15 indirimli</li>
                  <li>✓ Tek seferde çözüm</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              * Fiyatlar petek sayısı ve kirlilik durumuna göre değişebilir. Kesin fiyat için ücretsiz keşif yapıyoruz.
            </p>

            {/* SSS */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Sık Sorulan Sorular
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Petek temizliği ne sıklıkla yapılmalı?</h4>
                <p className="text-gray-600">
                  İdeal olarak 2 yılda bir yapılmalıdır. Sert su bölgelerinde (kireçli su) yılda bir önerilir. 
                  Düzenli temizlik hem tasarruf sağlar hem de sistem ömrünü uzatır.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Temizlik ne kadar sürer?</h4>
                <p className="text-gray-600">
                  Standart bir daire için 2-3 saat sürer. Villa ve büyük sistemlerde yarım gün alabilir. 
                  Temizlik sırasında evde olmanız gerekmez.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Temizlik sırasında ev kirlenır mı?</h4>
                <p className="text-gray-600">
                  Hayır, kapalı sistem ile çalışıyoruz. Kirli su doğrudan gidere verilir. 
                  Çalışma alanını koruma örtüsü ile kapatıyoruz.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Hangi mevsimde yaptırmalıyım?</h4>
                <p className="text-gray-600">
                  En ideal zaman yaz sonu - sonbahar başıdır (Ağustos-Ekim). 
                  Kış gelmeden sisteminizi hazır hale getirin.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Petek Temizliği İçin Randevu Alın
              </h3>
              <p className="mb-6">Çanakkale genelinde aynı gün servis imkanı</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/teklif-al" className="btn-primary bg-white text-primary hover:bg-gray-100">
                  Ücretsiz Keşif
                </Link>
                <a href="tel:+902865661055" className="btn-secondary flex items-center justify-center gap-2">
                  <FaPhone />
                  <span>0286 566 1055</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

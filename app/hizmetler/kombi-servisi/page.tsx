import Link from 'next/link'
import { FaCheckCircle, FaPhone, FaTools, FaShieldAlt, FaClock, FaAward } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kombi Servisi Çanakkale | Montaj, Bakım, Tamir | Çelikler Yapı',
  description: 'Çanakkale kombi servisi. Tüm markalarda kombi montajı, bakımı ve tamiri. Vaillant, Baymak, Demirdöküm, Bosch yetkili servis kalitesinde hizmet. 7/24 acil servis.',
  keywords: 'kombi servisi çanakkale, kombi tamiri, kombi bakımı, kombi montajı, vaillant servis, baymak servis, demirdöküm servis',
  alternates: {
    canonical: 'https://celiklerteknik.com/hizmetler/kombi-servisi',
  },
  openGraph: {
    title: 'Kombi Servisi Çanakkale | Çelikler Teknik',
    description: 'Tüm markalarda profesyonel kombi servisi. Montaj, bakım ve tamir hizmetleri.',
    url: 'https://celiklerteknik.com/hizmetler/kombi-servisi',
  },
}

const brands = [
  'Vaillant', 'Baymak', 'Demirdöküm', 'Bosch', 'Buderus', 'Viessmann',
  'Ariston', 'Ferroli', 'Protherm', 'Alarko', 'ECA', 'Airfel'
]

export default function KombiServisiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Kombi Servisi</h1>
          <p className="text-xl text-gray-200">
            Tüm markalarda profesyonel kombi montajı, bakımı ve tamiri
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro */}
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Çanakkale Kombi Servisi Hizmetleri
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Çelikler Yapı olarak Çanakkale ve çevresinde <strong>tüm marka kombilerde</strong> profesyonel servis hizmeti sunuyoruz. 
              10 yılı aşkın tecrübemiz ve sertifikalı teknik ekibimizle kombi montajı, periyodik bakım ve arıza tamiri işlemlerini 
              en yüksek kalite standartlarında gerçekleştiriyoruz.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Kombinin düzenli bakımı hem enerji tasarrufu sağlar hem de cihazın ömrünü uzatır. Bakımsız kombiler %30'a varan 
              verim kaybı yaşar ve arıza riski artar. Yılda bir kez yapılacak profesyonel bakım ile hem güvenliğinizi hem de 
              bütçenizi koruyun.
            </p>

            {/* Services Grid */}
            <h3 className="text-2xl font-bold text-primary mb-6 font-display mt-10">
              Kombi Hizmetlerimiz
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="card border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <FaTools className="text-secondary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Kombi Montajı</h4>
                    <p className="text-gray-600">
                      Yeni kombi kurulumu, eski kombi değişimi. Tüm markalarda yetkili servis kalitesinde montaj.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <FaShieldAlt className="text-secondary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Periyodik Bakım</h4>
                    <p className="text-gray-600">
                      Yıllık bakım, filtre temizliği, gaz ayarı, verim testi. Bakım sonrası rapor ve garanti.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <FaClock className="text-secondary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Arıza Tamiri</h4>
                    <p className="text-gray-600">
                      Tüm arıza kodlarında hızlı müdahale. Orijinal yedek parça garantisi. Aynı gün servis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <FaAward className="text-secondary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Garanti Kapsamı</h4>
                    <p className="text-gray-600">
                      Montaj ve tamirlerde 2 yıl işçilik garantisi. Kullanılan parçalarda marka garantisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brands */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Servis Verdiğimiz Kombi Markaları
            </h3>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {brands.map((brand) => (
                <span key={brand} className="bg-neutral px-4 py-2 rounded-lg text-gray-700 font-medium">
                  {brand}
                </span>
              ))}
            </div>

            {/* Bakım İçeriği */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Kombi Bakımında Neler Yapılır?
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Brülör ve eşanjör temizliği</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Gaz basıncı kontrolü ve ayarı</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Su basıncı ve genleşme tankı kontrolü</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Elektrot ve ateşleme sistemi kontrolü</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Emniyet ventili ve sensör testi</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Baca gazı analizi ve verim ölçümü</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Sızdırmazlık kontrolü</span>
              </li>
            </ul>

            {/* Arıza Kodları */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Sık Karşılaşılan Kombi Arızaları
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="card bg-red-50">
                <h4 className="font-bold text-red-700 mb-2">E01 / E1 - Ateşleme Hatası</h4>
                <p className="text-gray-600 text-sm">Gaz gelmiyordur veya ateşleme elektrodu arızalıdır. Gaz vanasını kontrol edin.</p>
              </div>
              <div className="card bg-orange-50">
                <h4 className="font-bold text-orange-700 mb-2">E02 / E2 - Aşırı Isınma</h4>
                <p className="text-gray-600 text-sm">Pompa arızası veya tıkanıklık olabilir. Hemen servisi arayın.</p>
              </div>
              <div className="card bg-yellow-50">
                <h4 className="font-bold text-yellow-700 mb-2">E03 / E3 - Baca Hatası</h4>
                <p className="text-gray-600 text-sm">Baca tıkalı veya fan arızalı. Baca çıkışını kontrol edin.</p>
              </div>
              <div className="card bg-blue-50">
                <h4 className="font-bold text-blue-700 mb-2">E04 / E4 - Düşük Basınç</h4>
                <p className="text-gray-600 text-sm">Sistem basıncı düşük. Su takviyesi yapın veya kaçak kontrolü yaptırın.</p>
              </div>
            </div>

            {/* SSS */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Sık Sorulan Sorular
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Kombi bakımı ne sıklıkla yapılmalı?</h4>
                <p className="text-gray-600">
                  Yılda bir kez, tercihen kış sezonu öncesi (Eylül-Ekim) bakım yaptırmanız önerilir. 
                  Düzenli bakım hem güvenlik hem de verim açısından önemlidir.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Kombi bakım ücreti ne kadar?</h4>
                <p className="text-gray-600">
                  Bakım ücreti kombinin markası ve durumuna göre değişir. Güncel fiyat için bizi arayın. 
                  Toplu bakım anlaşmalarında özel indirimler sunuyoruz.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Kombim kaç yılda değiştirilmeli?</h4>
                <p className="text-gray-600">
                  Ortalama kombi ömrü 12-15 yıldır. Ancak düzenli bakım yapılan kombiler 20 yıla kadar çalışabilir. 
                  Verim düşüşü ve sık arıza durumunda değişim düşünülebilir.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Hangi marka kombi önerirsiniz?</h4>
                <p className="text-gray-600">
                  Vaillant, Viessmann, Bosch ve Baymak kaliteli ve yaygın servis ağına sahip markalardır. 
                  Bütçe ve ihtiyacınıza göre en uygun markayı birlikte belirleyelim.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Kombi Servisi İçin Hemen Arayın
              </h3>
              <p className="mb-6">Çanakkale genelinde aynı gün servis imkanı</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/teklif-al" className="btn-primary bg-white text-primary hover:bg-gray-100">
                  Teklif Al
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

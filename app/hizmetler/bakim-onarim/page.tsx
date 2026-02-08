import Link from 'next/link'
import { FaCheckCircle, FaPhone, FaTools, FaClock, FaShieldAlt, FaCalendarCheck } from 'react-icons/fa'
import { Metadata } from 'next'
import { ServiceSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Bakım ve Onarım Hizmetleri Çanakkale | Çelikler Yapı',
  description: 'Çanakkale periyodik bakım ve acil onarım hizmetleri. Kombi, ısı pompası, tesisat bakımı. 7/24 acil servis. Yıllık bakım anlaşmaları.',
  keywords: 'bakım onarım çanakkale, kombi bakımı, tesisat bakımı, acil servis, periyodik bakım',
  alternates: {
    canonical: 'https://celiklerteknik.com/hizmetler/bakim-onarim',
  },
  openGraph: {
    title: 'Bakım ve Onarım Hizmetleri | Çelikler Teknik',
    description: 'Periyodik bakım ve 7/24 acil onarım hizmetleri. Çanakkale genelinde.',
    url: 'https://celiklerteknik.com/hizmetler/bakim-onarim',
  },
}

export default function BakimOnarimPage() {
  return (
    <div className="min-h-screen">
      <ServiceSchema 
        name="Bakım ve Onarım Hizmetleri Çanakkale"
        description="Çanakkale periyodik bakım ve acil onarım hizmetleri. Kombi, ısı pompası, tesisat bakımı. 7/24 acil servis. Yıllık bakım anlaşmaları."
        url="https://celiklerteknik.com/hizmetler/bakim-onarim"
      />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Bakım ve Onarım</h1>
          <p className="text-xl text-gray-200">
            Periyodik bakım ve 7/24 acil onarım hizmetleri
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro */}
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Düzenli Bakım, Sorunsuz Çalışma
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Isıtma ve tesisat sistemlerinizin <strong>verimli ve güvenli</strong> çalışması için düzenli bakım şarttır. 
              Bakımsız sistemler hem daha fazla enerji tüketir hem de beklenmedik arızalara yol açar. 
              Çelikler Yapı olarak Çanakkale genelinde periyodik bakım ve acil onarım hizmetleri sunuyoruz.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              <strong>Yıllık bakım anlaşması</strong> ile hem indirimli fiyatlardan yararlanın hem de öncelikli servis hakkı kazanın. 
              Acil durumlarda 7/24 ulaşılabilir ekibimizle her zaman yanınızdayız.
            </p>

            {/* Hizmet Kartları */}
            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="card border-l-4 border-blue-500 bg-blue-50">
                <div className="flex items-start gap-4">
                  <FaCalendarCheck className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Periyodik Bakım</h4>
                    <p className="text-gray-600">
                      Planlı bakım ile arızaları önleyin. Yılda 1-2 kez yapılan bakım, sistem ömrünü 2 kat uzatır.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-red-500 bg-red-50">
                <div className="flex items-start gap-4">
                  <FaClock className="text-red-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Acil Onarım</h4>
                    <p className="text-gray-600">
                      7/24 acil servis. Gaz kaçağı, su kaçağı, kombi arızası gibi acil durumlarda hızlı müdahale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-green-500 bg-green-50">
                <div className="flex items-start gap-4">
                  <FaShieldAlt className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Bakım Anlaşması</h4>
                    <p className="text-gray-600">
                      Yıllık anlaşma ile %20 indirim, öncelikli servis ve ücretsiz kontroller.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-orange-500 bg-orange-50">
                <div className="flex items-start gap-4">
                  <FaTools className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Orijinal Yedek Parça</h4>
                    <p className="text-gray-600">
                      Tüm onarımlarda orijinal veya eşdeğer kalitede yedek parça kullanıyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bakım Hizmetleri Listesi */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Bakım Hizmetlerimiz
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-3">🔥 Kombi Bakımı</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Brülör ve eşanjör temizliği</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Gaz basıncı kontrolü</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Emniyet sistemleri testi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Verim ölçümü</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-primary mb-3">❄️ Isı Pompası Bakımı</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Filtre temizliği</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Soğutucu gaz kontrolü</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Elektrik bağlantı kontrolü</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>COP değeri ölçümü</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-primary mb-3">🌡️ Petek Bakımı</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Hava alma işlemi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Vana kontrolü</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Isı dağılım testi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Sızıntı kontrolü</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-primary mb-3">💧 Tesisat Bakımı</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Basınç testi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Kaçak kontrolü</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Vana ve armatür kontrolü</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                    <span>Gider temizliği</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bakım Anlaşması */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl mb-10">
              <h3 className="text-2xl font-bold mb-4 font-display">
                📋 Yıllık Bakım Anlaşması Avantajları
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle />
                    <span>Tüm bakımlarda %20 indirim</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle />
                    <span>Öncelikli servis hakkı</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle />
                    <span>Ücretsiz acil kontrol (yılda 2)</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle />
                    <span>Yedek parçada %10 indirim</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle />
                    <span>Bakım hatırlatma servisi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle />
                    <span>7/24 telefon desteği</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Acil Durumlar */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Acil Durumlarda Ne Yapmalı?
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="card border-l-4 border-red-500">
                <h4 className="font-bold text-red-600 mb-2">🔴 Gaz Kaçağı</h4>
                <p className="text-gray-600">
                  Gaz kokusunda hemen vanaları kapatın, elektrik düğmelerine dokunmayın, pencere açın ve binayı terk edin. 
                  Dışarıdan bizi arayın.
                </p>
              </div>
              <div className="card border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-600 mb-2">🔵 Su Kaçağı</h4>
                <p className="text-gray-600">
                  Ana su vanasını kapatın, elektriği kesin (su elektriğe temas ediyorsa). 
                  Değerli eşyaları sudan uzaklaştırın ve bizi arayın.
                </p>
              </div>
              <div className="card border-l-4 border-orange-500">
                <h4 className="font-bold text-orange-600 mb-2">🟠 Kombi Arızası</h4>
                <p className="text-gray-600">
                  Arıza kodunu not alın, kombiyi kapatın. Gaz kokusu yoksa panik yapmayın. 
                  Bizi arayın, telefonda ön tanı yapabiliriz.
                </p>
              </div>
            </div>

            {/* SSS */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Sık Sorulan Sorular
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Bakım ne sıklıkla yapılmalı?</h4>
                <p className="text-gray-600">
                  Kombi ve ısı pompası yılda 1 kez, petek sistemi 2 yılda 1 kez bakım gerektirir. 
                  Yoğun kullanılan sistemlerde daha sık bakım önerilir.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Acil servis ücreti ne kadar?</h4>
                <p className="text-gray-600">
                  Mesai saatleri içinde ek ücret yoktur. Mesai dışı ve hafta sonu %50 acil servis ücreti uygulanır. 
                  Bakım anlaşması olanlar için acil servis ücretsizdir.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Garanti kapsamında bakım gerekli mi?</h4>
                <p className="text-gray-600">
                  Evet, çoğu marka garanti şartı olarak yıllık bakım ister. 
                  Bakım yaptırmadan oluşan arızalar garanti kapsamı dışında kalabilir.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Bakım Randevusu veya Acil Servis
              </h3>
              <p className="mb-6">Çanakkale genelinde 7/24 hizmetinizdeyiz</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/teklif-al" className="btn-primary bg-white text-primary hover:bg-gray-100">
                  Bakım Randevusu
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

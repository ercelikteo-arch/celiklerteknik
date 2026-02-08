import Link from 'next/link'
import { FaCheckCircle, FaPhone, FaHome, FaThermometerHalf, FaLeaf, FaChild } from 'react-icons/fa'
import { Metadata } from 'next'
import { ServiceSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Yerden Isıtma Sistemleri Çanakkale | Çelikler Yapı',
  description: 'Çanakkale yerden ısıtma sistemi kurulumu. Sıcak su ve elektrikli yerden ısıtma. Konforlu, ekonomik ve sağlıklı ısınma. Ücretsiz keşif ve proje.',
  keywords: 'yerden ısıtma çanakkale, yerden ısıtma sistemi, döşemeden ısıtma, sıcak zeminli ısıtma, underfloor heating',
  alternates: {
    canonical: 'https://celiklerteknik.com/hizmetler/yerden-isitma',
  },
  openGraph: {
    title: 'Yerden Isıtma Sistemleri Çanakkale | Çelikler Teknik',
    description: 'Konforlu ve ekonomik yerden ısıtma sistemleri. Profesyonel kurulum.',
    url: 'https://celiklerteknik.com/hizmetler/yerden-isitma',
  },
}

export default function YerdenIsitmaPage() {
  return (
    <div className="min-h-screen">
      <ServiceSchema 
        name="Yerden Isıtma Sistemleri Çanakkale"
        description="Çanakkale yerden ısıtma sistemi kurulumu. Sıcak su ve elektrikli yerden ısıtma. Konforlu, ekonomik ve sağlıklı ısınma. Ücretsiz keşif ve proje."
        url="https://celiklerteknik.com/hizmetler/yerden-isitma"
      />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Yerden Isıtma Sistemleri</h1>
          <p className="text-xl text-gray-200">
            Konforlu, ekonomik ve sağlıklı ısınmanın adresi
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro */}
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Yerden Isıtma Nedir?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Yerden ısıtma, döşeme altına yerleştirilen borular veya kablolar aracılığıyla tüm zemini ısıtan modern bir sistemdir. 
              Isı aşağıdan yukarıya doğru yayılarak <strong>homojen ve konforlu</strong> bir sıcaklık dağılımı sağlar.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Çelikler Yapı olarak Çanakkale'de hem <strong>sıcak sulu</strong> hem de <strong>elektrikli</strong> yerden ısıtma sistemlerinin 
              projelendirmesini, kurulumunu ve bakımını yapıyoruz. Yeni inşaat ve tadilat projelerinde uzman çözümler sunuyoruz.
            </p>

            {/* Avantajlar */}
            <h3 className="text-2xl font-bold text-primary mb-6 font-display mt-10">
              Yerden Isıtmanın Avantajları
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="card border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <FaThermometerHalf className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Eşit Isı Dağılımı</h4>
                    <p className="text-gray-600">
                      Tüm zemin eşit sıcaklıkta. Soğuk köşeler, sıcak noktalar yok. Ayaklarınız her zaman sıcak.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <FaLeaf className="text-green-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">%25 Enerji Tasarrufu</h4>
                    <p className="text-gray-600">
                      Düşük su sıcaklığı (35-45°C) ile çalışır. Radyatöre göre %25 daha az enerji tüketir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <FaChild className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Sağlıklı Ortam</h4>
                    <p className="text-gray-600">
                      Toz kaldırmaz, havayı kurutmaz. Alerji ve astım hastaları için ideal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <FaHome className="text-purple-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Estetik Görünüm</h4>
                    <p className="text-gray-600">
                      Duvarda petek yok, mobilya yerleşimi özgür. Minimalist ve modern tasarım.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sistem Türleri */}
            <h3 className="text-2xl font-bold text-primary mb-6 font-display mt-10">
              Yerden Isıtma Sistem Türleri
            </h3>

            <div className="space-y-6 mb-10">
              <div className="card bg-blue-50">
                <h4 className="font-bold text-primary mb-3 text-xl">💧 Sıcak Sulu Yerden Isıtma</h4>
                <p className="text-gray-600 mb-4">
                  Döşeme altına döşenen PE-X borulardan sıcak su dolaştırılır. Kombi, ısı pompası veya kazan ile çalışır.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Avantajları:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ Düşük işletme maliyeti</li>
                      <li>✓ Isı pompası ile uyumlu</li>
                      <li>✓ Büyük alanlar için ideal</li>
                      <li>✓ 50+ yıl ömür</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Uygun Alanlar:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Yeni inşaatlar</li>
                      <li>• Villalar</li>
                      <li>• Büyük daireler</li>
                      <li>• Ticari alanlar</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card bg-orange-50">
                <h4 className="font-bold text-primary mb-3 text-xl">⚡ Elektrikli Yerden Isıtma</h4>
                <p className="text-gray-600 mb-4">
                  İnce ısıtma kabloları veya mat halinde döşeme altına yerleştirilir. Hızlı ısınma sağlar.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Avantajları:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ Düşük kurulum maliyeti</li>
                      <li>✓ İnce profil (3-5mm)</li>
                      <li>✓ Hızlı ısınma</li>
                      <li>✓ Tadilata uygun</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-primary mb-2">Uygun Alanlar:</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Banyolar</li>
                      <li>• Küçük odalar</li>
                      <li>• Tadilat projeleri</li>
                      <li>• Ek ısıtma</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Kurulum Süreci */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Yerden Isıtma Kurulum Aşamaları
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>1. Proje:</strong> Isı kaybı hesabı, boru/kablo planı, malzeme listesi</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>2. Zemin Hazırlığı:</strong> Yalıtım levhası ve yansıtıcı folyo serilmesi</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>3. Boru/Kablo Döşeme:</strong> Hesaplanan aralıklarla spiral döşeme</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>4. Basınç Testi:</strong> Sızdırmazlık kontrolü (sulu sistemlerde)</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>5. Şap Dökümü:</strong> Özel katkılı şap ile boruların kapatılması</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>6. Devreye Alma:</strong> Kademeli ısıtma ve sistem ayarları</span>
              </li>
            </ul>

            {/* Uyumlu Zeminler */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Hangi Zemin Kaplamaları Uyumludur?
            </h3>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="card text-center">
                <span className="text-3xl mb-2 block">🪨</span>
                <h4 className="font-bold text-primary">Seramik</h4>
                <p className="text-xs text-green-600">En İdeal</p>
              </div>
              <div className="card text-center">
                <span className="text-3xl mb-2 block">🏔️</span>
                <h4 className="font-bold text-primary">Mermer</h4>
                <p className="text-xs text-green-600">Çok İyi</p>
              </div>
              <div className="card text-center">
                <span className="text-3xl mb-2 block">🪵</span>
                <h4 className="font-bold text-primary">Laminat</h4>
                <p className="text-xs text-yellow-600">Uygun</p>
              </div>
              <div className="card text-center">
                <span className="text-3xl mb-2 block">🌳</span>
                <h4 className="font-bold text-primary">Parke</h4>
                <p className="text-xs text-yellow-600">Özel Tip</p>
              </div>
            </div>

            {/* SSS */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Sık Sorulan Sorular
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Yerden ısıtma mevcut eve yapılabilir mi?</h4>
                <p className="text-gray-600">
                  Evet, tadilat sırasında yapılabilir. Elektrikli sistem daha kolay uygulanır. 
                  Sulu sistem için zemin yüksekliği 8-10 cm artar.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Yerden ısıtma ne kadar sürede ısınır?</h4>
                <p className="text-gray-600">
                  İlk açılışta 24-48 saat sürebilir. Sonrasında sistem sıcak kaldığı için hızlı tepki verir. 
                  Elektrikli sistemler daha hızlı ısınır.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Arıza olursa ne olur?</h4>
                <p className="text-gray-600">
                  Kaliteli malzeme ve doğru kurulumda arıza riski çok düşüktür. 
                  Olası sorunlar termal kamera ile tespit edilir, minimum müdahale ile onarılır.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Isı pompası ile kullanılabilir mi?</h4>
                <p className="text-gray-600">
                  Evet, yerden ısıtma ve ısı pompası mükemmel bir kombinasyondur. 
                  Düşük su sıcaklığı sayesinde ısı pompası maksimum verimde çalışır.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Yerden Isıtma Projesi İçin Teklif Alın
              </h3>
              <p className="mb-6">Ücretsiz keşif ve ısı kaybı hesabı</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/teklif-al" className="btn-primary bg-white text-primary hover:bg-gray-100">
                  Proje Teklifi Al
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

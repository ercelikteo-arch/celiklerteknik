import Link from 'next/link'
import { FaCheckCircle, FaPhone, FaTint, FaWrench, FaShower, FaToilet } from 'react-icons/fa'
import { Metadata } from 'next'
import { ServiceSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Su Tesisatı Çanakkale | Sıhhi Tesisat | Çelikler Yapı',
  description: 'Çanakkale su tesisatı hizmetleri. Temiz su, pis su, yağmur suyu tesisatı. Su kaçağı tespiti ve tamiri. Banyo, mutfak tesisatı. 7/24 acil servis.',
  keywords: 'su tesisatı çanakkale, sıhhi tesisat, su kaçağı tamiri, banyo tesisatı, tesisat ustası çanakkale',
  alternates: {
    canonical: 'https://celiklerteknik.com/hizmetler/su-tesisati',
  },
  openGraph: {
    title: 'Su Tesisatı Çanakkale | Çelikler Teknik',
    description: 'Profesyonel su tesisatı hizmetleri. Temiz su, pis su tesisatı, su kaçağı tamiri.',
    url: 'https://celiklerteknik.com/hizmetler/su-tesisati',
  },
}

export default function SuTesisatiPage() {
  return (
    <div className="min-h-screen">
      <ServiceSchema 
        name="Su Tesisatı Çanakkale"
        description="Çanakkale su tesisatı hizmetleri. Temiz su, pis su, yağmur suyu tesisatı. Su kaçağı tespiti ve tamiri. Banyo, mutfak tesisatı. 7/24 acil servis."
        url="https://celiklerteknik.com/hizmetler/su-tesisati"
      />
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Su Tesisatı</h1>
          <p className="text-xl text-gray-200">
            Temiz su, pis su ve yağmur suyu tesisatı hizmetleri
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro */}
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Profesyonel Su Tesisatı Hizmetleri
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Çelikler Yapı olarak Çanakkale genelinde <strong>her türlü su tesisatı</strong> işini profesyonel ekibimizle gerçekleştiriyoruz. 
              Yeni bina tesisatından tadilata, su kaçağı tespitinden acil tamire kadar tüm sıhhi tesisat ihtiyaçlarınızda yanınızdayız.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Su tesisatı, evinizin en kritik altyapı sistemlerinden biridir. Yanlış yapılan tesisatlar su kaçağı, nem, küf ve ciddi maddi hasarlara yol açabilir. 
              20 yılı aşkın tecrübemiz ve <strong>garantili işçiliğimizle</strong> güvenle çalışabilirsiniz.
            </p>

            {/* Hizmet Türleri */}
            <h3 className="text-2xl font-bold text-primary mb-6 font-display mt-10">
              Su Tesisatı Hizmetlerimiz
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="card border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <FaTint className="text-blue-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Temiz Su Tesisatı</h4>
                    <p className="text-gray-600">
                      Şebeke bağlantısı, iç tesisat, su sayacı montajı. PPR ve bakır boru sistemleri.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-gray-500">
                <div className="flex items-start gap-4">
                  <FaToilet className="text-gray-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Pis Su Tesisatı</h4>
                    <p className="text-gray-600">
                      Atık su boruları, fosseptik bağlantısı, kanalizasyon hattı. PVC ve döküm boru sistemleri.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-cyan-500">
                <div className="flex items-start gap-4">
                  <FaShower className="text-cyan-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Banyo & Mutfak Tesisatı</h4>
                    <p className="text-gray-600">
                      Lavabo, klozet, duşakabin, küvet montajı. Mutfak evyesi ve bulaşık makinesi bağlantısı.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-red-500">
                <div className="flex items-start gap-4">
                  <FaWrench className="text-red-500 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Su Kaçağı Tamiri</h4>
                    <p className="text-gray-600">
                      Kameralı kaçak tespiti, gizli kaçak bulma. Kırıp dökmeden onarım teknolojisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detaylı Hizmetler */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Tüm Su Tesisatı İşlerimiz
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Yeni bina komple su tesisatı kurulumu</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Eski tesisatın yenilenmesi (renovasyon)</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Su kaçağı tespiti ve tamiri</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Tıkalı gider açma ve temizleme</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Sıhhi tesisat armatür montajı (musluk, batarya, rezervuar)</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Hidrofor ve pompa sistemleri kurulumu</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Su deposu ve şofben bağlantıları</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Yağmur suyu drenaj sistemleri</span>
              </li>
            </ul>

            {/* Su Kaçağı Bölümü */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10">
              <h3 className="text-2xl font-bold text-red-700 mb-4 font-display">
                🚨 Su Kaçağı mı Var?
              </h3>
              <p className="text-gray-700 mb-4">
                Su kaçağı belirtileri: Duvarda nem/leke, su faturasında artış, su sayacının sürekli dönmesi, 
                yerden su sızması, küf kokusu.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Kameralı tespit:</strong> Boruların içini görüntüleyerek kaçak noktasını buluyoruz</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Termal kamera:</strong> Gizli kaçakları ısı farkıyla tespit ediyoruz</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Minimum hasar:</strong> Kırıp dökmeden, sadece kaçak noktasına müdahale</span>
                </li>
              </ul>
              <a href="tel:+902865661055" className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
                Acil Kaçak Servisi: 0286 566 1055
              </a>
            </div>

            {/* Kullandığımız Malzemeler */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Kullandığımız Malzemeler
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="card text-center">
                <h4 className="font-bold text-primary mb-2">PPR Boru</h4>
                <p className="text-sm text-gray-600">Temiz su için. 50 yıl ömür garantili, paslanmaz.</p>
              </div>
              <div className="card text-center">
                <h4 className="font-bold text-primary mb-2">PVC Boru</h4>
                <p className="text-sm text-gray-600">Pis su için. Korozyona dayanıklı, uzun ömürlü.</p>
              </div>
              <div className="card text-center">
                <h4 className="font-bold text-primary mb-2">Bakır Boru</h4>
                <p className="text-sm text-gray-600">Premium seçenek. Antibakteriyel, 100+ yıl ömür.</p>
              </div>
            </div>

            {/* SSS */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Sık Sorulan Sorular
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Su tesisatı yenileme ne kadar sürer?</h4>
                <p className="text-gray-600">
                  Standart bir daire için 3-5 gün sürer. Villa veya büyük projeler 1-2 hafta alabilir. 
                  Kesin süre keşif sonrası belirlenir.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Eski demir boruları değiştirmeli miyim?</h4>
                <p className="text-gray-600">
                  20 yaşını geçmiş demir borular pas ve kireç biriktirir, su kalitesini düşürür. 
                  PPR veya bakır boruya geçiş öneriyoruz.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Gizli su kaçağını nasıl anlayabilirim?</h4>
                <p className="text-gray-600">
                  Tüm muslukları kapatın ve su sayacını kontrol edin. Sayaç dönüyorsa kaçak var demektir. 
                  Ayrıca nem, küf ve su faturası artışı da belirtidir.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Tıkalı gider nasıl açılır?</h4>
                <p className="text-gray-600">
                  Basit tıkanıklıklar pompa ile açılabilir. Ciddi tıkanıklıklarda spiral veya yüksek basınçlı su ile açıyoruz. 
                  Kimyasal kullanmayın, boruya zarar verir.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Su Tesisatı İçin Ücretsiz Keşif
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

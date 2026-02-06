import Link from 'next/link'
import { FaCheckCircle, FaPhone, FaSun, FaLeaf, FaMoneyBillWave, FaBolt } from 'react-icons/fa'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Güneş Enerjisi Sistemleri Çanakkale | Solar Panel | Çelikler Yapı',
  description: 'Çanakkale güneş enerjisi sistemleri kurulumu. Güneş paneli, solar kolektör, fotovoltaik sistemler. Elektrik faturanızı %80 azaltın. Ücretsiz keşif.',
  keywords: 'güneş enerjisi çanakkale, solar panel, güneş paneli kurulumu, fotovoltaik sistem, güneş kolektörü',
  alternates: {
    canonical: 'https://celiklerteknik.com/hizmetler/gunes-enerjisi',
  },
  openGraph: {
    title: 'Güneş Enerjisi Sistemleri Çanakkale | Çelikler Teknik',
    description: 'Güneş enerjisi ile elektrik faturanızı %80 azaltın. Profesyonel kurulum ve bakım.',
    url: 'https://celiklerteknik.com/hizmetler/gunes-enerjisi',
  },
}

export default function GunesEnerjisiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Güneş Enerjisi Sistemleri</h1>
          <p className="text-xl text-gray-200">
            Temiz enerji ile tasarruf edin, geleceğe yatırım yapın
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro */}
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Güneş Enerjisi Nedir ve Nasıl Çalışır?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Güneş enerjisi, güneş ışınlarının elektrik veya ısı enerjisine dönüştürülmesiyle elde edilen <strong>yenilenebilir ve temiz</strong> bir enerji kaynağıdır. 
              Çanakkale, yılda ortalama 2.700 saat güneşlenme süresiyle Türkiye'nin en verimli güneş enerjisi bölgelerinden biridir.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Çelikler Yapı olarak hem <strong>fotovoltaik (elektrik üreten)</strong> hem de <strong>termal (sıcak su üreten)</strong> güneş enerjisi sistemlerinin 
              kurulumunu, bakımını ve servisini yapıyoruz. Eviniz veya işyeriniz için en uygun sistemi birlikte belirleyelim.
            </p>

            {/* Avantajlar */}
            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="card border-l-4 border-yellow-500 bg-yellow-50">
                <div className="flex items-start gap-4">
                  <FaMoneyBillWave className="text-yellow-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">%80 Tasarruf</h4>
                    <p className="text-gray-600">
                      Elektrik faturanızı %80'e varan oranda azaltın. Yatırımınız 5-7 yılda kendini amorti eder.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-green-500 bg-green-50">
                <div className="flex items-start gap-4">
                  <FaLeaf className="text-green-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Çevre Dostu</h4>
                    <p className="text-gray-600">
                      Sıfır karbon emisyonu. Doğaya zarar vermeden enerji üretin.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-orange-500 bg-orange-50">
                <div className="flex items-start gap-4">
                  <FaSun className="text-orange-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">25 Yıl Ömür</h4>
                    <p className="text-gray-600">
                      Güneş panelleri 25+ yıl verimli çalışır. Düşük bakım maliyeti.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-blue-500 bg-blue-50">
                <div className="flex items-start gap-4">
                  <FaBolt className="text-blue-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Devlet Desteği</h4>
                    <p className="text-gray-600">
                      Yenilenebilir enerji teşvikleri ve vergi avantajlarından yararlanın.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sistem Türleri */}
            <h3 className="text-2xl font-bold text-primary mb-6 font-display mt-10">
              Güneş Enerjisi Sistem Türleri
            </h3>

            <div className="space-y-6 mb-10">
              <div className="card">
                <h4 className="font-bold text-primary mb-3 text-xl">🔌 Fotovoltaik (PV) Sistemler - Elektrik Üretimi</h4>
                <p className="text-gray-600 mb-4">
                  Güneş panelleri ile elektrik üretir. Şebekeye bağlı (on-grid) veya bağımsız (off-grid) olarak kurulabilir.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>On-Grid:</strong> Fazla elektriği şebekeye satın, faturanızı sıfırlayın</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Off-Grid:</strong> Şebekeden bağımsız, akülü sistem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Hibrit:</strong> Hem şebeke hem akü destekli</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-primary mb-3 text-xl">🌡️ Termal Sistemler - Sıcak Su Üretimi</h4>
                <p className="text-gray-600 mb-4">
                  Güneş kolektörleri ile sıcak su üretir. Ev, otel, yurt gibi sıcak su ihtiyacı yüksek yerler için idealdir.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Düz Kolektör:</strong> Ekonomik, konut kullanımı için</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Vakum Tüplü:</strong> Yüksek verim, soğuk iklimlerde etkili</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Isı Pompası Entegreli:</strong> Maksimum verim</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kurulum Süreci */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Güneş Enerjisi Kurulum Süreci
            </h3>
            
            <div className="grid md:grid-cols-4 gap-4 mb-10">
              <div className="text-center p-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                <h4 className="font-bold text-primary mb-2">Keşif</h4>
                <p className="text-sm text-gray-600">Çatı analizi ve enerji ihtiyacı hesaplama</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                <h4 className="font-bold text-primary mb-2">Proje</h4>
                <p className="text-sm text-gray-600">Sistem tasarımı ve resmi başvurular</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                <h4 className="font-bold text-primary mb-2">Kurulum</h4>
                <p className="text-sm text-gray-600">Panel montajı ve elektrik bağlantısı</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
                <h4 className="font-bold text-primary mb-2">Devreye Alma</h4>
                <p className="text-sm text-gray-600">Test, onay ve şebeke bağlantısı</p>
              </div>
            </div>

            {/* Hizmetlerimiz */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Güneş Enerjisi Hizmetlerimiz
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Konut tipi güneş paneli kurulumu (3-10 kW)</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Ticari ve endüstriyel GES projeleri</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Güneş kolektörü ile sıcak su sistemleri</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Akü ve enerji depolama sistemleri</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Mevcut sistemlerin bakım ve onarımı</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Lisanssız elektrik üretimi başvuruları</span>
              </li>
            </ul>

            {/* SSS */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Sık Sorulan Sorular
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Güneş paneli kaç yılda kendini amorti eder?</h4>
                <p className="text-gray-600">
                  Ortalama 5-7 yılda yatırım geri dönüşü sağlar. Elektrik fiyatları arttıkça bu süre kısalır. 
                  Paneller 25+ yıl çalıştığı için uzun vadede büyük tasarruf sağlar.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Bulutlu havalarda elektrik üretir mi?</h4>
                <p className="text-gray-600">
                  Evet, bulutlu havalarda da üretim devam eder ancak verim %20-30 düşer. 
                  Yıllık ortalama hesaplamalarda bu durum zaten dikkate alınır.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Çatım güneş paneline uygun mu?</h4>
                <p className="text-gray-600">
                  Güneye bakan, gölge almayan çatılar idealdir. Düz çatılara da özel konstrüksiyonla kurulum yapılabilir. 
                  Ücretsiz keşif ile çatınızı değerlendirelim.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Fazla elektriği satabilir miyim?</h4>
                <p className="text-gray-600">
                  Evet, on-grid sistemlerde fazla elektrik şebekeye verilir ve faturanızdan düşülür. 
                  Yıllık bazda net sıfır fatura mümkündür.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Ücretsiz Enerji Analizi ve Teklif
              </h3>
              <p className="mb-6">Eviniz için ne kadar tasarruf edebileceğinizi hesaplayalım</p>
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

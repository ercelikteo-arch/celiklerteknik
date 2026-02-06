import Link from 'next/link'
import { FaCheckCircle, FaPhone } from 'react-icons/fa'

export const metadata = {
  title: 'Isı Pompası Sistemleri Çanakkale | Çelikler Yapı',
  description: 'Enerji tasarruflu ısı pompası sistemleri. Hava kaynaklı ve toprak kaynaklı ısı pompaları. Çanakkale genelinde profesyonel kurulum.',
  keywords: 'ısı pompası çanakkale, ısı pompası fiyatları, enerji tasarrufu',
}

export default function IsiPompasiPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Isı Pompası Sistemleri</h1>
          <p className="text-xl text-gray-200">
            Enerji tasarruflu ve çevre dostu ısıtma çözümleri
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Isı Pompası Nedir?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Isı pompası, dış ortamdan (hava, toprak veya su) aldığı enerjiyi kullanarak evinizi ısıtan ve soğutan modern bir sistemdir. 
              Elektrik enerjisinin sadece %25'ini tüketerek %75'ini doğadan alır. Bu sayede klasik ısıtma sistemlerine göre %70'e varan enerji tasarrufu sağlar.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Çelikler Yapı olarak Çanakkale genelinde hava kaynaklı ve toprak kaynaklı ısı pompası sistemlerinin kurulumunu, bakımını ve servisini yapıyoruz. 
              Daikin, Mitsubishi, Vaillant, Viessmann gibi dünya markalarıyla çalışıyoruz.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-8">
              Isı Pompası Çeşitleri
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-3 text-xl">Hava Kaynaklı Isı Pompası</h4>
                <p className="text-gray-600 mb-3">
                  Dış havadan enerji alarak çalışır. Kurulumu kolay ve ekonomiktir. 
                  -15°C'ye kadar verimli çalışır.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Düşük yatırım maliyeti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Hızlı kurulum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Yazın soğutma özelliği</span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h4 className="font-bold text-primary mb-3 text-xl">Toprak Kaynaklı Isı Pompası</h4>
                <p className="text-gray-600 mb-3">
                  Topraktan enerji alır. En yüksek verim sağlar. 
                  Tüm mevsimlerde stabil performans.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">En yüksek verim (COP 4-5)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Sessiz çalışma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Uzun ömür</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-8">
              Isı Pompası Avantajları
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>%70 Enerji Tasarrufu:</strong> Kombiye göre çok daha ekonomik işletme maliyeti</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Çevre Dostu:</strong> Fosil yakıt kullanmaz, CO2 emisyonu düşüktür</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Yazın Soğutma:</strong> Aynı sistem ile klimasız soğutma yapabilirsiniz</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Güvenli:</strong> Yanma olmadığı için gaz kaçağı riski yoktur</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Uzun Ömür:</strong> 20-25 yıl sorunsuz çalışır</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Devlet Desteği:</strong> Yenilenebilir enerji teşviklerinden yararlanabilirsiniz</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-8">
              Hangi Sistemlerle Uyumludur?
            </h3>
            
            <p className="text-lg text-gray-700 mb-4">
              Isı pompası aşağıdaki sistemlerle uyumlu çalışır:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Yerden Isıtma:</strong> En ideal kombinasyon, maksimum verim</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Fancoil:</strong> Hızlı ısıtma ve soğutma</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Petek (Radyatör):</strong> Mevcut sisteminizi kullanabilirsiniz</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-8">
              Sık Sorulan Sorular
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Isı pompası kaç yılda kendini amorti eder?</h4>
                <p className="text-gray-600">
                  Ortalama 4-6 yılda yatırım geri dönüşü sağlar. Enerji fiyatları arttıkça bu süre kısalır.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Soğuk havalarda verimli çalışır mı?</h4>
                <p className="text-gray-600">
                  Modern ısı pompaları -25°C'ye kadar verimli çalışır. Çanakkale iklimi için idealdir.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Mevcut peteklerimle kullanabilir miyim?</h4>
                <p className="text-gray-600">
                  Evet, yüksek sıcaklık ısı pompaları mevcut petek sisteminizle uyumludur.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Bakım gerektirir mi?</h4>
                <p className="text-gray-600">
                  Yılda bir kez periyodik bakım yeterlidir. Bakım maliyeti çok düşüktür.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Isı Pompası Kapasite Hesaplama ve Teklif
              </h3>
              <p className="mb-6">Eviniz için uygun ısı pompasını hesaplayalım</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/teklif-al" className="btn-primary bg-white text-primary hover:bg-gray-100">
                  Kapasite Hesapla
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

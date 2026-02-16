import Link from 'next/link'
import { FaCheckCircle, FaPhone, FaSun, FaLeaf, FaMoneyBillWave, FaShower, FaThermometerHalf, FaTools } from 'react-icons/fa'
import { Metadata } from 'next'
import PricingInfoBox from '@/components/PricingInfoBox'
import RelatedBlogLinks from '@/components/RelatedBlogLinks'

export const metadata: Metadata = {
  title: 'Vakum Tüplü Güneş Enerjisi Çanakkale | Sıcak Su Sistemi | Çelikler Teknik',
  description: 'Çanakkale vakum tüplü güneş enerjisi sistemi kurulumu. Güneş enerjisi ile ücretsiz sıcak su. %70 tasarruf, 2 yıl garanti. Ücretsiz keşif.',
  keywords: 'vakum tüplü güneş enerjisi çanakkale, güneş enerjisi sıcak su, solar sıcak su sistemi, güneş kolektörü',
  alternates: {
    canonical: 'https://celiklerteknik.com/hizmetler/gunes-enerjisi',
  },
  openGraph: {
    title: 'Vakum Tüplü Güneş Enerjisi Çanakkale | Çelikler Teknik',
    description: 'Güneş enerjisi ile ücretsiz sıcak su. Vakum tüplü sistemlerle %70 tasarruf.',
    url: 'https://celiklerteknik.com/hizmetler/gunes-enerjisi',
  },
}

export default function GunesEnerjisiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Vakum Tüplü Güneş Enerjisi</h1>
          <p className="text-xl text-gray-200">
            Güneşin gücüyle ücretsiz sıcak su - Yaz kış kesintisiz
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Intro */}
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Vakum Tüplü Güneş Enerjisi Sistemi Nedir?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Vakum tüplü güneş enerjisi sistemleri, güneş ışığını kullanarak <strong>sıcak su üreten</strong> sistemlerdir. 
              Elektrik üretmezler, sadece banyo, mutfak ve genel kullanım için sıcak su sağlarlar. 
              Çanakkale'nin güneşli ikliminde yaz aylarında sıcak su ihtiyacınızın <strong>%100'ünü</strong>, 
              kış aylarında ise <strong>%50-60'ını</strong> karşılayabilirler.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 rounded-r-lg">
              <p className="text-orange-800">
                <strong>💡 Önemli Not:</strong> Vakum tüplü sistemler elektrik üretmez, sadece sıcak su üretir. 
                Elektrik üretimi için fotovoltaik (solar panel) sistemler gereklidir.
              </p>
            </div>

            {/* Avantajlar */}
            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="card border-l-4 border-yellow-500 bg-yellow-50">
                <div className="flex items-start gap-4">
                  <FaMoneyBillWave className="text-yellow-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">%70 Tasarruf</h4>
                    <p className="text-gray-600">
                      Sıcak su için harcadığınız doğalgaz veya elektrik faturasını %70'e kadar azaltın.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-blue-500 bg-blue-50">
                <div className="flex items-start gap-4">
                  <FaShower className="text-blue-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Bol Sıcak Su</h4>
                    <p className="text-gray-600">
                      4 kişilik aile için günde 150-200 litre sıcak su. Yaz aylarında sınırsız sıcak su keyfi.
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
                      Sıfır karbon emisyonu. Doğalgaz veya elektrik kullanmadan temiz enerji.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card border-l-4 border-orange-500 bg-orange-50">
                <div className="flex items-start gap-4">
                  <FaSun className="text-orange-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-2">Kışın da Çalışır</h4>
                    <p className="text-gray-600">
                      Vakum tüpler bulutlu havalarda ve kışın da verimli çalışır. -30°C'ye kadar dayanıklı.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nasıl Çalışır */}
            <h3 className="text-2xl font-bold text-primary mb-6 font-display mt-10">
              Vakum Tüplü Sistem Nasıl Çalışır?
            </h3>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <strong className="text-primary">Güneş Işığı Emilimi:</strong>
                    <p className="text-gray-600">Vakum tüplerin içindeki özel kaplama güneş ışığını emer ve ısıya dönüştürür.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <strong className="text-primary">Isı Transferi:</strong>
                    <p className="text-gray-600">Tüplerdeki ısı, bakır borular aracılığıyla depodaki suya aktarılır.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <strong className="text-primary">Sıcak Su Depolama:</strong>
                    <p className="text-gray-600">Isınan su, izolasyonlu depoda 24-48 saat sıcak kalır.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <div>
                    <strong className="text-primary">Kullanım:</strong>
                    <p className="text-gray-600">Musluk açıldığında sıcak su doğrudan kullanıma hazır.</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Kapasite Tablosu */}
            <h3 className="text-2xl font-bold text-primary mb-6 font-display mt-10">
              Hangi Sistem Size Uygun?
            </h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 text-left">Aile Büyüklüğü</th>
                    <th className="p-3 text-left">Tüp Sayısı</th>
                    <th className="p-3 text-left">Depo Kapasitesi</th>
                    <th className="p-3 text-left">Günlük Sıcak Su</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3">2 Kişi</td>
                    <td className="p-3">12-15 Tüp</td>
                    <td className="p-3">120-150 Lt</td>
                    <td className="p-3">~100 Lt</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3">3-4 Kişi</td>
                    <td className="p-3">20-24 Tüp</td>
                    <td className="p-3">200-240 Lt</td>
                    <td className="p-3">~180 Lt</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3">5-6 Kişi</td>
                    <td className="p-3">30 Tüp</td>
                    <td className="p-3">300 Lt</td>
                    <td className="p-3">~250 Lt</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3">Otel / Yurt</td>
                    <td className="p-3">Özel Proje</td>
                    <td className="p-3">500+ Lt</td>
                    <td className="p-3">İhtiyaca Göre</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Hizmetlerimiz */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Güneş Enerjisi Hizmetlerimiz
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Vakum tüplü güneş enerjisi sistemi kurulumu</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Mevcut sistemlerin bakım ve onarımı</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Kırık/patlak tüp değişimi</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Depo ve bağlantı elemanları yenileme</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Kombi entegrasyonu (kış desteği için)</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Otel, yurt, fabrika için büyük sistemler</span>
              </li>
            </ul>

            {/* Markalar */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Çalıştığımız Markalar
            </h3>
            <p className="text-gray-700 mb-8">
              Baymak, Ezinç, Solimpeks, Eraslan, Demirdöküm ve diğer yerli üreticilerin kaliteli vakum tüplü sistemlerini 
              kuruyoruz. Tüm ürünler <strong>TSE belgeli</strong> ve <strong>2 yıl garantili</strong>dir.
            </p>

            {/* SSS */}
            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-10">
              Sık Sorulan Sorular
            </h3>

            <PricingInfoBox 
              service="Güneş Enerjisi Sistemi"
              factors={[
                'Aile büyüklüğü / kişi sayısı',
                'Günlük sıcak su ihtiyacı',
                'Çatı/teras durumu ve yönü',
                'Sistem kapasitesi (tüp sayısı)',
                'Marka ve kalite tercihi',
                'Kombi entegrasyonu gereksinimi'
              ]}
            />
            
            <div className="space-y-4 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Vakum tüplü sistem elektrik üretir mi?</h4>
                <p className="text-gray-600">
                  Hayır, vakum tüplü sistemler sadece sıcak su üretir. Elektrik üretimi için fotovoltaik (solar panel) 
                  sistemler gereklidir. Biz şu an sadece sıcak su sistemleri kuruyoruz.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Kışın sıcak su çıkar mı?</h4>
                <p className="text-gray-600">
                  Evet, vakum tüpler kışın da çalışır. Bulutlu günlerde verim düşse de yine sıcak su üretir. 
                  Çok soğuk günler için kombi desteği entegre edilebilir.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Bakım gerektirir mi?</h4>
                <p className="text-gray-600">
                  Minimum bakım yeterlidir. Yılda 1-2 kez tüplerin temizlenmesi ve genel kontrol önerilir. 
                  Hareketli parça olmadığı için arıza riski çok düşüktür.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Kaç yılda kendini amorti eder?</h4>
                <p className="text-gray-600">
                  Ortalama 2-3 yılda yatırım geri dönüşü sağlar. Sistem 15-20 yıl sorunsuz çalıştığı için 
                  uzun vadede büyük tasarruf sağlar.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Ücretsiz Keşif ve Fiyat Teklifi
              </h3>
              <p className="mb-6">Evinize en uygun sistemi birlikte belirleyelim</p>
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

            {/* İlgili Blog Yazıları */}
            <RelatedBlogLinks service="gunes-enerjisi" />
          </div>
        </div>
      </section>
    </div>
  )
}

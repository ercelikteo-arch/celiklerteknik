import Link from 'next/link'
import { FaCheckCircle, FaPhone } from 'react-icons/fa'
import { ServiceSchema } from '@/components/SchemaMarkup'

export const metadata = {
  title: 'Doğalgaz Tesisatı Çanakkale | Proje, Kurulum, Onay | Çelikler Teknik',
  description: 'Çanakkale doğalgaz tesisatı kurulumu. TSE belgeli, sertifikalı ustalar. Proje çizimi, tesisat, sayaç montajı. Ücretsiz keşif ve teklif.',
  keywords: 'doğalgaz tesisatı çanakkale, çanakkale doğalgaz, doğalgaz kurulumu, gaz tesisatı, doğalgaz projesi, doğalgaz aboneliği',
  alternates: {
    canonical: 'https://celiklerteknik.com/hizmetler/dogalgaz-tesisati',
  },
}

export default function DogalgazTesisatiPage() {
  return (
    <>
      <ServiceSchema 
        name="Doğalgaz Tesisatı Çanakkale"
        description="Çanakkale'de profesyonel doğalgaz tesisatı kurulumu. TSE belgeli malzeme, sertifikalı ustalar, garantili işçilik."
        url="https://celiklerteknik.com/hizmetler/dogalgaz-tesisati"
      />
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Doğalgaz Tesisatı</h1>
          <p className="text-xl text-gray-200">
            Güvenli ve standartlara uygun doğalgaz tesisatı kurulumu
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Profesyonel Doğalgaz Tesisatı Hizmetleri
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Çelikler Yapı olarak Çanakkale genelinde güvenli, standartlara uygun ve uzun ömürlü doğalgaz tesisatı kurulumu yapıyoruz. 
              Sertifikalı ustalarımız ve 10 yılı aşkın tecrübemizle evinizde veya işyerinizde doğalgaz tesisatınızı en güvenli şekilde tamamlıyoruz.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Doğalgaz tesisatı, doğru malzeme seçimi ve uzmanlık gerektiren hassas bir iştir. Yanlış yapılan tesisatlar can ve mal güvenliğini tehdit edebilir. 
              Bu nedenle mutlaka sertifikalı ve deneyimli bir firma ile çalışmanız önemlidir.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-8">
              Doğalgaz Tesisatı Hizmetlerimiz
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Yeni bina doğalgaz tesisatı kurulumu</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Mevcut tesisatın yenilenmesi ve modernizasyonu</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Doğalgaz sayacı montajı ve devreye alma</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Gaz kaçağı testi ve güvenlik kontrolü</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Kombi ve şofben bağlantıları</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Periyodik bakım ve kontrol hizmetleri</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-8">
              Neden Çelikler Yapı?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Sertifikalı Ustalar</h4>
                <p className="text-gray-600">Tüm ekibimiz doğalgaz tesisatı sertifikasına sahiptir</p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Kaliteli Malzeme</h4>
                <p className="text-gray-600">TSE belgeli, standartlara uygun malzemeler kullanıyoruz</p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Garantili İşçilik</h4>
                <p className="text-gray-600">Tüm işlerimizde 2 yıl işçilik garantisi veriyoruz</p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Hızlı Hizmet</h4>
                <p className="text-gray-600">Çanakkale genelinde hızlı ve zamanında teslimat</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-8">
              Doğalgaz Tesisatı Yaptırırken Nelere Dikkat Edilmeli?
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Mutlaka sertifikalı bir firma ile çalışın</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">TSE belgeli malzeme kullanımını kontrol edin</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">İşçilik garantisi talep edin</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Gaz kaçağı testinin yapıldığından emin olun</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">Tesisat projesinin onaylı olduğunu kontrol edin</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 font-display mt-8">
              Sık Sorulan Sorular
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Doğalgaz tesisatı ne kadar sürede tamamlanır?</h4>
                <p className="text-gray-600">
                  Standart bir daire için 1-2 gün, villa veya işyeri için 3-5 gün sürmektedir. 
                  Kesin süre keşif sonrası belirlenir.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Doğalgaz tesisatı maliyeti nedir?</h4>
                <p className="text-gray-600">
                  Maliyet, metrekare, kat sayısı ve kullanılacak malzemeye göre değişir. 
                  Ücretsiz keşif için bizi arayın.
                </p>
              </div>
              <div className="card">
                <h4 className="font-bold text-primary mb-2">Eski tesisatımı yenileyebilir miyim?</h4>
                <p className="text-gray-600">
                  Evet, eski ve güvenli olmayan tesisatları yeniliyoruz. Önce güvenlik kontrolü yapıp size rapor sunuyoruz.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Ücretsiz Keşif ve Teklif İçin Hemen Arayın
              </h3>
              <p className="mb-6">Çanakkale genelinde hizmetinizdeyiz</p>
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
    </>
  )
}

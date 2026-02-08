'use client'

import { useState } from 'react'
import { FaChevronDown, FaPhone, FaWhatsapp } from 'react-icons/fa'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/siteConfig'
import { FAQSchema } from '@/components/SchemaMarkup'

const faqData = [
  {
    category: 'Kombi & Isıtma',
    questions: [
      {
        q: 'Kombi bakımı ne sıklıkla yapılmalı?',
        a: 'Kombi bakımı yılda en az 1 kez, tercihen ısıtma sezonu öncesi (Eylül-Ekim) yapılmalıdır. Düzenli bakım hem güvenliğinizi sağlar hem de kombinin verimli çalışmasını ve uzun ömürlü olmasını garanti eder.'
      },
      {
        q: 'Kombim su kaçırıyor, ne yapmalıyım?',
        a: 'Kombi su kaçağı genellikle genleşme tankı, emniyet ventili veya bağlantı noktalarından kaynaklanır. Hemen kombinin altındaki musluktan suyu kapatın ve yetkili servisi arayın. Su kaçağı elektrik tehlikesi oluşturabilir.'
      },
      {
        q: 'Kombi basıncı ne olmalı?',
        a: 'Normal çalışma basıncı 1-1.5 bar arasında olmalıdır. Basınç 0.5 barın altına düşerse su takviyesi yapılmalı, 2.5 barın üzerine çıkarsa emniyet ventilinden tahliye edilmelidir.'
      },
      {
        q: 'Yoğuşmalı kombi ile konvansiyonel kombi arasındaki fark nedir?',
        a: 'Yoğuşmalı kombiler, baca gazındaki ısıyı geri kazanarak %98\'e varan verimlilik sağlar. Konvansiyonel kombiler ise %92-94 verimlilikle çalışır. Yoğuşmalı kombiler ilk maliyeti yüksek olsa da uzun vadede %20-30 yakıt tasarrufu sağlar.'
      },
    ]
  },
  {
    category: 'Isı Pompası',
    questions: [
      {
        q: 'Isı pompası nedir, nasıl çalışır?',
        a: 'Isı pompası, dış ortamdaki (hava, toprak veya su) düşük sıcaklıktaki ısıyı alıp yükselterek evinizi ısıtan sistemdir. Buzdolabının tersi mantığıyla çalışır. 1 kW elektrik harcayarak 3-5 kW ısı üretebilir.'
      },
      {
        q: 'Isı pompası kışın çalışır mı?',
        a: 'Evet, modern ısı pompaları -25°C\'ye kadar verimli çalışabilir. Çanakkale\'nin ılıman ikliminde ısı pompası tüm kış boyunca sorunsuz çalışır ve yüksek verim sağlar.'
      },
      {
        q: 'Isı pompası mı kombi mi daha ekonomik?',
        a: 'Isı pompası, doğalgaz kombiye göre %50-70 daha az enerji maliyeti sağlar. Ancak ilk yatırım maliyeti daha yüksektir. Genellikle 3-5 yıl içinde kendini amorti eder.'
      },
      {
        q: 'Isı pompası ile yerden ısıtma birlikte kullanılabilir mi?',
        a: 'Evet, hatta en ideal kombinasyondur. Isı pompası düşük sıcaklıkta su üretir (35-45°C), yerden ısıtma da düşük sıcaklıkta çalışır. Bu kombinasyon maksimum verim sağlar.'
      },
    ]
  },
  {
    category: 'Güneş Enerjisi (Vakum Tüplü)',
    questions: [
      {
        q: 'Vakum tüplü güneş enerjisi sistemi ne işe yarar?',
        a: 'Vakum tüplü güneş enerjisi sistemleri güneş ışığını kullanarak sıcak su üretir. Elektrik üretmez, sadece kullanım suyu (banyo, mutfak) ve ısıtma desteği için sıcak su sağlar. Yaz aylarında sıcak su ihtiyacının %100\'ünü karşılayabilir.'
      },
      {
        q: 'Kışın güneş enerjisi çalışır mı?',
        a: 'Evet, vakum tüplü sistemler bulutlu havalarda ve kışın da çalışır. Verim düşse de yıllık ortalama %60-70 tasarruf sağlar. Çanakkale\'nin güneşli iklimi bu sistemler için çok uygundur.'
      },
      {
        q: 'Güneş enerjisi sistemi bakım gerektirir mi?',
        a: 'Minimum bakım gerektirir. Yılda 1-2 kez tüplerin temizlenmesi ve sistemin genel kontrolü yeterlidir. Hareketli parça olmadığı için arıza riski çok düşüktür.'
      },
      {
        q: 'Kaç kişilik eve kaç tüplü sistem gerekir?',
        a: '4 kişilik bir aile için genellikle 20-24 tüplü (200-240 litre) sistem yeterlidir. Kesin kapasite evin su tüketimi ve kullanım alışkanlıklarına göre belirlenir.'
      },
    ]
  },
  {
    category: 'Petek & Tesisat',
    questions: [
      {
        q: 'Petek temizliği ne zaman yapılmalı?',
        a: 'Petek temizliği 2-3 yılda bir veya petekler eşit ısınmıyorsa yapılmalıdır. En ideal zaman ısıtma sezonu öncesi (Eylül-Ekim) veya sonrasıdır (Nisan-Mayıs).'
      },
      {
        q: 'Peteğim ısınmıyor, sebebi ne olabilir?',
        a: 'Peteğin ısınmamasının başlıca sebepleri: hava yapması, tıkanıklık, termostatik vana arızası veya sistem basınç düşüklüğüdür. Önce petek havası alınmalı, sorun devam ederse uzman kontrolü gerekir.'
      },
      {
        q: 'Yerden ısıtma mı petek mi daha iyi?',
        a: 'Yerden ısıtma daha konforlu ve ekonomiktir (%15-20 tasarruf). Ancak mevcut binalarda uygulama zordur. Yeni binalarda yerden ısıtma, mevcut binalarda petek tercih edilir.'
      },
      {
        q: 'Su tesisatı kaç yılda bir yenilenmeli?',
        a: 'Galvaniz borular 15-20 yıl, plastik (PPR) borular 50+ yıl dayanır. Su basıncı düşüklüğü, pas veya sık tıkanma varsa yenileme zamanı gelmiş demektir.'
      },
    ]
  },
  {
    category: 'Doğalgaz',
    questions: [
      {
        q: 'Doğalgaz tesisatı yaptırmak için ne gerekli?',
        a: 'Doğalgaz aboneliği için: tapu veya kira sözleşmesi, kimlik fotokopisi ve başvuru formu gerekir. Biz tüm proje ve tesisat işlemlerini sizin adınıza takip ediyoruz.'
      },
      {
        q: 'Doğalgaz tesisatı ne kadar sürer?',
        a: 'Daire içi tesisat genellikle 1 gün, bina tesisatı 2-3 gün sürer. Proje onayı ve sayaç montajı dahil toplam süreç 1-2 hafta içinde tamamlanır.'
      },
      {
        q: 'Doğalgaz kaçağı nasıl anlaşılır?',
        a: 'Doğalgaza özel koku (çürük yumurta kokusu) eklenmiştir. Bu kokuyu alırsanız: kapı/pencereleri açın, elektrik düğmelerine dokunmayın, kibrit/çakmak yakmayın ve hemen 187\'yi arayın.'
      },
    ]
  },
  {
    category: 'Fiyat & Garanti',
    questions: [
      {
        q: 'Ücretsiz keşif yapıyor musunuz?',
        a: 'Evet, Çanakkale merkez ve ilçelerinde ücretsiz keşif hizmeti veriyoruz. Keşif sonrası detaylı fiyat teklifi sunuyoruz, kabul etmezseniz herhangi bir ücret talep etmiyoruz.'
      },
      {
        q: 'Garanti süresi ne kadar?',
        a: 'İşçilik garantimiz 2 yıldır. Kullandığımız ürünlerin üretici garantisi ayrıca geçerlidir (kombiler 3-5 yıl, ısı pompaları 5-7 yıl). Garanti süresince ücretsiz servis sağlıyoruz.'
      },
      {
        q: 'Taksit imkanı var mı?',
        a: 'Evet, anlaşmalı bankalar ve kredi kartları ile 12 aya varan taksit imkanı sunuyoruz. Büyük projelerde özel ödeme planları da oluşturabiliyoruz.'
      },
      {
        q: 'Hangi markaları kullanıyorsunuz?',
        a: 'Vaillant, Bosch, Baymak, DemirDöküm, Daikin, Mitsubishi gibi sektörün önde gelen markalarıyla çalışıyoruz. Tüm ürünler orijinal ve garantilidir.'
      },
    ]
  },
]

export default function SSSPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  // FAQ Schema için tüm soruları düzleştir
  const allFaqs = faqData.flatMap(cat => 
    cat.questions.map(q => ({ question: q.q, answer: q.a }))
  )

  return (
    <>
      <FAQSchema faqs={allFaqs} />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Merak ettiğiniz tüm soruların cevapları burada. Bulamadığınız bir şey varsa bize ulaşın.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqData.map((category, catIndex) => (
              <div key={catIndex} className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-500">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((item, qIndex) => {
                    const itemId = `${catIndex}-${qIndex}`
                    const isOpen = openItems.includes(itemId)
                    return (
                      <div 
                        key={qIndex}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-800 pr-4">{item.q}</span>
                          <FaChevronDown 
                            className={`text-orange-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                        >
                          <p className="px-6 pb-4 text-gray-600 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Sorunuzun Cevabını Bulamadınız mı?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır. Hemen bize ulaşın!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.contact.phone.formatted.primary}`}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                <FaPhone />
                {siteConfig.contact.phone.primary}
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.formatted.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp />
                WhatsApp ile Yazın
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

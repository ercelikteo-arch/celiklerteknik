import Link from 'next/link'
import { FaExclamationTriangle, FaCheckCircle, FaSnowflake, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'

export const metadata: Metadata = {
  title: 'Yazlıkta Kışın Donma Önleme | Tesisat Koruma Rehberi | Çelikler Teknik',
  description: 'Yazlık evde kışın tesisat donması nasıl önlenir? Boruların patlaması, kombinin donması, su tesisatı koruma yöntemleri. Uzman önerileri.',
  keywords: 'yazlık tesisat donma, kışın yazlık koruma, boru patlaması önleme, kombi donma, yazlık ev kış bakımı',
  alternates: {
    canonical: 'https://celiklerteknik.com/yazlikta-kisin-donma-onleme',
  },
}

const preventionMethods = [
  {
    title: 'Su Tesisatını Boşaltın',
    description: 'Ana vanayı kapatın, tüm muslukları açın ve boruların tamamen boşalmasını sağlayın. Sifon ve rezervuarları da boşaltın.',
    priority: 'Kritik',
    color: 'red'
  },
  {
    title: 'Kombiyi Koruma Moduna Alın',
    description: 'Kombiyi tamamen kapatmayın, don koruma modunda bırakın. Bu mod, sıcaklık düşünce otomatik çalışır.',
    priority: 'Kritik',
    color: 'red'
  },
  {
    title: 'Antifriz Kullanın',
    description: 'Kalorifer tesisatına antifriz ekleyin. Özellikle ısı pompası ve yerden ısıtma sistemlerinde önemli.',
    priority: 'Önemli',
    color: 'orange'
  },
  {
    title: 'Yalıtım Kontrolü',
    description: 'Dış cephe boruları, sayaç dolabı ve soğuk bölgelerdeki tesisatı yalıtım malzemesi ile sarın.',
    priority: 'Önemli',
    color: 'orange'
  },
  {
    title: 'Elektrik Kesmeyin',
    description: 'Kombinin don koruma modu çalışması için elektrik açık kalmalı. Sadece ana şalteri kapatmayın.',
    priority: 'Kritik',
    color: 'red'
  },
  {
    title: 'Periyodik Kontrol',
    description: 'Mümkünse ayda bir kontrol edin veya komşuya rica edin. Uzaktan izleme sistemleri de kurulabilir.',
    priority: 'Tavsiye',
    color: 'blue'
  }
]

const commonMistakes = [
  'Kombinin fişini çekmek',
  'Ana suyu kapatıp boruları boşaltmamak',
  'Sadece iç mekan musluklarını kapatmak',
  'Kalorifer suyunu boşaltmak (antifriz yoksa)',
  'Güneş enerjisi deposunu boşaltmamak',
  'Klozet rezervuarını unutmak'
]

const faqItems = [
  {
    q: 'Yazlıkta kombiyi tamamen kapatmalı mıyım?',
    a: 'Hayır! Kombiyi don koruma modunda bırakın. Bu mod, iç sıcaklık 5°C\'nin altına düşünce otomatik çalışır ve donmayı önler. Elektriği kesmeyin.'
  },
  {
    q: 'Borular dondu, ne yapmalıyım?',
    a: 'Panik yapmayın. Muslukları açık bırakın, donmuş bölgeyi yavaşça ısıtın (saç kurutma makinesi, sıcak bez). Asla açık ateş kullanmayın. Çözülme başlayınca kaçak kontrolü yapın.'
  },
  {
    q: 'Güneş enerjisi sistemi kışın donar mı?',
    a: 'Evet, vakum tüplü sistemlerin deposu donabilir. Kış öncesi depoyu boşaltın veya antifrizli sistem kullanın. Tüpler genellikle donmaz.'
  },
  {
    q: 'Hangi borular daha çok donar?',
    a: 'Dış cephe boruları, sayaç dolabı, bodrum ve çatı katı boruları en riskli bölgelerdir. Bu alanları özellikle yalıtın.'
  },
  {
    q: 'Uzaktan izleme sistemi kurulabilir mi?',
    a: 'Evet, akıllı termostatlar ve sensörler ile evinizi uzaktan izleyebilirsiniz. Sıcaklık düşünce telefona bildirim gelir.'
  }
]

export default function YazliktaDonmaOnlemePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FaSnowflake className="text-5xl mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Yazlıkta Kışın Donma Önleme
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Tesisat patlaması ve kombi hasarından korunma rehberi
          </p>
        </div>
      </section>

      {/* Warning */}
      <section className="py-8 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-4 p-4 bg-red-100 rounded-xl">
            <FaExclamationTriangle className="text-red-600 text-3xl flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-red-800 text-lg mb-2">Dikkat!</h2>
              <p className="text-red-700">
                Donmuş borular patlayabilir ve ciddi su hasarına neden olabilir. 
                Kış gelmeden önce mutlaka önlem alın. Şüpheniz varsa profesyonel destek isteyin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Yazlık Evlerde Kış Tehlikesi
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Yazlık evler kış aylarında boş kaldığında, içerideki su tesisatı donma riski taşır. 
              Donmuş su genleşir ve boruları patlatabilir. İlkbaharda eve geldiğinizde 
              <strong> su baskını, küf ve ciddi hasar</strong> ile karşılaşabilirsiniz.
            </p>
            <p className="text-lg text-gray-700">
              Bu rehberde, yazlık evinizi kış aylarında nasıl koruyacağınızı, 
              hangi önlemleri almanız gerektiğini ve sık yapılan hataları anlatıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Prevention Methods */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Donma Önleme Yöntemleri
            </h2>

            <div className="space-y-4">
              {preventionMethods.map((method, index) => (
                <div 
                  key={index} 
                  className={`card border-l-4 ${
                    method.color === 'red' ? 'border-red-500 bg-red-50' :
                    method.color === 'orange' ? 'border-orange-500 bg-orange-50' :
                    'border-blue-500 bg-blue-50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-sm font-bold px-2 py-1 rounded ${
                      method.color === 'red' ? 'bg-red-500 text-white' :
                      method.color === 'orange' ? 'bg-orange-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {method.priority}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">{method.title}</h3>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Sık Yapılan Hatalar
            </h2>

            <div className="bg-red-50 rounded-xl p-6">
              <ul className="space-y-3">
                {commonMistakes.map((mistake, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-gray-700">{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Adım Adım Kış Hazırlığı
            </h2>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <ol className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Ana Su Vanasını Kapatın</h4>
                    <p className="text-gray-600">Sayaç dolabındaki veya bodrumdaki ana vanayı kapatın.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Tüm Muslukları Açın</h4>
                    <p className="text-gray-600">Sıcak ve soğuk su musluklarını açık bırakın, boruların boşalmasını bekleyin.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Klozet ve Sifonları Boşaltın</h4>
                    <p className="text-gray-600">Rezervuarı boşaltın, sifon suyunu çekin. Antifriz ekleyebilirsiniz.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Kombiyi Don Koruma Moduna Alın</h4>
                    <p className="text-gray-600">Kombiyi kapatmayın, don koruma modunda bırakın. Elektriği kesmeyin.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Güneş Enerjisi Deposunu Boşaltın</h4>
                    <p className="text-gray-600">Varsa güneş enerjisi deposundaki suyu boşaltın veya antifriz ekleyin.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">6</span>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Yalıtım Kontrolü Yapın</h4>
                    <p className="text-gray-600">Dış cephe boruları ve sayaç dolabını yalıtım malzemesi ile sarın.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display text-center">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="card">
                  <h3 className="font-bold text-primary mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Profesyonel Kış Hazırlığı Hizmeti
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Yazlık evinizi kışa hazırlamamızı ister misiniz? Tesisat kontrolü, antifriz ekleme ve yalıtım hizmeti veriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone.formatted.primary}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <FaPhone />
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.formatted.replace('+', '')}`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a }
            }))
          })
        }}
      />
    </div>
  )
}

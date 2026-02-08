import { FaAward, FaCertificate, FaShieldAlt, FaBolt, FaTag } from 'react-icons/fa'

const features = [
  {
    icon: FaAward,
    title: '20+ Yıllık Tecrübe',
    description: 'Sektörde uzun yıllara dayanan deneyim',
  },
  {
    icon: FaCertificate,
    title: 'Sertifikalı Ustalar',
    description: 'Belgeli ve eğitimli profesyonel ekip',
  },
  {
    icon: FaShieldAlt,
    title: 'Garantili İşçilik',
    description: 'Tüm işlerimizde garanti güvencesi',
  },
  {
    icon: FaBolt,
    title: 'Hızlı Servis',
    description: 'Acil durumlarda anında müdahale',
  },
  {
    icon: FaTag,
    title: 'Uygun Fiyat',
    description: 'Rekabetçi ve şeffaf fiyatlandırma',
  },
]

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Neden Biz?</h2>
          <p className="section-subtitle">
            Çelikler Yapı'yı tercih etmeniz için 5 önemli neden
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="bg-secondary text-white p-4 rounded-full mb-4">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2 font-display">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs

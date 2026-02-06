import Link from 'next/link'
import { FaFire, FaWrench, FaSnowflake, FaSolarPanel, FaTint, FaCog, FaThermometerHalf } from 'react-icons/fa'

export const metadata = {
  title: 'Hizmetlerimiz - Çelikler Yapı | Çanakkale',
  description: 'Doğalgaz tesisatı, kombi servisi, ısı pompası, güneş enerjisi ve tesisat hizmetleri. Çanakkale genelinde profesyonel çözümler.',
}

const services = [
  {
    icon: FaFire,
    title: 'Doğalgaz Tesisatı',
    description: 'Güvenli ve standartlara uygun doğalgaz tesisatı kurulumu',
    href: '/hizmetler/dogalgaz-tesisati',
  },
  {
    icon: FaWrench,
    title: 'Kombi Montajı ve Servisi',
    description: 'Tüm markalarda kombi montaj, bakım ve onarım hizmetleri',
    href: '/hizmetler/kombi-servisi',
  },
  {
    icon: FaSnowflake,
    title: 'Isı Pompası Sistemleri',
    description: 'Enerji tasarruflu hava kaynaklı ve toprak kaynaklı ısı pompaları',
    href: '/hizmetler/isi-pompasi',
  },
  {
    icon: FaSolarPanel,
    title: 'Güneş Enerji Sistemleri',
    description: 'Güneş kolektörleri ve fotovoltaik panel sistemleri',
    href: '/hizmetler/gunes-enerjisi',
  },
  {
    icon: FaTint,
    title: 'Su Tesisatı',
    description: 'Temiz su, atık su ve yağmur suyu tesisatı hizmetleri',
    href: '/hizmetler/su-tesisati',
  },
  {
    icon: FaThermometerHalf,
    title: 'Petek Temizleme',
    description: 'Profesyonel petek temizleme ve sistem bakımı',
    href: '/hizmetler/petek-temizleme',
  },
  {
    icon: FaCog,
    title: 'Bakım ve Onarım',
    description: 'Periyodik bakım ve acil onarım hizmetleri',
    href: '/hizmetler/bakim-onarim',
  },
]

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Hizmetlerimiz</h1>
          <p className="text-xl text-gray-200">
            Çanakkale genelinde profesyonel yapı ve ısıtma çözümleri
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="card group hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary text-white p-6 rounded-full mb-4 group-hover:bg-secondary transition-colors duration-300">
                    <service.icon size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3 font-display">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-secondary font-medium">Detaylı Bilgi →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 font-display">
            Hizmetlerimiz Hakkında Bilgi Almak İster misiniz?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Uzman ekibimiz size en uygun çözümü sunmak için hazır
          </p>
          <Link
            href="/teklif-al"
            className="btn-primary inline-block"
          >
            Ücretsiz Teklif Al
          </Link>
        </div>
      </section>
    </div>
  )
}

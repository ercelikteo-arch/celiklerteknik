import Link from 'next/link'
import { FaFire, FaWrench, FaSnowflake, FaSolarPanel, FaTint, FaCog } from 'react-icons/fa'

const services = [
  {
    icon: FaFire,
    title: 'Doğalgaz Tesisatı',
    description: 'Profesyonel doğalgaz tesisatı kurulumu ve bakımı',
    href: '/hizmetler/dogalgaz-tesisati',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  },
  {
    icon: FaWrench,
    title: 'Kombi Servisi',
    description: 'Tüm markalarda kombi montaj, bakım ve onarım',
    href: '/hizmetler/kombi-servisi',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
  },
  {
    icon: FaSnowflake,
    title: 'Isı Pompası Sistemleri',
    description: 'Enerji tasarruflu ısı pompası çözümleri',
    href: '/hizmetler/isi-pompasi',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    icon: FaSolarPanel,
    title: 'Güneş Enerji Sistemleri',
    description: 'Güneş enerjisi ile sürdürülebilir çözümler',
    href: '/hizmetler/gunes-enerjisi',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  },
  {
    icon: FaTint,
    title: 'Su Tesisatı',
    description: 'Temiz ve atık su tesisatı hizmetleri',
    href: '/hizmetler/su-tesisati',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
  },
  {
    icon: FaCog,
    title: 'Bakım & Onarım',
    description: 'Periyodik bakım ve acil onarım hizmetleri',
    href: '/hizmetler/bakim-onarim',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80',
  },
]

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="section-subtitle">
            Çanakkale genelinde sunduğumuz profesyonel hizmetler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40 group-hover:from-blue-900 group-hover:via-blue-800/80 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6 z-10">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

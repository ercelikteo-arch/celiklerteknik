import Link from 'next/link'
import { FaPhone, FaFileAlt, FaCheckCircle } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
          Eviniz İçin Profesyonel Isıtma ve Tesisat Çözümleri
        </h2>
        <p className="text-xl mb-6 text-gray-200">
          Kaliteli işçilik, hızlı servis ve garantili hizmet
        </p>
        
        {/* Avantajlar */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            <span>Ücretsiz Keşif</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            <span>Garantili İşçilik</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            <span>7/24 Acil Servis</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/teklif-al"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            <FaFileAlt />
            <span>Ücretsiz Teklif Al</span>
          </Link>
          <a
            href={`tel:${siteConfig.contact.phone.formatted.primary}`}
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
          >
            <FaPhone />
            <span>{siteConfig.contact.phone.primary}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA

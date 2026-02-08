import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaFileAlt, FaCheckCircle } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'

interface DistrictCTAProps {
  districtName: string
}

export default function DistrictCTA({ districtName }: DistrictCTAProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 md:p-8 text-white mt-8">
      <div className="flex items-center gap-2 mb-4">
        <FaCheckCircle className="text-green-400" />
        <span className="text-green-200 font-medium">Bu bölgede aktif hizmet veriyoruz</span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-3 font-display">
        {districtName}'de Hizmetinizdeyiz
      </h3>
      <p className="text-blue-100 mb-6">
        Ücretsiz keşif ve teklif için hemen bize ulaşın. Aynı gün randevu imkanı!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`tel:${siteConfig.contact.phone.formatted.primary}`}
          className="inline-flex items-center justify-center gap-2 bg-white text-primary px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <FaPhone />
          <span>{siteConfig.contact.phone.primary}</span>
        </a>
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp.formatted.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>
        <Link
          href="/teklif-al"
          className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-5 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
        >
          <FaFileAlt />
          <span>Teklif Al</span>
        </Link>
      </div>
    </div>
  )
}

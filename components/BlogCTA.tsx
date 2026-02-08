import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaFileAlt } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'

interface BlogCTAProps {
  topic?: string
}

export default function BlogCTA({ topic }: BlogCTAProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 md:p-8 text-white my-8">
      <h3 className="text-xl md:text-2xl font-bold mb-3 font-display">
        {topic ? `${topic} Konusunda Yardıma mı İhtiyacınız Var?` : 'Profesyonel Destek Alın'}
      </h3>
      <p className="text-blue-100 mb-6">
        Bu konuda sorunuz varsa veya profesyonel hizmet almak istiyorsanız bizimle iletişime geçebilirsiniz. 
        Ücretsiz keşif ve danışmanlık hizmeti sunuyoruz.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`tel:${siteConfig.contact.phone.formatted.primary}`}
          className="inline-flex items-center justify-center gap-2 bg-white text-primary px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <FaPhone />
          <span>Hemen Ara</span>
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

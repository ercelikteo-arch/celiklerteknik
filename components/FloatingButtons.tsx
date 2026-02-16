'use client'

import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp.formatted}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('floating_button')}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
      <a
        href={`tel:${siteConfig.contact.phone.formatted.primary}`}
        onClick={() => trackPhoneClick('floating_button')}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 hover:scale-110"
        aria-label="Telefon"
      >
        <FaPhone size={28} />
      </a>
    </div>
  )
}

export default FloatingButtons

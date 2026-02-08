'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetlerimiz', href: '/hizmetler' },
    { name: 'Ürünler', href: '/urunler' },
    { name: 'Referanslar', href: '/referanslar' },
    { name: 'Blog', href: '/blog' },
    { name: 'Müşteri Yorumları', href: '/yorumlar' },
    { name: 'SSS', href: '/sss' },
    { name: 'Teklif Al', href: '/teklif-al' },
    { name: 'Keşif Randevu', href: '/kesif-randevu' },
    { name: 'Arıza Kaydı', href: '/ariza-kaydi' },
    { name: 'İletişim', href: '/iletisim' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={siteConfig.companyName}
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.contact.phone.formatted.primary}`}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-300"
            >
              <FaPhone />
              <span>Hemen Ara</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.contact.phone.formatted.primary}`}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-300 mt-4 w-fit"
            >
              <FaPhone />
              <span>Hemen Ara</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

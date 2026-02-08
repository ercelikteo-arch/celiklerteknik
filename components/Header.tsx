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
    { name: 'Yorumlar', href: '/yorumlar' },
    { name: 'Teklif Al', href: '/teklif-al' },
    { name: 'İletişim', href: '/iletisim' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0">
            <span className="text-xl font-bold text-primary">{siteConfig.companyName}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.contact.phone.formatted.primary}`}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-300 text-sm"
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

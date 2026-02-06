'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaPhone, FaFileAlt } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image - Optimized with Next/Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Modern villa - Çelikler Yapı ısıtma sistemleri"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AKOm6Xp8NvG8VtGrMoJIHJqxRRUmRizEnJqKqoOxZ//Z"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(8,30,70,0.88), rgba(20,70,140,0.85))',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Glassmorphism Container */}
          <div 
            className="p-8 md:p-12 rounded-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">10+ Yıllık Tecrübe • Çanakkale Geneli Hizmet</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-display leading-tight">
              Çanakkale'nin En Güvenilir
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                Yapı ve Isıtma Çözümleri
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Doğalgaz tesisatı, kombi montajı, ısı pompası sistemleri ve güneş enerjisi çözümlerinde 
              <strong className="text-white"> sertifikalı uzman ekip</strong> ile yanınızdayız
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <span className="text-green-400">✓</span>
                <span className="text-white text-sm">Garantili İşçilik</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <span className="text-green-400">✓</span>
                <span className="text-white text-sm">7/24 Acil Servis</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <span className="text-green-400">✓</span>
                <span className="text-white text-sm">Uygun Fiyat</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/teklif-al"
                className="group inline-flex items-center justify-center gap-3 bg-white text-primary font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 transform"
              >
                <FaFileAlt className="group-hover:rotate-12 transition-transform" />
                <span>Ücretsiz Teklif Al</span>
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone.formatted.primary}`}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transform border-2 border-white/20"
              >
                <FaPhone className="group-hover:rotate-12 transition-transform" />
                <span>Hemen Ara</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white mb-1">500+</p>
                  <p className="text-sm text-gray-200">Tamamlanan Proje</p>
                </div>
                <div className="text-center border-x border-white/20">
                  <p className="text-3xl font-bold text-white mb-1">%98</p>
                  <p className="text-sm text-gray-200">Müşteri Memnuniyeti</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white mb-1">10+</p>
                  <p className="text-sm text-gray-200">Yıllık Tecrübe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero

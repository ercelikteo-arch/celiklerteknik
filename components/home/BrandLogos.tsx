'use client'

import { useRef, useState } from 'react'

const brands = [
  'Bosch',
  'Vaillant',
  'Baymak',
  'Daikin',
  'E.C.A',
  'Mitsubishi',
  'Viessmann',
  'Buderus',
  'DemirDöküm',
]

const BrandLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  return (
    <section className="py-12 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-primary mb-8 font-display">
          Çalıştığımız Markalar
        </h2>
        
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
          style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-xl shadow-md p-6 min-w-[140px] h-20 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 select-none"
            >
              <span className="text-lg font-bold text-primary whitespace-nowrap">{brand}</span>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-4">
          ← Kaydırarak tüm markaları görün →
        </p>
        <p className="text-center text-gray-600 mt-2">
          Tüm markalarda satış, montaj ve servis hizmeti veriyoruz
        </p>
      </div>
    </section>
  )
}

export default BrandLogos

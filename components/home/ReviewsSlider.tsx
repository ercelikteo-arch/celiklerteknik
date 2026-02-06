'use client'

import { useState, useEffect } from 'react'
import { reviews } from '@/data/reviews'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const displayReviews = reviews.slice(0, 6)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayReviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayReviews.length) % displayReviews.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Müşteri Yorumları</h2>
          <p className="section-subtitle">
            Memnun müşterilerimizin deneyimleri
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop: 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {displayReviews.slice(currentIndex, currentIndex + 3).map((review, idx) => {
              const actualIndex = (currentIndex + idx) % displayReviews.length
              const actualReview = displayReviews[actualIndex]
              return (
                <ReviewCard
                  key={actualReview.id}
                  name={actualReview.name}
                  district={actualReview.district}
                  rating={actualReview.rating}
                  comment={actualReview.comment}
                />
              )
            })}
          </div>

          {/* Tablet: 2 cards */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
            {displayReviews.slice(currentIndex, currentIndex + 2).map((review, idx) => {
              const actualIndex = (currentIndex + idx) % displayReviews.length
              const actualReview = displayReviews[actualIndex]
              return (
                <ReviewCard
                  key={actualReview.id}
                  name={actualReview.name}
                  district={actualReview.district}
                  rating={actualReview.rating}
                  comment={actualReview.comment}
                />
              )
            })}
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <ReviewCard
              name={displayReviews[currentIndex].name}
              district={displayReviews[currentIndex].district}
              rating={displayReviews[currentIndex].rating}
              comment={displayReviews[currentIndex].comment}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-10"
            aria-label="Önceki"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-10"
            aria-label="Sonraki"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {displayReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Yorum ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/yorumlar" className="btn-primary inline-block">
            Tüm Yorumları Gör
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSlider

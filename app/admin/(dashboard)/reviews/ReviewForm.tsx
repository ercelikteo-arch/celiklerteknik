'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Review } from '@prisma/client'
import { FaSave, FaArrowLeft, FaStar, FaEye, FaEyeSlash } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface ReviewFormProps {
  review?: Review
}

const districts = [
  'Çanakkale Merkez', 'Biga', 'Gelibolu', 'Ezine', 'Lapseki', 'Çan',
  'Ayvacık', 'Bayramiç', 'Eceabat', 'Bozcaada', 'Gökçeada', 'Yenice'
]

export default function ReviewForm({ review }: ReviewFormProps) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  
  const [formData, setFormData] = useState({
    name: review?.name || '',
    district: review?.district || districts[0],
    rating: review?.rating || 5,
    comment: review?.comment || '',
    published: review?.published || false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const url = review ? `/api/admin/reviews/${review.id}` : '/api/admin/reviews'
      const method = review ? 'PATCH' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) throw new Error('Kayıt başarısız')

      toast.success(review ? 'Yorum güncellendi' : 'Yorum oluşturuldu')
      router.push('/admin/reviews')
      router.refresh()
    } catch (error) {
      toast.error('Bir hata oluştu')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => router.push('/admin/reviews')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <FaArrowLeft />
        <span>Geri Dön</span>
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Müşteri Adı *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Ahmet Yılmaz"
          />
        </div>

        {/* District */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            İlçe
          </label>
          <select
            value={formData.district}
            onChange={(e) => setFormData({ ...formData, district: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Puan
          </label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({ ...formData, rating: star })}
                className="p-1"
              >
                <FaStar
                  size={28}
                  className={star <= formData.rating ? 'text-yellow-400' : 'text-gray-200'}
                />
              </button>
            ))}
            <span className="ml-2 text-gray-600">{formData.rating}/5</span>
          </div>
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Yorum *
          </label>
          <textarea
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Müşteri yorumu..."
          />
        </div>

        {/* Published */}
        <div>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, published: !formData.published })}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
              formData.published
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {formData.published ? <FaEye /> : <FaEyeSlash />}
            <span>{formData.published ? 'Yayında' : 'Gizli'}</span>
          </button>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={saving}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50"
        >
          <FaSave />
          <span>{saving ? 'Kaydediliyor...' : 'Kaydet'}</span>
        </button>
      </div>
    </form>
  )
}

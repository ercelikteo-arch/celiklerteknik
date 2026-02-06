'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Reference } from '@prisma/client'
import { FaArrowLeft, FaTrash, FaPlus } from 'react-icons/fa'
import { generateSlug } from '@/lib/utils'
import toast from 'react-hot-toast'

interface ReferenceFormProps {
  reference?: Reference
}

export default function ReferenceForm({ reference }: ReferenceFormProps) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    title: reference?.title || '',
    slug: reference?.slug || '',
    location: reference?.location || '',
    projectType: reference?.projectType || '',
    serviceType: reference?.serviceType || '',
    duration: reference?.duration || '',
    summary: reference?.summary || '',
    benefits: reference?.benefits || [],
    beforeImages: reference?.beforeImages || [],
    afterImages: reference?.afterImages || [],
    published: reference?.published ?? false,
  })
  const [newBenefit, setNewBenefit] = useState('')
  const [newBeforeImage, setNewBeforeImage] = useState('')
  const [newAfterImage, setNewAfterImage] = useState('')

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: reference ? prev.slug : generateSlug(title),
    }))
  }

  const addBenefit = () => {
    if (newBenefit && !form.benefits.includes(newBenefit)) {
      setForm((prev) => ({ ...prev, benefits: [...prev.benefits, newBenefit] }))
      setNewBenefit('')
    }
  }

  const removeBenefit = (index: number) => {
    setForm((prev) => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index),
    }))
  }

  const addImage = (type: 'before' | 'after') => {
    const url = type === 'before' ? newBeforeImage : newAfterImage
    const key = type === 'before' ? 'beforeImages' : 'afterImages'
    
    if (url && !form[key].includes(url)) {
      setForm((prev) => ({ ...prev, [key]: [...prev[key], url] }))
      type === 'before' ? setNewBeforeImage('') : setNewAfterImage('')
    }
  }

  const removeImage = (type: 'before' | 'after', index: number) => {
    const key = type === 'before' ? 'beforeImages' : 'afterImages'
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const url = reference ? `/api/admin/references/${reference.id}` : '/api/admin/references'
      const method = reference ? 'PATCH' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'İşlem başarısız')
      }

      toast.success(reference ? 'Referans güncellendi' : 'Referans oluşturuldu')
      router.push('/admin/references')
      router.refresh()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Bir hata oluştu')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl">
      <button
        type="button"
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6"
      >
        <FaArrowLeft />
        <span>Geri Dön</span>
      </button>

      <div className="space-y-6">
        {/* Temel Bilgiler */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Temel Bilgiler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Başlık *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Konum (İlçe) *</label>
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Proje Tipi *</label>
              <input
                type="text"
                value={form.projectType}
                onChange={(e) => setForm((prev) => ({ ...prev, projectType: e.target.value }))}
                required
                placeholder="Örn: Villa, Apartman, İşyeri"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hizmet Tipi *</label>
              <input
                type="text"
                value={form.serviceType}
                onChange={(e) => setForm((prev) => ({ ...prev, serviceType: e.target.value }))}
                required
                placeholder="Örn: Isı Pompası Kurulumu"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Süre</label>
              <input
                type="text"
                value={form.duration}
                onChange={(e) => setForm((prev) => ({ ...prev, duration: e.target.value }))}
                placeholder="Örn: 3 gün"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Özet *</label>
            <textarea
              value={form.summary}
              onChange={(e) => setForm((prev) => ({ ...prev, summary: e.target.value }))}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => setForm((prev) => ({ ...prev, published: e.target.checked }))}
                className="w-4 h-4 text-primary rounded"
              />
              <span className="text-sm text-gray-700">Yayınla</span>
            </label>
          </div>
        </div>

        {/* Faydalar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Faydalar</h2>
          
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newBenefit}
              onChange={(e) => setNewBenefit(e.target.value)}
              placeholder="Yeni fayda ekle"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="button"
              onClick={addBenefit}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <FaPlus />
            </button>
          </div>
          
          <div className="space-y-2">
            {form.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <span className="flex-1">{benefit}</span>
                <button
                  type="button"
                  onClick={() => removeBenefit(idx)}
                  className="text-red-600 hover:text-red-700"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Öncesi Görselleri */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Öncesi Görselleri</h2>
          
          <div className="flex gap-2 mb-4">
            <input
              type="url"
              value={newBeforeImage}
              onChange={(e) => setNewBeforeImage(e.target.value)}
              placeholder="Görsel URL'si"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => addImage('before')}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <FaPlus />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {form.beforeImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group">
                <img src={img} alt={`Öncesi ${idx + 1}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage('before', idx)}
                  className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaTrash size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sonrası Görselleri */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Sonrası Görselleri</h2>
          
          <div className="flex gap-2 mb-4">
            <input
              type="url"
              value={newAfterImage}
              onChange={(e) => setNewAfterImage(e.target.value)}
              placeholder="Görsel URL'si"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => addImage('after')}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <FaPlus />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {form.afterImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group">
                <img src={img} alt={`Sonrası ${idx + 1}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage('after', idx)}
                  className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaTrash size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {saving ? 'Kaydediliyor...' : reference ? 'Güncelle' : 'Oluştur'}
          </button>
        </div>
      </div>
    </form>
  )
}

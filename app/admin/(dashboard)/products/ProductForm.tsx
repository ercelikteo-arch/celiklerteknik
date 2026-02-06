'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Product } from '@prisma/client'
import { FaArrowLeft, FaTrash, FaPlus } from 'react-icons/fa'
import { generateSlug } from '@/lib/utils'
import toast from 'react-hot-toast'

interface ProductFormProps {
  product?: Product
}

export default function ProductForm({ product }: ProductFormProps) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    name: product?.name || '',
    slug: product?.slug || '',
    shortDescription: product?.shortDescription || '',
    description: product?.description || '',
    price: product?.price?.toString() || '',
    images: product?.images || [],
    category: product?.category || '',
    inStock: product?.inStock ?? true,
    featured: product?.featured ?? false,
    metaTitle: product?.metaTitle || '',
    metaDescription: product?.metaDescription || '',
  })
  const [newImage, setNewImage] = useState('')

  const handleNameChange = (name: string) => {
    setForm((prev) => ({
      ...prev,
      name,
      slug: product ? prev.slug : generateSlug(name),
    }))
  }

  const addImage = () => {
    if (newImage && !form.images.includes(newImage)) {
      setForm((prev) => ({ ...prev, images: [...prev.images, newImage] }))
      setNewImage('')
    }
  }

  const removeImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const url = product ? `/api/admin/products/${product.id}` : '/api/admin/products'
      const method = product ? 'PATCH' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          price: form.price ? parseFloat(form.price) : null,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'İşlem başarısız')
      }

      toast.success(product ? 'Ürün güncellendi' : 'Ürün oluşturuldu')
      router.push('/admin/products')
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Ürün Adı *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleNameChange(e.target.value)}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori *</label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fiyat (₺)</label>
              <input
                type="number"
                step="0.01"
                value={form.price}
                onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Kısa Açıklama *</label>
            <textarea
              value={form.shortDescription}
              onChange={(e) => setForm((prev) => ({ ...prev, shortDescription: e.target.value }))}
              required
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Detaylı Açıklama *</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="mt-4 flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.inStock}
                onChange={(e) => setForm((prev) => ({ ...prev, inStock: e.target.checked }))}
                className="w-4 h-4 text-primary rounded"
              />
              <span className="text-sm text-gray-700">Stokta Var</span>
            </label>
            
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => setForm((prev) => ({ ...prev, featured: e.target.checked }))}
                className="w-4 h-4 text-primary rounded"
              />
              <span className="text-sm text-gray-700">Öne Çıkan</span>
            </label>
          </div>
        </div>

        {/* Görseller */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Görseller</h2>
          
          <div className="flex gap-2 mb-4">
            <input
              type="url"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              placeholder="Görsel URL'si"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="button"
              onClick={addImage}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              <FaPlus />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {form.images.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group">
                <img src={img} alt={`Görsel ${idx + 1}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(idx)}
                  className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FaTrash size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SEO */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">SEO</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meta Başlık</label>
              <input
                type="text"
                value={form.metaTitle}
                onChange={(e) => setForm((prev) => ({ ...prev, metaTitle: e.target.value }))}
                maxLength={70}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">{form.metaTitle.length}/70</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meta Açıklama</label>
              <textarea
                value={form.metaDescription}
                onChange={(e) => setForm((prev) => ({ ...prev, metaDescription: e.target.value }))}
                maxLength={160}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">{form.metaDescription.length}/160</p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {saving ? 'Kaydediliyor...' : product ? 'Güncelle' : 'Oluştur'}
          </button>
        </div>
      </div>
    </form>
  )
}

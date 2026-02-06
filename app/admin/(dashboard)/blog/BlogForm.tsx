'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BlogPost } from '@prisma/client'
import { FaSave, FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { generateSlug, calculateReadingTime } from '@/lib/utils'

interface BlogFormProps {
  blog?: BlogPost
  authorId: string
}

const categories = [
  'Isıtma Sistemleri',
  'Doğalgaz',
  'Tesisat',
  'Bakım',
  'Enerji Tasarrufu',
  'Rehber',
  'Haberler'
]

export default function BlogForm({ blog, authorId }: BlogFormProps) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    slug: blog?.slug || '',
    excerpt: blog?.excerpt || '',
    content: blog?.content || '',
    coverImage: blog?.coverImage || '',
    category: blog?.category || categories[0],
    tags: blog?.tags?.join(', ') || '',
    published: blog?.published || false,
    metaTitle: blog?.metaTitle || '',
    metaDescription: blog?.metaDescription || '',
  })

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: blog ? formData.slug : generateSlug(title)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
        readingTime: calculateReadingTime(formData.content),
        authorId
      }

      const url = blog ? `/api/admin/blog/${blog.id}` : '/api/admin/blog'
      const method = blog ? 'PATCH' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Kayıt başarısız')
      }

      toast.success(blog ? 'Yazı güncellendi' : 'Yazı oluşturuldu')
      router.push('/admin/blog')
      router.refresh()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Bir hata oluştu')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => router.push('/admin/blog')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <FaArrowLeft />
        <span>Geri Dön</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Başlık *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Blog yazısı başlığı"
            />
          </div>

          {/* Slug */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL Slug
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">/blog/</span>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Özet *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              required
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Kısa özet (liste görünümünde gösterilir)"
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              İçerik * (Markdown destekli)
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
              rows={15}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm"
              placeholder="Blog içeriğini buraya yazın..."
            />
            <p className="text-sm text-gray-500 mt-2">
              Tahmini okuma süresi: {calculateReadingTime(formData.content)} dakika
            </p>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">SEO Ayarları</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Başlık
                </label>
                <input
                  type="text"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="SEO başlığı (boş bırakılırsa yazı başlığı kullanılır)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Açıklama
                </label>
                <textarea
                  value={formData.metaDescription}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="SEO açıklaması (boş bırakılırsa özet kullanılır)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4">Yayın Durumu</h3>
            
            <button
              type="button"
              onClick={() => setFormData({ ...formData, published: !formData.published })}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-colors ${
                formData.published
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {formData.published ? <FaEye /> : <FaEyeSlash />}
              <span>{formData.published ? 'Yayında' : 'Taslak'}</span>
            </button>
          </div>

          {/* Category */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategori
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Etiketler
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="kombi, bakım, enerji (virgülle ayırın)"
            />
          </div>

          {/* Cover Image */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kapak Görseli URL
            </label>
            <input
              type="url"
              value={formData.coverImage}
              onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="https://..."
            />
            {formData.coverImage && (
              <img
                src={formData.coverImage}
                alt="Önizleme"
                className="mt-4 rounded-lg w-full h-32 object-cover"
              />
            )}
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
      </div>
    </form>
  )
}

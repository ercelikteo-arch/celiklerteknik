'use client'

import { useState } from 'react'
import { SiteSettings } from '@prisma/client'
import { FaSave, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaGlobe, FaSearch } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface SettingsFormProps {
  settings: SiteSettings
}

export default function SettingsForm({ settings }: SettingsFormProps) {
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    companyName: settings.companyName,
    phone: settings.phone,
    phoneSecondary: settings.phoneSecondary || '',
    whatsapp: settings.whatsapp,
    email: settings.email,
    workingHours: settings.workingHours,
    workingHoursSunday: settings.workingHoursSunday,
    addressGelibolu: settings.addressGelibolu || '',
    addressLapseki: settings.addressLapseki || '',
    mapLinkGelibolu: settings.mapLinkGelibolu || '',
    mapLinkLapseki: settings.mapLinkLapseki || '',
    facebook: settings.facebook || '',
    instagram: settings.instagram || '',
    twitter: settings.twitter || '',
    linkedin: settings.linkedin || '',
    siteTitleTemplate: settings.siteTitleTemplate,
    defaultMetaDescription: settings.defaultMetaDescription || '',
    defaultOGImage: settings.defaultOGImage || '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) throw new Error('Kayıt başarısız')

      toast.success('Ayarlar kaydedildi')
    } catch (error) {
      toast.error('Bir hata oluştu')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl space-y-6">
      {/* Company Info */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaGlobe className="text-primary" />
          Firma Bilgileri
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Firma Adı
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-posta
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaPhone className="text-primary" />
          İletişim
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ana Telefon
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              İkinci Telefon
            </label>
            <input
              type="text"
              value={formData.phoneSecondary}
              onChange={(e) => setFormData({ ...formData, phoneSecondary: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              WhatsApp
            </label>
            <input
              type="text"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaClock className="text-primary" />
          Çalışma Saatleri
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hafta İçi
            </label>
            <input
              type="text"
              value={formData.workingHours}
              onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pazar
            </label>
            <input
              type="text"
              value={formData.workingHoursSunday}
              onChange={(e) => setFormData({ ...formData, workingHoursSunday: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Addresses */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaMapMarkerAlt className="text-primary" />
          Adresler
        </h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gelibolu Şube Adresi
              </label>
              <input
                type="text"
                value={formData.addressGelibolu}
                onChange={(e) => setFormData({ ...formData, addressGelibolu: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gelibolu Harita Linki
              </label>
              <input
                type="url"
                value={formData.mapLinkGelibolu}
                onChange={(e) => setFormData({ ...formData, mapLinkGelibolu: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lapseki Şube Adresi
              </label>
              <input
                type="text"
                value={formData.addressLapseki}
                onChange={(e) => setFormData({ ...formData, addressLapseki: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lapseki Harita Linki
              </label>
              <input
                type="url"
                value={formData.mapLinkLapseki}
                onChange={(e) => setFormData({ ...formData, mapLinkLapseki: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SEO */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaSearch className="text-primary" />
          SEO Ayarları
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site Başlık Şablonu
            </label>
            <input
              type="text"
              value={formData.siteTitleTemplate}
              onChange={(e) => setFormData({ ...formData, siteTitleTemplate: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="%s | Çelikler Yapı"
            />
            <p className="text-sm text-gray-500 mt-1">%s sayfa başlığı ile değiştirilir</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Varsayılan Meta Açıklama
            </label>
            <textarea
              value={formData.defaultMetaDescription}
              onChange={(e) => setFormData({ ...formData, defaultMetaDescription: e.target.value })}
              rows={2}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Varsayılan OG Image URL
            </label>
            <input
              type="url"
              value={formData.defaultOGImage}
              onChange={(e) => setFormData({ ...formData, defaultOGImage: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        disabled={saving}
        className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50"
      >
        <FaSave />
        <span>{saving ? 'Kaydediliyor...' : 'Ayarları Kaydet'}</span>
      </button>
    </form>
  )
}

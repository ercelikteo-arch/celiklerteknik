'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaArrowLeft, FaPhone, FaWhatsapp, FaSave } from 'react-icons/fa'

interface Quote {
  id: string
  name: string
  phone: string
  email: string | null
  district: string
  service: string
  message: string | null
  status: string
  notes: string | null
  createdAt: Date
}

const statusOptions = [
  { value: 'NEW', label: 'Yeni' },
  { value: 'CONTACTED', label: 'İletişime Geçildi' },
  { value: 'QUOTED', label: 'Teklif Verildi' },
  { value: 'CONVERTED', label: 'Müşteri Oldu' },
  { value: 'CLOSED', label: 'Kapatıldı' },
]

export default function QuoteDetail({ quote }: { quote: Quote }) {
  const router = useRouter()
  const [status, setStatus] = useState(quote.status)
  const [notes, setNotes] = useState(quote.notes || '')
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/quotes/${quote.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, notes })
      })

      if (res.ok) {
        router.refresh()
      }
    } catch (error) {
      console.error('Save error:', error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-4xl">
      <Link
        href="/admin/quotes"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6"
      >
        <FaArrowLeft />
        <span>Teklif Listesine Dön</span>
      </Link>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Müşteri Bilgileri */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-primary mb-4">Müşteri Bilgileri</h2>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-500">Ad Soyad</label>
              <p className="font-medium">{quote.name}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Telefon</label>
              <p className="font-medium">{quote.phone}</p>
            </div>
            {quote.email && (
              <div>
                <label className="text-sm text-gray-500">E-posta</label>
                <p className="font-medium">{quote.email}</p>
              </div>
            )}
            <div>
              <label className="text-sm text-gray-500">İlçe</label>
              <p className="font-medium">{quote.district}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Hizmet</label>
              <p className="font-medium">{quote.service}</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">Tarih</label>
              <p className="font-medium">
                {new Date(quote.createdAt).toLocaleString('tr-TR')}
              </p>
            </div>
          </div>

          {/* İletişim Butonları */}
          <div className="flex gap-2 mt-6">
            <a
              href={`tel:${quote.phone}`}
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-primary-dark"
            >
              <FaPhone />
              <span>Ara</span>
            </a>
            <a
              href={`https://wa.me/90${quote.phone.replace(/\D/g, '').slice(-10)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Talep Detayı */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-primary mb-4">Talep Detayı</h2>
          
          {quote.message && (
            <div className="mb-4">
              <label className="text-sm text-gray-500">Müşteri Mesajı</label>
              <p className="bg-gray-50 p-3 rounded-lg mt-1">{quote.message}</p>
            </div>
          )}

          <div className="mb-4">
            <label className="text-sm text-gray-500 block mb-1">Durum</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              {statusOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-500 block mb-1">Admin Notları</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Notlarınızı buraya yazın..."
            />
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-primary-dark disabled:opacity-50"
          >
            <FaSave />
            <span>{saving ? 'Kaydediliyor...' : 'Kaydet'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

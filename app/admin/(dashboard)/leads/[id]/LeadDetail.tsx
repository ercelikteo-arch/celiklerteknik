'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lead, LeadStatus } from '@prisma/client'
import { FaArrowLeft, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTools, FaSave } from 'react-icons/fa'
import { formatDateTime, statusLabels, statusColors } from '@/lib/utils'
import toast from 'react-hot-toast'

interface LeadDetailProps {
  lead: Lead
}

export default function LeadDetail({ lead }: LeadDetailProps) {
  const router = useRouter()
  const [status, setStatus] = useState<LeadStatus>(lead.status)
  const [notes, setNotes] = useState(lead.notes || '')
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/leads/${lead.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, notes })
      })

      if (!res.ok) throw new Error('Güncelleme başarısız')

      toast.success('Kaydedildi')
      router.refresh()
    } catch (error) {
      toast.error('Bir hata oluştu')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-4xl">
      {/* Back Button */}
      <button
        onClick={() => router.push('/admin/leads')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <FaArrowLeft />
        <span>Geri Dön</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">İletişim Bilgileri</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-gray-800">{lead.name}</p>
                <p className="text-sm text-gray-500">Talep Tarihi: {formatDateTime(lead.createdAt)}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href={`tel:${lead.phone}`}
                  className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <FaPhone className="text-green-600" />
                  <div>
                    <p className="text-sm text-gray-500">Telefon</p>
                    <p className="font-medium text-gray-800">{lead.phone}</p>
                  </div>
                </a>

                {lead.email && (
                  <a
                    href={`mailto:${lead.email}`}
                    className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <FaEnvelope className="text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">E-posta</p>
                      <p className="font-medium text-gray-800">{lead.email}</p>
                    </div>
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <FaMapMarkerAlt className="text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">İlçe</p>
                    <p className="font-medium text-gray-800">{lead.district}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <FaTools className="text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">Hizmet</p>
                    <p className="font-medium text-gray-800">{lead.service}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          {lead.message && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Müşteri Mesajı</h2>
              <p className="text-gray-600 whitespace-pre-wrap">{lead.message}</p>
            </div>
          )}

          {/* Notes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Notlar</h2>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Bu talep hakkında notlarınızı yazın..."
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Durum</h2>
            
            <div className="space-y-3">
              {(['NEW', 'CONTACTED', 'QUOTED', 'CONVERTED', 'CLOSED'] as LeadStatus[]).map((s) => (
                <label
                  key={s}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    status === s ? 'bg-primary/10 border-2 border-primary' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <input
                    type="radio"
                    name="status"
                    value={s}
                    checked={status === s}
                    onChange={() => setStatus(s)}
                    className="hidden"
                  />
                  <span className={`px-2 py-1 text-xs rounded-full ${statusColors[s]}`}>
                    {statusLabels[s]}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50"
          >
            <FaSave />
            <span>{saving ? 'Kaydediliyor...' : 'Kaydet'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

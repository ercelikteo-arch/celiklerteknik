'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Appointment, AppointmentStatus } from '@prisma/client'
import { FaPhone, FaMapMarkerAlt, FaCalendar, FaClock, FaArrowLeft, FaTrash } from 'react-icons/fa'
import { formatDateTime, formatDate, statusLabels, statusColors } from '@/lib/utils'
import toast from 'react-hot-toast'

interface AppointmentDetailProps {
  appointment: Appointment
}

export default function AppointmentDetail({ appointment }: AppointmentDetailProps) {
  const router = useRouter()
  const [status, setStatus] = useState<AppointmentStatus>(appointment.status)
  const [adminNotes, setAdminNotes] = useState(appointment.adminNotes || '')
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/appointments/${appointment.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, adminNotes }),
      })

      if (!res.ok) throw new Error('Güncelleme başarısız')
      toast.success('Randevu güncellendi')
      router.refresh()
    } catch {
      toast.error('Bir hata oluştu')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Bu randevuyu silmek istediğinize emin misiniz?')) return

    try {
      const res = await fetch(`/api/admin/appointments/${appointment.id}`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Silme başarısız')
      toast.success('Randevu silindi')
      router.push('/admin/appointments')
    } catch {
      toast.error('Bir hata oluştu')
    }
  }

  return (
    <div className="max-w-4xl">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6"
      >
        <FaArrowLeft />
        <span>Geri Dön</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Müşteri Bilgileri */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Müşteri Bilgileri</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Ad Soyad</p>
              <p className="font-medium text-gray-800">{appointment.name}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Telefon</p>
              <a href={`tel:${appointment.phone}`} className="flex items-center gap-2 text-primary hover:underline">
                <FaPhone />
                {appointment.phone}
              </a>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Adres</p>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-gray-400 mt-1" />
                <p className="text-gray-800">{appointment.address}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">İlçe</p>
                <p className="font-medium text-gray-800">{appointment.district}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Hizmet</p>
                <p className="font-medium text-gray-800">{appointment.service}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Randevu Bilgileri */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Randevu Bilgileri</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <FaCalendar />
                <span>{formatDate(appointment.preferredDate)}</span>
              </div>
              {appointment.preferredTime && (
                <div className="flex items-center gap-2 text-gray-600">
                  <FaClock />
                  <span>{appointment.preferredTime}</span>
                </div>
              )}
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Kayıt Tarihi</p>
              <p className="text-gray-800">{formatDateTime(appointment.createdAt)}</p>
            </div>
            
            {appointment.notes && (
              <div>
                <p className="text-sm text-gray-500">Müşteri Notu</p>
                <p className="text-gray-800 bg-gray-50 p-3 rounded-lg">{appointment.notes}</p>
              </div>
            )}
          </div>
        </div>

        {/* Durum Güncelleme */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Durum Güncelle</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Durum</label>
              <div className="flex flex-wrap gap-2">
                {(['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'] as AppointmentStatus[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatus(s)}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      status === s
                        ? statusColors[s] + ' border-transparent'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {statusLabels[s]}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Admin Notu</label>
              <textarea
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="İç notlar..."
              />
            </div>
            
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <FaTrash />
                <span>Sil</span>
              </button>
              
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {saving ? 'Kaydediliyor...' : 'Kaydet'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

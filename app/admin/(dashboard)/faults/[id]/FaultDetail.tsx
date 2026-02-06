'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaultReport, FaultReportStatus } from '@prisma/client'
import { FaPhone, FaArrowLeft, FaTrash, FaExpand } from 'react-icons/fa'
import { formatDateTime, statusLabels, statusColors } from '@/lib/utils'
import toast from 'react-hot-toast'

interface FaultDetailProps {
  fault: FaultReport
}

export default function FaultDetail({ fault }: FaultDetailProps) {
  const router = useRouter()
  const [status, setStatus] = useState<FaultReportStatus>(fault.status)
  const [adminNotes, setAdminNotes] = useState(fault.adminNotes || '')
  const [saving, setSaving] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/faults/${fault.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, adminNotes }),
      })

      if (!res.ok) throw new Error('Güncelleme başarısız')
      toast.success('Arıza kaydı güncellendi')
      router.refresh()
    } catch {
      toast.error('Bir hata oluştu')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Bu arıza kaydını silmek istediğinize emin misiniz?')) return

    try {
      const res = await fetch(`/api/admin/faults/${fault.id}`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Silme başarısız')
      toast.success('Arıza kaydı silindi')
      router.push('/admin/faults')
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
              <p className="font-medium text-gray-800">{fault.name}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Telefon</p>
              <a href={`tel:${fault.phone}`} className="flex items-center gap-2 text-primary hover:underline">
                <FaPhone />
                {fault.phone}
              </a>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Hizmet</p>
              <p className="font-medium text-gray-800">{fault.service}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Kayıt Tarihi</p>
              <p className="text-gray-800">{formatDateTime(fault.createdAt)}</p>
            </div>
          </div>
        </div>

        {/* Arıza Açıklaması */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Arıza Açıklaması</h2>
          <p className="text-gray-700 whitespace-pre-wrap">{fault.description}</p>
        </div>

        {/* Fotoğraflar */}
        {fault.images.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Fotoğraflar ({fault.images.length})</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fault.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setLightboxImage(img)}
                >
                  <img
                    src={img}
                    alt={`Arıza fotoğrafı ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FaExpand className="text-white text-xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Durum Güncelleme */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Durum Güncelle</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Durum</label>
              <div className="flex flex-wrap gap-2">
                {(['PENDING', 'INVESTIGATING', 'COMPLETED'] as FaultReportStatus[]).map((s) => (
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

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Büyük görüntü"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  )
}

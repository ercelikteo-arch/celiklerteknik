'use client'

import { useRouter } from 'next/navigation'
import { Reference } from '@prisma/client'
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa'
import { formatDateTime } from '@/lib/utils'
import toast from 'react-hot-toast'

interface ReferencesTableProps {
  references: Reference[]
}

export default function ReferencesTable({ references }: ReferencesTableProps) {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    if (!confirm('Bu referansı silmek istediğinize emin misiniz?')) return

    try {
      const res = await fetch(`/api/admin/references/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Silme başarısız')
      toast.success('Referans silindi')
      router.refresh()
    } catch {
      toast.error('Bir hata oluştu')
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Başlık</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Konum</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Proje Tipi</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hizmet</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Yayın</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tarih</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {references.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                  Referans bulunamadı
                </td>
              </tr>
            ) : (
              references.map((ref) => (
                <tr key={ref.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">{ref.title}</p>
                    <p className="text-sm text-gray-500 truncate max-w-[200px]">{ref.summary}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{ref.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{ref.projectType}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{ref.serviceType}</td>
                  <td className="px-6 py-4">
                    {ref.published ? (
                      <span className="flex items-center gap-1 text-green-600">
                        <FaCheck />
                        <span>Yayında</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-gray-400">
                        <FaTimes />
                        <span>Taslak</span>
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatDateTime(ref.createdAt)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => router.push(`/admin/references/${ref.id}`)}
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(ref.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

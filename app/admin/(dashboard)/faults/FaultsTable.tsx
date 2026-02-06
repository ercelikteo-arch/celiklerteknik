'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaultReport, FaultReportStatus } from '@prisma/client'
import { FaDownload, FaEye, FaFilter, FaImage } from 'react-icons/fa'
import { formatDateTime, statusLabels, statusColors } from '@/lib/utils'
import toast from 'react-hot-toast'

interface FaultsTableProps {
  faults: FaultReport[]
}

export default function FaultsTable({ faults }: FaultsTableProps) {
  const router = useRouter()
  const [statusFilter, setStatusFilter] = useState<FaultReportStatus | 'ALL'>('ALL')
  const [serviceFilter, setServiceFilter] = useState('')

  const filteredFaults = faults.filter((fault) => {
    if (statusFilter !== 'ALL' && fault.status !== statusFilter) return false
    if (serviceFilter && fault.service !== serviceFilter) return false
    return true
  })

  const services = [...new Set(faults.map((f) => f.service))]

  const exportCSV = () => {
    const headers = ['Tarih', 'Ad Soyad', 'Telefon', 'Hizmet', 'Açıklama', 'Durum', 'Fotoğraf Sayısı']
    const rows = filteredFaults.map((fault) => [
      formatDateTime(fault.createdAt),
      fault.name,
      fault.phone,
      fault.service,
      fault.description,
      statusLabels[fault.status] || fault.status,
      fault.images.length.toString()
    ])

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `ariza-kayitlari-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    toast.success('CSV dosyası indirildi')
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Filtrele:</span>
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as FaultReportStatus | 'ALL')}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="ALL">Tüm Durumlar</option>
            <option value="PENDING">Beklemede</option>
            <option value="INVESTIGATING">İnceleniyor</option>
            <option value="COMPLETED">Tamamlandı</option>
          </select>

          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="">Tüm Hizmetler</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <button
            onClick={exportCSV}
            className="ml-auto flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <FaDownload />
            <span>CSV İndir</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tarih</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ad Soyad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Telefon</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hizmet</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Açıklama</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fotoğraf</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredFaults.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
                    Kayıt bulunamadı
                  </td>
                </tr>
              ) : (
                filteredFaults.map((fault) => (
                  <tr key={fault.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {formatDateTime(fault.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-800">{fault.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <a href={`tel:${fault.phone}`} className="text-primary hover:underline">
                        {fault.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{fault.service}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <p className="truncate max-w-[200px]">{fault.description}</p>
                    </td>
                    <td className="px-6 py-4">
                      {fault.images.length > 0 ? (
                        <span className="flex items-center gap-1 text-blue-600">
                          <FaImage />
                          <span>{fault.images.length}</span>
                        </span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${statusColors[fault.status]}`}>
                        {statusLabels[fault.status] || fault.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => router.push(`/admin/faults/${fault.id}`)}
                        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

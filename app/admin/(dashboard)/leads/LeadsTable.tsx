'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lead, LeadStatus } from '@prisma/client'
import { FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import { formatDateTime, statusLabels, statusColors } from '@/lib/utils'
import toast from 'react-hot-toast'

interface LeadsTableProps {
  leads: Lead[]
}

export default function LeadsTable({ leads }: LeadsTableProps) {
  const router = useRouter()
  const [statusFilter, setStatusFilter] = useState<LeadStatus | 'ALL'>('ALL')
  const [districtFilter, setDistrictFilter] = useState('')

  const filteredLeads = leads.filter((lead) => {
    if (statusFilter !== 'ALL' && lead.status !== statusFilter) return false
    if (districtFilter && lead.district !== districtFilter) return false
    return true
  })

  const districts = [...new Set(leads.map((l) => l.district))]

  const exportCSV = () => {
    const headers = ['Tarih', 'Ad Soyad', 'Telefon', 'E-posta', 'İlçe', 'Hizmet', 'Durum', 'Mesaj']
    const rows = filteredLeads.map((lead) => [
      formatDateTime(lead.createdAt),
      lead.name,
      lead.phone,
      lead.email || '',
      lead.district,
      lead.service,
      statusLabels[lead.status] || lead.status,
      lead.message || ''
    ])

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `teklif-talepleri-${new Date().toISOString().split('T')[0]}.csv`
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
            onChange={(e) => setStatusFilter(e.target.value as LeadStatus | 'ALL')}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="ALL">Tüm Durumlar</option>
            <option value="NEW">Yeni</option>
            <option value="CONTACTED">Arandı</option>
            <option value="QUOTED">Teklif Verildi</option>
            <option value="CONVERTED">İşe Döndü</option>
            <option value="CLOSED">Kapandı</option>
          </select>

          <select
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="">Tüm İlçeler</option>
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İlçe</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hizmet</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    Kayıt bulunamadı
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {formatDateTime(lead.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-800">{lead.name}</p>
                      {lead.email && <p className="text-sm text-gray-500">{lead.email}</p>}
                    </td>
                    <td className="px-6 py-4">
                      <a href={`tel:${lead.phone}`} className="text-primary hover:underline">
                        {lead.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{lead.district}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{lead.service}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${statusColors[lead.status]}`}>
                        {statusLabels[lead.status] || lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => router.push(`/admin/leads/${lead.id}`)}
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

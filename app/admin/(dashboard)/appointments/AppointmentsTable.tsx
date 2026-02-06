'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Appointment, AppointmentStatus } from '@prisma/client'
import { FaDownload, FaEye, FaFilter, FaCalendar } from 'react-icons/fa'
import { formatDateTime, formatDate, statusLabels, statusColors } from '@/lib/utils'
import toast from 'react-hot-toast'

interface AppointmentsTableProps {
  appointments: Appointment[]
}

export default function AppointmentsTable({ appointments }: AppointmentsTableProps) {
  const router = useRouter()
  const [statusFilter, setStatusFilter] = useState<AppointmentStatus | 'ALL'>('ALL')
  const [districtFilter, setDistrictFilter] = useState('')
  const [serviceFilter, setServiceFilter] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  const filteredAppointments = appointments.filter((apt) => {
    if (statusFilter !== 'ALL' && apt.status !== statusFilter) return false
    if (districtFilter && apt.district !== districtFilter) return false
    if (serviceFilter && apt.service !== serviceFilter) return false
    if (dateFrom && new Date(apt.preferredDate) < new Date(dateFrom)) return false
    if (dateTo && new Date(apt.preferredDate) > new Date(dateTo)) return false
    return true
  })

  const districts = [...new Set(appointments.map((a) => a.district))]
  const services = [...new Set(appointments.map((a) => a.service))]

  const exportCSV = () => {
    const headers = ['Tarih', 'Randevu Tarihi', 'Ad Soyad', 'Telefon', 'Adres', 'İlçe', 'Hizmet', 'Durum', 'Notlar']
    const rows = filteredAppointments.map((apt) => [
      formatDateTime(apt.createdAt),
      formatDate(apt.preferredDate) + (apt.preferredTime ? ` ${apt.preferredTime}` : ''),
      apt.name,
      apt.phone,
      apt.address,
      apt.district,
      apt.service,
      statusLabels[apt.status] || apt.status,
      apt.notes || ''
    ])

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(',')).join('\n')
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `randevular-${new Date().toISOString().split('T')[0]}.csv`
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
            onChange={(e) => setStatusFilter(e.target.value as AppointmentStatus | 'ALL')}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="ALL">Tüm Durumlar</option>
            <option value="PENDING">Beklemede</option>
            <option value="CONFIRMED">Onaylandı</option>
            <option value="COMPLETED">Tamamlandı</option>
            <option value="CANCELLED">İptal</option>
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

          <div className="flex items-center gap-2">
            <FaCalendar className="text-gray-400" />
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <span className="text-gray-400">-</span>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>

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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Randevu Tarihi</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ad Soyad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Telefon</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İlçe</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hizmet</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Durum</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredAppointments.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    Kayıt bulunamadı
                  </td>
                </tr>
              ) : (
                filteredAppointments.map((apt) => (
                  <tr key={apt.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">
                      <div className="font-medium text-gray-800">{formatDate(apt.preferredDate)}</div>
                      {apt.preferredTime && <div className="text-gray-500">{apt.preferredTime}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-800">{apt.name}</p>
                      <p className="text-sm text-gray-500 truncate max-w-[200px]">{apt.address}</p>
                    </td>
                    <td className="px-6 py-4">
                      <a href={`tel:${apt.phone}`} className="text-primary hover:underline">
                        {apt.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{apt.district}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{apt.service}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${statusColors[apt.status]}`}>
                        {statusLabels[apt.status] || apt.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => router.push(`/admin/appointments/${apt.id}`)}
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

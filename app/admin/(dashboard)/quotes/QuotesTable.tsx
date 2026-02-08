'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaEye, FaPhone, FaWhatsapp } from 'react-icons/fa'

interface Quote {
  id: string
  name: string
  phone: string
  email: string | null
  district: string
  service: string
  message: string | null
  status: string
  createdAt: Date
}

const statusColors: Record<string, string> = {
  NEW: 'bg-blue-100 text-blue-800',
  CONTACTED: 'bg-yellow-100 text-yellow-800',
  QUOTED: 'bg-purple-100 text-purple-800',
  CONVERTED: 'bg-green-100 text-green-800',
  CLOSED: 'bg-gray-100 text-gray-800',
}

const statusLabels: Record<string, string> = {
  NEW: 'Yeni',
  CONTACTED: 'İletişime Geçildi',
  QUOTED: 'Teklif Verildi',
  CONVERTED: 'Müşteri Oldu',
  CLOSED: 'Kapatıldı',
}

export default function QuotesTable({ quotes }: { quotes: Quote[] }) {
  const [filter, setFilter] = useState('')

  const filteredQuotes = quotes.filter(quote => 
    filter === '' || quote.status === filter
  )

  return (
    <div>
      {/* Filtreler */}
      <div className="mb-4 flex gap-2 flex-wrap">
        <button
          onClick={() => setFilter('')}
          className={`px-3 py-1 rounded-lg text-sm ${filter === '' ? 'bg-primary text-white' : 'bg-gray-100'}`}
        >
          Tümü ({quotes.length})
        </button>
        {Object.entries(statusLabels).map(([key, label]) => {
          const count = quotes.filter(q => q.status === key).length
          return (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3 py-1 rounded-lg text-sm ${filter === key ? 'bg-primary text-white' : 'bg-gray-100'}`}
            >
              {label} ({count})
            </button>
          )
        })}
      </div>

      {/* Tablo */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Müşteri</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">İlçe</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Hizmet</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Durum</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Tarih</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredQuotes.map((quote) => (
              <tr key={quote.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium text-gray-900">{quote.name}</p>
                    <p className="text-sm text-gray-500">{quote.phone}</p>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-600">{quote.district}</td>
                <td className="px-4 py-3 text-gray-600">{quote.service}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[quote.status]}`}>
                    {statusLabels[quote.status]}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {new Date(quote.createdAt).toLocaleDateString('tr-TR')}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/quotes/${quote.id}`}
                      className="p-2 text-primary hover:bg-primary/10 rounded-lg"
                      title="Detay"
                    >
                      <FaEye />
                    </Link>
                    <a
                      href={`tel:${quote.phone}`}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                      title="Ara"
                    >
                      <FaPhone />
                    </a>
                    <a
                      href={`https://wa.me/90${quote.phone.replace(/\D/g, '').slice(-10)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-green-500 hover:bg-green-50 rounded-lg"
                      title="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredQuotes.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            Henüz teklif talebi yok
          </div>
        )}
      </div>
    </div>
  )
}

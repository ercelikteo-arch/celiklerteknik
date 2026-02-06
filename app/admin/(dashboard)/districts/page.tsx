'use client'

import { useState, useEffect } from 'react'
import { District } from '@prisma/client'
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaSave } from 'react-icons/fa'
import toast from 'react-hot-toast'

export default function DistrictsPage() {
  const [districts, setDistricts] = useState<District[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', slug: '', order: 0, active: true })
  const [showNew, setShowNew] = useState(false)

  useEffect(() => {
    fetchDistricts()
  }, [])

  const fetchDistricts = async () => {
    try {
      const res = await fetch('/api/admin/districts')
      const data = await res.json()
      setDistricts(data.data || [])
    } catch {
      toast.error('Veriler yüklenemedi')
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async () => {
    try {
      const res = await fetch('/api/admin/districts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Oluşturma başarısız')
      toast.success('İlçe oluşturuldu')
      setShowNew(false)
      setForm({ name: '', slug: '', order: 0, active: true })
      fetchDistricts()
    } catch {
      toast.error('Bir hata oluştu')
    }
  }

  const handleUpdate = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/districts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Güncelleme başarısız')
      toast.success('İlçe güncellendi')
      setEditingId(null)
      fetchDistricts()
    } catch {
      toast.error('Bir hata oluştu')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Bu ilçeyi silmek istediğinize emin misiniz?')) return
    try {
      const res = await fetch(`/api/admin/districts/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Silme başarısız')
      toast.success('İlçe silindi')
      fetchDistricts()
    } catch {
      toast.error('Bir hata oluştu')
    }
  }

  const startEdit = (district: District) => {
    setEditingId(district.id)
    setForm({
      name: district.name,
      slug: district.slug,
      order: district.order,
      active: district.active,
    })
  }

  if (loading) {
    return <div className="p-6">Yükleniyor...</div>
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">İlçeler</h1>
        <button
          onClick={() => setShowNew(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          <FaPlus />
          <span>Yeni İlçe</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sıra</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İlçe Adı</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Durum</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {showNew && (
              <tr className="bg-blue-50">
                <td className="px-6 py-4">
                  <input
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm((p) => ({ ...p, order: parseInt(e.target.value) || 0 }))}
                    className="w-16 px-2 py-1 border rounded"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="İlçe adı"
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
                    placeholder="slug"
                    className="w-full px-2 py-1 border rounded"
                  />
                </td>
                <td className="px-6 py-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={form.active}
                      onChange={(e) => setForm((p) => ({ ...p, active: e.target.checked }))}
                    />
                    <span>Aktif</span>
                  </label>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button onClick={handleCreate} className="p-2 text-green-600 hover:bg-green-50 rounded">
                      <FaSave />
                    </button>
                    <button onClick={() => setShowNew(false)} className="p-2 text-gray-600 hover:bg-gray-100 rounded">
                      <FaTimes />
                    </button>
                  </div>
                </td>
              </tr>
            )}
            {districts.map((district) => (
              <tr key={district.id} className="hover:bg-gray-50">
                {editingId === district.id ? (
                  <>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        value={form.order}
                        onChange={(e) => setForm((p) => ({ ...p, order: parseInt(e.target.value) || 0 }))}
                        className="w-16 px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={form.slug}
                        onChange={(e) => setForm((p) => ({ ...p, slug: e.target.value }))}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={form.active}
                          onChange={(e) => setForm((p) => ({ ...p, active: e.target.checked }))}
                        />
                        <span>Aktif</span>
                      </label>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button onClick={() => handleUpdate(district.id)} className="p-2 text-green-600 hover:bg-green-50 rounded">
                          <FaSave />
                        </button>
                        <button onClick={() => setEditingId(null)} className="p-2 text-gray-600 hover:bg-gray-100 rounded">
                          <FaTimes />
                        </button>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 text-sm text-gray-600">{district.order}</td>
                    <td className="px-6 py-4 font-medium text-gray-800">{district.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{district.slug}</td>
                    <td className="px-6 py-4">
                      {district.active ? (
                        <span className="flex items-center gap-1 text-green-600"><FaCheck /> Aktif</span>
                      ) : (
                        <span className="flex items-center gap-1 text-gray-400"><FaTimes /> Pasif</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button onClick={() => startEdit(district)} className="p-2 text-primary hover:bg-primary/10 rounded">
                          <FaEdit />
                        </button>
                        <button onClick={() => handleDelete(district.id)} className="p-2 text-red-600 hover:bg-red-50 rounded">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

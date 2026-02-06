'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Product } from '@prisma/client'
import { FaEdit, FaTrash, FaStar, FaCheck, FaTimes } from 'react-icons/fa'
import { formatDateTime } from '@/lib/utils'
import toast from 'react-hot-toast'

interface ProductsTableProps {
  products: Product[]
}

export default function ProductsTable({ products }: ProductsTableProps) {
  const router = useRouter()
  const [categoryFilter, setCategoryFilter] = useState('')

  const filteredProducts = products.filter((product) => {
    if (categoryFilter && product.category !== categoryFilter) return false
    return true
  })

  const categories = [...new Set(products.map((p) => p.category))]

  const handleDelete = async (id: string) => {
    if (!confirm('Bu ürünü silmek istediğinize emin misiniz?')) return

    try {
      const res = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Silme başarısız')
      toast.success('Ürün silindi')
      router.refresh()
    } catch {
      toast.error('Bir hata oluştu')
    }
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-600">Kategori:</span>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="">Tümü</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ürün</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fiyat</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stok</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Öne Çıkan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tarih</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                    Ürün bulunamadı
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {product.images[0] && (
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                        )}
                        <div>
                          <p className="font-medium text-gray-800">{product.name}</p>
                          <p className="text-sm text-gray-500 truncate max-w-[200px]">{product.shortDescription}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {product.price ? `₺${product.price.toLocaleString('tr-TR')}` : '-'}
                    </td>
                    <td className="px-6 py-4">
                      {product.inStock ? (
                        <span className="flex items-center gap-1 text-green-600">
                          <FaCheck />
                          <span>Var</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-600">
                          <FaTimes />
                          <span>Yok</span>
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {product.featured && (
                        <FaStar className="text-yellow-500" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {formatDateTime(product.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => router.push(`/admin/products/${product.id}`)}
                          className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id)}
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
    </div>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import { FaEdit, FaTrash } from 'react-icons/fa'
import toast from 'react-hot-toast'

export default function ReviewActions({ reviewId }: { reviewId: string }) {
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm('Bu yorumu silmek istediğinize emin misiniz?')) return

    try {
      const res = await fetch(`/api/admin/reviews/${reviewId}`, {
        method: 'DELETE'
      })

      if (!res.ok) throw new Error('Silme başarısız')

      toast.success('Yorum silindi')
      router.refresh()
    } catch (error) {
      toast.error('Bir hata oluştu')
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => router.push(`/admin/reviews/${reviewId}`)}
        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
      >
        <FaEdit size={14} />
      </button>
      <button
        onClick={handleDelete}
        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
      >
        <FaTrash size={14} />
      </button>
    </div>
  )
}

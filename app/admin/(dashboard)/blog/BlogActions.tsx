'use client'

import { useRouter } from 'next/navigation'
import { FaEdit, FaTrash } from 'react-icons/fa'
import toast from 'react-hot-toast'

export default function BlogActions({ blogId }: { blogId: string }) {
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm('Bu yazıyı silmek istediğinize emin misiniz?')) return

    try {
      const res = await fetch(`/api/admin/blog/${blogId}`, {
        method: 'DELETE'
      })

      if (!res.ok) throw new Error('Silme başarısız')

      toast.success('Yazı silindi')
      router.refresh()
    } catch (error) {
      toast.error('Bir hata oluştu')
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => router.push(`/admin/blog/${blogId}`)}
        className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
      >
        <FaEdit />
      </button>
      <button
        onClick={handleDelete}
        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
      >
        <FaTrash />
      </button>
    </div>
  )
}

import Link from 'next/link'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import { FaPlus, FaStar, FaEye, FaEyeSlash } from 'react-icons/fa'
import { formatDate } from '@/lib/utils'
import ReviewActions from './ReviewActions'

async function getReviews() {
  return prisma.review.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export default async function ReviewsPage() {
  const session = await getSession()
  const reviews = await getReviews()

  return (
    <div>
      <AdminHeader title="Müşteri Yorumları" user={session!} />
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">{reviews.length} yorum</p>
          <Link
            href="/admin/reviews/new"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <FaPlus />
            <span>Yeni Yorum</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              Henüz yorum yok
            </div>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-bold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.district}</p>
                  </div>
                  {review.published ? (
                    <span className="flex items-center gap-1 text-green-600 text-sm">
                      <FaEye size={12} />
                      Yayında
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-gray-400 text-sm">
                      <FaEyeSlash size={12} />
                      Gizli
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={star <= review.rating ? 'text-yellow-400' : 'text-gray-200'}
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{review.comment}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{formatDate(review.createdAt)}</span>
                  <ReviewActions reviewId={review.id} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

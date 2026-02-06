import { notFound } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import ReviewForm from '../ReviewForm'

async function getReview(id: string) {
  return prisma.review.findUnique({
    where: { id }
  })
}

export default async function EditReviewPage({ params }: { params: { id: string } }) {
  const session = await getSession()
  const review = await getReview(params.id)

  if (!review) {
    notFound()
  }

  return (
    <div>
      <AdminHeader title="Yorum Düzenle" user={session!} />
      <div className="p-6">
        <ReviewForm review={review} />
      </div>
    </div>
  )
}

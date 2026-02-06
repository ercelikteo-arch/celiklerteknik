import { getSession } from '@/lib/auth'
import AdminHeader from '@/components/admin/AdminHeader'
import ReviewForm from '../ReviewForm'

export default async function NewReviewPage() {
  const session = await getSession()

  return (
    <div>
      <AdminHeader title="Yeni Yorum" user={session!} />
      <div className="p-6">
        <ReviewForm />
      </div>
    </div>
  )
}

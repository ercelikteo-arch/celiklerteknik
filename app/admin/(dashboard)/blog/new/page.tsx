import { getSession } from '@/lib/auth'
import AdminHeader from '@/components/admin/AdminHeader'
import BlogForm from '../BlogForm'

export default async function NewBlogPage() {
  const session = await getSession()

  return (
    <div>
      <AdminHeader title="Yeni Blog Yazısı" user={session!} />
      <div className="p-6">
        <BlogForm authorId={session!.id} />
      </div>
    </div>
  )
}

import { notFound } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import BlogForm from '../BlogForm'

async function getBlog(id: string) {
  return prisma.blogPost.findUnique({
    where: { id }
  })
}

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const session = await getSession()
  const blog = await getBlog(params.id)

  if (!blog) {
    notFound()
  }

  return (
    <div>
      <AdminHeader title="Blog Düzenle" user={session!} />
      <div className="p-6">
        <BlogForm blog={blog} authorId={session!.id} />
      </div>
    </div>
  )
}

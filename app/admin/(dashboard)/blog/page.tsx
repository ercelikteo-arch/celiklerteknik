import Link from 'next/link'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash } from 'react-icons/fa'
import { formatDate } from '@/lib/utils'
import BlogActions from './BlogActions'

async function getBlogs() {
  return prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
    include: { author: { select: { name: true } } }
  })
}

export default async function BlogPage() {
  const session = await getSession()
  const blogs = await getBlogs()

  return (
    <div>
      <AdminHeader title="Blog Yönetimi" user={session!} />
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">{blogs.length} blog yazısı</p>
          <Link
            href="/admin/blog/new"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <FaPlus />
            <span>Yeni Yazı</span>
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Başlık</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kategori</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Yazar</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tarih</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Durum</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {blogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                      Henüz blog yazısı yok
                    </td>
                  </tr>
                ) : (
                  blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-800">{blog.title}</p>
                        <p className="text-sm text-gray-500">/blog/{blog.slug}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{blog.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{blog.author.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDate(blog.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        {blog.published ? (
                          <span className="flex items-center gap-1 text-green-600">
                            <FaEye size={12} />
                            <span className="text-sm">Yayında</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-gray-400">
                            <FaEyeSlash size={12} />
                            <span className="text-sm">Taslak</span>
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <BlogActions blogId={blog.id} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

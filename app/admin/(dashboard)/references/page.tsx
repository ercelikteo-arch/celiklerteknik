import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import AdminHeader from '@/components/admin/AdminHeader'
import ReferencesTable from './ReferencesTable'
import { FaPlus } from 'react-icons/fa'

async function getReferences() {
  return prisma.reference.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export default async function ReferencesPage() {
  const session = await getSession()
  const references = await getReferences()

  return (
    <div>
      <AdminHeader title="Referanslar" user={session!} />
      <div className="p-6">
        <div className="flex justify-end mb-4">
          <Link
            href="/admin/references/new"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <FaPlus />
            <span>Yeni Referans</span>
          </Link>
        </div>
        <ReferencesTable references={references} />
      </div>
    </div>
  )
}

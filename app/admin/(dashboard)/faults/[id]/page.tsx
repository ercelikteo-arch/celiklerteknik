import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import AdminHeader from '@/components/admin/AdminHeader'
import FaultDetail from './FaultDetail'

async function getFault(id: string) {
  return prisma.faultReport.findUnique({
    where: { id }
  })
}

export default async function FaultDetailPage({
  params
}: {
  params: { id: string }
}) {
  const session = await getSession()
  const fault = await getFault(params.id)

  if (!fault) {
    notFound()
  }

  return (
    <div>
      <AdminHeader title="Arıza Detayı" user={session!} />
      <div className="p-6">
        <FaultDetail fault={fault} />
      </div>
    </div>
  )
}

import { notFound } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import LeadDetail from './LeadDetail'

async function getLead(id: string) {
  return prisma.lead.findUnique({
    where: { id }
  })
}

export default async function LeadDetailPage({ params }: { params: { id: string } }) {
  const session = await getSession()
  const lead = await getLead(params.id)

  if (!lead) {
    notFound()
  }

  return (
    <div>
      <AdminHeader title="Teklif Detayı" user={session!} />
      <div className="p-6">
        <LeadDetail lead={lead} />
      </div>
    </div>
  )
}

import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import LeadsTable from './LeadsTable'

async function getLeads() {
  return prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export default async function LeadsPage() {
  const session = await getSession()
  const leads = await getLeads()

  return (
    <div>
      <AdminHeader title="Teklif Talepleri" user={session!} />
      <div className="p-6">
        <LeadsTable leads={leads} />
      </div>
    </div>
  )
}

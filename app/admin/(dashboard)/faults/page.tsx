import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import FaultsTable from './FaultsTable'

async function getFaults() {
  return prisma.faultReport.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export default async function FaultsPage() {
  const session = await getSession()
  const faults = await getFaults()

  return (
    <div>
      <AdminHeader title="Arıza Kayıtları" user={session!} />
      <div className="p-6">
        <FaultsTable faults={faults} />
      </div>
    </div>
  )
}

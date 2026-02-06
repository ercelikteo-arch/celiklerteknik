import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import AppointmentsTable from './AppointmentsTable'

async function getAppointments() {
  return prisma.appointment.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export default async function AppointmentsPage() {
  const session = await getSession()
  const appointments = await getAppointments()

  return (
    <div>
      <AdminHeader title="Keşif Randevuları" user={session!} />
      <div className="p-6">
        <AppointmentsTable appointments={appointments} />
      </div>
    </div>
  )
}

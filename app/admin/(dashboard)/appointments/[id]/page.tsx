import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import AdminHeader from '@/components/admin/AdminHeader'
import AppointmentDetail from './AppointmentDetail'

async function getAppointment(id: string) {
  return prisma.appointment.findUnique({
    where: { id }
  })
}

export default async function AppointmentDetailPage({
  params
}: {
  params: { id: string }
}) {
  const session = await getSession()
  const appointment = await getAppointment(params.id)

  if (!appointment) {
    notFound()
  }

  return (
    <div>
      <AdminHeader title="Randevu Detayı" user={session!} />
      <div className="p-6">
        <AppointmentDetail appointment={appointment} />
      </div>
    </div>
  )
}

import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import AdminHeader from '@/components/admin/AdminHeader'
import ReferenceForm from '../ReferenceForm'

async function getReference(id: string) {
  return prisma.reference.findUnique({
    where: { id }
  })
}

export default async function EditReferencePage({
  params
}: {
  params: { id: string }
}) {
  const session = await getSession()
  const reference = await getReference(params.id)

  if (!reference) {
    notFound()
  }

  return (
    <div>
      <AdminHeader title="Referans Düzenle" user={session!} />
      <div className="p-6">
        <ReferenceForm reference={reference} />
      </div>
    </div>
  )
}

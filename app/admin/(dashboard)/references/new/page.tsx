import { getSession } from '@/lib/auth'
import AdminHeader from '@/components/admin/AdminHeader'
import ReferenceForm from '../ReferenceForm'

export default async function NewReferencePage() {
  const session = await getSession()

  return (
    <div>
      <AdminHeader title="Yeni Referans" user={session!} />
      <div className="p-6">
        <ReferenceForm />
      </div>
    </div>
  )
}

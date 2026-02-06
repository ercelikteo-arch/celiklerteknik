import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import AdminHeader from '@/components/admin/AdminHeader'
import SettingsForm from './SettingsForm'

async function getSettings() {
  let settings = await prisma.siteSettings.findUnique({
    where: { id: 'main' }
  })

  if (!settings) {
    settings = await prisma.siteSettings.create({
      data: { id: 'main' }
    })
  }

  return settings
}

export default async function SettingsPage() {
  const session = await getSession()
  
  // Only admins can access settings
  if (session?.role !== 'ADMIN') {
    redirect('/admin')
  }

  const settings = await getSettings()

  return (
    <div>
      <AdminHeader title="Site Ayarları" user={session!} />
      <div className="p-6">
        <SettingsForm settings={settings} />
      </div>
    </div>
  )
}

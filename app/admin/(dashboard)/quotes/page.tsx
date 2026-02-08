import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import QuotesTable from './QuotesTable'

async function getQuotes() {
  return prisma.quote.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export default async function QuotesPage() {
  const session = await getSession()
  const quotes = await getQuotes()

  return (
    <div>
      <AdminHeader title="Teklif Talepleri" user={session!} />
      <div className="p-6">
        <QuotesTable quotes={quotes} />
      </div>
    </div>
  )
}

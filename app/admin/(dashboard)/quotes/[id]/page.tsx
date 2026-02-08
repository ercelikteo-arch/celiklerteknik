import { notFound } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import QuoteDetail from './QuoteDetail'

async function getQuote(id: string) {
  return prisma.quote.findUnique({
    where: { id }
  })
}

export default async function QuoteDetailPage({ params }: { params: { id: string } }) {
  const session = await getSession()
  const quote = await getQuote(params.id)

  if (!quote) {
    notFound()
  }

  return (
    <div>
      <AdminHeader title="Teklif Detayı" user={session!} />
      <div className="p-6">
        <QuoteDetail quote={quote} />
      </div>
    </div>
  )
}

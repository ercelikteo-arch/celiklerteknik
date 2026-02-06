import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import AdminHeader from '@/components/admin/AdminHeader'
import StatsCard from '@/components/admin/StatsCard'
import { FaFileAlt, FaCalendarAlt, FaExclamationTriangle, FaBlog, FaBox, FaStar } from 'react-icons/fa'
import Link from 'next/link'

async function getStats() {
  const [leads, appointments, faults, blogs, products, reviews] = await Promise.all([
    prisma.lead.count(),
    prisma.appointment.count(),
    prisma.faultReport.count(),
    prisma.blogPost.count(),
    prisma.product.count(),
    prisma.review.count(),
  ])

  const newLeads = await prisma.lead.count({
    where: { status: 'NEW' }
  })

  const pendingAppointments = await prisma.appointment.count({
    where: { status: 'PENDING' }
  })

  const pendingFaults = await prisma.faultReport.count({
    where: { status: 'PENDING' }
  })

  const recentLeads = await prisma.lead.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  })

  return {
    leads,
    appointments,
    faults,
    blogs,
    products,
    reviews,
    newLeads,
    pendingAppointments,
    pendingFaults,
    recentLeads
  }
}

export default async function AdminDashboard() {
  const session = await getSession()
  const stats = await getStats()

  return (
    <div>
      <AdminHeader title="Dashboard" user={session!} />
      
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <StatsCard
            title="Teklif Talepleri"
            value={stats.leads}
            icon={FaFileAlt}
            color="blue"
            change={stats.newLeads > 0 ? `+${stats.newLeads} yeni` : undefined}
          />
          <StatsCard
            title="Keşif Randevuları"
            value={stats.appointments}
            icon={FaCalendarAlt}
            color="green"
            change={stats.pendingAppointments > 0 ? `${stats.pendingAppointments} bekliyor` : undefined}
          />
          <StatsCard
            title="Arıza Kayıtları"
            value={stats.faults}
            icon={FaExclamationTriangle}
            color="yellow"
            change={stats.pendingFaults > 0 ? `${stats.pendingFaults} bekliyor` : undefined}
          />
          <StatsCard
            title="Blog Yazıları"
            value={stats.blogs}
            icon={FaBlog}
            color="purple"
          />
          <StatsCard
            title="Ürünler"
            value={stats.products}
            icon={FaBox}
            color="red"
          />
          <StatsCard
            title="Yorumlar"
            value={stats.reviews}
            icon={FaStar}
            color="yellow"
          />
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Leads */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Son Teklif Talepleri</h2>
              <Link href="/admin/leads" className="text-sm text-primary hover:underline">
                Tümünü Gör
              </Link>
            </div>
            <div className="space-y-4">
              {stats.recentLeads.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Henüz teklif talebi yok</p>
              ) : (
                stats.recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">{lead.name}</p>
                      <p className="text-sm text-gray-500">{lead.service} - {lead.district}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      lead.status === 'NEW' ? 'bg-blue-100 text-blue-800' :
                      lead.status === 'CONTACTED' ? 'bg-yellow-100 text-yellow-800' :
                      lead.status === 'QUOTED' ? 'bg-purple-100 text-purple-800' :
                      lead.status === 'CONVERTED' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {lead.status === 'NEW' ? 'Yeni' :
                       lead.status === 'CONTACTED' ? 'Arandı' :
                       lead.status === 'QUOTED' ? 'Teklif Verildi' :
                       lead.status === 'CONVERTED' ? 'İşe Döndü' : 'Kapandı'}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Hızlı İşlemler</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/admin/blog/new"
                className="p-4 bg-primary/10 rounded-lg text-center hover:bg-primary/20 transition-colors"
              >
                <FaBlog className="text-primary text-2xl mx-auto mb-2" />
                <span className="text-sm font-medium text-primary">Yeni Blog Yazısı</span>
              </Link>
              <Link
                href="/admin/products/new"
                className="p-4 bg-green-100 rounded-lg text-center hover:bg-green-200 transition-colors"
              >
                <FaBox className="text-green-600 text-2xl mx-auto mb-2" />
                <span className="text-sm font-medium text-green-600">Yeni Ürün</span>
              </Link>
              <Link
                href="/admin/references/new"
                className="p-4 bg-purple-100 rounded-lg text-center hover:bg-purple-200 transition-colors"
              >
                <FaFileAlt className="text-purple-600 text-2xl mx-auto mb-2" />
                <span className="text-sm font-medium text-purple-600">Yeni Referans</span>
              </Link>
              <Link
                href="/admin/reviews/new"
                className="p-4 bg-yellow-100 rounded-lg text-center hover:bg-yellow-200 transition-colors"
              >
                <FaStar className="text-yellow-600 text-2xl mx-auto mb-2" />
                <span className="text-sm font-medium text-yellow-600">Yeni Yorum</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

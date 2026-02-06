import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import AdminHeader from '@/components/admin/AdminHeader'
import ProductsTable from './ProductsTable'
import { FaPlus } from 'react-icons/fa'

async function getProducts() {
  return prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

export default async function ProductsPage() {
  const session = await getSession()
  const products = await getProducts()

  return (
    <div>
      <AdminHeader title="Ürünler" user={session!} />
      <div className="p-6">
        <div className="flex justify-end mb-4">
          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <FaPlus />
            <span>Yeni Ürün</span>
          </Link>
        </div>
        <ProductsTable products={products} />
      </div>
    </div>
  )
}

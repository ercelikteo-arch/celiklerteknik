import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import AdminHeader from '@/components/admin/AdminHeader'
import ProductForm from '../ProductForm'

async function getProduct(id: string) {
  return prisma.product.findUnique({
    where: { id }
  })
}

export default async function EditProductPage({
  params
}: {
  params: { id: string }
}) {
  const session = await getSession()
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div>
      <AdminHeader title="Ürün Düzenle" user={session!} />
      <div className="p-6">
        <ProductForm product={product} />
      </div>
    </div>
  )
}

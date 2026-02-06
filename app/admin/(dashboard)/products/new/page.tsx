import { getSession } from '@/lib/auth'
import AdminHeader from '@/components/admin/AdminHeader'
import ProductForm from '../ProductForm'

export default async function NewProductPage() {
  const session = await getSession()

  return (
    <div>
      <AdminHeader title="Yeni Ürün" user={session!} />
      <div className="p-6">
        <ProductForm />
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'
import { FaShoppingCart, FaStar, FaCheck, FaTimes } from 'react-icons/fa'
import Breadcrumb from '@/components/Breadcrumb'
import { prisma } from '@/lib/prisma'

export const revalidate = 3600 // ISR: 1 saat
export const dynamic = 'force-dynamic' // Build sırasında DB'ye bağlanma

export const metadata: Metadata = {
  title: 'Ürünler - Isıtma ve Tesisat Ürünleri | Çelikler Teknik',
  description: 'Isı pompası, kombi, radyatör, tesisat malzemeleri ve daha fazlası. Kaliteli ürünler, uygun fiyatlar.',
  keywords: ['ısı pompası satış', 'kombi fiyatları', 'tesisat malzemeleri', 'çanakkale'],
  alternates: {
    canonical: 'https://celiklerteknik.com/urunler',
  },
  openGraph: {
    title: 'Ürünler - Isıtma ve Tesisat Ürünleri | Çelikler Teknik',
    description: 'Kaliteli ısıtma ve tesisat ürünleri',
    url: 'https://celiklerteknik.com/urunler',
    type: 'website',
  },
}

async function getProducts() {
  return prisma.product.findMany({
    orderBy: [
      { featured: 'desc' },
      { createdAt: 'desc' },
    ],
  })
}

async function getCategories() {
  const products = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  })
  return products.map((p) => p.category)
}

export default async function UrunlerPage() {
  const products = await getProducts()
  const categories = await getCategories()

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[{ name: 'Ürünler', href: '/urunler' }]} />

      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Ürünlerimiz</h1>
          <p className="text-xl text-gray-200">
            Kaliteli ısıtma ve tesisat ürünleri
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-4 py-2 bg-primary text-white rounded-lg">Tümü</span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Henüz ürün bulunmuyor.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="card group overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    {product.images[0] ? (
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <FaShoppingCart className="text-gray-400 text-4xl" />
                      </div>
                    )}
                    {product.featured && (
                      <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <FaStar />
                        Öne Çıkan
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-primary mb-2 font-display group-hover:text-secondary transition-colors">
                    {product.name}
                  </h2>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    {product.price ? (
                      <span className="text-xl font-bold text-primary">
                        ₺{product.price.toLocaleString('tr-TR')}
                      </span>
                    ) : (
                      <span className="text-gray-500">Fiyat için arayın</span>
                    )}

                    {product.inStock ? (
                      <span className="flex items-center gap-1 text-green-600 text-sm">
                        <FaCheck />
                        Stokta
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-600 text-sm">
                        <FaTimes />
                        Tükendi
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 font-display">
            Ürün Hakkında Bilgi Almak İster misiniz?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ürünlerimiz hakkında detaylı bilgi ve fiyat teklifi için bize ulaşın
          </p>
          <Link href="/teklif-al" className="btn-primary inline-block">
            Teklif Al
          </Link>
        </div>
      </section>
    </div>
  )
}

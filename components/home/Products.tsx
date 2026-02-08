import Link from 'next/link'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'
import { prisma } from '@/lib/prisma'

async function getFeaturedProducts() {
  try {
    const products = await prisma.product.findMany({
      where: { featured: true, inStock: true },
      take: 4,
      orderBy: { createdAt: 'desc' }
    })
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

const Products = async () => {
  const products = await getFeaturedProducts()

  // Eğer DB'de ürün yoksa bölümü gösterme
  if (products.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Öne Çıkan Ürünler</h2>
          <p className="section-subtitle">
            Kaliteli ve güvenilir ısıtma sistemleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/urunler/${product.slug}`} className="card group hover:shadow-xl transition-shadow">
              <div className="bg-neutral h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {product.images && product.images.length > 0 ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <span className="text-gray-400">Ürün Görseli</span>
                )}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 font-display group-hover:text-secondary transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
              <div className="flex items-center justify-between">
                {product.price ? (
                  <span className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString('tr-TR')} TL
                  </span>
                ) : (
                  <span className="text-lg text-gray-500">Fiyat için arayın</span>
                )}
                <span className="bg-secondary text-white p-2 rounded-lg group-hover:bg-secondary-light transition-colors duration-300">
                  <FaShoppingCart size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/urunler"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            Tüm Ürünleri Gör
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products

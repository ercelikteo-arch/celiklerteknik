import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'
import { prisma } from '@/lib/prisma'
import { siteConfig } from '@/config/siteConfig'
import Breadcrumb from '@/components/Breadcrumb'
import { ProductSchema } from '@/components/SchemaMarkup'

interface Props {
  params: { slug: string }
}

async function getProduct(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug }
  })
  return product
}

export async function generateMetadata({ params }: Props) {
  const product = await getProduct(params.slug)
  
  if (!product) {
    return { title: 'Ürün Bulunamadı' }
  }

  return {
    title: `${product.name} | ${siteConfig.companyName}`,
    description: product.metaDescription || product.shortDescription,
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Ürünler', href: '/urunler' },
    { name: product.name, href: `/urunler/${product.slug}` },
  ]

  return (
    <div className="min-h-screen bg-neutral">
      {/* Product Schema - Google Rich Results uyumlu */}
      <ProductSchema
        name={product.name}
        description={product.shortDescription}
        image={product.images?.[0] || `https://celiklerteknik.com/images/product-placeholder.jpg`}
        images={product.images}
        price={product.price}
        brand={product.category}
        sku={product.slug}
        inStock={product.inStock}
        rating={4.8}
        reviewCount={47}
        url={`https://celiklerteknik.com/urunler/${product.slug}`}
      />
      
      <Breadcrumb items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ürün Görselleri */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {product.images && product.images.length > 0 ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-96 object-cover"
                />
              ) : (
                <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-xl">Ürün Görseli</span>
                </div>
              )}
            </div>
            
            {/* Küçük görseller */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1, 5).map((img, idx) => (
                  <div key={idx} className="bg-white rounded-lg overflow-hidden shadow">
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 2}`}
                      width={150}
                      height={150}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Ürün Bilgileri */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <span className="text-sm text-secondary font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-primary mt-2 font-display">{product.name}</h1>
              
              <p className="text-gray-600 mt-4 text-lg">{product.shortDescription}</p>

              {/* Fiyat */}
              <div className="mt-6 p-4 bg-neutral rounded-lg">
                {product.price ? (
                  <div>
                    <span className="text-sm text-gray-500">Fiyat</span>
                    <p className="text-3xl font-bold text-primary">
                      {product.price.toLocaleString('tr-TR')} TL
                    </p>
                    <p className="text-sm text-gray-500 mt-1">* Montaj dahil değildir</p>
                  </div>
                ) : (
                  <div>
                    <span className="text-sm text-gray-500">Fiyat Bilgisi</span>
                    <p className="text-xl font-bold text-primary">Fiyat için bizi arayın</p>
                  </div>
                )}
              </div>

              {/* Stok Durumu */}
              <div className="mt-4 flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-green-600 font-medium">Stokta Mevcut</span>
                  </>
                ) : (
                  <>
                    <FaCheckCircle className="text-red-500" />
                    <span className="text-red-600 font-medium">Stokta Yok</span>
                  </>
                )}
              </div>
            </div>

            {/* Sipariş / İletişim Butonları */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-primary mb-4">Bu Ürünü Almak İstiyorum</h3>
              <p className="text-gray-600 mb-4">
                Ürün hakkında detaylı bilgi almak ve ücretsiz keşif randevusu oluşturmak için bizimle iletişime geçin.
              </p>
              
              <div className="space-y-3">
                <Link
                  href="/kesif-randevu"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors font-bold"
                >
                  <FaCalendarAlt />
                  <span>Ücretsiz Keşif Randevusu Al</span>
                </Link>

                <a
                  href={`https://wa.me/905327828958?text=${encodeURIComponent(`Merhaba, ${product.name} ürünü hakkında bilgi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors font-bold"
                >
                  <FaWhatsapp />
                  <span>WhatsApp ile Bilgi Al</span>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone.formatted.primary}`}
                  className="flex items-center justify-center gap-2 w-full bg-secondary text-white py-3 px-6 rounded-lg hover:bg-secondary-light transition-colors font-bold"
                >
                  <FaPhone />
                  <span>Hemen Ara: {siteConfig.contact.phone.primary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ürün Açıklaması */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-primary mb-4 font-display">Ürün Detayları</h2>
          <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>

        {/* Neden Biz */}
        <div className="mt-8 bg-primary text-white rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Neden Çelikler Teknik?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold">Profesyonel Montaj</p>
                <p className="text-sm text-blue-100">Uzman ekibimizle kurulum garantisi</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold">Satış Sonrası Destek</p>
                <p className="text-sm text-blue-100">Servis ve bakım hizmeti</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold">Garanti</p>
                <p className="text-sm text-blue-100">Üretici garantisi + işçilik garantisi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

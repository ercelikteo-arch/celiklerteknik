import { Metadata } from 'next'
import Link from 'next/link'
import { FaCalendar, FaArrowRight, FaClock } from 'react-icons/fa'
import Breadcrumb from '@/components/Breadcrumb'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

export const revalidate = 3600 // ISR: 1 saat
export const dynamic = 'force-dynamic' // Build sırasında DB'ye bağlanma

export const metadata: Metadata = {
  title: 'Blog - Isıtma Sistemleri Rehberi',
  description: 'Isı pompası, kombi, doğalgaz tesisatı ve enerji tasarrufu hakkında uzman yazıları. Çanakkale\'de ısıtma sistemleri rehberi.',
  keywords: ['ısı pompası blog', 'kombi rehberi', 'doğalgaz bilgi', 'enerji tasarrufu'],
  alternates: {
    canonical: 'https://celiklerteknik.com/blog',
  },
  openGraph: {
    title: 'Blog - Isıtma Sistemleri Rehberi | Çelikler Teknik',
    description: 'Isı pompası, kombi, doğalgaz ve enerji tasarrufu hakkında uzman yazıları',
    url: 'https://celiklerteknik.com/blog',
    type: 'website',
  },
}

async function getBlogPosts() {
  return prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishDate: 'desc' },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      category: true,
      readingTime: true,
      publishDate: true,
    },
  })
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen">
      <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />
      
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Blog</h1>
          <p className="text-xl text-gray-200">
            Isıtma sistemleri ve enerji tasarrufu hakkında uzman yazıları
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Henüz blog yazısı bulunmuyor.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="card group hover:scale-105 overflow-hidden"
                >
                  <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                    {post.coverImage ? (
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Görsel yok</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="absolute bottom-3 right-3 flex items-center gap-1 text-white text-xs">
                      <FaClock size={10} />
                      {post.readingTime} dk okuma
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <FaCalendar />
                    <span>{post.publishDate ? formatDate(post.publishDate) : 'Tarih yok'}</span>
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-3 font-display group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-secondary font-medium">
                    <span>Devamını Oku</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* İlgili Hizmetler - Internal Linking */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6 font-display text-center">
            İlgili Hizmetlerimiz
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/hizmetler/isi-pompasi" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Isı Pompası Kurulumu
            </Link>
            <Link href="/hizmetler/kombi-servisi" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Kombi Servisi
            </Link>
            <Link href="/hizmetler/petek-temizleme" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
              Petek Temizleme
            </Link>
            <Link href="/teklif-al" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors">
              Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

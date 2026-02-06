import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FaCalendar, FaClock, FaArrowLeft, FaTag } from 'react-icons/fa'
import Breadcrumb from '@/components/Breadcrumb'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'

export const revalidate = 3600 // ISR: 1 saat
export const dynamic = 'force-dynamic' // Build sırasında DB'ye bağlanma

interface Props {
  params: { slug: string }
}

async function getBlogPost(slug: string) {
  return prisma.blogPost.findUnique({
    where: { slug, published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
}

async function getRelatedPosts(category: string, currentSlug: string) {
  return prisma.blogPost.findMany({
    where: {
      published: true,
      category,
      slug: { not: currentSlug },
    },
    take: 3,
    select: {
      title: true,
      slug: true,
      coverImage: true,
    },
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return { title: 'Yazı Bulunamadı' }
  }

  return {
    title: post.metaTitle || `${post.title} | Çelikler Teknik Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `https://celiklerteknik.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://celiklerteknik.com/blog/${post.slug}`,
      type: 'article',
      images: post.ogImage || post.coverImage ? [{ url: post.ogImage || post.coverImage! }] : [],
      publishedTime: post.publishDate?.toISOString(),
    },
  }
}

export async function generateStaticParams() {
  // Build sırasında DB'ye bağlanmayı atla, runtime'da dinamik olarak çalışsın
  if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
    return []
  }
  
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true },
    })
    return posts.map((post) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.category, post.slug)

  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage,
            datePublished: post.publishDate?.toISOString(),
            dateModified: post.updatedAt.toISOString(),
            author: {
              '@type': 'Person',
              name: post.author.name,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Çelikler Teknik',
              url: 'https://celiklerteknik.com',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://celiklerteknik.com/blog/${post.slug}`,
            },
          }),
        }}
      />

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary mb-6"
            >
              <FaArrowLeft />
              <span>Tüm Yazılar</span>
            </Link>

            {/* Header */}
            <header className="mb-8">
              <span className="inline-block bg-secondary text-white text-sm px-4 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-display">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                  <FaCalendar />
                  <span>{post.publishDate ? formatDate(post.publishDate) : 'Tarih yok'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>{post.readingTime} dk okuma</span>
                </div>
                <span>Yazar: {post.author.name}</span>
              </div>
            </header>

            {/* Cover Image */}
            {post.coverImage && (
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-8 pt-8 border-t">
                <FaTag className="text-gray-400" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="bg-primary text-white rounded-xl p-8 text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 font-display">
                Profesyonel Hizmet İçin Bize Ulaşın
              </h2>
              <p className="mb-6 text-blue-100">
                Isıtma ve tesisat ihtiyaçlarınız için ücretsiz keşif ve teklif alın
              </p>
              <Link
                href="/teklif-al"
                className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors"
              >
                Ücretsiz Teklif Al
              </Link>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6 font-display">
                  İlgili Yazılar
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group"
                    >
                      <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                        {related.coverImage ? (
                          <img
                            src={related.coverImage}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200" />
                        )}
                      </div>
                      <h3 className="font-medium text-gray-800 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}

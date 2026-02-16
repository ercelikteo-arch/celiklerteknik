import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FaCalendar, FaClock, FaArrowLeft, FaTag } from 'react-icons/fa'
import Breadcrumb from '@/components/Breadcrumb'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'
import BlogCTA from '@/components/BlogCTA'

export const revalidate = 3600 // ISR: 1 saat
export const dynamic = 'force-dynamic' // Build sırasında DB'ye bağlanma

// Kategori bazlı FAQ'lar
const categoryFAQs: Record<string, { question: string; answer: string }[]> = {
  'Isı Pompası': [
    { question: 'Isı pompası ne kadar enerji tasarrufu sağlar?', answer: 'Isı pompası, geleneksel ısıtma sistemlerine göre %50-70 oranında enerji tasarrufu sağlar. COP değeri 4-5 olan bir ısı pompası, 1 kW elektrik ile 4-5 kW ısı enerjisi üretir.' },
    { question: 'Isı pompası soğuk havalarda çalışır mı?', answer: 'Modern ısı pompaları -25°C\'ye kadar verimli çalışabilir. Çanakkale iklimi için hava kaynaklı ısı pompaları idealdir ve kış aylarında bile yüksek verimle çalışır.' },
    { question: 'Isı pompası kurulum maliyeti ne kadar?', answer: 'Isı pompası kurulum maliyeti evin büyüklüğüne, yalıtım durumuna ve seçilen markaya göre değişir. Ortalama 4-6 yılda kendini amorti eder. Ücretsiz keşif için bizi arayabilirsiniz.' },
  ],
  'Kombi': [
    { question: 'Kombi bakımı ne sıklıkla yapılmalı?', answer: 'Kombi bakımı yılda en az bir kez, tercihen kış sezonu öncesinde yapılmalıdır. Düzenli bakım, kombinin ömrünü uzatır ve %15-20 enerji tasarrufu sağlar.' },
    { question: 'Kombi arızası nasıl anlaşılır?', answer: 'Kombinin hata kodu vermesi, su basıncının düşmesi, radyatörlerin ısınmaması veya anormal sesler çıkarması arıza belirtileridir. Bu durumda yetkili servisi aramanız önerilir.' },
    { question: 'Yoğuşmalı kombi mi yoksa konvansiyonel kombi mi tercih etmeliyim?', answer: 'Yoğuşmalı kombiler %15-20 daha verimlidir ve uzun vadede daha ekonomiktir. Yeni binalarda yoğuşmalı kombi zorunludur. Mevcut sistemlerde de yoğuşmalı kombiye geçiş önerilir.' },
  ],
  'Doğalgaz': [
    { question: 'Doğalgaz tesisatı ne kadar sürede yapılır?', answer: 'Standart bir daire için doğalgaz tesisatı 1-2 gün içinde tamamlanır. Proje onayı ve sayaç montajı dahil toplam süre 1-2 hafta olabilir.' },
    { question: 'Doğalgaz tesisatı güvenli mi?', answer: 'Yetkili firmalar tarafından yapılan doğalgaz tesisatı tamamen güvenlidir. Tesisat, basınç testi ve kaçak kontrolünden geçirilir. Yıllık periyodik kontroller zorunludur.' },
    { question: 'Doğalgaz aboneliği nasıl açılır?', answer: 'Doğalgaz aboneliği için önce yetkili bir firmaya tesisat yaptırmanız, ardından gaz dağıtım şirketine başvurmanız gerekir. Biz tüm süreci sizin adınıza takip ediyoruz.' },
  ],
  'Güneş Enerjisi': [
    { question: 'Güneş enerjisi sistemi kaç yılda kendini amorti eder?', answer: 'Güneş enerjisi sistemi ortalama 3-5 yılda kendini amorti eder. Elektrik fiyatlarındaki artışla bu süre daha da kısalabilir. Sistemin ömrü 25-30 yıldır.' },
    { question: 'Güneş panelleri kışın çalışır mı?', answer: 'Evet, güneş panelleri kışın da çalışır. Verim yaz aylarına göre düşük olsa da, bulutlu havalarda bile enerji üretimi devam eder.' },
    { question: 'Güneş enerjisi sistemi bakım gerektirir mi?', answer: 'Güneş enerjisi sistemleri minimum bakım gerektirir. Yılda 1-2 kez panel temizliği ve sistem kontrolü yeterlidir. Hareketli parça olmadığı için arıza riski düşüktür.' },
  ],
  'Petek Temizleme': [
    { question: 'Petek temizliği ne sıklıkla yapılmalı?', answer: 'Petek temizliği 2-3 yılda bir yapılmalıdır. Peteklerin alt kısmı soğuk kalıyorsa veya ısınma süresi uzadıysa temizlik zamanı gelmiş demektir.' },
    { question: 'Petek temizliği nasıl yapılır?', answer: 'Profesyonel petek temizliği, özel kimyasallar ve basınçlı su ile yapılır. Sistem tamamen boşaltılır, temizlenir ve tekrar doldurulur. İşlem 2-4 saat sürer.' },
    { question: 'Petek temizliği ne kadar tasarruf sağlar?', answer: 'Temiz petekler %20-30 daha verimli çalışır. Bu da aylık doğalgaz faturanızda önemli bir tasarruf anlamına gelir.' },
  ],
  'Yerden Isıtma': [
    { question: 'Yerden ısıtma mı petek mi daha ekonomik?', answer: 'Yerden ısıtma, düşük su sıcaklığında çalıştığı için %20-30 daha ekonomiktir. Özellikle ısı pompası ile kullanıldığında tasarruf %50\'ye çıkabilir.' },
    { question: 'Yerden ısıtma sistemi ne kadar sürede ısıtır?', answer: 'Yerden ısıtma sistemi yavaş ısınır ancak ısıyı uzun süre korur. İlk ısınma 2-4 saat sürebilir, ancak sürekli kullanımda konfor maksimum seviyededir.' },
    { question: 'Mevcut eve yerden ısıtma yapılabilir mi?', answer: 'Evet, mevcut evlere de yerden ısıtma yapılabilir. Ancak zemin yüksekliği 6-8 cm artacağından kapı ve merdiven ayarlamaları gerekebilir.' },
  ],
  'default': [
    { question: 'Çelikler Teknik hangi bölgelere hizmet veriyor?', answer: 'Çelikler Teknik, Çanakkale merkez ve tüm ilçelerine (Biga, Gelibolu, Ezine, Lapseki, Çan, Ayvacık, Bayramiç) hizmet vermektedir.' },
    { question: 'Ücretsiz keşif hizmeti var mı?', answer: 'Evet, tüm hizmetlerimiz için ücretsiz keşif ve fiyat teklifi sunuyoruz. Keşif randevusu için 0286 566 1055 numarasını arayabilirsiniz.' },
    { question: 'Garanti süresi ne kadar?', answer: 'Tüm işçilik ve montaj hizmetlerimiz 2 yıl garantilidir. Ürün garantileri marka ve modele göre 2-5 yıl arasında değişmektedir.' },
  ],
}

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
  
  // Kategori bazlı FAQ'ları al
  const faqs = categoryFAQs[post.category] || categoryFAQs['default']

  return (
    <div className="min-h-screen">
      <Breadcrumb
        items={[
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* BlogPosting JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage || 'https://celiklerteknik.com/images/og-image.jpg',
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
              logo: {
                '@type': 'ImageObject',
                url: 'https://celiklerteknik.com/images/logo.png'
              }
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://celiklerteknik.com/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
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

            {/* Blog CTA */}
            <BlogCTA topic={post.category} />

            {/* FAQ Bölümü */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6 font-display">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="bg-white rounded-lg p-4 shadow-sm">
                    <summary className="font-semibold text-primary cursor-pointer hover:text-secondary">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-gray-600 pl-4 border-l-2 border-secondary">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

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

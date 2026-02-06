import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { longtailPages } from '@/data/seoData'
import { siteConfig } from '@/config/siteConfig'
import Breadcrumb from '@/components/Breadcrumb'
import { BlogPostingSchema, FAQSchema } from '@/components/SchemaMarkup'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return longtailPages.map(page => ({
    slug: page.slug
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = longtailPages.find(p => p.slug === params.slug)
  if (!page) return {}
  
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `https://celiklerteknik.com/rehber/${params.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://celiklerteknik.com/rehber/${params.slug}`,
      type: 'article',
    },
  }
}

export default function LongtailSeoPage({ params }: PageProps) {
  const page = longtailPages.find(p => p.slug === params.slug)
  
  if (!page) {
    notFound()
  }
  
  return (
    <>
      <BlogPostingSchema
        title={page.title}
        description={page.description}
        datePublished="2024-01-15"
        image="https://celiklerteknik.com/images/og-image.jpg"
        url={`https://celiklerteknik.com/rehber/${params.slug}`}
      />
      
      <Breadcrumb items={[
        { name: 'Rehber', href: '/blog' },
        { name: page.title, href: `/rehber/${params.slug}` },
      ]} />
      
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            {page.title}
          </h1>
          <p className="text-gray-200">{page.description}</p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article 
                className="prose prose-lg max-w-none bg-white rounded-xl p-8 shadow"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
              
              {/* CTA */}
              <div className="mt-8 bg-gradient-to-r from-primary to-blue-700 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Profesyonel Destek Alın</h3>
                <p className="mb-6">
                  Sorununuzu çözemiyorsanız uzman ekibimiz size yardımcı olsun.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`tel:${siteConfig.contact.phone.formatted.secondary}`}
                    className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <FaPhone />
                    Hemen Ara
                  </a>
                  <Link
                    href="/teklif-al"
                    className="inline-flex items-center gap-2 bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-400 transition-all"
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-4">İlgili Konular</h3>
                <ul className="space-y-3">
                  {longtailPages.filter(p => p.slug !== params.slug).slice(0, 5).map(p => (
                    <li key={p.slug}>
                      <Link
                        href={`/rehber/${p.slug}`}
                        className="text-gray-700 hover:text-primary transition-colors"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-bold text-primary mb-3">Hizmetlerimiz</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/hizmetler/kombi-servisi" className="text-gray-600 hover:text-primary">
                        Kombi Servisi
                      </Link>
                    </li>
                    <li>
                      <Link href="/hizmetler/petek-temizleme" className="text-gray-600 hover:text-primary">
                        Petek Temizleme
                      </Link>
                    </li>
                    <li>
                      <Link href="/hizmetler/isi-pompasi" className="text-gray-600 hover:text-primary">
                        Isı Pompası
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

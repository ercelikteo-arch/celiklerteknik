import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaPhone, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import { districts, services, generateProgrammaticContent } from '@/data/seoData'
import { siteConfig } from '@/config/siteConfig'
import Breadcrumb from '@/components/Breadcrumb'
import { ServiceSchema, FAQSchema } from '@/components/SchemaMarkup'

interface PageProps {
  params: { slug: string }
}

function parseSlug(slug: string) {
  for (const district of districts) {
    for (const service of services) {
      if (slug === `${district.slug}-${service.slug}`) {
        return { district, service }
      }
    }
  }
  return null
}

export async function generateStaticParams() {
  const params: { slug: string }[] = []
  
  districts.forEach(district => {
    services.forEach(service => {
      params.push({
        slug: `${district.slug}-${service.slug}`
      })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const parsed = parseSlug(params.slug)
  if (!parsed) return {}
  
  const { district, service } = parsed
  const content = generateProgrammaticContent(district, service)
  
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: [...service.keywords, district.name, 'Çanakkale'],
    alternates: {
      canonical: `https://celiklerteknik.com/hizmet/${params.slug}`,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://celiklerteknik.com/hizmet/${params.slug}`,
      type: 'website',
    },
  }
}

export default function ProgrammaticSeoPage({ params }: PageProps) {
  const parsed = parseSlug(params.slug)
  
  if (!parsed) {
    notFound()
  }
  
  const { district, service } = parsed
  const content = generateProgrammaticContent(district, service)
  
  return (
    <>
      <ServiceSchema 
        name={`${district.name} ${service.name}`}
        description={content.metaDescription}
        url={`https://celiklerteknik.com/hizmet/${params.slug}`}
      />
      <FAQSchema faqs={content.faqs} />
      
      <Breadcrumb items={[
        { name: 'Hizmetler', href: '/hizmetler' },
        { name: service.name, href: `/hizmetler/${service.slug}` },
        { name: district.name, href: `/ilceler/${district.slug}` },
      ]} />
      
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            {content.h1}
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            {district.name} bölgesinde profesyonel {service.name.toLowerCase()} hizmeti
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${siteConfig.contact.phone.formatted.secondary}`}
              className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all"
            >
              <FaPhone />
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.formatted.replace('+', '')}`}
              className="inline-flex items-center gap-2 bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-primary mb-6 font-display">
                  Sık Sorulan Sorular
                </h2>
                <div className="space-y-4">
                  {content.faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-bold text-primary mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-primary text-white rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Ücretsiz Teklif Alın</h3>
                <p className="text-gray-200 mb-6">
                  {district.name} bölgesinde {service.name.toLowerCase()} için hemen arayın!
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${siteConfig.contact.phone.formatted.secondary}`}
                    className="flex items-center justify-center gap-2 bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all w-full"
                  >
                    <FaPhone />
                    {siteConfig.contact.phone.secondary}
                  </a>
                  <Link
                    href="/teklif-al"
                    className="flex items-center justify-center gap-2 bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-400 transition-all w-full"
                  >
                    Online Teklif Al
                  </Link>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="font-bold mb-3">Avantajlarımız</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      Aynı gün servis
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      Garantili işçilik
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      Ücretsiz keşif
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      7/24 acil servis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6 font-display">
            {district.name}'de Diğer Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.filter(s => s.slug !== service.slug).slice(0, 4).map(s => (
              <Link
                key={s.slug}
                href={`/hizmet/${district.slug}-${s.slug}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
              >
                <span className="text-primary font-medium">{s.shortName}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

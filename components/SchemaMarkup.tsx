'use client'

import { siteConfig } from '@/config/siteConfig'

const SITE_URL = 'https://celiklerteknik.com'
const COMPANY_NAME = 'Çelikler Teknik'

// LocalBusiness Schema
export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    image: `${SITE_URL}/images/logo.png`,
    url: SITE_URL,
    telephone: siteConfig.contact.phone.primary,
    email: siteConfig.contact.email,
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Küçük Sanayi Sitesi 7. Sokak No:4',
        addressLocality: 'Gelibolu',
        addressRegion: 'Çanakkale',
        postalCode: '17500',
        addressCountry: 'TR'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Çardak E90 Karayolu Üzeri',
        addressLocality: 'Lapseki',
        addressRegion: 'Çanakkale',
        postalCode: '17800',
        addressCountry: 'TR'
      }
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4097,
      longitude: 26.6722
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:30',
        closes: '19:00'
      }
    ],
    priceRange: '₺₺',
    areaServed: {
      '@type': 'State',
      name: 'Çanakkale'
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 40.1553,
        longitude: 26.4142
      },
      geoRadius: '100000'
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Service Schema
export const ServiceSchema = ({ 
  name, 
  description, 
  url 
}: { 
  name: string
  description: string
  url: string 
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      '@id': `${SITE_URL}/#organization`
    },
    areaServed: {
      '@type': 'State',
      name: 'Çanakkale'
    },
    serviceType: name
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// BlogPosting Schema
export const BlogPostingSchema = ({
  title,
  description,
  datePublished,
  image,
  url
}: {
  title: string
  description: string
  datePublished: string
  image: string
  url: string
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    url,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: SITE_URL
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQPage Schema
export const FAQSchema = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const schema = {
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
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Review Schema
export const ReviewSchema = ({
  reviews
}: {
  reviews: { author: string; rating: number; text: string; date: string }[]
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5
      },
      reviewBody: review.text,
      datePublished: review.date
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// BreadcrumbList Schema
export const BreadcrumbSchema = ({ 
  items 
}: { 
  items: { name: string; url: string }[] 
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Product Schema
export const ProductSchema = ({
  name,
  description,
  image,
  price,
  brand
}: {
  name: string
  description: string
  image: string
  price: string
  brand: string
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: COMPANY_NAME
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

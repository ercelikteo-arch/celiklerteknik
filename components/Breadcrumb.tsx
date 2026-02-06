import Link from 'next/link'
import { FaHome, FaChevronRight } from 'react-icons/fa'
import { BreadcrumbSchema } from './SchemaMarkup'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const schemaItems = items.map(item => ({
    name: item.name,
    url: `https://celiklerteknik.com${item.href}`
  }))

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center flex-wrap gap-2 text-sm">
            <li>
              <Link 
                href="/" 
                className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors"
              >
                <FaHome size={14} />
                <span>Ana Sayfa</span>
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaChevronRight size={10} className="text-gray-400" />
                {index === items.length - 1 ? (
                  <span className="text-primary font-medium">{item.name}</span>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}

export default Breadcrumb

import Link from 'next/link'
import { FaHome, FaPhone, FaSearch } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 font-display">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-600 mb-8">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-all"
          >
            <FaHome />
            Ana Sayfa
          </Link>
          <a
            href={`tel:${siteConfig.contact.phone.formatted.secondary}`}
            className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-400 transition-all"
          >
            <FaPhone />
            Bizi Arayın
          </a>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-bold text-primary mb-4">Popüler Sayfalar</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Link href="/hizmetler" className="text-gray-600 hover:text-primary">Hizmetlerimiz</Link>
            <Link href="/teklif-al" className="text-gray-600 hover:text-primary">Teklif Al</Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-primary">İletişim</Link>
            <Link href="/hizmetler/isi-pompasi" className="text-gray-600 hover:text-primary">Isı Pompası</Link>
            <Link href="/hizmetler/kombi-servisi" className="text-gray-600 hover:text-primary">Kombi Servisi</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

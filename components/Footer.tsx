import Link from 'next/link'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Firma Bilgileri */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt={siteConfig.companyName}
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Çanakkale genelinde profesyonel yapı ve ısıtma çözümleri sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.facebook} className="text-white hover:text-secondary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href={siteConfig.social.instagram} className="text-white hover:text-secondary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href={siteConfig.social.twitter} className="text-white hover:text-secondary transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><Link href="/hizmetler" className="text-gray-300 hover:text-secondary transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/urunler" className="text-gray-300 hover:text-secondary transition-colors">Ürünler</Link></li>
              <li><Link href="/referanslar" className="text-gray-300 hover:text-secondary transition-colors">Referanslar</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link href="/sss" className="text-gray-300 hover:text-secondary transition-colors">SSS</Link></li>
              <li><Link href="/garanti-ve-servis-politikasi" className="text-gray-300 hover:text-secondary transition-colors">Garanti & Servis</Link></li>
              <li><Link href="/kesif-randevu" className="text-gray-300 hover:text-secondary transition-colors">Keşif Randevu</Link></li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li><Link href="/hizmetler/dogalgaz-tesisati" className="text-gray-300 hover:text-secondary transition-colors">Doğalgaz Tesisatı</Link></li>
              <li><Link href="/hizmetler/kombi-servisi" className="text-gray-300 hover:text-secondary transition-colors">Kombi Servisi</Link></li>
              <li><Link href="/hizmetler/isi-pompasi" className="text-gray-300 hover:text-secondary transition-colors">Isı Pompası</Link></li>
              <li><Link href="/hizmetler/gunes-enerjisi" className="text-gray-300 hover:text-secondary transition-colors">Güneş Enerjisi</Link></li>
              <li><Link href="/hizmetler/su-tesisati" className="text-gray-300 hover:text-secondary transition-colors">Su Tesisatı</Link></li>
            </ul>
          </div>

          {/* İlçeler */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">Hizmet Bölgeleri</h3>
            <ul className="space-y-2">
              <li><Link href="/ilceler/canakkale-merkez" className="text-gray-300 hover:text-secondary transition-colors">Merkez</Link></li>
              <li><Link href="/ilceler/biga" className="text-gray-300 hover:text-secondary transition-colors">Biga</Link></li>
              <li><Link href="/ilceler/gelibolu" className="text-gray-300 hover:text-secondary transition-colors">Gelibolu</Link></li>
              <li><Link href="/ilceler/ezine" className="text-gray-300 hover:text-secondary transition-colors">Ezine</Link></li>
              <li><Link href="/ilceler/lapseki" className="text-gray-300 hover:text-secondary transition-colors">Lapseki</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-display">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-semibold">{siteConfig.contact.addresses.gelibolu.name}</p>
                  <span className="text-gray-300 text-sm">{siteConfig.contact.addresses.gelibolu.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-semibold">{siteConfig.contact.addresses.lapseki.name}</p>
                  <span className="text-gray-300 text-sm">{siteConfig.contact.addresses.lapseki.address}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-secondary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${siteConfig.contact.phone.formatted.primary}`} className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    {siteConfig.contact.phone.primary}
                  </a>
                  <a href={`tel:${siteConfig.contact.phone.formatted.secondary}`} className="text-gray-300 hover:text-secondary transition-colors text-sm">
                    {siteConfig.contact.phone.secondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Anahtar Kelime Bloğu */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center text-gray-500 text-sm mb-6">
            <p className="mb-2">
              <Link href="/hizmetler/dogalgaz-tesisati" className="hover:text-secondary">Çanakkale Tesisatçı</Link> | 
              <Link href="/hizmetler/kombi-servisi" className="hover:text-secondary"> Kombi Servisi</Link> | 
              <Link href="/hizmetler/isi-pompasi" className="hover:text-secondary"> Isı Pompası</Link> | 
              <Link href="/hizmetler/dogalgaz-tesisati" className="hover:text-secondary"> Doğalgaz Tesisatı</Link> | 
              <Link href="/hizmetler/petek-temizleme" className="hover:text-secondary"> Petek Temizleme</Link> | 
              <Link href="/hizmetler/gunes-enerjisi" className="hover:text-secondary"> Güneş Enerjisi</Link>
            </p>
            <p>
              <Link href="/ilceler/canakkale-merkez" className="hover:text-secondary">Merkez Tesisatçı</Link> | 
              <Link href="/ilceler/biga" className="hover:text-secondary"> Biga Tesisatçı</Link> | 
              <Link href="/ilceler/gelibolu" className="hover:text-secondary"> Gelibolu Tesisatçı</Link> | 
              <Link href="/ilceler/ezine" className="hover:text-secondary"> Ezine Tesisatçı</Link> | 
              <Link href="/ilceler/lapseki" className="hover:text-secondary"> Lapseki Tesisatçı</Link> | 
              <Link href="/ilceler/can" className="hover:text-secondary"> Çan Tesisatçı</Link>
            </p>
          </div>
          <p className="text-center text-gray-400">&copy; 2026 {siteConfig.companyName}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

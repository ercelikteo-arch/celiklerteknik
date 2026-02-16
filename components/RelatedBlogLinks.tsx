import Link from 'next/link'

interface RelatedBlogLinksProps {
  service: string
}

const serviceBlogs: Record<string, { title: string; href: string }[]> = {
  'isi-pompasi': [
    { title: 'Kombi mi Isı Pompası mı?', href: '/kombi-mi-isi-pompasi-mi' },
    { title: 'Müstakil Ev İçin Isı Pompası', href: '/mustakil-ev-isi-pompasi' },
    { title: 'Villa İçin Isınma Sistemi Seçimi', href: '/villa-icin-isinma-sistemi-secimi' },
  ],
  'kombi-servisi': [
    { title: 'Kombi mi Isı Pompası mı?', href: '/kombi-mi-isi-pompasi-mi' },
    { title: 'Yerden Isıtma mı Petek mi?', href: '/yerden-isitma-mi-petek-mi' },
    { title: 'Yazlıkta Kışın Donma Önleme', href: '/yazlikta-kisin-donma-onleme' },
  ],
  'dogalgaz-tesisati': [
    { title: 'Kombi mi Isı Pompası mı?', href: '/kombi-mi-isi-pompasi-mi' },
    { title: 'Yerden Isıtma mı Petek mi?', href: '/yerden-isitma-mi-petek-mi' },
    { title: 'Villa İçin Isınma Sistemi Seçimi', href: '/villa-icin-isinma-sistemi-secimi' },
  ],
  'gunes-enerjisi': [
    { title: 'Güneş Enerjisi mi Şofben mi?', href: '/gunes-enerjisi-mi-sofben-mi' },
    { title: 'Villa İçin Isınma Sistemi Seçimi', href: '/villa-icin-isinma-sistemi-secimi' },
    { title: 'Yazlıkta Kışın Donma Önleme', href: '/yazlikta-kisin-donma-onleme' },
  ],
  'petek-temizleme': [
    { title: 'Yerden Isıtma mı Petek mi?', href: '/yerden-isitma-mi-petek-mi' },
    { title: 'Kombi mi Isı Pompası mı?', href: '/kombi-mi-isi-pompasi-mi' },
    { title: 'Yazlıkta Kışın Donma Önleme', href: '/yazlikta-kisin-donma-onleme' },
  ],
  'yerden-isitma': [
    { title: 'Yerden Isıtma mı Petek mi?', href: '/yerden-isitma-mi-petek-mi' },
    { title: 'Kombi mi Isı Pompası mı?', href: '/kombi-mi-isi-pompasi-mi' },
    { title: 'Müstakil Ev İçin Isı Pompası', href: '/mustakil-ev-isi-pompasi' },
  ],
  'su-tesisati': [
    { title: 'Yazlıkta Kışın Donma Önleme', href: '/yazlikta-kisin-donma-onleme' },
    { title: 'Villa İçin Isınma Sistemi Seçimi', href: '/villa-icin-isinma-sistemi-secimi' },
    { title: 'Güneş Enerjisi mi Şofben mi?', href: '/gunes-enerjisi-mi-sofben-mi' },
  ],
  'bakim-onarim': [
    { title: 'Kombi mi Isı Pompası mı?', href: '/kombi-mi-isi-pompasi-mi' },
    { title: 'Yerden Isıtma mı Petek mi?', href: '/yerden-isitma-mi-petek-mi' },
    { title: 'Yazlıkta Kışın Donma Önleme', href: '/yazlikta-kisin-donma-onleme' },
  ],
}

export default function RelatedBlogLinks({ service }: RelatedBlogLinksProps) {
  const blogs = serviceBlogs[service] || serviceBlogs['bakim-onarim']

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-xl">
      <h3 className="text-xl font-bold text-primary mb-4 font-display">İlgili Blog Yazıları</h3>
      <div className="flex flex-wrap gap-3">
        {blogs.map((blog, index) => (
          <Link 
            key={index}
            href={blog.href} 
            className="text-secondary hover:underline flex items-center gap-1"
          >
            → {blog.title}
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <Link href="/blog" className="text-primary hover:text-secondary font-medium">
          Tüm blog yazılarını görüntüle →
        </Link>
      </div>
    </div>
  )
}

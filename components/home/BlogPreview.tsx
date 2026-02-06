import Link from 'next/link'
import { FaCalendar, FaArrowRight } from 'react-icons/fa'

const blogPosts = [
  {
    title: 'Isı Pompası Nedir? Nasıl Çalışır?',
    excerpt: 'Isı pompası sistemleri, enerji tasarrufu sağlayan modern ısıtma çözümlerinin başında gelir...',
    date: '15 Ocak 2024',
    slug: 'isi-pompasi-nedir',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
  },
  {
    title: 'Kombi mi Isı Pompası mı Daha Avantajlı?',
    excerpt: 'Eviniz için en uygun ısıtma sistemini seçerken dikkat etmeniz gereken faktörler...',
    date: '10 Ocak 2024',
    slug: 'kombi-mi-isi-pompasi-mi',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=250&fit=crop',
  },
  {
    title: 'Doğalgaz Tesisatı Yaptırırken Nelere Dikkat Edilmeli',
    excerpt: 'Güvenli ve verimli bir doğalgaz tesisatı için mutlaka bilinmesi gerekenler...',
    date: '5 Ocak 2024',
    slug: 'dogalgaz-tesisati-dikkat-edilmesi-gerekenler',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop',
  },
]

const BlogPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">
            Isıtma sistemleri hakkında faydalı bilgiler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} className="card group hover:scale-105 overflow-hidden">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <FaCalendar />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2 font-display group-hover:text-secondary transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-secondary font-medium">
                <span>Devamını Oku</span>
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            Tüm Yazıları Gör
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview

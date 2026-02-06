import Link from 'next/link'

const references = [
  { 
    title: 'Villa Isı Pompası Kurulumu', 
    location: 'Çanakkale Merkez',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  { 
    title: 'Apartman Doğalgaz Tesisatı', 
    location: 'Biga',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop'
  },
  { 
    title: 'Güneş Enerjisi Sistemi', 
    location: 'Gelibolu',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop'
  },
  { 
    title: 'Kombi Montajı ve Petek Sistemi', 
    location: 'Ayvacık',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop'
  },
  { 
    title: 'Yerden Isıtma Sistemi', 
    location: 'Çan',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop'
  },
  { 
    title: 'Endüstriyel Tesisat Projesi', 
    location: 'Lapseki',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
  },
]

const References = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Referanslarımız</h2>
          <p className="section-subtitle">
            Çanakkale genelinde tamamladığımız başarılı projeler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={ref.image} 
                  alt={ref.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white text-sm font-medium">{ref.location}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 font-display">
                {ref.title}
              </h3>
              <p className="text-gray-600">{ref.location}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/referanslar"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            Tüm Referansları Gör
          </Link>
        </div>
      </div>
    </section>
  )
}

export default References

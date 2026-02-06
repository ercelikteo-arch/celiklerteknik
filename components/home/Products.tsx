import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

const products = [
  {
    name: 'Vaillant ecoTEC Plus Kombi',
    description: 'Yoğuşmalı kombi, yüksek verim',
    price: '15.500 TL',
    image: '/images/products/kombi-1.jpg',
  },
  {
    name: 'Daikin Altherma Isı Pompası',
    description: 'Enerji tasarruflu ısıtma sistemi',
    price: '85.000 TL',
    image: '/images/products/isi-pompasi-1.jpg',
  },
  {
    name: 'Viessmann Vitosol Güneş Paneli',
    description: 'Yüksek verimli güneş kolektörü',
    price: '12.000 TL',
    image: '/images/products/gunes-panel-1.jpg',
  },
  {
    name: 'Buderus Logamax Plus Kombi',
    description: 'Sessiz çalışma, uzun ömür',
    price: '18.500 TL',
    image: '/images/products/kombi-2.jpg',
  },
]

const Products = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Öne Çıkan Ürünler</h2>
          <p className="section-subtitle">
            Kaliteli ve güvenilir ısıtma sistemleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="card group">
              <div className="bg-neutral h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Ürün Görseli</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2 font-display">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <button className="bg-secondary text-white p-2 rounded-lg hover:bg-secondary-light transition-colors duration-300">
                  <FaShoppingCart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/urunler"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-all duration-300"
          >
            Tüm Ürünleri Gör
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products

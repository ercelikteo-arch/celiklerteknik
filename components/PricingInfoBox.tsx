import Link from 'next/link'
import { FaInfoCircle } from 'react-icons/fa'

interface PricingInfoBoxProps {
  service: string
  factors: string[]
}

export default function PricingInfoBox({ service, factors }: PricingInfoBoxProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
      <div className="flex items-start gap-3 mb-4">
        <FaInfoCircle className="text-blue-500 text-xl flex-shrink-0 mt-1" />
        <h3 className="text-xl font-bold text-primary">
          {service} Fiyatı Nasıl Belirlenir?
        </h3>
      </div>
      
      <p className="text-gray-600 mb-4">
        Her proje kendine özgüdür. Kesin fiyat, ücretsiz keşif sonrası belirlenir. 
        Fiyatı etkileyen başlıca faktörler:
      </p>

      <ul className="grid md:grid-cols-2 gap-2 mb-4">
        {factors.map((factor, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700">
            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
            {factor}
          </li>
        ))}
      </ul>

      <div className="bg-white rounded-lg p-4 border border-blue-100">
        <p className="text-sm text-gray-600 mb-3">
          <strong>💡 Neden net fiyat vermiyoruz?</strong> Her evin durumu farklıdır. 
          Telefonda verilen fiyatlar yanıltıcı olabilir. Keşif sonrası detaylı ve şeffaf teklif sunuyoruz.
        </p>
        <Link 
          href="/kesif-randevu" 
          className="inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          Ücretsiz Keşif İste →
        </Link>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { FaCalculator, FaLeaf } from 'react-icons/fa'
import Link from 'next/link'

const EnergyCalculator = () => {
  const [electricity, setElectricity] = useState('')
  const [gas, setGas] = useState('')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const elec = parseFloat(electricity) || 0
    const gasAmount = parseFloat(gas) || 0
    const total = elec + gasAmount

    if (total === 0) {
      alert('Lütfen en az bir fatura tutarı girin')
      return
    }

    // %30-50 arası tasarruf hesaplama
    const savingsMin = total * 0.30
    const savingsMax = total * 0.50
    const yearlySavingsMin = savingsMin * 12
    const yearlySavingsMax = savingsMax * 12

    setResult({
      monthly: total,
      savingsMin,
      savingsMax,
      yearlySavingsMin,
      yearlySavingsMax,
      percentage: '30-50%',
    })
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaLeaf size={40} />
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Enerji Tasarruf Hesaplayıcı
              </h2>
            </div>
            <p className="text-xl text-gray-200">
              Isı pompası ile ne kadar tasarruf edebileceğinizi hesaplayın
            </p>
          </div>

          <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Aylık Elektrik Faturası (TL)
                </label>
                <input
                  type="number"
                  value={electricity}
                  onChange={(e) => setElectricity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Örn: 800"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Aylık Doğalgaz Faturası (TL)
                </label>
                <input
                  type="number"
                  value={gas}
                  onChange={(e) => setGas(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Örn: 1200"
                />
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaCalculator size={20} />
              <span>Tasarruf Hesapla</span>
            </button>

            {result && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200">
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Tahmini Tasarruf Potansiyeliniz
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600 mb-1">Aylık Toplam Fatura</p>
                    <p className="text-3xl font-bold text-primary">
                      {result.monthly.toLocaleString('tr-TR')} TL
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600 mb-1">Tasarruf Oranı</p>
                    <p className="text-3xl font-bold text-green-600">
                      {result.percentage}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                  <h4 className="font-bold text-primary mb-3">Aylık Tasarruf</h4>
                  <p className="text-2xl font-bold text-green-600">
                    {result.savingsMin.toLocaleString('tr-TR')} - {result.savingsMax.toLocaleString('tr-TR')} TL
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-primary mb-3">Yıllık Tasarruf</h4>
                  <p className="text-3xl font-bold text-green-600">
                    {result.yearlySavingsMin.toLocaleString('tr-TR')} - {result.yearlySavingsMax.toLocaleString('tr-TR')} TL
                  </p>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Not:</strong> Bu hesaplama tahminidir. Gerçek tasarruf evinizin yalıtımı, kullanım alışkanlıkları ve sistem seçimine göre değişebilir.
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/teklif-al"
                    className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg"
                  >
                    Detaylı Teklif Al
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-200 mb-4">
              Isı pompası ile hem tasarruf edin hem de çevreyi koruyun
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                ✓ %60-70 Enerji Tasarrufu
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                ✓ Çevre Dostu
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                ✓ Uzun Ömürlü
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                ✓ Devlet Desteği
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnergyCalculator

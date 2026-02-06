'use client'

import { useState } from 'react'
import { FaCalculator, FaWhatsapp } from 'react-icons/fa'

export default function TeklifAlPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    service: '',
    description: '',
  })

  const [calculatorData, setCalculatorData] = useState({
    heatingType: 'petek',
    area: '',
    ceilingHeight: '2.7',
    insulation: 'orta',
    floor: 'ara',
  })

  const [result, setResult] = useState<any>(null)

  const districts = [
    'Merkez', 'Ayvacık', 'Bayramiç', 'Biga', 'Bozcaada', 'Çan', 'Eceabat', 
    'Ezine', 'Gelibolu', 'Gökçeada', 'Lapseki', 'Yenice'
  ]

  const services = [
    'Doğalgaz Tesisatı',
    'Kombi Montajı',
    'Kombi Servisi',
    'Isı Pompası',
    'Güneş Enerjisi',
    'Su Tesisatı',
    'Petek Temizleme',
    'Bakım ve Onarım',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Teklifiniz alındı! En kısa sürede size dönüş yapacağız.')
    setFormData({ name: '', phone: '', district: '', service: '', description: '' })
  }

  const calculateHeatLoss = () => {
    const area = parseFloat(calculatorData.area)
    if (!area || area <= 0) {
      alert('Lütfen geçerli bir metrekare değeri girin')
      return
    }

    let coefficient = 0.055
    if (calculatorData.insulation === 'iyi') coefficient = 0.045
    if (calculatorData.insulation === 'kötü') coefficient = 0.070

    let floorMultiplier = 1.0
    if (calculatorData.floor === 'üst' || calculatorData.floor === 'zemin') {
      floorMultiplier = 1.1
    }

    const ceilingHeight = parseFloat(calculatorData.ceilingHeight)
    const ceilingMultiplier = ceilingHeight / 2.7

    const heatLoss = area * coefficient * ceilingMultiplier * floorMultiplier

    let recommendedCapacity = 8
    if (heatLoss > 10) recommendedCapacity = 12
    if (heatLoss > 14) recommendedCapacity = 14
    if (heatLoss > 18) recommendedCapacity = 16
    if (heatLoss > 22) recommendedCapacity = 20

    setResult({
      heatLoss: heatLoss.toFixed(2),
      recommendedCapacity,
    })
  }

  const sendToWhatsApp = () => {
    if (!result) return
    const message = `Merhaba, ısı pompası teklifi almak istiyorum.\n\nEv Bilgileri:\n- Alan: ${calculatorData.area} m²\n- Tavan Yüksekliği: ${calculatorData.ceilingHeight} m\n- Yalıtım: ${calculatorData.insulation}\n- Kat: ${calculatorData.floor}\n- Isıtma Tipi: ${calculatorData.heatingType}\n\nHesaplanan Isı Kaybı: ${result.heatLoss} kW\nÖnerilen Kapasite: ${result.recommendedCapacity} kW`
    const whatsappUrl = `https://wa.me/905551234567?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-neutral">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Teklif Al</h1>
          <p className="text-xl text-gray-200">
            Ücretsiz keşif ve teklif için formu doldurun
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Teklif Formu */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary mb-6 font-display">
                Teklif Formu
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0555 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    İlçe *
                  </label>
                  <select
                    required
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Seçiniz</option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Hizmet Türü *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Seçiniz</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Açıklama
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="İhtiyacınız hakkında detaylı bilgi verin"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Teklif Gönder
                </button>
              </form>
            </div>

            {/* Isı Pompası Hesaplayıcı */}
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <FaCalculator className="text-secondary" size={32} />
                <h2 className="text-2xl font-bold text-primary font-display">
                  Isı Pompası Kapasite Hesaplayıcı
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Isıtma Tipi
                  </label>
                  <select
                    value={calculatorData.heatingType}
                    onChange={(e) => setCalculatorData({ ...calculatorData, heatingType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="petek">Petek (Radyatör)</option>
                    <option value="yerden">Yerden Isıtma</option>
                    <option value="karma">Karma</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Ev Metrekaresi (m²)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.area}
                    onChange={(e) => setCalculatorData({ ...calculatorData, area: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Örn: 120"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Tavan Yüksekliği (m)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={calculatorData.ceilingHeight}
                    onChange={(e) => setCalculatorData({ ...calculatorData, ceilingHeight: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Yalıtım Durumu
                  </label>
                  <select
                    value={calculatorData.insulation}
                    onChange={(e) => setCalculatorData({ ...calculatorData, insulation: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="iyi">İyi</option>
                    <option value="orta">Orta</option>
                    <option value="kötü">Kötü</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Kat Durumu
                  </label>
                  <select
                    value={calculatorData.floor}
                    onChange={(e) => setCalculatorData({ ...calculatorData, floor: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="ara">Ara Kat</option>
                    <option value="üst">Üst Kat</option>
                    <option value="zemin">Zemin Kat</option>
                  </select>
                </div>

                <button
                  onClick={calculateHeatLoss}
                  className="btn-primary w-full"
                >
                  Hesapla
                </button>

                {result && (
                  <div className="bg-secondary text-white p-6 rounded-lg mt-4">
                    <h3 className="text-xl font-bold mb-4">Hesaplama Sonucu</h3>
                    <div className="space-y-2">
                      <p className="text-lg">
                        <strong>Tahmini Isı Kaybı:</strong> {result.heatLoss} kW
                      </p>
                      <p className="text-lg">
                        <strong>Önerilen Isı Pompası:</strong> {result.recommendedCapacity} kW
                      </p>
                      <p className="text-sm mt-4 text-gray-200">
                        * Kesin sonuç keşif ile belirlenir
                      </p>
                    </div>
                    <button
                      onClick={sendToWhatsApp}
                      className="btn-primary bg-green-500 hover:bg-green-600 w-full mt-4 flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp size={20} />
                      <span>WhatsApp'a Gönder</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

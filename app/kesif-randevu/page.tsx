'use client'

import { useState } from 'react'
import { FaCalendar, FaClock } from 'react-icons/fa'

export default function KesifRandevuPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    district: '',
    service: '',
    date: '',
    time: '',
    description: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const districts = [
    'Merkez', 'Ayvacık', 'Bayramiç', 'Biga', 'Bozcaada', 'Çan', 'Eceabat',
    'Ezine', 'Gelibolu', 'Gökçeada', 'Lapseki', 'Yenice'
  ]

  const services = [
    'Doğalgaz Tesisatı',
    'Kombi Montajı',
    'Isı Pompası',
    'Güneş Enerjisi',
    'Su Tesisatı',
    'Petek Temizliği',
    'Yerden Isıtma',
    'Diğer',
  ]

  const timeSlots = [
    '09:00 - 11:00',
    '11:00 - 13:00',
    '13:00 - 15:00',
    '15:00 - 17:00',
    '17:00 - 19:00',
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          district: formData.district,
          service: formData.service,
          preferredDate: formData.date,
          preferredTime: formData.time,
          notes: formData.description,
        })
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Gönderim başarısız')
      }

      setSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        address: '',
        district: '',
        service: '',
        date: '',
        time: '',
        description: '',
      })

      // 5 saniye sonra teşekkür mesajını kapat
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err: any) {
      setError(err.message || 'Bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Ücretsiz Keşif Randevusu
          </h1>
          <p className="text-xl text-gray-200">
            Uzman ekibimiz evinize gelsin, ücretsiz keşif yapsın
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {submitted && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6 rounded-lg">
                <h3 className="text-green-800 font-bold text-lg mb-2">Teşekkürler!</h3>
                <p className="text-green-700">
                  Keşif randevu talebiniz başarıyla alındı. En kısa sürede size dönüş yapacağız.
                </p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6 rounded-lg">
                <h3 className="text-red-800 font-bold text-lg mb-2">Hata!</h3>
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <div className="card">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-700">
                  <strong>Ücretsiz Keşif:</strong> Uzman ekibimiz evinize gelir, detaylı inceleme yapar ve size en uygun çözümü sunar. Keşif ücretsizdir, hiçbir ücret talep edilmez.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Adres *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Mahalle, sokak, bina no, daire no"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                      <FaCalendar className="text-secondary" />
                      Uygun Gün *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                      <FaClock className="text-secondary" />
                      Uygun Saat *
                    </label>
                    <select
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Seçiniz</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
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
                    placeholder="İhtiyacınız hakkında detaylı bilgi verin (opsiyonel)"
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full text-lg disabled:opacity-50">
                  {loading ? 'Gönderiliyor...' : 'Randevu Talebi Gönder'}
                </button>
              </form>

              <div className="mt-8 p-6 bg-neutral rounded-lg">
                <h3 className="font-bold text-primary mb-3">Keşif Süreci Nasıl İşler?</h3>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1.</strong> Formu doldurursunuz</li>
                  <li><strong>2.</strong> Size en kısa sürede dönüş yaparız</li>
                  <li><strong>3.</strong> Uzman ekibimiz belirlenen gün ve saatte gelir</li>
                  <li><strong>4.</strong> Detaylı inceleme ve ölçüm yapılır</li>
                  <li><strong>5.</strong> Size en uygun çözüm ve fiyat teklifi sunulur</li>
                  <li><strong>6.</strong> Hiçbir ücret ödenmez, keşif tamamen ücretsizdir</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

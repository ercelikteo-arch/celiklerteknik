'use client'

import { useState } from 'react'

export default function ArizaKaydiPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    description: '',
  })

  const services = [
    'Kombi Arızası',
    'Doğalgaz Kaçağı',
    'Su Kaçağı',
    'Petek Sorunu',
    'Isı Pompası Arızası',
    'Diğer',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Arıza kaydınız alındı! En kısa sürede size dönüş yapacağız.')
    setFormData({ name: '', phone: '', service: '', description: '' })
  }

  return (
    <div className="min-h-screen bg-neutral">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">Müşteri Arıza Kaydı</h1>
          <p className="text-xl text-gray-200">
            Sadece mevcut müşterilerimiz için arıza kayıt formu
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-700">
                  <strong>Not:</strong> Bu form sadece daha önce hizmet aldığınız sistemlerin arızaları için kullanılmalıdır.
                  Yeni hizmet talebi için <a href="/teklif-al" className="text-primary underline">Teklif Al</a> sayfasını kullanın.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    Alınan Hizmet / Sistem *
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
                    Arıza Açıklaması *
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Arızayı detaylı olarak açıklayın. Ne zaman başladı? Hangi belirtiler var?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Fotoğraf Yükleme (Opsiyonel)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Arıza ile ilgili fotoğraf varsa yükleyebilirsiniz
                  </p>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Arıza Kaydı Oluştur
                </button>
              </form>


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

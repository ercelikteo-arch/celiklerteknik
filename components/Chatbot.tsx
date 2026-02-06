'use client'

import { useState } from 'react'
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'

interface Message {
  text: string
  isBot: boolean
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Merhaba! Size nasıl yardımcı olabilirim?', isBot: true },
  ])
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    service: '',
    district: '',
    phone: '',
  })

  const services = [
    'Doğalgaz Tesisatı',
    'Kombi Servisi',
    'Isı Pompası',
    'Güneş Enerjisi',
    'Su Tesisatı',
    'Petek Temizliği',
    'Diğer',
  ]

  const districts = [
    'Merkez', 'Biga', 'Gelibolu', 'Ezine', 'Lapseki', 'Çan',
    'Ayvacık', 'Bayramiç', 'Eceabat', 'Bozcaada', 'Gökçeada', 'Yenice'
  ]

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service })
    setMessages([
      ...messages,
      { text: service, isBot: false },
      { text: 'Hangi ilçedesiniz?', isBot: true },
    ])
    setStep(1)
  }

  const handleDistrictSelect = (district: string) => {
    setFormData({ ...formData, district })
    setMessages([
      ...messages,
      { text: district, isBot: false },
      { text: 'Telefon numaranızı paylaşır mısınız?', isBot: true },
    ])
    setStep(2)
  }

  const handlePhoneSubmit = (phone: string) => {
    if (phone.length < 10) {
      alert('Lütfen geçerli bir telefon numarası girin')
      return
    }

    setFormData({ ...formData, phone })
    setMessages([
      ...messages,
      { text: phone, isBot: false },
      { text: 'Teşekkürler! Bilgileriniz alındı. En kısa sürede size dönüş yapacağız. 📞', isBot: true },
    ])
    setStep(3)

    // Form verisini kaydet (backend'e gönderilecek)
    console.log('Chatbot Form:', formData)
  }

  const resetChat = () => {
    setMessages([{ text: 'Merhaba! Size nasıl yardımcı olabilirim?', isBot: true }])
    setStep(0)
    setFormData({ service: '', district: '', phone: '' })
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-secondary-light transition-all duration-300 hover:scale-110 z-40 animate-bounce"
          aria-label="Sohbet Başlat"
        >
          <FaComments size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-40 flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaComments size={24} />
              <div>
                <h3 className="font-bold">{siteConfig.companyName}</h3>
                <p className="text-xs text-gray-200">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-neutral">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow'
                      : 'bg-primary text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Options */}
            {step === 0 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600 text-center mb-2">Hangi hizmeti istiyorsunuz?</p>
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => handleServiceSelect(service)}
                    className="w-full bg-white hover:bg-primary hover:text-white text-gray-800 p-3 rounded-lg transition-colors text-sm shadow"
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="grid grid-cols-2 gap-2">
                {districts.map((district) => (
                  <button
                    key={district}
                    onClick={() => handleDistrictSelect(district)}
                    className="bg-white hover:bg-primary hover:text-white text-gray-800 p-2 rounded-lg transition-colors text-sm shadow"
                  >
                    {district}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="bg-white p-3 rounded-lg shadow">
                <input
                  type="tel"
                  placeholder="0555 123 45 67"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 text-sm"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handlePhoneSubmit((e.target as HTMLInputElement).value)
                    }
                  }}
                />
                <button
                  onClick={(e) => {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement
                    handlePhoneSubmit(input.value)
                  }}
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <FaPaperPlane size={14} />
                  <span>Gönder</span>
                </button>
              </div>
            )}

            {step === 3 && (
              <button
                onClick={resetChat}
                className="w-full bg-secondary text-white p-3 rounded-lg hover:bg-secondary-light transition-colors text-sm"
              >
                Yeni Sohbet Başlat
              </button>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-100 rounded-b-2xl text-center">
            <p className="text-xs text-gray-600">
              Veya hemen arayın: <a href={`tel:${siteConfig.contact.phone.formatted.primary}`} className="text-primary font-bold">{siteConfig.contact.phone.primary}</a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot

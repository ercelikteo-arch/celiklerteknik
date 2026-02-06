import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa'
import { siteConfig } from '@/config/siteConfig'

export const metadata = {
  title: `İletişim - Bize Ulaşın | ${siteConfig.companyName}`,
  description: 'Çanakkale genelinde tesisat ve ısıtma hizmetleri için bize ulaşın. 7/24 destek hattı.',
}

export default function IletisimPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">İletişim</h1>
          <p className="text-xl text-gray-200">
            Çanakkale genelinde hizmetinizdeyiz
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 font-display">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-4 rounded-full">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Telefon</h3>
                    <a href={`tel:${siteConfig.contact.phone.formatted.primary}`} className="text-lg text-gray-700 hover:text-secondary block">
                      {siteConfig.contact.phone.primary}
                    </a>
                    <a href={`tel:${siteConfig.contact.phone.formatted.secondary}`} className="text-lg text-gray-700 hover:text-secondary block">
                      {siteConfig.contact.phone.secondary}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">7/24 Destek Hattı</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-4 rounded-full">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">WhatsApp</h3>
                    <a href={`https://wa.me/${siteConfig.contact.whatsapp.formatted}`} className="text-lg text-gray-700 hover:text-secondary">
                      {siteConfig.contact.whatsapp.number}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Hızlı İletişim</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-4 rounded-full">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">E-posta</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-lg text-gray-700 hover:text-secondary">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-4 rounded-full">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Adreslerimiz</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-gray-800">{siteConfig.contact.addresses.gelibolu.name}</p>
                        <p className="text-gray-700">{siteConfig.contact.addresses.gelibolu.address}</p>
                        <a 
                          href={siteConfig.contact.addresses.gelibolu.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:underline text-sm"
                        >
                          Haritada Gör →
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{siteConfig.contact.addresses.lapseki.name}</p>
                        <p className="text-gray-700">{siteConfig.contact.addresses.lapseki.address}</p>
                        <a 
                          href={siteConfig.contact.addresses.lapseki.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:underline text-sm"
                        >
                          Haritada Gör →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white p-4 rounded-full">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Çalışma Saatleri</h3>
                    <p className="text-gray-700">{siteConfig.workingHours.detailed.weekdays.days}: {siteConfig.workingHours.detailed.weekdays.hours}</p>
                    <p className="text-gray-700">{siteConfig.workingHours.detailed.sunday.days}: {siteConfig.workingHours.detailed.sunday.hours}</p>
                    <p className="text-sm text-red-600 mt-2 font-medium">{siteConfig.workingHours.emergency}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-neutral rounded-lg">
                <h3 className="font-bold text-primary mb-3">Hizmet Verdiğimiz İlçeler</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p>• Merkez</p>
                  <p>• Ayvacık</p>
                  <p>• Bayramiç</p>
                  <p>• Biga</p>
                  <p>• Bozcaada</p>
                  <p>• Çan</p>
                  <p>• Eceabat</p>
                  <p>• Ezine</p>
                  <p>• Gelibolu</p>
                  <p>• Gökçeada</p>
                  <p>• Lapseki</p>
                  <p>• Yenice</p>
                </div>
              </div>
            </div>

            {/* Harita */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 font-display">
                Konumlarımız
              </h2>
              
              <div className="space-y-6">
                {/* Gelibolu Şubesi */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{siteConfig.contact.addresses.gelibolu.name}</h3>
                  <div className="bg-neutral rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d268.50764938363517!2d26.656476296556324!3d40.41289855301995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1770329356139!5m2!1str!2str"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a
                    href={siteConfig.contact.addresses.gelibolu.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-secondary hover:underline"
                  >
                    Google Maps'te Aç →
                  </a>
                </div>

                {/* Lapseki Şubesi */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{siteConfig.contact.addresses.lapseki.name}</h3>
                  <div className="bg-neutral rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d717.1628259055035!2d26.72426212421376!3d40.38158880858114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1770329372444!5m2!1str!2str"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a
                    href={siteConfig.contact.addresses.lapseki.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-secondary hover:underline"
                  >
                    Google Maps'te Aç →
                  </a>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <a
                  href={`tel:${siteConfig.contact.phone.formatted.primary}`}
                  className="btn-primary text-center"
                >
                  Hemen Ara
                </a>
                <a
                  href="/teklif-al"
                  className="btn-secondary text-center"
                >
                  Teklif Al
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-display">
            Eviniz İçin Profesyonel Isıtma ve Tesisat Çözümleri
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Kaliteli işçilik, hızlı servis ve garantili hizmet
          </p>
          <a
            href={`tel:${siteConfig.contact.phone.formatted.primary}`}
            className="inline-block bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 text-xl"
          >
            Hemen Ara: {siteConfig.contact.phone.primary}
          </a>
        </div>
      </section>
    </div>
  )
}

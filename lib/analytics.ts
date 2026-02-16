// Google Analytics 4 Event Tracking

declare global {
  interface Window {
    gtag: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void
  }
}

// Form gönderim event'i
export const trackFormSubmit = (formType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'lead',
      event_label: formType,
      value: 1,
    })
  }
}

// Telefon tıklama event'i
export const trackPhoneClick = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'lead',
      event_label: location,
      value: 1,
    })
  }
}

// WhatsApp tıklama event'i
export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'lead',
      event_label: location,
      value: 1,
    })
  }
}

// Teklif Al butonu tıklama
export const trackQuoteClick = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quote_click', {
      event_category: 'engagement',
      event_label: location,
      value: 1,
    })
  }
}

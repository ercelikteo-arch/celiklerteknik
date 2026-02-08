import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Kombi, Isı Pompası, Doğalgaz | Çelikler Teknik',
  description: 'Kombi bakımı, ısı pompası, doğalgaz tesisatı, petek temizleme hakkında sık sorulan sorular ve cevapları. Çanakkale\'de profesyonel ısıtma hizmetleri.',
  keywords: 'kombi sss, ısı pompası soru cevap, doğalgaz tesisatı sss, petek temizleme ne zaman, çanakkale tesisat',
  alternates: {
    canonical: 'https://celiklerteknik.com/sss',
  },
  openGraph: {
    title: 'Sıkça Sorulan Sorular | Çelikler Teknik',
    description: 'Kombi, ısı pompası, doğalgaz ve tesisat hakkında merak edilenler.',
    url: 'https://celiklerteknik.com/sss',
  },
}

export default function SSSLayout({ children }: { children: React.ReactNode }) {
  return children
}

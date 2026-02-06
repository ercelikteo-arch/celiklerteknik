export interface Review {
  id: number
  name: string
  district: string
  rating: number
  comment: string
  date: string
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Ahmet K.',
    district: 'Merkez',
    rating: 5,
    comment: 'Kombi arızamız için aynı gün geldiler. Hızlı ve temiz çalıştılar. Çok memnun kaldık.',
    date: '2024-01-15',
  },
  {
    id: 2,
    name: 'Merve T.',
    district: 'Biga',
    rating: 5,
    comment: 'Isı pompası kurulumu yaptırdık. Baştan sona profesyonel hizmet aldık. Kesinlikle tavsiye ederim.',
    date: '2024-01-10',
  },
  {
    id: 3,
    name: 'Mehmet A.',
    district: 'Gelibolu',
    rating: 5,
    comment: 'Petek temizliği sonrası evimiz çok daha iyi ısınıyor. Enerji tasarrufu da sağladık.',
    date: '2024-01-08',
  },
  {
    id: 4,
    name: 'Zeynep S.',
    district: 'Ezine',
    rating: 5,
    comment: 'Doğalgaz tesisatımızı sorunsuz şekilde yaptılar. Güvenilir ve kaliteli hizmet.',
    date: '2024-01-05',
  },
  {
    id: 5,
    name: 'Emre Y.',
    district: 'Lapseki',
    rating: 5,
    comment: 'Uygun fiyat ve kaliteli işçilik. Hem işlerinden hem de fiyatlarından çok memnunum.',
    date: '2024-01-03',
  },
  {
    id: 6,
    name: 'Hasan D.',
    district: 'Çan',
    rating: 5,
    comment: 'Kombi bakımı için çağırdık, memnun kaldık. Detaylı kontrol yaptılar.',
    date: '2023-12-28',
  },
  {
    id: 7,
    name: 'Ayşe B.',
    district: 'Ayvacık',
    rating: 5,
    comment: 'Yerden ısıtma sistemimizi kurdular. Çok profesyonel bir ekip, işlerini çok iyi yapıyorlar.',
    date: '2023-12-25',
  },
  {
    id: 8,
    name: 'Mustafa K.',
    district: 'Bayramiç',
    rating: 5,
    comment: 'Su tesisatı arızamızı hemen hallettiler. 7/24 hizmet vermeleri çok güzel.',
    date: '2023-12-20',
  },
  {
    id: 9,
    name: 'Fatma Y.',
    district: 'Eceabat',
    rating: 5,
    comment: 'Güneş enerjisi sistemi kurduk. Hem çevre dostu hem de tasarruflu. Teşekkürler.',
    date: '2023-12-18',
  },
  {
    id: 10,
    name: 'Ali R.',
    district: 'Merkez',
    rating: 5,
    comment: 'Kombi montajı yaptırdık. Zamanında geldiler, işlerini eksiksiz yaptılar.',
    date: '2023-12-15',
  },
]

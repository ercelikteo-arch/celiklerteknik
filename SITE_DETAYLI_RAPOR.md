# Çelikler Teknik - Detaylı Site Raporu

## 📊 GENEL BAKIŞ

**Firma:** Çelikler Teknik
**Sektör:** Isıtma, Soğutma, Tesisat Hizmetleri
**Bölge:** Çanakkale ve İlçeleri
**Teknoloji:** Next.js 14, React, Tailwind CSS, Prisma, PostgreSQL (Neon.tech)

---

## 🎯 SAYFA YAPISI

### Ana Sayfalar
| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Hero, hizmetler, referanslar, yorumlar |
| Hizmetler | `/hizmetler` | Tüm hizmetlerin listesi |
| Ürünler | `/urunler` | Satılan ürünler (DB'den dinamik) |
| Referanslar | `/referanslar` | Tamamlanan projeler |
| Blog | `/blog` | Blog yazıları (DB'den dinamik) |
| Yorumlar | `/yorumlar` | Müşteri yorumları |
| İletişim | `/iletisim` | İletişim bilgileri ve harita |
| SSS | `/sss` | Sık sorulan sorular |

### Hizmet Sayfaları (8 adet)
| Hizmet | URL |
|--------|-----|
| Doğalgaz Tesisatı | `/hizmetler/dogalgaz-tesisati` |
| Kombi Servisi | `/hizmetler/kombi-servisi` |
| Isı Pompası | `/hizmetler/isi-pompasi` |
| Güneş Enerjisi | `/hizmetler/gunes-enerjisi` |
| Su Tesisatı | `/hizmetler/su-tesisati` |
| Petek Temizleme | `/hizmetler/petek-temizleme` |
| Yerden Isıtma | `/hizmetler/yerden-isitma` |
| Bakım ve Onarım | `/hizmetler/bakim-onarim` |

### İlçe Sayfaları (12 adet)
Merkez, Biga, Gelibolu, Ezine, Lapseki, Çan, Ayvacık, Bayramiç, Eceabat, Bozcaada, Gökçeada, Yenice

Her ilçe için: `/ilceler/[ilce-slug]`

### Programmatic SEO Sayfaları (96 adet)
Her ilçe + hizmet kombinasyonu için otomatik sayfa:
`/hizmet/[ilce]-[hizmet]`
Örnek: `/hizmet/biga-kombi-servisi`

### Karşılaştırma Sayfaları (SEO için)
| Sayfa | URL |
|-------|-----|
| Kombi mi Isı Pompası mı? | `/kombi-mi-isi-pompasi-mi` |
| Güneş Enerjisi mi Şofben mi? | `/gunes-enerjisi-mi-sofben-mi` |
| Yerden Isıtma mı Petek mi? | `/yerden-isitma-mi-petek-mi` |

### Senaryo Bazlı Sayfalar
| Sayfa | URL |
|-------|-----|
| Yazlıkta Kışın Donma Önleme | `/yazlikta-kisin-donma-onleme` |
| Müstakil Ev Isı Pompası | `/mustakil-ev-isi-pompasi` |
| Villa İçin Isınma Sistemi | `/villa-icin-isinma-sistemi-secimi` |

### Form Sayfaları
| Sayfa | URL | Admin Panel |
|-------|-----|-------------|
| Keşif Randevu | `/kesif-randevu` | ✅ Keşif Randevuları |
| Arıza Kaydı | `/ariza-kaydi` | ✅ Arıza Kayıtları |

### Diğer Sayfalar
| Sayfa | URL |
|-------|-----|
| Garanti & Servis Politikası | `/garanti-ve-servis-politikasi` |

---

## 🔧 FORM → ADMİN PANEL AKIŞI

### 1. Keşif Randevu Formu
```
Kullanıcı → /kesif-randevu → /api/appointments → DB (Appointment) → Admin /admin/appointments
```
**Alanlar:** Ad, Telefon, Adres, İlçe, Hizmet, Tercih Edilen Tarih, Notlar

### 2. Arıza Kaydı Formu
```
Kullanıcı → /ariza-kaydi → /api/faults → DB (Fault) → Admin /admin/faults
```
**Alanlar:** Ad, Telefon, Hizmet Türü, Arıza Açıklaması

### 3. Chatbot
```
Kullanıcı → Chatbot Widget → /api/leads → DB (Lead) → Admin /admin/leads
```
**Alanlar:** Hizmet, İlçe, Telefon (İsim: "Chatbot Müşteri")

---

## 🖥️ ADMİN PANEL

**Giriş:** `/admin/login`
**Kullanıcı:** admin@celiklerteknik.com
**Şifre:** Admin123!

### Menü Yapısı
| Bölüm | URL | Açıklama |
|-------|-----|----------|
| Dashboard | `/admin` | Genel istatistikler |
| Chatbot Talepleri | `/admin/leads` | Chatbot'tan gelen talepler |
| Keşif Randevuları | `/admin/appointments` | Randevu talepleri |
| Arıza Kayıtları | `/admin/faults` | Arıza bildirimleri |
| Blog Yönetimi | `/admin/blog` | Blog yazıları CRUD |
| Ürünler | `/admin/products` | Ürün yönetimi |
| Referanslar | `/admin/references` | Proje referansları |
| Yorumlar | `/admin/reviews` | Müşteri yorumları |
| İlçeler | `/admin/districts` | İlçe yönetimi |
| Hizmetler | `/admin/services` | Hizmet yönetimi |
| Ayarlar | `/admin/settings` | Site ayarları |

---

## 🔍 SEO ÖZELLİKLERİ

### Meta Tags
- ✅ Her sayfada benzersiz title ve description
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Canonical URL'ler

### Schema Markup (Yapısal Veri)
- ✅ LocalBusiness Schema (Ana sayfa)
- ✅ Service Schema (Hizmet sayfaları)
- ✅ FAQ Schema (SSS, Garanti sayfası)
- ✅ Article Schema (Blog yazıları)
- ✅ BreadcrumbList Schema

### Sitemap
- ✅ Dinamik XML Sitemap (`/sitemap.xml`)
- ✅ Tüm sayfalar otomatik ekleniyor
- ✅ Blog yazıları DB'den çekiliyor
- ✅ Ürünler ve referanslar dahil

### Robots.txt
- ✅ `/public/robots.txt` mevcut
- ✅ Admin panel engellenmiş

### Programmatic SEO
- ✅ 96 adet ilçe+hizmet kombinasyon sayfası
- ✅ Her sayfa için benzersiz içerik
- ✅ Internal linking yapısı

---

## 📱 MÜŞTERİ DENEYİMİ (UX)

### Header (Üst Menü)
Ana Sayfa | Hizmetlerimiz | Ürünler | Referanslar | Blog | Yorumlar | Arıza Kaydı | Keşif Randevu | İletişim | [Hemen Ara]

### Footer (Alt Kısım)
- Firma bilgileri ve sosyal medya
- Hızlı linkler (SSS, Garanti & Servis, Keşif Randevu)
- Hizmet listesi
- Hizmet bölgeleri (ilçeler)
- İletişim bilgileri (2 adres, 2 telefon, email)
- SEO anahtar kelime bloğu

### Floating Buttons (Sabit Butonlar)
- 📞 Telefon butonu (sağ alt)
- 💬 WhatsApp butonu (sağ alt)
- 🤖 Chatbot butonu (sağ alt)

### Chatbot Özellikleri
1. Hizmet seçimi (7 seçenek)
2. İlçe seçimi (12 ilçe)
3. Telefon girişi
4. Otomatik admin panele kayıt

### CTA (Call-to-Action) Noktaları
- ✅ Hero bölümünde "Ücretsiz Keşif" butonu
- ✅ Her hizmet sayfasında CTA
- ✅ Blog yazılarında BlogCTA bileşeni
- ✅ İlçe sayfalarında DistrictCTA bileşeni
- ✅ Karşılaştırma sayfalarında güçlü CTA

### Fiyat Bilgi Kutusu
Isı Pompası, Doğalgaz, Güneş Enerjisi, Yerden Isıtma sayfalarında:
- Fiyatı etkileyen faktörler açıklaması
- "Keşif iste" yönlendirmesi
- Güven oluşturucu metin

---

## 🛡️ GÜVENLİK

### API Güvenliği
- ✅ Rate limiting (form spam koruması)
- ✅ Zod validation (veri doğrulama)
- ✅ HTML sanitization (XSS koruması)
- ✅ CSRF token koruması (admin işlemleri)

### Admin Panel Güvenliği
- ✅ JWT tabanlı authentication
- ✅ HttpOnly cookie
- ✅ Rol bazlı yetkilendirme (ADMIN/EDITOR)
- ✅ Session timeout

### Veritabanı
- ✅ Prisma ORM (SQL injection koruması)
- ✅ Neon.tech PostgreSQL (SSL bağlantı)
- ✅ Connection pooling

---

## 📈 PERFORMANS

### Next.js Optimizasyonları
- ✅ Static Site Generation (SSG) - statik sayfalar
- ✅ Server Side Rendering (SSR) - dinamik sayfalar
- ✅ Image Optimization
- ✅ Code Splitting
- ✅ Lazy Loading

### Caching
- ✅ Sitemap cache (1 saat)
- ✅ Static asset caching

---

## 📊 VERİTABANI YAPISI

### Tablolar
| Tablo | Açıklama |
|-------|----------|
| User | Admin kullanıcıları |
| Lead | Chatbot talepleri |
| Appointment | Keşif randevuları |
| Fault | Arıza kayıtları |
| BlogPost | Blog yazıları |
| Product | Ürünler |
| Reference | Referans projeler |
| Review | Müşteri yorumları |
| District | İlçeler |
| Service | Hizmetler |
| Settings | Site ayarları |

---

## 🎨 TASARIM

### Renk Paleti
- **Primary:** Mavi tonları (güven, profesyonellik)
- **Secondary:** Turuncu/Sarı (dikkat çekici CTA'lar)
- **Neutral:** Gri tonları (arka plan)

### Tipografi
- **Display Font:** Başlıklar için
- **Body Font:** Metin için

### Responsive Tasarım
- ✅ Mobile-first yaklaşım
- ✅ Tablet uyumlu
- ✅ Desktop optimize

---

## 📝 İÇERİK STRATEJİSİ

### Güven Oluşturucu Unsurlar
- "20+ yıllık tecrübe"
- "1000+ tamamlanan proje"
- Müşteri yorumları slider
- Referans projeleri
- Marka logoları

### Hukuki Koruma
- "7/24 servis" → "Mesai dışı acil durumlar için öncelikli destek"
- "Aynı gün servis" → "Uygunluk durumuna göre en kısa sürede"
- Garanti & Servis Politikası sayfası (Şikayetvar koruması)

---

## 🚀 DEPLOYMENT

### Hosting
- **Frontend:** Netlify
- **Database:** Neon.tech (PostgreSQL)
- **Repository:** GitHub

### Environment Variables
```
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...
JWT_SECRET=...
ADMIN_EMAIL=...
```

---

## ✅ TAMAMLANAN ÖZELLİKLER

1. ✅ Responsive tasarım
2. ✅ SEO optimizasyonu
3. ✅ Admin panel
4. ✅ Form → DB entegrasyonu
5. ✅ Chatbot
6. ✅ Blog sistemi
7. ✅ Ürün yönetimi
8. ✅ Referans yönetimi
9. ✅ Yorum yönetimi
10. ✅ Dinamik sitemap
11. ✅ Schema markup
12. ✅ Programmatic SEO (96 sayfa)
13. ✅ Karşılaştırma sayfaları
14. ✅ Senaryo bazlı içerikler
15. ✅ Fiyat bilgi kutuları
16. ✅ CTA bileşenleri
17. ✅ Garanti politikası sayfası
18. ✅ Rate limiting
19. ✅ Input validation
20. ✅ CSRF koruması

---

## 📞 İLETİŞİM BİLGİLERİ

**Telefonlar:**
- 0532 782 89 58
- 0532 324 73 98

**Email:** info@celiklerteknik.com

**Adresler:**
- Gelibolu Şube
- Lapseki Şube

**WhatsApp:** 0532 782 89 58

---

*Rapor Tarihi: Şubat 2026*

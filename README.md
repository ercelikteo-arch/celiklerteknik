# Çelikler Teknik - Kurumsal Web Sitesi

Modern, hızlı ve SEO uyumlu kurumsal web sitesi. Çanakkale genelinde tesisat, doğalgaz, kombi, ısı pompası ve güneş enerji sistemleri hizmetleri sunan Çelikler Teknik için geliştirilmiştir.

## 🚀 Özellikler

### Genel Özellikler
- ✅ Modern ve kurumsal tasarım
- ✅ Tamamen responsive (mobil uyumlu)
- ✅ SEO optimizasyonu
- ✅ Hızlı sayfa yükleme
- ✅ Admin Panel (tam CRUD)
- ✅ PostgreSQL veritabanı (Prisma ORM)
- ✅ Email bildirimleri
- ✅ Görsel yükleme (local/Cloudinary)

### Admin Panel
- 📊 Dashboard (istatistikler)
- 📝 Teklif Talepleri (leads)
- 📅 Keşif Randevuları (appointments)
- ⚠️ Arıza Kayıtları (faults)
- 📰 Blog Yönetimi
- 🛒 Ürün Yönetimi
- 🏆 Referans Yönetimi
- ⭐ Yorum Yönetimi
- 🗺️ İlçe Yönetimi
- 🔧 Hizmet Yönetimi
- ⚙️ Site Ayarları

### Teknik Özellikler
- ⚡ Next.js 14 (App Router)
- 🎨 Tailwind CSS
- 📱 TypeScript
- 🗄️ Prisma ORM + PostgreSQL
- 🔐 JWT Authentication
- 📧 Nodemailer (SMTP)
- ✅ Zod Validation
- 🖼️ Görsel Upload (Local/Cloudinary)

## 📦 Kurulum

### Gereksinimler
- Node.js 18+
- PostgreSQL veritabanı
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Environment dosyasını oluşturun:**
```bash
cp .env.example .env
```

3. **.env dosyasını düzenleyin:**
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/celiklerteknik"

# JWT
JWT_SECRET="your-super-secret-jwt-key-min-32-chars"

# SMTP (Email bildirimleri için)
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="your-email@example.com"
SMTP_PASS="your-email-password"

# Admin Email (bildirimler için)
ADMIN_EMAIL="admin@celiklerteknik.com"

# Cloudinary (production için, opsiyonel)
# CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"
```

4. **Veritabanını oluşturun:**
```bash
npx prisma migrate dev
```

5. **Seed verilerini yükleyin:**
```bash
npx prisma db seed
```

6. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

7. **Tarayıcıda açın:**
```
http://localhost:3000
http://localhost:3000/admin (Admin Panel)
```

### Varsayılan Admin Kullanıcısı
- Email: `admin@celiklerteknik.com`
- Şifre: `admin123`

## 🏗️ Production Build

```bash
npm run build
npm start
```

## 📁 Proje Yapısı

```
celiklerteknik/
├── app/
│   ├── admin/                   # Admin Panel
│   │   ├── (dashboard)/         # Dashboard sayfaları
│   │   │   ├── appointments/    # Randevu yönetimi
│   │   │   ├── blog/            # Blog yönetimi
│   │   │   ├── districts/       # İlçe yönetimi
│   │   │   ├── faults/          # Arıza yönetimi
│   │   │   ├── leads/           # Lead yönetimi
│   │   │   ├── products/        # Ürün yönetimi
│   │   │   ├── references/      # Referans yönetimi
│   │   │   ├── reviews/         # Yorum yönetimi
│   │   │   ├── services/        # Hizmet yönetimi
│   │   │   └── settings/        # Site ayarları
│   │   └── login/               # Admin giriş
│   ├── api/
│   │   ├── admin/               # Admin API'leri
│   │   ├── appointments/        # Public randevu API
│   │   ├── faults/              # Public arıza API
│   │   ├── leads/               # Public lead API
│   │   └── upload/              # Görsel yükleme API
│   ├── blog/                    # Blog sayfaları
│   ├── hizmetler/               # Hizmet sayfaları
│   ├── ilceler/                 # İlçe SEO sayfaları
│   ├── referanslar/             # Referanslar
│   ├── urunler/                 # Ürünler
│   └── yorumlar/                # Müşteri yorumları
├── components/
│   ├── admin/                   # Admin bileşenleri
│   └── home/                    # Ana sayfa bileşenleri
├── lib/
│   ├── auth.ts                  # JWT authentication
│   ├── email.ts                 # Email bildirimleri
│   ├── prisma.ts                # Prisma client
│   ├── utils.ts                 # Yardımcı fonksiyonlar
│   └── validation.ts            # Zod şemaları
├── prisma/
│   ├── schema.prisma            # Veritabanı şeması
│   └── seed.ts                  # Seed verileri
└── public/
    └── uploads/                 # Yüklenen görseller (dev)
```

## 🔐 Güvenlik

- JWT tabanlı authentication
- HttpOnly, Secure, SameSite cookies
- Zod ile input validation
- HTML sanitization
- Admin API'ler için yetkilendirme
- /admin noindex, robots disallow

## 📧 Email Bildirimleri

Yeni lead, randevu veya arıza kaydı geldiğinde admin'e otomatik email gönderilir.

SMTP ayarları `.env` dosyasında yapılandırılır.

## 🖼️ Görsel Yükleme

- **Development**: `/public/uploads` klasörüne kaydedilir
- **Production**: Cloudinary'ye yüklenir (CLOUDINARY_URL env ile)
- Desteklenen formatlar: JPEG, PNG, WebP
- Maksimum boyut: 5MB

## 🗄️ Veritabanı Modelleri

- User (admin kullanıcıları)
- Session (oturum yönetimi)
- Lead (teklif talepleri)
- Appointment (keşif randevuları)
- FaultReport (arıza kayıtları)
- BlogPost (blog yazıları)
- Product (ürünler)
- Reference (referanslar)
- Review (müşteri yorumları)
- District (ilçeler)
- Service (hizmetler)
- SiteSettings (site ayarları)

## 🚀 Deployment

### Vercel (Önerilen)
1. GitHub'a push edin
2. Vercel'e bağlayın
3. Environment variables ekleyin
4. Deploy edin

### Diğer Platformlar
- Railway
- Render
- DigitalOcean App Platform

## 📞 İletişim

- **Web**: https://celiklerteknik.com
- **Email**: info@celiklerteknik.com
- **Telefon**: 0286 566 1055

---

**Çelikler Teknik** - Çanakkale Genelinde Profesyonel Isıtma ve Tesisat Çözümleri

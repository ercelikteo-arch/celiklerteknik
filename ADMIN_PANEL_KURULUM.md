# 🔐 Admin Panel Kurulum Rehberi

## Genel Bakış

Çelikler Yapı Admin Panel, site içeriğinin kod yazmadan yönetilmesini sağlayan tam özellikli bir yönetim sistemidir.

**Özellikler:**
- 📊 Dashboard (istatistikler, son aktiviteler)
- 📝 Teklif Talepleri yönetimi
- 📅 Keşif Randevuları yönetimi
- 🔧 Arıza Kayıtları yönetimi
- 📰 Blog yönetimi (CRUD + SEO)
- 📦 Ürün yönetimi
- 🏗️ Referans projeleri yönetimi
- ⭐ Müşteri yorumları yönetimi
- 🗺️ İlçe ve Hizmet SEO içerikleri
- ⚙️ Site ayarları

---

## 1. Gereksinimler

- Node.js 18+
- PostgreSQL 14+
- npm veya yarn

---

## 2. Veritabanı Kurulumu

### PostgreSQL Kurulumu

**Windows:**
1. [PostgreSQL](https://www.postgresql.org/download/windows/) indirin
2. Kurulum sırasında şifre belirleyin
3. pgAdmin ile yeni veritabanı oluşturun: `celikleryapi`

**macOS:**
```bash
brew install postgresql@14
brew services start postgresql@14
createdb celikleryapi
```

**Linux:**
```bash
sudo apt install postgresql postgresql-contrib
sudo -u postgres createdb celikleryapi
```

---

## 3. Environment Değişkenleri

`.env` dosyası oluşturun:

```env
# Database
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/celikleryapi?schema=public"

# Auth
JWT_SECRET="super-secret-key-change-this-in-production-min-32-chars"
NEXTAUTH_SECRET="another-secret-key-for-nextauth"
NEXTAUTH_URL="http://localhost:3000"

# Email (Opsiyonel)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
ADMIN_EMAIL="admin@celikleryapi.com"
```

⚠️ **ÖNEMLİ:** Production'da güçlü ve benzersiz secret key'ler kullanın!

---

## 4. Veritabanı Migration

```bash
# Prisma client oluştur
npx prisma generate

# Migration çalıştır
npx prisma migrate dev --name init

# Seed data yükle (admin kullanıcı + örnek veriler)
npm run db:seed
```

---

## 5. Admin Kullanıcıları

Seed sonrası oluşturulan kullanıcılar:

| E-posta | Şifre | Rol |
|---------|-------|-----|
| admin@celikleryapi.com | Admin123! | ADMIN |
| editor@celikleryapi.com | Admin123! | EDITOR |

⚠️ **ÖNEMLİ:** Production'a deploy ettikten sonra şifreleri mutlaka değiştirin!

---

## 6. Roller ve Yetkiler

### ADMIN
- Tüm modüllere tam erişim
- Site ayarlarını değiştirebilir
- Kullanıcı yönetimi (gelecekte)

### EDITOR
- Blog, ürün, referans, yorum ekleyebilir/düzenleyebilir
- Teklif/randevu/arıza kayıtlarını görüntüleyebilir
- Site ayarlarına erişemez

---

## 7. Çalıştırma

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

Admin panel: `http://localhost:3000/admin`

---

## 8. API Endpoints

### Auth
- `POST /api/admin/auth/login` - Giriş
- `POST /api/admin/auth/logout` - Çıkış
- `GET /api/admin/auth/me` - Oturum kontrolü

### Leads
- `GET /api/admin/leads` - Liste
- `PATCH /api/admin/leads/[id]` - Güncelle
- `DELETE /api/admin/leads/[id]` - Sil

### Blog
- `POST /api/admin/blog` - Oluştur
- `PATCH /api/admin/blog/[id]` - Güncelle
- `DELETE /api/admin/blog/[id]` - Sil

### Reviews
- `POST /api/admin/reviews` - Oluştur
- `PATCH /api/admin/reviews/[id]` - Güncelle
- `DELETE /api/admin/reviews/[id]` - Sil

### Settings
- `PATCH /api/admin/settings` - Güncelle (sadece ADMIN)

---

## 9. Güvenlik Özellikleri

- ✅ JWT tabanlı authentication
- ✅ httpOnly cookie
- ✅ Rate limiting (login endpoint)
- ✅ Şifre hashing (bcrypt)
- ✅ Rol tabanlı yetkilendirme
- ✅ CSRF koruması (SameSite cookie)

---

## 10. Veritabanı Yönetimi

```bash
# Prisma Studio (görsel DB yönetimi)
npm run db:studio

# Schema değişikliği sonrası
npx prisma migrate dev --name your_migration_name

# Production'da
npx prisma migrate deploy
```

---

## 11. Troubleshooting

### "Cannot find module '@prisma/client'"
```bash
npx prisma generate
```

### "Database connection failed"
- PostgreSQL servisinin çalıştığından emin olun
- DATABASE_URL'in doğru olduğunu kontrol edin

### "Invalid token"
- Cookie'leri temizleyin
- Yeniden giriş yapın

---

## 12. Production Checklist

- [ ] Güçlü JWT_SECRET ve NEXTAUTH_SECRET kullanın
- [ ] Admin şifrelerini değiştirin
- [ ] HTTPS kullanın
- [ ] Rate limiting değerlerini ayarlayın
- [ ] Veritabanı backup stratejisi oluşturun
- [ ] Error logging ekleyin (Sentry vb.)

---

## 13. Gelecek Geliştirmeler

- [ ] Dosya yükleme (S3/Cloudinary)
- [ ] Email bildirimleri
- [ ] Kullanıcı yönetimi
- [ ] Aktivite logları
- [ ] İki faktörlü doğrulama
- [ ] Takvim görünümü (randevular)

---

**Hazırlayan:** Kiro AI  
**Tarih:** 6 Şubat 2026

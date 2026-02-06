# Çelikler Teknik - Deployment Rehberi (Ücretsiz)

## 💰 Maliyet

| Servis | Fiyat | Ne İçin |
|--------|-------|---------|
| Vercel | **Ücretsiz** | Site hosting |
| Neon.tech | **Ücretsiz** | PostgreSQL veritabanı |
| GitHub | **Ücretsiz** | Kod deposu |
| Domain | ~100-150 TL/yıl | celiklerteknik.com |

**Toplam: Sadece domain ücreti (~100-150 TL/yıl)**

---

## ADIM 1: GitHub Hesabı Oluştur

1. https://github.com adresine git
2. "Sign up" tıkla
3. Email, şifre, kullanıcı adı gir
4. Hesabı doğrula

---

## ADIM 2: Projeyi GitHub'a Yükle

### Seçenek A: GitHub Desktop (Kolay)

1. https://desktop.github.com indir ve kur
2. GitHub hesabınla giriş yap
3. File → Add Local Repository → Proje klasörünü seç
4. "Create Repository" tıkla
5. "Publish Repository" tıkla
6. Repository name: `celiklerteknik`
7. "Publish" tıkla

### Seçenek B: Komut Satırı

Proje klasöründe terminal aç:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/celiklerteknik.git
git push -u origin main
```

---

## ADIM 3: Neon.tech Veritabanı Oluştur

1. https://neon.tech adresine git
2. "Sign up" → GitHub ile giriş yap
3. "Create a project" tıkla
   - Project name: `celiklerteknik`
   - Region: `Europe (Frankfurt)` seç (Türkiye'ye yakın)
4. "Create project" tıkla
5. **Connection string'i kopyala** (şuna benzer):
   ```
   postgresql://username:password@ep-xxx-xxx.eu-central-1.aws.neon.tech/neondb?sslmode=require
   ```
6. Bu URL'yi bir yere kaydet (ADIM 5'te lazım olacak)

---

## ADIM 4: Vercel'e Deploy Et

1. https://vercel.com adresine git
2. "Sign up" → **"Continue with GitHub"** tıkla
3. GitHub hesabını bağla ve izin ver
4. Dashboard'da **"Add New Project"** tıkla
5. GitHub repoların listelenir → `celiklerteknik` yanındaki **"Import"** tıkla
6. Ayarlar sayfası açılır:
   - Framework Preset: `Next.js` (otomatik seçili)
   - Root Directory: `.` (değiştirme)
7. **"Deploy"** tıkla
8. 2-3 dakika bekle, site deploy olacak
9. Vercel sana bir URL verecek: `celiklerteknik.vercel.app`

---

## ADIM 5: Environment Variables Ekle

Vercel Dashboard'da:

1. Projeye tıkla → **"Settings"** sekmesi
2. Sol menüden **"Environment Variables"**
3. Aşağıdaki değişkenleri tek tek ekle:

| Key | Value | Açıklama |
|-----|-------|----------|
| `DATABASE_URL` | `postgresql://...` (Neon'dan aldığın) | Veritabanı bağlantısı |
| `JWT_SECRET` | `cok-gizli-en-az-32-karakter-sifre-yaz-buraya` | Rastgele uzun şifre |
| `NEXTAUTH_URL` | `https://celiklerteknik.com` | Site URL'si |
| `ADMIN_EMAIL` | `admin@celiklerteknik.com` | Bildirim emaili |

### Opsiyonel (Email için):
| Key | Value |
|-----|-------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `senin-email@gmail.com` |
| `SMTP_PASS` | `uygulama-sifresi` |

### Opsiyonel (Analytics için):
| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` |

4. Her değişkeni ekledikten sonra **"Save"** tıkla
5. Tüm değişkenleri ekledikten sonra **"Deployments"** sekmesine git
6. En son deployment'ın yanındaki **"..."** → **"Redeploy"** tıkla

---

## ADIM 6: Veritabanını Hazırla

Vercel Dashboard'da:

1. Projeye tıkla → **"Settings"** → **"Functions"**
2. Veya terminalde şu komutu çalıştır:

```bash
# Prisma migration'ları çalıştır
npx prisma migrate deploy

# Seed verilerini yükle
npx prisma db seed
```

**Alternatif:** Neon.tech dashboard'ından SQL çalıştır:
1. Neon.tech → Projen → "SQL Editor"
2. Prisma'nın oluşturduğu SQL'leri çalıştır

---

## ADIM 7: Domain Bağla

### Domain Nereden Alınır?
- **isimtescil.net** (Türkiye)
- **natro.com** (Türkiye)
- **Namecheap.com** (Yurtdışı, ucuz)
- **GoDaddy.com** (Yurtdışı)

### Vercel'e Domain Ekle:

1. Vercel Dashboard → Projen → **"Settings"** → **"Domains"**
2. `celiklerteknik.com` yaz → **"Add"** tıkla
3. Vercel sana DNS ayarlarını gösterecek

### Domain Sağlayıcında DNS Ayarları:

Domain aldığın yerin paneline gir (isimtescil, natro, namecheap vs.)

**DNS Records** veya **DNS Yönetimi** bölümüne git ve şunları ekle:

| Tip | Host/Name | Value/Değer | TTL |
|-----|-----------|-------------|-----|
| A | @ | `76.76.21.21` | 3600 |
| CNAME | www | `cname.vercel-dns.com` | 3600 |

**Veya Nameserver Değiştir (Daha Kolay):**

Domain sağlayıcında nameserver'ları şunlarla değiştir:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

4. DNS değişiklikleri 5 dakika - 48 saat sürebilir (genelde 30 dk)
5. Vercel otomatik SSL sertifikası verecek (HTTPS)

---

## ADIM 8: Test Et

1. https://celiklerteknik.com adresini aç
2. Site açılıyor mu kontrol et
3. https://celiklerteknik.com/admin adresine git
4. Giriş yap:
   - Email: `admin@celiklerteknik.com`
   - Şifre: `admin123`
5. **ÖNEMLİ:** Giriş yaptıktan sonra şifreyi değiştir!

---

## ADIM 9: Admin Şifresini Değiştir

1. Admin panele giriş yap
2. Ayarlar'a git veya Neon.tech SQL Editor'da:

```sql
-- Şifreyi değiştirmek için (hash'lenmiş şifre gerekli)
-- Önce yeni şifreyi hash'le, sonra güncelle
```

Veya seed.ts'deki şifreyi değiştirip tekrar seed çalıştır.

---

## 📋 Özet Checklist

- [ ] GitHub hesabı oluştur
- [ ] Projeyi GitHub'a yükle
- [ ] Neon.tech'te veritabanı oluştur
- [ ] Vercel'e deploy et
- [ ] Environment variables ekle
- [ ] Redeploy yap
- [ ] Domain satın al
- [ ] DNS ayarlarını yap
- [ ] SSL aktif olana kadar bekle
- [ ] Siteyi test et
- [ ] Admin şifresini değiştir

---

## 🆘 Sorun Giderme

### Site açılmıyor
- DNS yayılması 48 saate kadar sürebilir
- Vercel Dashboard'da deployment durumunu kontrol et

### Veritabanı hatası
- DATABASE_URL doğru mu kontrol et
- Neon.tech'te proje aktif mi kontrol et

### Admin girişi çalışmıyor
- JWT_SECRET ekli mi kontrol et
- Seed çalıştırıldı mı kontrol et

### Email gitmiyor
- SMTP ayarları doğru mu kontrol et
- Gmail kullanıyorsan "Uygulama Şifresi" oluştur

---

## 📞 Destek

- Vercel Docs: https://vercel.com/docs
- Neon Docs: https://neon.tech/docs
- Next.js Docs: https://nextjs.org/docs

---

## 🔄 Güncelleme Nasıl Yapılır?

Kod değişikliği yaptığında:

1. GitHub Desktop'ta "Commit" yap
2. "Push" tıkla
3. Vercel otomatik olarak yeni versiyonu deploy eder (2-3 dk)

**Otomatik deployment:** GitHub'a her push'ta Vercel otomatik günceller!

---

*Rehber Tarihi: 6 Şubat 2026*

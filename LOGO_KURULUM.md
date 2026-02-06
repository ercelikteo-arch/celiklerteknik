# 🎨 Logo Kurulum Talimatları

## 📋 Adımlar

### 1. Logo Dosyasını Kaydetme

Logo dosyasını aşağıdaki konuma kaydedin:

```
public/images/logo.png
```

**Önemli Notlar:**
- Dosya adı tam olarak `logo.png` olmalıdır (küçük harf)
- Dosya `public/images/` klasörüne konulmalıdır
- PNG formatında olmalıdır (şeffaf arka plan destekli)

### 2. Klasör Yapısı

Proje klasör yapısı şu şekilde olmalıdır:

```
project_çelikler/
├── public/
│   └── images/
│       └── logo.png  ← Logo buraya
├── app/
├── components/
└── ...
```

### 3. Logo Boyutları

Logo otomatik olarak uygun boyutlarda gösterilecektir:

- **Header (Üst Menü)**: 180x60px (h-12 w-auto)
- **Footer (Alt Bilgi)**: 150x50px (h-10 w-auto)

### 4. Logo Renkleri

Logo iki farklı versiyonda kullanılıyor:

#### Header (Normal)
- Orijinal renkli logo
- Beyaz arka plan üzerinde

#### Footer (Beyaz)
- Beyaz versiyonu (brightness-0 invert filtresi ile)
- Koyu arka plan üzerinde

---

## ✅ Güncellenen Dosyalar

Logo entegrasyonu için aşağıdaki dosyalar güncellendi:

1. **components/Header.tsx**
   - Logo eklendi
   - Next.js Image component kullanıldı
   - Responsive tasarım
   - Priority loading (hızlı yükleme)

2. **components/Footer.tsx**
   - Logo eklendi
   - Beyaz versiyonu (invert filtresi)
   - Firma adı yerine logo gösteriliyor

3. **next.config.js**
   - Image optimization ayarları eklendi
   - AVIF ve WebP format desteği

---

## 🎨 Logo Özellikleri

### Tasarım
- **Renk Paleti**: Mavi tonları (sitenin renk şemasıyla uyumlu)
- **Stil**: Modern, kurumsal
- **Sembol**: Bina/yapı simgesi
- **Tipografi**: Bold, okunabilir

### Teknik Özellikler
- **Format**: PNG (şeffaf arka plan)
- **Boyut**: Optimize edilmiş
- **Kalite**: Yüksek çözünürlük
- **Responsive**: Tüm ekran boyutlarında uyumlu

---

## 📱 Görünüm Yerleri

Logo aşağıdaki yerlerde görünecektir:

### 1. Header (Üst Menü)
- Sol üst köşede
- Tıklanabilir (ana sayfaya yönlendirir)
- Tüm sayfalarda görünür
- Sticky (kaydırma sırasında sabit kalır)

### 2. Footer (Alt Bilgi)
- Sol üst bölümde
- Beyaz versiyonu
- Tıklanabilir (ana sayfaya yönlendirir)
- Tüm sayfalarda görünür

### 3. Mobil Menü
- Mobil cihazlarda da görünür
- Responsive tasarım
- Hamburger menü açıkken de görünür

---

## 🔧 Özelleştirme

### Logo Boyutunu Değiştirme

#### Header'da:
```tsx
// components/Header.tsx içinde
<Image
  src="/images/logo.png"
  alt={siteConfig.companyName}
  width={180}  // ← Genişlik
  height={60}  // ← Yükseklik
  className="h-12 w-auto"  // ← CSS boyutu
  priority
/>
```

#### Footer'da:
```tsx
// components/Footer.tsx içinde
<Image
  src="/images/logo.png"
  alt={siteConfig.companyName}
  width={150}  // ← Genişlik
  height={50}  // ← Yükseklik
  className="h-10 w-auto brightness-0 invert"  // ← CSS boyutu ve filtre
/>
```

### Logo Rengini Değiştirme

Footer'da beyaz logo için kullanılan filtre:
```css
brightness-0 invert
```

Bu filtreyi kaldırırsanız orijinal renkli logo görünür.

---

## 🚀 Test Etme

Logo doğru çalışıyor mu kontrol edin:

### 1. Görsel Kontrol
- [ ] Header'da logo görünüyor mu?
- [ ] Footer'da beyaz logo görünüyor mu?
- [ ] Logo net ve kaliteli mi?
- [ ] Logo oranları doğru mu?

### 2. Fonksiyon Kontrol
- [ ] Header'daki logoya tıklayınca ana sayfaya gidiyor mu?
- [ ] Footer'daki logoya tıklayınca ana sayfaya gidiyor mu?
- [ ] Mobil cihazda logo düzgün görünüyor mu?

### 3. Performans Kontrol
- [ ] Logo hızlı yükleniyor mu?
- [ ] Sayfa geçişlerinde logo düzgün görünüyor mu?
- [ ] Scroll yaparken logo sabit kalıyor mu? (header)

---

## 🐛 Sorun Giderme

### Logo Görünmüyorsa

1. **Dosya Yolu Kontrolü**
   ```
   public/images/logo.png
   ```
   Dosya tam olarak bu konumda mı?

2. **Dosya Adı Kontrolü**
   - Dosya adı `logo.png` mi? (küçük harf)
   - Uzantı `.png` mi?

3. **Tarayıcı Cache**
   - Tarayıcı cache'ini temizleyin
   - Hard refresh yapın (Ctrl+F5)

4. **Development Server**
   - Development server'ı yeniden başlatın
   ```bash
   npm run dev
   ```

### Logo Bozuk Görünüyorsa

1. **Boyut Ayarları**
   - `width` ve `height` değerlerini kontrol edin
   - `className` içindeki boyut değerlerini kontrol edin

2. **Aspect Ratio**
   - Logo oranları korunuyor mu?
   - `w-auto` class'ı var mı?

3. **Kalite**
   - Logo dosyası yüksek çözünürlükte mi?
   - PNG formatında mı?

---

## 📝 Notlar

- Logo Next.js Image component ile optimize edilmiştir
- Lazy loading otomatik olarak yapılır (header'da priority var)
- WebP ve AVIF formatlarına otomatik dönüşüm yapılır
- Responsive tasarım için `w-auto` kullanılmıştır
- SEO için `alt` attribute eklenmiştir

---

## 🎯 Sonraki Adımlar

Logo başarıyla entegre edildikten sonra:

1. ✅ Logo dosyasını `public/images/logo.png` olarak kaydedin
2. ✅ Development server'ı başlatın: `npm run dev`
3. ✅ Tarayıcıda kontrol edin: `http://localhost:3000`
4. ✅ Tüm sayfalarda logo görünümünü test edin
5. ✅ Mobil cihazlarda test edin

---

**Kurulum Tarihi**: 6 Şubat 2024
**Durum**: ✅ Kod hazır, logo dosyası bekleniyor
**Dosya Konumu**: `public/images/logo.png`

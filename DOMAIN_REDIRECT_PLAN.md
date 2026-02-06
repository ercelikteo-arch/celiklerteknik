# Domain Redirect Planı: celikleryapi.com → celiklerteknik.com

## 1. Hosting/DNS Seviyesinde 301 Redirect

Eski domain'den yeni domain'e yönlendirme hosting seviyesinde yapılmalıdır.

### Vercel için:
```json
// vercel.json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "celikleryapi.com"
        }
      ],
      "destination": "https://celiklerteknik.com/:path*",
      "permanent": true
    },
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "www.celikleryapi.com"
        }
      ],
      "destination": "https://celiklerteknik.com/:path*",
      "permanent": true
    }
  ]
}
```

### Nginx için:
```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name celikleryapi.com www.celikleryapi.com;
    
    # SSL sertifikaları (varsa)
    # ssl_certificate /path/to/cert.pem;
    # ssl_certificate_key /path/to/key.pem;
    
    return 301 https://celiklerteknik.com$request_uri;
}
```

### Apache için (.htaccess):
```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(www\.)?celikleryapi\.com$ [NC]
RewriteRule ^(.*)$ https://celiklerteknik.com/$1 [R=301,L]
```

### Cloudflare için:
1. Page Rules > Create Page Rule
2. URL: `*celikleryapi.com/*`
3. Setting: Forwarding URL (301)
4. Destination: `https://celiklerteknik.com/$2`

## 2. Google Search Console Ayarları

1. Yeni domain'i (celiklerteknik.com) Search Console'a ekle
2. Eski domain'de "Change of Address" tool'unu kullan
3. Her iki domain için sitemap gönder
4. 301 redirect'lerin çalıştığını doğrula

## 3. Kontrol Listesi

- [ ] DNS kayıtları güncellendi
- [ ] SSL sertifikası yeni domain için aktif
- [ ] 301 redirect'ler test edildi
- [ ] Google Search Console'da adres değişikliği yapıldı
- [ ] Sitemap yeni domain ile gönderildi
- [ ] Google Analytics/Tag Manager güncellendi
- [ ] Sosyal medya profilleri güncellendi
- [ ] Google My Business güncellendi
- [ ] E-posta imzaları güncellendi

## 4. Test Komutları

```bash
# 301 redirect kontrolü
curl -I https://celikleryapi.com
# Beklenen: HTTP/1.1 301 Moved Permanently
# Location: https://celiklerteknik.com/

# Alt sayfa kontrolü
curl -I https://celikleryapi.com/hizmetler
# Beklenen: Location: https://celiklerteknik.com/hizmetler
```

## 5. Önemli Notlar

- Eski domain'i en az 1 yıl aktif tutun (redirect için)
- Google'ın yeni domain'i indexlemesi 2-4 hafta sürebilir
- Backlink'ler otomatik olarak yeni domain'e yönlenecek
- Ranking geçici olarak düşebilir, 1-2 ay içinde normale döner

# Cloudflare Pages'e Deployment Rehberi

Bu rehber, Pamuk Öğretmen web sitesini Cloudflare Pages'e nasıl yükleyeceğinizi adım adım anlatmaktadır.

## 📋 Gereksinimler

- GitHub hesabı (ücretsiz)
- Cloudflare hesabı (ücretsiz)
- Git kurulu (https://git-scm.com/downloads)

## 🚀 Adım 1: GitHub'a Yükleme

### 1.1 GitHub'da Repository Oluşturun

1. https://github.com adresine gidin
2. Sağ üstteki **+** butonuna tıklayın
3. **New repository** seçeneğini seçin
4. Repository ismi: `pamukhoca-website` (veya istediğiniz isim)
5. Public veya Private seçin
6. **Create repository** butonuna tıklayın

### 1.2 Projeyi GitHub'a Yükleyin

Terminal/PowerShell'i açın ve proje klasörüne gidin:

```powershell
cd "C:\Users\cosku\OneDrive\Masaüstü\projeler_desktop\PythonPro\hakan_proje\pamukhocaJS"
```

Aşağıdaki komutları sırasıyla çalıştırın:

```bash
# Git repository'sini başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit - Pamuk Hoca Website"

# Ana branch'i main olarak ayarla
git branch -M main

# GitHub repository'nizi bağlayın (URL'i kendi repository URL'iniz ile değiştirin)
git remote add origin https://github.com/KULLANICI_ADINIZ/pamukhoca-website.git

# GitHub'a yükleyin
git push -u origin main
```

**Not**: `KULLANICI_ADINIZ` kısmını kendi GitHub kullanıcı adınızla değiştirin.

## ☁️ Adım 2: Cloudflare Pages'e Bağlama

### 2.1 Cloudflare Hesabı Oluşturun (Yoksa)

1. https://dash.cloudflare.com/sign-up adresine gidin
2. E-posta ve şifre ile ücretsiz hesap oluşturun
3. E-posta doğrulaması yapın

### 2.2 Pages Projesi Oluşturun

1. Cloudflare Dashboard'a gidin: https://dash.cloudflare.com
2. Sol menüden **Workers & Pages** seçeneğini tıklayın
3. **Create application** butonuna tıklayın
4. **Pages** sekmesini seçin
5. **Connect to Git** butonuna tıklayın

### 2.3 GitHub'ı Bağlayın

1. **Connect GitHub** butonuna tıklayın
2. GitHub'da izin verin
3. Repository'nizi seçin: `pamukhoca-website`
4. **Begin setup** butonuna tıklayın

### 2.4 Build Ayarlarını Yapın

Aşağıdaki ayarları yapın:

- **Project name**: `pamukhoca` (veya istediğiniz isim)
- **Production branch**: `main`
- **Framework preset**: `None`
- **Build command**: (BOŞ BIRAKIN)
- **Build output directory**: `/` (sadece slash)
- **Root directory**: (BOŞ BIRAKIN)

### 2.5 Deploy Edin

1. **Save and Deploy** butonuna tıklayın
2. Deployment sürecini izleyin (yaklaşık 1-2 dakika)
3. **✓ Success** mesajını gördüğünüzde tamamdır!
4. Verilen URL'i tıklayın (örn: `https://pamukhoca.pages.dev`)

## 🎉 Tebrikler!

Siteniz artık yayında! Cloudflare size otomatik olarak bir URL verdi:
- **URL**: `https://pamukhoca.pages.dev`
- veya seçtiğiniz isimle: `https://PROJE-ISMINIZ.pages.dev`

## 🌐 Adım 3: Özel Domain Bağlama (Opsiyonel)

Kendi domain'inizi kullanmak isterseniz:

### 3.1 Domain Satın Alın

Domain almak için:
- https://www.godaddy.com
- https://www.namecheap.com
- veya Cloudflare Registrar (önerilir)

### 3.2 Domain'i Cloudflare'e Ekleyin

1. Cloudflare Dashboard → **Websites** → **Add a site**
2. Domain adınızı girin (örn: `pamukhoca.com`)
3. Free plan'i seçin
4. Nameserver'ları domain sağlayıcınızda güncelleyin
5. Domain aktif olana kadar bekleyin (5-24 saat)

### 3.3 Domain'i Pages'e Bağlayın

1. Cloudflare Dashboard → **Workers & Pages**
2. Projenizi (`pamukhoca`) seçin
3. **Custom domains** sekmesine gidin
4. **Set up a custom domain** butonuna tıklayın
5. Domain'inizi girin (örn: `www.pamukhoca.com`)
6. **Activate domain** butonuna tıklayın
7. SSL sertifikası otomatik olarak yapılandırılacak

Artık siteniz kendi domain'inizde yayında: `https://www.pamukhoca.com`

## 🔄 Adım 4: Site Güncellemeleri

### Yeni Değişiklikleri Yayınlama

Sitenizde değişiklik yaptığınızda:

```bash
# Değişiklikleri kaydedin
git add .
git commit -m "Site güncellemesi"
git push
```

Cloudflare otomatik olarak yeni versiyonu deploy edecektir (yaklaşık 1 dakika).

## 📧 Adım 5: E-posta Entegrasyonu (Opsiyonel)

İletişim formunun e-posta göndermesi için:

### 5.1 Resend Hesabı Oluşturun

1. https://resend.com adresine gidin
2. Ücretsiz hesap oluşturun (100 email/gün)
3. **API Keys** bölümünden yeni key oluşturun
4. API key'i kopyalayın

### 5.2 Cloudflare'e API Key Ekleyin

1. Cloudflare Dashboard → **Workers & Pages**
2. Projenizi seçin
3. **Settings** → **Environment variables**
4. **Add variables** butonuna tıklayın:
   - **Variable name**: `RESEND_API_KEY`
   - **Value**: `re_xxxxxxxxxxxxx` (kopyaladığınız key)
   - **Environment**: `Production` seçin
5. **Save** butonuna tıklayın

### 5.3 Domain Doğrulaması (Resend'de)

1. Resend Dashboard → **Domains**
2. **Add Domain** butonuna tıklayın
3. Domain'inizi girin (örn: `pamukhoca.com`)
4. Verilen DNS kayıtlarını Cloudflare DNS'e ekleyin
5. Doğrulama tamamlanana kadar bekleyin

### 5.4 Contact.js Dosyasını Güncelleyin

`functions/api/contact.js` dosyasındaki Resend kodunun yorum satırlarını kaldırın ve:
- `from` adresini güncelleyin: `noreply@yourdomain.com`
- `to` adresini güncelleyin: `pamuk.matematik@email.com`

Değişiklikleri GitHub'a yükleyin:

```bash
git add functions/api/contact.js
git commit -m "E-posta entegrasyonu eklendi"
git push
```

## 🎨 Özelleştirme İpuçları

### Logo ve Resimler
- `static/img/logo.png` - Kendi logonuzu ekleyin
- `static/img/1.jpeg`, `2.jpeg`, vb. - Kendi resimlerinizi ekleyin

### İletişim Bilgileri
Her HTML dosyasında şunları güncelleyin:
- Telefon numarası
- E-posta adresi
- Adres bilgileri

### Renkler
`static/css/style.css` dosyasında:
```css
.navbar {
    background: #085E7D !important; /* İstediğiniz renk */
}
```

## 🆘 Sık Karşılaşılan Sorunlar

### Problem: "git: command not found"
**Çözüm**: Git'i yükleyin: https://git-scm.com/downloads

### Problem: GitHub'a push yapamıyorum
**Çözüm**: GitHub Personal Access Token oluşturun:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. `repo` yetkisini verin
4. Token'ı şifre olarak kullanın

### Problem: Cloudflare'de deployment başarısız
**Çözüm**: Build ayarlarını kontrol edin:
- Build command: BOŞ
- Build output directory: `/`

### Problem: İletişim formu çalışmıyor
**Çözüm**: 
1. Browser console'da hata olup olmadığına bakın (F12)
2. `functions/api/contact.js` dosyasının doğru yerde olduğundan emin olun
3. Cloudflare Pages Functions'ın etkin olduğunu kontrol edin

## 📞 Destek

Yardıma mı ihtiyacınız var?
- GitHub Issues: https://github.com/KULLANICI_ADINIZ/pamukhoca-website/issues
- Cloudflare Community: https://community.cloudflare.com
- Cloudflare Docs: https://developers.cloudflare.com/pages

## ✅ Checklist

Deployment öncesi kontrol listesi:

- [ ] Git kurulu
- [ ] GitHub hesabı var
- [ ] Cloudflare hesabı var
- [ ] Proje GitHub'a yüklendi
- [ ] Cloudflare Pages projesi oluşturuldu
- [ ] Site başarıyla deploy edildi
- [ ] Site URL'i çalışıyor
- [ ] İletişim bilgileri güncellendi
- [ ] Logo/resimler değiştirildi
- [ ] (Opsiyonel) Özel domain bağlandı
- [ ] (Opsiyonel) E-posta entegrasyonu yapıldı

---

**Başarılar! 🎉**

Herhangi bir sorunuz varsa README.md dosyasına da bakabilirsiniz.

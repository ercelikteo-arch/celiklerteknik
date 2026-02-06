// İlçe verileri - her ilçeye özel içerik
export const districts = [
  { 
    slug: 'canakkale-merkez', 
    name: 'Çanakkale Merkez', 
    population: '180.000',
    uniqueContent: 'Çanakkale Merkez, ilin en kalabalık ve en gelişmiş ilçesidir. Şehir merkezinde yoğun konut ve ticari alanlar bulunmaktadır. Ekibimiz merkezdeki tüm mahallelere 30 dakika içinde ulaşabilmektedir.',
    serviceNote: 'Merkez ilçede yoğun talep nedeniyle randevu sistemiyle çalışıyoruz. Acil durumlar için 7/24 hizmet veriyoruz.'
  },
  { 
    slug: 'biga', 
    name: 'Biga', 
    population: '60.000',
    uniqueContent: 'Biga, Çanakkale\'nin en büyük ikinci ilçesidir. Sanayi bölgesi ve yoğun konut alanlarıyla öne çıkar. Biga\'da hem konut hem de endüstriyel tesisat projelerinde uzmanız.',
    serviceNote: 'Biga\'ya özel ekibimiz hafta içi her gün hizmet vermektedir. Sanayi bölgesinde endüstriyel projeler için özel fiyatlandırma sunuyoruz.'
  },
  { 
    slug: 'gelibolu', 
    name: 'Gelibolu', 
    population: '30.000',
    uniqueContent: 'Gelibolu, tarihi yarımadası ve deniz kıyısı konumuyla özel bir ilçedir. Gelibolu şubemiz sayesinde bölgeye en hızlı hizmeti sunuyoruz. Yazlık konutlar ve oteller için özel bakım paketlerimiz mevcuttur.',
    serviceNote: 'Gelibolu\'da kendi şubemiz bulunmaktadır. Aynı gün servis garantisi veriyoruz.'
  },
  { 
    slug: 'ezine', 
    name: 'Ezine', 
    population: '25.000',
    uniqueContent: 'Ezine, ünlü peyniriyle tanınan tarım ve hayvancılık ağırlıklı bir ilçedir. Kırsal alanlarda da hizmet veriyoruz. Çiftlik evleri ve müstakil konutlar için özel çözümler sunuyoruz.',
    serviceNote: 'Ezine ve köylerine düzenli servis günlerimiz mevcuttur. Toplu taleplerde özel indirimler uyguluyoruz.'
  },
  { 
    slug: 'lapseki', 
    name: 'Lapseki', 
    population: '15.000',
    uniqueContent: 'Lapseki, Çanakkale Boğazı kıyısında stratejik konumuyla öne çıkar. Lapseki şubemiz sayesinde bölgeye anında müdahale edebiliyoruz. Feribot iskelesi çevresindeki işletmelere özel hizmet sunuyoruz.',
    serviceNote: 'Lapseki\'de kendi şubemiz bulunmaktadır. Acil durumlarda 15 dakika içinde müdahale garantisi veriyoruz.'
  },
  { 
    slug: 'can', 
    name: 'Çan', 
    population: '35.000',
    uniqueContent: 'Çan, termik santral ve madencilik sektörüyle öne çıkan bir ilçedir. Endüstriyel tesisat projelerinde geniş tecrübemiz var. Linyit ocakları çevresindeki konutlara özel hizmet veriyoruz.',
    serviceNote: 'Çan\'a haftada 3 gün düzenli servis veriyoruz. Endüstriyel projeler için 7/24 destek sunuyoruz.'
  },
  { 
    slug: 'ayvacik', 
    name: 'Ayvacık', 
    population: '20.000',
    uniqueContent: 'Ayvacık, Assos antik kenti ve sahil turizmiyle ünlüdür. Yazlık konutlar ve butik oteller için özel bakım paketlerimiz var. Küçükkuyu ve Altınoluk bölgelerine de hizmet veriyoruz.',
    serviceNote: 'Ayvacık ve sahil beldelerine yaz sezonunda günlük servis veriyoruz. Sezon öncesi bakım kampanyalarımızdan yararlanın.'
  },
  { 
    slug: 'bayramic', 
    name: 'Bayramiç', 
    population: '18.000',
    uniqueContent: 'Bayramiç, Kaz Dağları eteklerinde doğal güzellikleriyle öne çıkar. Dağ evleri ve kırsal konutlar için özel ısıtma çözümleri sunuyoruz. Soğuk kış aylarında acil servis önceliği veriyoruz.',
    serviceNote: 'Bayramiç\'e haftada 2 gün düzenli servis veriyoruz. Kış aylarında acil durumlar için öncelikli hizmet sunuyoruz.'
  },
  { 
    slug: 'eceabat', 
    name: 'Eceabat', 
    population: '8.000',
    uniqueContent: 'Eceabat, Gelibolu Yarımadası\'nın güney ucunda yer alır. Şehitlikler bölgesindeki konaklama tesislerine özel hizmet veriyoruz. Feribot trafiği nedeniyle ulaşım kolaydır.',
    serviceNote: 'Eceabat\'a Gelibolu şubemizden hizmet veriyoruz. Aynı gün servis imkanı mevcuttur.'
  },
  { 
    slug: 'bozcaada', 
    name: 'Bozcaada', 
    population: '3.000',
    uniqueContent: 'Bozcaada, Ege\'nin incisi olarak bilinen ada ilçemizdir. Ada koşullarına uygun özel ekipman ve malzeme stokumuz mevcuttur. Feribot saatlerine göre servis planlaması yapıyoruz.',
    serviceNote: 'Bozcaada\'ya feribot saatlerine göre planlı servis veriyoruz. Ada içi acil durumlar için yerel iş ortaklarımız mevcuttur.'
  },
  { 
    slug: 'gokceada', 
    name: 'Gökçeada', 
    population: '10.000',
    uniqueContent: 'Gökçeada, Türkiye\'nin en büyük adasıdır. Rüzgar enerjisi potansiyeli yüksek olan adada alternatif enerji sistemleri kurulumu yapıyoruz. Organik tarım tesisleri için özel çözümler sunuyoruz.',
    serviceNote: 'Gökçeada\'ya aylık planlı servis ziyaretleri düzenliyoruz. Büyük projeler için adada konaklayarak çalışıyoruz.'
  },
  { 
    slug: 'yenice', 
    name: 'Yenice', 
    population: '22.000',
    uniqueContent: 'Yenice, orman köyleri ve doğal yaşam alanlarıyla öne çıkar. Kırsal bölgelerde jeneratör destekli sistemler kuruyoruz. Orman köylerine özel ısıtma çözümleri sunuyoruz.',
    serviceNote: 'Yenice ve köylerine haftada 2 gün servis veriyoruz. Ulaşımı zor bölgeler için özel araç desteğimiz mevcuttur.'
  },
]

// Hizmet verileri
export const services = [
  {
    slug: 'dogalgaz-tesisati',
    name: 'Doğalgaz Tesisatı',
    shortName: 'Doğalgaz',
    description: 'Profesyonel doğalgaz tesisatı kurulumu, bakımı ve onarımı',
    keywords: ['doğalgaz tesisatı', 'gaz tesisatı', 'doğalgaz kurulumu']
  },
  {
    slug: 'kombi-servisi',
    name: 'Kombi Servisi',
    shortName: 'Kombi',
    description: 'Tüm markalarda kombi montajı, bakımı ve tamiri',
    keywords: ['kombi servisi', 'kombi tamiri', 'kombi bakımı', 'kombi montajı']
  },
  {
    slug: 'isi-pompasi',
    name: 'Isı Pompası',
    shortName: 'Isı Pompası',
    description: 'Enerji tasarruflu ısı pompası sistemleri kurulumu',
    keywords: ['ısı pompası', 'heat pump', 'ısı pompası kurulumu']
  },
  {
    slug: 'petek-temizleme',
    name: 'Petek Temizleme',
    shortName: 'Petek Temizleme',
    description: 'Profesyonel petek ve radyatör temizliği hizmeti',
    keywords: ['petek temizleme', 'radyatör temizliği', 'petek bakımı']
  },
  {
    slug: 'su-tesisati',
    name: 'Su Tesisatı',
    shortName: 'Su Tesisatı',
    description: 'Temiz ve atık su tesisatı kurulumu ve tamiri',
    keywords: ['su tesisatı', 'tesisat tamiri', 'sıhhi tesisat']
  },
  {
    slug: 'gunes-enerjisi',
    name: 'Güneş Enerjisi',
    shortName: 'Güneş Enerjisi',
    description: 'Güneş enerjisi sistemleri kurulumu ve bakımı',
    keywords: ['güneş enerjisi', 'solar panel', 'güneş paneli']
  },
  {
    slug: 'yerden-isitma',
    name: 'Yerden Isıtma',
    shortName: 'Yerden Isıtma',
    description: 'Yerden ısıtma sistemi kurulumu ve bakımı',
    keywords: ['yerden ısıtma', 'yer altı ısıtma', 'döşemeden ısıtma']
  },
]

// Longtail SEO sayfaları
export const longtailPages = [
  {
    slug: 'kombi-neden-su-akitir',
    title: 'Kombi Neden Su Akıtır? Nedenleri ve Çözümleri',
    description: 'Kombinin su akıtmasının nedenleri, çözüm yolları ve ne zaman servis çağırmanız gerektiği hakkında detaylı bilgi.',
    keywords: ['kombi su akıtıyor', 'kombi altından su geliyor', 'kombi sızıntı'],
    content: `
      <h2>Kombi Neden Su Akıtır?</h2>
      <p>Kombinin su akıtması ciddi bir sorun olabilir. İşte en yaygın nedenler:</p>
      
      <h3>1. Basınç Valfi Arızası</h3>
      <p>Sistem basıncı çok yükseldiğinde emniyet valfi devreye girer ve fazla suyu dışarı atar.</p>
      
      <h3>2. Genleşme Tankı Sorunu</h3>
      <p>Genleşme tankı arızalandığında basınç dengesizliği oluşur ve su kaçağı meydana gelebilir.</p>
      
      <h3>3. Conta ve Bağlantı Sızıntıları</h3>
      <p>Zamanla contalar eskir ve bağlantı noktalarından sızıntı olabilir.</p>
      
      <h2>Ne Yapmalısınız?</h2>
      <ul>
        <li>Önce sistem basıncını kontrol edin (1.2-1.5 bar olmalı)</li>
        <li>Sızıntı noktasını tespit etmeye çalışın</li>
        <li>Profesyonel servis çağırın</li>
      </ul>
    `
  },
  {
    slug: 'petek-neden-isinmaz',
    title: 'Petek Neden Isınmaz? Sorun Giderme Rehberi',
    description: 'Peteğin ısınmamasının nedenleri, hava alma işlemi ve çözüm önerileri.',
    keywords: ['petek ısınmıyor', 'radyatör ısınmıyor', 'petek soğuk'],
    content: `
      <h2>Petek Neden Isınmaz?</h2>
      <p>Peteğin ısınmaması farklı nedenlerden kaynaklanabilir:</p>
      
      <h3>1. Hava Birikimi</h3>
      <p>En yaygın neden budur. Sistemde biriken hava ısı transferini engeller.</p>
      
      <h3>2. Tıkanıklık</h3>
      <p>Petek içinde biriken kir ve tortu su dolaşımını engeller.</p>
      
      <h2>Hava Alma Nasıl Yapılır?</h2>
      <ol>
        <li>Peteğin üstündeki hava alma vanasını bulun</li>
        <li>Altına bir kap koyun</li>
        <li>Vanayı yavaşça açın</li>
        <li>Hava çıkışı bitip su gelince kapatın</li>
      </ol>
    `
  },
  {
    slug: 'kombi-basinc-dusuyor',
    title: 'Kombi Basıncı Neden Düşüyor? Çözüm Yolları',
    description: 'Kombi basıncının düşme nedenleri, basınç ayarlama ve ne zaman servis çağırmanız gerektiği.',
    keywords: ['kombi basınç düşüyor', 'kombi basınç ayarı', 'kombi su basıncı'],
    content: `
      <h2>Kombi Basıncı Neden Düşer?</h2>
      <p>Normal kombi basıncı 1.2-1.5 bar arasında olmalıdır.</p>
      
      <h3>1. Sistemde Kaçak Var</h3>
      <p>Boru, petek veya bağlantı noktalarında sızıntı olabilir.</p>
      
      <h3>2. Genleşme Tankı Arızası</h3>
      <p>Tank membranı yırtılmış veya hava kaçırmış olabilir.</p>
      
      <h2>Basınç Nasıl Artırılır?</h2>
      <ol>
        <li>Kombinin altındaki su giriş vanasını bulun</li>
        <li>Yavaşça açın ve basınç göstergesini izleyin</li>
        <li>1.2-1.5 bar'a ulaşınca kapatın</li>
      </ol>
    `
  },
  {
    slug: 'isi-pompasi-elektrik-tuketimi',
    title: 'Isı Pompası Elektrik Tüketimi Ne Kadar?',
    description: 'Isı pompası elektrik tüketimi hesaplama, tasarruf oranları ve maliyet karşılaştırması.',
    keywords: ['ısı pompası elektrik tüketimi', 'ısı pompası fatura', 'ısı pompası maliyet'],
    content: `
      <h2>Isı Pompası Elektrik Tüketimi</h2>
      <p>Isı pompası, tükettiği elektriğin 3-5 katı ısı üretir (COP değeri).</p>
      
      <h2>Örnek Hesaplama (150 m² ev)</h2>
      <ul>
        <li>Gerekli ısı: ~10 kW</li>
        <li>COP değeri: 4</li>
        <li>Aylık tüketim: ~600 kWh</li>
        <li>Aylık maliyet: ~1.500 TL</li>
      </ul>
      
      <h2>Kombi ile Karşılaştırma</h2>
      <p>Aynı ev için kombi: ~3.500-4.000 TL/ay</p>
      <p><strong>Tasarruf: %50-60</strong></p>
    `
  },
  {
    slug: 'kombi-ariza-kodlari',
    title: 'Kombi Arıza Kodları ve Anlamları',
    description: 'Tüm markalarda kombi arıza kodları, ne anlama geldikleri ve çözüm önerileri.',
    keywords: ['kombi arıza kodu', 'kombi hata kodu', 'kombi E kodları'],
    content: `
      <h2>Yaygın Kombi Arıza Kodları</h2>
      
      <h3>E01 - Ateşleme Hatası</h3>
      <p>Gaz gelmiyordur veya ateşleme elektrodu arızalıdır.</p>
      
      <h3>E02 - Aşırı Isınma</h3>
      <p>Kombi aşırı ısınmış. Pompa sorunu olabilir.</p>
      
      <h3>E03 - Baca Hatası</h3>
      <p>Baca tıkalı veya fan arızalı olabilir.</p>
      
      <h3>E04 - Düşük Basınç</h3>
      <p>Sistem basıncı düşük. Su takviyesi yapın.</p>
    `
  },
  {
    slug: 'petek-temizligi-fiyatlari',
    title: 'Petek Temizliği Fiyatları 2026',
    description: '2026 güncel petek temizliği fiyatları, fiyatı etkileyen faktörler.',
    keywords: ['petek temizliği fiyatı', 'petek temizleme ücreti', 'radyatör temizliği fiyat'],
    content: `
      <h2>2026 Petek Temizliği Fiyatları</h2>
      <ul>
        <li><strong>1+1 Daire:</strong> 1.200 - 1.800 TL</li>
        <li><strong>2+1 Daire:</strong> 1.800 - 2.500 TL</li>
        <li><strong>3+1 Daire:</strong> 2.500 - 3.500 TL</li>
        <li><strong>Villa:</strong> 5.000 - 8.000 TL</li>
      </ul>
      
      <h2>Neden Çelikler Yapı?</h2>
      <ul>
        <li>Sabit fiyat garantisi</li>
        <li>1 yıl işçilik garantisi</li>
        <li>Aynı gün hizmet</li>
      </ul>
    `
  },
]

// İlçe + Hizmet kombinasyonları için benzersiz içerik üretici
export const generateProgrammaticContent = (district: typeof districts[0], service: typeof services[0]) => {
  return {
    title: `${district.name} ${service.name} | Çelikler Yapı`,
    metaTitle: `${district.name} ${service.name} - 7/24 Hizmet | Çelikler Yapı`,
    metaDescription: `${district.name} bölgesinde profesyonel ${service.name.toLowerCase()} hizmeti. Aynı gün servis, garantili işçilik. Hemen arayın: 0532 473 9862`,
    h1: `${district.name} ${service.name}`,
    content: `
      <p>${district.name} ve çevresinde <strong>${service.name.toLowerCase()}</strong> hizmeti arıyorsanız doğru yerdesiniz. Çelikler Yapı olarak ${district.name} bölgesinde ${service.description.toLowerCase()} hizmeti sunuyoruz.</p>
      
      <h2>${district.name} Hakkında</h2>
      <p>${district.uniqueContent}</p>
      
      <h2>${district.name}'de ${service.shortName} Hizmetlerimiz</h2>
      <p>${district.name} ilçesinde ${district.population} nüfusa hizmet veren ekibimiz, ${service.name.toLowerCase()} konusunda 10 yılı aşkın tecrübeye sahiptir. Sertifikalı ustalarımız ile güvenli ve kaliteli hizmet garantisi sunuyoruz.</p>
      
      <h3>Servis Bilgisi</h3>
      <p>${district.serviceNote}</p>
      
      <h3>Neden Bizi Tercih Etmelisiniz?</h3>
      <ul>
        <li>✓ ${district.name}'de hızlı servis</li>
        <li>✓ Garantili işçilik</li>
        <li>✓ Uygun fiyat</li>
        <li>✓ 7/24 acil servis</li>
        <li>✓ Ücretsiz keşif</li>
      </ul>
      
      <h2>${district.name} ${service.shortName} Fiyatları</h2>
      <p>${district.name} bölgesinde ${service.name.toLowerCase()} fiyatları işin kapsamına göre değişmektedir. Ücretsiz keşif hizmetimizle size en uygun fiyat teklifini sunuyoruz. Toplu taleplerde ve düzenli bakım anlaşmalarında özel indirimler uyguluyoruz.</p>
      
      <h2>Hizmet Bölgelerimiz</h2>
      <p>${district.name} merkez ve tüm mahallelerinde hizmet vermekteyiz. Ayrıca Çanakkale'nin diğer ilçelerinde de ${service.name.toLowerCase()} hizmeti sunuyoruz.</p>
    `,
    faqs: [
      {
        question: `${district.name}'de ${service.name.toLowerCase()} fiyatları ne kadar?`,
        answer: `${district.name} bölgesinde ${service.name.toLowerCase()} fiyatları işin kapsamına göre değişir. Ücretsiz keşif için bizi arayın.`
      },
      {
        question: `${district.name}'de aynı gün ${service.name.toLowerCase()} hizmeti alabilir miyim?`,
        answer: `${district.serviceNote}`
      },
      {
        question: `${service.name} için garanti veriyor musunuz?`,
        answer: `Evet, tüm ${service.name.toLowerCase()} hizmetlerimizde işçilik garantisi veriyoruz. Kullandığımız malzemeler TSE belgeli ve garantilidir.`
      }
    ]
  }
}

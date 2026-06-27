export interface BlogPost {
  id: string
  slug: string
  category: string
  categoryKey: string
  date: string
  image: string
  title: { tr: string; en: string }
  excerpt: { tr: string; en: string }
  content: { tr: string; en: string }
}

export const categories = [
  { key: 'all', tr: 'Tüm Gönderiler', en: 'All Posts' },
  { key: 'cin-fuarlari', tr: 'Çin Fuarları', en: 'China Trade Fairs' },
  { key: 'lojistik-gumruk', tr: 'Lojistik & Gümrük', en: 'Logistics & Customs' },
  { key: 'tedarikci-bulma', tr: 'Güvenli Tedarikçi Bulma', en: 'Finding Reliable Suppliers' },
  { key: 'e-ticaret', tr: 'E-Ticaret & Platform Odaklı İthalat', en: 'E-Commerce & Platform Import' },
  { key: 'strateji-buyume', tr: 'Strateji & Büyüme', en: 'Strategy & Growth' },
  { key: 'hukuk-guvenlik', tr: 'Hukuk & Güvenlik', en: 'Legal & Safety' },
  { key: 'turk-girisimciler', tr: 'Türk Girişimcilere Özel', en: 'For Turkish Entrepreneurs' },
  { key: 'importing-from-china', tr: 'Importing from China', en: 'Importing from China' },
  { key: 'prep-center', tr: "Amerika'da Ara Depo (Prep Center)", en: 'US Prep Center Services' },
  { key: 'mobilya-ithalati', tr: 'Mobilya İthalatı', en: 'Furniture Import' },
  { key: 'fabrika-ziyaretleri', tr: 'Fabrika Ziyaretleri', en: 'Factory Visits' },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'uluslararasi-mobilya-uretim-teknoloji-fuari-2026',
    category: 'cin-fuarlari',
    categoryKey: 'cin-fuarlari',
    date: '2026-05-14',
    image: 'https://designweekguide.com/wp-content/uploads/2024/08/54_CIFF_15.jpg',
    title: {
      tr: 'Uluslararası Mobilya Üretim ve Teknoloji Fuarı 2026 | Çin',
      en: 'International Furniture Manufacturing & Technology Fair 2026 | China',
    },
    excerpt: {
      tr: 'Uluslararası Mobilya Üretim ve Teknoloji Fuarı 2026 | Guangzhou Çin. Dünyanın en büyük mobilya fuarlarından biri olan bu etkinlik, sektörün yenilikçi trendlerini keşfetmek için eşsiz bir fırsat sunuyor.',
      en: 'International Furniture Manufacturing & Technology Fair 2026 | Guangzhou China. One of the largest furniture fairs in the world, this event offers a unique opportunity to discover innovative industry trends.',
    },
    content: {
      tr: `Uluslararası Mobilya Üretim ve Teknoloji Fuarı (CIFF), her yıl Guangzhou'da düzenlenen dünyanın en büyük mobilya fuarlarından biridir. 2026 yılında da sektörün en yenilikçi ürünleri ve teknolojileri bu fuarda sergilenecektir.\n\nFuar, ev mobilyası, ofis mobilyası, dış mekan mobilyası ve mobilya üretim makineleri gibi geniş bir yelpazede ürünler sunmaktadır. Türk girişimciler için Çin'den mobilya ithalatında en güncel trendleri takip etmek ve doğrudan üreticilerle bağlantı kurmak için ideal bir fırsattır.\n\n**Fuar Bilgileri:**\n- Tarih: Mart 2026\n- Yer: Guangzhou, Çin\n- Sektör: Mobilya ve İç Tasarım\n- Ziyaretçi profili: İthalatçılar, perakendeciler, iç mimarlar`,
      en: `The International Furniture Manufacturing & Technology Fair (CIFF) is one of the world's largest furniture fairs held annually in Guangzhou. In 2026, the most innovative products and technologies in the industry will be showcased at this fair.\n\nThe fair offers a wide range of products including home furniture, office furniture, outdoor furniture, and furniture manufacturing machinery. It is an ideal opportunity for Turkish entrepreneurs to follow the latest trends in furniture imports from China and connect directly with manufacturers.\n\n**Fair Information:**\n- Date: March 2026\n- Location: Guangzhou, China\n- Sector: Furniture & Interior Design\n- Visitor profile: Importers, retailers, interior designers`,
    },
  },
  {
    id: '2',
    slug: 'chinaplas-2026-shanghai-fuari',
    category: 'cin-fuarlari',
    categoryKey: 'cin-fuarlari',
    date: '2026-05-14',
    image: 'https://scrapc.com/wp-content/uploads/2025/06/CHINAPLAS-2026-Shanghai-Plastics-Rubber-Expo.webp',
    title: {
      tr: 'CHINAPLAS 2026 Shanghai Fuarı',
      en: 'CHINAPLAS 2026 Shanghai Fair',
    },
    excerpt: {
      tr: 'Plastik ve Kauçuk Sektörünün Dünyadaki En Büyük Buluşmalarından Biri. CHINAPLAS 2026, Shanghai\'da sektörün öncü firmalarını bir araya getiriyor.',
      en: 'One of the Biggest Gatherings of the Plastics and Rubber Industry in the World. CHINAPLAS 2026 brings together leading companies in Shanghai.',
    },
    content: {
      tr: `CHINAPLAS, plastik ve kauçuk endüstrisinin Asya'daki en büyük fuarıdır. 2026 yılında Shanghai'da düzenlenecek olan fuar, binlerce katılımcı ve ziyaretçiyi ağırlamaktadır.\n\nFuarda plastik hammaddeleri, kauçuk ürünleri, plastik işleme makineleri ve yenilikçi malzemeler sergilenmektedir. Çin'den plastik ve kauçuk ürünleri ithal etmek isteyen firmalar için vazgeçilmez bir etkinliktir.\n\n**Fuar Bilgileri:**\n- Tarih: Nisan 2026\n- Yer: Shanghai, Çin\n- Sektör: Plastik & Kauçuk\n- Öne çıkan: Yeni nesil sürdürülebilir malzemeler`,
      en: `CHINAPLAS is the largest fair in Asia for the plastics and rubber industry. Scheduled to be held in Shanghai in 2026, the fair hosts thousands of exhibitors and visitors.\n\nThe fair showcases plastic raw materials, rubber products, plastic processing machines, and innovative materials. It is an essential event for companies looking to import plastics and rubber products from China.\n\n**Fair Information:**\n- Date: April 2026\n- Location: Shanghai, China\n- Sector: Plastics & Rubber\n- Highlights: Next-generation sustainable materials`,
    },
  },
  {
    id: '3',
    slug: 'guangzhou-aydinlatma-fuari',
    category: 'cin-fuarlari',
    categoryKey: 'cin-fuarlari',
    date: '2026-03-20',
    image: 'https://i.ytimg.com/vi/7fPEPLdS2m8/maxresdefault.jpg',
    title: {
      tr: 'Guangzhou Uluslararası Aydınlatma Fuarı',
      en: 'Guangzhou International Lighting Fair',
    },
    excerpt: {
      tr: 'Dünyanın en büyük aydınlatma fuarı olan Guangzhou Lighting Fair, LED teknolojileri ve akıllı aydınlatma çözümlerini keşfetmek için mükemmel bir fırsat.',
      en: 'The world\'s largest lighting fair, Guangzhou Lighting Fair is a perfect opportunity to discover LED technologies and smart lighting solutions.',
    },
    content: {
      tr: `Guangzhou Uluslararası Aydınlatma Fuarı, her yıl düzenlenen ve aydınlatma sektörünün en büyük buluşma noktasıdır. LED aydınlatma, akıllı ev sistemleri, ticari aydınlatma ve dekoratif aydınlatma ürünleri fuarın ana kategorileridir.\n\nTürk girişimciler için Çin'den aydınlatma ürünleri ithalatında en kaliteli üreticileri bulmak ve yeni teknolojileri yakından takip etmek açısından büyük önem taşımaktadır.\n\n**Fuar Bilgileri:**\n- Tarih: Haziran 2026\n- Yer: Guangzhou, Çin\n- Sektör: Aydınlatma & LED\n- Katılımcı: 2000+ firma`,
      en: `The Guangzhou International Lighting Fair is the largest annual meeting point for the lighting industry. LED lighting, smart home systems, commercial lighting, and decorative lighting products are the main categories of the fair.\n\nFor Turkish entrepreneurs, it is of great importance for finding the highest quality manufacturers in lighting product imports from China and closely following new technologies.\n\n**Fair Information:**\n- Date: June 2026\n- Location: Guangzhou, China\n- Sector: Lighting & LED\n- Exhibitors: 2000+ companies`,
    },
  },
  {
    id: '4',
    slug: '139-cin-ithal-ihrac-mallari-fuari-kanton',
    category: 'cin-fuarlari',
    categoryKey: 'cin-fuarlari',
    date: '2025-12-09',
    image: 'https://news.cgtn.com/news/2026-04-15/Canton-Fair-opens-in-China-with-record-scale-1MmsnXTBWH6/img/d55ff4814ac944f3b4ea46cbb139b83b/d55ff4814ac944f3b4ea46cbb139b83b.png',
    title: {
      tr: '139. Çin İthal ve İhraç Malları Fuarı (Kanton Fuarı)',
      en: '139th China Import and Export Fair (Canton Fair)',
    },
    excerpt: {
      tr: '15 Nisan ~ 05 Mayıs 2026 ÇİN - Guangzhou. Dünyanın en büyük ticaret fuarı olan Kanton Fuarı hakkında bilmeniz gereken her şey.',
      en: 'April 15 ~ May 05, 2026 CHINA - Guangzhou. Everything you need to know about the Canton Fair, the world\'s largest trade fair.',
    },
    content: {
      tr: `Kanton Fuarı (Canton Fair), 1957'den bu yana düzenlenen ve dünyanın en büyük ve en kapsamlı ticaret fuarıdır. Her yıl bahar ve sonbahar olmak üzere iki kez düzenlenen fuar, 200'den fazla ülkeden alıcıları Guangzhou'da buluşturmaktadır.\n\n139. Kanton Fuarı 2026 yılının ilkbaharında gerçekleşecek olup, elektronik, makine, tekstil, ev eşyaları ve daha birçok sektörü kapsamaktadır.\n\n**Fuar Bilgileri:**\n- Tarih: 15 Nisan - 05 Mayıs 2026\n- Yer: Guangzhou, Çin\n- Faz 1: Elektronik, Makine, Araçlar\n- Faz 2: Tüketici Ürünleri, Hediyeler\n- Faz 3: Tekstil, Gıda\n\nKanton Fuarı, Çin'den ithalat yapmak isteyen her girişimci için mutlaka ziyaret edilmesi gereken bir etkinliktir. Fuara katılım ve ziyaretçi kaydı için danışmanlık hizmeti sunuyoruz.`,
      en: `The Canton Fair has been held since 1957 and is the world's largest and most comprehensive trade fair. Held twice a year in spring and autumn, the fair brings together buyers from over 200 countries in Guangzhou.\n\nThe 139th Canton Fair will take place in the spring of 2026, covering electronics, machinery, textiles, home goods, and many other sectors.\n\n**Fair Information:**\n- Date: April 15 - May 05, 2026\n- Location: Guangzhou, China\n- Phase 1: Electronics, Machinery, Vehicles\n- Phase 2: Consumer Products, Gifts\n- Phase 3: Textiles, Food\n\nThe Canton Fair is a must-visit event for every entrepreneur looking to import from China. We offer consultancy services for fair participation and visitor registration.`,
    },
  },
  {
    id: '5',
    slug: 'mastering-import-consultancy',
    category: 'importing-from-china',
    categoryKey: 'importing-from-china',
    date: '2025-12-09',
    image: 'https://cdn.abacus.ai/images/408ef4c4-ffc6-418c-9246-3ecf505e4e86.png',
    title: {
      tr: 'Çin İthalat Danışmanlığında Ustalaşmak: Kapsamlı Rehber',
      en: 'Mastering Import Consultancy: A Comprehensive Guide',
    },
    excerpt: {
      tr: 'Küresel Ticaretin Kapısı: Çin İthalat Danışmanlığını keşfedin. Tedarikçi seçiminden gümrüklemeye kadar tüm süreçleri öğrenin.',
      en: 'The Gateway to Global Trade: Discover Import Consultancy. Learn all processes from supplier selection to customs clearance.',
    },
    content: {
      tr: `Çin'den ithalat, doğru strateji ve bilgiyle son derece kârlı bir iş modelidir. Ancak sürecin karmaşıklığı, deneyimsiz girişimciler için ciddi riskler barındırabilir.\n\n**Tedarikçi Seçimi**\nAlibaba, Made-in-China gibi platformlarda tedarikçi aramak başlangıç için iyi bir adımdır ancak yeterli değildir. Yerinde fabrika denetimleri, referans kontrolleri ve numune testleri vazgeçilmezdir.\n\n**Kalite Kontrol**\nÜretim öncesi, üretim sırası ve sevkiyat öncesi denetimler, kalite sorunlarını minimize eder.\n\n**Lojistik Planlama**\nDeniz yolu, hava yolu ve tren yolu seçeneklerini değerlendirip, ürün tipine ve aciliyete göre en uygun rotayı belirlemek kritik önem taşır.\n\n**Gümrükleme**\nTürk gümrük mevzuatına uygun belge hazırlığı, GTİP kodu belirleme ve vergi hesaplamaları profesyonel destek gerektirir.`,
      en: `Importing from China is an extremely profitable business model with the right strategy and knowledge. However, the complexity of the process can pose serious risks for inexperienced entrepreneurs.\n\n**Supplier Selection**\nSearching for suppliers on platforms like Alibaba and Made-in-China is a good starting point but not sufficient. On-site factory inspections, reference checks, and sample testing are essential.\n\n**Quality Control**\nPre-production, during-production, and pre-shipment inspections minimize quality issues.\n\n**Logistics Planning**\nEvaluating sea, air, and rail options and determining the most suitable route based on product type and urgency is critically important.\n\n**Customs Clearance**\nDocument preparation compliant with customs regulations, HS code determination, and tax calculations require professional support.`,
    },
  },
  {
    id: '6',
    slug: 'amerikada-ara-depo-prep-center',
    category: 'prep-center',
    categoryKey: 'prep-center',
    date: '2025-08-15',
    image: 'https://cdn.prod.website-files.com/617a425fb7d20469bc145bf4/68a6df9c4014a18f7bfce69a_8646193b-c6f2-4410-b1d2-89e99bf6c382.jpeg',
    title: {
      tr: "Amerika'da Ara Depo (Prep Center) Hizmeti Nedir, Neden Kullanmalı?",
      en: 'What is a US Prep Center Service and Why Should You Use One?',
    },
    excerpt: {
      tr: 'E-ticaretin ve uluslararası ticaretin hızla büyüdüğü günümüzde, ürünlerin doğru şekilde saklanması, etiketlenmesi ve gönderilmesi her zamankinden daha önemli hale geldi. Özellikle Amazon, Etsy, Walmart gibi pazaryerlerinin...',
      en: 'In today\'s rapidly growing e-commerce and international trade landscape, proper storage, labeling, and shipping of products has become more important than ever. Especially for marketplaces like Amazon, Etsy, Walmart...',
    },
    content: {
      tr: `Amerika'da Prep Center (Ara Depo) hizmeti, özellikle Amazon FBA satıcıları için kritik bir altyapı unsurudur. Çin'den gelen ürünlerin Amerika'daki bir ara depoda teslim alınması, kontrol edilmesi, etiketlenmesi ve Amazon depolarına gönderilmesi sürecini kapsar.\n\n**Prep Center Avantajları:**\n- Ürünlerin Amazon FBA gereksinimlerine uygun hazırlanması\n- Etiketleme ve barkodlama hizmetleri\n- Kalite kontrol ve kusurlu ürün ayrımı\n- Depolama ve envanter yönetimi\n- Hızlı sevkiyat ve Amazon depolarına teslimat\n\n**Kimler Kullanmalı?**\n- Amazon FBA satıcıları\n- Etsy ve Walmart satıcıları\n- ABD pazarına yeni giren markalar\n- Toptan ithalat yapan firmalar`,
      en: `A Prep Center service in the US is a critical infrastructure element, especially for Amazon FBA sellers. It covers the process of receiving products from China at a warehouse in America, inspecting, labeling, and shipping them to Amazon warehouses.\n\n**Prep Center Advantages:**\n- Preparing products to meet Amazon FBA requirements\n- Labeling and barcoding services\n- Quality control and defective product sorting\n- Storage and inventory management\n- Fast shipping and delivery to Amazon warehouses\n\n**Who Should Use It?**\n- Amazon FBA sellers\n- Etsy and Walmart sellers\n- Brands newly entering the US market\n- Wholesale import companies`,
    },
  },
  {
    id: '7',
    slug: 'cin-ithalatinda-guvenli-tedarikci-secimi',
    category: 'tedarikci-bulma',
    categoryKey: 'tedarikci-bulma',
    date: '2025-11-20',
    image: 'https://image.cnbcfm.com/api/v1/image/108084402-1736447375007-gettyimages-2191474671-vcg111538748527.jpeg?v=1744819797&w=1920&h=1080',
    title: {
      tr: 'Çin İthalatında Güvenli Tedarikçi Seçimi: Dikkat Edilmesi Gerekenler',
      en: 'Safe Supplier Selection in China Import: Key Considerations',
    },
    excerpt: {
      tr: 'Çin\'den ithalat yaparken en kritik adımlardan biri güvenilir tedarikçi bulmaktır. Doğru tedarikçiyi seçmek, kaliteli ürün almanın ve sorunsuz bir ithalat sürecinin temelidir.',
      en: 'One of the most critical steps when importing from China is finding a reliable supplier. Choosing the right supplier is the foundation of getting quality products and a smooth import process.',
    },
    content: {
      tr: `Güvenilir tedarikçi bulmak, başarılı Çin ithalatının en önemli adımıdır. İşte dikkat etmeniz gereken noktalar:\n\n**1. Tedarikçi Doğrulama**\nAlibaba Gold Supplier, Trade Assurance gibi sertifikalara sahip firmaları tercih edin. Ancak bu sertifikalar tek başına yeterli değildir.\n\n**2. Fabrika Denetimi**\nMümkünse fabrikayı bizzat ziyaret edin veya profesyonel denetim hizmeti alın. Üretim kapasitesi, çalışma koşulları ve kalite kontrol süreçlerini yerinde inceleyin.\n\n**3. Numune Talebi**\nSipariş vermeden önce mutlaka numune isteyin. Numune kalitesi ile toplu üretim kalitesinin aynı olduğundan emin olun.\n\n**4. İletişim ve Yanıt Süresi**\nTedarikçinin iletişim kalitesi, iş birliği sürecinin verimliliğini doğrudan etkiler.\n\n**5. Referans Kontrolü**\nDaha önce çalışan müşterilerden referans alın ve deneyimlerini öğrenin.`,
      en: `Finding a reliable supplier is the most important step for successful China imports. Here are the key points to pay attention to:\n\n**1. Supplier Verification**\nPrefer companies with Alibaba Gold Supplier, Trade Assurance certifications. However, these certificates alone are not sufficient.\n\n**2. Factory Inspection**\nIf possible, visit the factory in person or get a professional inspection service. Examine production capacity, working conditions, and quality control processes on-site.\n\n**3. Sample Request**\nAlways request samples before placing an order. Make sure that sample quality matches mass production quality.\n\n**4. Communication & Response Time**\nThe supplier's communication quality directly affects the efficiency of the collaboration process.\n\n**5. Reference Check**\nGet references from previous customers and learn about their experiences.`,
    },
  },
  {
    id: '8',
    slug: 'e-ticaret-icin-cin-ithalat-stratejileri',
    category: 'e-ticaret',
    categoryKey: 'e-ticaret',
    date: '2025-10-05',
    image: 'https://subsites.chinadaily.com.cn/Qiushi/att/20260416/1776305100399035929.jpg',
    title: {
      tr: 'E-Ticaret İçin Çin İthalat Stratejileri',
      en: 'China Import Strategies for E-Commerce',
    },
    excerpt: {
      tr: 'Amazon, Trendyol, Hepsiburada gibi platformlarda satış yapıyorsanız, Çin\'den ithalatla maliyetlerinizi düşürüp kar marjınızı artırabilirsiniz.',
      en: 'If you sell on platforms like Amazon, Trendyol, Hepsiburada, you can reduce your costs and increase your profit margins by importing from China.',
    },
    content: {
      tr: `E-ticaret girişimcileri için Çin'den ithalat, rekabetçi fiyat avantajı sağlamanın en etkili yoludur.\n\n**Platform Bazlı Stratejiler:**\n\n**Amazon FBA**\n- Private label ürün geliştirme\n- FBA etiketleme ve paketleme standartları\n- Prep center kullanımı\n\n**Trendyol & Hepsiburada**\n- Yurt içi depo gereksinimleri\n- Fiyat rekabeti stratejileri\n- Stok yönetimi\n\n**Kendi E-Ticaret Siteniz**\n- Dropshipping vs toptan ithalat karşılaştırması\n- Marka oluşturma ve paketleme\n- Müşteri deneyimi optimizasyonu`,
      en: `For e-commerce entrepreneurs, importing from China is the most effective way to gain a competitive price advantage.\n\n**Platform-Based Strategies:**\n\n**Amazon FBA**\n- Private label product development\n- FBA labeling and packaging standards\n- Prep center usage\n\n**Trendyol & Hepsiburada**\n- Domestic warehouse requirements\n- Price competition strategies\n- Inventory management\n\n**Your Own E-Commerce Site**\n- Dropshipping vs wholesale import comparison\n- Brand building and packaging\n- Customer experience optimization`,
    },
  },
]

export function getPostsByCategory(categoryKey: string): BlogPost[] {
  if (categoryKey === 'all') return blogPosts
  return blogPosts.filter((post) => post.categoryKey === categoryKey)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

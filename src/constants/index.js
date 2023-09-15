import {
  adesa,
  arcProject,
  aziz,
  bedroomPlus1,
  bedroomPlus2,
  bedroomPlus3,
  cnc,
  dome,
  eCatalogue as eCat,
  home1,
  home2,
  in1,
  in2,
  in3,
  in4,
  in5,
  in6,
  in7,
  in8,
  in9,
  in10,
  out1,
  out2,
  out3,
  out31,
  out4,
  out41,
  out5,
  out6,
  j1,
  j2,
  masterBathroom1,
  masterBathroom2,
  masterBathroom3,
  moduleAquarium1,
  moduleAquarium2,
  moduleAquarium3,
  moduleBathroom1,
  moduleBathroom2,
  moduleBedroom1,
  moduleBedroom2,
  moduleBedroom3,
  moduleFront1,
  moduleFront2,
  moduleFront3,
  moduleKitchen1,
  moduleKitchen2,
  moduleKitchen3,
  moduleLivingroom1,
  moduleLivingroom2,
  moduleLivingroom3,
  modulePatio1,
  modulePatio2,
  modulePatio3,
  moduleSstandart3,
  moduleStandart1,
  moduleStandart2,
  p1,
  p2,
  p3,
  rotten,
  s4,
  s5,
  tinyHouse,
  ugur,
  yusuf,
} from "../assets";

export const navLinks = [
  // {
  //   id: "about",
  //   title: "About",
  // },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "our-services",
    title: { tr: "Hizmetlerimiz", en: "Our Services" },
  },
];

export const navbarDropdowns = [
  {
    title: { tr: "Galeri", en: "Gallery" },
    id: "gallery",
    options: [
      // {
      //   id: "video",
      //   label: "Video",
      //   navigate: "/media-video",
      // },
      {
        id: "image",
        label: { tr: "Fotoğraf", en: "Photo" },
        navigate: "/media-image",
      },
      {
        id: "e-catalogue",
        label: { tr: "E-Katalog", en: "E-Catalogue" },
        navigate: "/media-catalogue",
      },
    ],
  },
  {
    title: { tr: "Modül Ev", en: "Module House" },
    id: "module-house",
    options: [
      {
        id: "module-house",
        label: { tr: "Modül Ev", en: "Module House" },
        navigate: "/module-house",
      },
      {
        id: "our-modules",
        label: { tr: "Modüllerimiz", en: "Our Modules" },
        navigate: "/our-modules",
      },
    ],
  },
];

const service = {
  title: { tr: "YAPTIĞIMIZ HİZMETLER", en: "SERVICES WE DO" },
  subtitle: {
    tr: "Mimarlık Tasarımı İçin Vurgulanan Hizmetlerimiz.",
    en: "Our Highlighted Services For Architecture Design.",
  },
  desc: {
    tr: "Üstün kalite ve güvenin tek adresi. Yapısal çelik, 150 yıl ömre sahiptir. Nesilden nesile aktarılır.",
    en: "The Single address of superior quality and trust. Structural steel has a life of 150 years. It is handed down from generation to generation.",
  },
  services: [
    {
      title: { tr: "PLANLAMA", en: "PLANNING" },
      icon: p1,
      desc: {
        tr: "Araziniz için en uygun konumu belirliyoruz.",
        en: "We determine the most suitable location for your land.",
      },
    },
    {
      title: { tr: "DANIŞMANLIK", en: "CONSULTING" },
      icon: p2,
      desc: {
        tr: "Size en uygun çözüme yönlendiriyoruz.",
        en: "We guide you to the best solution for you.",
      },
    },
    {
      title: { tr: "MİMARİ", en: "ARCHITECTURE" },
      icon: p3,
      desc: {
        tr: "Kişiselleştirilebilir tasarımla birlikte kendi evinizi kendiniz oluşturun.",
        en: "Create your own home with customizable designs.",
      },
    },
  ],
};

const experience = {
  title: { tr: "PORTFOLYO", en: "PORTFOLIO" },
  subtitle: { tr: "İş Deneyimi", en: "Work Experience." },
  desc: {
    tr: "Kendisine özgü teknik ve deneyimli kadrosu ile emin adımlarla yürümeye ve müşterilere en azami şekilde hizmet vermeyi kendisine vazgeçilmez bir yol olarak kabul etmiştir ve bu doğrultuda yoluna devam ederek müşterilerine hizmet vermeye devam edecektir.",
    en: "With its unique technical expertise and experienced team, it strides confidently and considers providing the utmost service to customers as an indispensable path. In this regard, it will continue its journey and provide services to its customers.",
  },
  experiences: [
    {
      title: { tr: "Dağ Evi", en: "Mountain House" }, // dağ
      company_name: "2020",
      icon: adesa,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: {
        tr: [
          "Dağların eteklerinde, doğanın kalbinde, huzur ve konforun tadını çıkarabileceğiniz bir dağ evine sahip olmak ister misiniz? ",
          "Modüler prefabrike dağ evlerimiz, size bu imkanı sunuyor. Dağ evlerimiz, dayanıklı malzemelerden üretilmiş, kolay kurulabilen ve taşınabilen, enerji verimli ve çevre dostu yapılar olarak öne çıkıyor.",
          "Dağ evlerimizde, geniş pencerelerden manzarayı seyredebilir, şömine başında sıcacık vakit geçirebilir, doğa yürüyüşleri yapabilir veya kayak yapabilirsiniz. Dağ evlerimiz, hem kendiniz hem de misafirleriniz için ideal bir konaklama seçeneği sunuyor.",
          "Dağ evlerimizin fiyatları ve modelleri hakkında daha fazla bilgi almak için web sitemizi ziyaret edin veya bizimle iletişime geçin.",
        ],
        en: [
          "Would you like to own a mountain house where you can enjoy peace and comfort, nestled at the foothills of the mountains, in the heart of nature?",
          "Our modular prefab mountain houses offer you this opportunity. These mountain homes are crafted from durable materials, easy to assemble and transport, energy-efficient, and environmentally friendly structures.",
          "In our mountain houses, you can admire the scenery through large windows, enjoy warm moments by the fireplace, go on nature hikes, or indulge in skiing. Our mountain houses provide an ideal accommodation option for both yourself and your guests.",
          "For more information about the prices and models of our mountain houses, please visit our website or get in touch with us.",
        ],
      },
      img: [home1, home2],
    },
    {
      title: { tr: "Orman Evi", en: "Forest House" }, //orman
      company_name: "2021",
      icon: adesa,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: {
        tr: [
          "Ormanın içinde, kuş sesleriyle uyanmak, yeşilin her tonunu görmek, temiz havayı soluyarak rahatlamak…",
          "Bütün bunları yaşayabileceğiniz bir orman evine sahip olmak hayal değil. Modüler prefabrike orman evlerimiz, size doğa ile iç içe bir yaşam sunuyor.Orman evlerimiz, ahşap malzemeden üretilmiş, kolay kurulabilen ve taşınabilen, enerji verimli ve çevre dostu yapılar olarak öne çıkıyor.",
          "Orman evlerimizde, doğal ışıktan faydalanabilir, balkonda kahvaltı yapabilir, bisiklete binebilir veya piknik yapabilirsiniz.",
          "Orman evlerimiz, hem kendiniz hem de misafirleriniz için ideal bir konaklama seçeneği sunuyor.",
          "Orman evlerimizin fiyatları ve modelleri hakkında daha fazla bilgi almak için web sitemizi ziyaret edin veya bizimle iletişime geçin.",
        ],
        en: [
          "Waking up to the sounds of birds in the middle of the forest, seeing every shade of green, and relaxing by breathing in the fresh air...",
          "It's not just a dream to own a forest house where you can experience all of these. Our modular prefab forest houses offer you a life intertwined with nature. These forest houses are made from wood, easy to assemble and transport, energy-efficient, and environmentally friendly structures.",
          "In our forest houses, you can enjoy natural light, have breakfast on the balcony, go biking, or have a picnic.",
          "Our forest houses provide an ideal accommodation option for both yourself and your guests.",
          "For more information about the prices and models of our forest houses, please visit our website or get in touch with us.",
        ],
      },
      img: [home2],
    },
    {
      title: { tr: "Göl Evi", en: "Lake House" }, // göl
      company_name: "2022",
      icon: adesa,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: {
        tr: [
          "Göl kenarında, suyun sesini dinleyerek uyumak, güneşin batışını izlemek, balık tutmak veya kano yapmak…",
          "Bütün bunları yaşayabileceğiniz bir göl evine sahip olmak hayal değil. Modüler prefabrike göl evlerimiz, size su ile iç içe bir yaşam sunuyor.",
          "Göl evlerimiz, metal malzemeden üretilmiş, kolay kurulabilen ve taşınabilen, enerji verimli ve çevre dostu yapılar olarak öne çıkıyor.",
          "Göl evlerimizde, panoramik pencerelerden göl manzarasını seyredebilir, terasta barbekü yapabilir, yüzebilir veya tekne gezisi yapabilirsiniz. Göl evlerimiz, hem kendiniz hem de misafirleriniz için ideal bir konaklama seçeneği sunuyor.",
          "Göl evlerimizin fiyatları ve modelleri hakkında daha fazla bilgi almak için web sitemizi ziyaret edin veya bizimle iletişime geçin.",
        ],
        en: [
          "Sleeping by the lakeside, listening to the sound of water, watching the sunset, fishing, or canoeing...",
          "It's not just a dream to own a lakeside house where you can experience all of these. Our modular prefab lakeside houses offer you a life intertwined with water.",
          "These lakeside houses are made from metal, easy to assemble and transport, energy-efficient, and environmentally friendly structures.",
          "In our lakeside houses, you can admire the lake view from panoramic windows, have a barbecue on the terrace, go swimming, or take a boat trip. Our lakeside houses provide an ideal accommodation option for both yourself and your guests.",
          "For more information about the prices and models of our lakeside houses, please visit our website or get in touch with us.",
        ],
      },
      img: [s4],
    },
  ],
};

const ourServices = {
  title: { tr: "GELİŞTİRMELER", en: "DEVELOPMENTS" },
  developments: [
    {
      name: { tr: "Minik Ev", en: "Tiny House" },
      description: {
        tr: "İsteğinize göre her türlü ahşap küçük evleri mimarlarımızla tasarlayıp yapıyoruz. Çevreci ve doğa ile uyumlu, yeni yaşam ve konaklama ihtiyaçlarının dönüşümüne entegre olmuş bir yaşam birimi sunar. Özgürlüğünüzden taviz vermeden ev konforunuzu her yere taşıyabilmenizi sağlamaktayız.",
        en: "We design and build all types of small wooden houses according to your preferences. Our architects create environmentally friendly, nature-integrated living units that cater to the transformation of modern living and accommodation needs. We enable you to bring your home comfort everywhere without compromising your freedom.",
      },
      image: tinyHouse,
    },
    {
      name: { tr: "Mimarlık Projeleri", en: "Architectural Projects" },
      description: {
        tr: "Mimari tasarım projelerinizi gerçeğe dönüştürüyoruz! Adesa Home, mimari uygulama ve inşaat ekibi, anahtar teslim uygulamalar ve inşaat işleri başta olmak üzere projelendirme ve uygulama alanlarında müşterilerimize danışmanlık hizmeti vermektedir. Konsept projelerde özel üretim mobilya ve mobil mekanlar için gerekli prototip çalışmaları ile müşterilerimize yaratmayı hedefledikleri deneyimleri gerçek ölçeklerde test etme imkanı sağlıyoruz.",
        en: "We bring your architectural design projects to life! Adesa Home offers consultancy services to our clients in various areas such as architectural implementation, construction, turnkey applications, and project planning. In concept projects, we provide our clients with the opportunity to test the experiences they aim to create on a real scale through prototype work for custom-made furniture and mobile spaces.",
      },
      image: arcProject,
    },
    {
      name: { tr: "KUBBE Ev", en: "DOME House" },
      description: {
        tr: "2014 yılından bu yana kubbe yapılar konusunda üretim yapmaktayız. Kubbe yapı mimarisi ve tekniklerini jeodezik yapılarımızda titizlikle uygulamaktayız. Profesyonel ekibimiz ve çözüm odaklı yaklaşımımız ile dome ihtiyacı olan herkesin her zaman yanındayız. Yeni nesil  dome imalatında Türkiye' nin alanında öncü ve örnek alınan firması olmaktan gurur duyuyoruz.",
        en: "Since 2014, we have been specializing in dome structures. We meticulously apply dome architectural designs and techniques in our geodesic structures. With our professional team and solution-oriented approach, we are always here to assist anyone in need of domes. We take pride in being a leading and exemplary company in the field of next-generation dome manufacturing in Turkey.",
      },
      image: dome,
    },
    {
      name: { tr: "Cnc Hizmetlerimiz", en: "Our CNC Services" },
      description: {
        tr: "CNC ahşap tezgâhı ile kesme, yönlendirme, oyma, delme, taşlama gibi işlemleri yapmaktayız. CNC ahşap oyma makinemizle her türlü ahşap kesimini mükemmel kalitede yapmaktayız.",
        en: "We perform various operations such as cutting, routing, carving, drilling, and grinding with our CNC woodwork station. Using our CNC wood carving machine, we ensure precise and high-quality woodwork for all types of woodcuts.",
      },
      image: cnc,
    },
  ],
};

const faq = {
  title: { tr: "BLOK YAZILARINDAN DİREKT", en: "DIRECT FROM THE BLOG POSTS" },
  subtitle: { tr: "SIK SORULAN SORULAR", en: "FREQUENTLY ASKED QUESTİONS" },
  desc: {
    tr: "En Son Haberlerimizi ve Makalelerimizi İnceleyin",
    en: "Checkout Our Latest News And Articles",
  },
  faqs: [
    {
      name: {
        en: "How long is the life of Adesa Home Wood?",
        tr: "Adesa Ev Ahşap ürünlerinin ömrü ne kadar?",
      },
      description: {
        en: "Wooden Houses have become popular in recent years because they are made of materials that create a natural and warm atmosphere. However, there are many different opinions about the useful life of these houses. In general, the service life of wooden houses can last more than 50 years. However, this lifetime may change according to natural disasters, climatic conditions and factors that require care.",
        tr: "Son yıllarda ahşap evler, doğal ve sıcak bir atmosfer yarattıkları için popüler hale gelmiştir. Ancak bu evlerin kullanış ömrü hakkında birçok farklı görüş bulunmaktadır. Genel olarak, ahşap evlerin hizmet ömrü 50 yıldan fazla sürebilir. Ancak bu ömür, doğal afetlere, iklim koşullarına ve bakım gerektiren faktörlere göre değişebilir",
      },
      tags: [
        {
          name: "wooden",
          color: "text-yellow-600",
        },
        {
          name: "lifetime",
          color: "text-cyan-700",
        },
      ],
      image: s5,
    },
    {
      name: { tr: "Ahşap ev çürür mü?", en: "Does the wooden house rot?" },
      description: {
        tr: "Ahşap evlerin çürüyeceği yönünde dolaşan bir dedikodu var. Ahşap mantarları özellikle ahşap evlere zarar verir ve yapının çürümesine neden olur. Bu nedenle bu bölgelerde düzenli dış temizlik yapılmalı ve gerektiğinde püskürtme ve kaplama işlemi yapılmalıdır.",
        en: "There is a rumor circulating that wooden houses will rot. Wood fungi are particularly harmful to wooden houses and cause the structure to rot. For this reason, exterior cleaning should be done regularly in these areas, and if necessary, it should be done in spraying and coating.",
      },
      tags: [
        {
          name: "architecture",
          color: "green-text-gradient",
        },
        {
          name: "engineering",
          color: "pink-text-gradient",
        },
      ],
      image: rotten,
    },
    {
      name: {
        tr: "Ağaç evler depreme dayanıklı mıdır?",
        en: "Are tree houses earthquake resistant?",
      },
      description: {
        tr: "Ahşap evlerin en avantajlı yönlerinden biri de depreme dayanıklı olmalarıdır. Bu özellik, deprem bölgesinde bulunan ülkemiz için çok önemlidir. Ahşap, hafif ancak güçlü bir malzeme olduğu için depremde yıkılması daha zordur.",
        en: "One of the most advantageous aspects of wooden houses is that they are resistant to earthquakes. This feature is very important in our country, which is located in the earthquake zone. Since wood is a light but strong material, it is more difficult to demolish in an earthquake.",
      },
      tags: [
        {
          name: "earthquake",
          color: "text-blue-500",
        },
        {
          name: "architecture",
          color: "green-text-gradient",
        },
      ],
      image: j1,
    },
    {
      name: {
        tr: "Ağaç ev bakımı nasıl yapılır?",
        en: "How is tree house maintenance?",
      },
      description: {
        tr: "Ahşap evde aylık bakım yapmak için, ahşap yüzeyde toz ve küf oluşumuna karşı önlem almanız gerekmektedir. Ahşap yüzeyi hafif nemli bir bezle silindikten sonra silinen yüzeyi tekrar kuru bir bezle geçin. Ahşap üzerinde reçine oluşumu durumunda temizletmeniz gerekebilir. Pencerelerin birleşim yeri ve kapılar da genellikle ahşaptan yapılmıştır. Zamanla kapılar şişebilir veya pencere hava sızdırmazlık sorunları yaşayabilir. Bu tür sorunlarla karşılaşırsanız, onarımlarını hemen yaptırmalısınız.",
        en: "In order to do monthly maintenance in the wooden house, you need to take precautions against the formation of dust and mold on the wooden surface. After wiping the wooden surface with a slightly damp cloth, go over the wiped surface again with a dry cloth. In case of resin formation on the wood, you must have it cleaned. Window joinery and doors are also mostly made of wood. Over time, the doors may swell or the window may have airtightness problems. If you encounter these problems, you need to have them repaired immediately.",
      },
      tags: [
        {
          name: "architecture",
          color: "green-text-gradient",
        },
        {
          name: "engineering",
          color: "pink-text-gradient",
        },
      ],
      image: j2,
    },
  ],
};

const slides = [
  {
    src: [moduleStandart1, moduleStandart2, moduleSstandart3],
    width: 720,
    height: 720,
    title: { tr: "Standart Modül", en: "Module Standart" },
    id: "module-standart",
    description: {
      tr: "Standart Modül, Tiny House tasarımında en özgür ve kişiselleştirilebilir alanları yaratmak için ideal bir seçenektir. Herhangi bir alana eklenerek kullanılabilen bu modül, ihtiyaçlarınıza göre yeni alanlar yaratmanıza olanak tanır. Kendi evinizi yaratırken sınırsız hayal gücünüzü kullanarak farklı birçok kullanım alanı yaratabilirsiniz. Tüm bu özellikleriyle, Standart Modül sizin hayallerinizi gerçeğe dönüştürmeniz için tasarlanmıştır.",
      en: "The Standard Module is the ideal choice for creating the most flexible and customizable spaces in Tiny House design. This module, which can be added to any space, allows you to create new areas tailored to your needs. When creating your own home, you can use your unlimited imagination to create various different use-cases. With all these features, the Standard Module is designed to help you turn your dreams into reality.",
    },
  },
  {
    src: [moduleLivingroom1, moduleLivingroom2, moduleLivingroom3],
    width: 720,
    height: 720,
    title: { tr: "Yaşam Alanı Modülü", en: "Module Livingroom" },
    id: "module-livingroom",
    description: {
      en: "The Living Space Module offers a unique feature that sets it apart from other tiny house designs. A curved glass, 75 cm wide, extending from the walls to the ceiling, allows you to experience the beauty of nature within your living space. Thanks to this glass, you can enjoy the sight of clouds during the day and the stars at night, bringing tranquility and natural light to the interior. Additionally, this module can also serve as a bedroom and bathroom, allowing you to personalize your home design. This exceptional living space module is designed to provide you with comfortable and modern living.",
      tr: "Yaşam alanı modülü, diğer tiny house tasarımlarından sıyrılarak kendine özgü bir özellik sunar. Duvarlardan tavana doğru yayılan 75 cm genişliğinde kavisli bir cam, doğanın güzelliklerini yaşam alanınızda hissetmenizi sağlar. Gündüz bulutların, gece ise yıldızların keyfini çıkarabileceğiniz bu cam sayesinde, iç mekana huzur ve doğal bir aydınlık kazandırabilirsiniz. Ayrıca bu modül, yatak odası ve banyo olarak da tercih edilebilir, evinizin tasarımını kişiselleştirmenize olanak tanır. Bu benzersiz yaşam alanı modülü, size konforlu ve modern bir yaşam sunmak için tasarlandı.",
    },
  },
  {
    src: [masterBathroom1, masterBathroom2, masterBathroom3],
    width: 720,
    height: 720,
    title: { tr: "Banyo Modülü", en: "Module Master Bathroom" },
    id: "module-master-bathroom",
    description: {
      en: "One of our most practical and stylish modules is the bathroom module. This module comes equipped with all the standard amenities while adding a decorative touch with its rounded porthole windows. Designed to meet your bathroom needs with a cabin shower, pedestal sink, and toilet, it brings a sense of spaciousness by allowing natural light through both the corridor-side and interior glass. Moreover, the bathroom module offers numerous customization options to tailor it to your preferences.",
      tr: "Modüllerimizin en kullanışlı ve şık olanlarından biri banyo modülüdür. Bu modül, standart tüm donanımlara sahip olmakla birlikte yuvarlak lomboz camları ile dekoratif bir hava katmaktadır. Kabin duşu, ayaklı lavabosu ve klozeti ile banyo ihtiyaçlarınızı karşılamak için tasarlanmıştır. Banyo modülü, hem koridor tarafında hem de banyo içindeki camları sayesinde doğal ışık alarak ferah bir alan yaratır. Tüm bunlarla birlikte, banyonuzu kişiselleştirmeniz için birçok seçenek sunmaktadır.",
    },
  },
  {
    src: [modulePatio1, modulePatio2, modulePatio3],
    width: 720,
    height: 720,
    title: { tr: "Veranda Modülü", en: "Module Patio" },
    id: "module-patio",
    description: {
      en: `The Veranda Module is one of the most beloved options for your Tiny House. This module can be added to both your entrance and bedroom modules and is integrated with pre-designed stairs to match your land's structure. The Veranda Module provides an excellent opportunity for you to relax and enjoy the outdoors.

    The Veranda Module expands your home's living space, offering an open and comfortable atmosphere. It brings natural sunlight into the interior, creating a bright ambiance. Additionally, when you have a beautiful view, the Veranda Module provides you with a place to savor that scenery.
    
    By adding the Veranda Module to your Tiny House, you have the opportunity to personalize your home. Whether you want to read a book, bask in the sun, or have a chat with friends, the Veranda Module will provide you with the perfect space.`,
      tr: `Veranda modülü, Tiny House'unuzun en sevilen seçeneklerinden biridir. Hem girişinize hem de yatak odası modülünüze eklenebilen bu modül, arazinizin yapısına uygun olarak önceden hazırlanmış merdivenlerle birlikte entegre edilir. Veranda modülü, açık alanda dinlenebilmeniz ve iyi vakit geçirebilmeniz için mükemmel bir olanak sağlar.

    Veranda modülü, açık ve rahat bir atmosfer sunarak evinizin yaşam alanını genişletir. Doğal güneş ışığından faydalanarak iç mekana aydınlık bir hava verir. Ayrıca, güzel bir manzaraya sahip olduğunuzda, veranda modülü size manzaranın tadını çıkarabileceğiniz bir yer sağlar.
    
    Tiny House'unuza veranda modülü ekleyerek evinizi kişiselleştirme fırsatı elde edersiniz. İster kitap okuyun, ister güneşte uzanın ya da arkadaşlarınızla sohbet edin, veranda modülü sizin için mükemmel bir mekan sağlayacaktır.`,
    },
  },
  {
    src: [moduleFront1, moduleFront2, moduleFront3],
    width: 720,
    height: 720,
    title: { tr: "Giriş Modülü", en: "Module Front" },
    id: "module-front",
    description: {
      en: "Our other module, known as the Entrance Module, forms the first step into the Tiny House. It stands out with its all-glass facade and wooden frames. The door is also made of glass to allow natural light and achieve a modern look.",
      tr: "Giriş Modülü adını verdiğimiz diğer modülümüz, Tiny House'a giriş yaptığımız ilk adımı oluşturuyor. Tamamen camdan bir cephesi ve ahşap çerçeveleri ile dikkat çekiyor. Kapısı da yine camdan tercih edilerek, doğal ışık alan ve modern bir görünüme sahip olması sağlanmıştır.",
    },
  },
  {
    src: [moduleKitchen1, moduleKitchen2, moduleKitchen3],
    width: 720,
    height: 720,
    title: { tr: "Mutfak Modülü", en: "Module Kitchen" },
    id: "module-kitchen",
    description: {
      en: "The Kitchen Module is one of the most crucial areas in a Tiny House. It features a standard-sized countertop for ease of use and includes a refrigerator compartment that can be integrated as per preference. Additionally, there's ample space beneath the countertop for a dishwasher and a washing machine. The material used for the Kitchen Module is the same as the interior of the house, ensuring that the kitchen harmonizes with the rest of the living spaces. With its minimalistic design, the Kitchen Module combines functionality and elegance. You can enjoy spending quality time in your kitchen, which is one of the most special areas in your Tiny House.",
      tr: "Mutfak modülü, tiny house'un en önemli alanlarından biridir. Burada bulunan standart ölçülerdeki tezgah, kullanım kolaylığı sağlar ve tercihe göre ankastre olarak kullanılabilen bir buzdolabı bölmesi bulunur. Ayrıca, tezgah altında bulaşık makinesi ve çamaşır makinesi için yeterli alan da sağlanır. Mutfak modülünün malzemesi, evin iç malzemesi ile aynıdır, böylece mutfak, evin diğer alanlarıyla uyum içinde olur. Minimal bir tasarıma sahip olan mutfak modülü, işlevselliği ve şıklığı bir arada sunar. Tiny house'un en özel alanı olan mutfağınızda keyifle vakit geçirebilirsiniz.",
    },
  },
  {
    src: [moduleBedroom1, moduleBedroom2, moduleBedroom3],
    width: 720,
    height: 720,
    title: { tr: "Yatak Odası Modülü", en: "Module Bedroom" },
    id: "module-bedroom",
    description: {
      en: `The Bedroom Module - Elegance in Transparent Design

      The Bedroom Module offers a unique design with its entirely glass facade. You can add an optional openable veranda or close one of the glass panels to create a wardrobe space according to your preference.
      
      This module provides you with a unique experience, allowing you to be in touch with nature right in your bedroom. Furthermore, it enhances functionality with its ample storage spaces.
      
      With its modern and stylish design, the Bedroom Module adds a distinctive touch to your home. By allowing natural light into your interior, it helps create a spacious ambiance.
      
      If you want to bring the beauty of nature into your home, the Bedroom Module is just for you! Elevate the aesthetics of your living space with the elegance of transparent design.`,
      tr: `Yatak Odası Modülü - Şeffaf Tasarımın Zarafeti

    Yatak Odası Modülü, tamamen cam cephesiyle benzersiz bir tasarım sunuyor. İsteğinize bağlı olarak açılabilir bir veranda ekleyebilir veya cephedeki camlardan birini kapatıp bir gardırop alanı yaratabilirsiniz.
    
    Bu modül, yatak odanızda doğayla iç içe olmanızı sağlayan benzersiz bir deneyim sunuyor. Ayrıca, geniş saklama alanları sayesinde işlevselliği de arttırıyor.
    
    Yatak Odası Modülü, modern ve şık tasarımıyla evinize sıra dışı bir hava katıyor. İç mekanınıza doğal ışık girmesine izin vererek, ferah bir ortam yaratmanıza yardımcı oluyor.
    
    Doğanın güzelliğini evinize taşımak istiyorsanız, Yatak Odası Modülü tam size göre! Şeffaf tasarımın zarafetiyle evinizdeki yaşam alanınıza estetik bir dokunuş yapın.`,
    },
  },
  {
    src: [bedroomPlus1, bedroomPlus2, bedroomPlus3],
    width: 720,
    height: 720,
    title: { tr: "Yatak Odası Ek Modülü", en: "Module Bedroom Plus" },
    id: "module-bedroom-plus",
    description: {
      tr: `Yatak Odası Ek Modülü - Işığın Keyfini Çıkarın

    Yatak Odası Ek Modülü, her iki tarafında da yuvarlak lomboz camları ile tasarlanmıştır. Bu özellik, içeriye daha fazla gün ışığı girmesini istediğinizde tercih edebileceğiniz bir seçenektir. Ayrıca, bu modül diğer alanlar için de kullanılabilir ve tamamen kişisel tercihlerinize göre tasarlanabilir.
    
    Yatak Odası Ek Modülü, yaşam alanınızı zenginleştirmek ve sıradışı bir deneyim sunmak için tasarlanmıştır. Bu modül, yatak odanıza yeni bir boyut katarken aynı zamanda size daha fazla gün ışığı sağlar.
    
    Eğer evinizde daha fazla gün ışığı almak istiyorsanız, Yatak Odası Ek Modülü tam size göre! Bu modül sayesinde doğanın güzelliğini evinizde hissedecek ve kendinizi rahatlamış hissedeceksiniz.`,
      en: `The Bedroom Additional Module - Enjoy the Light

    The Bedroom Additional Module is designed with rounded porthole windows on both sides. This feature is an option you can choose when you want more daylight to enter the interior. Additionally, this module can be used for other areas and can be entirely customized according to your personal preferences.
    
    The Bedroom Additional Module is designed to enrich your living space and provide an extraordinary experience. While adding a new dimension to your bedroom, this module also offers you more daylight.
    
    If you want to bring more natural light into your home, the Bedroom Additional Module is perfect for you! With this module, you will feel the beauty of nature in your home and experience a sense of relaxation.`,
    },
  },
  {
    src: [moduleAquarium1, moduleAquarium2, moduleAquarium3],
    width: 720,
    height: 720,
    title: { tr: "Akvaryum Modülü", en: "Module Aquarium" },
    id: "module-aquarium",
    description: {
      tr: `
      Akvaryum Modülü - doğanın içinde bir nefes alın
      
      Tasarladığımız Akvaryum Modülü, hayatınızı güzelleştirecek ve yaşam alanınızda sıradışı bir deneyim sunacak. Bu modül, yatak odası gibi alanlarda kullanılabileceği gibi, tercihe göre yaşam alanınızda da harika bir dekoratif öğe olarak yerini alabilir.
      
      Bu modülün en belirgin özelliği, 60cm çapında cam bir silindirin tabandan tavana kadar yerleştirilmiş olmasıdır. Bu sayede evinizin içine doğal ışık girmesini sağlarken, aynı zamanda bu alan içinde bir ağaç ekerek doğanın büyüleyici güzelliğine şahit olmanızı sağlar.
      
      Akvaryum Modülü, alışılmışın ötesinde bir tasarımı temsil eder. Bu modül sayesinde, yaşam alanınızın dekorunu tamamlayacak görsel bir cazibe yaratabilirsiniz. Ayrıca, bu modül sayesinde doğayla daha yakından temas etme imkanını da elde edebilirsiniz.
      
      Siz de evinize doğanın büyüleyici güzelliğini getirmek istiyorsanız, Akvaryum Modülü tam size göre! Bu modül sayesinde, kendinizi doğanın içinde bir nefes almış gibi hissedeceksiniz.`,
      en: `Aquarium Module - Take a Breath in Nature's Embrace

      Our designed Aquarium Module is here to enrich your life and offer an extraordinary experience within your living space. This module can be used in areas such as the bedroom or, if preferred, it can serve as a fantastic decorative element in your living space.
      
      The most prominent feature of this module is the 60cm diameter glass cylinder that extends from floor to ceiling. This allows natural light to enter your home while also providing the opportunity to plant a tree inside, bringing you closer to the enchanting beauty of nature.
      
      The Aquarium Module represents a design beyond the ordinary. With this module, you can create a visual charm that complements your living space's decor. Furthermore, this module offers you the chance to connect more closely with nature.
      
      If you want to bring the captivating beauty of nature into your home, the Aquarium Module is perfect for you! With this module, you'll feel as if you've taken a breath within the heart of nature.`,
    },
  },
  {
    src: [moduleBathroom1, moduleBathroom2],
    width: 720,
    height: 720,
    title: { tr: "Mutfak-Banyo Modülü", en: "Module Bathroom" },
    id: "module-bathroom",
    description: {
      tr: `Modülümüzün adı: Mutfak-Banyo Modülü - İki İşlevli ve Şık.

    Mutfak-Banyo Modülümüz, mutfak ve banyonuzu tek bir yerde birleştiren işlevsel bir modüldür. Bu modül, 125cm genişliğinde bir tezgah alanı ve saklama alanları ile birlikte standart bir banyo alanı içermektedir.
    
    Modülün her iki ucunda da yuvarlak lomboz camlarımız sayesinde içeri doğal ışık girebilmektedir.
    
    Mutfak-Banyo Modülü, hem işlevsel hem de şık bir tasarıma sahiptir. Bu modül ile evinize modern bir dokunuş katabilir ve hem mutfağınızda hem de banyonuzda rahat bir kullanım deneyimi yaşayabilirsiniz.
    
    Eğer hem mutfak hem de banyo alanınızı aynı modülde birleştirmek istiyorsanız, Mutfak-Banyo Modülü tam size göre!`,
      en: `Our Module: Kitchen-Bathroom Module - Dual-Purpose and Stylish.

      The Kitchen-Bathroom Module is a functional unit that combines your kitchen and bathroom into a single, convenient space. This module includes a 125cm wide countertop and storage areas, along with a standard bathroom area.
      
      Natural light can enter the interior thanks to our rounded porthole windows at both ends of the module.
      
      The Kitchen-Bathroom Module boasts both functionality and a stylish design. With this module, you can add a modern touch to your home and enjoy a comfortable user experience in both your kitchen and bathroom.
      
      If you're looking to combine both your kitchen and bathroom areas in a single module, the Kitchen-Bathroom Module is the perfect solution for you!`,
    },
  },
];

const contactInfo = {
  contactUs: { tr: "BİZE ULAŞ", en: "CONTACT US" },
  tel: "+90 549 505 19 90",
  address: "Demirtaş mahallesi İnönü Caddesi No:143/1 Bursa/Osmangazi",
  mail: "info@adesahome.com",
  desc: {
    tr: "Müşteri memnuniyeti esasıyla çalışan teknik ve idari kadromuzla, müşteri ihtiyaçları doğrultusunda hızlı ve kaliteli çözümler üretmekteyiz.",
    en: "Working on the basis of customer satisfaction, technical and administrative personnel fast and quality solutions in line with customer needs.",
  },
  navigaton: { tr: "NAVİGASYON", en: "NAVIGATION" },
  aboutUs: { tr: "Hakkımızda", en: "About Us" },
  portfolio: { tr: "Portfolyo", en: "Portfolio" },
  news: { tr: "Haberler", en: "News" },
  testimonials: { tr: "Referanslar", en: "Testimonials" },
};

const meetTheTeam = {
  title: { tr: "Takımla Tanışın", en: "MEET THE TEAM" },
  subTitle: { tr: "Takımımız", en: "OUR TEAM" },
  desc: {
    tr: "Gayrimenkul ajansımızın ekibini tanıyın! Ekibimiz, insanların hayallerindeki evleri bulmalarına yardımcı olmaktan tutkulu deneyimli ve özverili profesyonellerden oluşmaktadır. Acentelerimiz, yerel emlak piyasası hakkında geniş bilgiye sahiptir ve müşterilerimize olağanüstü hizmet sunmaya kararlıdır. Mükemmel bir mülk bulmaktan en iyi anlaşmayı müzakere etmeye kadar, ekibimiz her adımda sizi yönlendirmek için burada. Biz, dürüstlüğümüz, profesyonelliğimiz ve müşterilerimize olan bağlılığımızla gurur duyuyoruz. Bugün bizimle iletişime geçin ve gayrimenkul ihtiyaçlarınızda size nasıl yardımcı olabileceğimizi daha fazla öğrenin.",
    en: "Meet the team of our estate agency! Our team is composed of xperienced and dedicated professionals who are passionate about helping people find  their dream homes. Our agents have extensive knowledge of the local real  estate market and are committed to providing exceptional service to our  clients. From finding the perfect property to negotiating the best deal,  our team is here to guide you every step of the way. We pride ourselves  on our integrity, professionalism, and commitment to our clients. Get in  touch with us today to learn more about how we can help you with your  real estate needs.",
  },
  members: [
    { title: "Aziz Demir", icon: aziz },
    { title: "Uğur Demirci", icon: ugur },
    { title: "Yusuf Bulut", icon: yusuf },
  ],
};

const mainPage = {
  title: { tr: "MİMARLIK ŞİRKETİ", en: "ARCHITECTURE COMPANY" },
  subtitle: {
    tr: "Yüksek Estetikle Modern Bina.",
    en: "Modern Building With High-Aesthetics.",
  },
  button: { tr: "PROJELERİ GÖR", en: "VIEW PROJECT" },
};

const ourModules = {
  title: { en: "Our Modules", tr: "Modüllerimiz" },
  gallery: { en: "Gallery", tr: "Galeri" },
  button: { en: "Inspect", tr: "İncele" },
  addAnOrder: { en: "Add An Order", tr: "Sipariş Et" },
  desc: { en: "Our Modules", tr: "Modüllerimiz" },
  slides,
};
const categories = [
  { tr: "Minik Ev", en: "Tiny House" },
  { tr: "Modül Tek Renderlar", en: "Module Single Renders" },
  { tr: "Modül Ev", en: "Module House" },
  { tr: "Kütük Masa", en: "Log Table" },
  { tr: "Kütük Kahve Masası", en: "Log Coffee Table" },
  { tr: "Mutfak Eşyaları", en: "Kitchenware" },
];

const moduleHouse = {
  title: { tr: "Modül Ev", en: "Module House" },
  subtitle: {
    tr: "Hayalinizdeki minik evi oluşturun.",
    en: "Create the tiny house of your dreams",
  },
  desc: {
    tr: "Bizim modüler minik ev sistemimiz size hayallerinizdeki yaşam alanını oluşturma özgürlüğü sunar. İhtiyaçlarınıza ve zevkinize göre mutfak, banyo, oturma odası ve yatak gibi alanları parça parça satın alabilirsiniz. Böylece benzersiz ve kişiselleştirilmiş bir yaşam alanı yaratabilirsiniz.",
    en: "Our modular tiny house system gives you the freedom to create the living space of your dreams. You can purchase areas such as kitchen, bathroom, living room and bedroom piece by piece according to your needs and tastes. Thus, you can create a unique and personalized living space.",
  },
};

const ecatalogue = {
  title: { tr: "E-Katalog", en: "E-Catalogue" },
  table: {
    name: { tr: "Dosya Adı", en: "Name" },
    date: { tr: "Tarih", en: "Date" },
  },
  pdfs: [{ pdf: eCat, name: "E-Katalog", date: "14/09/2023" }],
};

const indoor = [
  { src: in1, width: 1080, height: 1080 },
  { src: in2, width: 1080, height: 1080 },
  { src: in3, width: 1080, height: 1080 },
  { src: in4, width: 1080, height: 1080 },
  { src: in5, width: 1080, height: 1080 },
  { src: in6, width: 1080, height: 1080 },
  { src: in7, width: 1080, height: 1080 },
  { src: in8, width: 1080, height: 1080 },
  { src: in9, width: 1080, height: 1080 },
  { src: in10, width: 1080, height: 1080 },
];

const outdoor = [
  { src: out1, width: 1080, height: 1080 },
  { src: out2, width: 1080, height: 1080 },
  { src: out3, width: 1080, height: 1080 },
  { src: out31, width: 1080, height: 1080 },
  { src: out4, width: 1080, height: 1080 },
  { src: out41, width: 1080, height: 1080 },
  { src: out5, width: 1080, height: 1080 },
  { src: out6, width: 1080, height: 1080 },
];

const selectedPreferences = [
  {
    id: 0,
    key: "whole",
    title: { tr: "Tüm Renderlar", en: "Whole Renders" },
    slides: [...indoor, ...outdoor],
  },
  {
    id: 1,
    key: "indoor",
    title: { tr: "İç Mekan Renderlar", en: "Indoor Renders" },
    slides: indoor,
  },
  {
    id: 2,
    key: "outdoor",
    title: { tr: "Dış Mekan Renderlar", en: "Outdoor Renders" },
    slides: outdoor,
  },
];

const photoGallery = {
  title: { tr: "Fotoğraf Galerisi", en: "Photo Gallery" },
  selectedPreferences,
};

export {
  ourServices,
  experience,
  faq,
  meetTheTeam,
  service,
  slides,
  contactInfo,
  mainPage,
  ourModules,
  categories,
  moduleHouse,
  ecatalogue,
  photoGallery,
};

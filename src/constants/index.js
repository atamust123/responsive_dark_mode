import {
  arcProject,
  cnc,
  css,
  cv,
  docker,
  dome,
  figma,
  git,
  home1,
  home2,
  html,
  j1,
  j2,
  javascript,
  mongodb,
  nodejs,
  p1,
  p2,
  p3,
  reactjs,
  redux,
  rotten,
  s1,
  s2,
  s4,
  s5,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tinyHouse,
  typescript,
  bedroomPlus1,
  bedroomPlus2,
  bedroomPlus3,
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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "our-services",
    title: "Our Services",
  },
];

export const navbarDropdowns = [
  {
    title: "Gallery",
    id: "gallery",
    options: [
      {
        id: "video",
        label: "Video",
        navigate: "/media-video",
      },
      {
        id: "image",
        label: "Image",
        navigate: "/media-image",
      },
      {
        id: "e-catalogue",
        label: "E-Catalogue",
        navigate: "/media-catalogue",
      },
    ],
  },
  {
    title: "Module House",
    id: "module-house",
    options: [
      {
        id: "module-house",
        label: "Module House",
        navigate: "/module-house",
      },
      {
        id: "our-modules",
        label: "Ours Module House",
        navigate: "/our-modules",
      },
    ],
  },
];

const services = [
  {
    title: "PLANNING",
    icon: p1,
    desc: "Araziniz için en uygun konumu belirliyoruz.",
  },
  {
    title: "CONSULTING",
    icon: p2,
    desc: "Size en uygun çözüme yönlendiriyoruz.",
  },
  {
    title: "ARCHITECTURE",
    icon: p3,
    desc: "Kişiselleştirilebilir tasarımla birlikte kendi evinizi kendiniz oluşturun.",
  },
];

const meetTheTeam = [
  { title: "Atakan Ayyıldız", icon: cv, desc: "Software Developer" },
  { title: "Yusuf Soyadın Ne :)", icon: cv, desc: "Her şey sanırım" },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mountain House", // dağ
    company_name: "2020",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Dağların eteklerinde, doğanın kalbinde, huzur ve konforun tadını çıkarabileceğiniz bir dağ evine sahip olmak ister misiniz? ",
      "Modüler prefabrike dağ evlerimiz, size bu imkanı sunuyor. Dağ evlerimiz, dayanıklı malzemelerden üretilmiş, kolay kurulabilen ve taşınabilen, enerji verimli ve çevre dostu yapılar olarak öne çıkıyor.",
      "Dağ evlerimizde, geniş pencerelerden manzarayı seyredebilir, şömine başında sıcacık vakit geçirebilir, doğa yürüyüşleri yapabilir veya kayak yapabilirsiniz. Dağ evlerimiz, hem kendiniz hem de misafirleriniz için ideal bir konaklama seçeneği sunuyor.",
      "Dağ evlerimizin fiyatları ve modelleri hakkında daha fazla bilgi almak için web sitemizi ziyaret edin veya bizimle iletişime geçin.",
    ],
    img: [home1, home2],
  },
  {
    title: "Forest House", //orman
    company_name: "2021",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Ormanın içinde, kuş sesleriyle uyanmak, yeşilin her tonunu görmek, temiz havayı soluyarak rahatlamak…",
      "Bütün bunları yaşayabileceğiniz bir orman evine sahip olmak hayal değil. Modüler prefabrike orman evlerimiz, size doğa ile iç içe bir yaşam sunuyor.Orman evlerimiz, ahşap malzemeden üretilmiş, kolay kurulabilen ve taşınabilen, enerji verimli ve çevre dostu yapılar olarak öne çıkıyor.",
      "Orman evlerimizde, doğal ışıktan faydalanabilir, balkonda kahvaltı yapabilir, bisiklete binebilir veya piknik yapabilirsiniz.",
      "Orman evlerimiz, hem kendiniz hem de misafirleriniz için ideal bir konaklama seçeneği sunuyor.",
      "Orman evlerimizin fiyatları ve modelleri hakkında daha fazla bilgi almak için web sitemizi ziyaret edin veya bizimle iletişime geçin.",
    ],
    img: [home2],
  },
  {
    title: "Lake House", // göl
    company_name: "2022",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Göl kenarında, suyun sesini dinleyerek uyumak, güneşin batışını izlemek, balık tutmak veya kano yapmak…",
      "Bütün bunları yaşayabileceğiniz bir göl evine sahip olmak hayal değil. Modüler prefabrike göl evlerimiz, size su ile iç içe bir yaşam sunuyor.",
      "Göl evlerimiz, metal malzemeden üretilmiş, kolay kurulabilen ve taşınabilen, enerji verimli ve çevre dostu yapılar olarak öne çıkıyor.",
      "Göl evlerimizde, panoramik pencerelerden göl manzarasını seyredebilir, terasta barbekü yapabilir, yüzebilir veya tekne gezisi yapabilirsiniz. Göl evlerimiz, hem kendiniz hem de misafirleriniz için ideal bir konaklama seçeneği sunuyor.",
      "Göl evlerimizin fiyatları ve modelleri hakkında daha fazla bilgi almak için web sitemizi ziyaret edin veya bizimle iletişime geçin.",
    ],
    img: [s4],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const developments = [
  {
    name: "Tiny House",
    description:
      "İsteğinize göre her türlü ahşap küçük evleri mimarlarımızla tasarlayıp yapıyoruz. Çevreci ve doğa ile uyumlu, yeni yaşam ve konaklama ihtiyaçlarının dönüşümüne entegre olmuş bir yaşam birimi sunar. Özgürlüğünüzden taviz vermeden ev konforunuzu her yere taşıyabilmenizi sağlamaktayız.",
    image: tinyHouse,
  },
  {
    name: "Architectural Projects",
    description:
      "Mimari tasarım projelerinizi gerçeğe dönüştürüyoruz! Adesa Home, mimari uygulama ve inşaat ekibi, anahtar teslim uygulamalar ve inşaat işleri başta olmak üzere projelendirme ve uygulama alanlarında müşterilerimize danışmanlık hizmeti vermektedir. Konsept projelerde özel üretim mobilya ve mobil mekanlar için gerekli prototip çalışmaları ile müşterilerimize yaratmayı hedefledikleri deneyimleri gerçek ölçeklerde test etme imkanı sağlıyoruz.",
    image: arcProject,
  },
  {
    name: "DOME Ev",
    description:
      "2014 yılından bu yana kubbe yapılar konusunda üretim yapmaktayız. Kubbe yapı mimarisi ve tekniklerini jeodezik yapılarımızda titizlikle uygulamaktayız. Profesyonel ekibimiz ve çözüm odaklı yaklaşımımız ile dome ihtiyacı olan herkesin her zaman yanındayız. Yeni nesil  dome imalatında Türkiye' nin alanında öncü ve örnek alınan firması olmaktan gurur duyuyoruz.",
    image: dome,
  },
  {
    name: "Cnc Hizmetlerimiz",
    description:
      "CNC ahşap tezgâhı ile kesme, yönlendirme, oyma, delme, taşlama gibi işlemleri yapmaktayız. CNC ahşap oyma makinemizle her türlü ahşap kesimini mükemmel kalitede yapmaktayız.",
    image: cnc,
  },
];

const faq = [
  {
    name: "How long is the life of Adesa Home Wood?",
    description:
      "Wooden Houses have become popular in recent years because they are made of materials that create a natural and warm atmosphere. However, there are many different opinions about the useful life of these houses. In general, the service life of wooden houses can last more than 50 years. However, this lifetime may change according to natural disasters, climatic conditions and factors that require care.",
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
    name: "Does the wooden house rot?",
    description:
      "There is a rumor circulating that wooden houses will rot. Wood fungi are particularly harmful to wooden houses and cause the structure to rot. For this reason, exterior cleaning should be done regularly in these areas, and if necessary, it should be done in spraying and coating.",
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
    name: "Are tree houses earthquake resistant?",
    description:
      "One of the most advantageous aspects of wooden houses is that they are resistant to earthquakes. This feature is very important in our country, which is located in the earthquake zone. Since wood is a light but strong material, it is more difficult to demolish in an earthquake.",
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
    name: "How is tree house maintenance?",
    description:
      "In order to do monthly maintenance in the wooden house, you need to take precautions against the formation of dust and mold on the wooden surface. After wiping the wooden surface with a slightly damp cloth, go over the wiped surface again with a dry cloth. In case of resin formation on the wood, you must have it cleaned. Window joinery and doors are also mostly made of wood. Over time, the doors may swell or the window may have airtightness problems. If you encounter these problems, you need to have them repaired immediately.",
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
  // {
  //   name: "Is Architecture A Good Career In 2022?",
  //   description:
  //     "Consequat nisl vel pretium lectus quam id leo in. Lorem donec massa sapien faucibus et molestie ac. Odio…",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "architecture",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "engineering",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/img/j1.jpg",
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Unfinished Constructions In LA (Progress)",
  //   description:
  //     "Odio aenean sed adipiscing diam donec adipiscing tristique. Eu turpis egestas pretium aenean pharetra magna ac. Id semper…",
  //   tags: [
  //     {
  //       name: "engineering",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "architecture",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "design",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/img/j2.jpg",
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "How We Built Auston Villa In Melbourne",
  //   description:
  //     "Odio aenean sed adipiscing diam donec adipiscing tristique. Eu turpis egestas pretium aenean pharetra magna ac. Id semper…",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "engineering",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "work",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/img/j3.jpg",
  //   source_code_link: "https://github.com/",
  // },
];

const slides = [
  {
    src: [moduleStandart1, moduleStandart2, moduleSstandart3],
    width: 720,
    height: 720,
    title: "Module Standart",
    id: "module-standart",
    description:
      "Standart Modül, Tiny House tasarımında en özgür ve kişiselleştirilebilir alanları yaratmak için ideal bir seçenektir. Herhangi bir alana eklenerek kullanılabilen bu modül, ihtiyaçlarınıza göre yeni alanlar yaratmanıza olanak tanır. Kendi evinizi yaratırken sınırsız hayal gücünüzü kullanarak farklı birçok kullanım alanı yaratabilirsiniz. Tüm bu özellikleriyle, Standart Modül sizin hayallerinizi gerçeğe dönüştürmeniz için tasarlanmıştır.",
  },
  {
    src: [moduleLivingroom1, moduleLivingroom2, moduleLivingroom3],
    width: 720,
    height: 720,
    title: "Module Livingroom",
    id: "module-livingroom",
    description:
      "Yaşam alanı modülü, diğer tiny house tasarımlarından sıyrılarak kendine özgü bir özellik sunar. Duvarlardan tavana doğru yayılan 75 cm genişliğinde kavisli bir cam, doğanın güzelliklerini yaşam alanınızda hissetmenizi sağlar. Gündüz bulutların, gece ise yıldızların keyfini çıkarabileceğiniz bu cam sayesinde, iç mekana huzur ve doğal bir aydınlık kazandırabilirsiniz. Ayrıca bu modül, yatak odası ve banyo olarak da tercih edilebilir, evinizin tasarımını kişiselleştirmenize olanak tanır. Bu benzersiz yaşam alanı modülü, size konforlu ve modern bir yaşam sunmak için tasarlandı.",
  },
  {
    src: [masterBathroom1, masterBathroom2, masterBathroom3],
    width: 720,
    height: 720,
    title: "Module Master Bathroom",
    id: "module-master-bathroom",
    description:
      "Modüllerimizin en kullanışlı ve şık olanlarından biri banyo modülüdür. Bu modül, standart tüm donanımlara sahip olmakla birlikte yuvarlak lomboz camları ile dekoratif bir hava katmaktadır. Kabin duşu, ayaklı lavabosu ve klozeti ile banyo ihtiyaçlarınızı karşılamak için tasarlanmıştır. Banyo modülü, hem koridor tarafında hem de banyo içindeki camları sayesinde doğal ışık alarak ferah bir alan yaratır. Tüm bunlarla birlikte, banyonuzu kişiselleştirmeniz için birçok seçenek sunmaktadır.",
  },
  {
    src: [modulePatio1, modulePatio2, modulePatio3],
    width: 720,
    height: 720,
    title: "Module Patio",
    id: "module-patio",
    description: `Veranda modülü, Tiny House'unuzun en sevilen seçeneklerinden biridir. Hem girişinize hem de yatak odası modülünüze eklenebilen bu modül, arazinizin yapısına uygun olarak önceden hazırlanmış merdivenlerle birlikte entegre edilir. Veranda modülü, açık alanda dinlenebilmeniz ve iyi vakit geçirebilmeniz için mükemmel bir olanak sağlar.

    Veranda modülü, açık ve rahat bir atmosfer sunarak evinizin yaşam alanını genişletir. Doğal güneş ışığından faydalanarak iç mekana aydınlık bir hava verir. Ayrıca, güzel bir manzaraya sahip olduğunuzda, veranda modülü size manzaranın tadını çıkarabileceğiniz bir yer sağlar.
    
    Tiny House'unuza veranda modülü ekleyerek evinizi kişiselleştirme fırsatı elde edersiniz. İster kitap okuyun, ister güneşte uzanın ya da arkadaşlarınızla sohbet edin, veranda modülü sizin için mükemmel bir mekan sağlayacaktır.`,
  },
  {
    src: [moduleFront1, moduleFront2, moduleFront3],
    width: 720,
    height: 720,
    title: "Module Front",
    id: "module-front",
    description:
      "Giriş Modülü adını verdiğimiz diğer modülümüz, Tiny House'a giriş yaptığımız ilk adımı oluşturuyor. Tamamen camdan bir cephesi ve ahşap çerçeveleri ile dikkat çekiyor. Kapısı da yine camdan tercih edilerek, doğal ışık alan ve modern bir görünüme sahip olması sağlanmıştır.",
  },
  {
    src: [moduleKitchen1, moduleKitchen2, moduleKitchen3],
    width: 720,
    height: 720,
    title: "Module Kitchen",
    id: "module-kitchen",
    description:
      "Mutfak modülü, tiny house'un en önemli alanlarından biridir. Burada bulunan standart ölçülerdeki tezgah, kullanım kolaylığı sağlar ve tercihe göre ankastre olarak kullanılabilen bir buzdolabı bölmesi bulunur. Ayrıca, tezgah altında bulaşık makinesi ve çamaşır makinesi için yeterli alan da sağlanır. Mutfak modülünün malzemesi, evin iç malzemesi ile aynıdır, böylece mutfak, evin diğer alanlarıyla uyum içinde olur. Minimal bir tasarıma sahip olan mutfak modülü, işlevselliği ve şıklığı bir arada sunar. Tiny house'un en özel alanı olan mutfağınızda keyifle vakit geçirebilirsiniz.",
  },
  {
    src: [moduleBedroom1, moduleBedroom2, moduleBedroom3],
    width: 720,
    height: 720,
    title: "Module Bedroom",
    id: "module-bedroom",
    description: `Yatak Odası Modülü - Şeffaf Tasarımın Zarafeti

    Yatak Odası Modülü, tamamen cam cephesiyle benzersiz bir tasarım sunuyor. İsteğinize bağlı olarak açılabilir bir veranda ekleyebilir veya cephedeki camlardan birini kapatıp bir gardırop alanı yaratabilirsiniz.
    
    Bu modül, yatak odanızda doğayla iç içe olmanızı sağlayan benzersiz bir deneyim sunuyor. Ayrıca, geniş saklama alanları sayesinde işlevselliği de arttırıyor.
    
    Yatak Odası Modülü, modern ve şık tasarımıyla evinize sıra dışı bir hava katıyor. İç mekanınıza doğal ışık girmesine izin vererek, ferah bir ortam yaratmanıza yardımcı oluyor.
    
    Doğanın güzelliğini evinize taşımak istiyorsanız, Yatak Odası Modülü tam size göre! Şeffaf tasarımın zarafetiyle evinizdeki yaşam alanınıza estetik bir dokunuş yapın.`,
  },
  {
    src: [bedroomPlus1, bedroomPlus2, bedroomPlus3],
    width: 720,
    height: 720,
    title: "Module Bedroom Plus",
    id: "module-bedroom-plus",
    description: `Yatak Odası Ek Modülü - Işığın Keyfini Çıkarın

    Yatak Odası Ek Modülü, her iki tarafında da yuvarlak lomboz camları ile tasarlanmıştır. Bu özellik, içeriye daha fazla gün ışığı girmesini istediğinizde tercih edebileceğiniz bir seçenektir. Ayrıca, bu modül diğer alanlar için de kullanılabilir ve tamamen kişisel tercihlerinize göre tasarlanabilir.
    
    Yatak Odası Ek Modülü, yaşam alanınızı zenginleştirmek ve sıradışı bir deneyim sunmak için tasarlanmıştır. Bu modül, yatak odanıza yeni bir boyut katarken aynı zamanda size daha fazla gün ışığı sağlar.
    
    Eğer evinizde daha fazla gün ışığı almak istiyorsanız, Yatak Odası Ek Modülü tam size göre! Bu modül sayesinde doğanın güzelliğini evinizde hissedecek ve kendinizi rahatlamış hissedeceksiniz.`,
  },
  {
    src: [moduleAquarium1, moduleAquarium2, moduleAquarium3],
    width: 720,
    height: 720,
    title: "Module Aquarium",
    id: "module-aquarium",
    description: `Elbette, aşağıda Akvaryum Modülü için bir açıklama metni sunuyorum:

      Akvaryum Modülü - doğanın içinde bir nefes alın
      
      Tasarladığımız Akvaryum Modülü, hayatınızı güzelleştirecek ve yaşam alanınızda sıradışı bir deneyim sunacak. Bu modül, yatak odası gibi alanlarda kullanılabileceği gibi, tercihe göre yaşam alanınızda da harika bir dekoratif öğe olarak yerini alabilir.
      
      Bu modülün en belirgin özelliği, 60cm çapında cam bir silindirin tabandan tavana kadar yerleştirilmiş olmasıdır. Bu sayede evinizin içine doğal ışık girmesini sağlarken, aynı zamanda bu alan içinde bir ağaç ekerek doğanın büyüleyici güzelliğine şahit olmanızı sağlar.
      
      Akvaryum Modülü, alışılmışın ötesinde bir tasarımı temsil eder. Bu modül sayesinde, yaşam alanınızın dekorunu tamamlayacak görsel bir cazibe yaratabilirsiniz. Ayrıca, bu modül sayesinde doğayla daha yakından temas etme imkanını da elde edebilirsiniz.
      
      Siz de evinize doğanın büyüleyici güzelliğini getirmek istiyorsanız, Akvaryum Modülü tam size göre! Bu modül sayesinde, kendinizi doğanın içinde bir nefes almış gibi hissedeceksiniz.`,
  },
  {
    src: [moduleBathroom1, moduleBathroom2],
    width: 720,
    height: 720,
    title: "Module Bathroom",
    id: "module-bathroom",
    description: `Modülümüzün adı: Mutfak-Banyo Modülü - İki İşlevli ve Şık.

    Mutfak-Banyo Modülümüz, mutfak ve banyonuzu tek bir yerde birleştiren işlevsel bir modüldür. Bu modül, 125cm genişliğinde bir tezgah alanı ve saklama alanları ile birlikte standart bir banyo alanı içermektedir.
    
    Modülün her iki ucunda da yuvarlak lomboz camlarımız sayesinde içeri doğal ışık girebilmektedir.
    
    Mutfak-Banyo Modülü, hem işlevsel hem de şık bir tasarıma sahiptir. Bu modül ile evinize modern bir dokunuş katabilir ve hem mutfağınızda hem de banyonuzda rahat bir kullanım deneyimi yaşayabilirsiniz.
    
    Eğer hem mutfak hem de banyo alanınızı aynı modülde birleştirmek istiyorsanız, Mutfak-Banyo Modülü tam size göre!`,
  },
];

export {
  developments,
  experiences,
  faq,
  services,
  technologies,
  testimonials,
  meetTheTeam,
  slides,
};

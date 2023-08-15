import {
  arcProject,
  cnc,
  css,
  docker,
  dome,
  figma,
  git,
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
  {
    id: "contact-us",
    title: "Contact",
  },
];

export const navbarDropdowns = [
  {
    title: "Media",
    id: "mediaa",
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
        id: "blog",
        label: "Blog",
        navigate: "/media-blog",
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
        id: "our-module-house",
        label: "Ours Module House",
        navigate: "/module-house/ours",
      },
    ],
  },
];

const services = [
  {
    title: "PLANNING",
    icon: p1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
  },
  {
    title: "CONSULTING",
    icon: p2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
  },
  {
    title: "ARCHITECTURE",
    icon: p3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
  },
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
    title: "Melbourne House",
    company_name: "2020",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
    img: s1,
  },
  {
    title: "Melbourne House",
    company_name: "2021",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar",
    ],
    img: s2,
  },
  {
    title: "Berlins House",
    company_name: "2022",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar",
    ],
    img: s4,
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

export { developments, experiences, faq, services, technologies, testimonials };

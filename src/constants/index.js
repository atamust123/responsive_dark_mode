import {
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "PLANNING",
    icon: "./public/img/p1.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
  },
  {
    title: "CONSULTING",
    icon: "./public/img/p2.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.",
  },
  {
    title: "ARCHITECTURE",
    icon: "./public/img/p3.png",
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
    img: "./public/img/s1.jpg",
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
    img: "./public/img/s2.jpg",
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
    img: "./public/img/s4.jpg",
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

const projects = [
  {
    name: "Is Architecture A Good Career In 2022?",
    description:
      "Consequat nisl vel pretium lectus quam id leo in. Lorem donec massa sapien faucibus et molestie ac. Odio…",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "architecture",
        color: "green-text-gradient",
      },
      {
        name: "engineering",
        color: "pink-text-gradient",
      },
    ],
    image: "./public/img/j1.jpg",
    source_code_link: "https://github.com/",
  },
  {
    name: "Unfinished Constructions In LA (Progress)",
    description:
      "Odio aenean sed adipiscing diam donec adipiscing tristique. Eu turpis egestas pretium aenean pharetra magna ac. Id semper…",
    tags: [
      {
        name: "engineering",
        color: "blue-text-gradient",
      },
      {
        name: "architecture",
        color: "green-text-gradient",
      },
      {
        name: "design",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    image: "./public/img/j2.jpg",
    source_code_link: "https://github.com/",
  },
  {
    name: "How We Built Auston Villa In Melbourne",
    description:
      "Odio aenean sed adipiscing diam donec adipiscing tristique. Eu turpis egestas pretium aenean pharetra magna ac. Id semper…",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "engineering",
        color: "green-text-gradient",
      },
      {
        name: "work",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    image: "./public/img/j3.jpg",
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };

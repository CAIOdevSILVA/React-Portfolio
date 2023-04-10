import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  sass,
  styledComponents,
  git,
  figma,
  shareme,
  carrent,
  jobit,
  tripguide,
  github,
  linkedin,
  instagram,
  tiktok,
  youtube
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "projects",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Sass",
    icon: sass,
  },
  {
    name: "StyledComponents",
    icon: styledComponents,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];


const socialMedia = [
 {
  media: "GitHub",
  link: "https://github.com/CAIOdevSILVA",
  icon: github
 },
 {
  media: "Linkedin",
  link: "https://www.linkedin.com/in/caio-silva-b12bb61a9/",
  icon: linkedin
 },
 {
  media: "Youtube",
  link: "https://youtube.com",
  icon: youtube
 },
 {
  media: "Instagram",
  link: "https://instagram.com",
  icon: instagram
 },
 {
  media: "TikTok",
  link: "https://tiktok.com",
  icon: tiktok
 },
];

const projects = [
  {
    name: "ShareME",
    description:
      "ShareME é um projeto inspirado no Pinterest e com ele podemos compartilhar imagens, curtir e comentar assim como em qualquer outra rede social. Todas as informações são armazenadas no CMS SANITY isso permite que usuários, imagens, curtidas e comentários sejam salvos e atualizados em tempo real. ShareMe é uma incrível rede social não deixe de criar sua conta!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }
    ],
    image: shareme,
    source_code_link: "https://github.com/CAIOdevSILVA/ShareME-Frontend",
    website_link: "https://shareme-caio-silva.netlify.app/login"
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    website_link: "/"
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    website_link: "/"
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    website_link: "/"
  },
  
];

export { services, technologies, socialMedia, projects };
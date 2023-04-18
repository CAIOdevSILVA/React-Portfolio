import {
  mobile,
  backend,
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
  airbnb,
  lords,
  github,
  linkedin,
  instagram,
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
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
//  {
//   media: "Youtube",
//   link: "https://youtube.com",
//   icon: youtube
//  },
 {
  media: "Instagram",
  link: "https://instagram.com",
  icon: instagram
 },
//  {
//   media: "TikTok",
//   link: "https://tiktok.com",
//   icon: tiktok
//  },
];

const projects = [
  {
    name: "Clone do Airbnb (Em desenvolvimento) ",
    description:
      "Esta aplicação é um clone do famoso site airbnb, e com ela podemos imitar algumas das principais funcionalidades do site original, como criar contas e fazer login utilizando email, google ou github tudo isso com as facilidades que o next-auth nos oferece. Além de simular a funcionalidade de fazer reservas. Todas as informações ficam salvas no Banco de dados MongoDB e com isso podem ser diponibilizadas em tempo real para o usuário final de forma rápida e segura.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      }
    ],
    image: airbnb,
    source_code_link: "https://github.com/CAIOdevSILVA/Clone-Airbnb",
    website_link: "/"
  },
  {
    name: "Lord of the Novels (Em desenvolvimento)",
    description:
      "Lord os the Novels é projeto de uma plataforma de leitura seja de livros, WebNovels ou Novels. Nele podemos criar conta, curtir, comentar e salvar as obras preferidas. Além disso, todo o controle de conteúdos é feito pelo CMS Sanity, por isso, todas informações são salvas, armazenadas e disponibilizadas ao usuário final de maneira rápida e segura. Se você gosta de obras digitais fique de à vontade testar o site e conferir os exemplos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: lords,
    source_code_link: "https://github.com/CAIOdevSILVA/Lord-Of-The-Novels",
    website_link: "/"
  },

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
  
];

export { services, technologies, socialMedia, projects };
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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    vueJs,
    laravel,
    nextJs,
    sportizer,
    g_formation,
    airbnb,
    netflix,

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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
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
      name: "Vue JS",
      icon: vueJs,
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
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "Laravel",
      icon: laravel,
    },
    // {
    //   name: "Vuetify",
    //   icon: vuetify,
    // },
    {
      name: "Next JS",
      icon: nextJs,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
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
      name: "G-Formation",
      description:
        "Mise en place d'une interface Web interconnectée dans le but de proposer des formations relatives à l'ERP GESTIMUM.",
      tags: [
        {
          name: "vueJS",
          color: "blue-text-gradient",
        },
        {
          name: "laravel",
          color: "green-text-gradient",
        },
        {
          name: "vuetify",
          color: "pink-text-gradient",
        },
      ],
      image: g_formation,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sportizer",
      description:
        "Création d'une Web-app pour dynamiser les clubs de sports d'intérieur et d'extérieur. Mise en place d'un écran géant contrôlé par une télécommande, pour afficher les informations nécessaires du match..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: sportizer,
      source_code_link: "https://github.com/",
    },
    {
      name: "Netflix clone",
      description:
        "Reproduction du site de streaming Netflix. Utilistation de Next.js et de l'api opensource themoviedb. Création d'une page d'authentification et des services de récupération des films..",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/",
    },
    {
      name: "AirBnb clone",
      description:
        "Reproduction du site de réservation AirBnb. Utilistation de Next.js et de TailwindCss. Création d'une api connectée à mongodb.  Possibilité pour les utilisateurs de voir la listes des logements, ajouter une annonces, enregistrer des annonces, réserver un logements en rentrants des dates d'un calendrier... ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: airbnb,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
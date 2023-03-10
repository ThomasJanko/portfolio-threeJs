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
    sportizer_logo,
    g_formation,
    airbnb,
    netflix,
    gestimum,
    revochat,

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
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
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
      title: "Vue JS Developer",
      company_name: "Gestimum",
      icon: gestimum,
      iconBg: "#E6DEDD",
      date: "Avril 2021 - Juillet 2021",
      points: [
        "Stage de DUT, premier stage en d??veloppement web.",
        "Formation de 2 semaines en autonomie sur Vue JS, Vuetify et Laravel .",
        "Collaboration avec un alternant (developpeur backend) pour cr??er une plateforme web afin de remplacer le processus d'organisation des formations de l'entreprise .",
        "Participation ?? la cr??ation du projet (maquette, base de donn??es...)",
      ],
    },

    {
      title: "React JS Developer",
      company_name: "Sportizer",
      icon: sportizer_logo,
      iconBg: "#383E56",
      date: "Octobre 2021 - Juin 2022",
      points: [
        "Projet Ydays (??cole) dans une startup de 3 personnes .",
        "Collaboration avec 3 ??quipes de 4-5 personnes (marketing, 3D design et Informatique) .",
        "Conception d'une application de panneau de score de Basket-ball dynamique et ergonomique afin de remplacer les ancien tableau de score dans les gymnases .",
        "Cr??ation d'une interface 'remote' (t??l??commande) et d'une interface 'screen' (??cran d'affichage) afin de cont??ler toutes les variables d'un match .",
        "Utilisation d'un server socket.io afin de r??duire au maximum le d??lai de transmission entre la t??l??commande et l'affichage .",
        "voir PDF ->"
      ],
      pdf: ''
    },

    {
      title: "Fullstack Developer",
      company_name: "Gestimum",
      icon: gestimum,
      iconBg: "#E6DEDD",
      date: "Avril 2022 - Juillet 2022",
      points: [
        "Reprise du d??veloppement de la plateforme G-Formation .",
        "Collaboration avec 2 nouveaux alternants .",
        "Implementation de mails automatiques (Mailtrap) et d??but du lancement des tests au sein de l'entreprise .",
        "Mis en place d'un serveur sur lequel est install?? la premi??re version de production (en interne) de la plateforme .",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Revochat",
      icon: revochat,
      iconBg: "#E6DEDD",
      date: "Octobre 2022 - Mai 2023",
      points: [
        "D??veloppement d'une application Web3 de messagerie instantann??e en React JS.",
        "Projet Ydays (??cole) avec une ??quipe de 7 d??veloppeurs .",
        "Utilisation de la technologie du Web3.0 afin de cr??er une des prem??res application de chat sur la Blockchain et de garantir l'immuabilit?? de celle-ci .",
        "Mis en production de cette application ?? l'aide de Smarts Contracts .",
      ],
    },
    
    {
      title: "Fullstack Developer",
      company_name: "Gestimum",
      icon: gestimum,
      iconBg: "#383E56",
      date: "Septembre 2022 - Septembre 2024",
      points: [
        "Reprise du d??veloppement de la plateforme G-Formation avec les m??mes alternants .",
        "Implementations d'un serveur smtp afin d'envoyer les mails aux clients .",
        "Phase de test avec tous les services de l'entreprise afin de remonter les potentiels probl??mes et de se familiariser avec la platforme .",
        "Mis en place d'un plannificateur de t??ches avec Laravel, permettant le d??clanchement automatique de certaines fonctionnalit??s du site .",
        "Ouverture de la plateforme ?? l'exterieur afin d'organiser de r??elle formations avec des clients et partenaire Gestimum .",
        "Cr??ation d'un site de pr??-production afin de continuer les tests et l'ajout de nouvelles fonctionnalit??s .",
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
        "Mise en place d'une interface Web interconnect??e dans le but de proposer des formations relatives ?? l'ERP GESTIMUM.",
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
        "Cr??ation d'une Web-app pour dynamiser les clubs de sports d'int??rieur et d'ext??rieur. Mise en place d'un ??cran g??ant contr??l?? par une t??l??commande, pour afficher les informations n??cessaires du match..",
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
        "Reproduction du site de streaming Netflix. Utilistation de Next.js et de l'api opensource themoviedb. Cr??ation d'une page d'authentification et des services de r??cup??ration des films..",
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
        "Reproduction du site de r??servation AirBnb. Utilistation de Next.js et de TailwindCss. Cr??ation d'une api connect??e ?? mongodb.  Possibilit?? pour les utilisateurs de voir la listes des logements, ajouter une annonces, enregistrer des annonces, r??server un logements en rentrants des dates d'un calendrier... ",
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
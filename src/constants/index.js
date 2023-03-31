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
    instanative

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
        "Stage de DUT, premier stage en développement web.",
        "Formation de 2 semaines en autonomie sur Vue JS, Vuetify et Laravel .",
        "Collaboration avec un alternant (developpeur backend) pour créer une plateforme web afin de remplacer le processus d'organisation des formations de l'entreprise .",
        "Participation à la création du projet (maquette, base de données...)",
      ],
    },

    {
      title: "React JS Developer",
      company_name: "Sportizer",
      icon: sportizer_logo,
      iconBg: "#383E56",
      date: "Octobre 2021 - Juin 2022",
      points: [
        "Projet Ydays (école) dans une startup de 3 personnes .",
        "Collaboration avec 3 équipes de 4-5 personnes (marketing, 3D design et Informatique) .",
        "Conception d'une application de panneau de score de Basket-ball dynamique et ergonomique afin de remplacer les ancien tableau de score dans les gymnases .",
        "Création d'une interface 'remote' (télécommande) et d'une interface 'screen' (écran d'affichage) afin de contôler toutes les variables d'un match .",
        "Utilisation d'un server socket.io afin de réduire au maximum le délai de transmission entre la télécommande et l'affichage .",
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
        "Reprise du développement de la plateforme G-Formation .",
        "Collaboration avec 2 nouveaux alternants .",
        "Implementation de mails automatiques (Mailtrap) et début du lancement des tests au sein de l'entreprise .",
        "Mis en place d'un serveur sur lequel est installé la première version de production (en interne) de la plateforme .",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Revochat",
      icon: revochat,
      iconBg: "#E6DEDD",
      date: "Octobre 2022 - Mai 2023",
      points: [
        "Développement d'une application Web3 de messagerie instantannée en React JS.",
        "Projet Ydays (école) avec une équipe de 7 développeurs .",
        "Utilisation de la technologie du Web3.0 afin de créer une des premères application de chat sur la Blockchain et de garantir l'immuabilité de celle-ci .",
        "Mis en production de cette application à l'aide de Smarts Contracts .",
      ],
    },
    
    {
      title: "Fullstack Developer",
      company_name: "Gestimum",
      icon: gestimum,
      iconBg: "#383E56",
      date: "Septembre 2022 - Septembre 2024",
      points: [
        "Reprise du développement de la plateforme G-Formation avec les mêmes alternants .",
        "Implementations d'un serveur smtp afin d'envoyer les mails aux clients .",
        "Phase de test avec tous les services de l'entreprise afin de remonter les potentiels problèmes et de se familiariser avec la platforme .",
        "Mis en place d'un plannificateur de tâches avec Laravel, permettant le déclanchement automatique de certaines fonctionnalités du site .",
        "Ouverture de la plateforme à l'exterieur afin d'organiser de réelle formations avec des clients et partenaire Gestimum .",
        "Création d'un site de pré-production afin de continuer les tests et l'ajout de nouvelles fonctionnalités .",
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
      source_code_link: "https://github.com/Sportizer",
    },
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
      source_code_link: "https://github.com/Gestimum78120/Qualiopi",
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
      source_code_link: "https://github.com/ThomasJanko/Netflix/tree/master",
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
      source_code_link: "https://github.com/ThomasJanko/airbnb-clone",
    },
    {
      name: "Instagram React native",
      description:
        "Reproduction du réseau social Instagram en application mobile. Utilistation de React native et Firebase. Possibilité pour les utilisateurs de créer un compte, s'authentifier, d'ajouter un post, de liker un post, de commenter un post, de voir les posts des utilisateurs...",
      tags: [
        {
          name: "reaxct-native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        
      ],
      image: instanative,
      source_code_link: "https://github.com/ThomasJanko/InstaReactNative",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
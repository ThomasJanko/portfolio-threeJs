import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
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
    instanative,
    taskmaster,
    spotify,
    imaginify,
    crypto_app,
    smoldAI,

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
      id: "tech",
      title: "Tech",
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
        "Mise à jour et maintenance de la plateforme G-formation .",
        "Création d'une application de gestion de tickets interne (G-Tickets) avec des intégrations (Teams / Graph API) afin de faciliter et accélérer le traitement interne .",
        "Refonte de l'espace privé Gestimum (espace Client) avec de nouvelles technologies (Vue.js / Express.js) et déploiement de la nouvelle version .",
        "Développement d'une API d'interfaçage entre Gestimum et une société externe (Kaze) afin de facilité les interventions techniques pour les clients Gestimum .",
        "Mise en production de l'espace privé, G-Ticket et de l'API d'interfaçage avec Docker sur un server Unbuntu.",
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
      site_url: "",
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
      site_url: "",
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
      site_url: "https://g-formation.gestimum.com/",
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
      site_url: "",
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
      site_url: "https://airbnb.thomas-jan.fr/",
    },
    {
      name: "Instagram React native",
      description:
        "Reproduction du réseau social Instagram en application mobile. Utilistation de React native et Firebase. Possibilité pour les utilisateurs de créer un compte, s'authentifier, d'ajouter un post, de liker un post, de commenter un post, de voir les posts des utilisateurs...",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        
      ],
      image: instanative,
      source_code_link: "https://github.com/ThomasJanko/InstaReactNative",
      site_url: "",
    },
    {
      name: "Taskmaster React native",
      description:
        "Création d'une application de gestion de tâches avec React Native. Ajout d'un dark theme, mutli-langue, prise de photo, animation de chargement, notifications, redux store...",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "redux-persist",
          color: "green-text-gradient",
        },
        
      ],
      image: taskmaster,
      source_code_link: "https://github.com/ThomasJanko-react-native/react-native-group",
      site_url: ""
    },
    {
      name: "Spotify Clone",
      description:
        `Reproduction du site de streaming Spotify. Utilistation de Next.js, Express.Js et MongoDb. Upload de musique via AWS S3, convertisseur de musique en mp3, création de playlist, ajout de musique dans une playlist, lecture de musique, recherche de musique, écoute en simultanée via des sockets...`,
      tags: [
        {
          name: "nextjs14",
          color: "blue-text-gradient",
        },
        {
          name: "talwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "socket.io",
          color: "orange-text-gradient",
        },
        {
          name: "AWS S3",
          color: "red-text-gradient",
        },
        
      ],
      image: spotify,
      source_code_link: "https://github.com/orgs/Dev-Cloud-Spotify/repositories",
      site_url: "https://spotify-front-end.thomas-jan.fr",
    },
    {
      name: "Imaginify",
      description:
        `SAAS de modification d'images avec une Intelligence Artificielle. Possibilité d'upload des images, de les télécharger, de les modifiers (upscale / format / couleurs ...)`,
      tags: [
        {
          name: "nextjs14",
          color: "blue-text-gradient",
        },
        {
          name: "talwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Clerk",
          color: "orange-text-gradient",
        },
        {
          name: "Shadcn-ui",
          color: "red-text-gradient",
        },
        
      ],
      image: imaginify,
      source_code_link: "https://github.com/ThomasJanko/imaginify",
      site_url: "https://imaginify.thomas-jan.fr",
    },
    {
      name: "SmoldAI",
      description:
        `Application regroupant plusieurs Intelligence Artificielle. Possibilité de générer du text, du code, des images, de la musqiue et des vidéos. Connexion avec O-auth, payment stripe, gestion des utilisateurs, des commandes, des abonnements...`,
      tags: [
        {
          name: "nextjs14",
          color: "blue-text-gradient",
        },
        {
          name: "talwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "O-auth",
          color: "orange-text-gradient",
        },
        {
          name: "Stripe",
          color: "red-text-gradient",
        },
        
      ],
      image: smoldAI,
      source_code_link: "https://github.com/orgs/zkerkeb-class/teams/kouci-thomas-et-leo/repositories",
      site_url: "https://smold-ai.thomas-jan.fr",
    },
    {
      name: "Crypto-app",
      description:
        `Application de transfert de cryptomonnaie. Possibilité de créer un compte, de s'authentifier, de voir son solde, de transférer de l'argent, de voir l'historique des transactions, envoie de message dans une transaction...`,
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Metamask",
          color: "pink-text-gradient",
        },
        {
          name: "Hardhat",
          color: "green-text-gradient",
        },
        {
          name: "Web3.js",
          color: "orange-text-gradient",
        },
        {
          name: "Ethereum",
          color: "red-text-gradient",
        },
        
      ],
      image: crypto_app,
      source_code_link: "https://github.com/ThomasJanko-Blockchain/crypto-wallet",
      site_url: "https://crypto-app.thomas-jan.fr",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
export const profile = {
  name: "ALAMOU Oloumidé Ridolaye",
  title: "Développeur Web Full-Stack",
  tagline: "Sécurité, Clean Code & Architecture Modulaire",
  description: "Développeur full-stack, je conçois des applications complètes, de la base de données à l'interface, avec React, Node.js et Express. Ma formation en administration des systèmes et réseaux m'apporte une vraie sensibilité à la sécurité et au déploiement.",
  location: "Porto-Novo, Bénin (Disponible à Cotonou, Abomey-Calavi et en remote)",
  email: "oloumideridolayealamou@gmail.com",
  phones: ["+229 01 69 060433", "+229 01 41 90 43 22"],
  linkedin: "https://www.linkedin.com/in/ridolaye-alamou-7aa098273",
  github: "https://github.com/Alride0",
  cvPath: "/assets/cv/CV_FULLSTACK_RID.pdf",
  profileImage: "/assets/images/profile.jpg",
};

export const skills = [
  { category: "Développement Web", items: ["HTML/CSS/JavaScript", "React.js/Next.js", "Node.js/Express.js", "Python", "SQL / MySQL"] },
  { category: "Réseaux & Systèmes", items: ["Système d'exploitation Linux", "TCP/IP, DNS, DHCP", "Sécurité applicative", "Notions cryptographiques", "OWASP Top 10"] },
  { category: "DevOps & Outils", items: ["Git / GitHub", "Docker (en apprentissage)", "Postman", "Clean Code", "Architecture modulaire"] },
];

export const projects = [
  {
    title: "SIGAC - Système de Gestion Holistique",
    client: "Gen's Couture",
    date: "Juin - Juillet 2026",
    description: "Conception et développement d'une application de gestion pour un atelier de couture, centralisant les clients, les mesures, les paiements et les commandes.",
    features: [
      "Mise en place de l'authentification sécurisée (JWT, bcryptjs) et gestion des rôles",
      "Développement du module clients (recherche, tri, pagination, CRUD) et module de mesures avec historique",
      "Réalisation de tests de sécurité (injection SQL, CORS, validation serveur) et audit OWASP Top 10",
      "Mise en production sur Vercel"
    ],
    tech: ["React.js/Vite", "Node.js/Express.js", "MySQL", "JWT"],
    demoLink: "https://sigac-two.vercel.app",
    githubLink: "https://github.com/Alride0/SIGAC",
    // REMPLACE CETTE LIGNE PAR TA LISTE D'IMAGES :
    images: [
      "/assets/images/sigac-1.png", 
      "/assets/images/sigac-2.png", 
      "/assets/images/sigac-3.png"
    ], 
  }
];

export const experiences = [
  { 
    title: "Développeur Web Full-Stack (Stage)", 
    company: "Gen's Couture", 
    date: "Juin - Juillet 2026", 
    description: "Stage réalisé à l'issue d'une formation en cybersécurité et développement web. Conception de l'application SIGAC de A à Z." 
  },
  { 
    title: "Stagiaire en Cybersécurité & Réseaux", 
    company: "PentestingStore", 
    date: "Mars 2025 - Septembre 2025", 
    description: "Sécurisation d'un réseau informatique et analyse de vulnérabilités avec Nmap. Tests d'intrusion (pentesting). Résultat : mise en place d'un système de détection d'intrusion avec Suricata et Ansible." 
  },
  { 
    title: "Stagiaire en Développement Web", 
    company: "Cour Suprême du Bénin", 
    date: "Mai 2024 - Août 2024", 
    description: "Enregistrement des livres dans la base de données et recueil d'informations sur la prime des agents. Résultat : conception d'une application web de gestion des primes (Frontend React.js, Backend Spring Boot)." 
  }
];

export const education = [
  { degree: "Licence en Informatique de Gestion", school: "ENEAM", date: "2025", detail: "Option Administration des Réseaux Informatiques" },
  { degree: "Baccalauréat Scientifique, Série C", school: "CEG DOWA", date: "2022", detail: "" },
  { degree: "Baccalauréat Scientifique, Série D", school: "CEG SURU-LERE", date: "2021", detail: "" }
];
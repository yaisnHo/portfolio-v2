export const projects = [
  {
    title: "ZGW Testdata Tool",
    description:
      "Spring Boot applicatie die automatisch testdata aanmaakt voor ZGW-omgevingen. Controleert catalogusconfiguratie, vult ontbrekende items aan, en voert scenario's uit via de ZGW API's.",
    tech: ["Java", "Spring Boot", "REST API", "OAuth2", "Thymeleaf"],
    github: "https://github.com/yaisnHo/zgw-testdata-tool",
    highlights: [
      "10 vaste zaaktypen met volledige basisconfiguratie",
      "4-staps run-engine met cataloguscontrole",
      "Herbruikbare testscenario's als JSON",
    ],
  },
  {
    title: "StackShop",
    description:
      "E-commerce webshop gebouwd met Next.js en Tailwind CSS. Bevat productcatalogus, winkelwagen, en checkout flow met moderne UI-componenten.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/yaisnHo",
    highlights: [
      "Server-side rendering voor snelle laadtijden",
      "Responsive design met Tailwind",
      "Cart state management met React Context",
    ],
  },
  {
    title: "Android Retrofit App",
    description:
      "Android applicatie met Retrofit voor API-integratie. Demonstreert clean architecture en moderne Android-development patterns.",
    tech: ["Android", "Java", "Retrofit", "REST API"],
    github: "https://github.com/Yasin-Horani",
    highlights: [
      "Clean architecture met separation of concerns",
      "Retrofit HTTP client integratie",
      "JSON parsing en data binding",
    ],
  },
  {
    title: "Database Design Tool",
    description:
      "ERD-visualisatietool voor het ontwerpen van databaseschema's. Ondersteunt MySQL en PostgreSQL met visuele representatie van relaties.",
    tech: ["Python", "MySQL", "ERD", "Database Design"],
    github: "https://github.com/Yasin-Horani",
    highlights: [
      "Visuele ERD-generatie",
      "MySQL schema-export",
      "Relatie-mapping en validatie",
    ],
  },
];

export const skills = [
  { name: "Java", level: 90, category: "Backend" },
  { name: "Spring Boot", level: 85, category: "Backend" },
  { name: "REST API Design", level: 85, category: "Backend" },
  { name: "Python", level: 70, category: "Backend" },
  { name: "React", level: 75, category: "Frontend" },
  { name: "TypeScript", level: 70, category: "Frontend" },
  { name: "Next.js", level: 65, category: "Frontend" },
  { name: "HTML/CSS", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 75, category: "Frontend" },
  { name: "MySQL", level: 80, category: "Data" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 60, category: "Tools" },
  { name: "Swagger/OpenAPI", level: 80, category: "Tools" },
  { name: "Agile/Scrum", level: 85, category: "Tools" },
];

export const experience = [
  {
    company: "Roxit",
    role: "Software Engineer",
    period: "Huidig",
    description:
      "Ontwikkeling van gemeentelijke softwareoplossingen met Java en Spring Boot. Focus op clean code, API-design en ZGW-standaarden.",
  },
  {
    company: "Talksome",
    role: "Developer",
    period: "Eerder",
    description:
      "Webapplicaties en API-integraties gebouwd met moderne frameworks. Ervaring opgedaan met agile development en klantcommunicatie.",
  },
];

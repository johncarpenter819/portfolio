const projectsData = [
  {
    id: 1,
    title: "Messaging App (Real-Time Chat)",
    keyChallenge:
      "Architecting a secure, performant, and real-time communication infrastructure capable of handling asynchronous data flow and ensuring data security",
    description:
      "A full-stack, secure, real-time messaging platform developed to demonstrate proficiency in modern web architecture and data security protocols. This project showcases the ability to manage complex, asynchronous data flow by integrating a Node/Express backend with a structured PostgreSQL database. The front-end, built with React, delivers a highly responsive, single-page experience. Key features include end-to-end user authentication and authorization, highlighting a strong focus on secure credential handling and protected session management. This application validates competency in scalable state management, persistent data integrity, and robust full-stack development.",
    technologies: [
      "React",
      "React Router",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "CORS",
    ],
    languages: [
      { name: "JavaScript", percent: 73.6, color: "#f7df1e" },
      { name: "CSS", percent: 25.7, color: "#1572b6" },
      { name: "HTML", percent: 0.7, color: "#e34f26" },
    ],

    // videoLink: TDB,
    visual: "Demo Video Coming Soon",
  },
  {
    id: 2,
    title: "Odin Book (Social Media Clone)",
    keyChallenge:
      "Designing and optimizing a relational database schema (many-to-many) for social features like following, feeds, liking, commenting.",
    description:
      "A full-stack social media application designed to showcase advanced proficiency in modern web architecture, data modeling, and secure authentication practices. The front-end, built with React and React Router, delivers a dynamic, single-page application experience for seamless navigation between user profiles and a content feed. The Node/Express backend integrates with Prisma ORM to efficiently manage a complex relational database schema, demonstrating expertise in handling interconnected user-generated content. The project emphasizes a secure, production-ready system through the implementation of session-based authentication, including password hashing with Bcrypt. This application validates the ability to build and scale interactive, data-intensive platforms.",
    technologies: [
      "React",
      "React Router",
      "Vite",
      "Node.js",
      "Express",
      "Prisma",
      "Passport",
      "Express-Session",
      "Bcrypt",
      "Faker.js",
    ],
    languages: [
      { name: "JavaScript", percent: 78.8, color: "#f7df1e" },
      { name: "CSS", percent: 20.9, color: "#1572b6" },
      { name: "HTML", percent: 0.3, color: "#e34f26" },
    ],

    // videoLink: TDB,
    visual: "Demo Video Coming Soon",
  },
  {
    id: 3,
    title: "File Uploader",
    keyChallenge:
      "Designing and implementing a secure, robust, scalable file ingestion pipeline while maintaining strict session-based user authentication.",
    description:
      "A full-stack file management service developed to demonstrate expertise in secure data handling, user session management, and ORM integration. The system features a custom file upload API built on Node.js/Express, utilizing the Multer middleware to manage high-volume multipart form data ingestion. It employs a robust session-based authentication architecture (Passport.js and Express Sessions) to ensure protected resource access and upload authorization. Prisma is used as the ORM to facilitate efficient, type-safe database interactions for persisting file metadata and linking files to specific users. This project validates proficiency in security best practices for file transfer and full-stack development using modern JavaScript tools.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "Passport",
      "Express-Session",
      "Bcrypt",
      "Multer",
      "UUID",
    ],
    languages: [
      { name: "JavaScript", percent: 85.1, color: "#f7df1e" },
      { name: "CSS", percent: 5.9, color: "#1572b6" },
      { name: "HTML", percent: 9, color: "#e34f26" },
    ],

    // videoLink: TDB,
    visual: "Demo Video Coming Soon",
  },
  {
    id: 4,
    title: "Inventory Management Application",
    keyChallenge:
      "Architecting a complete, server-rendered MVC application capable of reliably managing complex relational data and ensuring CRUD functionality for inventory items without relying on a separate client-side framework.",
    description:
      "A full-stack Inventory Management System built on a classic Node.js/Express MVC (Model-View-Controller) architecture. This project showcases deep competency in developing server-rendered applications using EJS for dynamic, template-based views. It is powered by a PostgreSQL database, demonstrating proficiency in relational data design and direct SQL interaction via the pg driver. The application implements complete CRUD functionality for managing all aspects of inventory, utilizing middleware (method-override, body-parser) to ensure adherence to RESTful conventions for data manipulation. This project validates a strong foundation in backend development, relational database management, and holistic application structuring.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    languages: [
      { name: "JavaScript", percent: 34.7, color: "#f7df1e" },
      { name: "CSS", percent: 38.6, color: "#1572b6" },
      { name: "EJS", percent: 26.7, color: "#e34f26" },
    ],

    // videoLink: TDB,
    visual: "Demo Video Coming Soon",
  },
];

export default projectsData;

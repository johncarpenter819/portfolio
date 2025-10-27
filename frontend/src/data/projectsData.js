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
    visual: "/messaging-app.png",
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
    visual: "/odin-book-demo.png",
  },
  {
    id: 3,
    title: "Level Up Blog",
    keyChallenge:
      "Designing and optimizing the back-end infrstructure to aminto performance and handle multi-users communicating at once.",
    description:
      "This is a full-stack social media application designed to showcase advanced proficiency in modern web architecture, data modeling, and secure authentication practices. The front-end, built with React 19 and React Router DOM, delivers a dynamic, single-page application experience for seamless navigation, communicating with the back-end. The Node.js/Express back-end serves as a RESTful API, defining dedicated routes for Authentication, Users, Posts, Comments, and Reactions, and integrates with Prisma ORM for efficient management of the complex relational database schema. Security is prioritized through the use of bcryptjs for password hashing and jsonwebtoken (JWT) for stateless authentication.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "JWT",
      "Bcrypt",
      "CORS",
    ],
    languages: [
      { name: "JavaScript", percent: 72.2, color: "#f7df1e" },
      { name: "CSS", percent: 25.1, color: "#1572b6" },
      { name: "HTML", percent: 2.7, color: "#e34f26" },
    ],
    visual: "/blog.png",
  },
];

export default projectsData;

import React from "react";
import {
  FaCode,
  FaThLarge,
  FaDatabase,
  FaDesktop,
  FaShoppingCart,
  FaClipboardCheck,
} from "react-icons/fa";
import "../styles/Freelance.css";
import Navbar from "../components/Navbar";

const IconMap = {
  CodeSquare: FaCode,
  LayoutGrid: FaThLarge,
  Database: FaDatabase,
  Monitor: FaDesktop,
  ShoppingCart: FaShoppingCart,
  ClipboardCheck: FaClipboardCheck,
};

const SERVICES_OFFERED = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end customer appliocations using React, Node.js, and modern databases like MongoDB or PostgreSQL. Ideal for complex business logic and scalable platforms.",
    icon: "CodeSquare",
    color: "border-teal-600",
  },
  {
    title: "Front-End Expertise",
    description:
      "Highly performant and responsive user interfaces built with React. Focusing on accessibility, state management, and an exceptional user experience.",
    icon: "LayoutGrid",
    color: "border-emerald-600",
  },
  {
    title: "Back-End API & Database",
    description:
      "Designing and building secure, efficient, and scalable RESTful APIs with Node.js/Express. Handling authentication, data modeling, and integrations.",
    icon: "Database",
    color: "border-cyan-600",
  },
  {
    title: "Portfolio & Landing Pages",
    description:
      "High-impact, fast-loading static sites, and marketing landing page optimized for SEO and conversion. Get a professional online presence quickly.",
    icon: "Monitor",
    color: "border-sky-600",
  },
  {
    title: "E-commerce & Integrations",
    description:
      "Setting up e-commerce platforms (Shopify, custom) and integrating payment gateways, inventory management, and third-party services.",
    icon: "ShoppingCart",
    color: "border-blue-600",
  },
  {
    title: "Consulting & Architecture",
    description:
      "Code review, technical debt assessment, and architectural guidance. Helping teams plan scalable solutions and adopt best practices.",
    icon: "ClipboardCheck",
    color: "border-Indigo-600",
  },
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Discovery & Scope",
    details:
      "Deep dive into your business needs, define features, and finalize project specifications to establish a clear fixed price or milestone structure.",
  },
  {
    number: 2,
    title: "Design & Planning",
    details:
      "Wireframing and technical architecture setup. We agree on the tech stack, database structure, and user flow before any coding begins. ",
  },
  {
    number: 3,
    title: "Development Sprints",
    details:
      "Rapid, iterative development in short cycles. You receive regular updates and working demos for continuous feedback.",
  },
  {
    number: 4,
    title: "Testing & Review",
    details:
      "Thorough quality assurance, bug fixing, and user acceptance testing to ensure the product meets all requirements and standards.",
  },
  {
    number: 5,
    title: "Deployment & Launch",
    details:
      "Seamless deployment to your chosen hosting environment (Vercel, AWS, etc.), followed by a knowledge transfer and post-launch support period.",
  },
];

const Icon = ({ name, className }) => {
  const LucideIcon = IconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} />;
};

const Freelance = ({ onQuoteRequest }) => {
  return (
    <div className="freelance-container">
      <section className="freelance-hero">
        <h1 className="hero-title">Your Next Web Application, Built Right.</h1>
        <p className="hero-subtitle">
          I don't just write code; I architect and deliever reliable, scalable,
          and beautifully designed full-stack solutions tailored to your
          business goals.
        </p>
      </section>
      {/* <Navbar /> */}

      <section className="live-projects-section">
        <h2 className="section-title">Live Work & Client Builds</h2>
        <p className="section-description">
          Here are a few Projects currently in development or recently deployed
          for clients. Each link opens a live, production environment.
        </p>

        <div className="projects-grid">
          {[
            {
              name: "PaxTerra",
              description:
                "This project involved designing and building a user-centric website aimed at converting visitors into quote requests for a local arboricultural business. The design successfully marries a strong, authoritative green and orange color scheme with clear, easy-to-read typography (Lora and Poppins). The architecture uses a modular CSS approach across distinct components (Hero, About, Gallery, Testimonials, Footer) to ensure maintainability. Critical elements include prominent CTAs with quote forms and two dedicated CTA strip, all designed to guide the user towards booking a service.",
              link: "https://paxterra.vercel.app/",
              image: "/paxterra-bg.png",
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="freelance-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <span className="project-link">View Live</span>
            </a>
          ))}
        </div>
      </section>

      <section className="services-section">
        <h2 className="section-title">Core Development Services</h2>
        <p className="section-description">
          Specializing in the modern JavaScript ecosystem, I offer a range of
          services designed for speed, stability, and future growth.
        </p>

        <div className="services-grid">
          {SERVICES_OFFERED.map((service, index) => (
            <div key={index} className="service-card" tabIndex="0">
              <div className="icon-wrapper">
                <Icon
                  name={service.icon}
                  className={`service-icon ${service.color}`}
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <h2 className="section-title colored">
          How We Build Together (The 5-Step Process)
        </h2>
        <p className="section-description">
          A clear, transparent process from initial idea to successful launch
          ensures predictability and high quality at every stage.
        </p>
        <div className="process-steps-container">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-details">{step.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="value-section">
        <h2 className="section-title">Ready to Transform Your Idea?</h2>
        <div className="value-blocks-container">
          <div className="value-block">
            <h3>Focus on Value</h3>
            <p>
              I prioritize delivering features that directly impact your
              business, not just checking boxes. Every hour invested is focused
              on ROI.
            </p>
          </div>
          <div className="value-block">
            <h3>Transparent Pricing</h3>
            <p>
              We start with a clear, fixed price quote based on defined scope,
              giving you financial predictability from day one.
            </p>
          </div>
          <div className="value-block">
            <h3>Post-Launch Assurance</h3>
            <p>
              Receive a complimentary support window after deployment to handle
              any unforeseen bugs or minor adjustments. Your success is the
              launchpad, not the finish line.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Freelance;

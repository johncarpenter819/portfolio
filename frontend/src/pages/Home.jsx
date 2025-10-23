import React, { useEffect, useState } from "react";
import "../styles/Home.css";

const Home = () => {
  const startDate = new Date("2025-01-31T00:00:00");
  const [timeElapsed, setTimeElapsed] = useState(getTimeElapsed(startDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(getTimeElapsed(startDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <header className="header-section">
        <h1 className="intro-title">Hi, I'm John Carpenter</h1>
        <h2 className="intro-subtitle">Full Stack JavaScript Developer</h2>
      </header>

      <section className="journey-section">
        <h3 className="journey-title">My Developer Journey</h3>
        <p className="journey-description">
          Time Dedicated to Full Stack Mastery
        </p>
        <div className="journey-timer">
          <span>{timeElapsed.years} Years</span>{" "}
          <span>{timeElapsed.months} Months</span>{" "}
          <span>{timeElapsed.days} Days</span>{" "}
          <span>{timeElapsed.hours} Hours</span>{" "}
        </div>
      </section>

      <section className="summary-section">
        <p className="summary-intro">
          A dynamic and highly experienced professional evolving into{" "}
          <strong>Software Development</strong> with a 12-year foundation in the
          high-stakes environments of <strong>Telecommunications</strong> and{" "}
          <strong>Electronic Manufacturing</strong>. I bring unique perspective
          for my Full-Stack professional journey with an understanding of the
          bridge between software development and complex hardware systems. My
          background includes{" "}
          <strong>
            7 years of specialized Program Management experience, 5 in Telecom
            and 2 in Electronics Manufacting.
          </strong>{" "}
          I successfully delivered large-scale, mission-critical products and
          mobility testing metrics from concept to market. I now offer a Program
          Manager and Software Developer perspective grounded in a deep
          understanding of:
        </p>

        <ul className="summary-skills">
          <li>
            <strong>System Architecture:</strong> How software integrates with
            hardware and infrastructure.{" "}
          </li>

          <li>
            <strong>Project Delivery:</strong> Agile methodologies, stakeholder
            management, risk mitigation, and on-time execution.{" "}
          </li>

          <li>
            <strong>Business Acumen:</strong> The financial and operational
            impact of technical decisions.
          </li>
        </ul>

        <p className="summary-closing-text">
          I am actively applying this comprehensive skill set to modern software
          development- eager to contribute not only clean, efficient code but
          also proven leadership and systemic thinking that instantly elevates
          my performance. Ready to turn complex problems into elegant software
          solutions!
        </p>

        <h3>The Odin Project: Full Stack JavaScript Curriculum Mastery</h3>
        <p className="summary-description">
          A comprehensive, project-based breakdown of the technology and
          concepts mastered.
        </p>

        <div className="curriculum-grid">
          <div className="curriculum-block">
            <h4>Foundations & Intermediate JS</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Git/Github</li>
              <li>DOM Manipulation</li>
              <li>ES6+</li>
              <li>Testing (Jest)</li>
            </ul>
          </div>

          <div className="curriculum-block">
            <h4>Front-End: React Mastery</h4>
            <ul>
              <li>Hooks (useState, useEffect, useMemo)</li>
              <li>Components</li>
              <li>Routing</li>
              <li>State Management (Context)</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          <div className="curriculum-block">
            <h4>Back-End: Node & Express</h4>
            <ul>
              <li>Node.js (Server Setup)</li>
              <li>Express.js (Routing)</li>
              <li>Rest APIs</li>
              <li>Authentication (JWT/Passport)</li>
              <li>MongoDB/Mongoose</li>
            </ul>
          </div>

          <div className="curriculum-block">
            <h4>Tooling & Best Practices</h4>
            <ul>
              <li>Webpack/Vite</li>
              <li>ESLint/Prettier</li>
              <li>Async/ Await</li>
              <li>Test-Driven Development (TDD)</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-card">
          <h3>Contact Me</h3>
          <p>Have a question, opportunity, or just want to connect?</p>
          <button className="contact-btn">Let's Connect</button>
        </div>

        <div className="quote-card">
          <h3>Request a Quote</h3>
          <p>Need a solution? Let's bring your ideas to life!</p>
          <button className="quote-btn">Request a Quote</button>
        </div>
      </section>
    </div>
  );
};

function getTimeElapsed(startDate) {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(months / 12);

  return {
    years,
    months: months % 12,
    days: Math.floor(days % 30.44),
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
}

export default Home;

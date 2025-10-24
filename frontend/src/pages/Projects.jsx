import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-page-container">
      <Navbar />

      <header className="projects-header">
        <h1 className="projects-title">Portfolio of Full Stack Projects</h1>
        <p className="projects-subtitle">
          Showcasing solutions to complex technical challenges, built with The
          Odin Project's curriculum.
        </p>
      </header>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

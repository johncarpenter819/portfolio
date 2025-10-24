import React from "react";
import "../styles/Projects.css";

const LanguageBar = ({ languages }) => {
  return (
    <div className="language-bar-container">
      <div className="language-bar">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="language-segment"
            style={{
              width: `${lang.percent}%`,
              backgroundColor: lang.color,
            }}
            title={`${lang.name}: ${lang.percent}%`}
          ></div>
        ))}
      </div>
      <div className="language-list">
        {languages.map((lang) => (
          <span key={lang.name} className="language-item">
            <span
              className="language-dot"
              style={{ backgroundColor: lang.color }}
            ></span>
            {lang.name} ({lang.percent}%)
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-visual-block">
        <div className="video-placeholder-block">{project.visual}</div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>

        <p className="key-challenge">
          <span className="key-challenge-label">Key Challenge:</span>
          {project.keyChallenge}
        </p>

        <p className="project-description">{project.description}</p>

        <LanguageBar languages={project.languages} />

        <div className="project-footer">
          <div className="tech-used">
            <span className="tech-label">Tech Stack:</span>
            <span className="tech-list">
              {project.technologies.join(" / ")}
            </span>
          </div>

          <a
            href={project.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="video-link-btn"
          >
            Watch Demo 🎬
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

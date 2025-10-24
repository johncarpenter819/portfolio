import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-component">
      <NavLink to="/" className="nav-item">
        Welcome
      </NavLink>
      <NavLink to="/resume" className="nav-item">
        Resume
      </NavLink>
      <NavLink to="/projects" className="nav-item">
        Projects
      </NavLink>
      <NavLink to="/freelance" className="nav-item">
        Freelance
      </NavLink>
    </nav>
  );
};

export default Navbar;

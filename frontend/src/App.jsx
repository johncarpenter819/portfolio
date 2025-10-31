import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Freelance from "./pages/Freelance";
import Navbar from "./components/Navbar";
import "../src/global.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="freelance" element={<Freelance />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;

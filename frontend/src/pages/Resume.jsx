import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Resume.css";

const ExperienceSection = () => {
  return (
    <section className="resume-experience-section">
      <h2 className="section-title">Experience</h2>
      <Navbar />

      <div className="job-entry">
        <h3 className="job-header">
          <span className="job-title">Program Manager</span> | ACDi (Electronics
          Manufacturing) | <span className="job-dates">2022-2024</span>
        </h3>
        <ul className="job-bullets">
          <li>
            Directed the full product lifecycle as the main customer liaison,
            managing proposals, ordering, scheduling, and delivery to ensure
            overall customer satisfaction and program profitability.
          </li>
          <li>
            Managed and streamlined the New Product Introduction (NPI) process
            by collaborating with Engineering, Manufacturing, PCB Design, and
            Quality teams to ensure on-time and on-budget product launch.
          </li>
          <li>
            Mitigated financial and compliance risk by performing detailed
            contract review of all customer purchase orders and proactively
            monitoring the disposition of excess, orphan, and obsolete material.
          </li>
        </ul>
      </div>

      <div className="job-entry">
        <h3 className="job-header">
          <span className="job-title">Program Manager</span> | Spirent |{" "}
          <span className="job-dates">2019-2022</span>
        </h3>
        <ul className="job-bullets">
          <li>
            Founded and scaled a new benchmarking department from inception,
            defining the operating model, project processes, and technical
            requirements, resulting in direct revenue contribution.
          </li>
          <li>
            Developed and managed the departmental budget and resource
            allocation, ensuring optimal use of funds and personnel to meet
            strategic objectives.
          </li>
          <li>
            Managed the full project lifecycle for complex domestic and global
            IoT programs and testing platforms, from requirements definition to
            final delivery.
          </li>
          <li>
            Cultivated robust international team partnerships and worked closely
            with Engineering and Sales teams to ensure project success and
            stakeholder alignment.
          </li>
        </ul>
      </div>

      <div className="job-entry">
        <h3 className="job-header">
          <span className="job-title">Mobility Enigneer</span> | Spirent |{" "}
          <span className="job-dates">2012-2016</span>
        </h3>
        <ul className="job-bullets">
          <li>
            Executed real-world field testing for pre-market 5G and mobility
            devices, utilizing Over-the-Air (OTA) assurance solutions to
            validate performance against network KPIs.
          </li>
          <li>
            Employed advanced tool chains (e.g., QXDM, Datum Client) to collect
            and meticulously analyze massive volumes of audio, video, GPS, and
            data, ensuring high-quality standards.
          </li>
          <li>
            Identified and resolved unique device parameters and technical
            issues, driving substantial improvements in device performance
            during the critical pre-launch validation phase.
          </li>
          <li>
            Collaborated directly with major carriers and vendors to address
            technical discrepancies, ensuring device readiness for market launch
            and maintaining adherence to industry standards.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;

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
            Directed the full product lifecycle as the primary customer liaison,
            managing proposals, procurement, scheduling, and delivery to ensure
            customer satisfaction and program profitability.
          </li>
          <li>
            Managed a portfolio of 20–30 concurrent projects spanning New
            Product Introduction (NPI) through established production for 8–10
            client companies, overseeing $1–2M in total program value.
          </li>
          <li>
            Streamlined the NPI process by collaborating across Engineering,
            Manufacturing, PCB Design, and Quality teams, achieving consistent
            on-time and on-budget product launches.
          </li>
          <li>
            Mitigated financial and compliance risks through detailed contract
            reviews and proactive oversight of excess, orphaned, and obsolete
            materials.
          </li>
          <li>
            Implemented improved tracking and reporting processes that increased
            operational visibility and strengthened cross-department
            coordination.
          </li>
          <li>
            Built strong relationships with key clients, ensuring alignment
            between technical execution, business objectives, and manufacturing
            capabilities.
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
            Managed benchmarking programs across 120 U.S. markets, conducting
            biannual testing cycles and expanding operations internationally
            through pilot launches in Canada, the U.K., and Japan.
          </li>
          <li>
            Led and coordinated cross-functional teams of 28 professionals,
            including 15 engineers, 7 product managers, and 6 reporting
            analysts, ensuring seamless collaboration and on-time delivery
            across global initiatives.
          </li>
          <li>
            Optimized departmental budget and resource utilization, adhering to
            financial targets while achieving a 40% reduction in data storage
            costs (~$120K annual savings).
          </li>
          <li>
            Designed and implemented a hybrid data storage architecture
            combining RAID-protected on-premise storage and distributed SSDs for
            engineers, enhancing data security, redundancy, and scalability.
          </li>
          <li>
            Oversaw the full project lifecycle for complex domestic and
            international IoT benchmarking and testing platforms — from
            requirements definition through deployment — ensuring technical
            accuracy and stakeholder alignment.
          </li>
          <li>
            Cultivated strong domestic and international partnerships across
            Engineering, Sales, and Product teams, fostering transparent
            communication and accountability.
          </li>
        </ul>
      </div>

      <div className="job-entry">
        <h3 className="job-header">
          <span className="job-title">Mobility Engineer</span> | Spirent |{" "}
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

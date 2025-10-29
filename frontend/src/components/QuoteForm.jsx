import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const PROJECT_TYPES = [
  "Select Project Type",
  "Customer Full-Stack Application (React/Node)",
  "Front-End Development (React Only)",
  "Back-End API Development (Node/Express/MongoDB)",
  "Portfolio Website/ Landing Page",
  "E-commerce Integration/ Setup",
  "Consulting/ Architectural Review",
  "Other",
];

const SERVICE_ID = "contact_service";
const TEMPLATE_ID = "request_quote";
const PUBLIC_KEY = "2uYmi4KrvTkVbfniF";

const QuoteForm = ({ onClose }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    projectType: PROJECT_TYPES[0],
    budget: "",
    details: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    if (formData.projectType === PROJECT_TYPES[0]) {
      setStatus("error: Please select a valid Project Type.");
      return;
    }

    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      reply_email: formData.email,
      phone: formData.phone,
      project_type: formData.projectType,
      budget: formData.budget,
      details: formData.details,
      time: new Date().toLocaleString(),
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          projectType: PROJECT_TYPES[0],
          budget: "",
          details: "",
        });
        setTimeout(onClose, 3000);
      } else {
        console.error("EmailJS Quote Error:", response.text);
        setStatus(
          `error: Quote submission failed (Status: ${response.status}).`
        );
      }
    } catch (error) {
      console.error("submission error:", error);
      setStatus("error: Network error or server issue.");
    }
  };

  return (
    <div className="contact-form">
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <h2>Request a Quote</h2>

      {status === "success" && (
        <p className="success-msg">
          ✅ Quote request sent, I'll review and get back to you!
        </p>
      )}
      {status.startsWith("error") && <p className="error-msg">❌ {status}</p>}

      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectType">Type of Project</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="form-input"
          >
            {PROJECT_TYPES.map((type, index) => (
              <option key={type} value={type} disabled={index === 0}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="budget">Estimated Budget</label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="$5,000 - $10,000"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="details">Project Details/ Scope</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting"
            ? "Sending Request..."
            : "Submit Quote Request"}
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;

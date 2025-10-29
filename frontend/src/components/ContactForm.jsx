import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "contact_service";
const TEMPLATE_ID = "contact_form";
const PUBLIC_KEY = "2uYmi4KrvTkVbfniF";

const ContactForm = ({ onClose }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      reply_email: formData.email,
      company: formData.company || "N/A",
      phone: formData.phone,
      message: formData.message,
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
          company: "",
          phone: "",
          email: "",
          message: "",
        });
        setTimeout(onClose, 3000);
      } else {
        console.error("EmailJS Error:", response.text);
        setStatus(`error: Failed to send (Status: ${response.status}).`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error: Network error or server issue.");
    }
  };

  return (
    <div className="contact-form">
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <h2>Contact Me</h2>

      {status === "success" && (
        <p className="success-msg">✅ Message sent, I will be in touch soon!</p>
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
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
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
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={"10"}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Let's Connect"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

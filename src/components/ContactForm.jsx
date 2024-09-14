import React, { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Error sending email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className={styles.inquiry}>
      <label htmlFor="name">Your Name *</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email*</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="whatsappNumber">WhatsApp number *</label>
      <input
        type="text"
        id="whatsappNumber"
        name="whatsappNumber"
        value={formData.whatsappNumber}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message *</label>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="What type of truck do you want?"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors as the user types
    setErrors({ ...errors, [name]: "" });
  };

  // Validate fields on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (!value) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Please enter a valid email address.";
    }

    setErrors({ ...errors, [name]: error });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required.`;
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit form logic here
      console.log("Form submitted:", formData);
      alert("Thank you for your message!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Contact Me</h1>
      <form>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label"
            style={{ color: "var(--primary)" }}
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            style={{ borderColor: "var(--secondary)" }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ color: "var(--primary)" }}
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            style={{ borderColor: "var(--secondary)" }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="message"
            className="form-label"
            style={{ color: "var(--primary)" }}
          >
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            style={{ borderColor: "var(--secondary)" }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

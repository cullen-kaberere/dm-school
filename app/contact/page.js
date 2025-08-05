"use client"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ fullName: "", email: "", message: "" })
  }

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>

        <div className="grid-two">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Get in Touch</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Phone</h3>
                <p>+254 700 123 456</p>
              </div>

              <div className="contact-item">
                <h3>Email</h3>
                <p>info@miremaschool.ac.ke</p>
              </div>

              <div className="contact-item">
                <h3>Address</h3>
                <p>
                  123 Education Avenue
                  <br />
                  Mirema Drive, Nairobi
                  <br />
                  Kenya
                </p>
              </div>

              <div className="contact-item">
                <h3>Office Hours</h3>
                <p>
                  <strong>Monday – Friday:</strong> 8:00 AM – 5:00 PM
                  <br />
                  <strong>Saturday:</strong> 8:00 AM – 1:00 PM
                  <br />
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

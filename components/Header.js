"use client"

import { useState } from "react"
import Link from "next/link"
import NavLink from "./NavLink"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <Link href="#" className="portal-link">
              Learner portal
            </Link>
            <span className="separator">|</span>
            <Link href="#" className="portal-link">
              Parents portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <Link href="/">
                <img src="/logo-placeholder.png" alt="Mirema School Logo" width="50" height="50" />
                <span className="logo-text">Mirema School</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about/bb">About</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/velocity">Academics</NavLink>
              <NavLink href="/contact">Admissions</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation menu">
              <span className={`hamburger ${isMenuOpen ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-nav-content">
          <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink href="/about/bb" onClick={() => setIsMenuOpen(false)}>
            About
          </NavLink>
          <NavLink href="/gallery" onClick={() => setIsMenuOpen(false)}>
            Gallery
          </NavLink>
          <NavLink href="/velocity" onClick={() => setIsMenuOpen(false)}>
            Academics
          </NavLink>
          <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
            Admissions
          </NavLink>
          <NavLink href="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

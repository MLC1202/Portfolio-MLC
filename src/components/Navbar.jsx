import React from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, scrollToSection, showNavbar }) {
  return (
    <nav className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
      <button className="nav-brand" onClick={() => scrollToSection('home')}>
        MLC
      </button>

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <button
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <a
        className="nav-resume"
        href="Resume.pdf"
        download
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>    </nav>
  );
}
import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Home({ scrollToSection }) {
  return (
    <section className="home">
      <div className="home-background">
        <div className="home-glow home-glow-1"></div>
        <div className="home-glow home-glow-2"></div>
      </div>

      <div className="home-layout">
        <div className="home-content">
          <div className="home-badge">Computer Engineer</div>

          <h1 className="home-title">
            <span className="home-greeting">Hi, I&apos;m</span>
            <span className="home-name">Matheus Cardoso</span>
          </h1>

          <p className="home-description">
            Developer focused on building high-quality solutions, combining logical thinking, attention to detail, and a commitment to clean, maintainable code.
          </p>

          <div className="home-actions">
            <button
              className="home-btn home-btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects <span>→</span>
            </button>

            <button
              className="home-btn home-btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>

          <div className="home-socials">
            <a
              href="https://github.com/MLC1202"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/matheus-cardoso-74a44a268/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a href="mailto:tecocardoso1@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="home-visual">
          <div className="home-image-frame">
            <img
              src="/images/home.png"
              alt="Matheus Cardoso"
              className="home-image"
            />
          </div>
        </div>
      </div>

      <button
        className="scroll-indicator"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
      >
        <span className="scroll-indicator-wheel"></span>
      </button>
    </section>
  );
}
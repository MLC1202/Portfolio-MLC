import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-background">
        <div className="about-glow about-glow-1"></div>
        <div className="about-glow about-glow-2"></div>
      </div>

      <div className="about-container">
        <div className="about-heading">
          <h2 className="about-title">About</h2>
          <span className="about-title-line"></span>
        </div>

        <div className="about-grid">
          <div className="about-photo-column">
            <div className="about-photo-glow"></div>

            <div className="about-photo-wrapper">
              <img
                src="/images/About.jpg"
                alt="Matheus Cardoso"
                className="about-photo"
              />
              <div className="about-photo-overlay"></div>
            </div>
          </div>

          <div className="about-text-column">
            <div className="about-card">
              <p className="about-text">
                I’m a Computer Engineering student passionate about technology, problem solving, and continuous growth. Through academic projects and extracurricular experiences, I’ve been developing not only my technical skills, but also teamwork, organization, and a practical mindset.
              </p>

              <p className="about-text">
              As part of this journey, I was a member of the HR team at Eco Mauá from August 2023 to March 2024, where I strengthened skills related to collaboration, responsibility, and working in a team-oriented environment.
              </p>


              <div className="about-info-grid">
                <div className="about-info-item">
                  <span className="about-info-label">Name</span>
                  <span className="about-info-value">Matheus Cardoso</span>
                </div>

                <div className="about-info-item">
                  <span className="about-info-label">Email</span>
                  <span className="about-info-value">tecocardoso1@gmail.com</span>
                </div>

                <div className="about-info-item">
                  <span className="about-info-label">Location</span>
                  <span className="about-info-value">São Paulo, SP</span>
                </div>

                <div className="about-info-item">
                  <span className="about-info-label">Languages</span>

                  <div className="about-languages">
                    <div className="language-item">
                      <div className="language-top">
                        <span className="language-name">Portuguese</span>
                        <span className="language-level">Native</span>
                      </div>
                      <div className="language-bar">
                        <span className="language-fill language-fill-100"></span>
                      </div>
                    </div>

                    <div className="language-item">
                      <div className="language-top">
                        <span className="language-name">English</span>
                        <span className="language-level">Advanced</span>
                      </div>
                      <div className="language-bar">
                        <span className="language-fill language-fill-80"></span>
                      </div>
                    </div>

                    <div className="language-item">
                      <div className="language-top">
                        <span className="language-name">LIBRAS</span>
                        <span className="language-level">Basic</span>
                      </div>
                      <div className="language-bar">
                        <span className="language-fill language-fill-35"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <p className="section-sub">// who i am beyond the code</p>
      </div>

      <div className="about-top">
        <div className="about-photo card">
          <img src="/images/About.jpg" alt="Matheus Cardoso" />
        </div>

        <div className="about-main card">
          <h3>Computer Engineering Student</h3>

          <p className="about-main-text">
            I’m a Computer Engineering student passionate about technology, problem solving, and continuous growth. Through academic projects and extracurricular experiences, I’ve been developing not only my technical skills, but also teamwork, organization, and a practical mindset.
          </p>

          <p className="about-main-text">
          As part of this journey, I was a member of the HR team at Eco Mauá from August 2023 to March 2024, where I strengthened skills related to collaboration, responsibility, and working in a team-oriented environment.
          </p>

        </div>
      </div>

      <div className="about-bottom">
        <div className="card info-card">
          <h3>Education</h3>
          <p><strong>Computer Engineering</strong> — Instituto Mauá de Tecnologia</p>
          <p>2022 — 2027</p>
        </div>

        <div className="card info-card">
          <h3>Languages</h3>
          <p><strong>Portuguese</strong> — Native</p>
          <p><strong>English</strong> — Advanced</p>
        </div>

        <div className="card info-card">
          <h3>Areas of Interest</h3>
          <p>Software Development</p>
          <p>Cloud Computing</p>
          <p>Cybersecurity</p>
          <p>Data Engineering</p>
        </div>

        <div className="card info-card">
          <h3>Courses & Certifications</h3>
          <p>AWS Academy Graduate - AWS Academy Cloud Foundations</p>
          <p>Introduction to Cybersecurity - Cisco Networking Academy</p>
        </div>
      </div>
    </section>
  );
}
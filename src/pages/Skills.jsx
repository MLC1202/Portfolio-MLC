import React from 'react';
import './Skills.css';

const skills = [
    { name: 'Java', level: 'Advanced', levelClass: 'skill-fill-advanced' },
    { name: 'JavaScript', level: 'Advanced', levelClass: 'skill-fill-advanced' },
    { name: 'HTML/CSS', level: 'Intermediate', levelClass: 'skill-fill-intermediate' },
    { name: 'SQL', level: 'Advanced', levelClass: 'skill-fill-advanced' },
    { name: 'Excel', level: 'Advanced', levelClass: 'skill-fill-advanced' },
    { name: 'Git', level: 'Advanced', levelClass: 'skill-fill-advanced' },
    { name: 'React', level: 'Intermediate', levelClass: 'skill-fill-intermediate' },
    { name: 'Node.js', level: 'Intermediate', levelClass: 'skill-fill-intermediate' },
    { name: 'Python', level: 'Intermediate', levelClass: 'skill-fill-intermediate' },
];

export default function Skills() {
  return (
    <section className="skills">
      <div className="skills-background">
        <div className="skills-glow skills-glow-1"></div>
        <div className="skills-glow skills-glow-2"></div>
      </div>

      <div className="skills-container">
        <div className="skills-heading">
          <h2 className="skills-title">Skills</h2>
          <span className="skills-title-line"></span>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>

              <div className="skill-bar">
                <span className={`skill-fill ${skill.levelClass}`}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
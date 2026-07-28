import { useScrollReveal, useSkillBars } from "../hooks/usePageEffects";

export default function Projects() {
  useScrollReveal();
  useSkillBars();

  return (
    <div className="container">
      <div className="page-header" data-animate>
        <span className="eyebrow">What I've Built 💻</span>
        <h2>Projects and Skills</h2>
      </div>

      <div className="section-block">
        <h3 data-animate>Experience</h3>
        <div className="timeline">
          <div className="timeline-item" data-animate>
            <h3>Tartan Ambassador</h3>
            <span className="role-org">Carnegie Mellon University</span>
            <p>Represent CMU to prospective students and families, leading campus tours and sharing the student experience.</p>
          </div>
          <div className="timeline-item" data-animate>
            <h3>Regional Administrator</h3>
            <span className="role-org">BAPS Swaminarayan Sanstha</span>
            <p>Coordinate regional programs and communications across chapters, supporting community initiatives.</p>
          </div>
          <div className="timeline-item" data-animate>
            <h3>Intern</h3>
            <span className="role-org">SAHA Growth Partners</span>
            <p>Supported growth and strategy projects, gaining hands-on exposure to business analysis.</p>
          </div>
          <div className="timeline-item" data-animate>
            <h3>Teaching Assistant</h3>
            <span className="role-org">Kumon</span>
            <p>Guided students through math and reading coursework, tracking progress and building foundational skills.</p>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h3 data-animate>Skills</h3>
        <div className="skills-grid">
          <div className="card" data-animate>
            <h4>Soft Skills</h4>
            <div className="pill-group">
              <span className="pill">Interpersonal Communication</span>
              <span className="pill">Teamwork</span>
              <span className="pill">Public Speaking</span>
              <span className="pill">Time Management</span>
            </div>
          </div>
          <div className="card" data-animate>
            <h4>Hard Skills</h4>
            <div className="skill-bar">
              <div className="skill-bar-label"><span>Python</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-level="80"></div></div>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-label"><span>Java</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-level="70"></div></div>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-label"><span>HTML / CSS / JavaScript</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-level="85"></div></div>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-label"><span>Adobe XD / Photoshop</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-level="65"></div></div>
            </div>
            <div className="skill-bar">
              <div className="skill-bar-label"><span>Microsoft Excel</span></div>
              <div className="skill-bar-track"><div className="skill-bar-fill" data-level="75"></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block text-center" data-animate>
        <p>For more detailed descriptions about the information listed above, click to view my{" "}
          <a href="https://drive.google.com/file/d/1u-8fMLOeHXR_EKvcFt4X2SJMWfiNc8Pw/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
        </p>
      </div>
    </div>
  );
}

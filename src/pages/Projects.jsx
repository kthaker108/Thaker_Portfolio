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
        <h3 data-animate>Projects</h3>
        <div className="projects-grid">
          <div className="card project-card" data-animate>
            <div className="project-icon"><i className="fa-solid fa-code"></i></div>
            <div>
              <h4>Duquesne Incline Website (Course Project)</h4>
              <p>Designed and built a responsive website for the Duquesne Incline using wireframes, UX planning, and industry-standard front-end development workflows across multiple languages to create an intuitive interface for visitor information.</p>
              <div className="project-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Java</span>
              </div>
              <a href="https://github.com/kthaker108/DuquesneIncline" className="project-link">View Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <div className="card project-card" data-animate>
            <div className="project-icon"><i className="fa-solid fa-database"></i></div>
            <div>
              <h4>Advanced Battleship (Course Project)</h4>
              <p>Built an OOP-based Battleship game featuring ship placement, turn-based logic, input validation, and an AI opponent with strategic targeting and adaptive tactics, then extended gameplay with power-ups, multiple ship types, and customizable board sizes for a more engaging experience.</p>
              <div className="project-tags">
                <span className="tag">Python</span>
              </div>
              <a href="https://github.com/kthaker108/Advanced-Battleship/tree/main" className="project-link">View Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>

          <div className="card project-card" data-animate>
            <div className="project-icon"><i className="fa-solid fa-mobile-screen"></i></div>
            <div>
              <h4>American Sign Language Recognition and Learning Tool (Hackathon)</h4>
              <p>Built an ASL alphabet teaching tool that detects hand signs in real time and guides users through correctly forming each letter. Currently have functionalities for A–D, with potential for the full alphabet and other hand-based communication.</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">OpenCV</span>
                <span className="tag">Mediapipe</span>
              </div>
              <a href="https://github.com/anvitadn/pinkpankthers" className="project-link">View Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
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
              <span className="pill">Quick Learning</span>
              <span className="pill">Public Speaking</span>
              <span className="pill">Time Management</span>
              <span className="pill">Cross-Team Collaboration</span>
              <span className="pill">Strategic Thinking</span>
              <span className="pill">Organization</span>
              <span className="pill">Open-Mindedness</span>
            </div>
          </div>

          <div className="card" data-animate>
            <h4>Hard Skills</h4>
            <div className="pill-group">
              <span className="pill">Python</span>
              <span className="pill">C</span>
              <span className="pill">HTML/CSS</span>
              <span className="pill">Java</span>
              <span className="pill">React</span>
              <span className="pill">PostgreSQL</span>
              <span className="pill">Ruby on Rails</span>
              <span className="pill">AdobeXD</span>
              <span className="pill">Figma</span>
              <span className="pill">Powerpoint</span>
              <span className="pill">Miro</span>
              <span className="pill">Jira</span>
              <span className="pill">Confluence</span>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

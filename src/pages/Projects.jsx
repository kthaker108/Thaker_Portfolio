import { useScrollReveal } from "../hooks/usePageEffects";

const PROJECTS = [
  {
    title: "StudyShift Study Web App",
    type: "Hackathon",
    icon: "fa-book-open-reader",
    accent: "amber",
    text: "Built with a team at the 2026 Tapia Conference hackathon, StudyShift turns textbook passages and technical documents into accessible study material for learners with ADHD or dyslexia, including summaries, flowcharts, step-by-step animations, and a Focus mode with a Pomodoro timer. AI-generated content is verified against the original text so every point traces back to its source.",
    tags: ["React", "TypeScript", "Python", "LLMs"],
    link: "https://github.com/MahaZainab/GitGirls_Tapia2026",
  },
  {
    title: "Duquesne Incline Website",
    type: "Course Project",
    icon: "fa-mountain-city",
    accent: "sky",
    text: "Designed and built a responsive website for the Duquesne Incline using wireframes, UX planning, and industry-standard front-end development workflows across multiple languages to create an intuitive interface for visitor information.",
    tags: ["HTML", "CSS", "JavaScript", "Java"],
    link: "https://github.com/kthaker108/DuquesneIncline",
  },
  {
    title: "Advanced Battleship",
    type: "Course Project",
    icon: "fa-ship",
    accent: "teal",
    text: "Built an OOP-based Battleship game featuring ship placement, turn-based logic, input validation, and an AI opponent with strategic targeting and adaptive tactics, then extended gameplay with power-ups, multiple ship types, and customizable board sizes for a more engaging experience.",
    tags: ["Python"],
    link: "https://github.com/kthaker108/Advanced-Battleship/tree/main",
  },
  {
    title: "ASL Recognition & Learning Tool",
    type: "Hackathon",
    icon: "fa-hands-asl-interpreting",
    accent: "pink",
    text: "Built an ASL alphabet teaching tool that detects hand signs in real time and guides users through correctly forming each letter. Currently have functionalities for A–D, with potential for the full alphabet and other hand-based communication.",
    tags: ["Python", "OpenCV", "Mediapipe"],
    link: "https://github.com/anvitadn/pinkpankthers",
  },
];

const HARD_SKILLS = [
  { group: "Languages", icon: "fa-terminal", accent: "lavender", items: ["Python", "Java", "C", "HTML/CSS"] },
  { group: "Frameworks & Data", icon: "fa-layer-group", accent: "teal", items: ["React", "Ruby on Rails", "PostgreSQL"] },
  { group: "Design", icon: "fa-palette", accent: "pink", items: ["Figma", "AdobeXD", "Miro"] },
  { group: "Product & Collaboration", icon: "fa-list-check", accent: "amber", items: ["Jira", "Confluence", "PowerPoint"] },
];

const SOFT_SKILLS = [
  "Interpersonal Communication",
  "Quick Learning",
  "Public Speaking",
  "Time Management",
  "Cross-Team Collaboration",
  "Strategic Thinking",
  "Organization",
  "Open-Mindedness",
];

export default function Projects() {
  useScrollReveal();

  return (
    <div className="container">
      <div className="page-header" data-animate>
        <span className="eyebrow">What I've Built 💻</span>
        <h2>Projects and Skills</h2>
      </div>

      <section className="section-block">
        <div className="section-heading" data-animate>
          <span className="section-kicker">Selected work</span>
          <h3>Projects</h3>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.title} className={`project-card accent-${project.accent}`} data-animate>
              <div className="project-cover">
                <i className={`fa-solid ${project.icon}`}></i>
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-body">
                <h4>{project.title}</h4>
                <p>{project.text}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                  View on GitHub <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading" data-animate>
          <span className="section-kicker">Toolbox</span>
          <h3>Skills</h3>
        </div>
        <div className="skill-groups">
          {HARD_SKILLS.map((skill) => (
            <div key={skill.group} className={`skill-group accent-${skill.accent}`} data-animate>
              <div className="skill-group-head">
                <div className="item-icon"><i className={`fa-solid ${skill.icon}`}></i></div>
                <h4>{skill.group}</h4>
              </div>
              <div className="pill-group">
                {skill.items.map((item) => <span key={item} className="pill">{item}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills" data-animate>
          <h4><i className="fa-solid fa-heart"></i> Soft Skills</h4>
          <div className="pill-group">
            {SOFT_SKILLS.map((item) => <span key={item} className="pill pill-soft">{item}</span>)}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useScrollReveal } from "../hooks/usePageEffects";

// Each entry picks an accent from the palette in index.css so the list isn't one uniform color.
const PROFESSIONAL = [
  {
    role: "Product Development Engineer Intern",
    org: "Ford Motor Company",
    date: "May 2026 – July 2026",
    icon: "fa-car-side",
    accent: "sky",
    tags: ["AI Agents", "User Research", "Tech Strategy"],
    text: "Worked with the Global Tech Strategy Team to conduct initial research through an employee survey, draft actionable use cases to guide development, and build an AI Agent for an internal system that processes and tracks thousands of software portfolio requests for the larger company.",
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Carnegie Mellon Institute for Strategy and Technology",
    date: "Sept. 2025 – Dec. 2025",
    icon: "fa-database",
    accent: "teal",
    tags: ["Data Cleaning", "Research"],
    text: "Worked individually under Professor Justin Canfil to organize and segment data into predefined categories, while identifying duplicates and other inconsistencies to prevent downstream data errors.",
  },
  {
    role: "Software Product Analyst Intern",
    org: "Polysight",
    date: "May 2025 – Aug. 2025",
    icon: "fa-chart-line",
    accent: "pink",
    tags: ["Product Roadmap", "Figma", "Miro"],
    text: "Collaborated with the CEO, UX designer, and partner teams with tools like Figma and Miro to analyze competitors, write user stories, and translate client and customer insights into actionable product roadmap features.",
  },
  {
    role: "Generative AI Literacy Researcher",
    org: "Carnegie Mellon University",
    date: "May 2025 – July 2025",
    icon: "fa-book-open",
    accent: "amber",
    tags: ["Systematic Review", "AI Policy"],
    text: "Working under Professor Lan's guidance with a team of three others, I conducted a PRISMA-guided systematic literature review of 447 articles across three academic databases, developing Boolean search strategies and screening criteria. This work helped synthesize evidence on AI policy effectiveness in K-12 education and identify critical gaps in classroom AI literacy frameworks.",
  },
  {
    role: "Software Engineer Intern",
    org: "Infoscout",
    date: "March 2025 – June 2025",
    icon: "fa-code",
    accent: "lavender",
    tags: ["QA Testing", "Web Scraping", "AI"],
    text: "Tested an autonomous web scraping system across 10+ county websites, identifying navigation failures, compatibility issues, and edge cases in website structures. I also implemented fixes, including pop-up handling mechanisms and loop prevention protocols, to improve the accuracy and reliability of AI-powered document retrieval.",
  },
];

const INVOLVEMENT = [
  {
    role: "Resident Advisor",
    org: "Carnegie Mellon University",
    date: "Aug. 2025 – Present",
    icon: "fa-house-user",
    accent: "lavender",
    text: "Fostered a safe and inclusive community through peer mentorship, conflict resolution, and crisis response, while organizing 24+ events throughout the year to support residents' academic and personal growth.",
  },
  {
    role: "Campus Coordinator (President)",
    org: "BAPS Campus Fellowship",
    date: "Aug. 2025 – Present",
    icon: "fa-people-group",
    accent: "amber",
    text: "Promoted community and spirituality across the Pittsburgh university cluster, primarily at UPitt and CMU, by hosting social gatherings and cultural festivals that fostered a welcoming and uplifting environment.",
  },
  {
    role: "Researcher and Designer",
    org: "Design for America @ CMU",
    date: "Aug. 2025 – Present",
    icon: "fa-pen-ruler",
    accent: "pink",
    text: "Collaborated with a cross-functional team to research a nonprofit's current standing and challenges, then designed a rebrand strategy to address key organizational problems.",
  },
  {
    role: "Mentor and Ambassador",
    org: "Information Systems Sphere @ CMU",
    date: "Aug. 2025 – Present",
    icon: "fa-handshake-angle",
    accent: "teal",
    text: "Serve as a mentor in the IS Sphere, providing guidance and support to underclassmen, contribute to and attend broader program events, and represent the IS community to prospective students.",
  },
  {
    role: "Regional Administrator",
    org: "BAPS Swaminarayan Sanstha",
    date: "May 2024 – Present",
    icon: "fa-sitemap",
    accent: "sky",
    text: "Coordinate regional programs and communications across chapters, supporting community initiatives.",
  },
  {
    role: "Social Ambassador",
    org: "Ford Motor Company",
    date: "May 2026 – July 2026",
    icon: "fa-bullhorn",
    accent: "pink",
    text: "Created content and represented the intern community at networking events and engagement opportunities.",
  },
  {
    role: "Tartan Ambassador",
    org: "Carnegie Mellon University",
    date: "Jan. 2025 – Oct. 2025",
    icon: "fa-route",
    accent: "lavender",
    text: "Represent CMU to prospective students and families, leading campus tours and sharing the student experience.",
  },
];

export default function Experience() {
  useScrollReveal();

  return (
    <div className="container">
      <div className="page-header" data-animate>
        <span className="eyebrow">What I've Done 👩🏻‍💼</span>
        <h2>Experience & Involvement</h2>
      </div>

      <div className="education-card" data-animate>
        <div className="education-icon"><i className="fa-solid fa-graduation-cap"></i></div>
        <div className="education-body">
          <span className="section-kicker">Education</span>
          <h3>Carnegie Mellon University</h3>
          <p>Bachelor of Science in Information Systems, minor in Artificial Intelligence</p>
        </div>
        <div className="education-meta">
          <span className="meta-chip"><i className="fa-regular fa-calendar"></i> Expected Dec. 2027</span>
          <span className="meta-chip"><i className="fa-solid fa-location-dot"></i> Pittsburgh, PA</span>
        </div>
      </div>

      <div className="stat-strip" data-animate>
        <div className="stat"><strong>{PROFESSIONAL.length}</strong><span>Professional roles</span></div>
        <div className="stat"><strong>{INVOLVEMENT.length}</strong><span>Leadership & involvement</span></div>
        <div className="stat"><strong>447</strong><span>Articles reviewed in research</span></div>
      </div>

      <section className="section-block">
        <div className="section-heading" data-animate>
          <span className="section-kicker">Work</span>
          <h3>Relevant Professional Experience</h3>
        </div>
        <ol className="timeline">
          {PROFESSIONAL.map((item) => (
            <li key={item.role} className={`timeline-item accent-${item.accent}`} data-animate>
              <span className="timeline-date">{item.date}</span>
              <div className="timeline-card">
                <div className="timeline-card-head">
                  <div className="item-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                  <div>
                    <h4>{item.role}</h4>
                    <span className="role-org">{item.org}</span>
                  </div>
                </div>
                <p>{item.text}</p>
                <div className="project-tags">
                  {item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-block">
        <div className="section-heading" data-animate>
          <span className="section-kicker">Beyond the classroom</span>
          <h3>Extracurriculars & Other Commitments</h3>
        </div>
        <div className="involvement-grid">
          {INVOLVEMENT.map((item) => (
            <div key={item.role} className={`involvement-card accent-${item.accent}`} data-animate>
              <div className="involvement-head">
                <div className="item-icon"><i className={`fa-solid ${item.icon}`}></i></div>
                <span className="involvement-date">{item.date}</span>
              </div>
              <h4>{item.role}</h4>
              <span className="role-org">{item.org}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <div className="section-block text-center" data-animate>
        <div className="card resume-card">
          <i className="fa-solid fa-file-arrow-down"></i>
          <p>For more detailed descriptions about the information listed above, click to view my{" "}
            <a href="https://drive.google.com/file/d/1u-8fMLOeHXR_EKvcFt4X2SJMWfiNc8Pw/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
          </p>
        </div>
      </div> */}
    </div>
  );
}

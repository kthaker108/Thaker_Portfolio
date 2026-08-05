import { useScrollReveal, useSkillBars } from "../hooks/usePageEffects";

export default function Experience() {
  useScrollReveal();
  useSkillBars();

  return (
    <div className="container">
      <div className="page-header" data-animate>
        <span className="eyebrow">What I've Done 👩🏻‍💼</span>
        <h2>Experience & Involvement</h2>
      </div>

      <div className="section-block">
        <div className="card education-card" data-animate>
          <i className="fa-solid fa-graduation-cap"></i>
          <div>
            <h3>Education</h3>
            <p>Expected to graudate from Carnegie Mellon University in December of 2027 with a Bachelors of Science in Information Systems and a minor in AI</p>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h3 data-animate>Relevant Professional Experience</h3>
        <div className="timeline">
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Product Development Engineer Intern</h3>
              <span className="timeline-date">May 2026-July 2026</span>
            </div>
            <span className="role-org">Ford Motor Company</span>
            <p>Worked with the Global Tech Strategy Team to conduct initial research through an employee survey, draft actionable use cases to guide development, and build an AI Agent for an internal system that processes and tracks thousands of software portfolio requests for the larger company.</p>
          </div>
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Undergraduate Research Assistant</h3>
              <span className="timeline-date">Sept. 2025 - Dec. 2025</span>
            </div>
            <span className="role-org">Carnegie Mellon Institute for Strategy and Technology</span>
            <p>Worked individually under Professor Justin Canfil to organize and segment data into predefined categories, while identifying duplicates and other inconsistencies to prevent downstream data errors.</p>
          </div>
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Software Product Analyst Intern</h3>
              <span className="timeline-date">May 2025 - Aug. 2025</span>
            </div>
            <span className="role-org">Polysight</span>
            <p>Collaborated with the CEO, UX designer, and parter teams with tools like Figma and Miro to analyze competitors, write user stories, and translate client and customer insights into actionable product roadmap features.</p>
          </div>
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Generative AI Literacy Researcher </h3>
              <span className="timeline-date">May 2025 - July 2025</span>
            </div>
            <span className="role-org">Carnegie Mellon University</span>
            <p>Working under Professor Lan's guidance with a team of three others, I conducted a PRISMA-guided systematic literature review of 447 articles across three academic databases, developing Boolean search strategies and screening criteria. This work helped synthesize evidence on AI policy effectiveness in K-12 education and identify critical gaps in classroom AI literacy frameworks.</p>
          </div>
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Software Engineer Intern</h3>
              <span className="timeline-date">March 2025 - June 2025</span>
            </div>
            <span className="role-org">Infoscout</span>
            <p>Tested an autonomous web scraping system across 10+ county websites, identifying navigation failures, compatibility issues, and edge cases in website structures. I also implemented fixes, including pop-up handling mechanisms and loop prevention protocols, to improve the accuracy and reliability of AI-powered document retrieval.</p>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h3 data-animate>Extracurriculars and Other Commitments </h3>
        <div className="timeline">
        <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Resident Advisor</h3>
              <span className="timeline-date">Aug. 2025 - Present</span>
            </div>
            <span className="role-org">Carnegie Mellon University</span>
            <p> Fostered a safe and inclusive community through peer mentorship, conflict resolution, and crisis response, while organizing 24+ events throughout the year to support residents' academic and personal growth.</p>
          </div>
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Campus Coordinator (President)</h3>
              <span className="timeline-date">Aug. 2025 - Present</span>
            </div>
            <span className="role-org">BAPS Campus Fellowship</span>
            <p>Promoted community and spirituality across the Pittsburgh university cluster, primarily at UPitt and CMU, by hosting social gatherings and cultural festivals that fostered a welcoming and uplifting environment.</p>
          </div>
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Researcher and Designer</h3>
              <span className="timeline-date">Aug. 2025 - Present</span>
            </div>
            <span className="role-org">Design for America @ CMU</span>
            <p>Collaborated with a cross-functional team to research a nonprofit's current standing and challenges, then designed a rebrand strategy to address key organizational problems.</p>
          </div>
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Mentor and Ambassador</h3>
              <span className="timeline-date">Aug. 2025 - Present</span>
            </div>
            <span className="role-org">Information Systems Sphere @ CMU</span>
            <p>Serve as a mentor in the IS Sphere, providing guidance and support to underclassmen, contribute to and attend broader program events, and represent the IS community to prospective students.</p>
          </div>
          
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Regional Administrator</h3>
              <span className="timeline-date">May 2024 - Present</span>
            </div>
            <span className="role-org">BAPS Swaminarayan Sanstha</span>
            <p>Coordinate regional programs and communications across chapters, supporting community initiatives.</p>
          </div>
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Social Ambassador</h3>
              <span className="timeline-date">May 2026 - July 2026</span>
            </div>
            <span className="role-org">Ford Motor Company</span>
            <p> Created content and represented the intern community at networking events and engagement opportunities.</p>
          </div>
         
          <div className="timeline-item" data-animate>
            <div className="timeline-item-header">
              <h3>Tartan Ambassador</h3>
              <span className="timeline-date">Jan. 2025 - Oct. 2025</span>
            </div>
            <span className="role-org">Carnegie Mellon University</span>
            <p>Represent CMU to prospective students and families, leading campus tours and sharing the student experience.</p>
          </div>
          </div>
      </div>


      <div className="section-block text-center" data-animate>
        <div className="card resume-card">
          <i className="fa-solid fa-file-arrow-down"></i>
          <p>For more detailed descriptions about the information listed above, click to view my{" "}
            <a href="https://drive.google.com/file/d/1u-8fMLOeHXR_EKvcFt4X2SJMWfiNc8Pw/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
          </p>
        </div>
      </div>
    </div>
  );
}

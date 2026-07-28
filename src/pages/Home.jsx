import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import headshot from "../assets/photos/headshot.jpeg";
import { useScrollReveal } from "../hooks/usePageEffects";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning, I am Khushi!";
  if (hour < 18) return "Good Afternoon, I am Khushi!";
  return "Good Evening, I am Khushi!";
}

const NEXT_STEPS = [
  {
    to: "/experience",
    icon: "fa-briefcase",
    eyebrow: "Outwit",
    title: "Experience",
    description: "Where I've worked, and the strategy behind the roles I've taken on.",
  },
  {
    to: "/projects",
    icon: "fa-layer-group",
    eyebrow: "Outplay",
    title: "Projects",
    description: "Things I've built, broken, and rebuilt better.",
  },
  {
    to: "/fun",
    icon: "fa-fire",
    eyebrow: "Outlast",
    title: "Hobbies",
    description: "What keeps me going when I'm off the clock.",
  },
];

export default function Home() {
  useScrollReveal();
  const [greeting] = useState(getGreeting);
  const nextSectionRef = useRef(null);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div data-animate>
            <span className="eyebrow">Glad You're Here ◡̈ </span>
            <h2 id="greetingID">{greeting}</h2>
            <p className="hero-tagline">Third-Year Information Systems and AI Student @ Carnegie Mellon University</p>
            <p id="shortIntro">
              I am a third-year IS student at CMU, with a minor in AI. Originally from Philadelphia, PA, I'm currently based in Pittsburgh for school and loving it!
              I am heavily involved in external initiatives through many activities and organizations, along with my on-campus responsibilities and commitments.
              <br /><br />
              Explore pieces of my life, including my professional experience, projects, skills, personal interests, and ways to get in touch with me through this site!
            </p>
          </div>

          <div className="hero-photo-wrap" data-animate>
            <img src={headshot} alt="Picture of Khushi Thaker" className="hero-photo" />
          </div>
        </div>

        <button
          type="button"
          className="scroll-cue"
          onClick={() => nextSectionRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          <span>Scroll to explore</span>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </section>

      <section className="next-section" ref={nextSectionRef}>
        <div className="container">
          <div className="next-header" data-animate>
            <span className="eyebrow">Where To Next</span>
            <h2>Outwit. Outplay. Outlast.</h2>
            <p>Three ways to get to know me a little better — pick a direction, or read through all three.</p>
          </div>

          <div className="next-grid">
            {NEXT_STEPS.map((step) => (
              <Link to={step.to} className="next-card" key={step.to} data-animate>
                <span className="next-card-icon"><i className={`fa-solid ${step.icon}`}></i></span>
                <span className="next-card-eyebrow">{step.eyebrow}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

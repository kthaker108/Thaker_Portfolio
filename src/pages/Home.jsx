import { useEffect, useRef, useState } from "react";
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
    icon: "fa-brain",
    eyebrow: "Outwit",
    title: "Experience",
    description: "Where I've worked, and the strategy behind the roles I've taken on.",
  },
  {
    to: "/projects",
    icon: "fa-puzzle-piece",
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

const HERO_RECEDE_END = 0.35; // scroll progress where the hero has fully receded
const CONTENT_START = 0.4; // scroll progress where the next-section starts punching in
const HEADER_RAMP = 0.35;
const CARD_STAGGER = 0.1;
const CARD_RAMP = 0.3;

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function mapRange(value, inMin, inMax) {
  return clamp01((value - inMin) / (inMax - inMin));
}

export default function Home() {
  useScrollReveal();
  const [greeting] = useState(getGreeting);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const nextSection = nextSectionRef.current;
    const heroInner = document.querySelector(".hero-inner");
    if (!nextSection || !heroInner) return;

    const header = nextSection.querySelector(".next-header");
    const cards = nextSection.querySelectorAll(".next-card");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      heroInner.style.opacity = "1";
      heroInner.style.transform = "none";
      header.style.opacity = "1";
      header.style.transform = "none";
      header.style.filter = "none";
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "none";
        card.style.filter = "none";
      });
      return;
    }

    let targetScroll = 1;
    let ticking = false;

    function measure() {
      const headerEl = document.querySelector(".site-header");
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 0;
      const sectionTop = nextSection.getBoundingClientRect().top + window.scrollY;
      const idealTarget = sectionTop - headerHeight;
      const maxScrollable = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = Math.max(1, Math.min(idealTarget, maxScrollable));
    }

    function update() {
      ticking = false;
      const progress = clamp01(window.scrollY / targetScroll);

      const heroPresence = 1 - mapRange(progress, 0, HERO_RECEDE_END);
      heroInner.style.opacity = String(0.05 + heroPresence * 0.95);
      heroInner.style.transform = `translateY(${(1 - heroPresence) * -70}px) scale(${0.85 + heroPresence * 0.15})`;
      heroInner.style.filter = `blur(${(1 - heroPresence) * 6}px)`;

      const headerProgress = mapRange(progress, CONTENT_START, CONTENT_START + HEADER_RAMP);
      header.style.opacity = String(headerProgress);
      header.style.transform = `translateY(${(1 - headerProgress) * 70}px) scale(${0.85 + headerProgress * 0.15})`;
      header.style.filter = `blur(${(1 - headerProgress) * 12}px)`;

      cards.forEach((card, index) => {
        const start = CONTENT_START + 0.05 + index * CARD_STAGGER;
        const cardProgress = mapRange(progress, start, start + CARD_RAMP);
        card.style.opacity = String(cardProgress);
        card.style.transform = `translateY(${(1 - cardProgress) * 60}px) scale(${0.8 + cardProgress * 0.2})`;
        card.style.filter = `blur(${(1 - cardProgress) * 10}px)`;
      });
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    function onResize() {
      measure();
      update();
    }

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

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
          <div className="next-header">
            <span className="eyebrow">Where To Next</span>
            <h2>Outwit. Outplay. Outlast.</h2>
            <p>Three ways to get to know me a little better.</p>
            <p className="next-header-note">If you know, you know. If you don't — welcome, and also, watch Survivor.</p>
          </div>

          <div className="next-grid">
            {NEXT_STEPS.map((step) => (
              <Link to={step.to} className="next-card" key={step.to}>
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

import { useState } from "react";
import { useScrollReveal } from "../hooks/usePageEffects";

const CONTACT_EMAIL = "kthaker@andrew.cmu.edu";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MY_ADVICE = [
  "Do the best, leave the rest.",
  "Be confident in yourself.",
  "Be proud of how far you have come.",
  "Trust in time.",
  "Don't be afraid to ask for help.",
  "It's okay to make mistakes and fail sometimes.",
  "Put yourself out there and take risks, you won't regret it.",
  "Grow, be independent, and learn.",
  "Be kind to yourself and others.",
  "Never be intimidated in a room full of intelligent people, you are one of them.",
  "It's okay to not know what comes next.",
  "Being uncomfortable means you are growing.",
  "Go with the flow and focus on what is in, not out, of your control.",
  "Travel and explore the world around you, it will help you appreciate different perspectives.",
  "Show up for yourself everyday.",
  "Celebrate every accomplishment, no matter how small.",
  "You'll never know what could have been if you don't try.",
  "Connect with new people, you never know who can become a friend or mentor.",
  "Take time to reflect and be grateful for the good things in your life.",
  "When you feel like giving up, remember why you started.",
  "Think of the people who have supported you and how far you've come.",
  "Count your blessings everyday.",
  "Find something personal that deeply resonates with and drives you.",
  "Be patient and trust the process.",
  "Take on daunting responsibilities, you will find a way to figure it out.",
  "Take a chance on yourself, you are capable of more than you think.",
  "Don't be afraid to speak up and share your ideas, they are valuable.",
];

export default function Contact() {
  useScrollReveal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", comment: "" });
  const [status, setStatus] = useState({ message: "", success: false });
  const [adviceIndex, setAdviceIndex] = useState(null);
  const [copied, setCopied] = useState(false);

  function handleGetAdvice() {
    // Pick a different piece of advice than the one currently showing
    let pick = Math.floor(Math.random() * MY_ADVICE.length);
    if (pick === adviceIndex) pick = (pick + 1) % MY_ADVICE.length;
    setAdviceIndex(pick);
  }

  function handleCopyEmail() {
    navigator.clipboard?.writeText(CONTACT_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nameError = name.trim() ? "" : "Please enter your name.";
    const emailError = EMAIL_PATTERN.test(email.trim()) ? "" : "Please enter a valid email.";
    const commentError = comment.trim() ? "" : "Please enter a message.";

    setErrors({ name: nameError, email: emailError, comment: commentError });

    if (nameError || emailError || commentError) {
      setStatus({ message: "Please fix the highlighted fields.", success: false });
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${comment.trim()}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus({ message: "Opening your email app to send this to Khushi...", success: true });
    setName("");
    setEmail("");
    setComment("");
  }

  return (
    <div className="container">
      <div className="page-header" data-animate>
        <span className="eyebrow">Let's Connect 🔗 </span>
        <h2>Contact Me</h2>
        <p className="page-subtitle">Whether it's an opportunity, a project, or just a hello, I'd love to hear from you.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-side">
          <div className="contact-links" data-animate>
            <div className="contact-tile accent-lavender">
              <a className="contact-tile-main" href={`mailto:${CONTACT_EMAIL}`}>
                <div className="item-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <span className="contact-tile-label">Email</span>
                  <span className="contact-tile-value">{CONTACT_EMAIL}</span>
                </div>
              </a>
              <button type="button" className="copy-btn" onClick={handleCopyEmail} aria-label="Copy email address">
                <i className={copied ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <div className="contact-tile accent-sky">
              <a className="contact-tile-main" href="https://www.linkedin.com/in/khushi-thaker108" target="_blank" rel="noreferrer">
                <div className="item-icon"><i className="fa-brands fa-linkedin-in"></i></div>
                <div>
                  <span className="contact-tile-label">LinkedIn</span>
                  <span className="contact-tile-value">in/khushi-thaker108</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square contact-tile-arrow"></i>
              </a>
            </div>

            <div className="contact-tile accent-teal">
              <div className="contact-tile-main">
                <div className="item-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <span className="contact-tile-label">Based in</span>
                  <span className="contact-tile-value">Pittsburgh, PA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="advice-card" data-animate>
            <i className="fa-solid fa-quote-left advice-quote"></i>
            <span className="section-kicker">Need some advice?</span>
            <p id="adviceText" key={adviceIndex}>
              {adviceIndex === null
                ? "Read a piece of advice I've learned and received throughout my personal life."
                : MY_ADVICE[adviceIndex]}
            </p>
            <button id="adviceButton" type="button" className="btn btn-primary" onClick={handleGetAdvice}>
              <i className="fa-solid fa-shuffle"></i> {adviceIndex === null ? "Get Advice" : "Another One"}
            </button>
          </div>
        </div>

        <div className="form-card" data-animate>
          <span className="section-kicker">Drop a note</span>
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={errors.name ? "invalid" : ""}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <span className="field-error">{errors.name}</span>
              </div>

              <div className="field">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={errors.email ? "invalid" : ""}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <span className="field-error">{errors.email}</span>
              </div>
            </div>

            <div className="field">
              <label htmlFor="comment">Your Message</label>
              <textarea
                id="comment"
                name="comment"
                rows="6"
                required
                className={errors.comment ? "invalid" : ""}
                value={comment}
                onChange={(event) => setComment(event.target.value)}
              />
              <span className="field-error">{errors.comment}</span>
            </div>

            <button type="submit" className="btn btn-primary">
              Send via Email <i className="fa-solid fa-paper-plane"></i>
            </button>
            <p id="errorMessage" className={status.success ? "success" : ""}>{status.message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

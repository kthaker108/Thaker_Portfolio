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
  "Never be intimitated in a room full of intelligent people, you are one of them.",
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
  const [advice, setAdvice] = useState(
    "Read a piece of advice I've learned and received throughout my personal life."
  );

  function handleGetAdvice() {
    const pick = MY_ADVICE[Math.floor(Math.random() * MY_ADVICE.length)];
    setAdvice(pick);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nameError = name.trim() ? "" : "Please enter your name.";
    const emailError = EMAIL_PATTERN.test(email.trim()) ? "" : "Please enter a valid email.";
    const commentError = comment.trim() ? "" : "Please enter a comment.";

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
      </div>

      <div className="contact-grid">
        <div className="card" data-animate>
          <h3>Reach Me</h3>
          <div className="contact-methods">
            <div className="contact-method">
              <i className="fa-solid fa-envelope"></i>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
            <div className="contact-method">
              <i className="fa-brands fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/khushi-thaker108" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <br />
          <div className="card text-center advice-card" data-animate>
            <h3>Need Some Advice?</h3>
            <p id="adviceText">{advice}</p>
            <button id="adviceButton" type="button" className="btn btn-primary" onClick={handleGetAdvice}>Get Advice</button>
          </div>
        </div>

        <div className="card" data-animate>
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit} noValidate>
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

            <div className="field">
              <label htmlFor="comment">Your Comment</label>
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

            <button type="submit" className="btn btn-primary">Send via Email</button>
            <p id="errorMessage" className={status.success ? "success" : ""}>{status.message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}


// Theme (light/dark) — toggle + persistence

function getPreferredTheme() {
  var stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function initThemeToggle() {
  var toggle = document.getElementById("themeToggle");
  if (!toggle) return;
  toggle.addEventListener("click", function () {
    var current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}


// Nav: mobile hamburger + active link highlighting

function toggleMenu() {
  var links = document.querySelector(".nav-links");
  if (links) links.classList.toggle("active");
}

function initHamburgerMenu() {
  var hamburger = document.querySelector(".hamburger-menu");
  if (hamburger) hamburger.addEventListener("click", toggleMenu);
}

function highlightActiveLink() {
  var currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") currentPage = "index.html";

  var links = document.querySelectorAll("nav a.webLinks");
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && href.endsWith(currentPage)) {
      link.classList.add("active");
    }
  });
}


// Home page: time-based greeting + footer year

function greetingFunc() {
  var greetingEl = document.getElementById("greetingID");
  if (!greetingEl) return;

  var hour = new Date().getHours();
  var greeting;

  if (hour < 12) {
    greeting = "Good Morning, I am Khushi!";
  } else if (hour < 18) {
    greeting = "Good Afternoon, I am Khushi!";
  } else {
    greeting = "Good Evening, I am Khushi!";
  }

  greetingEl.textContent = greeting;
}

function addYear() {
  var el = document.getElementById("copyYear");
  if (el) el.append(String(new Date().getFullYear()));
}

// Read more / read less toggle 
function initReadMore() {
  var longIntro = document.getElementById("longIntro");
  var readMoreBtn = document.getElementById("readMoreID");
  var readLessBtn = document.getElementById("readLessID");

  if (!longIntro || !readMoreBtn || !readLessBtn) return;

  longIntro.classList.add("hidden");
  readLessBtn.classList.add("hidden");

  readMoreBtn.addEventListener("click", function () {
    longIntro.classList.remove("hidden");
    readMoreBtn.classList.add("hidden");
    readLessBtn.classList.remove("hidden");
  });

  readLessBtn.addEventListener("click", function () {
    longIntro.classList.add("hidden");
    readMoreBtn.classList.remove("hidden");
    readLessBtn.classList.add("hidden");
  });
}


// Contact form validation

function showFieldError(input, errorEl, message) {
  if (message) {
    input.classList.add("invalid");
    errorEl.textContent = message;
    return false;
  }
  input.classList.remove("invalid");
  errorEl.textContent = "";
  return true;
}

var CONTACT_EMAIL = "kthaker@andrew.cmu.edu";

function initContactForm() {
  var form = document.getElementById("formID");
  if (!form) return;

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var comment = document.getElementById("comment");
  var statusEl = document.getElementById("errorMessage");

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    statusEl.classList.remove("success");

    var nameOk = showFieldError(name, document.getElementById("nameError"),
      name.value.trim() ? "" : "Please enter your name.");
    var emailOk = showFieldError(email, document.getElementById("emailError"),
      emailPattern.test(email.value.trim()) ? "" : "Please enter a valid email.");
    var commentOk = showFieldError(comment, document.getElementById("commentError"),
      comment.value.trim() ? "" : "Please enter a comment.");

    if (!nameOk || !emailOk || !commentOk) {
      statusEl.textContent = "Please fix the highlighted fields.";
      return;
    }

    var subject = encodeURIComponent("Portfolio contact from " + name.value.trim());
    var body = encodeURIComponent(
      "Name: " + name.value.trim() + "\n" +
      "Email: " + email.value.trim() + "\n\n" +
      comment.value.trim()
    );

    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;

    statusEl.textContent = "Opening your email app to send this to Khushi...";
    statusEl.classList.add("success");
    form.reset();
  });
}


// Advice (fun page) — Khushi's own advice, picked at random

var MY_ADVICE = [
  "Do the best, leave the rest.",
  "Be confident in yourself.",
  "Be proud of how far you have come.",
  "Trust in time.",
  "Don't be afraid to ask for help.",
  "It's okay to make mistakes and fail sometimes.",
  "Put yourself out there and take risks, you won't regret it.",
  "Grow, be independent, and learn",
  "Be kind to yourself and others.",
  "Never be intimitated in a room full of intelligent people, you are one of them.",
  "It's okay to not know",
  "Being uncomfortable means you are growing.",
  "Go with the flow and focus on what is in, not out, of your control.",
  "Travel and explore the world around you, it will help you appreciate different perspectives.",
  "Let go, and let god.",
  "Show up for yourself everyday."
];

function getAdvice() {
  var adviceEl = document.getElementById("adviceText");
  if (!adviceEl) return;

  var pick = MY_ADVICE[Math.floor(Math.random() * MY_ADVICE.length)];
  adviceEl.textContent = pick;
}

function initAdviceButton() {
  var button = document.getElementById("adviceButton");
  if (button) button.addEventListener("click", getAdvice);
}


// Scroll-reveal animation

function initScrollReveal() {
  var targets = document.querySelectorAll("[data-animate]");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in-view"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (el) { observer.observe(el); });
}


// Skill bar fill animation

function initSkillBars() {
  var bars = document.querySelectorAll(".skill-bar-fill");
  if (!bars.length) return;

  if (!("IntersectionObserver" in window)) {
    bars.forEach(function (bar) { bar.style.width = bar.dataset.level + "%"; });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.level + "%";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(function (bar) { observer.observe(bar); });
}

// Ambient background: mouse-reactive parallax on the floating blobs

function initAmbientBackground() {
  var wraps = document.querySelectorAll(".blob-wrap");
  if (!wraps.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  window.addEventListener("mousemove", function (event) {
    var x = event.clientX / window.innerWidth - 0.5;
    var y = event.clientY / window.innerHeight - 0.5;

    wraps.forEach(function (wrap, index) {
      var strength = (index + 1) * 14;
      wrap.style.transform = "translate(" + (x * strength) + "px, " + (y * strength) + "px)";
    });
  }, { passive: true });
}

// Init


setTheme(getPreferredTheme());

document.addEventListener("DOMContentLoaded", function () {
  initThemeToggle();
  initHamburgerMenu();
  highlightActiveLink();
  addYear();
  initReadMore();
  initContactForm();
  initAdviceButton();
  initScrollReveal();
  initSkillBars();
  initAmbientBackground();

  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/" ||
      window.location.pathname.split("/").pop() === "") {
    greetingFunc();
  }
});

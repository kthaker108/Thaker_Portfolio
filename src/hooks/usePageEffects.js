import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-animate]");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function useSkillBars() {
  useEffect(() => {
    const bars = document.querySelectorAll(".skill-bar-fill");
    if (!bars.length) return;

    if (!("IntersectionObserver" in window)) {
      bars.forEach((bar) => {
        bar.style.width = bar.dataset.level + "%";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.level + "%";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);
}

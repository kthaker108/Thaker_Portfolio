import { useEffect } from "react";

export function useAmbientBackground() {
  useEffect(() => {
    const wraps = document.querySelectorAll(".blob-wrap");
    if (!wraps.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function handleMouseMove(event) {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      wraps.forEach((wrap, index) => {
        const strength = (index + 1) * 32;
        wrap.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
}

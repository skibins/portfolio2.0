import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    // Small delay to ensure DOM is ready, then observe
    requestAnimationFrame(() => {
      const elements = document.querySelectorAll(".fade-up");
      elements.forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
  }, []);
}

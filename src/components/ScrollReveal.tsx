"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe whatever `.reveal` elements exist right now (initial mount).
    const observeAll = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.visible)").forEach((el) => observer.observe(el));
    };
    observeAll();

    // Content driven by src/config.ts (e.g. Projects re-rendering after a
    // language switch) can mount brand-new `.reveal` nodes after this effect
    // has already run once. Without watching for that, those nodes never get
    // observed and stay permanently hidden. A MutationObserver keeps every
    // future `.reveal` element covered, not just the ones present at mount.
    const mutationObserver = new MutationObserver(() => observeAll());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

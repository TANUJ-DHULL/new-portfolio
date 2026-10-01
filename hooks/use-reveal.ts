"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll for every `[data-reveal]` element on the page.
 * Elements added later (filters, dialogs) are picked up by a MutationObserver.
 * Motion is skipped entirely when the user prefers reduced motion or when the
 * motion toggle has been switched off.
 */
export function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const seen = new WeakSet<Element>();
    let frame = 0;

    const enabled = () =>
      !reduced.matches && document.documentElement.dataset.motion !== "off";

    const reveal = (element: Element) => {
      const el = element as HTMLElement;
      if (seen.has(el)) return;
      seen.add(el);
      if (!enabled()) {
        el.classList.add("is-in");
        return;
      }
      observer.observe(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.05 }
    );

    const scan = () => document.querySelectorAll("[data-reveal]").forEach(reveal);

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!enabled()) {
          document
            .querySelectorAll("[data-reveal]")
            .forEach((el) => el.classList.add("is-in"));
          return;
        }
        scan();
      });
    };

    schedule();

    const mutations = new MutationObserver(schedule);
    mutations.observe(document.body, { childList: true, subtree: true });
    reduced.addEventListener("change", schedule);
    window.addEventListener("motionchange", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
      reduced.removeEventListener("change", schedule);
      window.removeEventListener("motionchange", schedule);
    };
  }, []);
}

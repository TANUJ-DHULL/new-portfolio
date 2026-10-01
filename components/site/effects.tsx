"use client";

import { useEffect, useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useScrollState } from "@/hooks/use-scroll-state";

/** Activates the reveal-on-scroll system for the whole page. */
export function RevealProvider() {
  useReveal();
  return null;
}

/**
 * Ambient page effects: film grain, a cursor-following glow and the reading
 * progress bar. Everything here is decorative and pointer-events free.
 */
export function GlobalEffects() {
  const glow = useRef<HTMLDivElement>(null);
  const { progress } = useScrollState();

  useEffect(() => {
    const node = glow.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let currentX = x;
    let currentY = y;
    let frame = 0;

    const loop = () => {
      currentX += (x - currentX) * 0.12;
      currentY += (y - currentY) * 0.12;
      node.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      node.dataset.on = "true";
    };
    const onLeave = () => {
      node.dataset.on = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        className="progress-bar"
        style={{ ["--progress" as string]: progress }}
        aria-hidden="true"
      />
      <div className="cursor-glow" ref={glow} data-on="false" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  );
}

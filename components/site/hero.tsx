"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Stamp } from "@/components/site/header";

const stats = [
  { value: "04", label: "Projects in motion" },
  { value: "02", label: "Institutions" },
  { value: "05", label: "Cloud labs & badges" },
];

export function Hero() {
  const media = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = media.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 30;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      node.style.setProperty("--mx", `${x.toFixed(1)}px`);
      node.style.setProperty("--my", `${y.toFixed(1)}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-media" ref={media} aria-hidden="true">
        <Image
          src="/images/chrome-study.webp"
          alt=""
          width={1536}
          height={1024}
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 760px) 120vw, 74vw"
        />
      </div>

      <div className="shell hero-grid">
        <div className="hero-eyebrow">
          <span>AI / Data / Software</span>
          <span className="status-pill">
            <i className="status-dot" aria-hidden="true" />
            Open to internships &amp; collaborations
          </span>
        </div>

        <h1 className="hero-name" aria-label="Tanuj Dhull">
          <span>TANUJ</span>
          <span>
            DHULL
            <i className="stop" aria-hidden="true">
              .
            </i>
          </span>
        </h1>

        <div className="hero-lower">
          <div className="hero-intro">
            <p>
              I study data. I build software.{" "}
              <span>I&rsquo;m figuring out what&rsquo;s next — in public.</span>
            </p>
            <div className="hero-cta">
              <a className="btn btn-lime" href="#work">
                Step inside my work
                <ArrowUpRight size={16} />
              </a>
              <a className="btn btn-outline" href="#contact">
                Start a conversation
              </a>
            </div>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-foot">
          <span className="scroll-cue">
            <span className="rail" aria-hidden="true" />
            Scroll to explore
            <ArrowDown size={14} />
          </span>
          <Stamp label="Tanuj Dhull · Portfolio 2026 ·" />
          <span className="hero-school">
            <Sparkles size={12} style={{ display: "inline", verticalAlign: "-2px", marginRight: 8 }} />
            BS Data Science @ IIT Madras
          </span>
        </div>
      </div>
    </section>
  );
}

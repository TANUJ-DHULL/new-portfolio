"use client";

import { useEffect, useState } from "react";

import { ArrowUpRight, Mail, Pause, Play } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/site/brand-icons";
import { useActiveSection } from "@/hooks/use-scroll-state";

const nav = [
  { label: "Work", id: "work", index: "01" },
  { label: "About", id: "about", index: "02" },
  { label: "Education", id: "education", index: "03" },
  { label: "Learning", id: "learning", index: "04" },
  { label: "Toolkit", id: "toolkit", index: "05" },
];

const navIds = nav.map((item) => item.id);

export function Header() {
  const active = useActiveSection(navIds);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = motion ? "on" : "off";
    window.dispatchEvent(new Event("motionchange"));
  }, [motion]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="header" data-scrolled={scrolled}>
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Tanuj Dhull — back to top">
            td<sup>+</sup>
          </a>
          <span className="header-tag">
            Independent mind
            <br />
            Jind, India
          </span>

          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.id}
                className="nav-link"
                href={`#${item.id}`}
                data-active={active === item.id}
              >
                {item.label}
                <i>{item.index}</i>
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={() => setMotion((value) => !value)}
              aria-pressed={!motion}
              aria-label={motion ? "Pause background motion" : "Play background motion"}
              title={motion ? "Pause motion" : "Play motion"}
            >
              {motion ? <Pause size={15} /> : <Play size={15} />}
            </button>
            <a className="btn btn-lime" href="#contact">
              Let&rsquo;s talk
              <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              className="icon-btn menu-btn"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                style={{
                  display: "grid",
                  gap: 5,
                  width: 18,
                }}
              >
                <i
                  style={{
                    display: "block",
                    height: 1.5,
                    background: "currentColor",
                    transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
                    transition: "transform .35s cubic-bezier(.2,.7,.2,1)",
                  }}
                />
                <i
                  style={{
                    display: "block",
                    height: 1.5,
                    background: "currentColor",
                    opacity: open ? 0 : 1,
                    transition: "opacity .2s",
                  }}
                />
                <i
                  style={{
                    display: "block",
                    height: 1.5,
                    background: "currentColor",
                    transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
                    transition: "transform .35s cubic-bezier(.2,.7,.2,1)",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="nav-panel" data-open={open} inert={!open}>
        {nav.map((item, index) => (
          <a
            key={item.id}
            className="nav-panel-link"
            href={`#${item.id}`}
            style={{ ["--i" as string]: index }}
            onClick={() => setOpen(false)}
          >
            {item.label}
            <i>{item.index}</i>
          </a>
        ))}
        <div className="nav-panel-foot">
          <a href="#contact" onClick={() => setOpen(false)}>
            Let&rsquo;s talk
          </a>
          <a href="mailto:tanujdhull5@gmail.com">
            <Mail size={13} /> tanujdhull5@gmail.com
          </a>
          <a
            href="https://github.com/TANUJ-DHULL"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={13} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tanuj-dhull-554322216/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon size={13} /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}

/** Rotating "available" badge used in the hero. */
export function Stamp({ label }: { label: string }) {
  return (
    <div className="stamp" aria-hidden="true">
      <svg viewBox="0 0 132 132">
        <defs>
          <path
            id="stamp-path"
            d="M66,66 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
          />
        </defs>
        <text>
          <textPath href="#stamp-path">{label}</textPath>
        </text>
      </svg>
      <span className="stamp-center">✳</span>
    </div>
  );
}



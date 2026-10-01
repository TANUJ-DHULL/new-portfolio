"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/site/brand-icons";
import { Eyebrow } from "@/components/site/section";

const EMAIL = "tanujdhull5@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const [auto, setAuto] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const flash = () => {
    setCopied(true);
    setError(false);
    setAuto(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setAuto(false), 3200);
  };

  /** Clipboard API with a legacy fallback for insecure contexts. */
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      flash();
      return;
    } catch {
      /* fall through to the textarea technique */
    }

    try {
      const field = document.createElement("textarea");
      field.value = EMAIL;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(field);
      if (ok) {
        flash();
        return;
      }
    } catch {
      /* nothing else to try */
    }

    setCopied(false);
    setError(true);
  };

  const done = copied && auto;

  return (
    <section className="contact" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="shell">
        <Eyebrow
          n="06"
          title="Next conversation"
          note="Shared ambition / real problems / building together"
        />

        <h2 className="contact-headline" data-reveal="">
          SAME MINDSET?
          <br />
          <em>LET&rsquo;S CONNECT.</em>
        </h2>

        <div className="contact-body">
          <p data-reveal="">
            Curious, ambitious, and ready to build? Let&rsquo;s exchange ideas, tackle a real
            problem, or explore what we could create together. I reply to every honest
            message.
          </p>

          <div className="contact-actions" data-reveal="" style={{ ["--delay" as string]: "120ms" }}>
            <div className="email-row">
              <Mail size={18} style={{ color: "var(--lime)" }} />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <button
                type="button"
                className="copy-btn"
                onClick={copy}
                data-done={done}
                aria-label={done ? "Email address copied" : "Copy email address"}
              >
                {done ? <Check size={14} /> : <Copy size={14} />}
                {done ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="copy-feedback" role="status" aria-live="polite">
              {done
                ? "Email copied to clipboard"
                : error
                  ? "Copy blocked — select the address instead"
                  : ""}
            </div>

            <div className="social-row">
              <a
                className="social"
                href="https://www.linkedin.com/in/tanuj-dhull-554322216/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-mark" aria-hidden="true">
                  in
                </span>
                Connect on LinkedIn
                <ArrowUpRight size={15} />
              </a>
              <a
                className="social"
                href="https://github.com/TANUJ-DHULL"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={18} style={{ color: "var(--lime)" }} />
                See my code
                <ArrowUpRight size={15} />
              </a>
            </div>

            <a className="btn btn-lime btn-cta" href={`mailto:${EMAIL}`}>
              <Send size={16} />
              Send me a message
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <a className="brand" href="#top" aria-label="Back to top">
            td<sup>+</sup>
          </a>
          <div className="footer-links">
            <a href="https://github.com/TANUJ-DHULL" target="_blank" rel="noreferrer">
              <GithubIcon size={13} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tanuj-dhull-554322216/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size={13} /> LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail size={13} /> Email
            </a>
            <a href="#top">
              Back to top <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tanuj Dhull</span>
          <span>Designed &amp; built in Jind, India</span>
        </div>
      </div>
    </footer>
  );
}

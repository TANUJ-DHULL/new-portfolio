import { ArrowUpRight, Asterisk, Target } from "lucide-react";
import { Eyebrow } from "@/components/site/section";

const principles = [
  { icon: "✳", text: "Stay curious" },
  { icon: "→", text: "Take ownership" },
  { icon: "+", text: "Keep building" },
];

export function About() {
  return (
    <section className="sec" id="about">
      <div className="shell">
        <Eyebrow
          n="02"
          title="A little context"
          note="Student / builder / founder mindset"
        />

        <div className="about-grid">
          <div className="margin-note" data-reveal="">
            <span className="asterisk" aria-hidden="true">
              <Asterisk size={96} strokeWidth={1.2} />
            </span>
            <p>
              From Jind.
              <br />
              Thinking beyond it.
            </p>
          </div>

          <div className="about-main">
            <h2 data-reveal="">
              I&rsquo;d rather build <em>something small</em> than only imagine{" "}
              <em>something big.</em>
            </h2>

            <div className="about-body">
              <p data-reveal="">
                I&rsquo;m Tanuj. I study Data Science at IIT Madras and Computer
                Applications at JIET Jind. Most of my curiosity ends up in a project
                folder: AI agents, voice interfaces, market data, or something new I want
                to understand.
              </p>
              <p data-reveal="" style={{ ["--delay" as string]: "110ms" }}>
                Nexus AI is the bigger ambition. For now, I&rsquo;m learning how to make
                software useful, how to ask better questions, and how to keep going when
                the first version doesn&rsquo;t work.
              </p>
            </div>

            <div className="founder-card" data-reveal="">
              <span className="label">
                <Target
                  size={13}
                  style={{ display: "inline", verticalAlign: "-2px", marginRight: 8 }}
                />
                The founder mindset
              </span>
              <h3>
                Think long term.
                <br />
                Build the next step.
              </h3>
              <p>
                I want to turn useful ideas into products people choose to use, and
                eventually build a company around them. For me, that starts with
                understanding a real problem, taking ownership, and improving through
                honest feedback.
              </p>
              <div className="principle-row">
                {principles.map((principle) => (
                  <span className="principle" key={principle.text}>
                    <b aria-hidden="true">{principle.icon}</b>
                    {principle.text}
                  </span>
                ))}
              </div>
              <a className="arrow-link" href="#contact">
                Think the same way? Let&rsquo;s connect
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, ExternalLink, Sparkle } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Eyebrow } from "@/components/site/section";
import { education, learning } from "@/data/education";

export function Education() {
  const wall = [
    ...education.map((entry) => ({
      id: entry.id,
      institution: entry.institution,
      logo: entry.logo,
      website: entry.website,
      relationship: entry.id === "iitr" ? "AI program" : "Education",
    })),
    ...learning.map((entry) => ({
      id: entry.id,
      institution: entry.institution,
      logo: entry.logo,
      website: entry.website,
      relationship: entry.relationship,
    })),
  ];

  return (
    <section className="forest sec" id="education">
      <div className="shell">
        <Eyebrow
          n="03"
          title="Education & institutions"
          note="The academic foundation behind the experiments"
        />

        <div className="edu-grid" style={{ marginTop: "clamp(38px, 5vw, 64px)" }}>
          <div className="edu-intro">
            <h2 className="h2" data-reveal="">
              Where I&rsquo;m
              <br />
              <em style={{ color: "#8b9a76" }}>learning to think.</em>
            </h2>
            <p data-reveal="" style={{ ["--delay" as string]: "100ms" }}>
              Two institutions, one plan: build the fundamentals properly, then use them on
              real projects.
            </p>
            <div className="edu-meta" data-reveal="" style={{ ["--delay" as string]: "160ms" }}>
              <span className="chip">
                <Sparkle size={12} /> Data Science
              </span>
              <span className="chip">Computer Applications</span>
              <span className="chip">AI &amp; ML</span>
            </div>
          </div>

          <div className="timeline">
            {education.map((entry, index) => (
              <article
                className="edu-card"
                key={entry.id}
                data-reveal=""
                style={{ ["--delay" as string]: `${index * 90}ms` }}
              >
                <div className="edu-top">
                  <span>
                    0{index + 1} / {entry.year}
                  </span>
                  <span className="badge">{entry.status}</span>
                </div>

                <div className="edu-body">
                  <Logo name={entry.institution} src={entry.logo} />
                  <div>
                    <h3>{entry.institution}</h3>
                    <p className="degree">{entry.program}</p>
                    <div className="edu-focus">
                      {entry.focus.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <a
                      className="edu-link"
                      href={entry.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit institution
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="wall">
          <div className="wall-head" data-reveal="">
            <h3>Institutions &amp; learning</h3>
            <p>Education, programs and hands-on labs.</p>
          </div>
          <div className="wall-grid">
            {wall.map((entry, index) => (
              <a
                className="wall-item"
                key={entry.id}
                href={entry.website}
                target="_blank"
                rel="noreferrer"
                data-reveal=""
                style={{ ["--delay" as string]: `${index * 70}ms` }}
              >
                <Logo name={entry.institution} src={entry.logo} />
                <strong>{entry.institution}</strong>
                <span>
                  {entry.relationship}
                  <ArrowUpRight
                    size={12}
                    style={{ display: "inline", verticalAlign: "-2px", marginLeft: 7 }}
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

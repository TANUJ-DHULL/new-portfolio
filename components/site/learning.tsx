import { ArrowUpRight, BadgeCheck, Plus } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Eyebrow, SectionHead } from "@/components/site/section";
import { achievements } from "@/data/education";

const marks = ["AI", "SA", "GC"];

export function Learning() {
  return (
    <section className="sec" id="learning">
      <div className="shell">
        <Eyebrow
          n="04"
          title="Learning in public"
          note="Small milestones. Real momentum."
        />

        <SectionHead
          title={
            <>
              Outside the
              <br />
              <em>syllabus.</em>
            </>
          }
          lead={
            <>
              Labs, programs and moments that moved me forward — the parts of learning that
              don&rsquo;t show up on a transcript.
            </>
          }
        />

        <div className="ach-grid">
          {achievements.map((achievement, index) => (
            <article
              className="ach-card"
              key={achievement.name}
              data-reveal=""
              style={{ ["--delay" as string]: `${index * 90}ms` }}
            >
              <div className="ach-top">
                <span>
                  0{index + 1} / {achievement.year}
                </span>
                <Plus size={17} />
              </div>

              {achievement.logo ? (
                <Logo name={achievement.organization} src={achievement.logo} />
              ) : (
                <div className="ach-mark" aria-hidden="true">
                  {marks[index % marks.length]}
                  <span style={{ fontSize: 13, marginLeft: 6, color: "var(--fg-mute)" }}>
                    /{achievement.year.slice(2)}
                  </span>
                </div>
              )}

              <p className="ach-detail">
                <BadgeCheck
                  size={13}
                  style={{ display: "inline", verticalAlign: "-2px", marginRight: 8 }}
                />
                {achievement.detail}
              </p>
              <h3>{achievement.name}</h3>
              <p className="ach-org">{achievement.organization}</p>

              {achievement.credentialUrl ? (
                <a
                  className="arrow-link"
                  href={achievement.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View credential
                  <ArrowUpRight size={14} />
                </a>
              ) : null}
            </article>
          ))}
        </div>

        <div className="learning-note" data-reveal="">
          <span>Also in the mix</span>
          <b>Google Cloud Arcade, ADK &amp; Vertex AI labs.</b>
          <span>Learning / Labs</span>
        </div>
      </div>
    </section>
  );
}

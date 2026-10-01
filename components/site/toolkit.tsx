import { BrainCircuit, Cloud, Code2, type LucideIcon } from "lucide-react";
import { Eyebrow, SectionHead } from "@/components/site/section";

type Group = {
  n: string;
  name: string;
  blurb: string;
  icon: LucideIcon;
  tools: string[];
};

const groups: Group[] = [
  {
    n: "01",
    name: "Intelligence & data",
    blurb: "Turning raw data into models, and models into decisions.",
    icon: BrainCircuit,
    tools: ["Python", "Machine learning", "RNN / LSTM", "Agent Development Kit", "Vertex AI"],
  },
  {
    n: "02",
    name: "Interfaces & software",
    blurb: "Making the work feel obvious to use — on any screen.",
    icon: Code2,
    tools: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML & CSS"],
  },
  {
    n: "03",
    name: "Cloud & workflow",
    blurb: "Shipping, versioning and keeping experiments reproducible.",
    icon: Cloud,
    tools: ["Google Cloud", "Cloud Run", "Docker", "Git & GitHub", "VS Code"],
  },
];

export function Toolkit() {
  return (
    <section className="sec" id="toolkit">
      <div className="shell">
        <Eyebrow
          n="05"
          title="Working toolkit"
          note="What's on my workbench"
        />

        <SectionHead
          title={
            <>
              Tools I trust,
              <br />
              <em>habits I&rsquo;m building.</em>
            </>
          }
          lead={
            <>
              Nothing here is theoretical — every tool listed has shipped something, broken
              something, and taught me something.
            </>
          }
        />

        <div className="toolkit-grid">
          {groups.map((group, index) => (
            <article
              className="tool-card"
              key={group.n}
              data-reveal=""
              style={{ ["--delay" as string]: `${index * 90}ms` }}
            >
              <div className="tool-head">
                <span className="tool-index">[{group.n}]</span>
                <group.icon size={20} />
              </div>
              <h3>{group.name}</h3>
              <p>{group.blurb}</p>
              <div className="tag-wrap">
                {group.tools.map((tool) => (
                  <span className="tag" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

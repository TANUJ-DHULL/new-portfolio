"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Code2, Plus } from "lucide-react";
import { GithubIcon } from "@/components/site/brand-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectVisual, DialogVisual } from "@/components/site/project-visual";
import { projects, type Project as ProjectType } from "@/data/projects";

const filters = ["All", "AI", "Data", "Web"] as const;
type Filter = (typeof filters)[number];

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const number = String(projects.indexOf(project) + 1).padStart(2, "0");

  return (
    <Dialog>
      <article
        className="project"
        data-reveal
        style={{ ["--delay" as string]: `${(index % 2) * 90}ms` }}
      >
        <DialogTrigger asChild>
          <button className="card cover" aria-label={`Open the ${project.name} case study`}>
            <ProjectVisual kind={project.visual} />
            <span className="cover-cta">
              Explore project <Plus size={17} />
            </span>
          </button>
        </DialogTrigger>

        <div className="project-body">
          <div className="project-top">
            <span>
              <b>{number}</b> / {project.label}
            </span>
            <span>{project.categoryLabel}</span>
          </div>

          <div className="project-title">
            <h3>{project.name}</h3>
            <DialogTrigger asChild>
              <button className="round-btn" aria-label={`Read more about ${project.name}`}>
                <Plus size={19} />
              </button>
            </DialogTrigger>
          </div>

          <p>{project.tagline}</p>

          <div className="tag-wrap">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <DialogContent className="project-dialog" showCloseButton={false}>
        <DialogVisual kind={project.visual} label={project.status} />
        <div className="dialog-body">
          <div className="project-top" style={{ color: "var(--fg-mute)" }}>
            <span>
              {number} / {project.year}
            </span>
            <span>{project.categoryLabel}</span>
          </div>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.summary}</DialogDescription>

          <div className="dialog-block">
            <span>The focus</span>
            <p>{project.focus}</p>
          </div>

          <div className="dialog-block">
            <span>What I&rsquo;m learning</span>
            <ul
              style={{
                marginTop: 12,
                display: "grid",
                gap: 9,
                listStyle: "none",
                padding: 0,
              }}
            >
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  style={{
                    display: "flex",
                    gap: 12,
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: "var(--fg-soft)",
                  }}
                >
                  <span style={{ color: "var(--lime)" }} aria-hidden="true">
                    ✳
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="tag-wrap">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="dialog-actions">
            <a
              className="btn btn-lime"
              href="https://github.com/TANUJ-DHULL"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={16} />
              Explore my GitHub
              <ArrowUpRight size={15} />
            </a>
            <a className="btn btn-outline" href="#contact">
              Talk about {project.name}
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Work({ eyebrow }: { eyebrow: React.ReactNode }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const count = (value: Filter) =>
    value === "All" ? projects.length : projects.filter((p) => p.category === value).length;

  return (
    <section className="sheet sheet-top sec" id="work">
      <div className="shell">
        {eyebrow}

        <div className="section-head">
          <h2 className="h2">
            Less talk.
            <br />
            <em>More building.</em>
          </h2>
          <p className="lead">
            Four projects that keep me asking better questions — from a voice assistant
            that runs on my desk to the AI workspace I want to build next.
          </p>
        </div>

        <div className="filters" role="tablist" aria-label="Filter projects">
          {filters.map((value) => (
            <button
              key={value}
              type="button"
              role="tab"
              className="filter"
              data-active={filter === value}
              aria-selected={filter === value}
              onClick={() => setFilter(value)}
              id={`filter-${value}`}
            >
              {value === "All" ? "All work" : value}
              <i>{String(count(value)).padStart(2, "0")}</i>
            </button>
          ))}
          <span className="filters-count">
            {String(visible.length).padStart(2, "0")} of{" "}
            {String(projects.length).padStart(2, "0")} shown
          </span>
        </div>

        <div className="project-grid" data-staggered={filter === "All"}>
          {visible.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </div>

        <div className="work-foot">
          <span>More experiments, fewer finished answers.</span>
          <a
            className="arrow-link"
            href="https://github.com/TANUJ-DHULL"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={15} />
            Find me on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

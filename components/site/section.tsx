import type { ReactNode } from "react";

/** Small monospaced label row that opens each section. */
export function Eyebrow({
  n,
  title,
  note,
}: {
  n: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="eyebrow-top" data-reveal="">
      <p className="eyebrow">
        <b>[{n}]</b>
        {title}
      </p>
      {note ? <p className="eyebrow">{note}</p> : null}
    </div>
  );
}

/** Heading + lead paragraph pair used across sections. */
export function SectionHead({
  title,
  lead,
  align = "end",
}: {
  title: ReactNode;
  lead?: ReactNode;
  align?: "end" | "start";
}) {
  return (
    <div
      className="section-head"
      style={align === "start" ? { alignItems: "start" } : undefined}
    >
      <h2 className="h2" data-reveal="">
        {title}
      </h2>
      {lead ? (
        <p className="lead" data-reveal="" style={{ ["--delay" as string]: "120ms" }}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

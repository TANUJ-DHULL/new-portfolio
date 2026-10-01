import { Fragment } from "react";
import { Asterisk, Sparkle } from "lucide-react";

const phrases = [
  "Curious by default",
  "Building by choice",
  "Learning in public",
  "Shipping the next step",
];

const secondary = [
  "Python",
  "Next.js",
  "Machine learning",
  "Google Cloud",
  "AI agents",
  "3D interfaces",
];

/** Infinite marquee — the track is duplicated so the loop is seamless. */
export function Marquee({
  items = phrases,
  dark = false,
  reverse = false,
  speed = 34,
}: {
  items?: string[];
  dark?: boolean;
  reverse?: boolean;
  speed?: number;
}) {
  const group = (key: string) => (
    <div className="marquee-group" key={key} aria-hidden={key === "b"}>
      {items.map((item, index) => (
        <Fragment key={item}>
          <p>{index % 2 === 1 ? <em>{item}</em> : item}</p>
          {index % 2 === 1 ? <Asterisk size={22} /> : <Sparkle size={20} />}
        </Fragment>
      ))}
    </div>
  );

  return (
    <div
      className={dark ? "marquee marquee-dark" : "marquee"}
      data-direction={reverse ? "reverse" : "forward"}
      style={{ ["--speed" as string]: `${speed}s` }}
    >
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}

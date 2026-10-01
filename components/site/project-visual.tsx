import Image from "next/image";
import { AudioLines, CornerDownLeft, Flag, Mic, TrendingUp } from "lucide-react";
import type { Project } from "@/data/projects";

/**
 * Deterministic bar geometry. Values are pre-formatted as strings so the
 * server and client render byte-identical inline styles (no hydration drift).
 */
const bars = Array.from({ length: 40 }, (_, i) => {
  const envelope = 1 - Math.abs(i - 19.5) / 26;
  const height = 12 + Math.pow(Math.sin(i * 0.46), 2) * 58 * envelope;
  return { height: `${height.toFixed(2)}px`, delay: `${(i * 0.045).toFixed(3)}s` };
});

const carbonBars = [58, 74, 46, 88, 66, 96, 52, 80, 62, 92, 44, 70];

/** Illustrated cover art for each project — pure CSS/SVG so it always loads. */
export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  if (kind === "voice") {
    return (
      <div className="cover-visual voice">
        <div className="cover-meta">
          <span className="voice-brand">
            j<i>/</i>arvis
          </span>
          <span>Interface study</span>
        </div>
        <div className="voice-body">
          <div className="voice-line">
            Less friction.
            <br />
            <em>More doing.</em>
          </div>
          <div className="wave" aria-hidden="true">
            {bars.map((bar, index) => (
              <i
                key={index}
                style={{ height: bar.height, animationDelay: bar.delay }}
              />
            ))}
          </div>
          <div className="voice-input">
            <Mic size={15} className="mic-dot" />
            <span>Your next idea starts with a voice.</span>
            <CornerDownLeft size={14} />
          </div>
        </div>
      </div>
    );
  }

  if (kind === "nexus") {
    return (
      <div className="cover-visual nexus">
        <Image
          src="/images/chrome-study.webp"
          alt=""
          width={1536}
          height={1024}
          className="nexus-art"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <div className="cover-meta">
          <span>Product exploration</span>
          <span>02 / AI</span>
        </div>
        <div className="nexus-word">
          nexus<sup>+</sup>
        </div>
        <div className="cover-meta">
          <span>An idea in motion</span>
          <span>AI workspace</span>
        </div>
      </div>
    );
  }

  if (kind === "chart") {
    return (
      <div className="cover-visual chart">
        <div className="cover-meta">
          <span>Market / Research</span>
          <span>Model study</span>
        </div>
        <div className="chart-title">
          Beyond
          <br />
          <em>the signal.</em>
        </div>
        <svg
          className="market-chart"
          viewBox="0 0 600 160"
          role="img"
          aria-label="Illustrative time-series chart"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="signalFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g className="grid-line">
            <path d="M0 40 H600 M0 80 H600 M0 120 H600 M150 0 V160 M300 0 V160 M450 0 V160" />
          </g>
          <path
            className="signal-area"
            d="M0 118 L20 106 40 114 60 98 80 102 100 84 120 92 140 68 160 78 180 62 200 74 220 66 240 44 260 60 280 50 300 74 320 58 340 66 360 42 380 50 400 22 420 40 440 26 460 40 480 16 500 24 520 6 540 24 560 10 580 18 600 4 V160 H0 Z"
          />
          <path
            className="signal-line"
            pathLength={1}
            d="M0 118 L20 106 40 114 60 98 80 102 100 84 120 92 140 68 160 78 180 62 200 74 220 66 240 44 260 60 280 50 300 74 320 58 340 66 360 42 380 50 400 22 420 40 440 26 460 40 480 16 500 24 520 6 540 24 560 10 580 18 600 4"
          />
        </svg>
        <div className="cover-meta">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <TrendingUp size={14} /> RNN / LSTM
          </span>
          <span>Illustrative data</span>
        </div>
      </div>
    );
  }

  return (
    <div className="cover-visual carbon">
      <div className="cover-meta">
        <span>Carbon footprint</span>
        <span>Web / Cloud</span>
      </div>
      <div className="carbon-word">
        THERE IS
        <br />
        NO PLANET
        <br />
        <b>B.</b>
      </div>
      <div className="carbon-bars" aria-hidden="true">
        {carbonBars.map((height, index) => (
          <i
            key={index}
            style={{ height: `${height}%`, animationDelay: `${(index * 0.12).toFixed(2)}s` }}
          />
        ))}
      </div>
      <div className="cover-meta">
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <Flag size={14} /> Small choices. Shared impact.
        </span>
        <span>CO₂</span>
      </div>
    </div>
  );
}

/** Same illustration, cropped for the project dialog header. */
export function DialogVisual({
  kind,
  label,
}: {
  kind: Project["visual"];
  label: string;
}) {
  return (
    <div className="dialog-visual">
      <ProjectVisual kind={kind} />
      <span
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(11,12,10,.1) 30%, rgba(16,18,15,.96) 100%)",
        }}
        aria-hidden="true"
      />
      <span
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          gap: 9,
          alignSelf: "flex-start",
          padding: "8px 14px",
          border: "1px solid rgba(215,242,107,.4)",
          borderRadius: 999,
          background: "rgba(11,12,10,.55)",
          backdropFilter: "blur(8px)",
          fontFamily: "var(--font-mono)",
          fontSize: 10.5,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: "var(--lime)",
        }}
      >
        <AudioLines size={13} />
        {label}
      </span>
    </div>
  );
}

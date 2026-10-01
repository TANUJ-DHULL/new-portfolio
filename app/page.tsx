import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Work } from "@/components/site/work";
import { About } from "@/components/site/about";
import { Education } from "@/components/site/education";
import { Learning } from "@/components/site/learning";
import { Toolkit } from "@/components/site/toolkit";
import { Contact, Footer } from "@/components/site/contact";
import { Eyebrow } from "@/components/site/section";
import { GlobalEffects, RevealProvider } from "@/components/site/effects";

const stack = [
  "Python",
  "Next.js",
  "Machine learning",
  "Google Cloud",
  "AI agents",
  "3D interfaces",
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <RevealProvider />
      <GlobalEffects />
      <Header />

      <main id="main">
        <Hero />
        <Marquee />

        <Work
          eyebrow={
            <Eyebrow
              n="01"
              title="Selected explorations"
              note="The ideas. The experiments. The work."
            />
          }
        />

        <About />
        <Education />
        <Learning />
        <Toolkit />

        <Marquee items={stack} dark reverse speed={40} />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

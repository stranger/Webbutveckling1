import "./Landing.css";

// eftersom det har mer än 1 export (inte default export) så ska {} användas
import { IntroLogo } from "../../assets/icons";

import BlogContainer from "../../components/BlogContainer/BlogContainer";

export default function Landing() {
  return (
    <main className="landing">
      <section className="intro-section" id="intro">
        <div className="intro-text-container">
          {/* h1 läses upp först sen h2 för accessibilty */}
          <h1 className="intro-title">WEBBUTVECKLING 1</h1>
          <h2 className="intro-subtitle">
            Kursen var en bra crash course för att komma igång med programmering
            igen efter en lång paus. Jag lärde mig viktiga grundläggande
            principer.
          </h2>
        </div>
        <IntroLogo className="webb-logo" />
      </section>
      <hr className="landing-divider" />

      <BlogContainer></BlogContainer>
    </main>
  );
}

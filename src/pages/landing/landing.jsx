import "./landing.css";

import { Lens, Webbutveckling } from "../../assets/icons";

export default function Landing() {
  return (
    <div className="landing">
      {/*<section className="intro">
         <Lens className="intro-lens"></Lens>
        <h1 className="intro-title-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum
          numquam hic sunt aliquam molestiae culpa repudiandae illo quae facere?
          Tenetur delectus quo culpa? Ipsam quae facere minima soluta obcaecati.
        </h1>
      </section>*/}
      <section className="intro-section">
        <div className="intro-text-container">
          <h1 className="intro-title">WEBBUTVECKLING 1</h1>
          <h2>
            Kursen var en bra crash course för att komma igång med programmering
            igen efter en lång paus. Jag lärde mig viktiga grundläggande
            principer.
          </h2>
        </div>
        <Webbutveckling className="webb-logo" />
      </section>

      <hr />

      <section className="blog-section">
        <h1 className="blog-title"></h1>
      </section>
    </div>
  );
}

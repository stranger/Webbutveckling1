import "./Landing.css";

import { Lens, Webbutveckling } from "../../assets/icons";
import websiteImage from "./../../assets/website.png";

function BlogPost(...props) {
  return (
    <article className="post-container">
      <figure className="post-figure">
        <img src={websiteImage} alt=""></img>
        <figcaption></figcaption>
      </figure>
      <div className="post-text">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          voluptas numquam explicabo amet non veritatis totam, quod voluptatum
          cumque. Ducimus perferendis nulla totam saepe ut voluptatibus.
          Adipisci nesciunt quas dolorem?
        </h1>
      </div>
    </article>
  );
}

export default function Landing() {
  return (
    <div className="landing">
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
        <h3 className="blog-title">BLOGGEN</h3>

        <BlogPost className="blog-post"></BlogPost>
      </section>
    </div>
  );
}

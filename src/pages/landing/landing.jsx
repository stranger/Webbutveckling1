import "./landing.css";

import { Lens } from "../../assets/icons";

export default function Landing() {
  return (
    <div className="landing">
      <section className="intro">
        <Lens className="intro-lens"></Lens>
        <h1 className="intro-title-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illum
          numquam hic sunt aliquam molestiae culpa repudiandae illo quae facere?
          Tenetur delectus quo culpa? Ipsam quae facere minima soluta obcaecati.
        </h1>
      </section>
    </div>
  );
}

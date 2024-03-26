import "./Landing.css";

import { Fade } from "react-awesome-reveal";

import { IntroLogo } from "../../assets/icons";

import BlogPost from "./../../components/BlogPost/BlogPost";

import blogData from "./../../assets/blogData.json";

export default function Landing() {
  return (
    <div className="landing">
      <section className="intro-section" id="intro">
        <div className="intro-text-container">
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

      <section className="blog-section" id="blog">
        <h3 className="blog-title">BLOGGEN</h3>
        {/* Itererar över posts arrayen. Data är objekten i arrayen, key är index som react behöver för att hålla koll på vilket element är vad så att den kan re-rendera bara den komponenten istället för alla blog posts */}
        <Fade className="fade" cascade triggerOnce damping={0.01}>
          {blogData.posts.map((data, key) => {
            return (
              <BlogPost
                key={key}
                blogData={data}
                className="blog-post"
              ></BlogPost>
            );
          })}
        </Fade>
      </section>
    </div>
  );
}
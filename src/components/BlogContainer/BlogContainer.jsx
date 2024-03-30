import "./BlogContainer.css";
import BlogPost from "../BlogPost/BlogPost";
import blogData from "./../../assets/blogData.json";

import { Fade } from "react-awesome-reveal";

export default function BlogContainer() {
  return (
    <section className="blog-section" id="blog">
      <h2 className="blog-title">BLOGGEN</h2>
      {/* Fadar in när den visas i viewport */}
      <Fade className="fade" cascade triggerOnce damping={0.01}>
        {/* Itererar över posts arrayen. Data är objekten i arrayen, key är index
        som react behöver för att hålla koll på vilket element är vad så att den
        kan re - rendera bara den komponenten istället för alla blog posts, m.m */}
        {blogData.posts.map((data, key) => {
          /* skickar data till komponenten (props/properties) */
          return <BlogPost data={data} key={key}></BlogPost>;
        })}
      </Fade>
    </section>
  );
}

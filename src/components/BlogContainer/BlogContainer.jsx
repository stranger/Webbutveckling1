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
        {blogData.posts.map((data) => {
          /* skickar data till komponenten (props/properties) */
          return <BlogPost data={data} key={data.id}></BlogPost>;
        })}
      </Fade>
    </section>
  );
}

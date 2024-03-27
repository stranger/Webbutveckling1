import "./BlogPost.css";
import { useState } from "react";

import { ShowCommentsIcon } from "../../assets/icons";

import CommentContainer from "../CommentContainer/CommentContainer";

/* props tar alla attributes jag skrev in i elmentet så blogData= {data} = props */
export default function BlogPost(props) {
  /* sätter state variables så react kan re-rendera komponenter när saker ändras och håller koll på vad som händer */
  const [clicked, setClick] = useState(false);

  /* Behöver lyfta upp den hit för att kunna få nya kommentar nummret, mest för CommentContainer */
  const [blogComments, setBlogComments] = useState(
    props.blogData.comments.slice(1)
  );

  return (
    <article className="post-container">
      <figure className="post-figure">
        {/* Jag måste ha en div här så att bilden kan få overflow scroll utan att figcaption är inne i scrollen och istället är på botten. OK för accessibilitet enligt standard */}
        <div>
          <img src={props.blogData.image} alt="Bild på uppgift"></img>
        </div>
        <figcaption>{props.blogData.description}</figcaption>
      </figure>

      <section className="post-text-container">
        <h1 className="post-title">{props.blogData.title}</h1>
        <h2 className="post-text">{props.blogData.text}</h2>
      </section>

      {/* viktigt att passa fuktionen istället för att calla den, om jag skrev utan arrow funktionen skulle den executa direkt när komponenten laddas in  */}
      <button
        onClick={() => setClick(!clicked)}
        className="show-comments-btn"
        type="button"
        aria-label={`Visa ${blogComments.length} kommentarer`}
      >
        {/* Screenreaders behöver bara knappen */}
        <ShowCommentsIcon aria-hidden />
        <p className="comment-number" aria-hidden>
          {blogComments.length}
        </p>
      </button>

      <CommentContainer
        blogComments={blogComments}
        setBlogComments={setBlogComments}
        description={props.blogData.description}
        clicked={clicked}
        setClick={setClick}
      ></CommentContainer>
    </article>
  );
}

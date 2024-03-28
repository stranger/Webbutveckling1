import "./BlogPost.css";
import { useState } from "react";

import { ShowCommentsIcon } from "../../assets/icons";

import CommentContainer from "../CommentContainer/CommentContainer";

/* props/properties är alla attributes jag skrev in i elementet så blogData= {data} = props */
export default function BlogPost(props) {
  /* sätter state variables så react kan re-rendera komponenter när saker ändras och håller koll på vad som händer */
  const [clicked, setClick] = useState(false);

  /* Behöver lyfta upp den hit för att kunna få nya kommentar nummret, men är till för CommentContainer */
  const [blogComments, setBlogComments] = useState(
    props.blogData.comments.slice(1)
  );

  return (
    <article className="post-container">
      <figure className="post-figure">
        {/* div här så att bilden kan få overflow scroll utan att figcaption är inne i scrollen och istället är på botten. Flow content är ok att ha inne i figure enligt mdn */}
        <div>
          <img
            src={props.blogData.image}
            alt={`Bild på ${props.blogData.description}`}
          ></img>
        </div>
        <figcaption>{props.blogData.description}</figcaption>
      </figure>

      <article className="post-text-container">
        <h3 className="post-title">{props.blogData.title}</h3>
        <p className="post-text">{props.blogData.text}</p>
      </article>

      {/*viktigt att passa fuktionen istället för att calla den, om jag skrev utan arrow funktionen skulle den executa direkt när komponenten laddas in */}
      <button
        onClick={() => setClick(!clicked)}
        className="show-comments-btn"
        type="button"
        aria-label={`Visa ${blogComments.length} kommentarer`}
      >
        <ShowCommentsIcon />
        <span className="comment-number" aria-hidden>
          {blogComments.length}
        </span>
      </button>

      <CommentContainer
        /* skickar data till komponenten (props/properties) */
        blogComments={blogComments}
        setBlogComments={setBlogComments}
        description={props.blogData.description}
        clicked={clicked}
        setClick={setClick}
      ></CommentContainer>
    </article>
  );
}

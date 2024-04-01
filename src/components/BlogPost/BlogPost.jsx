import "./BlogPost.css";
import { useState } from "react";

import CommentContainer from "../CommentContainer/CommentContainer";

/* props/properties är alla attributes jag skrev in i elementet så blogData= {data} = props */
export default function BlogPost(props) {
  /* sätter state variable så react kan re-rendera komponenter när saker ändras och håller koll på vad som händer */
  const [figureClicked, setFigureClick] = useState(false);

  return (
    <article className="post-container">
      <div
        // toggle display efter klick
        style={{ display: figureClicked ? "block" : "none" }}
        className="figure-backdrop"
        onClick={() => setFigureClick(!figureClicked)}
      ></div>
      <figure
        className="post-figure"
        // enligt w3 ska figure alltid ha role=group
        role="group"
      >
        {/* overflow scroll container för pop-up */}
        <div
          // klass figure-popup toggle efter klick (stor bild)
          className={`img-container ${figureClicked ? "figure-popup" : ""}`}
          onClick={() => setFigureClick(!figureClicked)}
        >
          {/* sätter in blogData objektet jag skickat via 'attributet' blogData */}
          <img
            src={props.data.image}
            alt={`Bild på ${props.data.description}`}
            title="Förstora bild"
            // laddas bara ner när den skrollas in i sidan
            loading="lazy"
          ></img>
        </div>
        <figcaption>{props.data.description}</figcaption>
      </figure>

      <article className="post-text-container">
        <h3 className="post-title">{props.data.title}</h3>
        <p className="post-text">{props.data.text}</p>
      </article>

      <CommentContainer
        data={{
          description: props.data.description,
          comments: props.data.comments,
        }}
      ></CommentContainer>
    </article>
  );
}

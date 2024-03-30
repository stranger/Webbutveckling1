import "./BlogPost.css";
import { useState } from "react";

import CommentContainer from "../CommentContainer/CommentContainer";

/* props/properties är alla attributes jag skrev in i elementet så blogData= {data} = props */
export default function BlogPost(props) {
  /* sätter state variables så react kan re-rendera komponenter när saker ändras och håller koll på vad som händer */
  const [clicked, setClick] = useState(false);

  return (
    <article className="post-container">
      <figure
        className="post-figure"
        // enligt w3 ska figure alltid ha role=group
        role="group"
      >
        {/* div här så att bilden kan få overflow scroll utan att figcaption är inne i scrollen och istället är på botten. Flow content är ok att ha inne i figure enligt mdn */}
        <div>
          {/* sätter in blogData objektet jag skickat via 'attributet' blogData */}
          <img
            src={props.data.image}
            alt={`Bild på ${props.data.description}`}
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
        clicked={clicked}
        setClick={setClick}
      ></CommentContainer>
    </article>
  );
}

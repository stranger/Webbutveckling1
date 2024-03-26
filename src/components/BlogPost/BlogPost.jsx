import "./BlogPost.css";
import { useState } from "react";

import {
  ShowCommentsIcon,
  AddCommentIcon,
  CommentsIcon,
} from "../../assets/icons";

/* props tar alla attributes jag skrev in i elmentet så blogData= {data} = props */
export default function BlogPost(props) {
  /* sätter state variables så react kan re-rendera komponenter när saker ändras och håller koll på vad som händer */
  const [clicked, setClick] = useState(false);
  /*Viktigt för inputs så att de blir controlled components (react kan hålla koll) utan så kan inte react hålla koll på values i realtid */
  const [inputName, setName] = useState("");
  const [inputComment, setComment] = useState("");

  /* Vet inte hur man jobbar med datastrukturers tomma initalvärden, filter är nog bättre men vad händer när den är stor låter som mycket jobb */
  const [blogComments, setBlogComments] = useState(
    props.blogData.comments.slice(1)
  );

  const addComment = () => {
    if (inputName != "" && inputComment != "") {
      const comment = { user: inputName, text: inputComment };
      /* Spread operator så jag får alla values inuti arrayen istället för att bara sätta in en array */
      setBlogComments((oldState) => [...oldState, comment]);
      setName("");
      setComment("");
    }
  };

  return (
    <article className="post-container">
      <figure className="post-figure">
        {/* Jag måste ha en div här så att bilden kan få overflow scroll utan att figcaption är inne i scrollen och istället är på botten. Det är tydligen ok*/}
        <div>
          <img src={props.blogData.image} alt="Bild på uppgift"></img>
        </div>
        <figcaption>{props.blogData.description}</figcaption>
      </figure>

      <section className="post-text">
        <h1>{props.blogData.text}</h1>
      </section>

      {/* viktigt att passa fuktionen istället för att calla den, om jag skrev utan arrow funktionen skulle den executa direkt när komponenten laddas in  */}
      <button
        onClick={() => setClick(!clicked)}
        className="show-comments-btn"
        type="button"
        aria-label="Visa kommentarer"
      >
        <ShowCommentsIcon />
        <p className="comment-number">{blogComments.length}</p>
      </button>

      {/* borde splitta in den här i ny komponent men  */}
      <aside
        className="comment-container"
        style={{ display: clicked ? "flex" : "none" }}
        /* gömmer för screen readers när den inte finns */
        aria-hidden={!clicked}
      >
        <button
          onClick={() => setClick(!clicked)}
          className="close-comments-btn"
          type="button"
          aria-label="Dölj kommentarer"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <section className="comments-title">
          <CommentsIcon className="comments-title-icon" />
          <h1>{props.blogData.description} kommentarer</h1>
        </section>

        <hr />

        <section className="comments">
          {/* Förklarad i Landing.jsx */}
          {blogComments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                <h1 className="comment-username">{comment.user}:</h1>
                <p className="comment-text">{comment.text}</p>
                <hr />
              </div>
            );
          })}
        </section>

        <form className="comment-form">
          <fieldset>
            <label>
              Namn:
              <input
                name="namn"
                className="name-input"
                type="text"
                /* Båda värderna behövs för att skapa en controlled komponent  */
                value={inputName}
                /* Sätter inputName till värdet av vad som skrivs in i input */
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Kommentar:
              <textarea
                name="kommentar"
                className="comment-input"
                type="text"
                value={inputComment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </label>
          </fieldset>
          <button
            onClick={() => addComment()}
            className="comment-submit-btn"
            type="button"
            aria-label="Skicka kommentar"
          >
            <AddCommentIcon />
          </button>
        </form>
      </aside>
    </article>
  );
}

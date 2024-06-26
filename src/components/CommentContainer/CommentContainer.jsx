import "./CommentContainer.css";

import { useState } from "react";

import { AddCommentIcon, CommentsIcon } from "../../assets/icons";

export default function CommentContainer(props) {
  /* Viktigt för inputs så att de blir controlled components utan så kan inte react hålla koll på values i realtid och nu kan manipuleras med reacts metoder istället för js DOM */
  const [inputName, setName] = useState("");
  const [inputComment, setComment] = useState("");

  const addComment = () => {
    if (inputName != "" && inputComment != "") {
      const comment = { user: inputName, text: inputComment };
      /* Spread operator så jag får ut alla values inuti arrayen istället för att bara sätta in en hel array */
      props.setComments((oldState) => [...oldState, comment]);
      setName("");
      setComment("");
    }
  };

  return (
    <aside
      className="comments-main"
      /* true flex false none */
      style={{ display: props.clicked ? "flex" : "none" }}
      /* gömmer för screen readers när den inte finns */
      aria-hidden={!props.clicked}
    >
      <div
        className="backdrop"
        onClick={() => props.setClick(!props.clicked)}
      ></div>

      <section className="comments-content-container" role="dialog">
        <article className="comments-header">
          <CommentsIcon className="comments-title-icon" />
          <h2 className="comments-title">{props.description} kommentarer</h2>
        </article>

        <button
          onClick={() => props.setClick(!props.clicked)}
          className="close-comments-btn"
          type="button"
          aria-label="Dölj kommentarer"
        >
          <span aria-hidden>&times;</span>
        </button>

        <hr />

        <article className="comments">
          {props.comments.map((comment) => {
            return (
              <div key={comment.id} className="comment">
                <h3 className="comment-username">{comment.user}:</h3>
                <p className="comment-text">{comment.text}</p>
                <hr />
              </div>
            );
          })}
        </article>

        <form
          className="comment-form"
          // enter triggar onSubmit så vi måste hantera det
          onSubmit={(e) => {
            e.preventDefault();
            addComment();
          }}
        >
          {/* fieldset grupperar allt för accessibiilty och läser upp legend */}
          <fieldset>
            <legend>Skriv din kommentar</legend>
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
          {/* type=button så den inte blir submit */}
          <button
            onClick={() => addComment()}
            className="comment-submit-btn"
            type="button"
            aria-label="Posta kommentar"
          >
            <AddCommentIcon />
          </button>
        </form>
      </section>
    </aside>
  );
}

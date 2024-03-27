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
      /* Spread operator så jag får alla values inuti arrayen istället för att bara sätta in en array */
      props.setBlogComments((oldState) => [...oldState, comment]);
      setName("");
      setComment("");
    }
  };

  return (
    <aside
      className="comments-main"
      style={{ display: props.clicked ? "flex" : "none" }}
      /* gömmer för screen readers när den inte finns */
      aria-hidden={!props.clicked}
      aria-labelledby="comments-title"
    >
      <div
        className="backdrop"
        onClick={() => props.setClick(!props.clicked)}
      ></div>

      <section className="comments-container">
        <section className="comments-header">
          <CommentsIcon className="comments-title-icon" />
          <h2 id="comments-title">{props.description} kommentarer</h2>
        </section>

        <button
          onClick={() => props.setClick(!props.clicked)}
          className="close-comments-btn"
          type="button"
          aria-label="Dölj kommentarer"
        >
          <span aria-hidden>&times;</span>
        </button>

        <hr />

        <section
          className="comments"
          role="contentinfo"
          aria-label="Kommentarer"
        >
          {/* Map förklarad i Landing.jsx */}
          {props.blogComments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                <h2 className="comment-username">{comment.user}:</h2>
                <p className="comment-text">{comment.text}</p>
                <hr />
              </div>
            );
          })}
        </section>

        <form className="comment-form">
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

import "./Landing.css";

import { useState } from "react";

import {
  Lens,
  Webbutveckling,
  CommentIcon,
  AddCommentIcon,
} from "../../assets/icons";

import blogData from "./../../assets/blogData.json";

function BlogPost(props) {
  const [clicked, setClick] = useState(false);

  return (
    <article className="post-container">
      <figure className="post-figure">
        <img src={props.blogData.image} alt="Bild på delmoment uppgift"></img>
        <figcaption>{props.blogData.description}</figcaption>
      </figure>
      <div className="post-text">
        <h1>{props.blogData.text}</h1>
      </div>
      <button
        onClick={() => setClick(!clicked)}
        className="show-comments-btn"
        type="button"
      >
        <CommentIcon />
        <p className="comment-number">{props.blogData.comments.length}</p>
      </button>
      <aside
        className="comment-container"
        style={{ display: clicked ? "flex" : "none" }}
      >
        <button
          onClick={() => setClick(!clicked)}
          className="close-comments-btn"
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="comments">
          {props.blogData.comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                <h1 className="username">{comment.user}:</h1>
                <p className="comment-text">{comment.text}</p>
                <hr />
              </div>
            );
          })}{" "}
        </div>
        <form className="comment-form">
          <fieldset>
            <legend>Namn:</legend>
            <input className="name-input" type="text"></input>
            <legend>Kommentar:</legend>
            <textarea className="comment-input" type="text"></textarea>
          </fieldset>
          <button className="comment-submit-btn" type="button">
            <AddCommentIcon />
          </button>
        </form>
      </aside>
    </article>
  );
}

export default function Landing() {
  return (
    <div className="landing">
      <section className="intro-section" id="intro">
        <div className="intro-text-container">
          <h1 className="intro-title">WEBBUTVECKLING 1</h1>
          <h2>
            Kursen var en bra crash course för att komma igång med programmering
            igen efter en lång paus. Jag lärde mig viktiga grundläggande
            principer.
          </h2>
        </div>
        <Webbutveckling className="webb-logo" />
      </section>
      <hr />

      <section className="blog-section">
        <h3 className="blog-title">BLOGGEN</h3>

        {blogData.posts.map((data, key) => {
          return (
            <BlogPost
              key={key}
              className="blog-post"
              blogData={data}
            ></BlogPost>
          );
        })}
      </section>
    </div>
  );
}

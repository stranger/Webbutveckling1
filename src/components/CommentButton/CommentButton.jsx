import "./CommentButton.css";

import { useState } from "react";

import { ShowCommentsIcon } from "../../assets/icons";
import CommentContainer from "../CommentContainer/CommentContainer";

export default function CommentButton(props) {
  // tom array om inga kommentarer, annars får man initala strukturen
  const [comments, setComments] = useState(
    props.data.comments ? [] : props.data.comments
  );

  const [clicked, setClick] = useState(false);

  return (
    <div className="comments-wrapper">
      <button
        onClick={() => setClick(!clicked)}
        className="show-comments-btn"
        type="button"
        /* för talsyntes */
        aria-label={`Visa ${comments.length} kommentarer`}
        aria-haspopup="dialog"
        aria-expanded={clicked}
      >
        <ShowCommentsIcon />
        <span className="comment-number" aria-hidden>
          {comments.length}
        </span>
      </button>

      <CommentContainer
        comments={comments}
        setComments={setComments}
        description={props.data.description}
        clicked={clicked}
        setClick={setClick}
      ></CommentContainer>
    </div>
  );
}

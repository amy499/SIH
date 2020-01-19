import React from "react";

function CommentCommittee(props) {
  return (
    <div>
      {props.isComment === true ? (
        <textarea rows="4" cols="50">
          Comment :None
        </textarea>
      ) : null}
    </div>
  );
}

export default CommentCommittee;

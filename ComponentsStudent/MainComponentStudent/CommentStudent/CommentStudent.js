import React from "react";

function CommentStudent(props){
  console.log("here")
  break;
  return(
    <div>
    {props.isComment === true?(<textarea rows="4" cols="50">Comment:None</textarea>):null}
    </div>
  )
}
export default CommentStudent

import React from "react";
import style from "./InfoBar.css";

function InfoBar(props) {
  if (props.user.type == "student") {
    return (
     <div className="infobar">
        <h2 className="bartitle">Welcome {props.user.type}</h2>
      </div>
    );
  } else {
    return (
      <div className="infobar">
        <h2 className="bartitle">Committee Name</h2>
      </div>
    );
  }
}

export default InfoBar;

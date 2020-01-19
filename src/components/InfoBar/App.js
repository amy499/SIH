import React from "react";

let style = {
  position: "relative",
  width: "100%",
  height: "129px",
  left: "0px",
  backgroundColor: "#a8e3ff",
  color: "#1a1a1a",
  fontFamily: "Roboto",
  textAlign: "center",
  fontSize: "26px"
};

let styleh2 = {
  padding: "42px",
  backgroundColor: "#e6ccff"
};

function InfoBar(props) {
  if (props.user.type == "student") {
    return (
      <div className="InfoBar" style={style}>
        <h2 style={styleh2}>Welcome {props.user.type}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Committee Name</h2>
      </div>
    );
  }
}

export default InfoBar;

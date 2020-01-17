import React from "react"

let style={
  position: 'relative',
  width: '100%',
  height: '129px',
  left: '0px',
  backgroundColor: '#4A455A',
  color: 'white',
  fontFamily: 'Roboto',
  textAlign:'center',
  fontSize: '30px',
}

let styleh2={
  padding:'42px'
}

function InfoBar (props){
  if(props.user.type=='student'){
    return(
      <div className="InfoBar" style={style}>
      <h2 style={styleh2}>Welcome {props.user.type}</h2>
      </div>
    )
  }
  else {
    return(
      <div>
      <h2>Committee Name</h2>
      </div>
    )
  }
}

export default InfoBar

import React,{ Component } from "react"
import "./ComplaintArea.css"
class ComplaintArea extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="ComplaintArea">
      <label>Subject:</label>
      <textarea
       name="Subject"
       maxLength="86"/>
      <br />
        <br />
      <label>Complaint:</label>
      <textarea name="Complaint"
       id="Complaint"maxLength="500" />
      </div>
    )
  }
}

export default ComplaintArea

import React from "react"
import "./TypeOfComplaint.css"
class TypeOfComplaint extends React.Component{
  constructor(props){
    super(props)
    this.handleChange= this.handleChange.bind(this)
  }
  handleChange(){
    console.log("hey")
  }
  render(){
    return(
      <div className="TOC">
      <div className="radio-items">
      <input type="radio"
      name="TypeOfComplaint"
      defaultChecked
      value="Private" />
      <label>Private </label>
      </div>
      <div className="radio-items">
      <input type="radio"
      name="TypeOfComplaint"
      value="Public" />
      <label>Public</label>
      </div>
      </div>
    )
    }
}
export default TypeOfComplaint

import React from "react"
import "./App.css"
import FileComplaint from "./FileComplaint/FileComplaint.js"
import MainComponentStudent from "./MainComponentStudent/MainComponentStudent.js"
import PublicComponene
let styles={
  backgroundColor:'black',
  color:'whitesmoke',
}

class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state={
          Filed: true,
          FileComplaint : false,
          Closed:false,
          Public:false,
          Opened: false

    }
    this.baseState = {
      Filed: false,
      FileComplaint : false,
      Closed:false,
      Public:false,
      Opened: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    let id = (event.target.id)
   this.setState(this.baseState)
    this.setState({
      [id] : true
    })
  }
  render(){
    if(this.props.user.type=='student'){
  return(
    <div>
    <div onClick={this.handleChange} className="MenuBar">
    <button
    style={styles}
    id="Filed">Filed</button>
    <button style={styles}
    id="Opened">Opened</button>
    <button style={styles}
    id="Closed">Closed</button>
    <button style={styles}
     id="FileComplaint" onClick={this.handleClick}>FileComplaint</button>
    <button style={styles}
    id="Public">Public</button>
    </div>
    <div>
    {this.state.Filed && <MainComponentStudent type="Filed" />}
    </div>

    <div>
      {this.state.Opened && <MainComponentStudent type="Opened" />}
    </div>
    <div>
    {this.state.Closed && <MainComponentStudent type="Closed"/>}
    </div>
    <div>
    {this.state.FileComplaint && <FileComplaint user={this.props.user}/>}
    </div>
    <div>
    {this.state.}
    </div>
    </div>
  )}
  else{
    return <div> Working on Committee</div>
  }
}
}


export default Menu

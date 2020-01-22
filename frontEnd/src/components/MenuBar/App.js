import React from "react"
import "./App.css"
import FileComplaint from "./FileComplaint/FileComplaint.js"
import MainComponentStudent from "./MainComponentStudent/MainComponentStudent.js"
import "bootstrap/dist/css/bootstrap.min.css";
import PublicGrievance from "./PublicGrievance/App.js"

let styles={
 backgroundColor: " #00539cff",
  color: "#fff"
}
let clickedStyle :{
    backgroundColor: '#fff',
    color: "black",
    delay:'10s'
}

class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state={
          Filed: {
            render: true,
            style: clickedStyle
          },
          FileComplaint : {
            render:false,
            style: styles
          },
          Closed:{
            render:false,
            style: styles
          },
          Public:{
            render:false,
            style:styles
          },
          Opened: {
            render:false,
            style: styles
          },
          loading:{
            render: false,
            style: styles
          }
    }
    this.baseState = {
      Filed: {
        render: false,
        style: styles
      },
      FileComplaint : {
        render:false,
        style: styles
      },
      Closed:{
        render:false,
        style: styles
      },
      Public:{
        render:false,
        style:styles
      },
      Opened: {
        render:false,
        style: styles
      },
      loading:{
        render: false,
        style: styles
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    let id = (event.target.id)
    let x = {
      render: true,
      style: clickedStyle
    };
    this.setState(this.baseState)
    this.setState({[id]:x})
    console.log(this.props.user)
  }
  render(){

    if(this.props.user.type=='student'){
  return(
    <div>
    <div>
    <div onClick={this.handleChange} className="MenuBar">
    <button
    style={this.state.Filed.style}
    id="Filed">Filed</button>
    <button style={this.state.Opened.style} onClick={this.ChangeColor}
    id="Opened"  className="buttonstyle">Opened</button>
    <button style={this.state.Closed.style}
    id="Closed"  className="buttonstyle">Closed</button>
    <button style={this.state.FileComplaint.style}
     id="FileComplaint" onClick={this.handleClick}  className="buttonstyle">File Complaint</button>
    <button style={this.state.Public.style}
    id="Public"  className="buttonstyle">Public</button>
    </div>
    <div>
    {this.state.Filed.render && <MainComponentStudent user={this.props.user} type="Filed"/>}
    </div>
    {this.state.FileComplaint.render && <FileComplaint user={this.props.user}/>}

    {this.state.Opened.render && <MainComponentStudent user={this.props.user} type="Opened"/>}


          {this.state.Closed.render && <MainComponentStudent user={this.props.user}type="Closed" />}


    {this.state.Public.render && <PublicGrievance user={this.props.user}/>}
    </div>
    </div>
  )}
  
  else{
    return(
    <div>
    <div onClick={this.handleChange} className="MenuBar">
    <button
    style={styles}
    id="Filed"  className="buttonstyle">Filed</button>
    <button style={styles}
    id="Opened"  className="buttonstyle">Opened</button>
    <button style={styles}
    id="Closed"  className="buttonstyle">Closed</button>
    <button style={styles}
    id="Public"  className="buttonstyle">Public</button>
    </div>
    <div>
    {this.state.Filed.render && <MainComponentStudent user={this.props.user} type="Filed"/>}
    </div>
    {this.state.FileComplaint.render && <FileComplaint type="Opened" user={this.props.user}/>}

    {this.state.Opened.render && <MainComponentStudent user={this.props.user} type="Opened"/>}


          {this.state.Closed.render && <MainComponentStudent user={this.props.user.type} type={'Closed'} />}


    {this.state.Public.render && <PublicGrievance />}
    </div>
    )
  }
}
}


export default Menu

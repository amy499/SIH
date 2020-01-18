import React from "react"
import ReactDom from "react-dom"
import Navigation from "./NavBar/Navigation.js"
import InfoBar from "./InfoBar/App.js"
import Menu from "./MenuBar/App.js"
import Footer from "./Footer/App.js"

let user = {
  type: 'student'
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user : props.user }
    }
    render(){
      return(
        <div>
        <Navigation />
        <InfoBar user={user}/>
        <Menu user={user}/>
        </div>
      )
    }
}
export default App

import React from "react"
import ReactDom from "react-dom"
import Navigation from "./NavBar/Navigation.js"
import InfoBar from "./InfoBar/App.js"
import Menu from "./MenuBar/App.js"
import Footer from "./Footer/App.js"
import {Route,BrowserRouter as Router,Switch,Link} from "react-router-dom"
let user = {
  type:'committee'
}
function Main(){
  return(
    <div>
    <InfoBar user={user}/>
    <Menu user={user}/>
    </div>
  )
}
function Home(){
  return(
    <div>
     Welcome
    </div>
  )
}
function Login(){
  return(
    <div>
    Login First
    </div>
)}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user : props.user }
    }
    render(){
    return(
      <Router>
      <Navigation />
        <Switch>
          <Route exact path='/complaint' component={Main} />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default App

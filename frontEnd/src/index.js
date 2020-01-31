
import React from 'react'
import ReactDom from "react-dom"
import App from "./components/App.js"
import "bootstrap/dist/css/bootstrap.min.css";
import {Router,Route,Link,IndexRoute,hashHistory,browserHistory} from 'react-router'

function Index(){
  return(
    <div>
      <App/>
    </div>
  )
}


ReactDom.render(<Index />,document.getElementById("root"))

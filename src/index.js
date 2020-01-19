import React from 'react'
import ReactDom from "react-dom"
import App from "./components/App.js"
let user = {
  type:'student'
}

function Index(){
  return(
    <div>
      <App/>
    </div>
  )
}
ReactDom.render(<Index />,document.getElementById("root"))

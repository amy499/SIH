<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import MaterialIcon, { colorPalette } from "material-icons-react";
import "./index.css";

import Layout from "./Layout";

ReactDOM.render(<Layout />, document.getElementById("root"));
=======
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
>>>>>>> 5da333df0fe0d04cb02dfcee02d9d66c4fc3cc21
=======
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
>>>>>>> d673a05d1c8d618b73cec0fc0da3a01da7470a89

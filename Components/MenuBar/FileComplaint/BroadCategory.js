import React,{ Component } from "react"
import "./BroadCategory.css"
class BroadCategory extends Component{
    constructor(props){
      super(props)
    }
    render(){
      let optionList = this.props.data.map((category)=>
    {
      return <option
              key={category.id}
              value={category.title}>
              {category.title}</option>
    })
      return(
        <div>
        <select name="BroadCategory"
        className="BroadCategory">

        <option selected disabled>
        Select the appropriate level for your complaint
        </option>
        {optionList}
        </select>
        </div>
      )
    }
}
export default BroadCategory

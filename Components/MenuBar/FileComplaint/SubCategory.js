import React, { Component }from "react"
import "./SubCategory.css"
class SubCategory extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let optionList = this.props.data.map(category =>{
      return <option key={category.id} value={category.title}>{category.title}</option>
    })
    return(
      <select name="SubCategory" className="SubCategory">
      <option selected disabled>
      Select the committee to address</option>  {optionList}
      </select>
    )
  }
}
export default SubCategory

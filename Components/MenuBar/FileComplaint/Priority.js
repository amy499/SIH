import React, { Component } from "react"

class Priority extends Component{
  constructor(props){
    super(props)
    this.styles={
      marginTop:'60px',
      width: '100%',
      height:'30px',
      fontSize: '20px',
      marginBottom: '10px',
      textAlign: 'center',
      border: 'none',
      backgroundColor: 'white',

    }
  }
    render(){
    let optionList = this.props.data.map(priority=>{
      return <option key={priority.value}
              value={priority.value}>
              {priority.title}</option>
    })
    return(
      <select name="priority" style={this.styles}>
      <option selected disabled>
        Please suggest a priority level for the complaint
        </option>
        {optionList}
      </select>
    )
  }
}

export default Priority

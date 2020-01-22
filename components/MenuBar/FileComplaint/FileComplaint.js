import React from "react"
import "./FileComplaint.css"
import BroadCategory from "./BroadCategory.js"
import SubCategory from "./SubCategory.js"
import TypeOfComplaint from "./TypeOfComplaint.js"
import ComplaintArea from "./ComplaintArea.js"
import Priority from "./Priority.js"
let broadCategory = [
  {id:1,title:'University'},
  {id:2,title:'Institute'},
  {id:3,title:'Department'},
]
let subCategory = [
  {id:1,title:'Examination'},
  {id:2,title:'Education'},
  {id:3,title:'Infrastructure'},
  {id:4,title:'Ladies Grievance Cell'},
  {id:5,title:'Miscellaneous'}
]
let priority = [
  {
    value : 1,
    title: "Urgent"
  },
  {
    value:2,
    title: "High"
  },
  {value:3,title:"Moderate"},
  {value:4,title:"Low"}
]
let typeOfComplaint=['Private','Public']
class FileComplaint extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      BroadCategory : "",
      SubCategory: "",
      TypeOfComplaint: "Private",
      Subject: "",
      Complaint: "",
      priority:"",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }
  handleChange(event){
    let {name,value} = event.target
    this.setState({
      [name] : value
    })
    console.log(this.state)
  }
  handleSubmit(){
    console.log(this.state)
  }
  render(){
    return(
      <div>
      <div className="FileComplaint Shadow">
      <form method="post" action="http://localhost:5000/complaint"onChange={this.handleChange}>
        <BroadCategory data={broadCategory} />
        <SubCategory data={subCategory} />
        <TypeOfComplaint data={typeOfComplaint} />
        <ComplaintArea />
        <Priority data={priority}/>
        <button  type="Submit">File Complain</button>
      </form>
      </div>
      <div className="FileComplaint2 Shadow">
      <table style={{width:'100%', color: "black"}}>
        <tr>
          <th>Committee Name</th>
          <th>Committee Description</th>
        </tr>
        <tr>
        <td>
        Academia
        </td>
        <td>
          Handling Education related queries
        </td>
        </tr>
        <tr>
        <td>
          Finance
        </td>
        <td>
        Contact us regarding any Financial issues
        </td>
        </tr>
        <tr>
        <td>
          Miscellaneous
        </td>
        <td>
            Not sure what your sub category should be.
        </td>
        </tr>
        <tr>
        <td>
          Infrastructure
        </td>
        <td>
          Report any Infrastructure related problems to us.
        </td>
        </tr>
        <tr>
        <td>Socio-Cultural</td><td>Facing troubles with the crowd at our college then report to us.</td>
        </tr>
        <tr><td>Female Grievance</td><td>Inorder to maintain safety and security of the girls and women, a cell has been constitued, for redressal of their grievances.</td>
        </tr>
        <tr><td>Addmission</td><td>Contact us for any admission related queries</td>
        </tr>
      </table>
      </div>
      </div>
    )
  }
}

export default FileComplaint

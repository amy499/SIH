import React from "react";
import "./ListComponentArrayStudent";
import "./ListComponentStudent.css";
import { Card } from "react-bootstrap";

//Smallest child component
//This will ensure how each list item taken from ListComponentArray looks

//Each component is a card

class ListComponentStudent extends React.Component {
  constructor(props){
    super(props)
  }
  getStyles(component) {
    if (component.priority == 1 ) {
      return { backgroundColor: "#FFBABA", borderLeft: "5px solid #CD2828" };
    } else if (component.priority == 2 ) {
      return { backgroundColor: "#FFBAA4", borderLeft: "5px solid #CE3606" };
    } else if (component.priority == 3 ) {
      return { backgroundColor: "#D2FFAF", borderLeft: "5px solid #669641" };
    } else if (component.priority == 4 ) {
      return { backgroundColor: "#D2ECFF", borderLeft: "5px solid #8ACAF9" };
    }
  }

  render() {
    if(this.props.type=='student'){return (
        <div>
          {(
            <Card
              className="ml-lg "
              className="card"
              style={this.getStyles(this.props.component)}
            >
              <Card.Title className="ml-3 ml-lg ml-md ml-sm">
                Subject: {this.props.component.Subject}
              </Card.Title>

              <Card.Body>
                <Card.Link href="#" className=" float-right">
                  Edit
                </Card.Link>
                <Card.Link href="#" className=" float-right">
                  Delete
                </Card.Link>
              </Card.Body>
            </Card>
          )}
        </div>
      )}
    else{
      return(  <div>
          {(
            <Card
              className="ml-lg "
              className="card"
              style={this.getStyles(this.props.component)}
            >
              <Card.Title className="ml-3 ml-lg ml-md ml-sm">
                Subject: {this.props.component.Subject}
              </Card.Title>

              <Card.Body>
                <Card.Link href="#" className=" float-right">
                  Forward
                </Card.Link>
                <Card.Link href="#" className=" float-right">
                  Close
                </Card.Link>
              </Card.Body>
            </Card>
          )}
        </div>)

    }

  }
}

export default ListComponentStudent; //For using it in the Main Component

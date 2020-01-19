import React from "react";
import "./ListComponentArrayCommittee";
import "./ListComponentCommittee.css";
import { Card } from "react-bootstrap";

//Smallest child component
//This will ensure how each list item taken from ListComponentArray looks

//Each component is a card

class ListComponentCommittee extends React.Component {
  getStyles(component) {
    if (component.Priority == 1 && component.User == "committeeMember") {
      return { backgroundColor: "#FFBABA", borderLeft: "5px solid #CD2828" };
    } else if (component.Priority == 2 && component.User == "committeeMember") {
      return { backgroundColor: "#FFBAA4", borderLeft: "5px solid #CE3606" };
    } else if (component.Priority == 3 && component.User == "committeeMember") {
      return { backgroundColor: "#D2FFAF", borderLeft: "5px solid #669641" };
    } else if (component.Priority == 4 && component.User == "committeeMember") {
      return { backgroundColor: "#D2ECFF", borderLeft: "5px solid #8ACAF9" };
    }
  }

  render() {
    return (
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
    );
  }
}

export default ListComponentCommittee; //For using it in the Main Component

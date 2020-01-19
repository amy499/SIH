import React from "react";
//Child Component and Parent to ListComponent
import "./MainComponentStudent.css";
import ListComponentStudent from "./ListComponentStudent/ListComponentStudent";
import ListComponentArrayStudent from "./ListComponentStudent/ListComponentArrayStudent";
import { ListGroup, Modal, Button, Container } from "react-bootstrap";
import CommentStudent from "./CommentStudent/CommentStudent";

const styles = {
  fontSize: 24
};

class MainComponentStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false, //To show the modal,
      isComment: false, //To show comment input
      selectedComponent: {},
      someArray: {},
    };
    this.handleModal = this.handleModal.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  handleModal = component => {
    console.log(component);

    this.setState({ show: true, selectedComponent: component });
  };

  componentDidMount() {
    let someArray;
    //Lifecycle to fetch data from the data base
    fetch("http://172.16.27.65:5000/complaint")
      .then(response => response.json())
      .then(data => {
        return { someArray: data };
      });
    console.log(someArray);
  }

  render() {
    let buttontext = this.state.isComment ? "Submit" : "Comment";
    return (
      <Container>
        <ListGroup variant="flush">
          {ListComponentArrayStudent.map(component => (
            <ListGroup.Item
              key={component.id}
              onClick={() => this.handleModal(component)} //Show only gets true here
            >
              <ListComponentStudent
                component={component}
              ></ListComponentStudent>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Modal
          show={this.state.show}
          onHide={() =>
            this.setState({
              show: false
            })
          }
          aria-labelledby="contained-modal-title-vcenter "
          centered
          size="lg"
          styles={{ borderRadius: 20 }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Subject : {this.state.selectedComponent.Subject}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>{this.state.selectedComponent.Description}</Modal.Body>

          <div className="box" disabled>
            Solution :None
          </div>

          <CommentStudent isComment={this.state.isComment} />
          <Modal.Footer>
            <Button className="button" onClick={this.handleComment}>
              {buttontext}
            </Button>

            <Button
              className="button"
              onClick={() => {
                this.setState({
                  show: false
                });
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
export default MainComponentStudent;

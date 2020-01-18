import React from "react";
//Child Component and Parent to ListComponent
import "./MainComponentStudent.css";
import ListComponentStudent from "./ListComponentStudent/ListComponentStudent";
import ListComponentArrayStudent from "./ListComponentStudent/ListComponentArrayStudent";
import { ListGroup, Modal, Button, Container } from "react-bootstrap";
import { Thumbnail } from "react-bootstrap";

const styles = {
  fontSize: 24
};

class MainComponentStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false, //To show the modal,
      selectedComponent: {},
      someArray: {},
      filed: this.props.filed,
      opened: this.props.opened,
      closed: this.props.closed
    };
    this.handleModal = this.handleModal.bind(this);
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
    return (
      <Container>
        <ListGroup variant="flush">
          {ListComponentArrayStudent.map(component => (
            <ListGroup.Item
              key={component.id}
              onClick={() => this.handleModal(component)} //Show only gets true here
            >
              <ListComponentStudent
                filed={this.state.filed}
                opened={this.state.opened}
                closed={this.state.closed}
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
          <Modal.Footer>
            <Button className="button">Comment</Button>
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

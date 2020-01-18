import React from "react";
//Child Component and Parent to ListComponent

import ListComponent from "./ListComponent/ListComponent.js";
import ListComponentArray from "./ListComponent/ListComponentArray";
import {
  ListGroup,
  Modal,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  InputGroup
} from "react-bootstrap";

const styles = {
  fontSize: 24
};

class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false, //To show the modal,
      selectedComponent: {}
    };
    this.handleModal = this.handleModal.bind(this);
  }
  handleModal = component => {
    console.log(component);

    this.setState({ show: true, selectedComponent: component });
  };
  render() {
    return (
      <Container>
        <ListGroup variant="flush">
          {ListComponentArray.map(component => (
            <ListGroup.Item
              key={component.id}
              onClick={() => this.handleModal(component)} //Show only gets true here
            >
              <ListComponent component={component}></ListComponent>
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
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Subject : {this.state.selectedComponent.Subject}
            </Modal.Title>
            <Modal.Title className="ml-auto ">
              <InputGroup className="mb-3">
                <DropdownButton
                  as={InputGroup.Prepend}
                  variant="outline-secondary"
                  id="input-group-dropdown"
                  className="justify-content-end"
                >
                  <Dropdown.Item href="#">Lower Priority</Dropdown.Item>
                  <Dropdown.Item href="#">
                    Forward to another committee
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    Forward to Higher authority
                  </Dropdown.Item>
                  <Dropdown.Divider />
                </DropdownButton>
              </InputGroup>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>{this.state.selectedComponent.Description}</Modal.Body>
          <Modal.Footer>
            <Button>Comment</Button>
            <Button
              onClick={() => {
                this.setState({
                  show: false
                });
              }}
            >
              Close
            </Button>
            <Button>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
export default MainComponent;

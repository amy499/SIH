import React from "react";
//Child Component and Parent to ListComponent
import style from "./MainComponentCommittee.css";

import ListComponentCommittee from "./ListComponentCommittee/ListComponentCommittee.js";
import ListComponentArrayCommittee from "./ListComponentCommittee/ListComponentArrayCommittee";
import {
  ListGroup,
  Modal,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  InputGroup
} from "react-bootstrap";
import CommentCommittee from "../CommentCommittee/CommentCommittee";

const styles = {
  fontSize: 24
};

class MainComponentCommitee extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false, //To show the modal,
      selectedComponent: {},
      isComment: false
    };
    this.handleModal = this.handleModal.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }
  handleModal = component => {
    console.log(component);

    this.setState({ show: true, selectedComponent: component });
  };

  handleComment() {
    this.setState(prevState => {
      return {
        isComment: !prevState.isComment
      };
    });
  }

  render() {
    let buttontext = this.state.isComment ? "Submit" : "Comment";
    return (
      <Container>
        <ListGroup variant="flush">
          {ListComponentArrayCommittee.map(component => (
            <ListGroup.Item
              key={component.id}
              onClick={() => this.handleModal(component)} //Show only gets true here
            >
              <ListComponentCommittee
                component={component}
              ></ListComponentCommittee>
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
          className="modal"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Subject : {this.state.selectedComponent.Subject}
            </Modal.Title>
            <Modal.Title className="ml-auto ">
              <InputGroup className="mb-3">
                <DropdownButton
                  as={InputGroup.Prepend}
                  variant="outline-secondary"
                  id="input-group-dropdown"
                  className="dropdown"
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

          <CommentCommittee isComment={this.state.isComment} />
          <Modal.Footer>
            <Button className="button" onClick={this.handleComment}>
              {buttontext}
            </Button>
            <Button
              onClick={() => {
                this.setState({
                  show: false
                });
              }}
              className="button"
            >
              Close
            </Button>
            <Button className="button">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
export default MainComponentCommitee;

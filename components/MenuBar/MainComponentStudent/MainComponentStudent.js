import React from "react";
//Child Component and Parent to ListComponent
import "./MainComponentStudent.css";
import ListComponentStudent from "./ListComponentStudent/ListComponentStudent";
import ListComponentArrayStudent from "./ListComponentStudent/ListComponentArrayStudent"

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
      loading: true,
      data : {},
      status:''
    };
    this.handleModal = this.handleModal.bind(this);
  }
  async componentDidMount(){
    let url ="http://localhost:5000/complaint/"+this.props.type
    const response = await fetch(url);
    const data = await response.json();
    this.state.data = data;
    this.setState({loading:false})
    console.log(this.state.data)
  }
  handleModal = component => {
    this.setState({ show: true, selectedComponent: component,status:'Opened' });
    let url ="http://localhost:5000/complaint/edit";
    if (component.status == 'Filed' && this.props.user!='student'){  const response = fetch(url,{
        method:'POST',
        mode:'cors',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(component)
      })
    }

  };

  render() {
    return (

      <Container>
      {this.state.loading? <div>Loading...</div>: <ListGroup variant="flush">
          {this.state.data.map(component => (
            <ListGroup.Item
              key={component.id}
              onClick={() => this.handleModal(component)} //Show only gets true here
            >
              <ListComponentStudent
                component={component}
              ></ListComponentStudent>
            </ListGroup.Item>
          ))}
        </ListGroup>}


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

          <Modal.Body>{this.state.selectedComponent.Complaint}</Modal.Body>
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

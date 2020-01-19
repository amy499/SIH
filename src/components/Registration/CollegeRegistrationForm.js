import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
class CollegeRegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      universityname: "",
      collegename: "",
      collegedomain: "",
      emailId: ""
    };
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicUniversityName">
            <Form.Label>University Name</Form.Label>
            <br />
            <Form.Control type="text" placeholder="Enter university name" />
          </Form.Group>

          <Form.Group controlId="formBasicCollegeName">
            <Form.Label>College Name</Form.Label>
            <br />
            <Form.Control
              type="College Name"
              placeholder="Enter college name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicCollegeDomain">
            <Form.Label>College Domain</Form.Label>
            <br />
            <Form.Control
              type="College Domain"
              placeholder="Enter college domain"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <br />
            <Form.Control
              type="College Email"
              placeholder="Enter college email-id"
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default CollegeRegistrationForm;

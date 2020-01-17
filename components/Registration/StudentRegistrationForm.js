import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
class StudentRegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      studentname: "",
      universityname: "",
      collegename: "",
      collegedomain: "",
      emailId: "",
      grno: "",
      mobileno: ""
    };
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicStudentName">
            <Form.Label>Name</Form.Label>
            <br />
            <Form.Control type="text" placeholder="Enter fullname" />
          </Form.Group>

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

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <br />
            <Form.Control
              type="College Email"
              placeholder="Enter college email-id"
            />
          </Form.Group>

          <Form.Group controlId="formBasicGRNo">
            <Form.Label>GR No.</Form.Label>
            <br />
            <Form.Control type="GR No" placeholder="Enter GR No." />
          </Form.Group>

          <Form.Group controlId="formBasicMobileNo">
            <Form.Label>Mobile No</Form.Label>
            <br />
            <Form.Control type="Mobile No" placeholder="Enter mobile number" />
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

export default StudentRegistrationForm;

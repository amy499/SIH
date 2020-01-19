import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

class NavigationCommittee extends React.Component {
  render() {
    return (
      <Navbar fixed="sticky" expand="xxl" bg="dark" variant="dark">
        <Navbar.Brand href="#">Student Grievance System</Navbar.Brand>

        <Nav.Link href="#" className="ml-auto">
          Home
        </Nav.Link>
        <Nav.Link href="#">Profile</Nav.Link>
        <Nav.Link href="#">Notification</Nav.Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto justify-content-end ">
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">FAQs</Nav.Link>
            <Nav.Link href="#">Reference Complaints</Nav.Link>
            <Nav.Link href="#">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationCommittee;

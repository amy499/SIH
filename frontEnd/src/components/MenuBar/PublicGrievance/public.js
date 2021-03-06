import React, { Component } from "react";
import style from "./public.css";
import Modal from "react-modal";
import listData from "./listData";
import { Alert } from "react-alert";

class PublicGrievanceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      signup: false,
      handle: false,
      signedby: this.props.signedby,
      startdate: this.props.startdate,
      solution: this.props.solution
    };
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onClickSignUp = this.onClickSignUp.bind(this);
    this.onClickSaveChanges = this.onClickSaveChanges.bind(this);
    this.onClickHandleComplaint = this.onClickHandleComplaint.bind(this);
    this.onClickSaveComplaint = this.onClickSaveComplaint.bind(this);
  }
  onOpen = () => {
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  onClickSignUp = () => {
    this.setState(prevState => {
      return {
        signup: !prevState.signup
      };
    });
    if (this.state.signup === false) {
      this.setState(prevState => {
        return {
          signedby: prevState.signedby + 1
        };
      });
    } else {
      this.setState(prevState => {
        return {
          signedby: prevState.signedby - 1
        };
      });
    }
  };

  onClickHandleComplaint = () => {
    this.setState(prevState => {
      return {
        handle: !prevState.handle
      };
    });
  };

  onClickSaveChanges = () => {
    alert("Changes Saved");
  };

  onClickSaveComplaint = () => {
    alert("Changes Saved");
    this.setState(prevState => {
      return {
        handle: !prevState.handle
      };
    });
  };
  render() {
    if (this.props.user.type === "student") {
      return (
        <div className="Publiccontainer">
          <button onClick={this.onOpen} className="button content">
            {this.props.subject}
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/growth-1438174-1216130.png"
              className="growth"
            />
            <div className="signedBy">{this.state.signedby}</div>
          </button>
          <Modal isOpen={this.state.open} onRequestClose={this.onClose}>
            <h2 className="modalHeader">
              <img
                src="https://svgsilh.com/svg_v2/1085695.svg"
                className="icon"
              />
              {this.state.signedby} people have signed up for it
            </h2>
            <h4 className="date">Start date: {this.state.startdate}</h4>
            <br />
            <h4 className="modalBody">
              <strong>SUB </strong> :- {this.props.subject}
              <br />
            </h4>
            <br />
            <p className="modalBody">
              Respected Sir/Madam, <br />
              {this.props.complaintcontent}
              <br /> Thanking in Anticipation
              <br />
            </p>
            <br />
            <h4 className="modalBody">
              <strong>Solution: </strong>
              <div className="modalSolution">{this.props.solution}</div>
            </h4>
            <br />

            {!this.state.signup ? (
              <div>
                {" "}
                <button
                  onClick={this.onClickSignUp}
                  className="signUp"
                  id="signup"
                >
                  Sign Up
                </button>
              </div>
            ) : (
              <div>
                <p className="alignthis">You signed the public grievance</p>
                <button
                  onClick={this.onClickSignUp}
                  className="signUp"
                  id="signup"
                >
                  SignOut
                </button>
              </div>
            )}
          </Modal>
        </div>
      );
    } else {
      return (
        <div className="container">
          <button onClick={this.onOpen} className="button content">
            {this.props.subject}
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/growth-1438174-1216130.png"
              className="growth"
            />
            <div className="signedBy">{this.state.signedby}</div>
          </button>
          <Modal isOpen={this.state.open} onRequestClose={this.onClose}>
            <h2 className="modalHeader">
              <img
                src="https://svgsilh.com/svg_v2/1085695.svg"
                className="icon"
              />
              {this.state.signedby} people have signed up for it
            </h2>
            <h4 className="date">Start date: {this.state.startdate}</h4>
            <br />
            <h4 className="modalBody">
              <strong>SUB </strong> :- {this.props.subject}
              <br />
            </h4>
            <br />
            <p className="modalBody">
              Respected Sir/Madam, <br />
              {this.props.complaintcontent}
              <br /> Thanking in Anticipation
              <br />
            </p>
            <br />

            {this.state.handle ? (
              <div>
                <strong>Solution: </strong>
                <br />
                <input type="text" className="solutionText" />
                <br />
                <button
                  className="committeeButton"
                  onClick={this.onClickSaveComplaint}
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div>
                <strong>Solution: </strong>
                <br />{" "}
                <button
                  className="committeeButton"
                  onClick={this.onClickHandleComplaint}
                >
                  Handle Complaints
                </button>
                <button
                  className="committeeButton"
                  onClick={this.onClickSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            )}
          </Modal>
        </div>
      );
    }
  }
}

export default PublicGrievanceList;

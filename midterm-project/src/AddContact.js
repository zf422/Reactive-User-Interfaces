import React, { Component } from "react";
import "./AddContact.css";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      address: "",
      phone: "",
      email: ""
    };

    this.newFirst = this.newFirst.bind(this);
    this.newLast = this.newLast.bind(this);
    this.newAddress = this.newAddress.bind(this);
    this.newPhone = this.newPhone.bind(this);
    this.newEmail = this.newEmail.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.closeClicked = this.closeClicked.bind(this);
  }

  newFirst(e) {
    this.setState({
      first: e.target.value
    });
  }

  newLast(e) {
    this.setState({
      last: e.target.value
    });
  }

  newAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  newPhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  newEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  buttonClicked() {
    this.props.onClick(
      this.state.first,
      this.state.last,
      this.state.address,
      this.state.phone,
      this.state.email
    );
    this.setState({
      first: "",
      last: "",
      address: "",
      phone: "",
      email: ""
    });
  }

  closeClicked() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="AddContact">
        <input
          type="text"
          placeholder="First Name"
          value={this.state.first}
          onChange={this.newFirst}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={this.state.last}
          onChange={this.newLast}
        />
        <input
          type="text"
          placeholder="Address"
          value={this.state.address}
          onChange={this.newAddress}
        />
        <input
          type="text"
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.newPhone}
        />
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.newEmail}
        />
        <button onClick={this.buttonClicked}>Add Contact</button>
        <p className="Cancel" onClick={this.closeClicked}>
          Cancel
        </p>
      </div>
    );
  }
}

export default AddContact;

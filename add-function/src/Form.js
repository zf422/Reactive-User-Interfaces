import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name: '',
      email: ''
    };

    this.newName=this.newName.bind(this);
    this.newEmail=this.newEmail.bind(this);
    this.buttonClicked=this.buttonClicked.bind(this);
  }


  newName(e) {
    this.setState({
      name: e.target.value
    })
  }

  newEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  buttonClicked() {
    this.props.onClick(this.state.name, this.state.email);
    this.setState({
      name: '',
      email: ''
  });
}


  render() {
      return (
      <div className="Form">
<input type="text" placeholder="Name" value={this.state.name} onChange={this.newName}/>
<input type="email" placeholder="Email" value={this.state.email} onChange={this.newEmail}/>
<button onClick={this.buttonClicked}>Add Person</button>
      </div>
    );
  }
}

export default Form;

import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      contacts: [
        {name: 'Person 1', email: 'person1@gmail.com'},
         {name: 'Person 2', email: 'person2@gmail.com'},
         {name: 'Person 3', email: 'person3@gmail.com'}
      ]
    };

    this.addPerson=this.addPerson.bind(this);
  }

  addPerson(name, email) {
    let copy = this.state.contacts.slice();
    copy.push({
      name: name,
      email: email
    });

    this.setState({
      contacts: copy
    });
  }

  render() {
    const list = this.state.contacts.map( contacts => <p key={contacts.email}>{contacts.name} - {contacts.email} </p>)

    return (
      <div className="App">
        <h2> List </h2>
        {list}
        <Form onClick={this.addPerson} />
      </div>
    );
  }
}

export default App;

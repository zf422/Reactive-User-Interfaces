import React, { Component } from 'react';
import './App.css';

class Output extends Component {
  render() {
      return (
        <div className="Output">
        <h2> {this.props.name}</h2>
        <p> {this.props.location}</p>
        <p>{this.props.time}</p>
        </div>

    );
  }
}

export default Output;

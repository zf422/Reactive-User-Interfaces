import React, { Component } from 'react';
import './Output.css';

class Output extends Component {
  render() {
    return (
      <div className="Output">
      {this.props.content}
      </div>
    );
  }
}

export default Output;

import React, { Component } from 'react';
import './App.css';
import Input from './Input';

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

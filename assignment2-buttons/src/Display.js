import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="display">
You have selected: {this.props.displayLabel}</div>
    );
  }
}

export default Display;

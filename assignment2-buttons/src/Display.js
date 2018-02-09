import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="display">
{this.props.displayContent}
      </div>
    );
  }
}

export default Display;

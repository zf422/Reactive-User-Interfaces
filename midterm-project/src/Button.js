import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
  super(props);
  this.onClick=this.onClick.bind(this);
}

  onClick(label) {
    this.props.onClick(this.props.label);
  }

  render() {
    return (
      <div className="Button">
      <button onClick={this.onClick}>{this.props.label}</button>
      </div>
    );
  }
}

export default Button;

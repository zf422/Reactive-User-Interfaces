import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.buttonPressed=this.buttonPressed.bind(this);

  }

  buttonPressed(text){
    this.props.onClick(this.props.displayText)
  }

  render() {
    return (
      <div className="App">
<button className="button" onClick={this.buttonPressed}>{this.props.label}</button>
      </div>
    );
  }
}

export default Button;

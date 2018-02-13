import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.buttonPressed=this.buttonPressed.bind(this);

  }

  buttonPressed(label){
    this.props.onClick(this.props.label)
  }

  render() {
    const classes = this.props.activeText ? 'activeText' : 'inactiveText';
    return (
      <div className="App">
<button className={'button ' + classes} onClick={this.buttonPressed}>{this.props.label}</button>
      </div>
    );
  }
}

export default Button;

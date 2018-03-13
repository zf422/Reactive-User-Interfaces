import React, { Component } from 'react';
import './Checkbox.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.onCheck=this.onCheck.bind(this);
  }


onCheck(e) {
  this.props.onChange(e.target.checked);
}

  render() {
    return (
      <div className="Checkbox">
      <input type="checkbox" onChange={this.onCheck} />{this.props.label}
      </div>
    );
  }
}

export default Checkbox;

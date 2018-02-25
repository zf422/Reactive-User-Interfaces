import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  constructor(props){
    super(props);
    this.onChange=this.onChange.bind(this);
  }

  onChange(e){
    let label = this.props.label
    let value = e.target.value
    this.props.onChange(label, value);
  }
      render() {
        return (
          <div className="Input">
          <h3>{this.props.label}</h3>
            <input type="text" onChange={this.onChange} value={this.props.value}></input>
          </div>
        );
      }
    }


export default Input;

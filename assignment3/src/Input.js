import React, { Component } from 'react';
import './Input.css';
import Output from './Output';

class Input extends Component {
  constructor(props){
    super(props);
    this.onChange=this.onChange.bind(this);
  }

  onChange(e){
    let value = e.target.value;
    let label = e.target.label;
    this.props.onChange(value, label);
  }
      render() {
        return (
          <div className="Input">
          <h2>{this.props.title}</h2>
            <input type="text" onChange={this.onChange} value={this.props.message} label={this.props.title}></input>
          </div>
        );
      }
    }


export default Input;

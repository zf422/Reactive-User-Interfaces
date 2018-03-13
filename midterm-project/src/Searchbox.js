import React, { Component } from 'react';
import './Searchbox.css';

class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.onChange=this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="Searchbox">
    <input type="text" placeholder="Search" onChange={this.onChange} />
      </div>
    );
  }
}

export default Searchbox;

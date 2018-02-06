import React, { Component } from 'react';
import './Article.css';

class App extends Component {
  render() {

    return (
      <div className="App">

    <div className="Article">
      <p className="date">{this.props.date}</p>
      <div className="text">
      <h1 className="title">{this.props.title}</h1>
      <p className="brief">{this.props.brief}</p>
      <p className="author">By <span>{this.props.author}</span></p>
      </div>
      <img className="picture" src={this.props.image} alt="" />
      </div>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

class App extends Component {
  constructor(props){
    super(props);

  this.state = {
  text: ''
};
    this.buttonPressed=this.buttonPressed.bind(this);
  }

    buttonPressed(displayText){
      this.setState({
    text: displayText
  });
}
  render() {
    return (
      <div className="App">
<Button label="First Button" displayText="You have selected: First Button" onClick={this.buttonPressed} />
<Button label="Second Button" displayText="You have selected: Second Button" onClick={this.buttonPressed} />
<Button label="Third Button" displayText="You have selected: Third Button" onClick={this.buttonPressed} />
<div className="container">
<Display displayContent={this.state.text} />
</div>
      </div> );
  }
}

export default App;

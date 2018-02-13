import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

class App extends Component {
  constructor(props){
    super(props);

  this.state = {
  activeText: ''
};
    this.buttonPressed=this.buttonPressed.bind(this);
  }

    buttonPressed(label){
      this.setState({
    activeText: label
  });
}
  render() {
    const buttonNames = ['First Button', 'Second Button', 'Third Button'];
    const buttons = buttonNames.map((label, i) => {
        return <Button onClick={this.buttonPressed} label={label} key={i} activeText={this.state.activeText === label} />
      });
    return (
      <div className="App">
{buttons}
<div className="container">
<Display displayLabel={this.state.activeText} />
</div>
      </div> );
  }
}

export default App;

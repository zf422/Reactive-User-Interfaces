import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Output from './Output';

class App extends Component {
constructor(props){
  super(props);
  this.newChange=this.newChange.bind(this);
      this.state = {
        label: '' ,
        value: '',
      };
}

newChange(label, value){
  this.setState({
    label: label,
    value: value,
  });

            let evName = '';
            let evLocation = '';
            let evTime = '';
    }

  render() {
    if (this.state.label === "Event Name"){
      this.evName = this.state.value;
    }

    if (this.state.label === "Location"){
      this.evLocation = this.state.value;
    }

    if (this.state.label === "Time"){
      this.evTime= this.state.value;
    }

    return (
      <div className="App">
      <div className="Input">
        <Input onChange={this.newChange} label="Event Name" />
        <Input onChange={this.newChange} label="Location"/>
        <Input onChange={this.newChange} label="Time"/>
</div>

<Output name={this.evName}
location={this.evLocation}
time= {this.evTime} />

</div>

    );
  }
}

//not sure why this is not working :(

App.defaultProps = {
  value: {
    "Event name": "IMA Spring Show 2018",
    Location: "NYU Shanghai, 9th floor",
    Time: "May 11th, 5pm - 7pm",
  }

};

export default App;

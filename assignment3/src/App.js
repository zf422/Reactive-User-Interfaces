import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Output from './Output';

class App extends Component {
constructor(props){
  super(props);
  this.newChange=this.newChange.bind(this);
      this.state = {
        message: ''
      };
}

    newChange(value, label){
      let message = this.state.message;
      message = value;
      this.setState({
        message
      });
    }

  render() {
    const inputFields = [{title:'Event Name'}, {title: 'Location'}, {title: 'Time'}];
    const input = inputFields.map((input, i) => {
        return <Input onChange={this.newChange} title={input.title} message={this.state.message} key={i} />
      });
    return (
      <div className="App">
      <div className="Input">
        {input}
</div>
<Output content={this.state.message}/>
</div>

    );
  }
}

export default App;

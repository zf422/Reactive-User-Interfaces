import React, { Component } from 'react';
import picture1 from './picture 1.JPG';
import picture2 from './picture 2.JPG';
import picture3 from './picture 3.JPG';
import Article from './Article';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Article
      date = "Jan. 30, 2018"
      title="Kodak's Dubious Blockchain Gamble"
      brief="What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck."
      author="KEVIN ROOSE"
      image= "https://static01.nyt.com/images/2018/01/30/business/30ROOSE-3/30ROOSE-3-superJumbo.jpg"
      />

      <Article
      date= "Jan. 30, 2018"
      title="Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel"
      brief="Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday."
      author="CHRIS HORTON"
      image="https://static01.nyt.com/images/2018/01/31/world/31taiwan-1/31taiwan-1-master768.jpg"
      />

      <Article
      date= "Jan. 29, 2018"
      title="New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon"
      brief="Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy."
      author="BRAD PLUMER"
      image="https://static01.nyt.com/images/2018/01/30/climate/30CLI-NEWJERSEY/merlin_132366125_604a2b1f-44d1-4883-b389-fedbffcf738f-master768.jpg"
      />
</div>
    );
  }
}

export default App;

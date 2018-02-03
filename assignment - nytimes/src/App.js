import React, { Component } from 'react';
import picture1 from './picture 1.JPG';
import picture2 from './picture 2.JPG';
import picture3 from './picture 3.JPG';
import './App.css';

class App extends Component {
  render() {
    const date1 = "Jan. 30, 2018";
    const title1="Kodak's Dubious Blockchain Gamble";
    const brief1="What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionizing digital rights management or trying to make a quick buck.";
    const author1="KEVIN ROOSE";

    const date2 = "Jan. 30, 2018";
    const title2="Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel";
    const brief2="Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.";
    const author2="CHRIS HORTON";

    const date3 = "Jan. 29, 2018";
    const title3="New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon";
    const brief3="Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.";
    const author3="BRAD PLUMER";

    return (
      <div className="App">

      <div className="Article">
      <p className="date">{date1}</p>
      <div className="text">
      <h1 className="title">{title1}</h1>
      <p className="brief">{brief1}</p>
      <p className="author">By {author1}</p>
      </div>
      <img className="picture" src={picture1} alt="picture1" />
      </div>

    <div className="Article">
      <p className="date">{date2}</p>
      <div className="text">
      <h1 className="title">{title2}</h1>
      <p className="brief">{brief2}</p>
      <p className="author">By {author2}</p>
      </div>
      <img className="picture" src={picture2} alt="picture2" />
      </div>

      <div className="Article">
        <p className="date">{date3}</p>
        <div className="text">
        <h1 className="title">{title3}</h1>
        <p className="brief">{brief3}</p>
        <p className="author">By {author3}</p>
        </div>
        <img className="picture" src={picture3} alt="picture3" />
        </div>

      </div>
    );
  }
}

export default App;

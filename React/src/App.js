import React, { Component } from 'react';
import './App.css';

import {getRandomColor} from './functions/getRandomColor.js';

import {QuoteBox} from './Components/QuoteBox.js';

class App extends Component {
  state= {
    style: {
      backgroundColor: '#80ced6',
    },
    quotes: [],
    index: 0,
  };

  componentDidMount() {
    const url= 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          quotes: myJson.quotes,
        });
      })
      .catch((error) => console.log(error));
  }

  getNewQuote= () => {
    this.setState((prevState) => ({
      style: {
        backgroundColor: getRandomColor(),
      },
      index: (prevState.index + 1) % this.state.quotes.length,
    }));


  }

  render() {
    const backgroundColor= this.state.style.backgroundColor;
    const index= this.state.index;
    const myQuote= (this.state.quotes.length > 0)
      ? (this.state.quotes[index])
      : ('Nothing');

    return (
      <div id='app' className="App" style={this.state.style}>
        <QuoteBox color={backgroundColor} onQuoteChange={this.getNewQuote} quote={myQuote.quote} author={myQuote.author}/>
        <br/>
        <p className='RandomQuoteMachineAuthor'>by Peter Nguyen</p>
      </div>
    );
  }
}

export default App;

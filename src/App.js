import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {getRandomColor} from './functions/getRandomColor.js';

// Boostrap
import Button from 'react-bootstrap/Button';

import {QuoteBox} from './Components/QuoteBox.js';

class App extends Component {
  state= {
    style: {
      backgroundColor: 'brown',
      transition: 'backgroundColor 1s',
    },
  };

  handleColorChange= () => {
    this.setState({
      style: {
        backgroundColor: getRandomColor(),
        transition: 'backgroundColor 1s',
      },
    });


  }

  render() {
    const backgroundColor= this.state.backgroundColor;
    return (
      <div id='app' className="App" style={this.state.style}>
        <QuoteBox onQuoteChange={this.getNewQuote}/>
      </div>
    );
  }
}

export default App;

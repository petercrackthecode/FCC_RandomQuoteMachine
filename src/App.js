import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {getRandomColor} from './functions/getRandomColor.js';

// Boostrap
import Button from 'react-bootstrap/Button';

import {QuoteBox} from './Components/quote-box.js';

class App extends Component {
  state= {
      backgroundColor: 'brown'
  };

  handleColorChange= () => {
    this.setState({
      backgroundColor: getRandomColor()
    });
  }

  render() {
    const backgroundColor= this.state.backgroundColor;
    return (
      <div className="App" style={{backgroundColor: backgroundColor}}>
        <QuoteBox onColorChange={this.handleColorChange}/>
      </div>
    );
  }
}

export default App;

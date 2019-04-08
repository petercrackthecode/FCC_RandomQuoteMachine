import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

export class QuoteBox extends React.Component {
  render()  {
    return (
      <div id='quote-box' className='QuoteBox'>
        <div></div>
        <Button onClick={this.props.onQuoteChange}>Get new quote</Button>
      </div>
    );
  }
}

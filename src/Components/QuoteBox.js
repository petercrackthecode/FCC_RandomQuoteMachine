import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/QuoteBox.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export class QuoteBox extends Component {
  render()  {
    const style=  {
      backgroundColor: this.props.color,
      border: 'none',
    };

    const textColor=  {
      color: this.props.color,
    };

    return (
      <div id='quote-box' className='QuoteBox'>
        <div id='text' style={textColor}>
          <FontAwesomeIcon className='quote-left-icon' icon={faQuoteLeft}/>
          <span> {this.props.quote}</span>
          <FontAwesomeIcon className='quote-right-icon' icon={faQuoteRight}/>
        </div>
        <div id='author' style={textColor}>
          <span>- {this.props.author}</span>
        </div>
        <div className='button-container'>

          <a id='tweet-quote' href="https://twitter.com/intent/tweet">
            <Button className='button' style={style}>
              Tweet
              <img className='twitter-icon' alt='twitter icon' src='../images/twitter.png'/>
            </Button>
          </a>

          <Button style={style} id='new-quote' className='button' onClick={this.props.onQuoteChange}>Get new quote</Button>
        </div>
      </div>
    );
  }
}

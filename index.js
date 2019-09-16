import React, { Component } from 'react';
import { render } from 'react-dom';
import View from './View';
import RadioButton from './RadioButton';
import Routing from './Routing';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
  
    };
  }

  render() {
    return (
      <div>
       <View/>
       <Routing/>
       <RadioButton/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import { render } from 'react-dom';
import RadioButton from './RadioButton';
import View from './View';

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

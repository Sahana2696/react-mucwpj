import React ,{Component} from 'react';
import RadioButton from './RadioButton';

export default class CustomerInfo extends Component{
  render(){
    return(
      <div>
      <RadioButton/>
      <p><b>Searched Id:</b> 8416040 has the following information<br/>
      <b>Level Name:</b> 673573 Ontario Limited.<br/>
      <b>Global Level Id:</b><br/>
      <b>Country:</b> CA<br/>
      <b>Global Name:</b> 673573 Ontario Limited.<br/>
      <b>Level Id:</b>8416040<br/>
      </p>
      </div>
    )
  }
}
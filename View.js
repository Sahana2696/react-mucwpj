import React, { Component } from 'react';


export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check:"true"
    }
  }

  render() {
    return (
      <div>
        <div className="main">
          <h3 class="col-lg-4 pull-left" > FedEx Services</h3>
          <h3 class="col-lg-4"> Customer Pricing Map</h3>
          <h3 class="col-lg-4 pull-right" > Meenakshi Uppala</h3>
        </div>

        <div>
          <div className="well"> Search Option </div>
          <h5><b> Service Group Type</b></h5>
          <label>
            <input type="checkbox" defaultChecked={this.state.check} />
            All
          </label>
        </div>

        <div>

        </div>



      </div>
    )
  }
}
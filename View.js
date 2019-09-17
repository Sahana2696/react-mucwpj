import React, { Component } from 'react';


export default class View extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>

        <div className=" col-lg-12 main">

          <div className="col-lg-4">
            <h3 className="pull-left"> FedEx Services</h3>
          </div>
          <div className="col-lg-4">
            <h3> Customer Pricing Map</h3>
          </div>
          <div className="col-lg-4">
            <h3 className="pull-right"> Meenakshi Uppala</h3>
           
          </div>
         <div  className="pull-right cpm"><h4 > CPM Administrator</h4></div>
        </div>
      </div>
    )
  }
}
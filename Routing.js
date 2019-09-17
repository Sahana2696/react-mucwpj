import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import CustomerInfo from './CustomerInfo';
import PricingMap from './PricingMap';
import EanCount from './EanCount';
import CrossOpco from './CrossOpco';
import Search from './Search';


export default class Routing extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-3 col-main">
          <BrowserRouter>
            <div>
              <Link to="/Customer Information">Customer Information</Link>
              <Link to="/Pricing Map">Pricing Map</Link>
              <Link to="/EAN Count">EAN Count</Link>
              <Link to="/Cross Opco Price Type">Cross Opco Price Type</Link>
            </div>
            <div>
              <Switch>
                <Route exact path='/Customer Information' component={CustomerInfo} />
                <Route exact path='/Pricing Map' component={PricingMap} />
                <Route exact path='/EAN Count' component={EanCount} />
                <Route exact path='/Cross Opco Price Type' component={CrossOpco} />
                <Route exact path='/Search Options' component={Search}/>
              </Switch>

            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
} 
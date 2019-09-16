import React, { Component } from 'react';

export default class RadioButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: 'true'
    }
  }
  render() {
    return (
      <div className="row">
       
          <div className="col-lg-12 dis-flex">
            <div className="rb p10">
              <h4>Level Id/EAN</h4>
              <div>
                <label>
                  <input type="radio" value="option1" checked={this.state.checked} />
                  Level Id
          </label>
              </div>
              <div>

                <label>
                  <input type="radio" value="option2" checked={this.state.checked} />
                  EAN
          </label>
              </div>
            </div>

            <div className="rb p10">
              <h4>Pricing Loaded Option</h4>
              <div>
                <label>
                  <input type="radio" value="option1" checked={this.state.checked} />
                  Pricing Loaded Only
          </label>
              </div>
              <div>
                <label>
                  <input type="radio" value="option2" checked={this.state.checked} />
                  Pricing Loaded With Inheritance
          </label>
              </div>
            </div>
            <div className="rb p10">
              <h4>Hierarchy Comparison Direction</h4>
              <div>
                <label>
                  <input type="radio" value="option1" checked={this.state.checked} />
                  Compare Down the Hierarchy
          </label>
              </div>

              <div>
                <label>
                  <input type="radio" value="option2" checked={this.state.checked} />
                  Compare Across Hierarchy
          </label>
              </div>
            </div>
            <div className="rb p10">
              <h4>Excluded Status</h4>
              <div>
                <label>
                  <input type="checkbox" value="option1" defaultChecked={this.state.checked} />
                  Cash
          </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" value="option2" defaultChecked={this.state.checked} />
                  Delete
          </label>
              </div>
            </div>
          </div>
        </div>
   

    )
  }
}
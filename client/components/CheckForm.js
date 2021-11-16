import React, { Component } from 'react';

export class CheckForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      CVV: '',
      validThru: '',
      nameOnCard: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    // this.props.createNewRobot({ ...this.state });
    this.setState({
      number: '',
      CVV: '',
      nameOnCard: '',
      validThru: '',
    });
  }
  render() {
    const { number, CVV, nameOnCard, validThru } = this.state;
    return (
      <div>
        <h4 className="center">Payment Details</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="number">Card Number</label>
            <input
              type="text"
              name="number"
              value={number}
              placeholder="Number"
              onChange={this.handleChange}
            />
            <label htmlFor="CVV">CVV</label>
            <input
              type="text"
              name="CVV"
              value={CVV}
              placeholder="CVV"
              onChange={this.handleChange}
            />

            <label htmlFor="nameOnCard">Name</label>
            <input
              type="text"
              name="nameOnCard"
              value={nameOnCard}
              placeholder="Name"
              onChange={this.handleChange}
            />

            <label htmlFor="validThru">Valid Thru</label>
            <input
              type="date"
              name="validThru"
              value={validThru}
              placeholder="Valid Thru"
              onChange={this.handleChange}
            />

            <button type="submit">Pay</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckForm;

import React, { Component } from 'react';

export class CheckForm extends Component {
  render() {
    return (
      <div>
        <h4 className="center">Payment Details</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="number">Card Number</label>
            <input
              type="text"
              name="number"
              // value={number}
              placeholder="Number"
              // onChange={this.handleChange}
            />
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              name="cvv"
              // value={cvv}
              placeholder="CVV"
              // onChange={this.handleChange}
            />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              // value={name}
              placeholder="Name"
              // onChange={this.handleChange}
            />

            <label htmlFor="valid">Valid Thru</label>
            <input
              type="date"
              name="valid"
              // value={valid}
              placeholder="Valid Thru"
              // onChange={this.handleChange}
            />

            <button type="submit">Pay</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckForm;

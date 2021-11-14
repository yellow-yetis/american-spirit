import React, { Component } from 'react';

export class CheckForm extends Component {
  render() {
    return (
      <div>
        <h4>Payment Details</h4>
        {/* <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Robot Name:</label>
            <input
              type="text"
              name="name"
              // value={name}
              placeholder="Enter name"
              // onChange={this.handleChange}
            />
            <input />

            <label htmlFor="fuelType">Fuel Type:</label>
            <input
              type="text"
              name="fuelType"
              // value={fuelType}
              placeholder="Enter fuel type"
              // onChange={this.handleChange}
            />

            <label htmlFor="fuelLevel">Fuel Level:</label>
            <input
              type="text"
              name="fuelLevel"
              // value={fuelLevel}
              placeholder="Enter fuel level"
              // onChange={this.handleChange}
            />

            <label htmlFor="imageUrl">Image Url:</label>
            <input
              type="text"
              name="imageUrl"
              // value={imageUrl}
              placeholder="Enter image url"
              // onChange={this.handleChange}
            />

            <button type="submit">Submit</button>
          </div>
        </form> */}

        <form className="table">
          <div className="table-cell">
            <label htmlFor="number">Card Number</label>
            <input type="text" id="number" placeholder="Card Number" />
          </div>
          <div className="table-cell">
            <label htmlFor="address">CVV</label>
            <input type="text" id="address" placeholder="CVV" />
          </div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
          <label htmlFor="valid">Valid Thru</label>
          <input type="text" id="valid" />
          <button type="submit">Pay</button>
        </form>
      </div>
    );
  }
}

export default CheckForm;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewOrder } from '../store/order';
import { Link } from 'react-router-dom';
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
  handleSubmit(event, userId) {
    event.preventDefault();
    this.props.createNewOrder({ ...this.state, userId });
    this.props.toggleModal();
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
        <form onSubmit={event => this.handleSubmit(event, this.props.userId)}>
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
            <label htmlFor="validThru">Valid Thru</label>
            <input
              type="date"
              name="validThru"
              value={validThru}
              placeholder="Valid Thru"
              onChange={this.handleChange}
            />
            <label htmlFor="nameOnCard">Name</label>
            <input
              type="text"
              name="nameOnCard"
              value={nameOnCard}
              placeholder="Name On Card"
              onChange={this.handleChange}
            />
            <Link to="/orderConfirmation">
              <button type="submit">Pay</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return {
    userId: state.auth.id,
  };
};
const mapDispatch = (dispatch, { history }) => {
  return {
    createNewOrder: order => dispatch(createNewOrder(order, history)),
  };
};
export default connect(mapState, mapDispatch)(CheckForm);

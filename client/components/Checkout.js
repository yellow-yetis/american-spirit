import React, { Component } from 'react';
import CheckForm from './CheckForm';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  componentDidMount() {
    if (this.state.showModal) {
      document.body.style.overflow = 'hidden';
    }
    if(this.props.isLoggedIn){
      this.props.fetchCartTotals();
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }

  render() {
    return (
      <div>
        <button className="add-to-cart" onClick={this.toggleModal}>
          Proceed To Checkout
        </button>
        {this.state.showModal ? (
          <div className="modal">
            <div className="overlay" onClick={this.toggleModal}></div>
            <div className="modal-content">
              <CheckForm toggleModal={this.toggleModal} totalPrice={this.props.totalPrice} totalQuantity={this.props.totalQuantity} />
              <button className="close-modal" onClick={this.toggleModal}>
                Close
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Checkout;

import React, { Component } from 'react';
import CheckForm from './CheckForm';

export class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.scrollBar = this.scrollBar.bind(this);
  }
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  scrollBar() {
    if (this.state.showModal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }

  render() {
    return (
      <div>
        <button className="btn-modal" onClick={this.toggleModal}>
          Proceed To Checkout
        </button>
        {this.state.showModal ? (
          <div className="modal">
            <div>{this.scrollBar()}</div>
            <div className="overlay" onClick={this.toggleModal}></div>
            <div className="modal-content">
              <CheckForm />
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

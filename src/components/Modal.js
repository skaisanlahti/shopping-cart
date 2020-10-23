import React from "react";
import { Link } from "react-router-dom";

function Modal(props) {
  switch (props.modalState) {
    case "closeModal":
      return null;
    case "addItemModal":
      return (
        <div
          className="modal"
          data-modal="closeModal"
          onClick={props.handleModal}
        >
          <div className="modal-content">
            <h1>Item added to cart</h1>
            <Link to="/shop">
              <button data-modal="closeModal" onClick={props.handleModal}>
                Continue shopping
              </button>
            </Link>
            <Link to="/cart">
              <button data-modal="closeModal" onClick={props.handleModal}>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      );
    case "removeItemModal":
      return (
        <div
          className="modal"
          data-modal="closeModal"
          onClick={props.handleModal}
        >
          <div className="modal-content">
            <h1>Item removed from cart</h1>
            <Link to="/cart">
              <button data-modal="closeModal" onClick={props.handleModal}>
                Back
              </button>
            </Link>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default Modal;

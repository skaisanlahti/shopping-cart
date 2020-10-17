import React from "react";
import uniqid from "uniqid";

function Cart(props) {
  return (
    <div>
      <h1>Render cart items here</h1>
      {props.cartItems.map((item) => {
        return (
          <div key={item.id}>
            <div>{props.catalog[item.id].image}</div>
            <p>Name: {props.catalog[item.id].name}</p>
            <p>Price: {props.catalog[item.id].price}</p>
            <p>Quantity: {item.count}</p>
            <button data-id={item.id} onClick={props.handleDeleteFromCart}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;

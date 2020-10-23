import React from "react";

function Cart(props) {
  const total = props.cartItems.reduce((total, current) => {
    return total + current.count * current.price;
  }, 0);

  if (props.cartItems.length > 0) {
    return (
      <div className="cart-container">
        {props.cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <div className="image-frame">
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <p>Name: {item.name}</p>
                <p>Price: {item.price} gil</p>
                <p>Quantity: {item.count}</p>
                <button data-id={item.id} onClick={props.handleDeleteFromCart}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <p>Total: {total} gil</p>
        <button>Checkout</button>
      </div>
    );
  }
  return (
    <div>
      <p>Your shopping cart is empty.</p>
    </div>
  );
}

export default Cart;

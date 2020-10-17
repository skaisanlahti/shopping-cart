import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import uniqid from "uniqid";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import catalog from "./components/catalog";

const Routes = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = (event) => {
    const id = event.target.dataset.id;
    const count = parseInt(event.target.dataset.count);
    let array = cartItems;
    if (count === 0) {
      return;
    }
    const getOldIndex = (array, prop, value) => {
      for (let i = 0; i < array.length; i++) {
        if (array[i][prop] === value) {
          return i;
        }
      }
      return -1;
    };
    if (array.some((item) => item.id === id)) {
      const oldIndex = getOldIndex(cartItems, "id", id);
      array[oldIndex].count += count;
      setCartItems(array);
    } else {
      const cartItem = {
        id: id,
        count: count,
      };
      setCartItems(array.concat(cartItem));
    }
    setCartItemCount(cartItemCount + count);
  };

  const handleDeleteFromCart = (event) => {
    const deleteId = event.target.dataset.id;
    let deleteCount;
    let array = cartItems;
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === deleteId) {
        deleteCount = array[i].count;
        array.splice(i, 1);
      }
    }
    setCartItems(array);
    setCartItemCount(cartItemCount - deleteCount);
  };

  const checkCart = () => {
    console.table(cartItems);
  };

  return (
    <BrowserRouter>
      <Nav cartItemCount={cartItemCount} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop catalog={catalog} handleAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              catalog={catalog}
              cartItems={cartItems}
              handleDeleteFromCart={handleDeleteFromCart}
            />
          </Route>
        </Switch>
      </main>
      <button onClick={checkCart}>Check Cart</button>
    </BrowserRouter>
  );
};

export default Routes;

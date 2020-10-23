import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import catalog from "./components/catalog";

const Routes = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [modalState, setModalState] = useState("closeModal");

  const handleAddToCart = (event) => {
    const { id, name, price, image } = event.target.dataset;
    const count = parseInt(event.target.dataset.count);
    console.log(`id: ${id} count: ${count}`);
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
        image: image,
        name: name,
        price: price,
        count: count,
      };
      setCartItems(array.concat(cartItem));
    }
    setCartItemCount(cartItemCount + count);
    setModalState("addItemModal");
  };

  const handleDeleteFromCart = (event) => {
    const deleteId = event.target.dataset.id;
    console.log(`deleteId: ${deleteId}`);
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
    setModalState("removeItemModal");
  };

  const handleModal = (event) => {
    const state = event.target.dataset.modal;
    setModalState(state);
  };

  return (
    <Router>
      <Nav cartItemCount={cartItemCount} />
      <div className="background">
        <main className="content-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop catalog={catalog} handleAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart
                cartItems={cartItems}
                handleDeleteFromCart={handleDeleteFromCart}
              />
            </Route>
          </Switch>
        </main>
        <Modal modalState={modalState} handleModal={handleModal} />
      </div>
    </Router>
  );
};

export default Routes;

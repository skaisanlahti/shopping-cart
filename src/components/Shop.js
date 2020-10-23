import React from "react";
import ShopItem from "./ShopItem";

function Shop(props) {
  return (
    <div className="shop-container">
      {props.catalog.map((item) => {
        return (
          <ShopItem
            key={item.id}
            item={item}
            handleAddToCart={props.handleAddToCart}
          />
        );
      })}
    </div>
  );
}

export default Shop;

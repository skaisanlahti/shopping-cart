import React, { useState } from "react";

function ShopItem(props) {
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <div>
      <p>{props.item.image}</p>
      <p>{props.item.name}</p>
      <p>{props.item.price} gil</p>
      <input type="number" value={count} onChange={handleChange} min="0" />
      <button
        data-id={props.item.id}
        data-count={count}
        onClick={props.handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ShopItem;

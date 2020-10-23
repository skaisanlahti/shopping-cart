import React, { useState } from "react";

function ShopItem(props) {
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <div className="shop-item">
      <div className="image-frame">
        <img src={props.item.image} alt={props.item.name} />
      </div>
      <div>
        <p>{props.item.name}</p>
        <p>{props.item.price} gil</p>
        <input type="number" value={count} onChange={handleChange} min="0" />
        <button
          data-id={props.item.id}
          data-image={props.item.image}
          data-name={props.item.name}
          data-price={props.item.price}
          data-count={count}
          onClick={props.handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ShopItem;

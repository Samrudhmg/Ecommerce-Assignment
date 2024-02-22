import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        {" "}
        <img src={props.image} alt="noimg" />
      </Link>
      <p>{props.name}</p>
      <div className="item-Price">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
      <button
        onClick={() => {
          addToCart(props.id);
          alert("Item Added To Cart");
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Item;

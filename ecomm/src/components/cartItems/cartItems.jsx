import React, { useContext } from "react";
import "./cartItem.css";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItem, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitem">
      <div className="cartitem-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitem-main">
                <img className="carticon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitmes-quantity">{cartItem[e.id]}</button>
                <p>{e.new_price * cartItem[e.id]}</p>
                <img
                  className="cartitemremove"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="catitem-down">
        <div className="cartitems-total">
          <h1>Cart Totoal</h1>
          <div>
            <div className="cartitems-totalitems">
              <p>Subtotal</p>
              <p>xxx</p>
            </div>
            <hr />
            <div className="cartitems-totalitems">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-totalitems">
              <h3>Total</h3>
              <h3>xxx</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo">
          <p>If you have a prop enter here</p>
          <div className="promobox">
            <input type="text" placeholder="Promo Code" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

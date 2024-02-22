import React, { createContext } from "react";
import all_product from "../Assets/all_product";
import { useState } from "react";

export const ShopContext = createContext(null);

// const getDefaultCart=()=>{
//     let cart={};
//     for (let index = 0; index < all_product.length+1; index++) {
//         cart[index]=0;
//     }
//     return cart;
// }

const ShopContextProvider = (props) => {
  // const [cartItem, setCartItem] = useState(getDefaultCart());

  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
      cart[index] = 0;
    }
    return cart;
  };

  const [cartItem, setcartItem] = useState(getDefaultCart());

  const addToCart = (ItemId) => {
    setcartItem((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    console.log(cartItem);
  };
  const removeFromCart = (ItemId) => {
    setcartItem((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };

  const contextValue = { all_product, cartItem, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

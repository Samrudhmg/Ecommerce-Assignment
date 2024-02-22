import React, { useContext } from "react";
import "./productDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="prodimg">
          <img className="productdisplay-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdetail-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-prices">
          <div className="oldprice">${product.old_price}</div>
          <div className="newprice">${product.new_price}</div>
        </div>

        <div className="productdescription">
          A lgith weight Sweatshirt pullover
        </div>
        <div className="product-size">
          <h4>Select Size</h4>
          <div className="slectsize">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
            alert("Item Added To cart");
          }}
        >
          ADD TO CART
        </button>
        {/* <p className='product-right-category'>
                    <span>Category:</span>Women, T-shirt, Crop Top
                </p>
                <p className='product-right-category'>
                    <span>Tags:</span>Women, T-shirt, Crop Top
                </p> */}
      </div>
    </div>
  );
};

export default ProductDisplay;

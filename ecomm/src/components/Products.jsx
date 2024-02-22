import React, { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";
import { useParams } from "react-router";
import Breadcrums from "./Breadcrums/Breadcrums";
import ProductDisplay from "./productDisplay/productDisplay";

const Products = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Products;

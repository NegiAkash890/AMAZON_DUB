import React from "react";
import "./Product.css";
function Product({ title, image, price, Rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>The Alchemist</p>
        <p className="product_price">
          <small>Rs.</small>
          <strong>200</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;

import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./Stateprovider";
function CheckoutProduct({ id, image, title, price, Rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removefromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    //Remove Item
  };
  return (
    <div>
      <div className="checkoutProduct">
        <img className="checkoutProduct_img" src={image} />
        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_price">
            <small>Rs . </small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct_rating">
            {Array(Rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={removefromBasket}>Remove from Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;

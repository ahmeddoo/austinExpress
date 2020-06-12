import React from "react";
import Spacer from "../Spacer";
import CartProducDescription from "./CartProductDescription";

const cartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="product-image-wrapper">
        <img src={props.item.image} />
      </div>
      <CartProducDescription description={props.item.description} />
      <Spacer />
      <h4 className="product-price">{props.item.price}</h4>

      <style jsx>{`
        .cart-item {
          width: 100%;
          display: flex;
          margin-bottom: 20px;
        }
        .product-image-wrapper {
          width: 200px;
          margin-right: 2%;
        }
        .product-image-wrapper img {
          width: 100%;
        }
        .product-price {
          color: #b12704;
        }
      `}</style>
    </div>
  );
};

export default cartItem;

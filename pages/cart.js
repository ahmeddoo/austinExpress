import React from "react";
import CartItem from "../components/Cart/cartItem";
import BigButton from "../components/UI/BigButton";
import Link from "next/link";

const cartItems = [
  {
    image: "/images/mules.jpg",
    price: 21.84,
    description: {
      name: "adidas Men's Adilette Shower Slides Sandal, Black, 18",
      category: "Men's Athletic & Outdoor Sandals & Slides",
    },
  },
  {
    image: "/images/hayes.jpg",
    price: 21.84,
    description: {
      name: "adidas Men's Adilette Shower Slides Sandal, Black, 18",
      category: "Men's Athletic & Outdoor Sandals & Slides",
    },
  },
];

const cart = () => {
  return (
    <div className="cart-wrapper">
      <div className="items">
        <h3>Shopping Cart</h3>
        <div className="cart-items-wrapper">
          <span className="price-label">Price</span>
          {cartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}

          <h4 className="subtotal-label">
            Subtotal (3 items):{" "}
            <span style={{ color: "#b12704", fontWeight: "bold" }}>$26.34</span>{" "}
          </h4>
        </div>
      </div>

      <div className="checkout">
        <h4 style={{ fontWeight: "400", marginBottom: "10px" }}>
          Subtotal (3 items):{" "}
          <span
            style={{
              color: "#b12704",
              fontWeight: "bold",
            }}
          >
            $26.34
          </span>{" "}
        </h4>
        <Link href="/order">
          <a>
            <BigButton selected={true}>Proceed to checkout</BigButton>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .cart-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 50px auto;
          display: flex;
          justify-content: space-between;
        }

        .cart-items-wrapper {
          position: relative;
          width: 100%;
          margin-top: 10px;
          padding: 10px 0px 30px 0px;
          border-top: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
        }
        .price-label {
          position: absolute;
          right: 0px;
          top: -20px;
        }
        .subtotal-label{
            position: absolute;
            bottom -20px;
            right: 0px;
            font-weight: 400;
        }
        .items{
            flex-basis: 70%;
        }
        .checkout{
            flex-basis: 26%;
            max-height: 200px;
            background-color: #F3F3F3;
            border-radius: 5px;
            padding: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default cart;

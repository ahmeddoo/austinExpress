import React from "react";
import Link from "next/link";

const cart = () => {
  return (
    <div className="cart-wrapper">
      <Link href="/cart">
        <a>
          <img src="/images/cartb.svg" alt="cart" className="cart" /> ( Cart 0 )
        </a>
      </Link>
      {/* <div className="items-no">0</div> */}
      <style jsx>{`
        .cart-wrapper {
          // background-color: #ffdb00;
          min-width: 150px;
          min-height: 40px;
          padding: 0px 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          font-weight: bold;
          border: 3px solid #ffdb00;
          cursor: pointer;
        }
        .cart-wrapper a {
          display: block;
        }
        .cart-wrapper:hover {
          background-color: #ffdb00;
        }
        .cart {
          width: 15px;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default cart;

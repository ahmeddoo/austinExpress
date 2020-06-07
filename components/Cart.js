import React from "react";

const cart = () => {
  return (
    <div className="cart-wrapper">
      <img src="/images/cartb.svg" alt="cart" className="cart" /> ( Cart 0 )
      {/* <div className="items-no">0</div> */}
      <style jsx>{`
        .cart-wrapper {
          position: relative;
        }
        .items-no {
          position: absolute;
          top: -13px;
          left: -5px;
          font-weight: bold;
        }
        .cart-wrapper {
          // background-color: #ffdb00;
          min-width: 150px;
          min-height: 40px;
          padding: 0px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          font-weight: bold;
          border: 3px solid #ffdb00;
          cursor: pointer;
        }

        .cart-wrapper:hover {
          background-color: #ffdb00;
        }
        .cart {
          width: 20px;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default cart;

import React from "react";
import BigButton from "../components/UI/BigButton";

const order = () => {
  return (
    <div className="order-wrapper">
      <form>
        <div className="order-form">
          {/* <h2>Select Shipping Address</h2> */}
          <section>
            <h3 className="title">Shipping Address</h3>

            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Address line 1" />
            <input type="text" placeholder="Address line 2" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State/Province/Region" />
            <input type="text" placeholder="Zip" />
            <select>
              <option>---Select Country---</option>
              <option>United State</option>
              <option>Nigeria</option>
            </select>

            <textarea placeholder="Do we need additional instruction to find this address please provide (Optional) "></textarea>
          </section>

          <section>
            <h3 className="title">Payment Method</h3>
            <input type="text" placeholder="0000 0000 0000 0000" />
            <input type="text" placeholder="Card Holder Name" />
            <input type="text" placeholder="Expires MM/YY" />
            <input type="text" placeholder="CSV" />
          </section>
        </div>

        {/* Order Summary Begin */}
        <div className="order-summary">
          <h3 className="title">Order Summary</h3>
          <h2>
            <small>Total</small> $28.43
          </h2>
          <BigButton selected={true}>Place Order</BigButton>
        </div>
        {/* End of Order Summary */}
      </form>
      <style jsx>{`
        // * {
        //   border: 1px solid;
        // }
        .order-wrapper {
          margin: 50px auto;
          width: 100%;
          max-width: 1200px;
        }
        .order-wrapper form {
          display: flex;
          width: 100%;
        }
        .order-form {
          flex-basis: 70%;
          display: flex;
          flex-direction: column;
        }
        .order-summary {
          width: 30%;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #fafafa;
          max-height: 300px;
        }
        .order-form section {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 30px;
        }
        section .title {
          flex-basis: 100%;
          margin-bottom: 10px;
        }
        .order-form input:not([type="submit"]),
        select,
        textarea {
          flex-basis: 48%;
          padding: 10px;
          margin-bottom: 5px;
          border: 1px solid;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default order;

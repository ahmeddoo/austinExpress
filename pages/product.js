import React from "react";

const product = () => {
  return (
    <div className="product">
      <form>
        <div className="product-wrapper">
          <div className="product-info-wrapper">
            <h2>Cole Haan: Hayes Penny Loafer</h2>
            <div className="product-image">
              <img src="/images/hayes.jpg" />
            </div>
            <div className="product-info">
              <h2>Item Information</h2>
              <ul>
                <li>
                  The Cole Haan® Feathercraft Grand Venetian reimagines the
                  classic dress loafer into a soft and lightweight modern
                  iteration that's great for warm weather.
                </li>
                <li>Premium leather or suede upper.</li>
                <li>Easy slip-on design.</li>
                <li>Smooth leather lining.</li>
                <li>Cushioned, fixed insole.</li>
                <li>Rubber outsole.</li>
                <li>Imported.</li>
                <li>
                  Weight of footwear is based on a single item, not a pair.
                </li>
              </ul>
            </div>
          </div>
          <div className="checkout">
            <h2 className="price">$89.95</h2>
            <h4>Ships Free</h4>

            <label>
              Color: <br />
              <select>
                <option>Black</option>
                <option>Brown</option>
                <option>White</option>
              </select>
            </label>

            <label>
              Men's Size: <br />
              This fits <b>true to size.</b> Choose your usual size.
              <select>
                <option>Choose Men's Size</option>
                <option>Brown</option>
                <option>White</option>
              </select>
            </label>

            <button className="add-cart">Add To Cart</button>
          </div>
        </div>
      </form>
      <style jsx>{`
        .product {
          width: 100%;
          max-width: 1200px;
          margin: 50px auto;
          position: relative;
        }
        .product-wrapper {
          display: flex;
          justify-content: space-between;
        }
        .product-info-wrapper {
          width: 60%;
          display: flex;
          flex-direction: column;
        }

        .product-image {
          width: 100%;
          margin: 50px 0px;
          padding: 20px 20px 50px 20px;
          //   border-bottom: 1px solid #575757;
        }
        .product-image img {
          width: 100%;
        }
        .product-info ul li {
          list-style: disc;
          margin-top: 8px;
        }
        .checkout {
          width: 20%;
          display: flex;
          flex-direction: column;
          //   border: 1px solid;
          background-color: #eee;
          align-items: center;
          padding: 20px;
          max-height: 500px;
        }
        .checkout label {
          width: 100%;
          margin-top: 10px;
          line-height: 25px;
        }
        .checkout label select {
          width: 100%;
          margin-top: 5px;
          border-radius: 5px;
          font-size: 14px;
          color: #575757;
        }
        .price {
          color: #b12704;
        }
        .add-cart {
          margin-top: 20px;
          background-color: #ffdb00;
          border: 1px solid #ffdb00;
          border-radius: 5px;
          width: 100%;
          padding: 10px 0px;
          text-align: center;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default product;

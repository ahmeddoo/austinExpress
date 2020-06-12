import React from "react";

const cartProducDescription = (props) => {
  return (
    <div className="product-description">
      <h4>{props.description.name}</h4>
      <span>
        <b>18</b> (Size), <b>Black</b> (Color)
      </span>
      <span>{props.description.category} </span>
      <ul>
        <li>
          <select>
            <option value="0">0 (Delete)</option>
            {[...Array(9)].map((_, index) => (
              <option value={index + 1} key={index + 1}>
                {index + 1}
              </option>
            ))}

            <option value="10+">10+</option>
          </select>
        </li>
        |<li>Delete</li>
      </ul>

      <style jsx>{`
        .product-description {
          display: flex;
          flex-direction: column;
        }
        .product-description > span {
          display: block;
          margin-top: 4px;
        }
        h4 {
          color: #0066c0;
        }
        .product-description select {
          border-radius: 5px;
          padding: 5px 5px 5px 5px;
        }
        .product-description ul li {
          display: inline-block;
          margin-top: 4px;
          padding: 0px 15px;
          font-size: 14px;
          color: #0066c0;
        }
        .product-description ul li:first-child {
          padding-left: 0px;
        }
      `}</style>
    </div>
  );
};

export default cartProducDescription;

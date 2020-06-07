import React from "react";

const productAttribute = (props) => {
  let feature = null;
  switch (props.type) {
    case "list":
      feature = (
        <div className="product-attribute">
          <h4>{props.title}</h4>
          <section>
            <div className="list-group">
              <ul>
                {props.attributes.map((attribute, index) => (
                  <li key={index}>{attribute}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      );
      break;
    case "checkbox":
      feature = (
        <div className="product-attribute">
          <h4>{props.title}</h4>
          <section>
            <div className="checkbox-group">
              {props.attributes.map((attribute) => (
                <label>
                  <input type="checkbox" /> {attribute}
                </label>
              ))}
            </div>
          </section>
        </div>
      );
      break;
    default:
      feature = null;
  }
  return (
    <React.Fragment>
      {feature}
      <style jsx global>{`
        .product-attribute section {
          max-height: 200px;
          overflow-y: auto;
        }
        .list-group ul {
          display: flex;
          flex-wrap: wrap;
        }
        .checkbox-group label {
          display: block;
        }
        .checkbox-group label input[type="checkbox"] {
          cursor: pointer;
        }
        .product-attribute {
          padding-bottom: 15px;
        }
        .product-attribute > h4 {
          margin-bottom: 10px;
        }
        .list-group ul li {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 0.5px solid #ddd;
          margin: 2px 2px 0px 0px;
          border-radius: 5px;
          cursor: pointer;
        }
        .list-group ul li:hover {
          border: 1px solid;
        }
      `}</style>
    </React.Fragment>
  );
};

export default productAttribute;

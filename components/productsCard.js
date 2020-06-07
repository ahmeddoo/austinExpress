import React from "react";
import ProductArticle from "./productArticle";

const productsCard = props => {
  const { title, products } = props.productsList;
  return (
    <div className="view-card">
      <h2>{title}</h2>
      <div className="products-wrapper">
        {products.map((product, index) => (
          <ProductArticle
            key={index}
            product={product}
            flexBasis={props.flexBasis}
            shadow={props.shadow}
            type={props.type}
          />
        ))}
      </div>

      <style jsx>{`
        h2 {
          margin-bottom: 20px;
        }
        .view-card {
          width: 100%;
          max-width: 1200px;
          margin: 50px auto 0px auto;
        }

        .products-wrapper {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};

export default productsCard;

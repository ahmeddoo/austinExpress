import React from "react";
import Link from "next/link";

const productInfo = (props) => {
  const { brand, name, price, image } = props.product;
  return (
    <article className="product-info">
      <Link href="/product">
        <a>
          <div className="product-image-wrapper">
            <img src={image} />
          </div>
          <div className="product-details">
            <span className="product-category">{brand}</span>
            <span className="product-name">{name}</span>
            <span className="product-price">{"$" + price}</span>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .product-info {
          width: 25%;
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          // align-items: center;
          padding: 8px;
        }
        .product-details {
          margin-top: 15px;
        }
        .product-details > span {
          display: block;
        }

        span.product-name {
          font-weight: bold;
        }
        .product-image-wrapper {
          display: flex;
          align-items: center;
          width: 100%;
          height: 300px;
          padding: 0px 8px;
          box-shadow: 0px 0px 5px #ddd;
          overflow: hidden;
          border-radius: 5px;
        }
        .product-image-wrapper:hover {
          box-shadow: 0px 0px 5px #575757;
        }
        .product-image-wrapper img {
          width: 100%;
        }
        .product-price {
          color: #f13c31;
        }
      `}</style>
    </article>
  );
};

export default productInfo;

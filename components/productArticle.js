import React from "react";
import Link from "next/link";
const productArticle = props => {
  let article = null;

  switch (props.type) {
    // Case View products are Small

    case "small":
      article = (
        <div className="product-wrapper">
          <Link href="#">
            <a>
              <div className="product-image-wrapper">
                <img src={props.product.image} />
              </div>
              <h4 className="link"> {props.product.title}</h4>
            </a>
          </Link>

          <style jsx>{`
            .product-wrapper {
              display: flex;
              flex-direction: column;
              flex-basis: ${props.flexBasis};
            }
            .link {
              border-bottom: 1px solid white;
            }
          `}</style>
        </div>
      );
      break;

    // Case View products are Large

    case "large":
      article = (
        <div className="product-wrapper">
          <Link href="#">
            <a>
              <div className="product-image-wrapper">
                <img src={props.product.image} />
              </div>
              <h3> {props.product.title}</h3>
              <p>{props.product.caption}</p>
              <div>
                <h3 className="explore">{props.product.explore}</h3>
              </div>
            </a>
          </Link>
          <style jsx>{`
            .product-wrapper {
              display: flex;
              flex-direction: column;
              flex-basis: ${props.flexBasis};
            }
            p {
              margin: 5px 0px;
              font-size: 14px;
            }
          `}</style>
        </div>
      );
      break;
    case "info":
      article = (
        <div className="product-info">
          <div className="h">
            <img src={props.product.image} />
          </div>
        </div>
      );
    default:
      article = null;
  }
  return (
    <React.Fragment>
      {article}
      <style jsx global>{`
      .product-info{
        width: 200px;
        height: 100px;
        background-color: black;
      }
    
        a{
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          text-decoration: none;
          color: #0e2a47;
          width: 100%;
        }
        .link{ text-align: center;}
        a:hover .link{
            border-bottom: 1px solid black;
        }

        .explore{
          border-bottom: 1px solid;
          display: inline;
          
      }
      a:hover .explore{
          color: #0654b3;
          border-bottom: 1px solid #0654b3;
      }
      .product-image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 2px #ADADAD;
        border-radius: 5px;
        flex-grow: 1;
        margin-bottom: 10px;
        width: 100%;
        
      
      }
      img {
        width: 100%;
      }
      .product-image-wrapper h3{
        position: absolute;
        bottom: 5px;
        left 5px;
        font-weight: 400;
      }
     
      
      `}</style>
    </React.Fragment>
  );
};

export default productArticle;

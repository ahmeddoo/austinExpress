import React from "react";
import Spacer from "../components/Spacer";
import ProductAttribute from "../components/ProductFeature";
import ProductsInfo from "../components/productInfo";
const products = () => {
  // Generate Product Sizes
  let sizeList = [];
  for (let i = 4; i < 20; i += 0.5) {
    sizeList.push(i);
  }

  let colors = [
    "Black",
    "Gray",
    "White",
    "Blue",
    "Brown",
    "Navy",
    "Multi",
    "Red",
    "Green",
    "Tan",
    "Beige",
    "Olive",
    "Yellow",
    "Taupe",
    "Khaki",
    "Pink",
    "Orange",
    "Burgundy",
    "Silver",
    "Bone",
    "Gold",
    "Neutral",
    "Purple",
    "Pewter",
    "Metallic",
    "Animal Print",
    "Mahogany",
    "Coral",
    "Bronze"
  ];

  const prices = [
    "$50.00 and Under",
    "$100.00 and Under",
    "$200.00 and Under",
    "200.00 and Over"
  ];

  const materials = ["Leather", "Rubber sole", "Vegans", "Textile"];
  const features = [
    "Lightweight",
    "Comfort",
    "Slip Resistant",
    "Quick Dry",
    "Water Friendly"
  ];
  const productsInfos = [
    {
      name: "Air Zoom Pegasus 37",
      brand: "Nike",
      price: "120.00",
      image: "/images/airzoom.jpg"
    },
    {
      name: "Libron Whitness",
      brand: "Nike",
      price: "57.33",
      image: "/images/running.jpg"
    },
    {
      name: "Flex Experience Run 9",
      brand: "Nike",
      price: "65.00",
      image: "/images/flex.jpg"
    },

    {
      name: "Revolution 5",
      brand: "Nike",
      price: "65.00",
      image: "/images/revolution.jpg"
    },
    {
      name: "Cloudfeel Knit Slip-On Sneaker",
      brand: "Cole Haan",
      price: "100.00",
      image: "/images/cloudfeel.jpg"
    },
    {
      name: "Pinch Penny",
      brand: "Cole Haan",
      price: "126.40",
      image: "/images/pinch.jpg"
    },
    {
      name: "Howland Penny",
      brand: "Cole Haan",
      price: "79.95",
      image: "/images/howland.jpg"
    },
    {
      name: "Hayes Penny Loafer",
      brand: "Cole Haan",
      price: "89.95",
      image: "/images/hayes.jpg"
    },
    {
      name: "Cloudfeel Knit Slip-On Sneaker",
      brand: "Cole Haan",
      price: "100.00",
      image: "/images/cloudfeel.jpg"
    },
    {
      name: "Pinch Penny",
      brand: "Cole Haan",
      price: "126.40",
      image: "/images/pinch.jpg"
    },
    {
      name: "Howland Penny",
      brand: "Cole Haan",
      price: "79.95",
      image: "/images/howland.jpg"
    },
    {
      name: "Hayes Penny Loafer",
      brand: "Cole Haan",
      price: "89.95",
      image: "/images/hayes.jpg"
    }
  ];
  return (
    <div className="products">
      {/* Begining of Product Header */}
      <div className="product-header">
        <div className="product-title">
          <h1>Men Shoes</h1>
          <h3>100 items found</h3>
        </div>
        <Spacer />

        <label>
          <h3>Sort by</h3>
          <select>
            <option> New Arrivals</option>
            <option> Customer Rating</option>
            <option> Best Sellers</option>
            <option> Price: Low to High</option>
            <option> Price: High to Low</option>
            <option> Brand Name</option>
          </select>
        </label>
      </div>
      {/* End of Product Header */}

      {/* Begining of Product Main Body */}
      <div className="products-main">
        {/* Begining of Filter Section */}
        <div className="products-filter-wrapper">
          <h3>Filter Choices</h3>
          <div className="products-filter">
            <ProductAttribute title="Sizes" type="list" attributes={sizeList} />
            <ProductAttribute
              title="Colors"
              type="checkbox"
              attributes={colors}
            />

            <ProductAttribute
              title="Prices"
              type="checkbox"
              attributes={prices}
            />

            <ProductAttribute
              title="Materials"
              type="checkbox"
              attributes={materials}
            />

            <ProductAttribute
              title="Features"
              type="checkbox"
              attributes={features}
            />
            <h4>View all</h4>
          </div>
        </div>
        {/* End of Filter Section */}

        {/* Begining of Product Selections */}
        <div className="product-selections-wrapper">
          <h3>Your Selections</h3>
          <div className="page-caption">
            <span>
              These are the selections that matches your search, you can filter
              the results using the left panel
            </span>
          </div>
          <div className="product-selections">
            {productsInfos.map((productInfo, index) => (
              <ProductsInfo product={productInfo} />
            ))}
          </div>
        </div>
        {/* End of Product Selections */}
      </div>
      {/* End of Product Main Body */}
      <style jsx>{`
        .products {
          width: 100%;
          max-width: 1200px;
          margin: 30px auto 0px auto;
        }

        .product-header {
          display: flex;
          align-items: center;
        }
        .product-title h1 {
          font-weight: 400;
        }
        .product-header h3 {
          font-weight: 400;
        }
        .products select {
          margin-top: 5px;
          font-size: 16px;
          border-radius: 5px;
        }

        .products-main {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-top: 30px;
        }
        .page-caption {
          width: 100%;
          min-height: 50px;
          background-color: #eee;
          display: flex;
          align-items: center;
          padding: 0px 8px;
          color: #0654b3;
        }
        .products-filter-wrapper {
          flex-basis: 20%;
          // border-right: 1px solid #ddd;
        }
        .products-filter {
          margin-top: 20px;
          width: 100%;
        }
        .product-selections-wrapper {
          flex-basis: 76%;
        }
        .product-selections {
          width: 100%;
          display: flex;
          margin-top: 20px;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
      `}</style>
    </div>
  );
};

export default products;

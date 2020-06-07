import React from "react";
import HeroBox from "../components/HeroBox";
import ProductsCard from "../components/productsCard";

const indexPage = () => {
  const popularProducts = {
    title: "View Popular Categories",
    products: [
      {
        title: "Running Shoes",
        image: "/images/running.jpg"
      },
      {
        title: "Women Boots",
        image: "/images/nike.jpg"
      },
      {
        title: "Kids Footwear",
        image: "/images/sandal.jpg"
      },
      {
        title: "Women Mules",
        image: "/images/mules.jpg"
      },
      {
        title: "Men Sandals",
        image: "/images/sandals.jpg"
      },
      {
        title: "Men Boots",
        image: "/images/nike2.jpg"
      }
    ]
  };

  const favoriteProducts = {
    title: "Footwear Favorites",
    products: [
      {
        title: "Our Comfeist Footwear",
        image: "/images/comfeist.jpg",
        caption: "Enjoy popular styles that looks and feel good!",
        explore: "Explore Comfort Shoes"
      },
      {
        title: "Slide Sandals",
        image: "/images/slidesandals.jpg",
        caption: "On-trend styles that truly let you feel relax!",
        explore: "Explore Slide Sandals"
      },

      {
        title: "Sandals for Kids",
        image: "/images/sandalkids.jpg",
        caption: "Perfect for backyard adventures and playtime!",
        explore: "Explore Kids Sandals"
      }
    ]
  };
  const brandHeaders = {
    title: "Trending Brands",
    products: [
      {
        title: "Clarks",
        image: "/images/headers/clarks.jpg"
      },
      {
        title: "Nike",
        image: "/images/headers/nike.jpg"
      },
      {
        title: "Nike Kids",
        image: "/images/headers/nikekids.jpg"
      },
      {
        title: "Converse",
        image: "/images/headers/converse.jpg"
      },
      {
        title: "UGG",
        image: "/images/headers/ugg.jpg"
      },
      {
        title: "Brooks",
        image: "/images/headers/brooks.jpg"
      }
    ]
  };

  return (
    <React.Fragment>
      <HeroBox />
      <ProductsCard
        productsList={popularProducts}
        flexBasis="16%"
        shadow={true}
        type="small"
      />
      <ProductsCard
        productsList={favoriteProducts}
        flexBasis="33%"
        shadow={false}
        type="large"
      />
      <ProductsCard
        productsList={brandHeaders}
        flexBasis="16%"
        shadow={true}
        type="small"
      />
    </React.Fragment>
  );
};

export default indexPage;

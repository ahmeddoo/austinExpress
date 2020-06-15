import React from "react";
import Carousel from "./UI/Carousel/Carousel";

const heroBox = () => {
  return (
    <div className="banner-box">
      <Carousel />

      <style jsx>{`
        .banner-box {
          width: 100%;
          max-width: 1200px;
          margin: 20px auto;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default heroBox;

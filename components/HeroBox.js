import React from "react";

const heroBox = () => {
  return (
    <div className="banner-box">
      <img src="/images/hero.jpg" alt="banner" />
      <div className="message-card">
        <h2> Just In: Clarks most trending shoes </h2>
        <p>Get yours with just a few clicks </p>

        <button className="button">Explore more</button>
      </div>

      <style jsx>{`
        .banner-box {
          width: 100%;
          max-width: 1200px;
          margin: 20px auto;
          position: relative;
        }
        .banner-box img {
          width: 100%;
        }

        .message-card {
          position: absolute;
          width: 400px;
          min-height: 200px;
          left: 30px;
          bottom: 30px;
          background-color: white;
          padding: 30px;
        }
        .button {
          border: 2px solid;
          padding: 10px 30px;
          background-color: white;
          font-size: 16px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default heroBox;

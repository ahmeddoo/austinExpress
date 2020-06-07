import React from "react";
import Category from "./Category";

const dropBox = props => {
  const categories = [...props.categories];

  // Checking to see if the categories has morethan 1 colums
  let columnCategory = false;
  if (categories.length === 1) columnCategory = true;

  let classList = ["drop-box"];

  if (props.show) {
    classList.push("show");
  } else {
    classList.push("hidden");
  }
  return (
    <div className={classList.join(" ")}>
      {categories.map((category, index) => (
        <Category
          key={index}
          category={category}
          columnCategory={columnCategory}
        />
      ))}
      <style jsx>{`
        .drop-box {
          width: 700px;
          min-height: 250px;
          padding: 50px;
          background-color: #eee;
          position: absolute;
          top: 65px;
          left: 0px;
          z-index: 5;
          transition: flex 10s ease;
          justify-content: space-between;
          background-color: #fff;
          box-shadow: 0px 0px 5px #575757;
        }
        .show {
          display: flex;
        }

        .hidden {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default dropBox;

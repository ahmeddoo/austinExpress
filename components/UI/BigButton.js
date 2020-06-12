import React from "react";

const bigButton = (props) => {
  let classList = ["bigButton"];
  if (props.selected) {
    classList.push("selected");
  }
  return (
    <button className={classList.join(" ")} style={props.style}>
      {props.children}

      <style jsx>{`
        .bigButton {
          width: 100%;
          padding: 10px;
          border: 1px solid #7d7d7d;
          font-size: 14px;
          color: #0e2a47;
          cursor: pointer;
          border-radius: 5px;
        }

        .selected {
          background-color: #ffdb00;
        }
      `}</style>
    </button>
  );
};

export default bigButton;

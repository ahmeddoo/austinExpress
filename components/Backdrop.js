import React from "react";

const backdrop = (props) => {
  return (
    <div className="Backdrop" onClick={props.clicked}>
      <style jsx>{`
        .Backdrop {
          position: fixed;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.13);
          z-index: 90;
          top: 0px;
          right: 0px;
          display: ${props.show ? "block" : "none"};
        }
      `}</style>
    </div>
  );
};

export default backdrop;

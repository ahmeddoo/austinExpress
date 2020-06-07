import React from "react";
const entryButton = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.sign} className="Button">
        {props.children}
      </button>

      <style jsx>{`
        .Button {
          width: 100%;
          margin-bottom: 5px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 1.1rem;
        }

        .Button:hover {
          background-color: #525252;
          color: white;
          cursor: pointer;
        }

        @media screen and (max-width: 768px) {
          .Button {
            border-radius: 0px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default entryButton;

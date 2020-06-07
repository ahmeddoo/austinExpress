import React from "react";

const switchEntry = (props) => {
  return (
    <React.Fragment>
      <h4 className="link-wrapper">
        {!props.guest ? "New User" : "Already have an account"}?
        <span onClick={props.toggleAccount} className="link">
          {props.entry}
        </span>
      </h4>

      <style jsx>{`
        .link-wrapper {
          margin: 5px 0px;
        }
        .link {
          color: #0769e0;
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};

export default switchEntry;

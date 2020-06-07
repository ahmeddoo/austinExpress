import React from "react";

const input = (props) => {
  const inputClasses = ["Input"];
  if (props.inValid) {
    inputClasses.push("Invalid");
  }

  let inputElement = (
    <div>
      <input className={inputClasses.join(" ")} />{" "}
    </div>
  );
  switch (props.eleType) {
    case "input": {
      inputElement = (
        <input
          value={props.value}
          onChange={props.change}
          className={inputClasses.join(" ")}
          {...props.eleConfig}
        />
      );
      break;
    }

    case "textarea": {
      inputElement = (
        <textarea
          value={props.value}
          onChange={props.change}
          className={inputClasses.join(" ")}
          {...props.eleConfig}
        />
      );
      break;
    }

    default:
      inputElement = (
        <input value={props.value} className={inputClasses.join(" ")} />
      );
  }

  return (
    <React.Fragment>
      {inputElement}
      <style jsx global>{`
        .Input {
          width: 100%;
          margin-bottom: 5px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
        }

        .Input::after {
          display: block;
          content: "Love";
          background-color: #525252;
          color: white;
          cursor: pointer;
          width: 200px;
          z-index: 100;
        }

        .InValid {
          border: 1px solid salmon;
          /* background-color: salmon; */
        }

        @media screen and (max-width: 768px) {
          .Input {
            border-radius: 0px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default input;

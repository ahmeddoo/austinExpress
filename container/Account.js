import React, { useState } from "react";
import Logo from "../components/Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const account = (props) => {
  const [statusState, setStatusState] = useState(true);

  const OnToggleAccountHandler = () => {
    setStatusState(!statusState);
  };

  const signin = (
    <SignIn guest={false} toggleAccount={OnToggleAccountHandler} />
  );

  const signup = <SignUp guest={true} toggleAccount={OnToggleAccountHandler} />;

  return (
    <div className="Account">
      <Logo />
      <div className="form">{statusState ? signin : signup}</div>

      <style jsx>{`
        .Account {
          position: absolute;
          top: calc(50% - 250px);
          left: calc(50% - 220px);
          width: 440px;
          height: 500px;
          display: ${props.show ? "flex" : "none"};
          flex-direction: column;
          align-items: center;
          background-color: white;
          z-index: 100;
          border-radius: 10px;
          padding: 30px 30px 0px 30px;
          transition: all 5s linear;
        }

        @media screen and (max-width: 1260px) {
          .Main {
            padding: 0px 5%;
          }
        }

        @media screen and (max-width: 992px) {
          .logo {
            width: 130px;
          }
        }

        @media screen and (max-width: 768px) {
          .Main {
            padding: 10px 3%;
            flex-direction: column;
            height: 600px;
          }
          .logo {
            width: 100px;
          }
          .Main > div {
            width: 100%;
          }
          .Account {
            padding: 10px 0px;
            box-shadow: none;
            height: 500px;
          }
        }
      `}</style>
      <style jsx global>{`
        .page-title {
          margin-top: 30px;
        }
      `}</style>
    </div>
  );
};

export default account;

import React from "react";

const headTop = () => {
  return (
    <div className="header-top">
      <ul className="links">
        <li>Available 24/7 at +1 (614) 674-7944</li>
      </ul>

      <style jsx>{`
        .header-top {
          width: 100%;
          height: 60px;
          padding: 0px 20px;
          background-color: #0654b3;
          color: white;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .links {
          display: flex;
        }

        .links li {
          padding: 0px 0px 0px 20px;
        }
      `}</style>
    </div>
  );
};
export default headTop;

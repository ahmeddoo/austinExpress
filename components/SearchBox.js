import React from "react";

const searchBox = () => {
  return (
    <div className="search-box">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search for shoes name, item key, etc."
        />
        <input type="submit" value="Search" />
      </form>

      <style jsx>{`
        .search-box {
          flex-basis: 50%;
        }
        .search-form {
          width: 100%;
          display: flex;
        }
        .search-form input {
          height: 44px;
          border: 1px solid black;
          font-size: 16px;
          outline: none;
        }
        .search-form input[type="text"] {
          flex-grow: 1;
          padding: 0px 20px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border-right: none;
          color: #575757;
        }

        .search-form input[type="submit"] {
          width: 200px;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          background-color: #0654b3;
          border-color: #0654b3;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default searchBox;

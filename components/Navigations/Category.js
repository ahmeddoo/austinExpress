import React from "react";
import Link from "next/link";

const category = props => {
  const { title, list } = props.category;
  return (
    <div className="category">
      <h3>{title}</h3>
      <ul>
        {list.map((product, index) => (
          <li key={index}>
            <Link href={"/" + product}>
              <a>{product}</a>
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        li {
          display: ${props.columnCategory ? "inline-block" : "block"};
          padding: ${props.columnCategory ? "8px" : "0px"};
        }
        li:hover {
          border-bottom: 1px solid;
        }
      `}</style>
    </div>
  );
};

export default category;

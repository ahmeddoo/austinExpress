import React from "react";
import Link from "next/link";

const logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <a>
          <h2 className="logo">
            austin<span className="red">Exp</span>ress.com
          </h2>
        </a>
      </Link>

      <style jsx>{`
        .logo h2 {
          color: #1b222b;
          font-family: "Open sans", san-serif;
          font-weight: 700;
        }
        .red {
          color: #f13c31;
        }
      `}</style>
    </div>
  );
};

export default logo;

import React from "react";
import Layout from "../Layout";
import HeadTop from "./HeadTop";
import HeadBottom from "./HeadBottom";
import Navigations from "../Navigations/Navigations";

const header = () => {
  return (
    <Layout>
      <div className="header">
        <HeadTop />
        <HeadBottom />
        <Navigations />
        <style jsx>{`
          .header {
            width: 100%;
            height: 200px;
            //background-color: #eee;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default header;

const layout = (props) => {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        .page-layout {
          width: 100%;
          height: 100%;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: "Open Sans", san-serif;
          font-size: 16px;
          color: #0e2a47;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0px;
        }

        ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        input {
          font-family: "Open Sans", san-serif;
        }
        a {
          text-decoration: none;
          color: #1b222b;
        }
        select {
          // -webkit-appearance: none;
          background-position: right 12px center;
          background-repeat: no-repeat;
          // background-image: url("/images/download.svg");
          backgroung-color: white;
          padding: 8px 30px 8px 0px;
          font-family: "Open Sans", san-serif;
        }
      `}</style>
    </div>
  );
};

export default layout;

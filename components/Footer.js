import React from "react";
import Category from "../components/Navigations/Category";
import Link from "next/link";

const footer = () => {
  const categories = [
    {
      title: "Explore Austin",
      list: [
        "Shoes",
        "Brands",
        "Clothing",
        "Running",
        "Heals & Pumps",
        "Boots & Booties",
        "Clogs",
        "Slippers",
        "New Arrivals",
        "View all"
      ]
    },

    {
      title: "Customer Service",
      list: [
        "FAQ",
        "Help center",
        "Billing Information",
        "My Account",
        "Shipping & Returns"
      ]
    },

    {
      title: "About Austin",
      list: ["Contact us", "Customers Reviews", "Autin Benefits", "About us"]
    }
  ];
  return (
    <div className="footer-wrapper">
      <div className="footer">
        {categories.map((category, index) => (
          <Category category={category} />
        ))}
        <div>
          <h3>Connect With Us</h3>
          <div className="socials">
            <Link href="#">
              <a>
                <img src="/images/facebook.svg" alt="facebook" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <img src="/images/instagram.svg" alt="instagram" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <img src="/images/twitter.svg" alt="twitter" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <img src="/images/pinterest.svg" alt="pinterest" />
              </a>
            </Link>
            <Link href="#">
              <a>
                <img src="/images/youtube.svg" alt="youtube" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      Copyright &copy; austinExpress.com 2020
      <style jsx>{`
        .footer-wrapper {
          width: 100%;
          background-color: #1b222b;
          color: #8f9397;
          padding: 0px 10px 10px 10px;
        }
        .footer {
          width: 100%;
          max-width: 1200px;
          min-height: 500px;
          margin: 50px auto 0 auto;
          display: flex;
          justify-content: space-between;
          padding: 50px 0px 50px 0px;
          color: #cbcdcf;
        }
        .socials {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          //   background-color: white;
        }

        .socials img {
          width: 60%;
        }
      `}</style>
      <style jsx global>{`
        .footer > div {
          flex-basis: 23%;
        }
        .footer-wrapper a {
          color: #cbcdcf;
        }
        .footer li {
          margin-bottom: 10px;
          border-bottom: 1px solid #1b222b;
        }
      `}</style>
    </div>
  );
};

export default footer;

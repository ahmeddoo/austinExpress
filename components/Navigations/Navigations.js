import React, { useState } from "react";
import Link from "next/link";
import Spacer from "../Spacer";
import Navigation from "./Navigation";
import Backdrop from "../Backdrop";
import Account from "../../container/Account";

const navigations = () => {
  const [showAccount, setShowAccount] = useState(false);
  const navs = [
    //Women Navigation list
    {
      title: "Women",
      categories: [
        {
          title: "Shoes",
          list: [
            "Sandals",
            "Sneakers",
            "Flats",
            "Mules",
            "Heals & Pumps",
            "Boots & Booties",
            "Clogs",
            "Slippers",
            "View all",
          ],
        },

        {
          title: "Activities",
          list: [
            "Comfort Shop",
            "Run Shop",
            "Spring Trend",
            "Outdoor",
            "Walking",
            "Athletic",
            "Food Health & Wellness",
            "Casual",
            "Dress/Evening",
            "Wide Shoes",
            "Narrow Shoes",
          ],
        },

        {
          title: "Clothing & More",
          list: [
            "Handbags & Purses",
            "Tops",
            "Hats",
            "Dresses",
            "Skirts",
            "Socks",
            "Athletic",
            "Rain Gear",
            "Coats & Jackets",
            "View all",
          ],
        },
      ],
    },
    //Men Navigation list
    {
      title: "Men",
      categories: [
        {
          title: "Shoes",
          list: [
            "Sandals",
            "Sneakers",
            "Loafers",
            "Boat Shoes",
            "Oxfords",
            "Boots & Chukkas",
            "Slip-Ons",
            "Slippers",
            "View all",
          ],
        },

        {
          title: "Activities",
          list: [
            "Run Shop",
            "Spring Trend",
            "Outdoor",
            "Walking",
            "Athletic",
            "Food Health & Wellness",
            "Casual",
            "Dress/Evening",
            "Work",
            "Wide Shoes",
            "Narrow Shoes",
          ],
        },

        {
          title: "Clothing & More",
          list: [
            "Backpacks",
            "Tops",
            "Hats",
            "Dresses",
            "Shirts & T-Shirts",
            "Shorts & Boardshorts",
            "Pants",
            "Socks",
            "Athletic",
            "Rain Gear",
            "Coats & Jackets",
            "View all",
          ],
        },
      ],
    },

    //Kids Navigation list
    {
      title: "Kids",
      categories: [
        {
          title: "Girls",
          list: [
            "Sandals",
            "Swimwear",
            "Sneaker & Athletic Shoes",
            "Dresses",
            "Flats",
            "Jumpsuits & Rompers",
            "Shirts & Tops",
            "Shorts",
            "Sleepwear",
            "Slippers",
            "View all",
          ],
        },

        {
          title: "Boys",
          list: [
            "Sneaker & Athletic Shoes",
            "Swimwear",
            "Sandals",
            "Shirts & Tops",
            "Boat Shoes",
            "Shorts",
            "Pants",
            "Loafers",
            "Sleepwear",
            "Slippers",
            "Jumpsuits & Rompers",
            "View all",
          ],
        },

        {
          title: "All kids",
          list: [
            "Juniors",
            "Baby & Toddler",
            "Accessories",
            "Kid's Sports",
            "Backpack & Bags",
            "Sunglasses",
            "Sale",
            "New Arrivals",
            "View all",
          ],
        },
      ],
    },

    //Men Navigation list
    {
      title: "Brands",
      categories: [
        {
          title: "Brands Index",
          list: [...Array(26)].map((_, i) => String.fromCharCode(i + 65)),
        },
      ],
    },
  ];

  const showAccountHandler = () => {
    setShowAccount(!showAccount);
  };

  return (
    <div className="nav-wrapper">
      <ul>
        {navs.map((nav, index) => (
          <Navigation key={index} target={nav} />
        ))}
        <Spacer />
        <li onClick={showAccountHandler} id="accountBtn">
          Sign in / Register
        </li>
      </ul>
      <Backdrop show={showAccount} clicked={showAccountHandler} />
      <Account show={showAccount} />
      <style jsx>{`
        .nav-wrapper {
          width: 100%;
          background-color: #eee;
          height: 55px;
          display: flex;
          align-items: center;
         
        }

        .nav-wrapper ul {
          width: 100%;
          max-width: 1200px;
          margin: 0px auto;
          display: flex;
        }
       
        .nav-wrapper ul li:last-child {
          padding-right: 0px;
        }

        li {
          padding: 30px 30px;
          cursor: pointer;
        }

        a {
          text-decoration: none;
          color: #035d59;
        },

      `}</style>
      <style jsx global>{`
        .nav-wrapper ul li:first-child {
          padding-left: 0px;
        }

        .hidden {
          display: none;
        }

        .visuallyhidden {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default navigations;

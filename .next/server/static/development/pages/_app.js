module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Backdrop.js":
/*!********************************!*\
  !*** ./components/Backdrop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Backdrop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const backdrop = props => {
  return __jsx("div", {
    onClick: props.clicked,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4021926315", [props.show ? "block" : "none"]]]) + " " + "Backdrop",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4021926315",
    dynamic: [props.show ? "block" : "none"],
    __self: undefined
  }, `.Backdrop.__jsx-style-dynamic-selector{position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,0.13);z-index:90;top:0px;right:0px;display:${props.show ? "block" : "none"};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcQmFja2Ryb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2tCLEFBRzBCLGVBQ0osV0FDQyxZQUN5QixrQ0FDMUIsV0FDSCxRQUNFLFVBQzJCLHFDQUN2QyIsImZpbGUiOiJDOlxcVXNlcnNcXEtoM21cXERvY3VtZW50c1xccHJvamVjdHNcXGF1c3RpbkV4cHJlc3NcXGNvbXBvbmVudHNcXEJhY2tkcm9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgYmFja2Ryb3AgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJCYWNrZHJvcFwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrZWR9PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkJhY2tkcm9wIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICAgICAgICAgIHotaW5kZXg6IDkwO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhY2tkcm9wO1xyXG4iXX0= */
/*@ sourceURL=C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Backdrop.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (backdrop);

/***/ }),

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Cart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const cart = () => {
  return __jsx("div", {
    className: "jsx-2397628171" + " " + "cart-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-2397628171",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/cartb.svg",
    alt: "cart",
    className: "jsx-2397628171" + " " + "cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), " ( Cart 0 )")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2397628171",
    __self: undefined
  }, ".cart-wrapper.jsx-2397628171{min-width:150px;min-height:40px;padding:0px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:5px;font-weight:bold;border:3px solid #ffdb00;cursor:pointer;}.cart-wrapper.jsx-2397628171 a.jsx-2397628171{display:block;}.cart-wrapper.jsx-2397628171:hover{background-color:#ffdb00;}.cart.jsx-2397628171{width:15px;margin-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcQ2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFJMkIsQUFZRixBQUdXLEFBR2QsV0FDTSxHQU5uQixFQVprQixTQWVsQixHQUlBLElBbEJtQixpQkFDSiwwRUFDVSxtR0FDSiw2RkFDRCxrQkFDRCxpQkFDUSx5QkFDVixlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXEtoM21cXERvY3VtZW50c1xccHJvamVjdHNcXGF1c3RpbkV4cHJlc3NcXGNvbXBvbmVudHNcXENhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IGNhcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC13cmFwcGVyXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NhcnRiLnN2Z1wiIGFsdD1cImNhcnRcIiBjbGFzc05hbWU9XCJjYXJ0XCIgLz4gKCBDYXJ0IDAgKVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1ub1wiPjA8L2Rpdj4gKi99XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY2FydC13cmFwcGVyIHtcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmRiMDA7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZGIwMDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcnQtd3JhcHBlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FydC13cmFwcGVyOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRiMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJ0IHtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Cart.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (cart);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navigations_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigations/Category */ "./components/Navigations/Category.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const footer = () => {
  const categories = [{
    title: "Explore Austin",
    list: ["Shoes", "Brands", "Clothing", "Running", "Heals & Pumps", "Boots & Booties", "Clogs", "Slippers", "New Arrivals", "View all"]
  }, {
    title: "Customer Service",
    list: ["FAQ", "Help center", "Billing Information", "My Account", "Shipping & Returns"]
  }, {
    title: "About Austin",
    list: ["Contact us", "Customers Reviews", "Autin Benefits", "About us"]
  }];
  return __jsx("div", {
    className: "jsx-134182250" + " " + "footer-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-134182250" + " " + "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, categories.map((category, index) => __jsx(_components_Navigations_Category__WEBPACK_IMPORTED_MODULE_2__["default"], {
    category: category,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Connect With Us"), __jsx("div", {
    className: "jsx-134182250" + " " + "socials",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/facebook.svg",
    alt: "facebook",
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/instagram.svg",
    alt: "instagram",
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/twitter.svg",
    alt: "twitter",
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/pinterest.svg",
    alt: "pinterest",
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/images/youtube.svg",
    alt: "youtube",
    className: "jsx-134182250",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  })))))), "Copyright \xA9 austinExpress.com 2020", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2540217294",
    __self: undefined
  }, ".footer-wrapper.jsx-134182250{width:100%;background-color:#1b222b;color:#8f9397;padding:0px 10px 10px 10px;}.footer.jsx-134182250{width:100%;max-width:1200px;min-height:500px;margin:50px auto 0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:50px 0px 50px 0px;color:#cbcdcf;}.socials.jsx-134182250{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:20px;}.socials.jsx-134182250 img.jsx-134182250{width:60%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFa0IsQUFHc0IsQUFNQSxBQVVBLEFBUUQsVUFDWixDQXhCMkIsQUFNUixBQVVKLGlCQVRJLFFBTkgsU0FPVSxLQU5HLG1CQU9kLFFBTmYsUUFjZ0MsMERBUEEseURBUWQsZ0JBRWxCLDBDQVQ0QiwwQkFDWixjQUNoQiIsImZpbGUiOiJDOlxcVXNlcnNcXEtoM21cXERvY3VtZW50c1xccHJvamVjdHNcXGF1c3RpbkV4cHJlc3NcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25zL0NhdGVnb3J5XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJFeHBsb3JlIEF1c3RpblwiLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAgXCJTaG9lc1wiLFxyXG4gICAgICAgIFwiQnJhbmRzXCIsXHJcbiAgICAgICAgXCJDbG90aGluZ1wiLFxyXG4gICAgICAgIFwiUnVubmluZ1wiLFxyXG4gICAgICAgIFwiSGVhbHMgJiBQdW1wc1wiLFxyXG4gICAgICAgIFwiQm9vdHMgJiBCb290aWVzXCIsXHJcbiAgICAgICAgXCJDbG9nc1wiLFxyXG4gICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICBcIk5ldyBBcnJpdmFsc1wiLFxyXG4gICAgICAgIFwiVmlldyBhbGxcIlxyXG4gICAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQ3VzdG9tZXIgU2VydmljZVwiLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAgXCJGQVFcIixcclxuICAgICAgICBcIkhlbHAgY2VudGVyXCIsXHJcbiAgICAgICAgXCJCaWxsaW5nIEluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgXCJNeSBBY2NvdW50XCIsXHJcbiAgICAgICAgXCJTaGlwcGluZyAmIFJldHVybnNcIlxyXG4gICAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQWJvdXQgQXVzdGluXCIsXHJcbiAgICAgIGxpc3Q6IFtcIkNvbnRhY3QgdXNcIiwgXCJDdXN0b21lcnMgUmV2aWV3c1wiLCBcIkF1dGluIEJlbmVmaXRzXCIsIFwiQWJvdXQgdXNcIl1cclxuICAgIH1cclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxDYXRlZ29yeSBjYXRlZ29yeT17Y2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMz5Db25uZWN0IFdpdGggVXM8L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxzXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2suc3ZnXCIgYWx0PVwiZmFjZWJvb2tcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIiBhbHQ9XCJpbnN0YWdyYW1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3R3aXR0ZXIuc3ZnXCIgYWx0PVwidHdpdHRlclwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGludGVyZXN0LnN2Z1wiIGFsdD1cInBpbnRlcmVzdFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMveW91dHViZS5zdmdcIiBhbHQ9XCJ5b3V0dWJlXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgQ29weXJpZ2h0ICZjb3B5OyBhdXN0aW5FeHByZXNzLmNvbSAyMDIwXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZm9vdGVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyMjJiO1xyXG4gICAgICAgICAgY29sb3I6ICM4ZjkzOTc7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMHB4IDUwcHggMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNjYmNkY2Y7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWxzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbHMgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLmZvb3RlciA+IGRpdiB7XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiAyMyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXItd3JhcHBlciBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjY2JjZGNmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIGxpIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFiMjIyYjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Footer.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1409775597",
    __self: undefined
  }, ".footer>div{-webkit-flex-basis:23%;-ms-flex-preferred-size:23%;flex-basis:23%;}.footer-wrapper a{color:#cbcdcf;}.footer li{margin-bottom:10px;border-bottom:1px solid #1b222b;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlHeUIsQUFHMEIsQUFHRCxBQUdLLGNBRnJCLEtBR2tDLGdDQUNsQyxlQVBBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbnMvQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkV4cGxvcmUgQXVzdGluXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIlNob2VzXCIsXHJcbiAgICAgICAgXCJCcmFuZHNcIixcclxuICAgICAgICBcIkNsb3RoaW5nXCIsXHJcbiAgICAgICAgXCJSdW5uaW5nXCIsXHJcbiAgICAgICAgXCJIZWFscyAmIFB1bXBzXCIsXHJcbiAgICAgICAgXCJCb290cyAmIEJvb3RpZXNcIixcclxuICAgICAgICBcIkNsb2dzXCIsXHJcbiAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgIFwiTmV3IEFycml2YWxzXCIsXHJcbiAgICAgICAgXCJWaWV3IGFsbFwiXHJcbiAgICAgIF1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJDdXN0b21lciBTZXJ2aWNlXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIkZBUVwiLFxyXG4gICAgICAgIFwiSGVscCBjZW50ZXJcIixcclxuICAgICAgICBcIkJpbGxpbmcgSW5mb3JtYXRpb25cIixcclxuICAgICAgICBcIk15IEFjY291bnRcIixcclxuICAgICAgICBcIlNoaXBwaW5nICYgUmV0dXJuc1wiXHJcbiAgICAgIF1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJBYm91dCBBdXN0aW5cIixcclxuICAgICAgbGlzdDogW1wiQ29udGFjdCB1c1wiLCBcIkN1c3RvbWVycyBSZXZpZXdzXCIsIFwiQXV0aW4gQmVuZWZpdHNcIiwgXCJBYm91dCB1c1wiXVxyXG4gICAgfVxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhdGVnb3J5IGNhdGVnb3J5PXtjYXRlZ29yeX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPkNvbm5lY3QgV2l0aCBVczwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbHNcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mYWNlYm9vay5zdmdcIiBhbHQ9XCJmYWNlYm9va1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiIGFsdD1cImluc3RhZ3JhbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdHdpdHRlci5zdmdcIiBhbHQ9XCJ0d2l0dGVyXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9waW50ZXJlc3Quc3ZnXCIgYWx0PVwicGludGVyZXN0XCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy95b3V0dWJlLnN2Z1wiIGFsdD1cInlvdXR1YmVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBDb3B5cmlnaHQgJmNvcHk7IGF1c3RpbkV4cHJlc3MuY29tIDIwMjBcclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5mb290ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjIyMmI7XHJcbiAgICAgICAgICBjb2xvcjogIzhmOTM5NztcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweCAwcHggNTBweCAwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2NiY2RjZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvY2lhbHMge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29jaWFscyBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAuZm9vdGVyID4gZGl2IHtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDIzJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlci13cmFwcGVyIGEge1xyXG4gICAgICAgICAgY29sb3I6ICNjYmNkY2Y7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgbGkge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWIyMjJiO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./components/Header/HeadBottom.js":
/*!*****************************************!*\
  !*** ./components/Header/HeadBottom.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo */ "./components/Logo.js");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SearchBox */ "./components/SearchBox.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Cart */ "./components/Cart.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Header\\HeadBottom.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const headBottom = () => {
  return __jsx("div", {
    className: "jsx-3104775208" + " " + "header-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_SearchBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_Cart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3104775208",
    __self: undefined
  }, ".header-bottom.jsx-3104775208{width:100%;max-width:1200px;margin:0px auto;height:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkQm90dG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFrQixBQUdzQixXQUNNLGlCQUNELGdCQUNILGFBQ0EsMEVBQ00sNkZBQ1csbUhBQ2hDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkQm90dG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vTG9nb1wiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL0NhcnRcIjtcclxuXHJcbmNvbnN0IGhlYWRCb3R0b20gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJvdHRvbVwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8U2VhcmNoQm94IC8+XHJcblxyXG4gICAgICA8Q2FydCAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXItYm90dG9tIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRCb3R0b207XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Header\\\\HeadBottom.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (headBottom);

/***/ }),

/***/ "./components/Header/HeadTop.js":
/*!**************************************!*\
  !*** ./components/Header/HeadTop.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Header\\HeadTop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const headTop = () => {
  return __jsx("div", {
    className: "jsx-3846494849" + " " + "header-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-3846494849" + " " + "links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "jsx-3846494849",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Available 24/7 at +1 (614) 674-7944")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3846494849",
    __self: undefined
  }, ".header-top.jsx-3846494849{width:100%;height:60px;padding:0px 20px;background-color:#0654b3;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.links.jsx-3846494849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.links.jsx-3846494849 li.jsx-3846494849{padding:0px 0px 0px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNrQixBQUdzQixBQVdFLEFBSVksV0FkYixZQUNLLEVBY25CLGVBYjJCLHlCQUNiLFNBUWQsR0FQZSwwRUFDWSxpR0FDTiw2RkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxLaDNtXFxEb2N1bWVudHNcXHByb2plY3RzXFxhdXN0aW5FeHByZXNzXFxjb21wb25lbnRzXFxIZWFkZXJcXEhlYWRUb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBoZWFkVG9wID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10b3BcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgPGxpPkF2YWlsYWJsZSAyNC83IGF0ICsxICg2MTQpIDY3NC03OTQ0PC9saT5cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaGVhZGVyLXRvcCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2NTRiMztcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBoZWFkVG9wO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Header\\\\HeadTop.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (headTop);

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout */ "./components/Layout.js");
/* harmony import */ var _HeadTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeadTop */ "./components/Header/HeadTop.js");
/* harmony import */ var _HeadBottom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeadBottom */ "./components/Header/HeadBottom.js");
/* harmony import */ var _Navigations_Navigations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Navigations/Navigations */ "./components/Navigations/Navigations.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Header\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const header = () => {
  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1236376062" + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_HeadTop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(_HeadBottom__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx(_Navigations_Navigations__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1236376062",
    __self: undefined
  }, ".header.jsx-1236376062{width:100%;height:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcSGVhZGVyXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBR3dCLFdBQ0UsYUFFZiIsImZpbGUiOiJDOlxcVXNlcnNcXEtoM21cXERvY3VtZW50c1xccHJvamVjdHNcXGF1c3RpbkV4cHJlc3NcXGNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9MYXlvdXRcIjtcclxuaW1wb3J0IEhlYWRUb3AgZnJvbSBcIi4vSGVhZFRvcFwiO1xyXG5pbXBvcnQgSGVhZEJvdHRvbSBmcm9tIFwiLi9IZWFkQm90dG9tXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9ucyBmcm9tIFwiLi4vTmF2aWdhdGlvbnMvTmF2aWdhdGlvbnNcIjtcclxuXHJcbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICA8SGVhZFRvcCAvPlxyXG4gICAgICAgIDxIZWFkQm90dG9tIC8+XHJcbiAgICAgICAgPE5hdmlnYXRpb25zIC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Header\\\\Header.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const layout = props => {
  return __jsx("div", {
    className: "jsx-1878896940" + " " + "page-layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1878896940",
    __self: undefined
  }, "*{box-sizing:border-box;}.page-layout{width:100%;height:100%;}body{margin:0;padding:0;font-family:\"Open Sans\",san-serif;font-size:16px;color:#0e2a47;}h1,h2,h3,h4,h5,h6{margin:0px;}ul{padding:0;margin:0;list-style:none;}input{font-family:\"Open Sans\",san-serif;}a{-webkit-text-decoration:none;text-decoration:none;color:#1b222b;}select{background-position:right 12px center;background-repeat:no-repeat;backgroung-color:white;padding:8px 30px 8px 0px;font-family:\"Open Sans\",san-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl5QixBQUdpQyxBQUdYLEFBSUYsQUFhRSxBQUlELEFBTXlCLEFBR2QsQUFLaUIsU0E5QjVCLENBaUJELENBckJHLEFBaUJkLFFBWnFDLEFBaUJuQixHQXpCbEIsQ0FJQSxXQTBCQSxDQUpBLEdBWThCLFlBTGQsR0F4QkMsV0F5QmpCLEVBTXlCLEVBOUJULGNBQ2hCLE9BOEIyQix5QkFDVSxrQ0FDckMiLCJmaWxlIjoiQzpcXFVzZXJzXFxLaDNtXFxEb2N1bWVudHNcXHByb2plY3RzXFxhdXN0aW5FeHByZXNzXFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxheW91dFwiPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFnZS1sYXlvdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW4tc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzBlMmE0NztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIGgzLFxyXG4gICAgICAgIGg0LFxyXG4gICAgICAgIGg1LFxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMWIyMjJiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgLy8gLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltYWdlcy9kb3dubG9hZC5zdmdcIik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5nLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCAwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const logo = () => {
  return __jsx("div", {
    className: "jsx-1502100014" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-1502100014",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1502100014" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "austin", __jsx("span", {
    className: "jsx-1502100014" + " " + "red",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 19
    }
  }, "Exp"), "ress.com"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1502100014",
    __self: undefined
  }, ".logo.jsx-1502100014 h2.jsx-1502100014{color:#1b222b;font-family:\"Open sans\",san-serif;font-weight:700;}.red.jsx-1502100014{color:#f13c31;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFHeUIsQUFLQSxjQUpxQixBQUtyQyxrQ0FKa0IsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTG9nby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgbG9nbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICBhdXN0aW48c3BhbiBjbGFzc05hbWU9XCJyZWRcIj5FeHA8L3NwYW4+cmVzcy5jb21cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxvZ28gaDIge1xyXG4gICAgICAgICAgY29sb3I6ICMxYjIyMmI7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIHNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZCB7XHJcbiAgICAgICAgICBjb2xvcjogI2YxM2MzMTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dvO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Logo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (logo);

/***/ }),

/***/ "./components/Navigations/Category.js":
/*!********************************************!*\
  !*** ./components/Navigations/Category.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Navigations\\Category.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const category = props => {
  const {
    title,
    list
  } = props.category;
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2380410787", [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"]]]) + " " + "category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2380410787", [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, title), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2380410787", [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, list.map((product, index) => __jsx("li", {
    key: index,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2380410787", [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/" + product,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2380410787", [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, product))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2380410787",
    dynamic: [props.columnCategory ? "inline-block" : "block", props.columnCategory ? "8px" : "0px"],
    __self: undefined
  }, `li.__jsx-style-dynamic-selector{display:${props.columnCategory ? "inline-block" : "block"};padding:${props.columnCategory ? "8px" : "0px"};}li.__jsx-style-dynamic-selector:hover{border-bottom:1px solid;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXENhdGVnb3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHZ0QsQUFJYix3QkFDMUIsYUFKdUMscUNBQ3ZDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXENhdGVnb3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBjYXRlZ29yeSA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHRpdGxlLCBsaXN0IH0gPSBwcm9wcy5jYXRlZ29yeTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxyXG4gICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bGlzdC5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wiICsgcHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgPGE+e3Byb2R1Y3R9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGRpc3BsYXk6ICR7cHJvcHMuY29sdW1uQ2F0ZWdvcnkgPyBcImlubGluZS1ibG9ja1wiIDogXCJibG9ja1wifTtcclxuICAgICAgICAgIHBhZGRpbmc6ICR7cHJvcHMuY29sdW1uQ2F0ZWdvcnkgPyBcIjhweFwiIDogXCIwcHhcIn07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yeTtcclxuIl19 */
/*@ sourceURL=C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Navigations\\Category.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (category);

/***/ }),

/***/ "./components/Navigations/DropBox.js":
/*!*******************************************!*\
  !*** ./components/Navigations/DropBox.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ "./components/Navigations/Category.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Navigations\\DropBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const dropBox = props => {
  const categories = [...props.categories]; // Checking to see if the categories has morethan 1 colums

  let columnCategory = false;
  if (categories.length === 1) columnCategory = true;
  let classList = ["drop-box"];

  if (props.show) {
    classList.push("show");
  } else {
    classList.push("hidden");
  }

  return __jsx("div", {
    className: "jsx-2048442092" + " " + (classList.join(" ") || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, categories.map((category, index) => __jsx(_Category__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    category: category,
    columnCategory: columnCategory,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2048442092",
    __self: undefined
  }, ".drop-box.jsx-2048442092{width:700px;min-height:250px;padding:50px;background-color:#eee;position:absolute;top:65px;left:0px;z-index:5;-webkit-transition:flex 10s ease;transition:flex 10s ease;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;box-shadow:0px 0px 5px #575757;}.show.jsx-2048442092{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.hidden.jsx-2048442092{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXERyb3BCb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJrQixBQUd1QixBQWNDLEFBSUEsWUFqQkksQ0FrQm5CLGdCQWpCZSxhQUNTLHNCQUNKLFVBV3BCLFFBVlcsU0FDQSxTQUNDLFVBQ2UsMERBQ0ssbUhBQ1Isc0JBQ1MsK0JBQ2pDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXERyb3BCb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9DYXRlZ29yeVwiO1xyXG5cclxuY29uc3QgZHJvcEJveCA9IHByb3BzID0+IHtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gWy4uLnByb3BzLmNhdGVnb3JpZXNdO1xyXG5cclxuICAvLyBDaGVja2luZyB0byBzZWUgaWYgdGhlIGNhdGVnb3JpZXMgaGFzIG1vcmV0aGFuIDEgY29sdW1zXHJcbiAgbGV0IGNvbHVtbkNhdGVnb3J5ID0gZmFsc2U7XHJcbiAgaWYgKGNhdGVnb3JpZXMubGVuZ3RoID09PSAxKSBjb2x1bW5DYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gIGxldCBjbGFzc0xpc3QgPSBbXCJkcm9wLWJveFwiXTtcclxuXHJcbiAgaWYgKHByb3BzLnNob3cpIHtcclxuICAgIGNsYXNzTGlzdC5wdXNoKFwic2hvd1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY2xhc3NMaXN0LnB1c2goXCJoaWRkZW5cIik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NMaXN0LmpvaW4oXCIgXCIpfT5cclxuICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcclxuICAgICAgICA8Q2F0ZWdvcnlcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICBjb2x1bW5DYXRlZ29yeT17Y29sdW1uQ2F0ZWdvcnl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuZHJvcC1ib3gge1xyXG4gICAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNjVweDtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBmbGV4IDEwcyBlYXNlO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM1NzU3NTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaG93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJvcEJveDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Navigations\\\\DropBox.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (dropBox);

/***/ }),

/***/ "./components/Navigations/Navigation.js":
/*!**********************************************!*\
  !*** ./components/Navigations/Navigation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DropBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropBox */ "./components/Navigations/DropBox.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Navigations\\Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const navigation = props => {
  const {
    title,
    categories
  } = props.target;
  const {
    0: dropBoxState,
    1: setDropBoxState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleDropBox = () => {
    setDropBoxState(!dropBoxState);
  };

  return __jsx("li", {
    onMouseEnter: toggleDropBox,
    onMouseLeave: toggleDropBox,
    className: "jsx-290401071",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "jsx-290401071",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, title)), __jsx(_DropBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    categories: categories,
    show: dropBoxState,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "290401071",
    __self: undefined
  }, "li.jsx-290401071{padding:30px 30px;position:relative;cursor:pointer;background-image:url(\"/images/download.svg\");background-position:right 10px center;background-repeat:no-repeat;background-size:10px;}li.jsx-290401071:hover a.jsx-290401071{border-bottom:2px solid black;}a.jsx-290401071{-webkit-text-decoration:none;text-decoration:none;color:#035d59;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUc2QixBQVNZLEFBR1Qsa0JBWEgsWUFTcEIsTUFSaUIsY0FXRCxDQVYrQixhQVcvQyxnQ0FWd0Msc0NBQ1YsNEJBQ1AscUJBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgRHJvcEJveCBmcm9tIFwiLi9Ecm9wQm94XCI7XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGNhdGVnb3JpZXMgfSA9IHByb3BzLnRhcmdldDtcclxuXHJcbiAgY29uc3QgW2Ryb3BCb3hTdGF0ZSwgc2V0RHJvcEJveFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRHJvcEJveCA9ICgpID0+IHtcclxuICAgIHNldERyb3BCb3hTdGF0ZSghZHJvcEJveFN0YXRlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgb25Nb3VzZUVudGVyPXt0b2dnbGVEcm9wQm94fSBvbk1vdXNlTGVhdmU9e3RvZ2dsZURyb3BCb3h9PlxyXG4gICAgICA8TGluayBocmVmPXtcIi9wcm9kdWN0c1wifT5cclxuICAgICAgICA8YT57dGl0bGV9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxEcm9wQm94IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IHNob3c9e2Ryb3BCb3hTdGF0ZX0gLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaW1hZ2VzL2Rvd25sb2FkLnN2Z1wiKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6aG92ZXIgYSB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMwMzVkNTk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Navigations\\\\Navigation.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./components/Navigations/Navigations.js":
/*!***********************************************!*\
  !*** ./components/Navigations/Navigations.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Spacer */ "./components/Spacer.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ "./components/Navigations/Navigation.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Backdrop */ "./components/Backdrop.js");
/* harmony import */ var _container_Account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../container/Account */ "./container/Account.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Navigations\\Navigations.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const navigations = () => {
  const {
    0: showAccount,
    1: setShowAccount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const navs = [//Women Navigation list
  {
    title: "Women",
    categories: [{
      title: "Shoes",
      list: ["Sandals", "Sneakers", "Flats", "Mules", "Heals & Pumps", "Boots & Booties", "Clogs", "Slippers", "View all"]
    }, {
      title: "Activities",
      list: ["Comfort Shop", "Run Shop", "Spring Trend", "Outdoor", "Walking", "Athletic", "Food Health & Wellness", "Casual", "Dress/Evening", "Wide Shoes", "Narrow Shoes"]
    }, {
      title: "Clothing & More",
      list: ["Handbags & Purses", "Tops", "Hats", "Dresses", "Skirts", "Socks", "Athletic", "Rain Gear", "Coats & Jackets", "View all"]
    }]
  }, //Men Navigation list
  {
    title: "Men",
    categories: [{
      title: "Shoes",
      list: ["Sandals", "Sneakers", "Loafers", "Boat Shoes", "Oxfords", "Boots & Chukkas", "Slip-Ons", "Slippers", "View all"]
    }, {
      title: "Activities",
      list: ["Run Shop", "Spring Trend", "Outdoor", "Walking", "Athletic", "Food Health & Wellness", "Casual", "Dress/Evening", "Work", "Wide Shoes", "Narrow Shoes"]
    }, {
      title: "Clothing & More",
      list: ["Backpacks", "Tops", "Hats", "Dresses", "Shirts & T-Shirts", "Shorts & Boardshorts", "Pants", "Socks", "Athletic", "Rain Gear", "Coats & Jackets", "View all"]
    }]
  }, //Kids Navigation list
  {
    title: "Kids",
    categories: [{
      title: "Girls",
      list: ["Sandals", "Swimwear", "Sneaker & Athletic Shoes", "Dresses", "Flats", "Jumpsuits & Rompers", "Shirts & Tops", "Shorts", "Sleepwear", "Slippers", "View all"]
    }, {
      title: "Boys",
      list: ["Sneaker & Athletic Shoes", "Swimwear", "Sandals", "Shirts & Tops", "Boat Shoes", "Shorts", "Pants", "Loafers", "Sleepwear", "Slippers", "Jumpsuits & Rompers", "View all"]
    }, {
      title: "All kids",
      list: ["Juniors", "Baby & Toddler", "Accessories", "Kid's Sports", "Backpack & Bags", "Sunglasses", "Sale", "New Arrivals", "View all"]
    }]
  }, //Men Navigation list
  {
    title: "Brands",
    categories: [{
      title: "Brands Index",
      list: [...Array(26)].map((_, i) => String.fromCharCode(i + 65))
    }]
  }];

  const showAccountHandler = () => {
    setShowAccount(!showAccount);
  };

  return __jsx("div", {
    className: "jsx-4274932960" + " " + "nav-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-4274932960",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }
  }, navs.map((nav, index) => __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    target: nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  })), __jsx(_Spacer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }), __jsx("li", {
    onClick: showAccountHandler,
    id: "accountBtn",
    className: "jsx-4274932960",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, "Sign in / Register")), __jsx(_Backdrop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: showAccount,
    clicked: showAccountHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }
  }), __jsx(_container_Account__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: showAccount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3554785058",
    __self: undefined
  }, ".nav-wrapper.jsx-4274932960{width:100%;background-color:#eee;height:55px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nav-wrapper.jsx-4274932960 ul.jsx-4274932960{width:100%;max-width:1200px;margin:0px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.nav-wrapper.jsx-4274932960 ul.jsx-4274932960 li.jsx-4274932960:last-child{padding-right:0px;}li.jsx-4274932960{padding:30px 30px;cursor:pointer;}a.jsx-4274932960{-webkit-text-decoration:none;text-decoration:none;color:#035d59;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRNa0IsQUFHc0IsQUFTQSxBQU9PLEFBSUEsQUFLRyxXQXhCQyxBQVNMLE9BT25CLEFBSWlCLFVBVkMsS0FUSixBQW9CZCxXQVZlLENBVEEsS0F1QkMsY0FDaEIsc0RBZEEsQ0FUcUIsNkZBRXJCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vU3BhY2VyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCIuLi9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi4vLi4vY29udGFpbmVyL0FjY291bnRcIjtcclxuXHJcbmNvbnN0IG5hdmlnYXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93QWNjb3VudCwgc2V0U2hvd0FjY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG5hdnMgPSBbXHJcbiAgICAvL1dvbWVuIE5hdmlnYXRpb24gbGlzdFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJXb21lblwiLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiU2hvZXNcIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICAgICAgXCJGbGF0c1wiLFxyXG4gICAgICAgICAgICBcIk11bGVzXCIsXHJcbiAgICAgICAgICAgIFwiSGVhbHMgJiBQdW1wc1wiLFxyXG4gICAgICAgICAgICBcIkJvb3RzICYgQm9vdGllc1wiLFxyXG4gICAgICAgICAgICBcIkNsb2dzXCIsXHJcbiAgICAgICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICAgICAgXCJWaWV3IGFsbFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJBY3Rpdml0aWVzXCIsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIFwiQ29tZm9ydCBTaG9wXCIsXHJcbiAgICAgICAgICAgIFwiUnVuIFNob3BcIixcclxuICAgICAgICAgICAgXCJTcHJpbmcgVHJlbmRcIixcclxuICAgICAgICAgICAgXCJPdXRkb29yXCIsXHJcbiAgICAgICAgICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgICAgICAgICBcIkF0aGxldGljXCIsXHJcbiAgICAgICAgICAgIFwiRm9vZCBIZWFsdGggJiBXZWxsbmVzc1wiLFxyXG4gICAgICAgICAgICBcIkNhc3VhbFwiLFxyXG4gICAgICAgICAgICBcIkRyZXNzL0V2ZW5pbmdcIixcclxuICAgICAgICAgICAgXCJXaWRlIFNob2VzXCIsXHJcbiAgICAgICAgICAgIFwiTmFycm93IFNob2VzXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiBcIkNsb3RoaW5nICYgTW9yZVwiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBcIkhhbmRiYWdzICYgUHVyc2VzXCIsXHJcbiAgICAgICAgICAgIFwiVG9wc1wiLFxyXG4gICAgICAgICAgICBcIkhhdHNcIixcclxuICAgICAgICAgICAgXCJEcmVzc2VzXCIsXHJcbiAgICAgICAgICAgIFwiU2tpcnRzXCIsXHJcbiAgICAgICAgICAgIFwiU29ja3NcIixcclxuICAgICAgICAgICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgICAgICAgICBcIlJhaW4gR2VhclwiLFxyXG4gICAgICAgICAgICBcIkNvYXRzICYgSmFja2V0c1wiLFxyXG4gICAgICAgICAgICBcIlZpZXcgYWxsXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgLy9NZW4gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk1lblwiLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiU2hvZXNcIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICAgICAgXCJMb2FmZXJzXCIsXHJcbiAgICAgICAgICAgIFwiQm9hdCBTaG9lc1wiLFxyXG4gICAgICAgICAgICBcIk94Zm9yZHNcIixcclxuICAgICAgICAgICAgXCJCb290cyAmIENodWtrYXNcIixcclxuICAgICAgICAgICAgXCJTbGlwLU9uc1wiLFxyXG4gICAgICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQWN0aXZpdGllc1wiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBcIlJ1biBTaG9wXCIsXHJcbiAgICAgICAgICAgIFwiU3ByaW5nIFRyZW5kXCIsXHJcbiAgICAgICAgICAgIFwiT3V0ZG9vclwiLFxyXG4gICAgICAgICAgICBcIldhbGtpbmdcIixcclxuICAgICAgICAgICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgICAgICAgICBcIkZvb2QgSGVhbHRoICYgV2VsbG5lc3NcIixcclxuICAgICAgICAgICAgXCJDYXN1YWxcIixcclxuICAgICAgICAgICAgXCJEcmVzcy9FdmVuaW5nXCIsXHJcbiAgICAgICAgICAgIFwiV29ya1wiLFxyXG4gICAgICAgICAgICBcIldpZGUgU2hvZXNcIixcclxuICAgICAgICAgICAgXCJOYXJyb3cgU2hvZXNcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQ2xvdGhpbmcgJiBNb3JlXCIsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIFwiQmFja3BhY2tzXCIsXHJcbiAgICAgICAgICAgIFwiVG9wc1wiLFxyXG4gICAgICAgICAgICBcIkhhdHNcIixcclxuICAgICAgICAgICAgXCJEcmVzc2VzXCIsXHJcbiAgICAgICAgICAgIFwiU2hpcnRzICYgVC1TaGlydHNcIixcclxuICAgICAgICAgICAgXCJTaG9ydHMgJiBCb2FyZHNob3J0c1wiLFxyXG4gICAgICAgICAgICBcIlBhbnRzXCIsXHJcbiAgICAgICAgICAgIFwiU29ja3NcIixcclxuICAgICAgICAgICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgICAgICAgICBcIlJhaW4gR2VhclwiLFxyXG4gICAgICAgICAgICBcIkNvYXRzICYgSmFja2V0c1wiLFxyXG4gICAgICAgICAgICBcIlZpZXcgYWxsXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vS2lkcyBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiS2lkc1wiLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiR2lybHNcIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgICAgIFwiU3dpbXdlYXJcIixcclxuICAgICAgICAgICAgXCJTbmVha2VyICYgQXRobGV0aWMgU2hvZXNcIixcclxuICAgICAgICAgICAgXCJEcmVzc2VzXCIsXHJcbiAgICAgICAgICAgIFwiRmxhdHNcIixcclxuICAgICAgICAgICAgXCJKdW1wc3VpdHMgJiBSb21wZXJzXCIsXHJcbiAgICAgICAgICAgIFwiU2hpcnRzICYgVG9wc1wiLFxyXG4gICAgICAgICAgICBcIlNob3J0c1wiLFxyXG4gICAgICAgICAgICBcIlNsZWVwd2VhclwiLFxyXG4gICAgICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQm95c1wiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBcIlNuZWFrZXIgJiBBdGhsZXRpYyBTaG9lc1wiLFxyXG4gICAgICAgICAgICBcIlN3aW13ZWFyXCIsXHJcbiAgICAgICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgICAgICBcIlNoaXJ0cyAmIFRvcHNcIixcclxuICAgICAgICAgICAgXCJCb2F0IFNob2VzXCIsXHJcbiAgICAgICAgICAgIFwiU2hvcnRzXCIsXHJcbiAgICAgICAgICAgIFwiUGFudHNcIixcclxuICAgICAgICAgICAgXCJMb2FmZXJzXCIsXHJcbiAgICAgICAgICAgIFwiU2xlZXB3ZWFyXCIsXHJcbiAgICAgICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICAgICAgXCJKdW1wc3VpdHMgJiBSb21wZXJzXCIsXHJcbiAgICAgICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQWxsIGtpZHNcIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgXCJKdW5pb3JzXCIsXHJcbiAgICAgICAgICAgIFwiQmFieSAmIFRvZGRsZXJcIixcclxuICAgICAgICAgICAgXCJBY2Nlc3Nvcmllc1wiLFxyXG4gICAgICAgICAgICBcIktpZCdzIFNwb3J0c1wiLFxyXG4gICAgICAgICAgICBcIkJhY2twYWNrICYgQmFnc1wiLFxyXG4gICAgICAgICAgICBcIlN1bmdsYXNzZXNcIixcclxuICAgICAgICAgICAgXCJTYWxlXCIsXHJcbiAgICAgICAgICAgIFwiTmV3IEFycml2YWxzXCIsXHJcbiAgICAgICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgLy9NZW4gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkJyYW5kc1wiLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQnJhbmRzIEluZGV4XCIsXHJcbiAgICAgICAgICBsaXN0OiBbLi4uQXJyYXkoMjYpXS5tYXAoKF8sIGkpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KSksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc2hvd0FjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0FjY291bnQoIXNob3dBY2NvdW50KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge25hdnMubWFwKChuYXYsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TmF2aWdhdGlvbiBrZXk9e2luZGV4fSB0YXJnZXQ9e25hdn0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Nob3dBY2NvdW50SGFuZGxlcn0gaWQ9XCJhY2NvdW50QnRuXCI+XHJcbiAgICAgICAgICBTaWduIGluIC8gUmVnaXN0ZXJcclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8QmFja2Ryb3Agc2hvdz17c2hvd0FjY291bnR9IGNsaWNrZWQ9e3Nob3dBY2NvdW50SGFuZGxlcn0gLz5cclxuICAgICAgPEFjY291bnQgc2hvdz17c2hvd0FjY291bnR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubmF2LXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHVsIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMDM1ZDU5O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZpc3VhbGx5aGlkZGVuIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbnM7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Navigations\\\\Navigations.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3153797259",
    __self: undefined
  }, ".nav-wrapper ul li:first-child{padding-left:0px;}.hidden{display:none;}.visuallyhidden{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRPeUIsQUFHNEIsQUFJSixBQUlILFVBQ1osR0FKQSxJQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcTmF2aWdhdGlvbnNcXE5hdmlnYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNwYWNlciBmcm9tIFwiLi4vU3BhY2VyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCIuLi9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi4vLi4vY29udGFpbmVyL0FjY291bnRcIjtcclxuXHJcbmNvbnN0IG5hdmlnYXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93QWNjb3VudCwgc2V0U2hvd0FjY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG5hdnMgPSBbXHJcbiAgICAvL1dvbWVuIE5hdmlnYXRpb24gbGlzdFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJXb21lblwiLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiU2hvZXNcIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICAgICAgXCJGbGF0c1wiLFxyXG4gICAgICAgICAgICBcIk11bGVzXCIsXHJcbiAgICAgICAgICAgIFwiSGVhbHMgJiBQdW1wc1wiLFxyXG4gICAgICAgICAgICBcIkJvb3RzICYgQm9vdGllc1wiLFxyXG4gICAgICAgICAgICBcIkNsb2dzXCIsXHJcbiAgICAgICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICAgICAgXCJWaWV3IGFsbFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJBY3Rpdml0aWVzXCIsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIFwiQ29tZm9ydCBTaG9wXCIsXHJcbiAgICAgICAgICAgIFwiUnVuIFNob3BcIixcclxuICAgICAgICAgICAgXCJTcHJpbmcgVHJlbmRcIixcclxuICAgICAgICAgICAgXCJPdXRkb29yXCIsXHJcbiAgICAgICAgICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgICAgICAgICBcIkF0aGxldGljXCIsXHJcbiAgICAgICAgICAgIFwiRm9vZCBIZWFsdGggJiBXZWxsbmVzc1wiLFxyXG4gICAgICAgICAgICBcIkNhc3VhbFwiLFxyXG4gICAgICAgICAgICBcIkRyZXNzL0V2ZW5pbmdcIixcclxuICAgICAgICAgICAgXCJXaWRlIFNob2VzXCIsXHJcbiAgICAgICAgICAgIFwiTmFycm93IFNob2VzXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiBcIkNsb3RoaW5nICYgTW9yZVwiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBcIkhhbmRiYWdzICYgUHVyc2VzXCIsXHJcbiAgICAgICAgICAgIFwiVG9wc1wiLFxyXG4gICAgICAgICAgICBcIkhhdHNcIixcclxuICAgICAgICAgICAgXCJEcmVzc2VzXCIsXHJcbiAgICAgICAgICAgIFwiU2tpcnRzXCIsXHJcbiAgICAgICAgICAgIFwiU29ja3NcIixcclxuICAgICAgICAgICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgICAgICAgICBcIlJhaW4gR2VhclwiLFxyXG4gICAgICAgICAgICBcIkNvYXRzICYgSmFja2V0c1wiLFxyXG4gICAgICAgICAgICBcIlZpZXcgYWxsXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgLy9NZW4gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk1lblwiLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiU2hvZXNcIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgICAgIFwiU25lYWtlcnNcIixcclxuICAgICAgICAgICAgXCJMb2FmZXJzXCIsXHJcbiAgICAgICAgICAgIFwiQm9hdCBTaG9lc1wiLFxyXG4gICAgICAgICAgICBcIk94Zm9yZHNcIixcclxuICAgICAgICAgICAgXCJCb290cyAmIENodWtrYXNcIixcclxuICAgICAgICAgICAgXCJTbGlwLU9uc1wiLFxyXG4gICAgICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQWN0aXZpdGllc1wiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBcIlJ1biBTaG9wXCIsXHJcbiAgICAgICAgICAgIFwiU3ByaW5nIFRyZW5kXCIsXHJcbiAgICAgICAgICAgIFwiT3V0ZG9vclwiLFxyXG4gICAgICAgICAgICBcIldhbGtpbmdcIixcclxuICAgICAgICAgICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgICAgICAgICBcIkZvb2QgSGVhbHRoICYgV2VsbG5lc3NcIixcclxuICAgICAgICAgICAgXCJDYXN1YWxcIixcclxuICAgICAgICAgICAgXCJEcmVzcy9FdmVuaW5nXCIsXHJcbiAgICAgICAgICAgIFwiV29ya1wiLFxyXG4gICAgICAgICAgICBcIldpZGUgU2hvZXNcIixcclxuICAgICAgICAgICAgXCJOYXJyb3cgU2hvZXNcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQ2xvdGhpbmcgJiBNb3JlXCIsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIFwiQmFja3BhY2tzXCIsXHJcbiAgICAgICAgICAgIFwiVG9wc1wiLFxyXG4gICAgICAgICAgICBcIkhhdHNcIixcclxuICAgICAgICAgICAgXCJEcmVzc2VzXCIsXHJcbiAgICAgICAgICAgIFwiU2hpcnRzICYgVC1TaGlydHNcIixcclxuICAgICAgICAgICAgXCJTaG9ydHMgJiBCb2FyZHNob3J0c1wiLFxyXG4gICAgICAgICAgICBcIlBhbnRzXCIsXHJcbiAgICAgICAgICAgIFwiU29ja3NcIixcclxuICAgICAgICAgICAgXCJBdGhsZXRpY1wiLFxyXG4gICAgICAgICAgICBcIlJhaW4gR2VhclwiLFxyXG4gICAgICAgICAgICBcIkNvYXRzICYgSmFja2V0c1wiLFxyXG4gICAgICAgICAgICBcIlZpZXcgYWxsXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vS2lkcyBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiS2lkc1wiLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiR2lybHNcIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgICAgIFwiU3dpbXdlYXJcIixcclxuICAgICAgICAgICAgXCJTbmVha2VyICYgQXRobGV0aWMgU2hvZXNcIixcclxuICAgICAgICAgICAgXCJEcmVzc2VzXCIsXHJcbiAgICAgICAgICAgIFwiRmxhdHNcIixcclxuICAgICAgICAgICAgXCJKdW1wc3VpdHMgJiBSb21wZXJzXCIsXHJcbiAgICAgICAgICAgIFwiU2hpcnRzICYgVG9wc1wiLFxyXG4gICAgICAgICAgICBcIlNob3J0c1wiLFxyXG4gICAgICAgICAgICBcIlNsZWVwd2VhclwiLFxyXG4gICAgICAgICAgICBcIlNsaXBwZXJzXCIsXHJcbiAgICAgICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQm95c1wiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBcIlNuZWFrZXIgJiBBdGhsZXRpYyBTaG9lc1wiLFxyXG4gICAgICAgICAgICBcIlN3aW13ZWFyXCIsXHJcbiAgICAgICAgICAgIFwiU2FuZGFsc1wiLFxyXG4gICAgICAgICAgICBcIlNoaXJ0cyAmIFRvcHNcIixcclxuICAgICAgICAgICAgXCJCb2F0IFNob2VzXCIsXHJcbiAgICAgICAgICAgIFwiU2hvcnRzXCIsXHJcbiAgICAgICAgICAgIFwiUGFudHNcIixcclxuICAgICAgICAgICAgXCJMb2FmZXJzXCIsXHJcbiAgICAgICAgICAgIFwiU2xlZXB3ZWFyXCIsXHJcbiAgICAgICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICAgICAgXCJKdW1wc3VpdHMgJiBSb21wZXJzXCIsXHJcbiAgICAgICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQWxsIGtpZHNcIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgXCJKdW5pb3JzXCIsXHJcbiAgICAgICAgICAgIFwiQmFieSAmIFRvZGRsZXJcIixcclxuICAgICAgICAgICAgXCJBY2Nlc3Nvcmllc1wiLFxyXG4gICAgICAgICAgICBcIktpZCdzIFNwb3J0c1wiLFxyXG4gICAgICAgICAgICBcIkJhY2twYWNrICYgQmFnc1wiLFxyXG4gICAgICAgICAgICBcIlN1bmdsYXNzZXNcIixcclxuICAgICAgICAgICAgXCJTYWxlXCIsXHJcbiAgICAgICAgICAgIFwiTmV3IEFycml2YWxzXCIsXHJcbiAgICAgICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgLy9NZW4gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkJyYW5kc1wiLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQnJhbmRzIEluZGV4XCIsXHJcbiAgICAgICAgICBsaXN0OiBbLi4uQXJyYXkoMjYpXS5tYXAoKF8sIGkpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KSksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc2hvd0FjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0FjY291bnQoIXNob3dBY2NvdW50KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge25hdnMubWFwKChuYXYsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TmF2aWdhdGlvbiBrZXk9e2luZGV4fSB0YXJnZXQ9e25hdn0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPGxpIG9uQ2xpY2s9e3Nob3dBY2NvdW50SGFuZGxlcn0gaWQ9XCJhY2NvdW50QnRuXCI+XHJcbiAgICAgICAgICBTaWduIGluIC8gUmVnaXN0ZXJcclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8QmFja2Ryb3Agc2hvdz17c2hvd0FjY291bnR9IGNsaWNrZWQ9e3Nob3dBY2NvdW50SGFuZGxlcn0gLz5cclxuICAgICAgPEFjY291bnQgc2hvdz17c2hvd0FjY291bnR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubmF2LXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHVsIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMDM1ZDU5O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLm5hdi13cmFwcGVyIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnZpc3VhbGx5aGlkZGVuIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbnM7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Navigations\\\\Navigations.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (navigations);

/***/ }),

/***/ "./components/SearchBox.js":
/*!*********************************!*\
  !*** ./components/SearchBox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\SearchBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const searchBox = () => {
  return __jsx("div", {
    className: "jsx-2489694381" + " " + "search-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: "jsx-2489694381" + " " + "search-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search for shoes name, item key, etc.",
    className: "jsx-2489694381",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("input", {
    type: "submit",
    value: "Search",
    className: "jsx-2489694381",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2489694381",
    __self: undefined
  }, ".search-box.jsx-2489694381{-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}.search-form.jsx-2489694381{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.search-form.jsx-2489694381 input.jsx-2489694381{height:44px;border:1px solid black;font-size:16px;outline:none;}.search-form.jsx-2489694381 input[type=\"text\"].jsx-2489694381{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:0px 20px;border-top-left-radius:5px;border-bottom-left-radius:5px;border-right:none;color:#575757;}.search-form.jsx-2489694381 input[type=\"submit\"].jsx-2489694381{width:200px;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:#0654b3;border-color:#0654b3;color:white;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcU2VhcmNoQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFrQixBQUcwQixBQUdKLEFBSUMsQUFNQSxBQVNBLFdBbEJDLENBSVUsQUFlSyx1QkFkYixLQWVnQixVQWRsQixhQUNmLEdBVkEsS0FhbUIsQUFXUSxjQXBCM0IsR0FVNkIsUUFXTixtQkFWUyxFQVdsQixZQUNHLGVBQ2pCLENBWm9CLGtCQUNKLGNBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcU2VhcmNoQm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc2VhcmNoQm94ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBzaG9lcyBuYW1lLCBpdGVtIGtleSwgZXRjLlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIGlucHV0IHtcclxuICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICM1NzU3NTc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoQm94O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\SearchBox.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (searchBox);

/***/ }),

/***/ "./components/Spacer.js":
/*!******************************!*\
  !*** ./components/Spacer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\Spacer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const spacer = () => {
  return __jsx("div", {
    className: "jsx-4026738121" + " " + "spacer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4026738121",
    __self: undefined
  }, ".spacer.jsx-4026738121{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcU3BhY2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtrQixBQUd1Qix1RUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXEtoM21cXERvY3VtZW50c1xccHJvamVjdHNcXGF1c3RpbkV4cHJlc3NcXGNvbXBvbmVudHNcXFNwYWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHNwYWNlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwYWNlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\Spacer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (spacer);

/***/ }),

/***/ "./components/UI/EntryButton.js":
/*!**************************************!*\
  !*** ./components/UI/EntryButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\UI\\EntryButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const entryButton = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: props.sign,
    className: "jsx-1900668396" + " " + "Button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1900668396",
    __self: undefined
  }, ".Button.jsx-1900668396{width:100%;margin-bottom:5px;padding:10px;border:1px solid #ccc;border-radius:10px;font-size:1.1rem;}.Button.jsx-1900668396:hover{background-color:#525252;color:white;cursor:pointer;}@media screen and (max-width:768px){.Button.jsx-1900668396{border-radius:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcVUlcXEVudHJ5QnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFrQixBQUdzQixBQVNjLEFBT0wsV0FmRixPQWdCbEIsT0FQWSxJQVJDLFFBU0UsS0FSTyxVQVN4QixZQVJxQixtQkFDRixpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxLaDNtXFxEb2N1bWVudHNcXHByb2plY3RzXFxhdXN0aW5FeHByZXNzXFxjb21wb25lbnRzXFxVSVxcRW50cnlCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IGVudHJ5QnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5zaWdufSBjbGFzc05hbWU9XCJCdXR0b25cIj5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5CdXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5CdXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuQnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW50cnlCdXR0b247XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\UI\\\\EntryButton.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (entryButton);

/***/ }),

/***/ "./components/UI/Input.js":
/*!********************************!*\
  !*** ./components/UI/Input.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\UI\\Input.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const input = props => {
  const inputClasses = ["Input"];

  if (props.inValid) {
    inputClasses.push("Invalid");
  }

  let inputElement = __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("input", {
    className: inputClasses.join(" "),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), " ");

  switch (props.eleType) {
    case "input":
      {
        inputElement = __jsx("input", _extends({
          value: props.value,
          onChange: props.change,
          className: inputClasses.join(" ")
        }, props.eleConfig, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 9
          }
        }));
        break;
      }

    case "textarea":
      {
        inputElement = __jsx("textarea", _extends({
          value: props.value,
          onChange: props.change,
          className: inputClasses.join(" ")
        }, props.eleConfig, {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9
          }
        }));
        break;
      }

    default:
      inputElement = __jsx("input", {
        value: props.value,
        className: inputClasses.join(" "),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, inputElement, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3703292877",
    __self: undefined
  }, ".Input{width:100%;margin-bottom:5px;padding:10px;border:1px solid #ccc;border-radius:10px;}.Input::after{display:block;content:\"Love\";background-color:#525252;color:white;cursor:pointer;width:200px;z-index:100;}.InValid{border:1px solid salmon;}@media screen and (max-width:768px){.Input{border-radius:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcVUlcXElucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDeUIsQUFHc0IsQUFRRyxBQVVVLEFBTUosV0F2QkYsR0FRSCxJQWdCZixNQUxGLEtBbEJlLEFBUVksYUFQSCxZQVFWLFVBUE8sRUFRSixlQUNILEVBUmQsVUFTYyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29tcG9uZW50c1xcVUlcXElucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgaW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBpbnB1dENsYXNzZXMgPSBbXCJJbnB1dFwiXTtcclxuICBpZiAocHJvcHMuaW5WYWxpZCkge1xyXG4gICAgaW5wdXRDbGFzc2VzLnB1c2goXCJJbnZhbGlkXCIpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGlucHV0RWxlbWVudCA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX0gLz57XCIgXCJ9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIHN3aXRjaCAocHJvcHMuZWxlVHlwZSkge1xyXG4gICAgY2FzZSBcImlucHV0XCI6IHtcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZUNvbmZpZ31cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFwidGV4dGFyZWFcIjoge1xyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXMuam9pbihcIiBcIil9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlQ29uZmlnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnZhbHVlfSBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX0gLz5cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtpbnB1dEVsZW1lbnR9XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLklucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLklucHV0OjphZnRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiTG92ZVwiO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5JblZhbGlkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHNhbG1vbjtcclxuICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuSW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\components\\\\UI\\\\Input.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (input);

/***/ }),

/***/ "./container/Account.js":
/*!******************************!*\
  !*** ./container/Account.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SignIn */ "./container/SignIn.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignUp */ "./container/SignUp.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\container\\Account.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const account = props => {
  const {
    0: statusState,
    1: setStatusState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const OnToggleAccountHandler = () => {
    setStatusState(!statusState);
  };

  const signin = __jsx(_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"], {
    guest: false,
    toggleAccount: OnToggleAccountHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  });

  const signup = __jsx(_SignUp__WEBPACK_IMPORTED_MODULE_4__["default"], {
    guest: true,
    toggleAccount: OnToggleAccountHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 18
    }
  });

  return __jsx("div", {
    className: "jsx-1452055407 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1677569311", [props.show ? "flex" : "none"]]]) + " " + "Account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1452055407 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1677569311", [props.show ? "flex" : "none"]]]) + " " + "form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, statusState ? signin : signup), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1677569311",
    dynamic: [props.show ? "flex" : "none"],
    __self: undefined
  }, `.Account.__jsx-style-dynamic-selector{position:absolute;top:calc(50% - 250px);left:calc(50% - 220px);width:440px;height:500px;display:${props.show ? "flex" : "none"};-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:white;z-index:100;border-radius:10px;padding:30px 30px 0px 30px;-webkit-transition:all 5s linear;transition:all 5s linear;}@media screen and (max-width:1260px){.Main.__jsx-style-dynamic-selector{padding:0px 5%;}}@media screen and (max-width:992px){.logo.__jsx-style-dynamic-selector{width:130px;}}@media screen and (max-width:768px){.Main.__jsx-style-dynamic-selector{padding:10px 3%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:600px;}.logo.__jsx-style-dynamic-selector{width:100px;}.Main.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:100%;}.Account.__jsx-style-dynamic-selector{padding:10px 0px;box-shadow:none;height:500px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29udGFpbmVyXFxBY2NvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHNkIsQUFpQkQsQUFNSCxBQU1JLEFBS0osQUFHRCxBQUdNLFdBRm5CLENBZEEsQUFXQSxHQWpCQSxDQVl3QixDQVdOLENBeENJLGVBeUNQLE9BeENRLE1BeUN2QixpQkF4Q1ksWUFDQyxhQUN3QixNQTBCdEIsYUFDZixrQkExQnNCLDhFQUNILDZGQUNJLHVCQUNYLFlBQ08sbUJBQ1EsMkJBQ0YsMERBQzNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29udGFpbmVyXFxBY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ29cIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9TaWduVXBcIjtcclxuXHJcbmNvbnN0IGFjY291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdHVzU3RhdGUsIHNldFN0YXR1c1N0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBPblRvZ2dsZUFjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzU3RhdGUoIXN0YXR1c1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduaW4gPSAoXHJcbiAgICA8U2lnbkluIGd1ZXN0PXtmYWxzZX0gdG9nZ2xlQWNjb3VudD17T25Ub2dnbGVBY2NvdW50SGFuZGxlcn0gLz5cclxuICApO1xyXG5cclxuICBjb25zdCBzaWdudXAgPSA8U2lnblVwIGd1ZXN0PXt0cnVlfSB0b2dnbGVBY2NvdW50PXtPblRvZ2dsZUFjY291bnRIYW5kbGVyfSAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQWNjb3VudFwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj57c3RhdHVzU3RhdGUgPyBzaWduaW4gOiBzaWdudXB9PC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkFjY291bnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDI1MHB4KTtcclxuICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjIwcHgpO1xyXG4gICAgICAgICAgd2lkdGg6IDQ0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6ICR7cHJvcHMuc2hvdyA/IFwiZmxleFwiIDogXCJub25lXCJ9O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMHB4IDMwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNXMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI2MHB4KSB7XHJcbiAgICAgICAgICAuTWFpbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuTWFpbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMyU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5NYWluID4gZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuQWNjb3VudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudDtcclxuIl19 */
/*@ sourceURL=C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\container\\Account.js */`), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1452055407",
    __self: undefined
  }, ".page-title{margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29udGFpbmVyXFxBY2NvdW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFeUIsQUFHMkIsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29udGFpbmVyXFxBY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ29cIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9TaWduVXBcIjtcclxuXHJcbmNvbnN0IGFjY291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdHVzU3RhdGUsIHNldFN0YXR1c1N0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBPblRvZ2dsZUFjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzU3RhdGUoIXN0YXR1c1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduaW4gPSAoXHJcbiAgICA8U2lnbkluIGd1ZXN0PXtmYWxzZX0gdG9nZ2xlQWNjb3VudD17T25Ub2dnbGVBY2NvdW50SGFuZGxlcn0gLz5cclxuICApO1xyXG5cclxuICBjb25zdCBzaWdudXAgPSA8U2lnblVwIGd1ZXN0PXt0cnVlfSB0b2dnbGVBY2NvdW50PXtPblRvZ2dsZUFjY291bnRIYW5kbGVyfSAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQWNjb3VudFwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj57c3RhdHVzU3RhdGUgPyBzaWduaW4gOiBzaWdudXB9PC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkFjY291bnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDI1MHB4KTtcclxuICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjIwcHgpO1xyXG4gICAgICAgICAgd2lkdGg6IDQ0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6ICR7cHJvcHMuc2hvdyA/IFwiZmxleFwiIDogXCJub25lXCJ9O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMHB4IDMwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNXMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI2MHB4KSB7XHJcbiAgICAgICAgICAuTWFpbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuTWFpbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMyU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5NYWluID4gZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuQWNjb3VudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\container\\\\Account.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (account);

/***/ }),

/***/ "./container/SignIn.js":
/*!*****************************!*\
  !*** ./container/SignIn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SwitchEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchEntry */ "./container/SwitchEntry.js");
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UI/Input */ "./components/UI/Input.js");
/* harmony import */ var _components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/EntryButton */ "./components/UI/EntryButton.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionTypes */ "./container/actionTypes.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\container\\SignIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const controls = {
  email: {
    eleType: "input",
    eleConfig: {
      type: "email",
      placeholder: "Email",
      required: true
    },
    validation: {
      required: true,
      match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    },
    valid: true,
    value: ""
  },
  password: {
    eleType: "input",
    eleConfig: {
      type: "password",
      placeholder: "Password",
      required: true
    },
    validation: {
      required: true,
      length: {
        min: 5
      }
    },
    valid: true,
    value: ""
  }
};

const signInFormReducer = (state, action) => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_4__["START_TYPING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.field]: _objectSpread(_objectSpread({}, state[action.field]), {}, {
          value: action.value
        })
      });

    default:
      throw new Error("No command found");
  }
};

const SignIn = props => {
  const {
    0: signInFormState,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(signInFormReducer, controls); // signin click handler

  const onSignInHandler = event => {
    event.preventDefault();
    const signInFormData = {
      username: signInFormState.email.value,
      password: signInFormState.password.value
    };
    console.log(signInFormData);
    fetch("http://localhost:2020/auth/local/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signInFormData)
    }).then(res => res.json()).then(res => {
      console.log(res);
    }).catch(error => {
      throw error;
    });
  }; // two way binding...


  const onInputChangeHandler = (event, field) => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["START_TYPING"],
      field,
      value: event.target.value
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "page-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, "Sign in"), __jsx(_SwitchEntry__WEBPACK_IMPORTED_MODULE_1__["default"], {
    guest: props.guest,
    toggleAccount: props.toggleAccount,
    entry: " Create account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }), __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, Object.keys(signInFormState).map(field => {
    return __jsx(_components_UI_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
      change: event => onInputChangeHandler(event, field),
      value: signInFormState[field].value,
      inValid: !signInFormState[field].valid,
      key: field,
      eleConfig: signInFormState[field].eleConfig,
      eleType: signInFormState[field].eleType,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    });
  }), __jsx(_components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sign: event => onSignInHandler(event),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, " ", "Sign In", " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

/***/ }),

/***/ "./container/SignUp.js":
/*!*****************************!*\
  !*** ./container/SignUp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SwitchEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchEntry */ "./container/SwitchEntry.js");
/* harmony import */ var _components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UI/EntryButton */ "./components/UI/EntryButton.js");
/* harmony import */ var _components_UI_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UI/Input */ "./components/UI/Input.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionTypes */ "./container/actionTypes.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\container\\SignUp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const controls = {
  fullname: {
    eleType: "input",
    eleConfig: {
      type: "text",
      placeholder: "Full Name",
      required: true
    },
    validation: {
      required: true,
      length: {
        min: 5
      },
      match: /(?:^[ a-zA-Z]{5,}$)/
    },
    valid: true,
    value: ""
  },
  email: {
    eleType: "input",
    eleConfig: {
      type: "email",
      placeholder: "Email",
      required: true
    },
    validation: {
      required: true,
      match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    },
    valid: true,
    value: ""
  },
  password: {
    eleType: "input",
    eleConfig: {
      type: "password",
      placeholder: "Password",
      required: true
    },
    validation: {
      required: true,
      length: {
        min: 5
      }
    },
    valid: true,
    value: ""
  }
};

const signUpFormReducer = (state, action) => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_4__["START_TYPING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.field]: _objectSpread(_objectSpread({}, state[action.field]), {}, {
          value: action.value
        })
      });

    case _actionTypes__WEBPACK_IMPORTED_MODULE_4__["CHECK_VALIDITY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.field]: _objectSpread(_objectSpread({}, state[action.field]), {}, {
          valid: action.valid
        })
      });

    default:
      throw new Error("No command found");
  }
};

const SignUp = props => {
  const {
    0: signUpFormState,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(signUpFormReducer, controls); // check validity

  const chectValidity = (rules, value) => {
    let isValid = true;

    if (rules.required) {
      isValid = value !== "" && isValid;
    }

    if (rules.length) {
      if (rules.length.min) {
        isValid = value.length >= rules.length.min && isValid;
      }
    }

    if (rules.match) {
      isValid = rules.match.test(value) && isValid;
    }

    return isValid;
  }; // signup click handler


  const onSignUpHandler = event => {
    event.preventDefault();
    const signUpFormData = {
      fullname: signUpFormState.fullname.value,
      email: signUpFormState.email.value,
      password: signUpFormState.password.value
    };
    fetch("http://localhost:2020/auth/local/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signUpFormData)
    }).then(res => res.json()).then(res => {
      console.log(res);
    }).catch(error => console.log(error));
  }; // two way binding...


  const onInputChangeHandler = (event, field) => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["START_TYPING"],
      field,
      value: event.target.value
    });
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["CHECK_VALIDITY"],
      field,
      valid: chectValidity(signUpFormState[field].validation, event.target.value)
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "page-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, "Sign up"), __jsx(_SwitchEntry__WEBPACK_IMPORTED_MODULE_1__["default"], {
    guest: props.guest,
    toggleAccount: props.toggleAccount,
    entry: " Sign In",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }), __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, Object.keys(signUpFormState).map(field => {
    return __jsx(_components_UI_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      change: event => onInputChangeHandler(event, field),
      value: signUpFormState[field].value,
      inValid: !signUpFormState[field].valid,
      key: field,
      eleConfig: signUpFormState[field].eleConfig,
      eleType: signUpFormState[field].eleType,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    });
  }), __jsx(_components_UI_EntryButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sign: event => onSignUpHandler(event),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, " ", "Sign Up", " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./container/SwitchEntry.js":
/*!**********************************!*\
  !*** ./container/SwitchEntry.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\container\\SwitchEntry.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const switchEntry = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h4", {
    className: "jsx-3107264623" + " " + "link-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, !props.guest ? "New User" : "Already have an account", "?", __jsx("span", {
    onClick: props.toggleAccount,
    className: "jsx-3107264623" + " " + "link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, props.entry)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3107264623",
    __self: undefined
  }, ".link-wrapper.jsx-3107264623{margin:5px 0px;}.link.jsx-3107264623{color:#0769e0;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS2gzbVxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcYXVzdGluRXhwcmVzc1xcY29udGFpbmVyXFxTd2l0Y2hFbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFHMEIsQUFHRCxjQUNDLENBSGpCLGNBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxLaDNtXFxEb2N1bWVudHNcXHByb2plY3RzXFxhdXN0aW5FeHByZXNzXFxjb250YWluZXJcXFN3aXRjaEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc3dpdGNoRW50cnkgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwibGluay13cmFwcGVyXCI+XHJcbiAgICAgICAgeyFwcm9wcy5ndWVzdCA/IFwiTmV3IFVzZXJcIiA6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnRcIn0/XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17cHJvcHMudG9nZ2xlQWNjb3VudH0gY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAge3Byb3BzLmVudHJ5fVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9oND5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGluay13cmFwcGVyIHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgY29sb3I6ICMwNzY5ZTA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzd2l0Y2hFbnRyeTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Kh3m\\\\Documents\\\\projects\\\\austinExpress\\\\container\\\\SwitchEntry.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (switchEntry);

/***/ }),

/***/ "./container/actionTypes.js":
/*!**********************************!*\
  !*** ./container/actionTypes.js ***!
  \**********************************/
/*! exports provided: START_TYPING, CHECK_VALIDITY, CLEAR_FIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_TYPING", function() { return START_TYPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_VALIDITY", function() { return CHECK_VALIDITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_FIELDS", function() { return CLEAR_FIELDS; });
const START_TYPING = "START_TYPING";
const CHECK_VALIDITY = "CHECK_VALIDITY";
const CLEAR_FIELDS = "CLEAR_FIELDS";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }), __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0JhY2tkcm9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkQm90dG9tLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRUb3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25zL0NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbnMvRHJvcEJveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25zL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9ucy9OYXZpZ2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NwYWNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0VudHJ5QnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL1NpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvU2lnblVwLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Td2l0Y2hFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiYmFja2Ryb3AiLCJwcm9wcyIsImNsaWNrZWQiLCJzaG93IiwiY2FydCIsImZvb3RlciIsImNhdGVnb3JpZXMiLCJ0aXRsZSIsImxpc3QiLCJtYXAiLCJjYXRlZ29yeSIsImluZGV4IiwiaGVhZEJvdHRvbSIsImhlYWRUb3AiLCJoZWFkZXIiLCJsYXlvdXQiLCJjaGlsZHJlbiIsImxvZ28iLCJjb2x1bW5DYXRlZ29yeSIsInByb2R1Y3QiLCJkcm9wQm94IiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwicHVzaCIsImpvaW4iLCJuYXZpZ2F0aW9uIiwidGFyZ2V0IiwiZHJvcEJveFN0YXRlIiwic2V0RHJvcEJveFN0YXRlIiwidXNlU3RhdGUiLCJ0b2dnbGVEcm9wQm94IiwibmF2aWdhdGlvbnMiLCJzaG93QWNjb3VudCIsInNldFNob3dBY2NvdW50IiwibmF2cyIsIkFycmF5IiwiXyIsImkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzaG93QWNjb3VudEhhbmRsZXIiLCJuYXYiLCJzZWFyY2hCb3giLCJzcGFjZXIiLCJlbnRyeUJ1dHRvbiIsInNpZ24iLCJpbnB1dCIsImlucHV0Q2xhc3NlcyIsImluVmFsaWQiLCJpbnB1dEVsZW1lbnQiLCJlbGVUeXBlIiwidmFsdWUiLCJjaGFuZ2UiLCJlbGVDb25maWciLCJhY2NvdW50Iiwic3RhdHVzU3RhdGUiLCJzZXRTdGF0dXNTdGF0ZSIsIk9uVG9nZ2xlQWNjb3VudEhhbmRsZXIiLCJzaWduaW4iLCJzaWdudXAiLCJjb250cm9scyIsImVtYWlsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ2YWxpZGF0aW9uIiwibWF0Y2giLCJ2YWxpZCIsInBhc3N3b3JkIiwibWluIiwic2lnbkluRm9ybVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImFjdGlvblR5cGVzIiwiZmllbGQiLCJFcnJvciIsIlNpZ25JbiIsInNpZ25JbkZvcm1TdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsIm9uU2lnbkluSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzaWduSW5Gb3JtRGF0YSIsInVzZXJuYW1lIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVycm9yIiwib25JbnB1dENoYW5nZUhhbmRsZXIiLCJndWVzdCIsInRvZ2dsZUFjY291bnQiLCJPYmplY3QiLCJrZXlzIiwiZnVsbG5hbWUiLCJzaWduVXBGb3JtUmVkdWNlciIsIlNpZ25VcCIsInNpZ25VcEZvcm1TdGF0ZSIsImNoZWN0VmFsaWRpdHkiLCJydWxlcyIsImlzVmFsaWQiLCJ0ZXN0Iiwib25TaWduVXBIYW5kbGVyIiwic2lnblVwRm9ybURhdGEiLCJzd2l0Y2hFbnRyeSIsImVudHJ5IiwiU1RBUlRfVFlQSU5HIiwiQ0hFQ0tfVkFMSURJVFkiLCJDTEVBUl9GSUVMRFMiLCJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInJlc29sdmVkSHJlZiIsInBhcnNlZEFzIiwiaGFuZGxlUmVmIiwicmVmIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJwYXRocyIsImVyciIsInJlbmRlciIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsIm9wdGlvbnMiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJjcmVhdGVVcmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFD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LEVBQUUsVUFBdkI7QUFDQSxZQUFNeU0sVUFBVSxHQUFHek0sRUFBRSxJQUFyQjtBQUVBLGFBQU9zRCxNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NELEM7Ozs7Ozs7Ozs7O0FDN0hELGlCQUFpQixtQkFBTyxDQUFDLG1FQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNb0osS0FBTixTQUFvQm5CLCtDQUFwQixDQUF3QjtBQUN0QmxKLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRXhCLGVBQUY7QUFBYTRLO0FBQWIsUUFBMkIsS0FBS3BULEtBQXRDO0FBRUEsV0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsU0FBRCxlQUFlb1QsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRkYsRUFHRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixDQURGLENBREY7QUFTRDs7QUFicUI7O0FBZ0JUaUIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgYmFja2Ryb3AgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJCYWNrZHJvcFwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrZWR9PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkJhY2tkcm9wIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICAgICAgICAgIHotaW5kZXg6IDkwO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogJHtwcm9wcy5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCJ9O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhY2tkcm9wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IGNhcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC13cmFwcGVyXCI+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NhcnRiLnN2Z1wiIGFsdD1cImNhcnRcIiBjbGFzc05hbWU9XCJjYXJ0XCIgLz4gKCBDYXJ0IDAgKVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1ub1wiPjA8L2Rpdj4gKi99XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY2FydC13cmFwcGVyIHtcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmRiMDA7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZGIwMDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcnQtd3JhcHBlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FydC13cmFwcGVyOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRiMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJ0IHtcclxuICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbnMvQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkV4cGxvcmUgQXVzdGluXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIlNob2VzXCIsXHJcbiAgICAgICAgXCJCcmFuZHNcIixcclxuICAgICAgICBcIkNsb3RoaW5nXCIsXHJcbiAgICAgICAgXCJSdW5uaW5nXCIsXHJcbiAgICAgICAgXCJIZWFscyAmIFB1bXBzXCIsXHJcbiAgICAgICAgXCJCb290cyAmIEJvb3RpZXNcIixcclxuICAgICAgICBcIkNsb2dzXCIsXHJcbiAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgIFwiTmV3IEFycml2YWxzXCIsXHJcbiAgICAgICAgXCJWaWV3IGFsbFwiXHJcbiAgICAgIF1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJDdXN0b21lciBTZXJ2aWNlXCIsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICBcIkZBUVwiLFxyXG4gICAgICAgIFwiSGVscCBjZW50ZXJcIixcclxuICAgICAgICBcIkJpbGxpbmcgSW5mb3JtYXRpb25cIixcclxuICAgICAgICBcIk15IEFjY291bnRcIixcclxuICAgICAgICBcIlNoaXBwaW5nICYgUmV0dXJuc1wiXHJcbiAgICAgIF1cclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJBYm91dCBBdXN0aW5cIixcclxuICAgICAgbGlzdDogW1wiQ29udGFjdCB1c1wiLCBcIkN1c3RvbWVycyBSZXZpZXdzXCIsIFwiQXV0aW4gQmVuZWZpdHNcIiwgXCJBYm91dCB1c1wiXVxyXG4gICAgfVxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhdGVnb3J5IGNhdGVnb3J5PXtjYXRlZ29yeX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPkNvbm5lY3QgV2l0aCBVczwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbHNcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mYWNlYm9vay5zdmdcIiBhbHQ9XCJmYWNlYm9va1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiIGFsdD1cImluc3RhZ3JhbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdHdpdHRlci5zdmdcIiBhbHQ9XCJ0d2l0dGVyXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9waW50ZXJlc3Quc3ZnXCIgYWx0PVwicGludGVyZXN0XCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy95b3V0dWJlLnN2Z1wiIGFsdD1cInlvdXR1YmVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBDb3B5cmlnaHQgJmNvcHk7IGF1c3RpbkV4cHJlc3MuY29tIDIwMjBcclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5mb290ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjIyMmI7XHJcbiAgICAgICAgICBjb2xvcjogIzhmOTM5NztcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweCAwcHggNTBweCAwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2NiY2RjZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvY2lhbHMge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29jaWFscyBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAuZm9vdGVyID4gZGl2IHtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDIzJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlci13cmFwcGVyIGEge1xyXG4gICAgICAgICAgY29sb3I6ICNjYmNkY2Y7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgbGkge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWIyMjJiO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vTG9nb1wiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi9TZWFyY2hCb3hcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL0NhcnRcIjtcclxuXHJcbmNvbnN0IGhlYWRCb3R0b20gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJvdHRvbVwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8U2VhcmNoQm94IC8+XHJcblxyXG4gICAgICA8Q2FydCAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXItYm90dG9tIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRCb3R0b207XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGhlYWRUb3AgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRvcFwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICA8bGk+QXZhaWxhYmxlIDI0LzcgYXQgKzEgKDYxNCkgNjc0LTc5NDQ8L2xpPlxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXItdG9wIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY1NGIzO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3MgbGkge1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRUb3A7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkVG9wIGZyb20gXCIuL0hlYWRUb3BcIjtcclxuaW1wb3J0IEhlYWRCb3R0b20gZnJvbSBcIi4vSGVhZEJvdHRvbVwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbnMgZnJvbSBcIi4uL05hdmlnYXRpb25zL05hdmlnYXRpb25zXCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPEhlYWRUb3AgLz5cclxuICAgICAgICA8SGVhZEJvdHRvbSAvPlxyXG4gICAgICAgIDxOYXZpZ2F0aW9ucyAvPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iLCJjb25zdCBsYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxheW91dFwiPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFnZS1sYXlvdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW4tc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzBlMmE0NztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxLFxyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIGgzLFxyXG4gICAgICAgIGg0LFxyXG4gICAgICAgIGg1LFxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjMWIyMjJiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgLy8gLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTJweCBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2ltYWdlcy9kb3dubG9hZC5zdmdcIik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5nLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCAwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FuLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBsb2dvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIGF1c3RpbjxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPkV4cDwvc3Bhbj5yZXNzLmNvbVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubG9nbyBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogIzFiMjIyYjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gc2Fuc1wiLCBzYW4tc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVkIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjEzYzMxO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgY2F0ZWdvcnkgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyB0aXRsZSwgbGlzdCB9ID0gcHJvcHMuY2F0ZWdvcnk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2xpc3QubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9cIiArIHByb2R1Y3R9PlxyXG4gICAgICAgICAgICAgIDxhPntwcm9kdWN0fTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiAke3Byb3BzLmNvbHVtbkNhdGVnb3J5ID8gXCJpbmxpbmUtYmxvY2tcIiA6IFwiYmxvY2tcIn07XHJcbiAgICAgICAgICBwYWRkaW5nOiAke3Byb3BzLmNvbHVtbkNhdGVnb3J5ID8gXCI4cHhcIiA6IFwiMHB4XCJ9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcnk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL0NhdGVnb3J5XCI7XHJcblxyXG5jb25zdCBkcm9wQm94ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbLi4ucHJvcHMuY2F0ZWdvcmllc107XHJcblxyXG4gIC8vIENoZWNraW5nIHRvIHNlZSBpZiB0aGUgY2F0ZWdvcmllcyBoYXMgbW9yZXRoYW4gMSBjb2x1bXNcclxuICBsZXQgY29sdW1uQ2F0ZWdvcnkgPSBmYWxzZTtcclxuICBpZiAoY2F0ZWdvcmllcy5sZW5ndGggPT09IDEpIGNvbHVtbkNhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgbGV0IGNsYXNzTGlzdCA9IFtcImRyb3AtYm94XCJdO1xyXG5cclxuICBpZiAocHJvcHMuc2hvdykge1xyXG4gICAgY2xhc3NMaXN0LnB1c2goXCJzaG93XCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbGFzc0xpc3QucHVzaChcImhpZGRlblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0xpc3Quam9pbihcIiBcIil9PlxyXG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxDYXRlZ29yeVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cclxuICAgICAgICAgIGNvbHVtbkNhdGVnb3J5PXtjb2x1bW5DYXRlZ29yeX1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5kcm9wLWJveCB7XHJcbiAgICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiA2NXB4O1xyXG4gICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGZsZXggMTBzIGVhc2U7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzU3NTc1NztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNob3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oaWRkZW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcm9wQm94O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgRHJvcEJveCBmcm9tIFwiLi9Ecm9wQm94XCI7XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUsIGNhdGVnb3JpZXMgfSA9IHByb3BzLnRhcmdldDtcclxuXHJcbiAgY29uc3QgW2Ryb3BCb3hTdGF0ZSwgc2V0RHJvcEJveFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRHJvcEJveCA9ICgpID0+IHtcclxuICAgIHNldERyb3BCb3hTdGF0ZSghZHJvcEJveFN0YXRlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgb25Nb3VzZUVudGVyPXt0b2dnbGVEcm9wQm94fSBvbk1vdXNlTGVhdmU9e3RvZ2dsZURyb3BCb3h9PlxyXG4gICAgICA8TGluayBocmVmPXtcIi9wcm9kdWN0c1wifT5cclxuICAgICAgICA8YT57dGl0bGV9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxEcm9wQm94IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IHNob3c9e2Ryb3BCb3hTdGF0ZX0gLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaW1hZ2VzL2Rvd25sb2FkLnN2Z1wiKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDEwcHggY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGk6aG92ZXIgYSB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMwMzVkNTk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgU3BhY2VyIGZyb20gXCIuLi9TcGFjZXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIi4uL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuLi8uLi9jb250YWluZXIvQWNjb3VudFwiO1xyXG5cclxuY29uc3QgbmF2aWdhdGlvbnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dBY2NvdW50LCBzZXRTaG93QWNjb3VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgbmF2cyA9IFtcclxuICAgIC8vV29tZW4gTmF2aWdhdGlvbiBsaXN0XHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIldvbWVuXCIsXHJcbiAgICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJTaG9lc1wiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBcIlNhbmRhbHNcIixcclxuICAgICAgICAgICAgXCJTbmVha2Vyc1wiLFxyXG4gICAgICAgICAgICBcIkZsYXRzXCIsXHJcbiAgICAgICAgICAgIFwiTXVsZXNcIixcclxuICAgICAgICAgICAgXCJIZWFscyAmIFB1bXBzXCIsXHJcbiAgICAgICAgICAgIFwiQm9vdHMgJiBCb290aWVzXCIsXHJcbiAgICAgICAgICAgIFwiQ2xvZ3NcIixcclxuICAgICAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgICAgICBcIlZpZXcgYWxsXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiBcIkFjdGl2aXRpZXNcIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgXCJDb21mb3J0IFNob3BcIixcclxuICAgICAgICAgICAgXCJSdW4gU2hvcFwiLFxyXG4gICAgICAgICAgICBcIlNwcmluZyBUcmVuZFwiLFxyXG4gICAgICAgICAgICBcIk91dGRvb3JcIixcclxuICAgICAgICAgICAgXCJXYWxraW5nXCIsXHJcbiAgICAgICAgICAgIFwiQXRobGV0aWNcIixcclxuICAgICAgICAgICAgXCJGb29kIEhlYWx0aCAmIFdlbGxuZXNzXCIsXHJcbiAgICAgICAgICAgIFwiQ2FzdWFsXCIsXHJcbiAgICAgICAgICAgIFwiRHJlc3MvRXZlbmluZ1wiLFxyXG4gICAgICAgICAgICBcIldpZGUgU2hvZXNcIixcclxuICAgICAgICAgICAgXCJOYXJyb3cgU2hvZXNcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6IFwiQ2xvdGhpbmcgJiBNb3JlXCIsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIFwiSGFuZGJhZ3MgJiBQdXJzZXNcIixcclxuICAgICAgICAgICAgXCJUb3BzXCIsXHJcbiAgICAgICAgICAgIFwiSGF0c1wiLFxyXG4gICAgICAgICAgICBcIkRyZXNzZXNcIixcclxuICAgICAgICAgICAgXCJTa2lydHNcIixcclxuICAgICAgICAgICAgXCJTb2Nrc1wiLFxyXG4gICAgICAgICAgICBcIkF0aGxldGljXCIsXHJcbiAgICAgICAgICAgIFwiUmFpbiBHZWFyXCIsXHJcbiAgICAgICAgICAgIFwiQ29hdHMgJiBKYWNrZXRzXCIsXHJcbiAgICAgICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICAvL01lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTWVuXCIsXHJcbiAgICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJTaG9lc1wiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBcIlNhbmRhbHNcIixcclxuICAgICAgICAgICAgXCJTbmVha2Vyc1wiLFxyXG4gICAgICAgICAgICBcIkxvYWZlcnNcIixcclxuICAgICAgICAgICAgXCJCb2F0IFNob2VzXCIsXHJcbiAgICAgICAgICAgIFwiT3hmb3Jkc1wiLFxyXG4gICAgICAgICAgICBcIkJvb3RzICYgQ2h1a2thc1wiLFxyXG4gICAgICAgICAgICBcIlNsaXAtT25zXCIsXHJcbiAgICAgICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICAgICAgXCJWaWV3IGFsbFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJBY3Rpdml0aWVzXCIsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIFwiUnVuIFNob3BcIixcclxuICAgICAgICAgICAgXCJTcHJpbmcgVHJlbmRcIixcclxuICAgICAgICAgICAgXCJPdXRkb29yXCIsXHJcbiAgICAgICAgICAgIFwiV2Fsa2luZ1wiLFxyXG4gICAgICAgICAgICBcIkF0aGxldGljXCIsXHJcbiAgICAgICAgICAgIFwiRm9vZCBIZWFsdGggJiBXZWxsbmVzc1wiLFxyXG4gICAgICAgICAgICBcIkNhc3VhbFwiLFxyXG4gICAgICAgICAgICBcIkRyZXNzL0V2ZW5pbmdcIixcclxuICAgICAgICAgICAgXCJXb3JrXCIsXHJcbiAgICAgICAgICAgIFwiV2lkZSBTaG9lc1wiLFxyXG4gICAgICAgICAgICBcIk5hcnJvdyBTaG9lc1wiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJDbG90aGluZyAmIE1vcmVcIixcclxuICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgXCJCYWNrcGFja3NcIixcclxuICAgICAgICAgICAgXCJUb3BzXCIsXHJcbiAgICAgICAgICAgIFwiSGF0c1wiLFxyXG4gICAgICAgICAgICBcIkRyZXNzZXNcIixcclxuICAgICAgICAgICAgXCJTaGlydHMgJiBULVNoaXJ0c1wiLFxyXG4gICAgICAgICAgICBcIlNob3J0cyAmIEJvYXJkc2hvcnRzXCIsXHJcbiAgICAgICAgICAgIFwiUGFudHNcIixcclxuICAgICAgICAgICAgXCJTb2Nrc1wiLFxyXG4gICAgICAgICAgICBcIkF0aGxldGljXCIsXHJcbiAgICAgICAgICAgIFwiUmFpbiBHZWFyXCIsXHJcbiAgICAgICAgICAgIFwiQ29hdHMgJiBKYWNrZXRzXCIsXHJcbiAgICAgICAgICAgIFwiVmlldyBhbGxcIixcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAgLy9LaWRzIE5hdmlnYXRpb24gbGlzdFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJLaWRzXCIsXHJcbiAgICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJHaXJsc1wiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBcIlNhbmRhbHNcIixcclxuICAgICAgICAgICAgXCJTd2ltd2VhclwiLFxyXG4gICAgICAgICAgICBcIlNuZWFrZXIgJiBBdGhsZXRpYyBTaG9lc1wiLFxyXG4gICAgICAgICAgICBcIkRyZXNzZXNcIixcclxuICAgICAgICAgICAgXCJGbGF0c1wiLFxyXG4gICAgICAgICAgICBcIkp1bXBzdWl0cyAmIFJvbXBlcnNcIixcclxuICAgICAgICAgICAgXCJTaGlydHMgJiBUb3BzXCIsXHJcbiAgICAgICAgICAgIFwiU2hvcnRzXCIsXHJcbiAgICAgICAgICAgIFwiU2xlZXB3ZWFyXCIsXHJcbiAgICAgICAgICAgIFwiU2xpcHBlcnNcIixcclxuICAgICAgICAgICAgXCJWaWV3IGFsbFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJCb3lzXCIsXHJcbiAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIFwiU25lYWtlciAmIEF0aGxldGljIFNob2VzXCIsXHJcbiAgICAgICAgICAgIFwiU3dpbXdlYXJcIixcclxuICAgICAgICAgICAgXCJTYW5kYWxzXCIsXHJcbiAgICAgICAgICAgIFwiU2hpcnRzICYgVG9wc1wiLFxyXG4gICAgICAgICAgICBcIkJvYXQgU2hvZXNcIixcclxuICAgICAgICAgICAgXCJTaG9ydHNcIixcclxuICAgICAgICAgICAgXCJQYW50c1wiLFxyXG4gICAgICAgICAgICBcIkxvYWZlcnNcIixcclxuICAgICAgICAgICAgXCJTbGVlcHdlYXJcIixcclxuICAgICAgICAgICAgXCJTbGlwcGVyc1wiLFxyXG4gICAgICAgICAgICBcIkp1bXBzdWl0cyAmIFJvbXBlcnNcIixcclxuICAgICAgICAgICAgXCJWaWV3IGFsbFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJBbGwga2lkc1wiLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBcIkp1bmlvcnNcIixcclxuICAgICAgICAgICAgXCJCYWJ5ICYgVG9kZGxlclwiLFxyXG4gICAgICAgICAgICBcIkFjY2Vzc29yaWVzXCIsXHJcbiAgICAgICAgICAgIFwiS2lkJ3MgU3BvcnRzXCIsXHJcbiAgICAgICAgICAgIFwiQmFja3BhY2sgJiBCYWdzXCIsXHJcbiAgICAgICAgICAgIFwiU3VuZ2xhc3Nlc1wiLFxyXG4gICAgICAgICAgICBcIlNhbGVcIixcclxuICAgICAgICAgICAgXCJOZXcgQXJyaXZhbHNcIixcclxuICAgICAgICAgICAgXCJWaWV3IGFsbFwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICAvL01lbiBOYXZpZ2F0aW9uIGxpc3RcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQnJhbmRzXCIsXHJcbiAgICAgIGNhdGVnb3JpZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogXCJCcmFuZHMgSW5kZXhcIixcclxuICAgICAgICAgIGxpc3Q6IFsuLi5BcnJheSgyNildLm1hcCgoXywgaSkgPT4gU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpKSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBzaG93QWNjb3VudEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93QWNjb3VudCghc2hvd0FjY291bnQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bmF2cy5tYXAoKG5hdiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxOYXZpZ2F0aW9uIGtleT17aW5kZXh9IHRhcmdldD17bmF2fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8bGkgb25DbGljaz17c2hvd0FjY291bnRIYW5kbGVyfSBpZD1cImFjY291bnRCdG5cIj5cclxuICAgICAgICAgIFNpZ24gaW4gLyBSZWdpc3RlclxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxCYWNrZHJvcCBzaG93PXtzaG93QWNjb3VudH0gY2xpY2tlZD17c2hvd0FjY291bnRIYW5kbGVyfSAvPlxyXG4gICAgICA8QWNjb3VudCBzaG93PXtzaG93QWNjb3VudH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5uYXYtd3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC5uYXYtd3JhcHBlciB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICMwMzVkNTk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAubmF2LXdyYXBwZXIgdWwgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudmlzdWFsbHloaWRkZW4ge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9ucztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc2VhcmNoQm94ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBzaG9lcyBuYW1lLCBpdGVtIGtleSwgZXRjLlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VhcmNoXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIGlucHV0IHtcclxuICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICM1NzU3NTc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjU0YjM7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoQm94O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzcGFjZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2VyXCI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc3BhY2VyIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcGFjZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgZW50cnlCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLnNpZ259IGNsYXNzTmFtZT1cIkJ1dHRvblwiPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MjUyO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5CdXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbnRyeUJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgaW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBpbnB1dENsYXNzZXMgPSBbXCJJbnB1dFwiXTtcclxuICBpZiAocHJvcHMuaW5WYWxpZCkge1xyXG4gICAgaW5wdXRDbGFzc2VzLnB1c2goXCJJbnZhbGlkXCIpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGlucHV0RWxlbWVudCA9IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX0gLz57XCIgXCJ9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIHN3aXRjaCAocHJvcHMuZWxlVHlwZSkge1xyXG4gICAgY2FzZSBcImlucHV0XCI6IHtcclxuICAgICAgaW5wdXRFbGVtZW50ID0gKFxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc2VzLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgey4uLnByb3BzLmVsZUNvbmZpZ31cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFwidGV4dGFyZWFcIjoge1xyXG4gICAgICBpbnB1dEVsZW1lbnQgPSAoXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuY2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXMuam9pbihcIiBcIil9XHJcbiAgICAgICAgICB7Li4ucHJvcHMuZWxlQ29uZmlnfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGlucHV0RWxlbWVudCA9IChcclxuICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb3BzLnZhbHVlfSBjbGFzc05hbWU9e2lucHV0Q2xhc3Nlcy5qb2luKFwiIFwiKX0gLz5cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtpbnB1dEVsZW1lbnR9XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgLklucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLklucHV0OjphZnRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiTG92ZVwiO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5JblZhbGlkIHtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHNhbG1vbjtcclxuICAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjsgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuSW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnB1dDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ29cIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduSW5cIjtcclxuaW1wb3J0IFNpZ25VcCBmcm9tIFwiLi9TaWduVXBcIjtcclxuXHJcbmNvbnN0IGFjY291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdHVzU3RhdGUsIHNldFN0YXR1c1N0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBPblRvZ2dsZUFjY291bnRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzU3RhdGUoIXN0YXR1c1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduaW4gPSAoXHJcbiAgICA8U2lnbkluIGd1ZXN0PXtmYWxzZX0gdG9nZ2xlQWNjb3VudD17T25Ub2dnbGVBY2NvdW50SGFuZGxlcn0gLz5cclxuICApO1xyXG5cclxuICBjb25zdCBzaWdudXAgPSA8U2lnblVwIGd1ZXN0PXt0cnVlfSB0b2dnbGVBY2NvdW50PXtPblRvZ2dsZUFjY291bnRIYW5kbGVyfSAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQWNjb3VudFwiPlxyXG4gICAgICA8TG9nbyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj57c3RhdHVzU3RhdGUgPyBzaWduaW4gOiBzaWdudXB9PC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkFjY291bnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDI1MHB4KTtcclxuICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjIwcHgpO1xyXG4gICAgICAgICAgd2lkdGg6IDQ0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6ICR7cHJvcHMuc2hvdyA/IFwiZmxleFwiIDogXCJub25lXCJ9O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMHB4IDMwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNXMgbGluZWFyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI2MHB4KSB7XHJcbiAgICAgICAgICAuTWFpbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuTWFpbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMyU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5NYWluID4gZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuQWNjb3VudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3aXRjaEVudHJ5IGZyb20gXCIuL1N3aXRjaEVudHJ5XCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9VSS9JbnB1dFwiO1xyXG5pbXBvcnQgRW50cnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvRW50cnlCdXR0b25cIjtcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4vYWN0aW9uVHlwZXNcIjtcclxuXHJcbmNvbnN0IGNvbnRyb2xzID0ge1xyXG4gIGVtYWlsOiB7XHJcbiAgICBlbGVUeXBlOiBcImlucHV0XCIsXHJcbiAgICBlbGVDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJFbWFpbFwiLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtYXRjaDogLyg/OlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzooMig1WzAtNV18WzAtNF1bMC05XSl8MVswLTldWzAtOV18WzEtOV0/WzAtOV0pKVxcLil7M30oPzooMig1WzAtNV18WzAtNF1bMC05XSl8MVswLTldWzAtOV18WzEtOV0/WzAtOV0pfFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkvLFxyXG4gICAgfSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgZWxlVHlwZTogXCJpbnB1dFwiLFxyXG4gICAgZWxlQ29uZmlnOiB7XHJcbiAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmRcIixcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgbGVuZ3RoOiB7IG1pbjogNSB9LFxyXG4gICAgfSxcclxuICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHNpZ25JbkZvcm1SZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNUQVJUX1RZUElORzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBbYWN0aW9uLmZpZWxkXTogeyAuLi5zdGF0ZVthY3Rpb24uZmllbGRdLCB2YWx1ZTogYWN0aW9uLnZhbHVlIH0sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21tYW5kIGZvdW5kXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNpZ25JbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaWduSW5Gb3JtU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc2lnbkluRm9ybVJlZHVjZXIsIGNvbnRyb2xzKTtcclxuICAvLyBzaWduaW4gY2xpY2sgaGFuZGxlclxyXG4gIGNvbnN0IG9uU2lnbkluSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHNpZ25JbkZvcm1EYXRhID0ge1xyXG4gICAgICB1c2VybmFtZTogc2lnbkluRm9ybVN0YXRlLmVtYWlsLnZhbHVlLFxyXG4gICAgICBwYXNzd29yZDogc2lnbkluRm9ybVN0YXRlLnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKHNpZ25JbkZvcm1EYXRhKTtcclxuXHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MjAyMC9hdXRoL2xvY2FsL3NpZ25pblwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2lnbkluRm9ybURhdGEpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gdHdvIHdheSBiaW5kaW5nLi4uXHJcbiAgY29uc3Qgb25JbnB1dENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUQVJUX1RZUElORyxcclxuICAgICAgZmllbGQsXHJcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+U2lnbiBpbjwvaDI+XHJcbiAgICAgIDxTd2l0Y2hFbnRyeVxyXG4gICAgICAgIGd1ZXN0PXtwcm9wcy5ndWVzdH1cclxuICAgICAgICB0b2dnbGVBY2NvdW50PXtwcm9wcy50b2dnbGVBY2NvdW50fVxyXG4gICAgICAgIGVudHJ5PVwiIENyZWF0ZSBhY2NvdW50XCJcclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIHtPYmplY3Qua2V5cyhzaWduSW5Gb3JtU3RhdGUpLm1hcCgoZmllbGQpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGNoYW5nZT17KGV2ZW50KSA9PiBvbklucHV0Q2hhbmdlSGFuZGxlcihldmVudCwgZmllbGQpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzaWduSW5Gb3JtU3RhdGVbZmllbGRdLnZhbHVlfVxyXG4gICAgICAgICAgICAgIGluVmFsaWQ9eyFzaWduSW5Gb3JtU3RhdGVbZmllbGRdLnZhbGlkfVxyXG4gICAgICAgICAgICAgIGtleT17ZmllbGR9XHJcbiAgICAgICAgICAgICAgZWxlQ29uZmlnPXtzaWduSW5Gb3JtU3RhdGVbZmllbGRdLmVsZUNvbmZpZ31cclxuICAgICAgICAgICAgICBlbGVUeXBlPXtzaWduSW5Gb3JtU3RhdGVbZmllbGRdLmVsZVR5cGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxFbnRyeUJ1dHRvbiBzaWduPXsoZXZlbnQpID0+IG9uU2lnbkluSGFuZGxlcihldmVudCl9PlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgU2lnbiBJbntcIiBcIn1cclxuICAgICAgICA8L0VudHJ5QnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTd2l0Y2hFbnRyeSBmcm9tIFwiLi9Td2l0Y2hFbnRyeVwiO1xyXG5pbXBvcnQgRW50cnlCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvRW50cnlCdXR0b25cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0lucHV0XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiO1xyXG5cclxuY29uc3QgY29udHJvbHMgPSB7XHJcbiAgZnVsbG5hbWU6IHtcclxuICAgIGVsZVR5cGU6IFwiaW5wdXRcIixcclxuICAgIGVsZUNvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwiRnVsbCBOYW1lXCIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIGxlbmd0aDogeyBtaW46IDUgfSxcclxuICAgICAgbWF0Y2g6IC8oPzpeWyBhLXpBLVpdezUsfSQpLyxcclxuICAgIH0sXHJcbiAgICB2YWxpZDogdHJ1ZSxcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIGVsZVR5cGU6IFwiaW5wdXRcIixcclxuICAgIGVsZUNvbmZpZzoge1xyXG4gICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkVtYWlsXCIsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIG1hdGNoOiAvKD86W2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OigyKDVbMC01XXxbMC00XVswLTldKXwxWzAtOV1bMC05XXxbMS05XT9bMC05XSkpXFwuKXszfSg/OigyKDVbMC01XXxbMC00XVswLTldKXwxWzAtOV1bMC05XXxbMS05XT9bMC05XSl8W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKS8sXHJcbiAgICB9LFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICBlbGVUeXBlOiBcImlucHV0XCIsXHJcbiAgICBlbGVDb25maWc6IHtcclxuICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxyXG4gICAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBsZW5ndGg6IHsgbWluOiA1IH0sXHJcbiAgICB9LFxyXG4gICAgdmFsaWQ6IHRydWUsXHJcbiAgICB2YWx1ZTogXCJcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3Qgc2lnblVwRm9ybVJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuU1RBUlRfVFlQSU5HOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIFthY3Rpb24uZmllbGRdOiB7IC4uLnN0YXRlW2FjdGlvbi5maWVsZF0sIHZhbHVlOiBhY3Rpb24udmFsdWUgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0hFQ0tfVkFMSURJVFk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2FjdGlvbi5maWVsZF06IHsgLi4uc3RhdGVbYWN0aW9uLmZpZWxkXSwgdmFsaWQ6IGFjdGlvbi52YWxpZCB9LFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tbWFuZCBmb3VuZFwiKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBTaWduVXAgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2lnblVwRm9ybVN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNpZ25VcEZvcm1SZWR1Y2VyLCBjb250cm9scyk7XHJcblxyXG4gIC8vIGNoZWNrIHZhbGlkaXR5XHJcbiAgY29uc3QgY2hlY3RWYWxpZGl0eSA9IChydWxlcywgdmFsdWUpID0+IHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIGlmIChydWxlcy5yZXF1aXJlZCkge1xyXG4gICAgICBpc1ZhbGlkID0gdmFsdWUgIT09IFwiXCIgJiYgaXNWYWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocnVsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChydWxlcy5sZW5ndGgubWluKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IHZhbHVlLmxlbmd0aCA+PSBydWxlcy5sZW5ndGgubWluICYmIGlzVmFsaWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocnVsZXMubWF0Y2gpIHtcclxuICAgICAgaXNWYWxpZCA9IHJ1bGVzLm1hdGNoLnRlc3QodmFsdWUpICYmIGlzVmFsaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxuICB9O1xyXG5cclxuICAvLyBzaWdudXAgY2xpY2sgaGFuZGxlclxyXG4gIGNvbnN0IG9uU2lnblVwSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHNpZ25VcEZvcm1EYXRhID0ge1xyXG4gICAgICBmdWxsbmFtZTogc2lnblVwRm9ybVN0YXRlLmZ1bGxuYW1lLnZhbHVlLFxyXG4gICAgICBlbWFpbDogc2lnblVwRm9ybVN0YXRlLmVtYWlsLnZhbHVlLFxyXG4gICAgICBwYXNzd29yZDogc2lnblVwRm9ybVN0YXRlLnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MjAyMC9hdXRoL2xvY2FsL3NpZ251cFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2lnblVwRm9ybURhdGEpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gdHdvIHdheSBiaW5kaW5nLi4uXHJcbiAgY29uc3Qgb25JbnB1dENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGZpZWxkKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUQVJUX1RZUElORyxcclxuICAgICAgZmllbGQsXHJcbiAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogYWN0aW9uVHlwZXMuQ0hFQ0tfVkFMSURJVFksXHJcbiAgICAgIGZpZWxkLFxyXG4gICAgICB2YWxpZDogY2hlY3RWYWxpZGl0eShcclxuICAgICAgICBzaWduVXBGb3JtU3RhdGVbZmllbGRdLnZhbGlkYXRpb24sXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICksXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+U2lnbiB1cDwvaDI+XHJcbiAgICAgIDxTd2l0Y2hFbnRyeVxyXG4gICAgICAgIGd1ZXN0PXtwcm9wcy5ndWVzdH1cclxuICAgICAgICB0b2dnbGVBY2NvdW50PXtwcm9wcy50b2dnbGVBY2NvdW50fVxyXG4gICAgICAgIGVudHJ5PVwiIFNpZ24gSW5cIlxyXG4gICAgICAvPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICB7T2JqZWN0LmtleXMoc2lnblVwRm9ybVN0YXRlKS5tYXAoKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBjaGFuZ2U9eyhldmVudCkgPT4gb25JbnB1dENoYW5nZUhhbmRsZXIoZXZlbnQsIGZpZWxkKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2lnblVwRm9ybVN0YXRlW2ZpZWxkXS52YWx1ZX1cclxuICAgICAgICAgICAgICBpblZhbGlkPXshc2lnblVwRm9ybVN0YXRlW2ZpZWxkXS52YWxpZH1cclxuICAgICAgICAgICAgICBrZXk9e2ZpZWxkfVxyXG4gICAgICAgICAgICAgIGVsZUNvbmZpZz17c2lnblVwRm9ybVN0YXRlW2ZpZWxkXS5lbGVDb25maWd9XHJcbiAgICAgICAgICAgICAgZWxlVHlwZT17c2lnblVwRm9ybVN0YXRlW2ZpZWxkXS5lbGVUeXBlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8RW50cnlCdXR0b24gc2lnbj17KGV2ZW50KSA9PiBvblNpZ25VcEhhbmRsZXIoZXZlbnQpfT5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIFNpZ24gVXB7XCIgXCJ9XHJcbiAgICAgICAgPC9FbnRyeUJ1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzd2l0Y2hFbnRyeSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJsaW5rLXdyYXBwZXJcIj5cclxuICAgICAgICB7IXByb3BzLmd1ZXN0ID8gXCJOZXcgVXNlclwiIDogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudFwifT9cclxuICAgICAgICA8c3BhbiBvbkNsaWNrPXtwcm9wcy50b2dnbGVBY2NvdW50fSBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICB7cHJvcHMuZW50cnl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2g0PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saW5rLXdyYXBwZXIge1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGluayB7XHJcbiAgICAgICAgICBjb2xvcjogIzA3NjllMDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN3aXRjaEVudHJ5O1xyXG4iLCJcclxuZXhwb3J0IGNvbnN0IFNUQVJUX1RZUElORyA9IFwiU1RBUlRfVFlQSU5HXCI7XHJcbmV4cG9ydCBjb25zdCBDSEVDS19WQUxJRElUWSA9IFwiQ0hFQ0tfVkFMSURJVFlcIjtcclxuZXhwb3J0IGNvbnN0IENMRUFSX0ZJRUxEUyA9IFwiQ0xFQVJfRklFTERTXCI7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
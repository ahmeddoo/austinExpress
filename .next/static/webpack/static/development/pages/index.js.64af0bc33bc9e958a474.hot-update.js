webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/UI/Carousel/Carousel.js":
/*!********************************************!*\
  !*** ./components/UI/Carousel/Carousel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.module.css */ "./components/UI/Carousel/Carousel.module.css");
/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Kh3m\\Documents\\projects\\austinExpress\\components\\UI\\Carousel\\Carousel.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var carousel = function carousel() {
  _s();

  var carouselRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      counterState = _useState[0],
      setCounterState = _useState[1];

  var counter = 1; // useEffect(() => {
  //     carouselRef.current.style.scrollBehavior = "unset";
  //     carouselRef.current.scrollBy(carouselRef.current.clientWidth, 0);
  //     const intervalRef = setInterval(() => {
  //         counter++;
  //         setCounterState(prevState => setCounterState(prevState+1));
  //         carouselRef.current.scrollTo(carouselRef.current.clientWidth * counter, 0);
  //     }, 5000);
  //     () => {
  //         clearInterval(intervalRef);
  //     }
  // }, []);

  var onCarouselScrollHandler = function onCarouselScrollHandler() {
    carouselRef.current.style.scrollBehavior = "smooth";
    var end = carouselRef.current.clientWidth + carouselRef.current.scrollLeft;
    var start = 0; // check if we've got to the end of scroll

    if (end + 5 >= carouselRef.current.scrollWidth) {
      carouselRef.current.style.scrollBehavior = "unset";
      carouselRef.current.scrollTo(carouselRef.current.clientWidth, 0);
      counter = 1;
      setCounterState(1);
    } // check if we're at the beginning of scroll


    if (carouselRef.current.scrollLeft === start) {
      carouselRef.current.style.scrollBehavior = "unset";
      carouselRef.current.scrollTo(carouselRef.current.clientWidth * 4, 0);
      counter = 4;
    }
  };

  var onPrevHandler = function onPrevHandler() {
    counter--;
    carouselRef.current.scrollTo(carouselRef.current.clientWidth * counter, 0);
  };

  var onNextHandler = function onNextHandler() {
    counter++;
    carouselRef.current.scrollTo(carouselRef.current.clientWidth * counter, 0);
  };

  var onScrollToPosHandler = function onScrollToPosHandler(pos) {
    carouselRef.current.scrollTo(carouselRef.current.clientWidth * pos, 0);
    counter = pos;
  };

  return __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Conatiner,
    ref: carouselRef,
    onScroll: onCarouselScrollHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: [_Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content, _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content__Last_Clone].join(" "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero3.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero1.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero2.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero3.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: [_Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content, _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content__First_Clone].join(" "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Buttons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.PrevBtn,
    onClick: onPrevHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: "/images/next.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 79
    }
  }), " "), __jsx("span", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.NextBtn,
    onClick: onNextHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: "/images/next.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 79
    }
  }), " "))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CircleButtons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: [_Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.First, counterState === 1 ? _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Active : ""].join(" "),
    onClick: function onClick() {
      return onScrollToPosHandler(1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, " 1 "), __jsx("span", {
    className: [_Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Second, counterState === 2 ? _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Active : ""].join(" "),
    onClick: function onClick() {
      return onScrollToPosHandler(2);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, " 2 "), __jsx("span", {
    className: [_Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Third, counterState === 3 ? _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Active : ""].join(" "),
    onClick: function onClick() {
      return onScrollToPosHandler(3);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, " 3 "), __jsx("span", {
    className: [_Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Fourth, counterState === 4 ? _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Active : ""].join(" "),
    onClick: function onClick() {
      return onScrollToPosHandler(4);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, " 4 ")));
};

_s(carousel, "P5gRGKiqk5RZxuLSTe2HLoX7R+w=");

/* harmony default export */ __webpack_exports__["default"] = (carousel);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Nhcm91c2VsL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbImNhcm91c2VsIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImNvdW50ZXJTdGF0ZSIsInNldENvdW50ZXJTdGF0ZSIsImNvdW50ZXIiLCJvbkNhcm91c2VsU2Nyb2xsSGFuZGxlciIsImN1cnJlbnQiLCJzdHlsZSIsInNjcm9sbEJlaGF2aW9yIiwiZW5kIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxMZWZ0Iiwic3RhcnQiLCJzY3JvbGxXaWR0aCIsInNjcm9sbFRvIiwib25QcmV2SGFuZGxlciIsIm9uTmV4dEhhbmRsZXIiLCJvblNjcm9sbFRvUG9zSGFuZGxlciIsInBvcyIsInN0eWxlcyIsIkNhcm91c2VsIiwiQ2Fyb3VzZWxfX0NvbmF0aW5lciIsIkNhcm91c2VsX19Db250ZW50IiwiQ2Fyb3VzZWxfX0NvbnRlbnRfX0xhc3RfQ2xvbmUiLCJqb2luIiwiTWVzc2FnZV9fQ2FyZCIsIkJ1dHRvbiIsIkNhcm91c2VsX19Db250ZW50X19GaXJzdF9DbG9uZSIsIkNhcm91c2VsX19CdXR0b25zIiwiUHJldkJ0biIsIk5leHRCdG4iLCJDaXJjbGVCdXR0b25zIiwiRmlyc3QiLCJBY3RpdmUiLCJTZWNvbmQiLCJUaGlyZCIsIkZvdXJ0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxFQUExQjs7QUFEbUIsa0JBRXFCQyxzREFBUSxDQUFDLENBQUQsQ0FGN0I7QUFBQSxNQUVaQyxZQUZZO0FBQUEsTUFFRUMsZUFGRjs7QUFJbkIsTUFBSUMsT0FBTyxHQUFHLENBQWQsQ0FKbUIsQ0FLbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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MkRBQU0sQ0FBQ2MsTUFBNUIsR0FBb0MsRUFBcEQsRUFBd0RULElBQXhELENBQTZELEdBQTdELENBQWpCO0FBQW9GLFdBQU8sRUFBRTtBQUFBLGFBQU1QLG9CQUFvQixDQUFDLENBQUQsQ0FBMUI7QUFBQSxLQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSkosQ0FqRUosQ0FESjtBQTBFSCxDQTlIRDs7R0FBTW5CLFE7O0FBZ0lTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjRhZjBiYzMzYmM5ZTk1OGE0NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJvdXNlbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBjYXJvdXNlbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbY291bnRlclN0YXRlLCBzZXRDb3VudGVyU3RhdGVdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gICAgbGV0IGNvdW50ZXIgPSAxO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJ1bnNldFwiO1xyXG4gICAgLy8gICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsQnkoY2Fyb3VzZWxSZWYuY3VycmVudC5jbGllbnRXaWR0aCwgMCk7XHJcbiAgICAvLyAgICAgY29uc3QgaW50ZXJ2YWxSZWYgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvdW50ZXIrKztcclxuICAgIC8vICAgICAgICAgc2V0Q291bnRlclN0YXRlKHByZXZTdGF0ZSA9PiBzZXRDb3VudGVyU3RhdGUocHJldlN0YXRlKzEpKTtcclxuICAgIC8vICAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxUbyhjYXJvdXNlbFJlZi5jdXJyZW50LmNsaWVudFdpZHRoICogY291bnRlciwgMCk7XHJcbiAgICAvLyAgICAgfSwgNTAwMCk7XHJcbiAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25DYXJvdXNlbFNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwic21vb3RoXCI7XHJcbiAgICAgICAgY29uc3QgZW5kID0gY2Fyb3VzZWxSZWYuY3VycmVudC5jbGllbnRXaWR0aCArIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBjb25zdCBzdGFydCA9IDA7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UndmUgZ290IHRvIHRoZSBlbmQgb2Ygc2Nyb2xsXHJcbiAgICAgICAgaWYoIGVuZCArIDUgPj0gY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCApIHtcclxuICAgICAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwidW5zZXRcIjtcclxuICAgICAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxUbyhjYXJvdXNlbFJlZi5jdXJyZW50LmNsaWVudFdpZHRoLCAwKTtcclxuICAgICAgICAgICAgY291bnRlciA9IDE7XHJcbiAgICAgICAgICAgIHNldENvdW50ZXJTdGF0ZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UncmUgYXQgdGhlIGJlZ2lubmluZyBvZiBzY3JvbGxcclxuICAgICAgICBpZihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgPT09IHN0YXJ0KSB7XHJcbiAgICAgICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInVuc2V0XCI7XHJcbiAgICAgICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsVG8oY2Fyb3VzZWxSZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIDQsIDApO1xyXG4gICAgICAgICAgICBjb3VudGVyID0gNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25QcmV2SGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb3VudGVyLS07XHJcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxUbyhjYXJvdXNlbFJlZi5jdXJyZW50LmNsaWVudFdpZHRoICogY291bnRlciwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25OZXh0SGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxUbyhjYXJvdXNlbFJlZi5jdXJyZW50LmNsaWVudFdpZHRoICogY291bnRlciwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25TY3JvbGxUb1Bvc0hhbmRsZXIgPSAoIHBvcyApID0+IHtcclxuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFRvKGNhcm91c2VsUmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKiBwb3MsIDApO1xyXG4gICAgICAgIGNvdW50ZXIgPSBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhcm91c2VsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DYXJvdXNlbF9fQ29uYXRpbmVyfSBcclxuICAgICAgICAgICAgICAgIHJlZj17Y2Fyb3VzZWxSZWZ9XHJcbiAgICAgICAgICAgICAgICBvblNjcm9sbD17b25DYXJvdXNlbFNjcm9sbEhhbmRsZXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLkNhcm91c2VsX19Db250ZW50LCBzdHlsZXMuQ2Fyb3VzZWxfX0NvbnRlbnRfX0xhc3RfQ2xvbmVdLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaGVyb3MvaGVybzMuanBnXCIgYWx0PVwiYmFubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lc3NhZ2VfX0NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b259PkV4cGxvcmUgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DYXJvdXNlbF9fQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hlcm9zL2hlcm8uanBnXCIgYWx0PVwiYmFubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lc3NhZ2VfX0NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b259PkV4cGxvcmUgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DYXJvdXNlbF9fQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hlcm9zL2hlcm8xLmpwZ1wiIGFsdD1cImJhbm5lclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZXNzYWdlX19DYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lcyA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5HZXQgeW91cnMgd2l0aCBqdXN0IGEgZmV3IGNsaWNrcyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9ufT5FeHBsb3JlIG1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2Fyb3VzZWxfX0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oZXJvcy9oZXJvMi5qcGdcIiBhbHQ9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVzc2FnZV9fQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXMgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2V0IHlvdXJzIHdpdGgganVzdCBhIGZldyBjbGlja3MgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbn0+RXhwbG9yZSBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhcm91c2VsX19Db250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaGVyb3MvaGVybzMuanBnXCIgYWx0PVwiYmFubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lc3NhZ2VfX0NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b259PkV4cGxvcmUgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMuQ2Fyb3VzZWxfX0NvbnRlbnQsIHN0eWxlcy5DYXJvdXNlbF9fQ29udGVudF9fRmlyc3RfQ2xvbmVdLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaGVyb3MvaGVyby5qcGdcIiBhbHQ9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVzc2FnZV9fQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXMgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2V0IHlvdXJzIHdpdGgganVzdCBhIGZldyBjbGlja3MgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbn0+RXhwbG9yZSBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhcm91c2VsX19CdXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5QcmV2QnRufSBvbkNsaWNrPXtvblByZXZIYW5kbGVyfT4gPGltZyBzcmM9XCIvaW1hZ2VzL25leHQucG5nXCIvPiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuTmV4dEJ0bn0gb25DbGljaz17b25OZXh0SGFuZGxlcn0+IDxpbWcgc3JjPVwiL2ltYWdlcy9uZXh0LnBuZ1wiLz4gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DaXJjbGVCdXR0b25zfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17W3N0eWxlcy5GaXJzdCwgY291bnRlclN0YXRlID09PSAxID8gc3R5bGVzLkFjdGl2ZTogXCJcIl0uam9pbihcIiBcIil9IG9uQ2xpY2s9eygpID0+IG9uU2Nyb2xsVG9Qb3NIYW5kbGVyKDEpfT4gMSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tzdHlsZXMuU2Vjb25kLCBjb3VudGVyU3RhdGUgPT09IDIgPyBzdHlsZXMuQWN0aXZlOiBcIlwiXS5qb2luKFwiIFwiKX0gb25DbGljaz17KCkgPT4gb25TY3JvbGxUb1Bvc0hhbmRsZXIoMil9PiAyIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17W3N0eWxlcy5UaGlyZCwgY291bnRlclN0YXRlID09PSAzID8gc3R5bGVzLkFjdGl2ZTogXCJcIl0uam9pbihcIiBcIil9IG9uQ2xpY2s9eygpID0+IG9uU2Nyb2xsVG9Qb3NIYW5kbGVyKDMpfT4gMyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tzdHlsZXMuRm91cnRoLCBjb3VudGVyU3RhdGUgPT09IDQgPyBzdHlsZXMuQWN0aXZlOiBcIlwiXS5qb2luKFwiIFwiKX0gb25DbGljaz17KCkgPT4gb25TY3JvbGxUb1Bvc0hhbmRsZXIoNCl9PiA0IDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2Fyb3VzZWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
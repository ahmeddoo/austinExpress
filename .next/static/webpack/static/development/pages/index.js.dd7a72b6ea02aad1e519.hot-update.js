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

  var counter = 1;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    carouselRef.current.style.scrollBehavior = "unset"; // carouselRef.current.scrollBy(carouselRef.current.clientWidth, 0);

    var intervalRef = setInterval(function () {
      counter++;
      setCounterState(function (prevState) {
        return setCounterState(prevState + 1);
      });
      carouselRef.current.scrollTo(carouselRef.current.clientWidth * counter, 0);
    }, 2000);

    (function () {
      clearInterval(intervalRef);
    });
  }, []);

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

_s(carousel, "JNProOAKZhhVBtUKEacuoKrgtG0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Nhcm91c2VsL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbImNhcm91c2VsIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImNvdW50ZXJTdGF0ZSIsInNldENvdW50ZXJTdGF0ZSIsImNvdW50ZXIiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJzY3JvbGxCZWhhdmlvciIsImludGVydmFsUmVmIiwic2V0SW50ZXJ2YWwiLCJwcmV2U3RhdGUiLCJzY3JvbGxUbyIsImNsaWVudFdpZHRoIiwiY2xlYXJJbnRlcnZhbCIsIm9uQ2Fyb3VzZWxTY3JvbGxIYW5kbGVyIiwiZW5kIiwic2Nyb2xsTGVmdCIsInN0YXJ0Iiwic2Nyb2xsV2lkdGgiLCJvblByZXZIYW5kbGVyIiwib25OZXh0SGFuZGxlciIsIm9uU2Nyb2xsVG9Qb3NIYW5kbGVyIiwicG9zIiwic3R5bGVzIiwiQ2Fyb3VzZWwiLCJDYXJvdXNlbF9fQ29uYXRpbmVyIiwiQ2Fyb3VzZWxfX0NvbnRlbnQiLCJDYXJvdXNlbF9fQ29udGVudF9fTGFzdF9DbG9uZSIsImpvaW4iLCJNZXNzYWdlX19DYXJkIiwiQnV0dG9uIiwiQ2Fyb3VzZWxfX0NvbnRlbnRfX0ZpcnN0X0Nsb25lIiwiQ2Fyb3VzZWxfX0J1dHRvbnMiLCJQcmV2QnRuIiwiTmV4dEJ0biIsIkNpcmNsZUJ1dHRvbnMiLCJGaXJzdCIsIkFjdGl2ZSIsIlNlY29uZCIsIlRoaXJkIiwiRm91cnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLEVBQTFCOztBQURtQixrQkFFcUJDLHNEQUFRLENBQUMsQ0FBRCxDQUY3QjtBQUFBLE1BRVpDLFlBRlk7QUFBQSxNQUVFQyxlQUZGOztBQUluQixNQUFJQyxPQUFPLEdBQUcs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QXdEVCxJQUF4RCxDQUE2RCxHQUE3RCxDQUFqQjtBQUFvRixXQUFPLEVBQUU7QUFBQSxhQUFNUCxvQkFBb0IsQ0FBQyxDQUFELENBQTFCO0FBQUEsS0FBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKLEVBR0k7QUFBTSxhQUFTLEVBQUUsQ0FBQ0UsMkRBQU0sQ0FBQ2dCLEtBQVIsRUFBZXRDLFlBQVksS0FBSyxDQUFqQixHQUFxQnNCLDJEQUFNLENBQUNjLE1BQTVCLEdBQW9DLEVBQW5ELEVBQXVEVCxJQUF2RCxDQUE0RCxHQUE1RCxDQUFqQjtBQUFtRixXQUFPLEVBQUU7QUFBQSxhQUFNUCxvQkFBb0IsQ0FBQyxDQUFELENBQTFCO0FBQUEsS0FBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhKLEVBSUk7QUFBTSxhQUFTLEVBQUUsQ0FBQ0UsMkRBQU0sQ0FBQ2lCLE1BQVIsRUFBZ0J2QyxZQUFZLEtBQUssQ0FBakIsR0FBcUJzQiwyREFBTSxDQUFDYyxNQUE1QixHQUFvQyxFQUFwRCxFQUF3RFQsSUFBeEQsQ0FBNkQsR0FBN0QsQ0FBakI7QUFBb0YsV0FBTyxFQUFFO0FBQUEsYUFBTVAsb0JBQW9CLENBQUMsQ0FBRCxDQUExQjtBQUFBLEtBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKSixDQWpFSixDQURKO0FBMEVILENBOUhEOztHQUFNeEIsUTs7QUFnSVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kZDdhNzJiNmVhMDJhYWQxZTUxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0Nhcm91c2VsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IGNhcm91c2VsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtjb3VudGVyU3RhdGUsIHNldENvdW50ZXJTdGF0ZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgICBsZXQgY291bnRlciA9IDE7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInVuc2V0XCI7XHJcbiAgICAgICAgLy8gY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxCeShjYXJvdXNlbFJlZi5jdXJyZW50LmNsaWVudFdpZHRoLCAwKTtcclxuICAgICAgICBjb25zdCBpbnRlcnZhbFJlZiA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBzZXRDb3VudGVyU3RhdGUocHJldlN0YXRlID0+IHNldENvdW50ZXJTdGF0ZShwcmV2U3RhdGUrMSkpO1xyXG4gICAgICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFRvKGNhcm91c2VsUmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKiBjb3VudGVyLCAwKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkNhcm91c2VsU2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJzbW9vdGhcIjtcclxuICAgICAgICBjb25zdCBlbmQgPSBjYXJvdXNlbFJlZi5jdXJyZW50LmNsaWVudFdpZHRoICsgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gMDtcclxuICAgICAgICAvLyBjaGVjayBpZiB3ZSd2ZSBnb3QgdG8gdGhlIGVuZCBvZiBzY3JvbGxcclxuICAgICAgICBpZiggZW5kICsgNSA+PSBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICkge1xyXG4gICAgICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJ1bnNldFwiO1xyXG4gICAgICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFRvKGNhcm91c2VsUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgsIDApO1xyXG4gICAgICAgICAgICBjb3VudGVyID0gMTtcclxuICAgICAgICAgICAgc2V0Q291bnRlclN0YXRlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjaGVjayBpZiB3ZSdyZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHNjcm9sbFxyXG4gICAgICAgIGlmKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCA9PT0gc3RhcnQpIHtcclxuICAgICAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwidW5zZXRcIjtcclxuICAgICAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxUbyhjYXJvdXNlbFJlZi5jdXJyZW50LmNsaWVudFdpZHRoICogNCwgMCk7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSA0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblByZXZIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvdW50ZXItLTtcclxuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFRvKGNhcm91c2VsUmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKiBjb3VudGVyLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbk5leHRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFRvKGNhcm91c2VsUmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKiBjb3VudGVyLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblNjcm9sbFRvUG9zSGFuZGxlciA9ICggcG9zICkgPT4ge1xyXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsVG8oY2Fyb3VzZWxSZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIHBvcywgMCk7XHJcbiAgICAgICAgY291bnRlciA9IHBvcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2Fyb3VzZWx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhcm91c2VsX19Db25hdGluZXJ9IFxyXG4gICAgICAgICAgICAgICAgcmVmPXtjYXJvdXNlbFJlZn1cclxuICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXtvbkNhcm91c2VsU2Nyb2xsSGFuZGxlcn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMuQ2Fyb3VzZWxfX0NvbnRlbnQsIHN0eWxlcy5DYXJvdXNlbF9fQ29udGVudF9fTGFzdF9DbG9uZV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oZXJvcy9oZXJvMy5qcGdcIiBhbHQ9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVzc2FnZV9fQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXMgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2V0IHlvdXJzIHdpdGgganVzdCBhIGZldyBjbGlja3MgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbn0+RXhwbG9yZSBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhcm91c2VsX19Db250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaGVyb3MvaGVyby5qcGdcIiBhbHQ9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVzc2FnZV9fQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXMgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2V0IHlvdXJzIHdpdGgganVzdCBhIGZldyBjbGlja3MgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbn0+RXhwbG9yZSBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhcm91c2VsX19Db250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaGVyb3MvaGVybzEuanBnXCIgYWx0PVwiYmFubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lc3NhZ2VfX0NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b259PkV4cGxvcmUgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DYXJvdXNlbF9fQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hlcm9zL2hlcm8yLmpwZ1wiIGFsdD1cImJhbm5lclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZXNzYWdlX19DYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lcyA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5HZXQgeW91cnMgd2l0aCBqdXN0IGEgZmV3IGNsaWNrcyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9ufT5FeHBsb3JlIG1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2Fyb3VzZWxfX0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oZXJvcy9oZXJvMy5qcGdcIiBhbHQ9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVzc2FnZV9fQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXMgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2V0IHlvdXJzIHdpdGgganVzdCBhIGZldyBjbGlja3MgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbn0+RXhwbG9yZSBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5DYXJvdXNlbF9fQ29udGVudCwgc3R5bGVzLkNhcm91c2VsX19Db250ZW50X19GaXJzdF9DbG9uZV0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oZXJvcy9oZXJvLmpwZ1wiIGFsdD1cImJhbm5lclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZXNzYWdlX19DYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lcyA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5HZXQgeW91cnMgd2l0aCBqdXN0IGEgZmV3IGNsaWNrcyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9ufT5FeHBsb3JlIG1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2Fyb3VzZWxfX0J1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLlByZXZCdG59IG9uQ2xpY2s9e29uUHJldkhhbmRsZXJ9PiA8aW1nIHNyYz1cIi9pbWFnZXMvbmV4dC5wbmdcIi8+IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5OZXh0QnRufSBvbkNsaWNrPXtvbk5leHRIYW5kbGVyfT4gPGltZyBzcmM9XCIvaW1hZ2VzL25leHQucG5nXCIvPiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNpcmNsZUJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbc3R5bGVzLkZpcnN0LCBjb3VudGVyU3RhdGUgPT09IDEgPyBzdHlsZXMuQWN0aXZlOiBcIlwiXS5qb2luKFwiIFwiKX0gb25DbGljaz17KCkgPT4gb25TY3JvbGxUb1Bvc0hhbmRsZXIoMSl9PiAxIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17W3N0eWxlcy5TZWNvbmQsIGNvdW50ZXJTdGF0ZSA9PT0gMiA/IHN0eWxlcy5BY3RpdmU6IFwiXCJdLmpvaW4oXCIgXCIpfSBvbkNsaWNrPXsoKSA9PiBvblNjcm9sbFRvUG9zSGFuZGxlcigyKX0+IDIgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbc3R5bGVzLlRoaXJkLCBjb3VudGVyU3RhdGUgPT09IDMgPyBzdHlsZXMuQWN0aXZlOiBcIlwiXS5qb2luKFwiIFwiKX0gb25DbGljaz17KCkgPT4gb25TY3JvbGxUb1Bvc0hhbmRsZXIoMyl9PiAzIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17W3N0eWxlcy5Gb3VydGgsIGNvdW50ZXJTdGF0ZSA9PT0gNCA/IHN0eWxlcy5BY3RpdmU6IFwiXCJdLmpvaW4oXCIgXCIpfSBvbkNsaWNrPXsoKSA9PiBvblNjcm9sbFRvUG9zSGFuZGxlcig0KX0+IDQgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJvdXNlbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
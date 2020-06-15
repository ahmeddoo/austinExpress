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
    carouselRef.current.style.scrollBehavior = "unset";
    carouselRef.current.scrollBy(carouselRef.current.clientWidth, 0);
    var intervalRef = setInterval(function () {
      counter++;
      carouselRef.current.scrollTo(carouselRef.current.clientWidth * counter, 0);
    }, 2000);

    (function () {
      clearInterval(intervalRef);
    });
  }, []);

  var onCarouselScrollHandler = function onCarouselScrollHandler() {
    console.log("Scroll...");
    setCounterState(function (p) {
      return setCounterState(p + 1);
    });
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
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Conatiner,
    ref: carouselRef,
    onScroll: onCarouselScrollHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: [_Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content, _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content__Last_Clone].join(" "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero3.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero1.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero2.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero3.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: [_Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content, _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Content__First_Clone].join(" "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/heros/hero.jpg",
    alt: "banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message__Card,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, " Just In: Clarks most trending shoes "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, "Get yours with just a few clicks "), __jsx("button", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Button,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, "Explore more"))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Carousel__Buttons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.PrevBtn,
    onClick: onPrevHandler,
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
  }), " "), __jsx("span", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.NextBtn,
    onClick: onNextHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, " ", __jsx("img", {
    src: "/images/next.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 79
    }
  }), " "))), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CircleButtons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 124,
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
      lineNumber: 125,
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
      lineNumber: 126,
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
      lineNumber: 127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Nhcm91c2VsL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbImNhcm91c2VsIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImNvdW50ZXJTdGF0ZSIsInNldENvdW50ZXJTdGF0ZSIsImNvdW50ZXIiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJzY3JvbGxCZWhhdmlvciIsInNjcm9sbEJ5IiwiY2xpZW50V2lkdGgiLCJpbnRlcnZhbFJlZiIsInNldEludGVydmFsIiwic2Nyb2xsVG8iLCJjbGVhckludGVydmFsIiwib25DYXJvdXNlbFNjcm9sbEhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwicCIsImVuZCIsInNjcm9sbExlZnQiLCJzdGFydCIsInNjcm9sbFdpZHRoIiwib25QcmV2SGFuZGxlciIsIm9uTmV4dEhhbmRsZXIiLCJvblNjcm9sbFRvUG9zSGFuZGxlciIsInBvcyIsInN0eWxlcyIsIkNhcm91c2VsIiwiQ2Fyb3VzZWxfX0NvbmF0aW5lciIsIkNhcm91c2VsX19Db250ZW50IiwiQ2Fyb3VzZWxfX0NvbnRlbnRfX0xhc3RfQ2xvbmUiLCJqb2luIiwiTWVzc2FnZV9fQ2FyZCIsIkJ1dHRvbiIsIkNhcm91c2VsX19Db250ZW50X19GaXJzdF9DbG9uZSIsIkNhcm91c2VsX19CdXR0b25zIiwiUHJldkJ0biIsIk5leHRCdG4iLCJDaXJjbGVCdXR0b25zIiwiRmlyc3QiLCJBY3RpdmUiLCJTZWNvbmQiLCJUaGlyZCIsIkZvdXJ0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxFQUExQjs7QUFEbUIsa0JBRXFCQyxzREFBUSxDQUFDLENBQUQsQ0FGN0I7QUFBQSxNQUVaQyxZQUZZO0FBQUEsTUFFRUMsZUFGRjs7QUFJ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QUE7QUFBQTtBQUFBLFdBREosRUFFSTtBQUFNLGFBQVMsRUFBRSxDQUFDRSwyREFBTSxDQUFDZSxNQUFSLEVBQWdCeEMsWUFBWSxLQUFLLENBQWpCLEdBQXFCeUIsMkRBQU0sQ0FBQ2MsTUFBNUIsR0FBb0MsRUFBcEQsRUFBd0RULElBQXhELENBQTZELEdBQTdELENBQWpCO0FBQW9GLFdBQU8sRUFBRTtBQUFBLGFBQU1QLG9CQUFvQixDQUFDLENBQUQsQ0FBMUI7QUFBQSxLQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkosRUFHSTtBQUFNLGFBQVMsRUFBRSxDQUFDRSwyREFBTSxDQUFDZ0IsS0FBUixFQUFlekMsWUFBWSxLQUFLLENBQWpCLEdBQXFCeUIsMkRBQU0sQ0FBQ2MsTUFBNUIsR0FBb0MsRUFBbkQsRUFBdURULElBQXZELENBQTRELEdBQTVELENBQWpCO0FBQW1GLFdBQU8sRUFBRTtBQUFBLGFBQU1QLG9CQUFvQixDQUFDLENBQUQsQ0FBMUI7QUFBQSxLQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEosRUFJSTtBQUFNLGFBQVMsRUFBRSxDQUFDRSwyREFBTSxDQUFDaUIsTUFBUixFQUFnQjFDLFlBQVksS0FBSyxDQUFqQixHQUFxQnlCLDJEQUFNLENBQUNjLE1BQTVCLEdBQW9DLEVBQXBELEVBQXdEVCxJQUF4RCxDQUE2RCxHQUE3RCxDQUFqQjtBQUFvRixXQUFPLEVBQUU7QUFBQSxhQUFNUCxvQkFBb0IsQ0FBQyxDQUFELENBQTFCO0FBQUEsS0FBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpKLENBakVKLENBREo7QUEwRUgsQ0EvSEQ7O0dBQU0zQixROztBQWlJU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjVmMmJmYmQ1ZDViZDkwOTU2Y2QzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2Fyb3VzZWwubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgY2Fyb3VzZWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW2NvdW50ZXJTdGF0ZSwgc2V0Q291bnRlclN0YXRlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGxldCBjb3VudGVyID0gMTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9IFwidW5zZXRcIjtcclxuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbEJ5KGNhcm91c2VsUmVmLmN1cnJlbnQuY2xpZW50V2lkdGgsIDApO1xyXG4gICAgICAgIGNvbnN0IGludGVydmFsUmVmID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsVG8oY2Fyb3VzZWxSZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIGNvdW50ZXIsIDApO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2Fyb3VzZWxTY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2Nyb2xsLi4uXCIpXHJcbiAgICAgICAgc2V0Q291bnRlclN0YXRlKHAgPT4gc2V0Q291bnRlclN0YXRlKHArMSkpO1xyXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInNtb290aFwiO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IGNhcm91c2VsUmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKyBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAwO1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlJ3ZlIGdvdCB0byB0aGUgZW5kIG9mIHNjcm9sbFxyXG4gICAgICAgIGlmKCBlbmQgKyA1ID49IGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKSB7XHJcbiAgICAgICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInVuc2V0XCI7XHJcbiAgICAgICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsVG8oY2Fyb3VzZWxSZWYuY3VycmVudC5jbGllbnRXaWR0aCwgMCk7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSAxO1xyXG4gICAgICAgICAgICBzZXRDb3VudGVyU3RhdGUoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlJ3JlIGF0IHRoZSBiZWdpbm5pbmcgb2Ygc2Nyb2xsXHJcbiAgICAgICAgaWYoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0ID09PSBzdGFydCkge1xyXG4gICAgICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJ1bnNldFwiO1xyXG4gICAgICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFRvKGNhcm91c2VsUmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKiA0LCAwKTtcclxuICAgICAgICAgICAgY291bnRlciA9IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uUHJldkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY291bnRlci0tO1xyXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsVG8oY2Fyb3VzZWxSZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIGNvdW50ZXIsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uTmV4dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsVG8oY2Fyb3VzZWxSZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIGNvdW50ZXIsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU2Nyb2xsVG9Qb3NIYW5kbGVyID0gKCBwb3MgKSA9PiB7XHJcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxUbyhjYXJvdXNlbFJlZi5jdXJyZW50LmNsaWVudFdpZHRoICogcG9zLCAwKTtcclxuICAgICAgICBjb3VudGVyID0gcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DYXJvdXNlbH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2Fyb3VzZWxfX0NvbmF0aW5lcn0gXHJcbiAgICAgICAgICAgICAgICByZWY9e2Nhcm91c2VsUmVmfVxyXG4gICAgICAgICAgICAgICAgb25TY3JvbGw9e29uQ2Fyb3VzZWxTY3JvbGxIYW5kbGVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5DYXJvdXNlbF9fQ29udGVudCwgc3R5bGVzLkNhcm91c2VsX19Db250ZW50X19MYXN0X0Nsb25lXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hlcm9zL2hlcm8zLmpwZ1wiIGFsdD1cImJhbm5lclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZXNzYWdlX19DYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lcyA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5HZXQgeW91cnMgd2l0aCBqdXN0IGEgZmV3IGNsaWNrcyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9ufT5FeHBsb3JlIG1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2Fyb3VzZWxfX0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oZXJvcy9oZXJvLmpwZ1wiIGFsdD1cImJhbm5lclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZXNzYWdlX19DYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lcyA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5HZXQgeW91cnMgd2l0aCBqdXN0IGEgZmV3IGNsaWNrcyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9ufT5FeHBsb3JlIG1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2Fyb3VzZWxfX0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9oZXJvcy9oZXJvMS5qcGdcIiBhbHQ9XCJiYW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVzc2FnZV9fQ2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gSnVzdCBJbjogQ2xhcmtzIG1vc3QgdHJlbmRpbmcgc2hvZXMgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2V0IHlvdXJzIHdpdGgganVzdCBhIGZldyBjbGlja3MgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLkJ1dHRvbn0+RXhwbG9yZSBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNhcm91c2VsX19Db250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaGVyb3MvaGVybzIuanBnXCIgYWx0PVwiYmFubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lc3NhZ2VfX0NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b259PkV4cGxvcmUgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DYXJvdXNlbF9fQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hlcm9zL2hlcm8zLmpwZ1wiIGFsdD1cImJhbm5lclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NZXNzYWdlX19DYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiBKdXN0IEluOiBDbGFya3MgbW9zdCB0cmVuZGluZyBzaG9lcyA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5HZXQgeW91cnMgd2l0aCBqdXN0IGEgZmV3IGNsaWNrcyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuQnV0dG9ufT5FeHBsb3JlIG1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLkNhcm91c2VsX19Db250ZW50LCBzdHlsZXMuQ2Fyb3VzZWxfX0NvbnRlbnRfX0ZpcnN0X0Nsb25lXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hlcm9zL2hlcm8uanBnXCIgYWx0PVwiYmFubmVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1lc3NhZ2VfX0NhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEp1c3QgSW46IENsYXJrcyBtb3N0IHRyZW5kaW5nIHNob2VzIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdldCB5b3VycyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5CdXR0b259PkV4cGxvcmUgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DYXJvdXNlbF9fQnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuUHJldkJ0bn0gb25DbGljaz17b25QcmV2SGFuZGxlcn0+IDxpbWcgc3JjPVwiL2ltYWdlcy9uZXh0LnBuZ1wiLz4gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLk5leHRCdG59IG9uQ2xpY2s9e29uTmV4dEhhbmRsZXJ9PiA8aW1nIHNyYz1cIi9pbWFnZXMvbmV4dC5wbmdcIi8+IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ2lyY2xlQnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tzdHlsZXMuRmlyc3QsIGNvdW50ZXJTdGF0ZSA9PT0gMSA/IHN0eWxlcy5BY3RpdmU6IFwiXCJdLmpvaW4oXCIgXCIpfSBvbkNsaWNrPXsoKSA9PiBvblNjcm9sbFRvUG9zSGFuZGxlcigxKX0+IDEgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbc3R5bGVzLlNlY29uZCwgY291bnRlclN0YXRlID09PSAyID8gc3R5bGVzLkFjdGl2ZTogXCJcIl0uam9pbihcIiBcIil9IG9uQ2xpY2s9eygpID0+IG9uU2Nyb2xsVG9Qb3NIYW5kbGVyKDIpfT4gMiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tzdHlsZXMuVGhpcmQsIGNvdW50ZXJTdGF0ZSA9PT0gMyA/IHN0eWxlcy5BY3RpdmU6IFwiXCJdLmpvaW4oXCIgXCIpfSBvbkNsaWNrPXsoKSA9PiBvblNjcm9sbFRvUG9zSGFuZGxlcigzKX0+IDMgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbc3R5bGVzLkZvdXJ0aCwgY291bnRlclN0YXRlID09PSA0ID8gc3R5bGVzLkFjdGl2ZTogXCJcIl0uam9pbihcIiBcIil9IG9uQ2xpY2s9eygpID0+IG9uU2Nyb2xsVG9Qb3NIYW5kbGVyKDQpfT4gNCA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcm91c2VsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
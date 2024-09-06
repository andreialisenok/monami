/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(module) {

class Gradient {
  constructor(gradients = "", maxNum = 10, colors = ["", ""], intervals = []) {
    const setColors = (props) => {
      if (props.length < 2) {
        throw new Error(
          `setGradient should have more than ${props.length} color`
        );
      } else {
        let increment = maxNum / (props.length - 1);
        let firstGradient = new GradientColor();
        let lower = 0;
        let upper = 0 + increment;
        firstGradient.setGradient(props[0], props[1]);
        firstGradient.setMidpoint(lower, upper);
        gradients = [firstGradient];
        intervals = [
          {
            lower,
            upper,
          },
        ];

        for (let i = 1; i < props.length - 1; i++) {
          let gradientColor = new GradientColor();
          let lower = 0 + increment * i;
          let upper = 0 + increment * (i + 1);
          gradientColor.setGradient(props[i], props[i + 1]);
          gradientColor.setMidpoint(lower, upper);
          gradients[i] = gradientColor;
          intervals[i] = {
            lower,
            upper,
          };
        }
        colors = props;
      }
    };

    this.setGradient = (...props) => {
      setColors(props);
      return this;
    };

    this.getArray = () => {
      let gradientArray = [];
      for (let j = 0; j < intervals.length; j++) {
        const interval = intervals[j];
        const start = interval.lower === 0 ? 1 : Math.ceil(interval.lower);
        const end =
          interval.upper === maxNum
            ? interval.upper + 1
            : Math.ceil(interval.upper);
        for (let i = start; i < end; i++) {
          gradientArray.push(gradients[j].getColor(i));
        }
      }
      return gradientArray;
    };

    this.getColor = (props) => {
      if (isNaN(props)) {
        throw new TypeError(`getColor should be a number`);
      } else if (props <= 0) {
        throw new TypeError(`getColor should be greater than ${props}`);
      } else {
        let segment = (maxNum - 0) / gradients.length;
        let index = Math.min(
          Math.floor((Math.max(props, 0) - 0) / segment),
          gradients.length - 1
        );
        return gradients[index].getColor(props);
      }
    };

    this.setMidpoint = (maxNumber) => {
      if (!isNaN(maxNumber) && maxNumber >= 0) {
        maxNum = maxNumber;
        setColors(colors);
      } else if (maxNumber <= 0) {
        throw new RangeError(`midPoint should be greater than ${maxNumber}`);
      } else {
        throw new RangeError("midPoint should be a number");
      }
      return this;
    };
  }
}

class GradientColor {
  constructor(startColor = "", endColor = "", minNum = 0, maxNum = 10) {
    this.setGradient = (colorStart, colorEnd) => {
      startColor = getHexColor(colorStart);
      endColor = getHexColor(colorEnd);
    };

    this.setMidpoint = (minNumber, maxNumber) => {
      minNum = minNumber;
      maxNum = maxNumber;
    };

    this.getColor = (props) => {
      if (props) {
        return (
          "#" +
          generateHex(
            props,
            startColor.substring(0, 2),
            endColor.substring(0, 2)
          ) +
          generateHex(
            props,
            startColor.substring(2, 4),
            endColor.substring(2, 4)
          ) +
          generateHex(
            props,
            startColor.substring(4, 6),
            endColor.substring(4, 6)
          )
        );
      }
    };

    const generateHex = (number, start, end) => {
      if (number < minNum) {
        number = minNum;
      } else if (number > maxNum) {
        number = maxNum;
      }

      let midPoint = maxNum - minNum;
      let startBase = parseInt(start, 16);
      let endBase = parseInt(end, 16);
      let average = (endBase - startBase) / midPoint;
      let finalBase = Math.round(average * (number - minNum) + startBase);
      let balancedFinalBase =
        finalBase < 16 ? "0" + finalBase.toString(16) : finalBase.toString(16);
      return balancedFinalBase;
    };

    const getHexColor = (props) => {
      return props.substring(props.length - 6, props.length);
    };
  }
}

const colorGradient = new Gradient();

module.exports = colorGradient;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var javascript_color_gradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var javascript_color_gradient__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(javascript_color_gradient__WEBPACK_IMPORTED_MODULE_0__);
var swiper = new Swiper('.carousel', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var carouselProduct = new Swiper('.carousel-product', {
  loop: true,
  spaceBetween: 5,
  freeMode: true,
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    576: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 5
    }
  }
});
var carouselProduct2 = new Swiper('.carousel-product2', {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: carouselProduct
  }
});
var burger = document.querySelector('.burger');
var menumobile = document.querySelector('#menumobile');
var body = document.querySelector('body');
var btnPhones = document.querySelector('#btnPhones');
var phonesList = document.querySelector('#btnPhones .phones__list');
var btnSearch = document.querySelector('#btnSearch');
var search = document.querySelector('#searchInput');
var searchClose = document.querySelector('#searchInput .search-input__close');
var menuItem = document.querySelectorAll('#menumobile .menu .menu__item');
var deskMenuItem = document.querySelectorAll('.menudesktop .menu__item');
var submenuItem = document.querySelectorAll('#menumobile .submenu .submenu__item');
var backArrows = document.querySelectorAll('.backArrow');
var mobileOverlay = document.querySelector('.mobile-overlay');
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  menumobile.classList.toggle('active');
  body.classList.toggle('is-lock');
  mobileOverlay.classList.toggle('active');
});
btnPhones.addEventListener('click', function () {
  phonesList.classList.toggle('active');
});
btnSearch.addEventListener('click', function () {
  search.classList.add('active');
});
searchClose.addEventListener('click', function () {
  search.classList.remove('active');
});
menuItem.forEach(function (item) {
  if (item.children.length === 2) {
    item.children[0].classList.add('arrow');
    item.addEventListener('click', function (e) {
      e.preventDefault();
      item.children[1].classList.add('active');
    });
    backArrows.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        item.children[1].classList.remove('active');
      });
    });
  }
});
submenuItem.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
mobileOverlay.addEventListener('click', function (e) {
  burger.classList.toggle('active');
  menumobile.classList.toggle('active');
  body.classList.toggle('is-lock');
  mobileOverlay.classList.toggle('active');
});
var login = document.querySelectorAll('.login');
var modal = document.querySelector('.modal');
var modalForm = document.querySelector('.modal form');
var btnModalClose = document.querySelector('.modal .close');
login.forEach(function (item) {
  item.addEventListener('click', function () {
    modal.classList.add('isOpen');
  });
});
btnModalClose.addEventListener('click', function () {
  modal.classList.remove('isOpen');
});
modal.addEventListener('click', function (e) {
  modal.classList.remove('isOpen');
});
modalForm.addEventListener('click', function (e) {
  e.stopPropagation();
});

var gradientArray = javascript_color_gradient__WEBPACK_IMPORTED_MODULE_0___default().setGradient('#3d3ef0', '#d44347', '#f68e5f').setMidpoint(deskMenuItem.length + 1);
deskMenuItem.forEach(function (item, i) {
  item.style.background = "linear-gradient(to right, ".concat(gradientArray.getArray()[i], ", ").concat(gradientArray.getArray()[i + 1], ")");
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map
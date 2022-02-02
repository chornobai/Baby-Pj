/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/basket.js":
/*!*****************************!*\
  !*** ./source/js/basket.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var addButton = document.querySelector('.buy-quantity-button--plus');\nvar removeButton = document.querySelector('.buy-quantity-button--minus');\nvar amount = document.querySelector('.buy-amount');\nvar goodsName = document.querySelector('.goods-name');\nvar goodsArticle = document.querySelector('.goods-article');\nvar favoriteButton = document.querySelector('.buy-favorite');\nvar addFavoriteMessage = document.querySelector('#favorite').content.querySelector('.favorite').cloneNode(true);\nvar removeFavoriteMessage = document.querySelector('#favorite').content.querySelector('.favorite').cloneNode(true);\nvar addBasket = document.querySelector('.buy-basket');\nvar addBasketMessage = document.querySelector('#basket-add').content.querySelector('.basket-add').cloneNode(true);\nremoveFavoriteMessage.querySelector('.favorite__message').textContent = 'Перенравился!';\naddFavoriteMessage.querySelector('.favorite__message').textContent = 'Добавлен в избранное';\naddBasketMessage.querySelector('.basket-add__message').textContent = \"\\u0422\\u043E\\u0432\\u0430\\u0440  \".concat(goodsName.textContent, \" \").concat(goodsArticle.textContent, \"  \\u0432 \\u043A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u0435  \").concat(amount.textContent, \"  \\u0435\\u0434\\u0438\\u043D\\u0438\\u0446 \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443\");\namount.textContent = 0; //  --- Добавление/Удаление количества товара\n\naddButton.addEventListener('click', function (evt) {\n  evt.preventDefault();\n  amount.textContent++;\n});\nremoveButton.addEventListener('click', function (evt) {\n  evt.preventDefault();\n  amount.textContent--;\n\n  if (parseInt(amount.textContent, 2) < 0) {\n    amount.textContent = 0;\n  }\n}); //  ---\n// --- Сообщение\n//  --- Избранное\n\nfavoriteButton.addEventListener('click', function (evt) {\n  evt.stopPropagation();\n  favoriteButton.classList.toggle('buy-favorite--add');\n\n  if (favoriteButton.classList.contains('buy-favorite--add')) {\n    document.body.appendChild(addFavoriteMessage);\n    setTimeout(function () {\n      addFavoriteMessage.remove();\n    }, 1500);\n  } else {\n    document.body.appendChild(removeFavoriteMessage);\n    removeFavoriteMessage.style.background = 'rgba(232, 65, 65, 0.8)';\n    setTimeout(function () {\n      removeFavoriteMessage.remove();\n    }, 1500);\n  }\n}); // Корзина\n\naddBasket.addEventListener('click', function (evt) {\n  evt.stopPropagation();\n  document.body.appendChild(addBasketMessage);\n  setTimeout(function () {\n    addBasketMessage.remove();\n  }, 2000);\n});\n\n//# sourceURL=webpack:///./source/js/basket.js?");

/***/ }),

/***/ "./source/js/catalog.js":
/*!******************************!*\
  !*** ./source/js/catalog.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var mainListImage = document.querySelectorAll('.catalog-left__main-item');\nvar thumbnails = document.querySelectorAll('.catalog-left-item ');\n\nvar resetActiveSlides = function resetActiveSlides() {\n  mainListImage.forEach(function (item) {\n    item.classList.remove('catalog-left__main-item--active');\n  });\n  thumbnails.forEach(function (item) {\n    item.classList.remove('catalog-left-item--active');\n  });\n};\n\nthumbnails.forEach(function (item, i) {\n  item.addEventListener('click', function () {\n    resetActiveSlides();\n    mainListImage[i].classList.add('catalog-left__main-item--active');\n    item.classList.add('catalog-left-item--active');\n  });\n});\n\n//# sourceURL=webpack:///./source/js/catalog.js?");

/***/ }),

/***/ "./source/js/gallery.js":
/*!******************************!*\
  !*** ./source/js/gallery.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var controls = document.querySelectorAll('.gallery-overlay-button');\nvar mainImage = document.querySelector('.gallery-big').querySelector('img');\ncontrols.forEach(function (item) {\n  item.addEventListener('click', function (evt) {\n    evt.preventDefault();\n    var imgOfBlock = item.parentElement.parentElement.querySelector('img').src;\n    mainImage.src = imgOfBlock;\n    mainImage.style.width = '686px';\n\n    if (window.innerWidth < 768) {\n      mainImage.style.width = '100%';\n    }\n\n    if (window.innerWidth > 768) {\n      mainImage.style.width = '686px';\n    }\n  });\n});\n\n//# sourceURL=webpack:///./source/js/gallery.js?");

/***/ }),

/***/ "./source/js/header-scroll.js":
/*!************************************!*\
  !*** ./source/js/header-scroll.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var header = document.querySelector('.header');\nvar headerHeight = header.offsetHeight;\nvar main = document.querySelector('main');\nvar lastScroll = 0;\nwindow.addEventListener('scroll', function () {\n  var scrollDown = window.scrollY;\n\n  if (scrollDown >= 0) {\n    header.classList.add('scrolldown');\n    main.style.marginTop = \"\".concat(headerHeight, \"px\");\n  }\n\n  if (scrollDown >= 100) {\n    header.classList.add('opacity');\n  }\n\n  if (scrollDown < lastScroll) {\n    header.classList.remove('opacity');\n  }\n\n  if (scrollDown === 0) {\n    main.style.marginTop = null;\n    header.classList.remove('scrolldown');\n  }\n\n  lastScroll = scrollDown;\n});\n\n//# sourceURL=webpack:///./source/js/header-scroll.js?");

/***/ }),

/***/ "./source/js/like.js":
/*!***************************!*\
  !*** ./source/js/like.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hearts = document.querySelectorAll('.gallery-overlay-like');\nvar heartsCount = document.querySelectorAll('.overlay-hearts-count');\nhearts.forEach(function (item) {\n  item.addEventListener('click', function () {\n    item.classList.toggle('gallery-overlay-like--like');\n\n    if (item.classList.contains('gallery-overlay-like--like')) {\n      heartsCount.forEach(function (text) {\n        text.textContent++;\n      });\n    } else {\n      heartsCount.forEach(function (text) {\n        text.textContent--;\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack:///./source/js/like.js?");

/***/ }),

/***/ "./source/js/menu.js":
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var MENU_ACTIVE = 'header--open-menu';\nvar headerBlock = document.querySelector('.header');\nvar menuOpen = document.querySelector('.header-nav__button');\nvar menu = document.querySelector('.header-nav-list'); // Открыть меню\n\nmenuOpen.addEventListener('click', function (evt) {\n  evt.stopPropagation();\n  headerBlock.classList.toggle(MENU_ACTIVE);\n}); // Закрыть вне области меню\n\ndocument.addEventListener('click', function (e) {\n  var target = e.target;\n  var itsMenu = target === menu || menu.contains(target);\n  var itsBtnMenu = target === menuOpen;\n  var menuIsActive = headerBlock.classList.contains(MENU_ACTIVE);\n\n  if (!itsMenu && !itsBtnMenu && menuIsActive) {\n    headerBlock.classList.toggle(MENU_ACTIVE);\n  }\n});\n\n//# sourceURL=webpack:///./source/js/menu.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./source/js/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-scroll.js */ \"./source/js/header-scroll.js\");\n/* harmony import */ var _header_scroll_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scroll_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _basket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket.js */ \"./source/js/basket.js\");\n/* harmony import */ var _basket_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_basket_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _catalog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog.js */ \"./source/js/catalog.js\");\n/* harmony import */ var _catalog_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_catalog_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery.js */ \"./source/js/gallery.js\");\n/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gallery_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./like.js */ \"./source/js/like.js\");\n/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_like_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });
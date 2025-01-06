/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/animation/Hexagon.js":
/*!********************************************!*\
  !*** ./src/assets/js/animation/Hexagon.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHexagonsColor\": () => (/* binding */ addHexagonsColor),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\n/* harmony import */ var _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/config-hex */ \"./src/assets/js/settings/config-hex.js\");\n\n// 六角形の背景色を追加する関数\nfunction addHexagonsColor() {\n    _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.Hexagons.forEach((hexagon, index) => {\n        hexagon.style.backgroundColor = _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.HexagonsColor[index];\n    });\n    _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.HexButtons.forEach((button, index) => {\n        button.style.backgroundColor = _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.HexButtonColor[index];\n    });\n}\n// モーダルを開く関数\nfunction openModal() { }\n\n\n//# sourceURL=webpack:///./src/assets/js/animation/Hexagon.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_Hexagon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation/Hexagon */ \"./src/assets/js/animation/Hexagon.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_animation_Hexagon__WEBPACK_IMPORTED_MODULE_0__.addHexagonsColor)();\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/js/settings/config-hex.js":
/*!**********************************************!*\
  !*** ./src/assets/js/settings/config-hex.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HexButtonColor\": () => (/* binding */ HexButtonColor),\n/* harmony export */   \"HexButtonWrapper\": () => (/* binding */ HexButtonWrapper),\n/* harmony export */   \"HexButtons\": () => (/* binding */ HexButtons),\n/* harmony export */   \"HexText\": () => (/* binding */ HexText),\n/* harmony export */   \"Hexagons\": () => (/* binding */ Hexagons),\n/* harmony export */   \"HexagonsColor\": () => (/* binding */ HexagonsColor)\n/* harmony export */ });\nconst HexButtons = document.querySelectorAll(\".animation__hexagon-button\");\nconst HexButtonWrapper = document.querySelector(\".animation__hexagon-button-wrapper\");\nconst Hexagons = document.querySelectorAll(\".animation__hexagon\");\nconst HexText = document.querySelectorAll(\".animation__hexagon-text\");\nconst HexagonsColor = [\n    \"#57968A\",\n    \"#57968A\",\n    \"#8BAC9E\",\n    \"#B1CAC0\",\n    \"\",\n    \"#B1CAC0\",\n];\nconst HexButtonColor = [\"#BDE5E9\", \"#E1D7B3\", \"#B8EEA0\"];\n\n\n//# sourceURL=webpack:///./src/assets/js/settings/config-hex.js?");

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/main.js");
/******/ 	
/******/ })()
;
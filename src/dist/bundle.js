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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHexagonsColor\": () => (/* binding */ addHexagonsColor),\n/* harmony export */   \"exitButtonClickAnimation\": () => (/* binding */ exitButtonClickAnimation),\n/* harmony export */   \"hexClickAnimation\": () => (/* binding */ hexClickAnimation)\n/* harmony export */ });\n/* harmony import */ var _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/config-hex */ \"./src/assets/js/settings/config-hex.js\");\n\n// 六角形の背景色を追加する関数\nfunction addHexagonsColor() {\n    _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.Hexagons.forEach((hexagon, index) => {\n        hexagon.style.backgroundColor = _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.HexagonsColor[index];\n    });\n    _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.HexButtons.forEach((button, index) => {\n        button.style.backgroundColor = _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.HexButtonColor[index];\n    });\n}\n// 六角形ボタンの拡大アニメーション\nfunction expandHexButton(id) {\n    const hexagon = _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.HexButtonWrapper;\n    const keyframes = [\n        { transform: \"translate(0) scale(1)\" },\n        { transform: \"translate(-50%,-50%) scale(10)\" },\n    ];\n    const options = {\n        duration: 1000,\n        easing: \"cubic-bezier(.96,.19,.93,.29)\",\n        fill: \"forwards\",\n    };\n    hexagon === null || hexagon === void 0 ? void 0 : hexagon.animate(keyframes, options);\n    // 六角形ボタン内のテキストを透過させる関数\n    function textFadeout() {\n        _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.HexText.forEach((text) => {\n            text.animate([{ opacity: 1 }, { opacity: 0 }], {\n                duration: 200,\n                fill: \"forwards\",\n            });\n        });\n    }\n    textFadeout();\n}\n// ボタン以外の六角形を動かすアニメーション関数\nfunction moveHexagons() {\n    _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.HexagonsWrapper.forEach((hexagon, index) => {\n        const scale = 0.7;\n        const x = _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.hexKeyframes[index].xPosition;\n        const y = _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.hexKeyframes[index].yPosition;\n        const keyframes = [\n            { transform: \"translate(0) scale(1)\" },\n            { transform: `translate(${x},${y}) scale(${scale})` },\n        ];\n        const options = {\n            duration: 700,\n            easing: \"ease-in\",\n            fill: \"forwards\",\n        };\n        hexagon.animate(keyframes, options);\n    });\n}\n// モーダルを開くアニメーション関数\nfunction openModal(id) {\n    const modalId = `modal-${id}`;\n    const modal = document.querySelector(`#${modalId}`);\n    modal.style.display = \"block\";\n    setTimeout(() => {\n        modal.animate([{ opacity: 0 }, { opacity: 1 }], {\n            duration: 500,\n            fill: \"forwards\",\n        });\n    }, 1000);\n}\n// Hexボタンクリック時のアニメーション実行関数\nfunction hexClickAnimation() {\n    _settings_config_hex__WEBPACK_IMPORTED_MODULE_0__.HexButtons.forEach((hexButton) => {\n        hexButton.addEventListener(\"click\", () => {\n            const id = hexButton.id;\n            expandHexButton(id);\n            moveHexagons();\n            openModal(id);\n        });\n    });\n}\n// モーダル内閉じるボタンクリック時のアニメーション実行関数\nfunction exitButtonClickAnimation() {\n    const exitButtons = document.querySelectorAll(\".modal__exit-button\");\n    exitButtons.forEach((exitButton) => {\n        exitButton.addEventListener(\"click\", () => { });\n    });\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/animation/Hexagon.js?");

/***/ }),

/***/ "./src/assets/js/animation/svgButton.js":
/*!**********************************************!*\
  !*** ./src/assets/js/animation/svgButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"svgClickAnimation\": () => (/* binding */ svgClickAnimation)\n/* harmony export */ });\n/* harmony import */ var _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/config-svg */ \"./src/assets/js/settings/config-svg.js\");\n/* harmony import */ var _settings_config_hex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/config-hex */ \"./src/assets/js/settings/config-hex.js\");\n\n\nlet activeSvg = document.querySelector(// アクティブ状態のsvgボタン\n\".animation__button-path.--active\");\nlet activeHex = document.querySelector(// アクティブ状態のhexボタン\n\".animation__hexagon-button.--active\");\n// スライドアニメーション関数\nfunction slideAnimation(activeHex, animationHex, color) {\n    const slideBox = document.querySelector(\".animation__slide-box\");\n    activeHex.classList.remove(\"--active\");\n    activeHex.classList.add(\"--middle\");\n    slideBox.style.backgroundColor = color;\n    slideBox.animate([\n        { transform: \"scale(1.3) rotate(30deg) translateY(-90%)\" },\n        { transform: \"scale(1.3) rotate(30deg) translateY(0%)\" },\n    ], {\n        duration: 500,\n        fill: \"forwards\",\n    });\n    setTimeout(() => {\n        activeHex.classList.remove(\"--middle\");\n        animationHex.classList.add(\"--active\");\n        animationHex.animate([{ opacity: 0 }, { opacity: 1 }], {\n            duration: 500,\n        });\n    }, 500);\n}\n// 背景画像を変えるアニメーション関数\nfunction changeImage(beforeClassName, afterClassName) {\n    _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.mv === null || _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.mv === void 0 ? void 0 : _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.mv.classList.remove(`--${beforeClassName}`);\n    _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.mv === null || _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.mv === void 0 ? void 0 : _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.mv.classList.add(`--${afterClassName}`);\n}\n// SVGボタンのアニメーション関数\nfunction rotateAnimation() {\n    _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.animationPath.forEach((path, index) => {\n        const radian = Math.PI / 180;\n        const r = _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.pathAttribute[index].radius;\n        const initialStartAngle = _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.pathAttribute[index].startAngle;\n        const initialEndAngle = _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.pathAttribute[index].endAngle;\n        let rotationAngle = 0;\n        const rotationSpeed = 8;\n        // アニメーション用パスのd属性を更新する関数\n        function updatePath() {\n            if (rotationAngle < -360)\n                return;\n            const currentStartAngle = initialStartAngle + rotationAngle;\n            const currentEndAngle = initialEndAngle + rotationAngle;\n            const x1 = _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.cx + r * Math.cos(currentStartAngle * radian);\n            const y1 = _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.cy + r * Math.sin(currentStartAngle * radian);\n            const x2 = _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.cx + r * Math.cos(currentEndAngle * radian);\n            const y2 = _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.cy + r * Math.sin(currentEndAngle * radian);\n            const d = `M ${x1},${y1} A ${r},${r} 0 0,1 ${x2},${y2}`;\n            path.setAttribute(\"d\", d);\n            rotationAngle -= rotationSpeed;\n            requestAnimationFrame(updatePath);\n        }\n        // ボタン用パスの表示・非表示切り替えアニメーション関数\n        function fadeoutPath() {\n            const delay = 600;\n            _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.buttonPath.forEach((button) => {\n                button.style.transition = \"opacity 0s\";\n                button.style.opacity = \"0\";\n                setTimeout(() => {\n                    button.style.transition = \"opacity .7s\";\n                    button.style.opacity = \"1\";\n                }, delay);\n            });\n        }\n        updatePath();\n        fadeoutPath();\n    });\n}\n// SVGボタンクリック時のアニメーション実行関数\nfunction svgClickAnimation() {\n    _settings_config_svg__WEBPACK_IMPORTED_MODULE_0__.buttonPath.forEach((button, index) => {\n        button.addEventListener(\"click\", () => {\n            const clickedSvg = button; // クリックされたsvgボタン\n            const beforeId = activeSvg === null || activeSvg === void 0 ? void 0 : activeSvg.dataset.target; // アクティブ状態のsvgボタンのdata-target\n            const afterId = clickedSvg.dataset.target; // クリックされたsvgボタンのdata-target\n            const animationHex = document.querySelector(`#${afterId}`); // 次にアクティブ状態にするhexボタン\n            slideAnimation(activeHex, animationHex, _settings_config_hex__WEBPACK_IMPORTED_MODULE_1__.HexButtonColor[index]); // スライドアニメーション実行\n            changeImage(beforeId, afterId); // 背景画像を変えるアニメーション関数実行\n            rotateAnimation(); // SVGボタンの回転アニメーションを実行\n            // アクティブ状態のsvgボタンとhexボタンを上書き\n            activeSvg = button;\n            activeHex = animationHex;\n        });\n    });\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/animation/svgButton.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animation_Hexagon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation/Hexagon */ \"./src/assets/js/animation/Hexagon.js\");\n/* harmony import */ var _animation_svgButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/svgButton */ \"./src/assets/js/animation/svgButton.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_animation_Hexagon__WEBPACK_IMPORTED_MODULE_0__.addHexagonsColor)();\n    (0,_animation_svgButton__WEBPACK_IMPORTED_MODULE_1__.svgClickAnimation)();\n    (0,_animation_Hexagon__WEBPACK_IMPORTED_MODULE_0__.hexClickAnimation)();\n});\n\n\n//# sourceURL=webpack:///./src/assets/js/main.js?");

/***/ }),

/***/ "./src/assets/js/settings/config-hex.js":
/*!**********************************************!*\
  !*** ./src/assets/js/settings/config-hex.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HexButtonColor\": () => (/* binding */ HexButtonColor),\n/* harmony export */   \"HexButtonWrapper\": () => (/* binding */ HexButtonWrapper),\n/* harmony export */   \"HexButtons\": () => (/* binding */ HexButtons),\n/* harmony export */   \"HexText\": () => (/* binding */ HexText),\n/* harmony export */   \"Hexagons\": () => (/* binding */ Hexagons),\n/* harmony export */   \"HexagonsColor\": () => (/* binding */ HexagonsColor),\n/* harmony export */   \"HexagonsWrapper\": () => (/* binding */ HexagonsWrapper),\n/* harmony export */   \"hexKeyframes\": () => (/* binding */ hexKeyframes)\n/* harmony export */ });\nconst HexButtons = document.querySelectorAll(\".animation__hexagon-button\");\nconst HexButtonWrapper = document.querySelector(\".animation__hexagon-button-wrapper\");\nconst Hexagons = document.querySelectorAll(\".animation__hexagon\");\nconst HexagonsWrapper = document.querySelectorAll(\".animation__hexagon-wrapper:not(.--hide)\");\nconst HexText = document.querySelectorAll(\".animation__hexagon-text\");\nconst HexagonsColor = [\n    \"#57968A\",\n    \"#57968A\",\n    \"#8BAC9E\",\n    \"#B1CAC0\",\n    \"\",\n    \"#B1CAC0\",\n];\nconst HexButtonColor = [\"#BDE5E9\", \"#E1D7B3\", \"#B8EEA0\"];\nconst hexKeyframes = [\n    {\n        xPosition: \"150px\",\n        yPosition: \"100px\",\n    },\n    {\n        xPosition: \"-120px\",\n        yPosition: \"120px\",\n    },\n    {\n        xPosition: \"120px\",\n        yPosition: \"120px\",\n    },\n    {\n        xPosition: \"120px\",\n        yPosition: \"120px\",\n    },\n    {\n        xPosition: \"120px\",\n        yPosition: \"120px\",\n    },\n];\n\n\n//# sourceURL=webpack:///./src/assets/js/settings/config-hex.js?");

/***/ }),

/***/ "./src/assets/js/settings/config-svg.js":
/*!**********************************************!*\
  !*** ./src/assets/js/settings/config-svg.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animationPath\": () => (/* binding */ animationPath),\n/* harmony export */   \"buttonPath\": () => (/* binding */ buttonPath),\n/* harmony export */   \"cx\": () => (/* binding */ cx),\n/* harmony export */   \"cy\": () => (/* binding */ cy),\n/* harmony export */   \"mv\": () => (/* binding */ mv),\n/* harmony export */   \"pathAttribute\": () => (/* binding */ pathAttribute),\n/* harmony export */   \"svgButtons\": () => (/* binding */ svgButtons)\n/* harmony export */ });\nconst mv = document.querySelector(\".mv\");\nconst svgButtons = document.querySelectorAll(\".animation__svg\");\nconst buttonPath = document.querySelectorAll(\".animation__button-path\");\nconst animationPath = document.querySelectorAll(\".animation__animation-path\");\nconst cx = 500;\nconst cy = 500;\nconst pathAttribute = [\n    {\n        radius: 400,\n        startAngle: 160,\n        endAngle: 230,\n    },\n    {\n        radius: 430,\n        startAngle: 150,\n        endAngle: 220,\n    },\n    {\n        radius: 460,\n        startAngle: 170,\n        endAngle: 240,\n    },\n];\n\n\n//# sourceURL=webpack:///./src/assets/js/settings/config-svg.js?");

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
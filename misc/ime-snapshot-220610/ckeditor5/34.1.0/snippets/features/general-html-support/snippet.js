/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
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

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/general-html-support.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/general-html-support.css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/general-html-support.css?");

/***/ }),

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/general-html-support.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/general-html-support.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ckeditor_ckeditor5_cloud_services_tests_utils_cloud_services_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js */ \"./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js\");\n/* harmony import */ var _general_html_support_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-html-support.css */ \"./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/general-html-support.css\");\n/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals console, window, document, ClassicEditor, GeneralHtmlSupport, ArticlePluginSet */\n\n\n\n\n\nClassicEditor\n\t.create( document.querySelector( '#snippet-general-html-support' ), {\n\t\textraPlugins: [\n\t\t\tArticlePluginSet,\n\t\t\tGeneralHtmlSupport\n\t\t],\n\t\ttoolbar: {\n\t\t\titems: [\n\t\t\t\t'heading',\n\t\t\t\t'|',\n\t\t\t\t'bold',\n\t\t\t\t'italic',\n\t\t\t\t'code',\n\t\t\t\t'bulletedList',\n\t\t\t\t'numberedList',\n\t\t\t\t'|',\n\t\t\t\t'outdent',\n\t\t\t\t'indent',\n\t\t\t\t'|',\n\t\t\t\t'blockQuote',\n\t\t\t\t'link',\n\t\t\t\t'mediaEmbed',\n\t\t\t\t'insertTable',\n\t\t\t\t'|',\n\t\t\t\t'undo',\n\t\t\t\t'redo',\n\t\t\t\t'|',\n\t\t\t\t'sourceEditing'\n\t\t\t]\n\t\t},\n\t\tui: {\n\t\t\tviewportOffset: {\n\t\t\t\ttop: window.getViewportTopOffsetConfig()\n\t\t\t}\n\t\t},\n\t\timage: {\n\t\t\ttoolbar: [\n\t\t\t\t'imageStyle:inline',\n\t\t\t\t'imageStyle:wrapText',\n\t\t\t\t'imageStyle:breakText',\n\t\t\t\t'|',\n\t\t\t\t'toggleImageCaption',\n\t\t\t\t'imageTextAlternative'\n\t\t\t]\n\t\t},\n\t\ttable: {\n\t\t\tcontentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]\n\t\t},\n\t\tcloudServices: _ckeditor_ckeditor5_cloud_services_tests_utils_cloud_services_config_js__WEBPACK_IMPORTED_MODULE_0__.CS_CONFIG,\n\t\thtmlSupport: {\n\t\t\tallow: [\n\t\t\t\t// Enables all HTML features.\n\t\t\t\t{\n\t\t\t\t\tname: /.*/,\n\t\t\t\t\tattributes: true,\n\t\t\t\t\tclasses: true,\n\t\t\t\t\tstyles: true\n\t\t\t\t}\n\t\t\t],\n\t\t\tdisallow: [\n\t\t\t\t{\n\t\t\t\t\tattributes: [\n\t\t\t\t\t\t{ key: /^on(.*)/i, value: true },\n\t\t\t\t\t\t{ key: /.*/, value: /(\\b)(on\\S+)(\\s*)=|javascript:|(<\\s*)(\\/*)script/i },\n\t\t\t\t\t\t{ key: /.*/, value: /data:(?!image\\/(png|jpeg|gif|webp))/i }\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{ name: 'script' }\n\t\t\t]\n\t\t}\n\t} )\n\t.then( editor => {\n\t\twindow.editor = editor;\n\n\t\twindow.attachTourBalloon( {\n\t\t\ttarget: window.findToolbarItem( editor.ui.view.toolbar,\n\t\t\t\titem => item.label && item.label === 'Source' ),\n\t\t\ttext: 'Switch to the source mode to check out the source of the content and play with it.',\n\t\t\teditor,\n\t\t\ttippyOptions: {\n\t\t\t\tplacement: 'bottom-end'\n\t\t\t}\n\t\t} );\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/general-html-support.js?");

/***/ }),

/***/ "./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js":
/*!*********************************************************************************!*\
  !*** ./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CS_CONFIG\": () => (/* binding */ CS_CONFIG),\n/* harmony export */   \"TOKEN_URL\": () => (/* binding */ TOKEN_URL),\n/* harmony export */   \"UPLOAD_URL\": () => (/* binding */ UPLOAD_URL)\n/* harmony export */ });\n/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n// WARNING: The URLs below should not be used for any other purpose than Easy Image plugin development.\n// Images uploaded using the testing token service may be deleted automatically at any moment.\n// If you would like to try the Easy Image service, please sign up for a free trial (https://ckeditor.com/ckeditor-cloud-services/).\n// Images uploaded during the free trial will not be deleted for the whole trial period and additionally the trial service can be converted\n// into a subscription at any moment, allowing you to preserve all uploaded images.\n\nconst TOKEN_URL = 'https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt';\n\nconst UPLOAD_URL = 'https://33333.cke-cs.com/easyimage/upload/';\n\nconst CS_CONFIG = {\n\ttokenUrl: TOKEN_URL,\n\tuploadUrl: UPLOAD_URL\n};\n\n\n//# sourceURL=webpack://ckeditor5/./packages/ckeditor5-cloud-services/tests/_utils/cloud-services-config.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/features/general-html-support.js");
/******/ 	
/******/ })()
;
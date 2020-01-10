/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_style_custom_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_style_custom_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__image_style_custom_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_core_theme_icons_object_center_svg__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_core_theme_icons_object_center_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_core_theme_icons_object_center_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ckeditor_ckeditor5_core_theme_icons_object_left_svg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ckeditor_ckeditor5_core_theme_icons_object_left_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ckeditor_ckeditor5_core_theme_icons_object_left_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ckeditor_ckeditor5_core_theme_icons_object_right_svg__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ckeditor_ckeditor5_core_theme_icons_object_right_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ckeditor_ckeditor5_core_theme_icons_object_right_svg__);
/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* globals ClassicEditor, console, window, document */







ClassicEditor
	.create( document.querySelector( '#snippet-image-style-custom' ), {
		image: {
			styles: [
				// This option is equal to a situation where no style is applied.
				{
					name: 'imageStyleFull',
					title: 'Full size image',
					icon: __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_core_theme_icons_object_center_svg___default.a,
					value: null
				},

				// This represents an image aligned to left.
				{
					name: 'imageStyleLeft',
					title: 'Left aligned image',
					icon: __WEBPACK_IMPORTED_MODULE_2__ckeditor_ckeditor5_core_theme_icons_object_left_svg___default.a,
					value: 'left',
					className: 'image-style-left'
				},

				// This represents an image aligned to right.
				{
					name: 'imageStyleRight',
					title: 'Right aligned image',
					icon: __WEBPACK_IMPORTED_MODULE_3__ckeditor_ckeditor5_core_theme_icons_object_right_svg___default.a,
					value: 'right',
					className: 'image-style-right'
				}
			],

			toolbar: [ 'imageTextAlternative', '|', 'imageStyleLeft', 'imageStyleFull', 'imageStyleRight' ]
		}
	} )
	.then( editor => {
		window.editorStyleCustom = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 16h16v1H2v-1zm15-2H3V6h14v8zm-1-7H4v6h12V7zM2 3h16v1H2V3z\"/></svg>"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 15h16v1H2v-1zm11-3h5v1h-5v-1zm-2 1H2V6h9v7zm-1-6H3v5h7V7zm3 2h5v1h-5V9zm0-3h5v1h-5V6zM2 3h16v1H2V3z\"/></svg>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 16H2v-1h16v1zM6.978 13H2v-1h4.978v1zM18 6v7H9V6h9zm-1 6V7h-7v5h7zM6.978 10H2V9h4.978v1zm0-3H2V6h4.978v1zM18 4H2V3h16v1z\"/></svg>"

/***/ })
/******/ ]);
//# sourceMappingURL=snippet.js.map
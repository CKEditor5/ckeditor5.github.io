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
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-upcast-attribute.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-upcast-attribute.js ***!
  \*************************************************************************************************************/
/***/ (() => {

eval("/**\n * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.\n * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\n */\n\n/* globals DecoupledEditor, MiniCKEditorInspector, Essentials, console, document */\n\nfunction Image( editor ) {\n\teditor.model.schema.register( 'image', {\n\t\tinheritAllFrom: '$block',\n\t\tallowAttributes: [ 'source' ]\n\t} );\n\n\teditor.conversion.elementToElement( {\n\t\tview: 'img',\n\t\tmodel: 'image'\n\t} );\n\n\teditor.conversion.attributeToAttribute( {\n\t\tview: {\n\t\t\tname: 'img',\n\t\t\tkey: 'src'\n\t\t},\n\t\tmodel: 'source'\n\t} );\n}\n\nDecoupledEditor.create( document.querySelector( '#mini-inspector-upcast-attribute' ), {\n\tplugins: [ Essentials, Image ]\n} )\n\t.then( editor => {\n\t\tMiniCKEditorInspector.attach(\n\t\t\teditor,\n\t\t\tdocument.querySelector( '#mini-inspector-upcast-attribute-container' )\n\t\t);\n\t} )\n\t.catch( err => {\n\t\tconsole.error( err.stack );\n\t} );\n\n\n//# sourceURL=webpack://ckeditor5/./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-upcast-attribute.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./node_modules/umberto/source/ckeditor5/34.1.0/_snippets/framework/mini-inspector-upcast-attribute.js"]();
/******/ 	
/******/ })()
;
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"nav {\\r\\n  display: flex;\\r\\n  padding-left: 150px;\\r\\n  height: 5rem;\\r\\n  align-items: center;\\r\\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  color: whitesmoke;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  display: flex;\\r\\n  margin-right: 45%;\\r\\n  list-style: none;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: absolute;\\r\\n  margin-top: 30%;\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  position: relative;\\r\\n  font-size: 16px;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  font-family: monospace;\\r\\n  padding-bottom: 50px;\\r\\n}\\r\\n\\r\\nheader,\\r\\nfooter {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  width: 100%;\\r\\n  height: 120px;\\r\\n}\\r\\n\\r\\nbutton,\\r\\n.heart,\\r\\n.modal-cross {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  width: 40%;\\r\\n  margin: 15px auto;\\r\\n  padding: 7px 10px;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: #320064;\\r\\n  color: white;\\r\\n  transform: translateY(-2px);\\r\\n  transition: all 300ms ease-in-out;\\r\\n}\\r\\n\\r\\n.page-img {\\r\\n  width: 80px;\\r\\n}\\r\\n\\r\\n.page-img img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.card ul,\\r\\n.nav-links {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.nav-links li {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.type-list li {\\r\\n  background-color: lightgray;\\r\\n  padding: 5px 10px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.nav-links li,\\r\\n.card ul li {\\r\\n  display: inline-block;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.card ul li {\\r\\n  background-color: lightgray;\\r\\n  padding: 5px 10px;\\r\\n  border-radius: 5px;\\r\\n  margin: 0 10px;\\r\\n}\\r\\n\\r\\n/* Cards Section Styling */\\r\\n\\r\\n#card-section {\\r\\n  display: grid;\\r\\n  gap: 25px;\\r\\n  width: 70%;\\r\\n  margin: 40px auto;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\\r\\n  width: 90%;\\r\\n  padding: 0 15px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  border-radius: 7px;\\r\\n}\\r\\n\\r\\n.card:hover {\\r\\n  border: 3px solid #333;\\r\\n  transform: scale(1.06);\\r\\n  transition: 500ms ease-in-out;\\r\\n}\\r\\n\\r\\n.card img {\\r\\n  width: 60%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.card h1 {\\r\\n  font-size: 35px;\\r\\n}\\r\\n\\r\\n.likes-div {\\r\\n  display: flex;\\r\\n  gap: 15px;\\r\\n  justify-content: center;\\r\\n  align-items: baseline;\\r\\n}\\r\\n\\r\\n.heart,\\r\\n#like {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  color: rgb(189, 187, 187);\\r\\n}\\r\\n\\r\\n.heart:active {\\r\\n  color: red;\\r\\n  transition: 200ms;\\r\\n}\\r\\n\\r\\nfooter a,\\r\\n.nav-links li a {\\r\\n  text-decoration: none;\\r\\n  color: #333;\\r\\n  font-size: 15px;\\r\\n  transition: 300ms ease-in-out;\\r\\n}\\r\\n\\r\\nfooter a:hover,\\r\\n.nav-links li a:hover {\\r\\n  border-bottom: 1px solid #333;\\r\\n  opacity: 0.7;\\r\\n}\\r\\n\\r\\n/* Modals */\\r\\n\\r\\n.centering {\\r\\n  justify-content: center !important;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: #333d;\\r\\n}\\r\\n\\r\\n.modal h4 {\\r\\n  font-size: 20px;\\r\\n  margin-top: 15px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background: white;\\r\\n  height: 95vh;\\r\\n  padding-bottom: 20px;\\r\\n  margin: 2.5vh 2.5vw;\\r\\n  border-radius: 15px;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.img-frame {\\r\\n  position: relative;\\r\\n  width: 100%;\\r\\n  box-shadow: 0 12px 16px 6px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.modal-cross {\\r\\n  position: fixed;\\r\\n  top: 4%;\\r\\n  right: 7.5%;\\r\\n  font-size: 40px;\\r\\n  color: #320064;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.modal-cross:hover {\\r\\n  color: purple;\\r\\n}\\r\\n\\r\\n.inner-frame {\\r\\n  background-color: white;\\r\\n  width: 250px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.modal-image {\\r\\n  display: block;\\r\\n  width: 250px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.pkm-name {\\r\\n  font-size: 32px;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.type-list {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  list-style-type: none;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: auto;\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.modal input,\\r\\n.modal textarea {\\r\\n  margin-top: 15px;\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.modal textarea {\\r\\n  height: 100px;\\r\\n}\\r\\n\\r\\n.red {\\r\\n  border-color: red;\\r\\n}\\r\\n\\r\\n.error {\\r\\n  text-align: center;\\r\\n  color: maroon;\\r\\n  width: 80%;\\r\\n  height: 40px;\\r\\n  margin: auto;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n/* -------------------------- */\\r\\n\\r\\n@media all and (min-width: 768px) {\\r\\n  header {\\r\\n    height: 180px;\\r\\n  }\\r\\n\\r\\n  nav {\\r\\n    width: 80%;\\r\\n    margin: 0 auto;\\r\\n    gap: 40px;\\r\\n  }\\r\\n\\r\\n  .page-img {\\r\\n    width: 120px;\\r\\n  }\\r\\n\\r\\n  .nav-links li {\\r\\n    margin-right: 40px;\\r\\n  }\\r\\n\\r\\n  .nav-links li a {\\r\\n    font-size: 18px;\\r\\n  }\\r\\n\\r\\n  #card-section {\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    width: 80%;\\r\\n    left: 10%;\\r\\n  }\\r\\n\\r\\n  .modal-content {\\r\\n    height: 95vh;\\r\\n    margin: 2.5vh 10vw;\\r\\n  }\\r\\n\\r\\n  .modal-cross {\\r\\n    top: 5%;\\r\\n    right: 15%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1025px) {\\r\\n  nav {\\r\\n    width: 70%;\\r\\n    margin: 0 auto;\\r\\n    gap: 40px;\\r\\n  }\\r\\n\\r\\n  .page-img {\\r\\n    width: 160px;\\r\\n  }\\r\\n\\r\\n  .nav-links li {\\r\\n    margin-right: 60px;\\r\\n  }\\r\\n\\r\\n  .nav-links li a {\\r\\n    font-size: 20px;\\r\\n  }\\r\\n\\r\\n  #card-section {\\r\\n    grid-template-columns: repeat(3, 1fr);\\r\\n  }\\r\\n\\r\\n  .card:hover {\\r\\n    transform: scale(1.1);\\r\\n  }\\r\\n\\r\\n  .card img {\\r\\n    width: 80%;\\r\\n    margin: 0 auto;\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    width: 70%;\\r\\n    left: 15%;\\r\\n  }\\r\\n\\r\\n  .modal {\\r\\n    font-size: 18px;\\r\\n  }\\r\\n\\r\\n  .modal-content {\\r\\n    height: 90vh;\\r\\n    margin: 5vh 20vw;\\r\\n  }\\r\\n\\r\\n  .modal-cross {\\r\\n    top: 7.5%;\\r\\n    right: 23%;\\r\\n  }\\r\\n\\r\\n  .pkm-name {\\r\\n    font-size: 54px;\\r\\n  }\\r\\n\\r\\n  .modal h4 {\\r\\n    font-size: 28px;\\r\\n  }\\r\\n\\r\\n  .type-list {\\r\\n    width: 30%;\\r\\n  }\\r\\n\\r\\n  .add-comment {\\r\\n    width: 65%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/counters.js":
/*!*************************!*\
  !*** ./src/counters.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter),\n/* harmony export */   \"itemCounter\": () => (/* binding */ itemCounter)\n/* harmony export */ });\nconst itemCounter = (allPokemon) => allPokemon.length;\r\n\r\nconst commentCounter = (comments, title, list) => {\r\n  if (comments.length >= 1) {\r\n    title.innerHTML = `Comments (${comments.length})`;\r\n  } else {\r\n    title.innerHTML = 'Comments (0)';\r\n    list.innerHTML = 'No comments... yet!';\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/counters.js?");

/***/ }),

/***/ "./src/displayPokes.js":
/*!*****************************!*\
  !*** ./src/displayPokes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop_up.js */ \"./src/pop_up.js\");\n/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchLikes.js */ \"./src/fetchLikes.js\");\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ \"./src/postLikes.js\");\n\n\n\n\nconst displayPokemon = async (pokemon) => {\n  pokemon.forEach((pkm) => {\n    fetch(pkm.url)\n      .then((response) => response.json())\n      .then(async (pkmData) => {\n        const cardSection = document.getElementById('card-section');\n        const pokemonTypes = pkmData.types;\n        const pokemonImage = pkmData.sprites.other;\n\n        const outerLi = document.createElement('li');\n        outerLi.classList.add('card');\n\n        const pokeImg = document.createElement('img'); // Creates pokemon image element\n        pokeImg.setAttribute('src', `${pokemonImage['official-artwork'].front_default}`);\n        pokeImg.setAttribute('alt', 'Pokemon');\n\n        const h1 = document.createElement('h1'); // Creates Pokemon name element\n        h1.innerHTML = `${pkmData.name}`;\n\n        const likesDiv = document.createElement('div'); // Creates div to hold heart icon and likes count element\n        likesDiv.className = 'likes-div';\n\n        const likeImg = document.createElement('i'); // Creates heart icon\n        likeImg.classList.add('fas', 'fa-heart', 'heart');\n        likeImg.setAttribute('id', `${pkmData.name}`);\n\n        const span = document.createElement('span'); // Creates likes count element\n        span.setAttribute('id', 'like');\n\n        const ul = document.createElement('ul'); // Creates types list element\n        pokemonTypes.forEach((pokemon) => {\n          ul.innerHTML += `<li>${pokemon.type.name}</li>`;\n        });\n\n        const btn = document.createElement('button'); // Creates button element\n        btn.setAttribute('type', 'button');\n        btn.classList.add(pkmData.name, 'btn');\n        btn.innerHTML = 'Comment';\n        btn.addEventListener('click', () => {\n          (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pkmData);\n        });\n\n        outerLi.appendChild(pokeImg); // Append Image To Li\n        outerLi.appendChild(h1); // Append Pokemon Name To Li\n        likesDiv.appendChild(likeImg); // Append Heart Icon To Parent Div\n        likesDiv.appendChild(span); // Append Likes Count To Parent Div\n        outerLi.appendChild(likesDiv); // Append Pokemon Name To Li\n        outerLi.appendChild(ul); // Append Types List To Li\n        outerLi.appendChild(btn); // Append Comment Button To Li\n\n        cardSection.appendChild(outerLi); // Append Li To Parent Element\n\n        await (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pkmData, span); // Displays number of likes in UI\n\n        // EventListener To Increment Likes Count On Click\n        likeImg.addEventListener('click', async () => {\n          await (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(likeImg.id);\n          await (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pkmData, span);\n        });\n      });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPokemon);\n\n//# sourceURL=webpack://webpack-demo/./src/displayPokes.js?");



/***/ }),

/***/ "./src/fetchApi.js":
/*!*************************!*\
  !*** ./src/fetchApi.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchApi = async () => {\r\n  const response = await fetch(\r\n    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',\r\n  );\r\n  return response.json();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchApi);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/fetchApi.js?");

/***/ }),

/***/ "./src/fetchLikes.js":
/*!***************************!*\
  !*** ./src/fetchLikes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/likes/';\r\nconst fetchLikes = (pokemon, item) => fetch(url)\r\n  .then((response) => response.json())\r\n  .then((likes) => {\r\n    likes.forEach((pkLike) => {\r\n      if (pkLike.item_id === pokemon.name) {\r\n        item.innerHTML = `${pkLike.likes} likes`;\r\n      }\r\n    });\r\n  });\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/fetchLikes.js?");

/***/ }),

/***/ "./src/get_comment.js":
/*!****************************!*\
  !*** ./src/get_comment.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/comments';\r\n\r\nconst getComments = (itemID) => fetch(`${involvementURL}?item_id=${itemID}`)\r\n  .then((response) => response.json());\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://webpack-demo/./src/get_comment.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _fetchApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchApi.js */ \"./src/fetchApi.js\");\n/* harmony import */ var _displayPokes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayPokes.js */ \"./src/displayPokes.js\");\n/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counters.js */ \"./src/counters.js\");\n\r\n\r\n\r\n\r\n\r\nconst pokeTitle = document.querySelector('.poke-title');\r\nwindow.addEventListener('load', async () => {\r\n  const res = await (0,_fetchApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  pokeTitle.innerHTML = `Pokemon(${(0,_counters_js__WEBPACK_IMPORTED_MODULE_3__.itemCounter)(res.results)})`;\r\n  await (0,_displayPokes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res.results);\r\n});\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/pop_up.js":
/*!***********************!*\
  !*** ./src/pop_up.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters.js */ \"./src/counters.js\");\n/* harmony import */ var _get_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_comment.js */ \"./src/get_comment.js\");\n/* harmony import */ var _post_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post_comments.js */ \"./src/post_comments.js\");\n\r\n\r\n\r\n\r\nconst popUp = (pokemon) => {\r\n  const modal = document.createElement('article');\r\n  modal.classList.add('modal');\r\n\r\n  const modalContent = document.createElement('div');\r\n  modalContent.classList.add('modal-content');\r\n\r\n  const imgFrame = document.createElement('div');\r\n  imgFrame.classList.add('img-frame');\r\n\r\n  const modalCross = document.createElement('i');\r\n  modalCross.classList.add('fas', 'fa-times', 'modal-cross');\r\n  modalCross.addEventListener('click', () => modal.remove());\r\n\r\n  const innerFrame = document.createElement('div');\r\n  innerFrame.classList.add('inner-frame');\r\n\r\n  const img = document.createElement('img');\r\n  img.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default);\r\n  img.setAttribute('alt', `${pokemon.name} official artwork`);\r\n  img.classList.add('modal-image');\r\n\r\n  const pkmName = document.createElement('h3');\r\n  pkmName.classList.add('pkm-name');\r\n  pkmName.innerHTML = pokemon.name;\r\n\r\n  const pkmTypes = document.createElement('h4');\r\n  pkmTypes.innerHTML = 'Type';\r\n\r\n  const typeList = document.createElement('ul');\r\n  typeList.classList.add('type-list');\r\n\r\n  const type1 = document.createElement('li');\r\n  type1.innerHTML = pokemon.types[0].type.name;\r\n\r\n  let type2 = document.createElement('li');\r\n  if (pokemon.types.length === 2) {\r\n    type2.innerHTML = pokemon.types[1].type.name;\r\n  } else {\r\n    typeList.classList.add('centering');\r\n    type2 = false;\r\n  }\r\n\r\n  const locationTitle = document.createElement('h4');\r\n  locationTitle.innerHTML = 'Location';\r\n\r\n  const location = document.createElement('p');\r\n  fetch(pokemon.location_area_encounters)\r\n    .then((response) => response.json())\r\n    .then((locations) => {\r\n      if (locations.length > 1) {\r\n        location.innerHTML = locations[0].location_area.name || 'Evolution';\r\n      } else {\r\n        location.innerHTML = 'Evolution';\r\n      }\r\n    });\r\n\r\n  const commentsTitle = document.createElement('h4');\r\n  commentsTitle.innerHTML = 'Comments';\r\n\r\n  const comments = document.createElement('ul');\r\n  comments.classList.add('comments');\r\n\r\n  const showComments = () => {\r\n    comments.innerHTML = '';\r\n    (0,_get_comment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon.name).then((pkmComments) => {\r\n      for (let i = 0; i < pkmComments.length; i += 1) {\r\n        const comment = document.createElement('li');\r\n        const pkmComment = pkmComments[i];\r\n        comment.innerHTML = `\r\n          ${pkmComment.creation_date} \r\n          ${pkmComment.username}: \r\n          ${pkmComment.comment}\r\n          `;\r\n        comments.appendChild(comment);\r\n      }\r\n      (0,_counters_js__WEBPACK_IMPORTED_MODULE_0__.commentCounter)(pkmComments, commentsTitle, comments);\r\n    });\r\n  };\r\n\r\n  showComments();\r\n\r\n  const addCommentTitle = document.createElement('h4');\r\n  addCommentTitle.innerHTML = 'Add a comment';\r\n\r\n  const addComment = document.createElement('form');\r\n  addComment.classList.add('add-comment');\r\n\r\n  const nameInput = document.createElement('input');\r\n  nameInput.setAttribute('type', 'text');\r\n  nameInput.setAttribute('name', 'name');\r\n  nameInput.setAttribute('placeholder', 'Your name');\r\n  nameInput.setAttribute('id', 'name');\r\n\r\n  const textArea = document.createElement('textarea');\r\n  textArea.setAttribute('name', 'comment');\r\n  textArea.setAttribute('id', 'comment');\r\n  textArea.setAttribute('placeholder', 'Your Comment');\r\n\r\n  const msg = document.createElement('small');\r\n  msg.classList.add('error');\r\n  msg.innerHTML = '';\r\n\r\n  const submitBtn = document.createElement('button');\r\n  submitBtn.setAttribute('type', 'button');\r\n  submitBtn.setAttribute('id', 'submit-btn');\r\n  submitBtn.innerHTML = 'Submit';\r\n  submitBtn.addEventListener('click', () => {\r\n    if (nameInput.value.length < 1 || nameInput.value.length > 8) {\r\n      nameInput.classList.add('red');\r\n      textArea.classList.remove('red');\r\n      msg.innerHTML = '*Your name should have between 1 and 8 characters*';\r\n    } else if (textArea.value.length < 5 || textArea.value.length > 100) {\r\n      nameInput.classList.remove('red');\r\n      textArea.classList.add('red');\r\n      msg.innerHTML = 'Comment should have between 5 and 100 characters';\r\n    } else {\r\n      (0,_post_comments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(nameInput.value, textArea.value, pokemon.name)\r\n        .then(() => ((0,_get_comment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon.name)).then(() => showComments()));\r\n      nameInput.classList.remove('red');\r\n      textArea.classList.remove('red');\r\n      addComment.reset();\r\n    }\r\n  });\r\n\r\n  innerFrame.appendChild(img);\r\n\r\n  imgFrame.appendChild(modalCross);\r\n  imgFrame.appendChild(innerFrame);\r\n\r\n  typeList.appendChild(type1);\r\n  if (type2) {\r\n    typeList.appendChild(type2);\r\n  }\r\n\r\n  addComment.appendChild(nameInput);\r\n  addComment.appendChild(textArea);\r\n  addComment.appendChild(msg);\r\n  addComment.appendChild(submitBtn);\r\n\r\n  modalContent.appendChild(imgFrame);\r\n  modalContent.appendChild(pkmName);\r\n  modalContent.appendChild(pkmTypes);\r\n  modalContent.appendChild(typeList);\r\n  modalContent.appendChild(locationTitle);\r\n  modalContent.appendChild(location);\r\n  modalContent.appendChild(commentsTitle);\r\n  modalContent.appendChild(comments);\r\n  modalContent.appendChild(addCommentTitle);\r\n  modalContent.appendChild(addComment);\r\n\r\n  modal.appendChild(modalContent);\r\n\r\n  document.body.appendChild(modal);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);\n\n//# sourceURL=webpack://webpack-demo/./src/pop_up.js?");

/***/ }),

/***/ "./src/postLikes.js":
/*!**************************!*\
  !*** ./src/postLikes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/likes/';\r\n\r\nconst postLikes = async (item1) => {\r\n  const result = await fetch(url, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: item1,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  return result.text();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n//# sourceURL=webpack://webpack-demo/./src/postLikes.js?");

/***/ }),

/***/ "./src/post_comments.js":
/*!******************************!*\
  !*** ./src/post_comments.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ewWKj7zRfM05pYQRcA4r/comments';\r\n\r\nconst postComments = (name, comment1, pokemon) => fetch(involvementURL, {\r\n  method: 'POST',\r\n  body: JSON.stringify({\r\n    item_id: pokemon,\r\n    username: name,\r\n    comment: comment1,\r\n  }),\r\n  headers: {\r\n    'Content-type': 'application/json; charset=UTF-8',\r\n  },\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComments);\n\n//# sourceURL=webpack://webpack-demo/./src/post_comments.js?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
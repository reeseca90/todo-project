/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#mainContainer {\n    background-color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    min-height: 97vh;\n}\n\n#topBar {\n    background-color: grey;\n    display: flex;\n    height: 75px;\n    align-items: center;\n}\n\n#navButton {\n    height: 75px;\n    width: 75px;\n    background-color: lightblue;\n    text-align: center;\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 500;\n}\n\n#navButton:hover {\n    background-color: rgb(168, 230, 255);\n}\n\n#logo {\n    margin-right: auto;\n    padding-left: 24px;\n    font-size: 36px;\n    font-style: italic;\n    font-weight: 900;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n#home {\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 9vh;\n}\n\n#footer {\n    margin-top: auto;\n    background-color: grey;\n    height: 75px;\n    text-align: center;\n}\n#footer > p {\n    margin-top: 28px;\n}\n\n#mainMenu {\n    display: flex;\n    flex-direction: column;\n    margin-right: auto;\n    margin-left: auto;\n    gap: 10px;\n}\n\n.mainMenuButton {\n    width: 150px;\n    height: 50px;\n    background-color: lightblue;\n    border: 2px solid rgb(155, 173, 197);\n    border-radius: 5px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n}\n.mainMenuButton:hover {\n    background-color: rgb(168, 230, 255);\n}\n.mainMenuButton:active {\n    background-color: rgb(196, 219, 248);\n    transform: translateY(1px);\n}\n\n/* FORMS FOR NEW ENTRIES */\n\n#newProjForm {\n    display:flex;\n    flex-direction: column;\n    width: 460px;\n    padding: 30px;\n    height: 250px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 9vh;\n    background-color: lightsteelblue;\n    border: 2px solid rgb(155, 173, 197);\n    border-radius: 10px;\n}\n\n#newTodoForm {\n  display:flex;\n  flex-direction: column;\n  width: 460px;\n  padding: 30px;\n  height: 250px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 9vh;\n  background-color: lightsteelblue;\n  border: 2px solid rgb(155, 173, 197);\n  border-radius: 10px;\n}\n\n.formLabel {\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 500;\n    margin-top: 12px;\n}\n\n.radioLabel {\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 500;\n}\n\n#prioBox {\n    display: flex;\n}\n\n.submitButton {\n  width: 200px;\n  height: 40px;\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: lightblue;\n  border: 2px solid rgb(155, 173, 197);\n  border-radius: 5px;\n}\n.submitButton:hover {\n  background-color: rgb(168, 230, 255);\n}\n.submitButton:active {\n  background-color: rgb(196, 219, 248);\n  transform: translateY(1px);\n}\n\n/* ALL PROJECTS VIEW */\n\n#allProjectsContainer {\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 9vh;\n    width: 700px;\n}\n\n.individualProject {\n    display: flex;\n    width: 680px;\n    height: 75px;\n    background-color: lightsteelblue;\n    border: 2px solid rgb(155, 173, 197);\n    border-radius: 10px;\n    align-items: center;\n}\n\n.addDueDate {\n    width: 100px;\n    text-align: center;\n}\n.addPriority {\n    width: 75px;\n    text-align: center;\n    margin-right: auto;\n}\n.addTitle {\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/* TODOS VIEW */\n\n#allTodosContainer {\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 9vh;\n  width: 700px;\n}\n\n.todoCompleteToggle {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  margin-left: auto;\n  background-color: lightblue;\n  border: 2px solid rgb(155, 173, 197);\n  border-radius: 5px;\n  height: 50px;\n  width: 75px;\n}\n.todoDelete {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  width: 85px;\n  background-color: lightblue;\n  border: 2px solid rgb(155, 173, 197);\n  border-radius: 5px;\n  height: 50px;\n  width: 75px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;IACf,yCAAyC;IACzC,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,qGAAqG;AACzG;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,2BAA2B;IAC3B,oCAAoC;IACpC,kBAAkB;IAClB,yCAAyC;IACzC,iBAAiB;AACrB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,oCAAoC;IACpC,0BAA0B;AAC9B;;AAEA,0BAA0B;;AAE1B;IACI,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,gCAAgC;IAChC,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,gCAAgC;EAChC,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;IACI,eAAe;IACf,yCAAyC;IACzC,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,yCAAyC;IACzC,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,yCAAyC;EACzC,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,2BAA2B;EAC3B,oCAAoC;EACpC,kBAAkB;AACpB;AACA;EACE,oCAAoC;AACtC;AACA;EACE,oCAAoC;EACpC,0BAA0B;AAC5B;;AAEA,sBAAsB;;AAEtB;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,gCAAgC;IAChC,oCAAoC;IACpC,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,eAAe;;AAEf;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;EACf,yCAAyC;EACzC,iBAAiB;EACjB,iBAAiB;EACjB,2BAA2B;EAC3B,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;AACA;EACE,eAAe;EACf,yCAAyC;EACzC,iBAAiB;EACjB,WAAW;EACX,2BAA2B;EAC3B,oCAAoC;EACpC,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb","sourcesContent":["#mainContainer {\n    background-color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    min-height: 97vh;\n}\n\n#topBar {\n    background-color: grey;\n    display: flex;\n    height: 75px;\n    align-items: center;\n}\n\n#navButton {\n    height: 75px;\n    width: 75px;\n    background-color: lightblue;\n    text-align: center;\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 500;\n}\n\n#navButton:hover {\n    background-color: rgb(168, 230, 255);\n}\n\n#logo {\n    margin-right: auto;\n    padding-left: 24px;\n    font-size: 36px;\n    font-style: italic;\n    font-weight: 900;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n#home {\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 9vh;\n}\n\n#footer {\n    margin-top: auto;\n    background-color: grey;\n    height: 75px;\n    text-align: center;\n}\n#footer > p {\n    margin-top: 28px;\n}\n\n#mainMenu {\n    display: flex;\n    flex-direction: column;\n    margin-right: auto;\n    margin-left: auto;\n    gap: 10px;\n}\n\n.mainMenuButton {\n    width: 150px;\n    height: 50px;\n    background-color: lightblue;\n    border: 2px solid rgb(155, 173, 197);\n    border-radius: 5px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n}\n.mainMenuButton:hover {\n    background-color: rgb(168, 230, 255);\n}\n.mainMenuButton:active {\n    background-color: rgb(196, 219, 248);\n    transform: translateY(1px);\n}\n\n/* FORMS FOR NEW ENTRIES */\n\n#newProjForm {\n    display:flex;\n    flex-direction: column;\n    width: 460px;\n    padding: 30px;\n    height: 250px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 9vh;\n    background-color: lightsteelblue;\n    border: 2px solid rgb(155, 173, 197);\n    border-radius: 10px;\n}\n\n#newTodoForm {\n  display:flex;\n  flex-direction: column;\n  width: 460px;\n  padding: 30px;\n  height: 250px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 9vh;\n  background-color: lightsteelblue;\n  border: 2px solid rgb(155, 173, 197);\n  border-radius: 10px;\n}\n\n.formLabel {\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 500;\n    margin-top: 12px;\n}\n\n.radioLabel {\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 500;\n}\n\n#prioBox {\n    display: flex;\n}\n\n.submitButton {\n  width: 200px;\n  height: 40px;\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: lightblue;\n  border: 2px solid rgb(155, 173, 197);\n  border-radius: 5px;\n}\n.submitButton:hover {\n  background-color: rgb(168, 230, 255);\n}\n.submitButton:active {\n  background-color: rgb(196, 219, 248);\n  transform: translateY(1px);\n}\n\n/* ALL PROJECTS VIEW */\n\n#allProjectsContainer {\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 9vh;\n    width: 700px;\n}\n\n.individualProject {\n    display: flex;\n    width: 680px;\n    height: 75px;\n    background-color: lightsteelblue;\n    border: 2px solid rgb(155, 173, 197);\n    border-radius: 10px;\n    align-items: center;\n}\n\n.addDueDate {\n    width: 100px;\n    text-align: center;\n}\n.addPriority {\n    width: 75px;\n    text-align: center;\n    margin-right: auto;\n}\n.addTitle {\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/* TODOS VIEW */\n\n#allTodosContainer {\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 9vh;\n  width: 700px;\n}\n\n.todoCompleteToggle {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  margin-left: auto;\n  background-color: lightblue;\n  border: 2px solid rgb(155, 173, 197);\n  border-radius: 5px;\n  height: 50px;\n  width: 75px;\n}\n.todoDelete {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  width: 85px;\n  background-color: lightblue;\n  border: 2px solid rgb(155, 173, 197);\n  border-radius: 5px;\n  height: 50px;\n  width: 75px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _mainMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainMenu.js */ "./src/mainMenu.js");


function createHome() {

    const contentContainer = document.getElementById('contentContainer');

    while (contentContainer.lastElementChild) {
        contentContainer.removeChild(contentContainer.lastElementChild);
    }

    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    contentContainer.appendChild(home);

    (0,_mainMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./src/mainMenu.js":
/*!*************************!*\
  !*** ./src/mainMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMainMenu)
/* harmony export */ });
/* harmony import */ var _newProjectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectForm */ "./src/newProjectForm.js");
/* harmony import */ var _newTodoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTodoForm */ "./src/newTodoForm.js");
/* harmony import */ var _viewAllProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewAllProjects */ "./src/viewAllProjects.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects */ "./src/objects.js");





function createMainMenu() {
  const home = document.getElementById('home');

  const mainMenu = document.createElement('div');
  mainMenu.setAttribute('id', 'mainMenu');

  const newProjButton = document.createElement('button');
  newProjButton.className = 'mainMenuButton';
  newProjButton.textContent = 'Create New Project';
  newProjButton.addEventListener('click', _newProjectForm__WEBPACK_IMPORTED_MODULE_0__["default"]);
  mainMenu.appendChild(newProjButton);

  const newTodoButton = document.createElement('button');
  newTodoButton.className = 'mainMenuButton';
  newTodoButton.textContent = 'Create New Todo';
  newTodoButton.addEventListener('click', _newTodoForm__WEBPACK_IMPORTED_MODULE_1__["default"]);
  mainMenu.appendChild(newTodoButton);

  const viewProjectsButton = document.createElement('button');
  viewProjectsButton.className = 'mainMenuButton';
  viewProjectsButton.textContent = 'View Projects';
  viewProjectsButton.addEventListener('click', () => {
    (0,_viewAllProjects__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  mainMenu.appendChild(viewProjectsButton);

  const loadDataButton = document.createElement('button');
  loadDataButton.className = 'mainMenuButton';
  loadDataButton.textContent = 'Load Data';
  loadDataButton.addEventListener('click', () => {
    console.table(localStorage.getItem('todoLists'));
    _objects__WEBPACK_IMPORTED_MODULE_3__.dataChange.allProjects = _objects__WEBPACK_IMPORTED_MODULE_3__.dataChange.loadArray(_objects__WEBPACK_IMPORTED_MODULE_3__.dataChange.allProjects);
    console.table(_objects__WEBPACK_IMPORTED_MODULE_3__.dataChange.allProjects);
  });
  mainMenu.appendChild(loadDataButton);

  const saveDataButton = document.createElement('button');
  saveDataButton.className = 'mainMenuButton';
  saveDataButton.textContent = 'Save Data';
  saveDataButton.addEventListener('click', () => {
    console.table(_objects__WEBPACK_IMPORTED_MODULE_3__.dataChange.allProjects);
    _objects__WEBPACK_IMPORTED_MODULE_3__.dataChange.saveArray(_objects__WEBPACK_IMPORTED_MODULE_3__.dataChange.allProjects);
  });
  mainMenu.appendChild(saveDataButton);

  home.appendChild(mainMenu);
}


/***/ }),

/***/ "./src/newProjectForm.js":
/*!*******************************!*\
  !*** ./src/newProjectForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProjectForm)
/* harmony export */ });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.js");


function refreshForm() {
  newProjectForm();
}

function newProjectForm() {
  const contentContainer = document.getElementById('contentContainer');

  while (contentContainer.lastElementChild) {
    contentContainer.removeChild(contentContainer.lastElementChild);
  }

  const newProjForm = document.createElement('form');
  newProjForm.setAttribute('id', 'newProjForm');

  const projTitleInput = document.createElement('input');
  projTitleInput.setAttribute('type', 'text');
  projTitleInput.setAttribute('id', 'titleInput');
  const projTitleLabel = document.createElement('label');
  projTitleLabel.setAttribute('for', 'titleInput');
  projTitleLabel.setAttribute('class', 'formLabel');
  projTitleLabel.textContent = 'New Project Title:';
  newProjForm.appendChild(projTitleLabel);
  newProjForm.appendChild(projTitleInput);

  const projDescInput = document.createElement('input');
  projDescInput.setAttribute('type', 'text');
  projDescInput.setAttribute('id', 'descInput');
  const projDescLabel = document.createElement('label');
  projDescLabel.setAttribute('for', 'descInput');
  projDescLabel.setAttribute('class', 'formLabel');
  projDescLabel.textContent = 'Description:';
  newProjForm.appendChild(projDescLabel);
  newProjForm.appendChild(projDescInput);

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  const dueDateLabel = document.createElement('label');
  dueDateLabel.setAttribute('for', 'dueDate');
  dueDateLabel.className = 'formLabel';
  dueDateLabel.textContent = 'Due Date:';
  newProjForm.appendChild(dueDateLabel);
  newProjForm.appendChild(dueDateInput); // return format YYYY-MM-DD

  const projPrioBox = document.createElement('div');
  projPrioBox.setAttribute('id', 'prioBox');
  projPrioBox.className = 'formLabel';
  projPrioBox.textContent = 'Priority:';
  newProjForm.appendChild(projPrioBox);

  const projPrioInputLow = document.createElement('input');
  projPrioInputLow.setAttribute('type', 'radio');
  projPrioInputLow.setAttribute('id', 'prioInputLow');
  projPrioInputLow.setAttribute('name', 'priority');
  projPrioInputLow.setAttribute('value', 'low');
  const projPrioLabelLow = document.createElement('label');
  projPrioLabelLow.setAttribute('for', 'prioInputLow');
  projPrioLabelLow.setAttribute('class', 'radioLabel');
  projPrioLabelLow.textContent = 'Low';
  projPrioBox.appendChild(projPrioInputLow);
  projPrioBox.appendChild(projPrioLabelLow);

  const projPrioInputMed = document.createElement('input');
  projPrioInputMed.setAttribute('type', 'radio');
  projPrioInputMed.setAttribute('id', 'prioInputMed');
  projPrioInputMed.setAttribute('name', 'priority');
  projPrioInputMed.setAttribute('value', 'med');
  const projPrioLabelMed = document.createElement('label');
  projPrioLabelMed.setAttribute('for', 'prioInputMed');
  projPrioLabelMed.setAttribute('class', 'radioLabel');
  projPrioLabelMed.textContent = 'Medium';
  projPrioBox.appendChild(projPrioInputMed);
  projPrioBox.appendChild(projPrioLabelMed);

  const projPrioInputHigh = document.createElement('input');
  projPrioInputHigh.setAttribute('type', 'radio');
  projPrioInputHigh.setAttribute('id', 'prioInputHigh');
  projPrioInputHigh.setAttribute('name', 'priority');
  projPrioInputHigh.setAttribute('value', 'high');
  const projPrioLabelHigh = document.createElement('label');
  projPrioLabelHigh.setAttribute('for', 'prioInputHigh');
  projPrioLabelHigh.setAttribute('class', 'radioLabel');
  projPrioLabelHigh.textContent = 'High';
  projPrioBox.appendChild(projPrioInputHigh);
  projPrioBox.appendChild(projPrioLabelHigh);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'button');
  submit.className = 'submitButton';
  submit.textContent = 'Create New Project';
  submit.addEventListener('click', submitNew);
  function submitNew() {
    if (document.querySelector('input[name="priority"]:checked') == null) {
      alert('Select a priority level');
    } else {
      const title = projTitleInput.value;
      const description = projDescInput.value;
      const dueDate = dueDateInput.value;
      const priority = document.querySelector('input[name="priority"]:checked').value;

      _objects__WEBPACK_IMPORTED_MODULE_0__.createNew.project(title, description, priority, dueDate);
      console.table(_objects__WEBPACK_IMPORTED_MODULE_0__.dataChange.allProjects);

      refreshForm();
    }
  }
  newProjForm.appendChild(submit);

  contentContainer.appendChild(newProjForm);
}


/***/ }),

/***/ "./src/newTodoForm.js":
/*!****************************!*\
  !*** ./src/newTodoForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newTodoForm)
/* harmony export */ });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.js");


function refreshForm() {
  newTodoForm();
}

function newTodoForm() {
  const contentContainer = document.getElementById('contentContainer');

  while (contentContainer.lastElementChild) {
    contentContainer.removeChild(contentContainer.lastElementChild);
  }

  const newTodoForm = document.createElement('form');
  newTodoForm.setAttribute('id', 'newTodoForm');

  const todoForProj = document.createElement('select');
  todoForProj.setAttribute('id', 'todoForProj');

  _objects__WEBPACK_IMPORTED_MODULE_0__.dataChange.allProjects.forEach((element) => {
    todoForProj.innerHTML += `<option value="${element.projTitle}">${element.projTitle}</option>`;
  });

  const todoForProjLabel = document.createElement('label');
  todoForProjLabel.setAttribute('for', 'todoForProj');
  todoForProjLabel.className = 'formLabel';
  todoForProjLabel.textContent = 'Project:';
  newTodoForm.appendChild(todoForProjLabel);
  newTodoForm.appendChild(todoForProj);

  const todoDescInput = document.createElement('input');
  todoDescInput.setAttribute('type', 'text');
  todoDescInput.setAttribute('id', 'descInput');
  const todoDescLabel = document.createElement('label');
  todoDescLabel.setAttribute('for', 'descInput');
  todoDescLabel.setAttribute('class', 'formLabel');
  todoDescLabel.textContent = 'Description:';
  newTodoForm.appendChild(todoDescLabel);
  newTodoForm.appendChild(todoDescInput);

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  const dueDateLabel = document.createElement('label');
  dueDateLabel.setAttribute('for', 'dueDate');
  dueDateLabel.className = 'formLabel';
  dueDateLabel.textContent = 'Due Date:';
  newTodoForm.appendChild(dueDateLabel);
  newTodoForm.appendChild(dueDateInput); // return format YYYY-MM-DD

  const todoPrioBox = document.createElement('div');
  todoPrioBox.setAttribute('id', 'prioBox');
  todoPrioBox.className = 'formLabel';
  todoPrioBox.textContent = 'Priority:';
  newTodoForm.appendChild(todoPrioBox);

  const todoPrioInputLow = document.createElement('input');
  todoPrioInputLow.setAttribute('type', 'radio');
  todoPrioInputLow.setAttribute('id', 'prioInputLow');
  todoPrioInputLow.setAttribute('name', 'priority');
  todoPrioInputLow.setAttribute('value', 'low');
  const todoPrioLabelLow = document.createElement('label');
  todoPrioLabelLow.setAttribute('for', 'prioInputLow');
  todoPrioLabelLow.setAttribute('class', 'radioLabel');
  todoPrioLabelLow.textContent = 'Low';
  todoPrioBox.appendChild(todoPrioInputLow);
  todoPrioBox.appendChild(todoPrioLabelLow);

  const todoPrioInputMed = document.createElement('input');
  todoPrioInputMed.setAttribute('type', 'radio');
  todoPrioInputMed.setAttribute('id', 'prioInputMed');
  todoPrioInputMed.setAttribute('name', 'priority');
  todoPrioInputMed.setAttribute('value', 'med');
  const todoPrioLabelMed = document.createElement('label');
  todoPrioLabelMed.setAttribute('for', 'prioInputMed');
  todoPrioLabelMed.setAttribute('class', 'radioLabel');
  todoPrioLabelMed.textContent = 'Medium';
  todoPrioBox.appendChild(todoPrioInputMed);
  todoPrioBox.appendChild(todoPrioLabelMed);

  const todoPrioInputHigh = document.createElement('input');
  todoPrioInputHigh.setAttribute('type', 'radio');
  todoPrioInputHigh.setAttribute('id', 'prioInputHigh');
  todoPrioInputHigh.setAttribute('name', 'priority');
  todoPrioInputHigh.setAttribute('value', 'high');
  const todoPrioLabelHigh = document.createElement('label');
  todoPrioLabelHigh.setAttribute('for', 'prioInputHigh');
  todoPrioLabelHigh.setAttribute('class', 'radioLabel');
  todoPrioLabelHigh.textContent = 'High';
  todoPrioBox.appendChild(todoPrioInputHigh);
  todoPrioBox.appendChild(todoPrioLabelHigh);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'button');
  submit.className = 'submitButton';
  submit.textContent = 'Create New Todo';
  submit.addEventListener('click', submitNew);
  function submitNew() {
    function projIndex(element) {
      return (`${element.projTitle}` == todoForProj.value);
    }

    if (document.querySelector('input[name="priority"]:checked') == null) {
      alert('Select a priority level');
    } else {
      const index = _objects__WEBPACK_IMPORTED_MODULE_0__.dataChange.allProjects.findIndex(projIndex);
      projIndex();
      const description = todoDescInput.value;
      const dueDate = dueDateInput.value;
      const priority = document.querySelector('input[name="priority"]:checked').value;

      _objects__WEBPACK_IMPORTED_MODULE_0__.createNew.todo(index, description, priority, dueDate);
      console.table(_objects__WEBPACK_IMPORTED_MODULE_0__.dataChange.allProjects[index].tasks);

      refreshForm();
    }
  }
  newTodoForm.appendChild(submit);

  contentContainer.appendChild(newTodoForm);
}


/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataChange": () => (/* binding */ dataChange),
/* harmony export */   "createNew": () => (/* binding */ createNew),
/* harmony export */   "removeItem": () => (/* binding */ removeItem)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


class Todo {
  constructor(description, priority, dueDate) {
    this.todoDesc = description;
    this.todoPriority = priority;
    this.dueDate = dueDate;
    this.isComplete = false;
  }
}

class Project {
  constructor(title, description, priority, dueDate) {
    this.projTitle = title;
    this.projDesc = description;
    this.projPriority = priority;
    this.dueDate = dueDate;
    this.tasks = [];
  }
}

const dataChange = (() => {
  const allProjects = [];

  function saveArray(array) {
    const userWarning = confirm('Are you sure? This will overwrite and stored data.');

    if (userWarning) {
      localStorage.setItem('todoLists', JSON.stringify(array));
      (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
    return array;
  }

  function loadArray(array) {
    const userWarning = confirm('Are you sure? This will replace your current session.');

    if (userWarning) {
      array = JSON.parse(localStorage.getItem('todoLists'));
    }
    return array;
  }

  return {
    allProjects,
    saveArray,
    loadArray,
  };
})();

const createNew = (() => {
  function project(title, description, priority, dueDate) {
    dataChange.allProjects.push(new Project(title, description, priority, dueDate));
  }

  function todo(index, description, priority, dueDate) {
    dataChange.allProjects[index].tasks.push(new Todo(description, priority, dueDate));
  }

  return {
    project,
    todo,
  };
})();

const removeItem = (() => {
  function project(index) {
    if (dataChange.allProjects[index].tasks.length == 0) {
      dataChange.allProjects.splice(index, 1);
    } else {
      alert('tasks are not empty');
    }
  }

  function todo(projIndex, todoIndex) {
    dataChange.allProjects[projIndex].tasks.splice(todoIndex, 1);
  }

  return {
    project,
    todo,
  };
})();


/***/ }),

/***/ "./src/viewAllProjects.js":
/*!********************************!*\
  !*** ./src/viewAllProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ viewAllProjectsForm)
/* harmony export */ });
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ "./src/objects.js");
/* harmony import */ var _viewTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewTodos.js */ "./src/viewTodos.js");



function refreshForm() {
  viewAllProjectsForm();
}

function viewAllProjectsForm() {
  const contentContainer = document.getElementById('contentContainer');

  while (contentContainer.lastElementChild) {
    contentContainer.removeChild(contentContainer.lastElementChild);
  }

  const allProjectsContainer = document.createElement('div');
  allProjectsContainer.setAttribute('id', 'allProjectsContainer');
  contentContainer.appendChild(allProjectsContainer);

  const allProjectsHeader = document.createElement('div');
  allProjectsHeader.setAttribute('id', 'allProjectsHeader');
  allProjectsHeader.classList.add('individualProject');
  allProjectsHeader.classList.add('formLabel');
  allProjectsContainer.appendChild(allProjectsHeader);

  const headerDueDate = document.createElement('div');
  headerDueDate.setAttribute('id', 'headerDueDate');
  headerDueDate.classList.add('addDueDate');
  headerDueDate.classList.add('formLabel');
  headerDueDate.textContent = 'Project Due Date';
  allProjectsHeader.appendChild(headerDueDate);

  const headerPriority = document.createElement('div');
  headerPriority.setAttribute('id', 'headerPriority');
  headerPriority.classList.add('addPriority');
  headerPriority.classList.add('pushLeft');
  headerPriority.classList.add('formLabel');
  headerPriority.textContent = 'Project Priority';
  allProjectsHeader.appendChild(headerPriority);

  const headerTitle = document.createElement('div');
  headerTitle.setAttribute('id', 'headerTitle');
  headerTitle.classList.add('addTitle');
  headerTitle.classList.add('formLabel');
  headerTitle.textContent = 'Project';
  allProjectsHeader.appendChild(headerTitle);

  _objects_js__WEBPACK_IMPORTED_MODULE_0__.dataChange.allProjects.forEach((element) => {
    const newProjHead = document.createElement('div');
    newProjHead.setAttribute('id', `projHead${element.projTitle}`);
    newProjHead.classList.add('individualProject');
    newProjHead.classList.add('formLabel');
    allProjectsContainer.appendChild(newProjHead);

    const newProjDueDate = document.createElement('div');
    newProjDueDate.setAttribute('id', `projDueDate${element.dueDate}`);
    newProjDueDate.classList.add('formLabel');
    newProjDueDate.classList.add('addDueDate');
    newProjDueDate.textContent = `${element.dueDate}`;
    newProjHead.appendChild(newProjDueDate);

    const newProjPriority = document.createElement('div');
    newProjPriority.setAttribute('id', `projPriority${element.projPriority}`);
    newProjPriority.classList.add('pushLeft');
    newProjPriority.classList.add('addPriority');
    newProjPriority.classList.add('formLabel');
    newProjPriority.textContent = `${element.projPriority}`;
    newProjHead.appendChild(newProjPriority);

    const newProjTitle = document.createElement('div');
    newProjTitle.setAttribute('id', `projTitle${element.projTitle}`);
    newProjTitle.classList.add('addTitle');
    newProjTitle.classList.add('formLabel');
    newProjTitle.textContent = `${element.projTitle}`;
    newProjHead.appendChild(newProjTitle);

    const deleteProj = document.createElement('button');
    deleteProj.setAttribute('id', `projTitle${element.projTitle}`);
    deleteProj.classList.add('todoCompleteToggle');
    deleteProj.textContent = 'Delete project';
    deleteProj.addEventListener('click', (e) => {
      _objects_js__WEBPACK_IMPORTED_MODULE_0__.removeItem.project(_objects_js__WEBPACK_IMPORTED_MODULE_0__.dataChange.allProjects.indexOf(element));
      e.stopPropagation();
      refreshForm();
    });
    newProjHead.appendChild(deleteProj);

    // go to project event listener here
    const projIndex = _objects_js__WEBPACK_IMPORTED_MODULE_0__.dataChange.allProjects.indexOf(element);
    newProjHead.addEventListener('click', () => {
      (0,_viewTodos_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projIndex);
    });
  });
}


/***/ }),

/***/ "./src/viewTodos.js":
/*!**************************!*\
  !*** ./src/viewTodos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ viewTodosForm)
/* harmony export */ });
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ "./src/objects.js");


function viewTodosForm(projIndex) {
  const contentContainer = document.getElementById('contentContainer');

  while (contentContainer.lastElementChild) {
    contentContainer.removeChild(contentContainer.lastElementChild);
  }

  const allTodosContainer = document.createElement('div');
  allTodosContainer.setAttribute('id', 'allTodosContainer');
  contentContainer.appendChild(allTodosContainer);

  const todosProjectHeader = document.createElement('div');
  todosProjectHeader.setAttribute('id', 'todosProjectHeader');
  todosProjectHeader.classList.add('individualProject');
  todosProjectHeader.classList.add('formLabel');
  allTodosContainer.appendChild(todosProjectHeader);

  const headerDueDate = document.createElement('div');
  headerDueDate.setAttribute('id', 'headerDueDate');
  headerDueDate.classList.add('addDueDate');
  headerDueDate.classList.add('formLabel');
  headerDueDate.textContent = 'Due Date';
  todosProjectHeader.appendChild(headerDueDate);

  const headerPriority = document.createElement('div');
  headerPriority.setAttribute('id', 'headerPriority');
  headerPriority.classList.add('addPriority');
  headerPriority.classList.add('pushLeft');
  headerPriority.classList.add('formLabel');
  headerPriority.textContent = 'Priority';
  todosProjectHeader.appendChild(headerPriority);

  const headerTitle = document.createElement('div');
  headerTitle.setAttribute('id', 'headerTitle');
  headerTitle.classList.add('addTitle');
  headerTitle.classList.add('formLabel');
  headerTitle.textContent = 'Description';
  todosProjectHeader.appendChild(headerTitle);

  const todoCompleteSpacer = document.createElement('div');
  todoCompleteSpacer.classList.add('todoCompleteToggle');
  todoCompleteSpacer.style.visibility = 'hidden';
  todosProjectHeader.appendChild(todoCompleteSpacer);

  // needs to be passed in the project index
  _objects__WEBPACK_IMPORTED_MODULE_0__.dataChange.allProjects[projIndex].tasks.forEach((element) => {
    const newTodoHead = document.createElement('div');
    newTodoHead.setAttribute('id', `todoHead${element.todoDesc}`);
    newTodoHead.classList.add('individualProject');
    newTodoHead.classList.add('formLabel');
    allTodosContainer.appendChild(newTodoHead);

    const newTodoDueDate = document.createElement('div');
    newTodoDueDate.setAttribute('id', `todoDueDate${element.dueDate}`);
    newTodoDueDate.classList.add('formLabel');
    newTodoDueDate.classList.add('addDueDate');
    newTodoDueDate.textContent = `${element.dueDate}`;
    newTodoHead.appendChild(newTodoDueDate);

    const newTodoPriority = document.createElement('div');
    newTodoPriority.setAttribute('id', `todoPriority${element.todoPriority}`);
    newTodoPriority.classList.add('pushLeft');
    newTodoPriority.classList.add('addPriority');
    newTodoPriority.classList.add('formLabel');
    newTodoPriority.textContent = `${element.todoPriority}`;
    newTodoHead.appendChild(newTodoPriority);

    const newTodoDesc = document.createElement('div');
    newTodoDesc.setAttribute('id', `todoDesc${element.todoDesc}`);
    newTodoDesc.classList.add('addTitle');
    newTodoDesc.classList.add('formLabel');
    newTodoDesc.textContent = `${element.todoDesc}`;
    newTodoHead.appendChild(newTodoDesc);

    const newTodoComplete = document.createElement('button');
    newTodoComplete.setAttribute('id', `todoCompl${element.todoDesc}`);
    newTodoComplete.classList.add('todoCompleteToggle');
    newTodoComplete.textContent = `Done: ${element.isComplete}`;
    newTodoComplete.addEventListener('click', () => {
      element.isComplete = !element.isComplete;
      newTodoComplete.textContent = `Done: ${element.isComplete}`;
    });
    newTodoHead.appendChild(newTodoComplete);

    const newTodoDelete = document.createElement('button');
    newTodoDelete.setAttribute('id', `todoDel${element.todoDesc}`);
    newTodoDelete.classList.add('todoDelete');
    newTodoDelete.textContent = 'Delete';
    newTodoDelete.addEventListener('click', (e) => {
      _objects__WEBPACK_IMPORTED_MODULE_0__.removeItem.todo(projIndex, _objects__WEBPACK_IMPORTED_MODULE_0__.dataChange.allProjects[projIndex].tasks.indexOf(element));
      e.stopPropagation();
      refreshForm(projIndex);
    });
    newTodoHead.appendChild(newTodoDelete);
  });
}

function refreshForm(projIndex) {
  viewTodosForm(projIndex);
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



const createLayout = (() => {
  const content = document.querySelector('#mainContainer');

  const topBar = document.createElement('div');
  topBar.setAttribute('id', 'topBar');
  content.appendChild(topBar);

  const navButton = document.createElement('div');
  navButton.setAttribute('id', 'navButton');
  navButton.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  navButton.textContent = 'Main Menu';
  topBar.appendChild(navButton);

  const logo = document.createElement('div');
  logo.setAttribute('id', 'logo');
  logo.textContent = 'Craig\'s Project Tracker';
  topBar.appendChild(logo);

  const contentContainer = document.createElement('div');
  contentContainer.setAttribute('id', 'contentContainer');
  content.appendChild(contentContainer);

  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');
  content.appendChild(footer);
  const footerP = document.createElement('p');
  footerP.textContent = 'Project by Craig, 2021';
  footer.appendChild(footerP);
})();

(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL21haW5NZW51LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9uZXdQcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvbmV3VG9kb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3ZpZXdBbGxQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvdmlld1RvZG9zLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbkNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogOTd2aDtcXG59XFxuXFxuI3RvcEJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25hdkJ1dHRvbiB7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jbmF2QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMjMwLCAyNTUpO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNob21lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogOXZoO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNmb290ZXIgPiBwIHtcXG4gICAgbWFyZ2luLXRvcDogMjhweDtcXG59XFxuXFxuI21haW5NZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWFpbk1lbnVCdXR0b24ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU1LCAxNzMsIDE5Nyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubWFpbk1lbnVCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAyMzAsIDI1NSk7XFxufVxcbi5tYWluTWVudUJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAyMTksIDI0OCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG5cXG4vKiBGT1JNUyBGT1IgTkVXIEVOVFJJRVMgKi9cXG5cXG4jbmV3UHJvakZvcm0ge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA0NjBweDtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogOXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1NSwgMTczLCAxOTcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jbmV3VG9kb0Zvcm0ge1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0NjBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiA5dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTUsIDE3MywgMTk3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb3JtTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4ucmFkaW9MYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNwcmlvQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnN1Ym1pdEJ1dHRvbiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1NSwgMTczLCAxOTcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc3VibWl0QnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDIzMCwgMjU1KTtcXG59XFxuLnN1Ym1pdEJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMjE5LCAyNDgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxufVxcblxcbi8qIEFMTCBQUk9KRUNUUyBWSUVXICovXFxuXFxuI2FsbFByb2plY3RzQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogOXZoO1xcbiAgICB3aWR0aDogNzAwcHg7XFxufVxcblxcbi5pbmRpdmlkdWFsUHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA2ODBweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1NSwgMTczLCAxOTcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkRHVlRGF0ZSB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWRkUHJpb3JpdHkge1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5hZGRUaXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLyogVE9ET1MgVklFVyAqL1xcblxcbiNhbGxUb2Rvc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogOXZoO1xcbiAgd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4udG9kb0NvbXBsZXRlVG9nZ2xlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTUsIDE3MywgMTk3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA3NXB4O1xcbn1cXG4udG9kb0RlbGV0ZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDg1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU1LCAxNzMsIDE5Nyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNzVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUdBQXFHO0FBQ3pHOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBCQUEwQjtBQUM5Qjs7QUFFQSwwQkFBMEI7O0FBRTFCO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21haW5Db250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDk3dmg7XFxufVxcblxcbiN0b3BCYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXZCdXR0b24ge1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI25hdkJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDIzMCwgMjU1KTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jaG9tZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDl2aDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jZm9vdGVyID4gcCB7XFxuICAgIG1hcmdpbi10b3A6IDI4cHg7XFxufVxcblxcbiNtYWluTWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1haW5NZW51QnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1NSwgMTczLCAxOTcpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLm1haW5NZW51QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMjMwLCAyNTUpO1xcbn1cXG4ubWFpbk1lbnVCdXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMjE5LCAyNDgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXG59XFxuXFxuLyogRk9STVMgRk9SIE5FVyBFTlRSSUVTICovXFxuXFxuI25ld1Byb2pGb3JtIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNDYwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDl2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTUsIDE3MywgMTk3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI25ld1RvZG9Gb3JtIHtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDYwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogOXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU1LCAxNzMsIDE5Nyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZm9ybUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLnJhZGlvTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jcHJpb0JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdWJtaXRCdXR0b24ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTUsIDE3MywgMTk3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnN1Ym1pdEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAyMzAsIDI1NSk7XFxufVxcbi5zdWJtaXRCdXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDIxOSwgMjQ4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG5cXG4vKiBBTEwgUFJPSkVDVFMgVklFVyAqL1xcblxcbiNhbGxQcm9qZWN0c0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDl2aDtcXG4gICAgd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4uaW5kaXZpZHVhbFByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNjgwcHg7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNTUsIDE3MywgMTk3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZER1ZURhdGUge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFkZFByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uYWRkVGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi8qIFRPRE9TIFZJRVcgKi9cXG5cXG4jYWxsVG9kb3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDl2aDtcXG4gIHdpZHRoOiA3MDBweDtcXG59XFxuXFxuLnRvZG9Db21wbGV0ZVRvZ2dsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTU1LCAxNzMsIDE5Nyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNzVweDtcXG59XFxuLnRvZG9EZWxldGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiA4NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE1NSwgMTczLCAxOTcpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDc1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlTWFpbk1lbnUgZnJvbSAnLi9tYWluTWVudS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnRDb250YWluZXInKTtcblxuICAgIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250ZW50Q29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbiAgICBjcmVhdGVNYWluTWVudSgpO1xufSIsImltcG9ydCBuZXdQcm9qZWN0Rm9ybSBmcm9tICcuL25ld1Byb2plY3RGb3JtJztcbmltcG9ydCBuZXdUb2RvRm9ybSBmcm9tICcuL25ld1RvZG9Gb3JtJztcbmltcG9ydCB2aWV3QWxsUHJvamVjdHNGb3JtIGZyb20gJy4vdmlld0FsbFByb2plY3RzJztcbmltcG9ydCB7IGRhdGFDaGFuZ2UgfSBmcm9tICcuL29iamVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYWluTWVudSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5cbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbk1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluTWVudScpO1xuXG4gIGNvbnN0IG5ld1Byb2pCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3UHJvakJ1dHRvbi5jbGFzc05hbWUgPSAnbWFpbk1lbnVCdXR0b24nO1xuICBuZXdQcm9qQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBOZXcgUHJvamVjdCc7XG4gIG5ld1Byb2pCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0Rm9ybSk7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKG5ld1Byb2pCdXR0b24pO1xuXG4gIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3VG9kb0J1dHRvbi5jbGFzc05hbWUgPSAnbWFpbk1lbnVCdXR0b24nO1xuICBuZXdUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBOZXcgVG9kbyc7XG4gIG5ld1RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdUb2RvRm9ybSk7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKG5ld1RvZG9CdXR0b24pO1xuXG4gIGNvbnN0IHZpZXdQcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB2aWV3UHJvamVjdHNCdXR0b24uY2xhc3NOYW1lID0gJ21haW5NZW51QnV0dG9uJztcbiAgdmlld1Byb2plY3RzQnV0dG9uLnRleHRDb250ZW50ID0gJ1ZpZXcgUHJvamVjdHMnO1xuICB2aWV3UHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdmlld0FsbFByb2plY3RzRm9ybSgpO1xuICB9KTtcbiAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQodmlld1Byb2plY3RzQnV0dG9uKTtcblxuICBjb25zdCBsb2FkRGF0YUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsb2FkRGF0YUJ1dHRvbi5jbGFzc05hbWUgPSAnbWFpbk1lbnVCdXR0b24nO1xuICBsb2FkRGF0YUJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb2FkIERhdGEnO1xuICBsb2FkRGF0YUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLnRhYmxlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdHMnKSk7XG4gICAgZGF0YUNoYW5nZS5hbGxQcm9qZWN0cyA9IGRhdGFDaGFuZ2UubG9hZEFycmF5KGRhdGFDaGFuZ2UuYWxsUHJvamVjdHMpO1xuICAgIGNvbnNvbGUudGFibGUoZGF0YUNoYW5nZS5hbGxQcm9qZWN0cyk7XG4gIH0pO1xuICBtYWluTWVudS5hcHBlbmRDaGlsZChsb2FkRGF0YUJ1dHRvbik7XG5cbiAgY29uc3Qgc2F2ZURhdGFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2F2ZURhdGFCdXR0b24uY2xhc3NOYW1lID0gJ21haW5NZW51QnV0dG9uJztcbiAgc2F2ZURhdGFCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSBEYXRhJztcbiAgc2F2ZURhdGFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS50YWJsZShkYXRhQ2hhbmdlLmFsbFByb2plY3RzKTtcbiAgICBkYXRhQ2hhbmdlLnNhdmVBcnJheShkYXRhQ2hhbmdlLmFsbFByb2plY3RzKTtcbiAgfSk7XG4gIG1haW5NZW51LmFwcGVuZENoaWxkKHNhdmVEYXRhQnV0dG9uKTtcblxuICBob21lLmFwcGVuZENoaWxkKG1haW5NZW51KTtcbn1cbiIsImltcG9ydCB7IGRhdGFDaGFuZ2UsIGNyZWF0ZU5ldyB9IGZyb20gJy4vb2JqZWN0cyc7XG5cbmZ1bmN0aW9uIHJlZnJlc2hGb3JtKCkge1xuICBuZXdQcm9qZWN0Rm9ybSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Q29udGFpbmVyJyk7XG5cbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IG5ld1Byb2pGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdQcm9qRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Byb2pGb3JtJyk7XG5cbiAgY29uc3QgcHJvalRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwcm9qVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBwcm9qVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlSW5wdXQnKTtcbiAgY29uc3QgcHJvalRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcm9qVGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZUlucHV0Jyk7XG4gIHByb2pUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybUxhYmVsJyk7XG4gIHByb2pUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0IFRpdGxlOic7XG4gIG5ld1Byb2pGb3JtLmFwcGVuZENoaWxkKHByb2pUaXRsZUxhYmVsKTtcbiAgbmV3UHJvakZvcm0uYXBwZW5kQ2hpbGQocHJvalRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IHByb2pEZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwcm9qRGVzY0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHByb2pEZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjSW5wdXQnKTtcbiAgY29uc3QgcHJvakRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHByb2pEZXNjTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY0lucHV0Jyk7XG4gIHByb2pEZXNjTGFiZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtTGFiZWwnKTtcbiAgcHJvakRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICBuZXdQcm9qRm9ybS5hcHBlbmRDaGlsZChwcm9qRGVzY0xhYmVsKTtcbiAgbmV3UHJvakZvcm0uYXBwZW5kQ2hpbGQocHJvakRlc2NJbnB1dCk7XG5cbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKTtcbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKTtcbiAgZHVlRGF0ZUxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtTGFiZWwnO1xuICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcbiAgbmV3UHJvakZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgbmV3UHJvakZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTsgLy8gcmV0dXJuIGZvcm1hdCBZWVlZLU1NLUREXG5cbiAgY29uc3QgcHJvalByaW9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvalByaW9Cb3guc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvQm94Jyk7XG4gIHByb2pQcmlvQm94LmNsYXNzTmFtZSA9ICdmb3JtTGFiZWwnO1xuICBwcm9qUHJpb0JveC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICBuZXdQcm9qRm9ybS5hcHBlbmRDaGlsZChwcm9qUHJpb0JveCk7XG5cbiAgY29uc3QgcHJvalByaW9JbnB1dExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHByb2pQcmlvSW5wdXRMb3cuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIHByb2pQcmlvSW5wdXRMb3cuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvSW5wdXRMb3cnKTtcbiAgcHJvalByaW9JbnB1dExvdy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgcHJvalByaW9JbnB1dExvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICBjb25zdCBwcm9qUHJpb0xhYmVsTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJvalByaW9MYWJlbExvdy5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvSW5wdXRMb3cnKTtcbiAgcHJvalByaW9MYWJlbExvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JhZGlvTGFiZWwnKTtcbiAgcHJvalByaW9MYWJlbExvdy50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBwcm9qUHJpb0JveC5hcHBlbmRDaGlsZChwcm9qUHJpb0lucHV0TG93KTtcbiAgcHJvalByaW9Cb3guYXBwZW5kQ2hpbGQocHJvalByaW9MYWJlbExvdyk7XG5cbiAgY29uc3QgcHJvalByaW9JbnB1dE1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHByb2pQcmlvSW5wdXRNZWQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIHByb2pQcmlvSW5wdXRNZWQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvSW5wdXRNZWQnKTtcbiAgcHJvalByaW9JbnB1dE1lZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgcHJvalByaW9JbnB1dE1lZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZCcpO1xuICBjb25zdCBwcm9qUHJpb0xhYmVsTWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJvalByaW9MYWJlbE1lZC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvSW5wdXRNZWQnKTtcbiAgcHJvalByaW9MYWJlbE1lZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JhZGlvTGFiZWwnKTtcbiAgcHJvalByaW9MYWJlbE1lZC50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICBwcm9qUHJpb0JveC5hcHBlbmRDaGlsZChwcm9qUHJpb0lucHV0TWVkKTtcbiAgcHJvalByaW9Cb3guYXBwZW5kQ2hpbGQocHJvalByaW9MYWJlbE1lZCk7XG5cbiAgY29uc3QgcHJvalByaW9JbnB1dEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwcm9qUHJpb0lucHV0SGlnaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgcHJvalByaW9JbnB1dEhpZ2guc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvSW5wdXRIaWdoJyk7XG4gIHByb2pQcmlvSW5wdXRIaWdoLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICBwcm9qUHJpb0lucHV0SGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgY29uc3QgcHJvalByaW9MYWJlbEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcm9qUHJpb0xhYmVsSGlnaC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvSW5wdXRIaWdoJyk7XG4gIHByb2pQcmlvTGFiZWxIaWdoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFkaW9MYWJlbCcpO1xuICBwcm9qUHJpb0xhYmVsSGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgcHJvalByaW9Cb3guYXBwZW5kQ2hpbGQocHJvalByaW9JbnB1dEhpZ2gpO1xuICBwcm9qUHJpb0JveC5hcHBlbmRDaGlsZChwcm9qUHJpb0xhYmVsSGlnaCk7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHN1Ym1pdC5jbGFzc05hbWUgPSAnc3VibWl0QnV0dG9uJztcbiAgc3VibWl0LnRleHRDb250ZW50ID0gJ0NyZWF0ZSBOZXcgUHJvamVjdCc7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdE5ldyk7XG4gIGZ1bmN0aW9uIHN1Ym1pdE5ldygpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKSA9PSBudWxsKSB7XG4gICAgICBhbGVydCgnU2VsZWN0IGEgcHJpb3JpdHkgbGV2ZWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGl0bGUgPSBwcm9qVGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvakRlc2NJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG5cbiAgICAgIGNyZWF0ZU5ldy5wcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpO1xuICAgICAgY29uc29sZS50YWJsZShkYXRhQ2hhbmdlLmFsbFByb2plY3RzKTtcblxuICAgICAgcmVmcmVzaEZvcm0oKTtcbiAgICB9XG4gIH1cbiAgbmV3UHJvakZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2pGb3JtKTtcbn1cbiIsImltcG9ydCB7IGRhdGFDaGFuZ2UsIGNyZWF0ZU5ldyB9IGZyb20gJy4vb2JqZWN0cyc7XG5cbmZ1bmN0aW9uIHJlZnJlc2hGb3JtKCkge1xuICBuZXdUb2RvRm9ybSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdUb2RvRm9ybSgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Q29udGFpbmVyJyk7XG5cbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBuZXdUb2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1RvZG9Gb3JtJyk7XG5cbiAgY29uc3QgdG9kb0ZvclByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgdG9kb0ZvclByb2ouc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvRm9yUHJvaicpO1xuXG4gIGRhdGFDaGFuZ2UuYWxsUHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHRvZG9Gb3JQcm9qLmlubmVySFRNTCArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7ZWxlbWVudC5wcm9qVGl0bGV9XCI+JHtlbGVtZW50LnByb2pUaXRsZX08L29wdGlvbj5gO1xuICB9KTtcblxuICBjb25zdCB0b2RvRm9yUHJvakxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdG9kb0ZvclByb2pMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvRm9yUHJvaicpO1xuICB0b2RvRm9yUHJvakxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtTGFiZWwnO1xuICB0b2RvRm9yUHJvakxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6JztcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0ZvclByb2pMYWJlbCk7XG4gIG5ld1RvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Gb3JQcm9qKTtcblxuICBjb25zdCB0b2RvRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb0Rlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0b2RvRGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY0lucHV0Jyk7XG4gIGNvbnN0IHRvZG9EZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0b2RvRGVzY0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NJbnB1dCcpO1xuICB0b2RvRGVzY0xhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybUxhYmVsJyk7XG4gIHRvZG9EZXNjTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2NMYWJlbCk7XG4gIG5ld1RvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjSW5wdXQpO1xuXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XG4gIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gIGR1ZURhdGVMYWJlbC5jbGFzc05hbWUgPSAnZm9ybUxhYmVsJztcbiAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gIG5ld1RvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIG5ld1RvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7IC8vIHJldHVybiBmb3JtYXQgWVlZWS1NTS1ERFxuXG4gIGNvbnN0IHRvZG9QcmlvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9QcmlvQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb0JveCcpO1xuICB0b2RvUHJpb0JveC5jbGFzc05hbWUgPSAnZm9ybUxhYmVsJztcbiAgdG9kb1ByaW9Cb3gudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1ByaW9Cb3gpO1xuXG4gIGNvbnN0IHRvZG9QcmlvSW5wdXRMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvUHJpb0lucHV0TG93LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICB0b2RvUHJpb0lucHV0TG93LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb0lucHV0TG93Jyk7XG4gIHRvZG9QcmlvSW5wdXRMb3cuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gIHRvZG9QcmlvSW5wdXRMb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgY29uc3QgdG9kb1ByaW9MYWJlbExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRvZG9QcmlvTGFiZWxMb3cuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb0lucHV0TG93Jyk7XG4gIHRvZG9QcmlvTGFiZWxMb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyYWRpb0xhYmVsJyk7XG4gIHRvZG9QcmlvTGFiZWxMb3cudGV4dENvbnRlbnQgPSAnTG93JztcbiAgdG9kb1ByaW9Cb3guYXBwZW5kQ2hpbGQodG9kb1ByaW9JbnB1dExvdyk7XG4gIHRvZG9QcmlvQm94LmFwcGVuZENoaWxkKHRvZG9QcmlvTGFiZWxMb3cpO1xuXG4gIGNvbnN0IHRvZG9QcmlvSW5wdXRNZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0b2RvUHJpb0lucHV0TWVkLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICB0b2RvUHJpb0lucHV0TWVkLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb0lucHV0TWVkJyk7XG4gIHRvZG9QcmlvSW5wdXRNZWQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gIHRvZG9QcmlvSW5wdXRNZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWQnKTtcbiAgY29uc3QgdG9kb1ByaW9MYWJlbE1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRvZG9QcmlvTGFiZWxNZWQuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb0lucHV0TWVkJyk7XG4gIHRvZG9QcmlvTGFiZWxNZWQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyYWRpb0xhYmVsJyk7XG4gIHRvZG9QcmlvTGFiZWxNZWQudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgdG9kb1ByaW9Cb3guYXBwZW5kQ2hpbGQodG9kb1ByaW9JbnB1dE1lZCk7XG4gIHRvZG9QcmlvQm94LmFwcGVuZENoaWxkKHRvZG9QcmlvTGFiZWxNZWQpO1xuXG4gIGNvbnN0IHRvZG9QcmlvSW5wdXRIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdG9kb1ByaW9JbnB1dEhpZ2guc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gIHRvZG9QcmlvSW5wdXRIaWdoLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb0lucHV0SGlnaCcpO1xuICB0b2RvUHJpb0lucHV0SGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgdG9kb1ByaW9JbnB1dEhpZ2guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gIGNvbnN0IHRvZG9QcmlvTGFiZWxIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdG9kb1ByaW9MYWJlbEhpZ2guc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb0lucHV0SGlnaCcpO1xuICB0b2RvUHJpb0xhYmVsSGlnaC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JhZGlvTGFiZWwnKTtcbiAgdG9kb1ByaW9MYWJlbEhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gIHRvZG9QcmlvQm94LmFwcGVuZENoaWxkKHRvZG9QcmlvSW5wdXRIaWdoKTtcbiAgdG9kb1ByaW9Cb3guYXBwZW5kQ2hpbGQodG9kb1ByaW9MYWJlbEhpZ2gpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBzdWJtaXQuY2xhc3NOYW1lID0gJ3N1Ym1pdEJ1dHRvbic7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgTmV3IFRvZG8nO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXROZXcpO1xuICBmdW5jdGlvbiBzdWJtaXROZXcoKSB7XG4gICAgZnVuY3Rpb24gcHJvakluZGV4KGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAoYCR7ZWxlbWVudC5wcm9qVGl0bGV9YCA9PSB0b2RvRm9yUHJvai52YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykgPT0gbnVsbCkge1xuICAgICAgYWxlcnQoJ1NlbGVjdCBhIHByaW9yaXR5IGxldmVsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZGF0YUNoYW5nZS5hbGxQcm9qZWN0cy5maW5kSW5kZXgocHJvakluZGV4KTtcbiAgICAgIHByb2pJbmRleCgpO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB0b2RvRGVzY0lucHV0LnZhbHVlO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcblxuICAgICAgY3JlYXRlTmV3LnRvZG8oaW5kZXgsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSk7XG4gICAgICBjb25zb2xlLnRhYmxlKGRhdGFDaGFuZ2UuYWxsUHJvamVjdHNbaW5kZXhdLnRhc2tzKTtcblxuICAgICAgcmVmcmVzaEZvcm0oKTtcbiAgICB9XG4gIH1cbiAgbmV3VG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9Gb3JtKTtcbn1cbiIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICB0aGlzLnRvZG9EZXNjID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy50b2RvUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgdGhpcy5wcm9qVGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnByb2pEZXNjID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcm9qUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGF0YUNoYW5nZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gW107XG5cbiAgZnVuY3Rpb24gc2F2ZUFycmF5KGFycmF5KSB7XG4gICAgY29uc3QgdXNlcldhcm5pbmcgPSBjb25maXJtKCdBcmUgeW91IHN1cmU/IFRoaXMgd2lsbCBvdmVyd3JpdGUgYW5kIHN0b3JlZCBkYXRhLicpO1xuXG4gICAgaWYgKHVzZXJXYXJuaW5nKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3RzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcbiAgICAgIGNyZWF0ZUhvbWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZEFycmF5KGFycmF5KSB7XG4gICAgY29uc3QgdXNlcldhcm5pbmcgPSBjb25maXJtKCdBcmUgeW91IHN1cmU/IFRoaXMgd2lsbCByZXBsYWNlIHlvdXIgY3VycmVudCBzZXNzaW9uLicpO1xuXG4gICAgaWYgKHVzZXJXYXJuaW5nKSB7XG4gICAgICBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0cycpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhbGxQcm9qZWN0cyxcbiAgICBzYXZlQXJyYXksXG4gICAgbG9hZEFycmF5LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ldyA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIHByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgIGRhdGFDaGFuZ2UuYWxsUHJvamVjdHMucHVzaChuZXcgUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2RvKGluZGV4LCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICBkYXRhQ2hhbmdlLmFsbFByb2plY3RzW2luZGV4XS50YXNrcy5wdXNoKG5ldyBUb2RvKGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0LFxuICAgIHRvZG8sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIHByb2plY3QoaW5kZXgpIHtcbiAgICBpZiAoZGF0YUNoYW5nZS5hbGxQcm9qZWN0c1tpbmRleF0udGFza3MubGVuZ3RoID09IDApIHtcbiAgICAgIGRhdGFDaGFuZ2UuYWxsUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ3Rhc2tzIGFyZSBub3QgZW1wdHknKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2RvKHByb2pJbmRleCwgdG9kb0luZGV4KSB7XG4gICAgZGF0YUNoYW5nZS5hbGxQcm9qZWN0c1twcm9qSW5kZXhdLnRhc2tzLnNwbGljZSh0b2RvSW5kZXgsIDEpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0LFxuICAgIHRvZG8sXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgZGF0YUNoYW5nZSwgcmVtb3ZlSXRlbSB9IGZyb20gJy4vb2JqZWN0cy5qcyc7XG5pbXBvcnQgdmlld1RvZG9zRm9ybSBmcm9tICcuL3ZpZXdUb2Rvcy5qcyc7XG5cbmZ1bmN0aW9uIHJlZnJlc2hGb3JtKCkge1xuICB2aWV3QWxsUHJvamVjdHNGb3JtKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZXdBbGxQcm9qZWN0c0Zvcm0oKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudENvbnRhaW5lcicpO1xuXG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cblxuICBjb25zdCBhbGxQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhbGxQcm9qZWN0c0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsbFByb2plY3RzQ29udGFpbmVyJyk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxsUHJvamVjdHNDb250YWluZXIpO1xuXG4gIGNvbnN0IGFsbFByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFsbFByb2plY3RzSGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxsUHJvamVjdHNIZWFkZXInKTtcbiAgYWxsUHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaW5kaXZpZHVhbFByb2plY3QnKTtcbiAgYWxsUHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUxhYmVsJyk7XG4gIGFsbFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsbFByb2plY3RzSGVhZGVyKTtcblxuICBjb25zdCBoZWFkZXJEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlckR1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXJEdWVEYXRlJyk7XG4gIGhlYWRlckR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnYWRkRHVlRGF0ZScpO1xuICBoZWFkZXJEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2Zvcm1MYWJlbCcpO1xuICBoZWFkZXJEdWVEYXRlLnRleHRDb250ZW50ID0gJ1Byb2plY3QgRHVlIERhdGUnO1xuICBhbGxQcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJEdWVEYXRlKTtcblxuICBjb25zdCBoZWFkZXJQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlclByaW9yaXR5Jyk7XG4gIGhlYWRlclByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2FkZFByaW9yaXR5Jyk7XG4gIGhlYWRlclByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3B1c2hMZWZ0Jyk7XG4gIGhlYWRlclByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2Zvcm1MYWJlbCcpO1xuICBoZWFkZXJQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcm9qZWN0IFByaW9yaXR5JztcbiAgYWxsUHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlclRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyVGl0bGUnKTtcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnYWRkVGl0bGUnKTtcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybUxhYmVsJyk7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xuICBhbGxQcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbiAgZGF0YUNoYW5nZS5hbGxQcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvakhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qSGVhZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2pIZWFkJHtlbGVtZW50LnByb2pUaXRsZX1gKTtcbiAgICBuZXdQcm9qSGVhZC5jbGFzc0xpc3QuYWRkKCdpbmRpdmlkdWFsUHJvamVjdCcpO1xuICAgIG5ld1Byb2pIZWFkLmNsYXNzTGlzdC5hZGQoJ2Zvcm1MYWJlbCcpO1xuICAgIGFsbFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2pIZWFkKTtcblxuICAgIGNvbnN0IG5ld1Byb2pEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvakR1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qRHVlRGF0ZSR7ZWxlbWVudC5kdWVEYXRlfWApO1xuICAgIG5ld1Byb2pEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2Zvcm1MYWJlbCcpO1xuICAgIG5ld1Byb2pEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2FkZER1ZURhdGUnKTtcbiAgICBuZXdQcm9qRHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQuZHVlRGF0ZX1gO1xuICAgIG5ld1Byb2pIZWFkLmFwcGVuZENoaWxkKG5ld1Byb2pEdWVEYXRlKTtcblxuICAgIGNvbnN0IG5ld1Byb2pQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2pQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2pQcmlvcml0eSR7ZWxlbWVudC5wcm9qUHJpb3JpdHl9YCk7XG4gICAgbmV3UHJvalByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3B1c2hMZWZ0Jyk7XG4gICAgbmV3UHJvalByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2FkZFByaW9yaXR5Jyk7XG4gICAgbmV3UHJvalByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2Zvcm1MYWJlbCcpO1xuICAgIG5ld1Byb2pQcmlvcml0eS50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQucHJvalByaW9yaXR5fWA7XG4gICAgbmV3UHJvakhlYWQuYXBwZW5kQ2hpbGQobmV3UHJvalByaW9yaXR5KTtcblxuICAgIGNvbnN0IG5ld1Byb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2pUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2pUaXRsZSR7ZWxlbWVudC5wcm9qVGl0bGV9YCk7XG4gICAgbmV3UHJvalRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FkZFRpdGxlJyk7XG4gICAgbmV3UHJvalRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvcm1MYWJlbCcpO1xuICAgIG5ld1Byb2pUaXRsZS50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQucHJvalRpdGxlfWA7XG4gICAgbmV3UHJvakhlYWQuYXBwZW5kQ2hpbGQobmV3UHJvalRpdGxlKTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvalRpdGxlJHtlbGVtZW50LnByb2pUaXRsZX1gKTtcbiAgICBkZWxldGVQcm9qLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db21wbGV0ZVRvZ2dsZScpO1xuICAgIGRlbGV0ZVByb2oudGV4dENvbnRlbnQgPSAnRGVsZXRlIHByb2plY3QnO1xuICAgIGRlbGV0ZVByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgcmVtb3ZlSXRlbS5wcm9qZWN0KGRhdGFDaGFuZ2UuYWxsUHJvamVjdHMuaW5kZXhPZihlbGVtZW50KSk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmVmcmVzaEZvcm0oKTtcbiAgICB9KTtcbiAgICBuZXdQcm9qSGVhZC5hcHBlbmRDaGlsZChkZWxldGVQcm9qKTtcblxuICAgIC8vIGdvIHRvIHByb2plY3QgZXZlbnQgbGlzdGVuZXIgaGVyZVxuICAgIGNvbnN0IHByb2pJbmRleCA9IGRhdGFDaGFuZ2UuYWxsUHJvamVjdHMuaW5kZXhPZihlbGVtZW50KTtcbiAgICBuZXdQcm9qSGVhZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHZpZXdUb2Rvc0Zvcm0ocHJvakluZGV4KTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBkYXRhQ2hhbmdlLCByZW1vdmVJdGVtIH0gZnJvbSAnLi9vYmplY3RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlld1RvZG9zRm9ybShwcm9qSW5kZXgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Q29udGFpbmVyJyk7XG5cbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGFsbFRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFsbFRvZG9zQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxsVG9kb3NDb250YWluZXInKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxUb2Rvc0NvbnRhaW5lcik7XG5cbiAgY29uc3QgdG9kb3NQcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9zUHJvamVjdEhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9zUHJvamVjdEhlYWRlcicpO1xuICB0b2Rvc1Byb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaW5kaXZpZHVhbFByb2plY3QnKTtcbiAgdG9kb3NQcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1MYWJlbCcpO1xuICBhbGxUb2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Rvc1Byb2plY3RIZWFkZXIpO1xuXG4gIGNvbnN0IGhlYWRlckR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlckR1ZURhdGUnKTtcbiAgaGVhZGVyRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdhZGREdWVEYXRlJyk7XG4gIGhlYWRlckR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZm9ybUxhYmVsJyk7XG4gIGhlYWRlckR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICB0b2Rvc1Byb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyRHVlRGF0ZSk7XG5cbiAgY29uc3QgaGVhZGVyUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXJQcmlvcml0eScpO1xuICBoZWFkZXJQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdhZGRQcmlvcml0eScpO1xuICBoZWFkZXJQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwdXNoTGVmdCcpO1xuICBoZWFkZXJQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdmb3JtTGFiZWwnKTtcbiAgaGVhZGVyUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICB0b2Rvc1Byb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUHJpb3JpdHkpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlclRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyVGl0bGUnKTtcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnYWRkVGl0bGUnKTtcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybUxhYmVsJyk7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgdG9kb3NQcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICBjb25zdCB0b2RvQ29tcGxldGVTcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdG9kb0NvbXBsZXRlU3BhY2VyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db21wbGV0ZVRvZ2dsZScpO1xuICB0b2RvQ29tcGxldGVTcGFjZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB0b2Rvc1Byb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQodG9kb0NvbXBsZXRlU3BhY2VyKTtcblxuICAvLyBuZWVkcyB0byBiZSBwYXNzZWQgaW4gdGhlIHByb2plY3QgaW5kZXhcbiAgZGF0YUNoYW5nZS5hbGxQcm9qZWN0c1twcm9qSW5kZXhdLnRhc2tzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1RvZG9IZWFkLnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kb0hlYWQke2VsZW1lbnQudG9kb0Rlc2N9YCk7XG4gICAgbmV3VG9kb0hlYWQuY2xhc3NMaXN0LmFkZCgnaW5kaXZpZHVhbFByb2plY3QnKTtcbiAgICBuZXdUb2RvSGVhZC5jbGFzc0xpc3QuYWRkKCdmb3JtTGFiZWwnKTtcbiAgICBhbGxUb2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvSGVhZCk7XG5cbiAgICBjb25zdCBuZXdUb2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1RvZG9EdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kb0R1ZURhdGUke2VsZW1lbnQuZHVlRGF0ZX1gKTtcbiAgICBuZXdUb2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdmb3JtTGFiZWwnKTtcbiAgICBuZXdUb2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdhZGREdWVEYXRlJyk7XG4gICAgbmV3VG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LmR1ZURhdGV9YDtcbiAgICBuZXdUb2RvSGVhZC5hcHBlbmRDaGlsZChuZXdUb2RvRHVlRGF0ZSk7XG5cbiAgICBjb25zdCBuZXdUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUb2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsIGB0b2RvUHJpb3JpdHkke2VsZW1lbnQudG9kb1ByaW9yaXR5fWApO1xuICAgIG5ld1RvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwdXNoTGVmdCcpO1xuICAgIG5ld1RvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdhZGRQcmlvcml0eScpO1xuICAgIG5ld1RvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdmb3JtTGFiZWwnKTtcbiAgICBuZXdUb2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LnRvZG9Qcmlvcml0eX1gO1xuICAgIG5ld1RvZG9IZWFkLmFwcGVuZENoaWxkKG5ld1RvZG9Qcmlvcml0eSk7XG5cbiAgICBjb25zdCBuZXdUb2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1RvZG9EZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCBgdG9kb0Rlc2Mke2VsZW1lbnQudG9kb0Rlc2N9YCk7XG4gICAgbmV3VG9kb0Rlc2MuY2xhc3NMaXN0LmFkZCgnYWRkVGl0bGUnKTtcbiAgICBuZXdUb2RvRGVzYy5jbGFzc0xpc3QuYWRkKCdmb3JtTGFiZWwnKTtcbiAgICBuZXdUb2RvRGVzYy50ZXh0Q29udGVudCA9IGAke2VsZW1lbnQudG9kb0Rlc2N9YDtcbiAgICBuZXdUb2RvSGVhZC5hcHBlbmRDaGlsZChuZXdUb2RvRGVzYyk7XG5cbiAgICBjb25zdCBuZXdUb2RvQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUb2RvQ29tcGxldGUuc2V0QXR0cmlidXRlKCdpZCcsIGB0b2RvQ29tcGwke2VsZW1lbnQudG9kb0Rlc2N9YCk7XG4gICAgbmV3VG9kb0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db21wbGV0ZVRvZ2dsZScpO1xuICAgIG5ld1RvZG9Db21wbGV0ZS50ZXh0Q29udGVudCA9IGBEb25lOiAke2VsZW1lbnQuaXNDb21wbGV0ZX1gO1xuICAgIG5ld1RvZG9Db21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGVsZW1lbnQuaXNDb21wbGV0ZSA9ICFlbGVtZW50LmlzQ29tcGxldGU7XG4gICAgICBuZXdUb2RvQ29tcGxldGUudGV4dENvbnRlbnQgPSBgRG9uZTogJHtlbGVtZW50LmlzQ29tcGxldGV9YDtcbiAgICB9KTtcbiAgICBuZXdUb2RvSGVhZC5hcHBlbmRDaGlsZChuZXdUb2RvQ29tcGxldGUpO1xuXG4gICAgY29uc3QgbmV3VG9kb0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1RvZG9EZWxldGUuc2V0QXR0cmlidXRlKCdpZCcsIGB0b2RvRGVsJHtlbGVtZW50LnRvZG9EZXNjfWApO1xuICAgIG5ld1RvZG9EZWxldGUuY2xhc3NMaXN0LmFkZCgndG9kb0RlbGV0ZScpO1xuICAgIG5ld1RvZG9EZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICBuZXdUb2RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHJlbW92ZUl0ZW0udG9kbyhwcm9qSW5kZXgsIGRhdGFDaGFuZ2UuYWxsUHJvamVjdHNbcHJvakluZGV4XS50YXNrcy5pbmRleE9mKGVsZW1lbnQpKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZWZyZXNoRm9ybShwcm9qSW5kZXgpO1xuICAgIH0pO1xuICAgIG5ld1RvZG9IZWFkLmFwcGVuZENoaWxkKG5ld1RvZG9EZWxldGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaEZvcm0ocHJvakluZGV4KSB7XG4gIHZpZXdUb2Rvc0Zvcm0ocHJvakluZGV4KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5cbmNvbnN0IGNyZWF0ZUxheW91dCA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbkNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b3BCYXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b3BCYXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0b3BCYXIpO1xuXG4gIGNvbnN0IG5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICduYXZCdXR0b24nKTtcbiAgbmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlSG9tZSk7XG4gIG5hdkJ1dHRvbi50ZXh0Q29udGVudCA9ICdNYWluIE1lbnUnO1xuICB0b3BCYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9uKTtcblxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dvJyk7XG4gIGxvZ28udGV4dENvbnRlbnQgPSAnQ3JhaWdcXCdzIFByb2plY3QgVHJhY2tlcic7XG4gIHRvcEJhci5hcHBlbmRDaGlsZChsb2dvKTtcblxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Q29udGFpbmVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3RlcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIGNvbnN0IGZvb3RlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvb3RlclAudGV4dENvbnRlbnQgPSAnUHJvamVjdCBieSBDcmFpZywgMjAyMSc7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJQKTtcbn0pKCk7XG5cbmNyZWF0ZUhvbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
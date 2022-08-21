"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"vvys9c1a\",\n    apiVersion: \"2021-08-11\",\n    useCdn: \"development\" === \"production\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxNQUFNLEdBQUc7SUFDbEJDLE9BQU8sRUFBRUMsWUFBc0MsSUFBSSxDQUFZO0lBQy9ERyxTQUFTLEVBQUVILFVBQXlDO0lBQ3BESyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsTUFBTSxFQUFFTixhQUpDLEtBSXdCLFlBQVk7Q0FDaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9saWIvY29uZmlnLmpzPzA2YzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBkYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCBcInByb2R1Y3Rpb25cIixcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxuICAgIGFwaVZlcnNpb246IFwiMjAyMS0wOC0xMVwiLFxuICAgIHVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxufSJdLCJuYW1lcyI6WyJjb25maWciLCJkYXRhc2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQiLCJhcGlWZXJzaW9uIiwidXNlQ2RuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/config.js\n");

/***/ }),

/***/ "./lib/queries.js":
/*!************************!*\
  !*** ./lib/queries.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blogPage\": () => (/* binding */ blogPage),\n/* harmony export */   \"homepage\": () => (/* binding */ homepage),\n/* harmony export */   \"singleBlog\": () => (/* binding */ singleBlog)\n/* harmony export */ });\nconst homepage = `\n    *[_type == \"page\" && title == \"Homepage\"]\n`;\nconst blogPage = `{\n    \"pageData\": *[_type == \"page\" && title == \"Blog Page\"],\n    \"allPosts\": *[_type == \"post\"] | order(_createdAt desc) {\n        title,\n        \n    }\n}`;\nconst singleBlog = `\n    *[_type == \"post\" && slug.current == $slug][0]\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcXVlcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxRQUFRLEdBQUcsQ0FBQzs7QUFFekIsQ0FBQztBQUVNLE1BQU1DLFFBQVEsR0FBRyxDQUFDOzs7Ozs7Q0FNeEIsQ0FBQztBQUVLLE1BQU1DLFVBQVUsR0FBRyxDQUFDOztBQUUzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vbGliL3F1ZXJpZXMuanM/NjBlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaG9tZXBhZ2UgPSBgXG4gICAgKltfdHlwZSA9PSBcInBhZ2VcIiAmJiB0aXRsZSA9PSBcIkhvbWVwYWdlXCJdXG5gXG5cbmV4cG9ydCBjb25zdCBibG9nUGFnZSA9IGB7XG4gICAgXCJwYWdlRGF0YVwiOiAqW190eXBlID09IFwicGFnZVwiICYmIHRpdGxlID09IFwiQmxvZyBQYWdlXCJdLFxuICAgIFwiYWxsUG9zdHNcIjogKltfdHlwZSA9PSBcInBvc3RcIl0gfCBvcmRlcihfY3JlYXRlZEF0IGRlc2MpIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIFxuICAgIH1cbn1gXG5cbmV4cG9ydCBjb25zdCBzaW5nbGVCbG9nID0gYFxuICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXVxuYCJdLCJuYW1lcyI6WyJob21lcGFnZSIsImJsb2dQYWdlIiwic2luZ2xlQmxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/queries.js\n");

/***/ }),

/***/ "./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./lib/config.js\");\n\n\nif (!_config__WEBPACK_IMPORTED_MODULE_1__.config.projectId) {\n    throw Error(\"The Project ID is not set. Check your environment variables.\");\n}\nconst client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(_config__WEBPACK_IMPORTED_MODULE_1__.config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2FuaXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLcUI7QUFFYTtBQUVsQyxJQUFJLENBQUNJLHFEQUFnQixFQUFFO0lBQ25CLE1BQU1FLEtBQUssQ0FDVCw4REFBOEQsQ0FDL0QsQ0FBQztDQUNMO0FBRU0sTUFBTUMsTUFBTSxHQUFHUCx5REFBWSxDQUFDSSwyQ0FBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9saWIvc2FuaXR5LmpzP2Q4YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBjcmVhdGVDbGllbnQsXG4gICAgY3JlYXRlUG9ydGFibGVUZXh0Q29tcG9uZW50LFxuICAgIGNyZWF0ZUltYWdlVXJsQnVpbGRlcixcbiAgICBjcmVhdGVQcmV2aWV3U3Vic2NyaXB0aW9uSG9va1xufSBmcm9tIFwibmV4dC1zYW5pdHlcIjtcbiAgXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuaWYgKCFjb25maWcucHJvamVjdElkKSB7XG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICBcIlRoZSBQcm9qZWN0IElEIGlzIG5vdCBzZXQuIENoZWNrIHlvdXIgZW52aXJvbm1lbnQgdmFyaWFibGVzLlwiXG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpOyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjcmVhdGVQb3J0YWJsZVRleHRDb21wb25lbnQiLCJjcmVhdGVJbWFnZVVybEJ1aWxkZXIiLCJjcmVhdGVQcmV2aWV3U3Vic2NyaXB0aW9uSG9vayIsImNvbmZpZyIsInByb2plY3RJZCIsIkVycm9yIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/sanity.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/queries */ \"./lib/queries.js\");\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sanity */ \"./lib/sanity.js\");\n\n\n\nfunction Home({ data  }) {\n    const pageData = data[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-2xl font-bold\",\n            children: pageData.title\n        }, void 0, false, {\n            fileName: \"/Users/briannelson/Documents/GitHub/client-example/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\nasync function getStaticProps() {\n    const data = await _lib_sanity__WEBPACK_IMPORTED_MODULE_2__.client.fetch(_lib_queries__WEBPACK_IMPORTED_MODULE_1__.homepage);\n    // console.log(data)\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNIO0FBRXZCLFNBQVNFLElBQUksQ0FBQyxFQUFFQyxJQUFJLEdBQUUsRUFBRTtJQUNyQyxNQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEIscUJBQ0U7a0JBQ0UsNEVBQUNFLElBQUU7WUFBQ0MsU0FBUyxFQUFDLG9CQUFvQjtzQkFBRUYsUUFBUSxDQUFDRyxLQUFLOzs7OztnQkFBTTtxQkFDdkQsQ0FDSjtDQUNGO0FBRU0sZUFBZUMsY0FBYyxHQUFHO0lBQ3JDLE1BQU1MLElBQUksR0FBRyxNQUFNRixxREFBWSxDQUFDRCxrREFBUSxDQUFDO0lBQ3pDLG9CQUFvQjtJQUVwQixPQUFPO1FBQ0xVLEtBQUssRUFBRTtZQUNMUCxJQUFJO1NBQ0w7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob21lcGFnZSB9IGZyb20gXCIuLi9saWIvcXVlcmllc1wiXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vbGliL3Nhbml0eVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHtcbiAgY29uc3QgcGFnZURhdGEgPSBkYXRhWzBdXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57cGFnZURhdGEudGl0bGV9PC9oMT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjbGllbnQuZmV0Y2goaG9tZXBhZ2UpXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImhvbWVwYWdlIiwiY2xpZW50IiwiSG9tZSIsImRhdGEiLCJwYWdlRGF0YSIsImgxIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJnZXRTdGF0aWNQcm9wcyIsImZldGNoIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
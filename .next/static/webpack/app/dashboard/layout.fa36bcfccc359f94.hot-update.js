"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./app/ui/dashboard/navbar/navbar.jsx":
/*!********************************************!*\
  !*** ./app/ui/dashboard/navbar/navbar.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.module.css */ \"(app-pages-browser)/./app/ui/dashboard/navbar/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: pathname.split(\"/\").pop()\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/admin-dashboard/app/ui/dashboard/navbar/navbar.jsx\",\n                lineNumber: 16,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().menu),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/user/Desktop/admin-dashboard/app/ui/dashboard/navbar/navbar.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/admin-dashboard/app/ui/dashboard/navbar/navbar.jsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/admin-dashboard/app/ui/dashboard/navbar/navbar.jsx\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Navbar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9kYXNoYm9hcmQvbmF2YmFyL25hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNkM7QUFDTDtBQU1qQjtBQUV2QixNQUFNTSxTQUFTOztJQUNkLE1BQU1DLFdBQVdQLDREQUFXQTtJQUM1QixxQkFDQyw4REFBQ1E7UUFBSUMsV0FBV1IscUVBQWdCOzswQkFDL0IsOERBQUNPO2dCQUFJQyxXQUFXUixpRUFBWTswQkFBR00sU0FBU0ssS0FBSyxDQUFDLEtBQUtDLEdBQUc7Ozs7OzswQkFDdEQsOERBQUNMO2dCQUFJQyxXQUFXUixnRUFBVzswQkFDMUIsNEVBQUNPOzs7Ozs7Ozs7Ozs7Ozs7O0FBSUw7R0FWTUY7O1FBQ1lOLHdEQUFXQTs7O0tBRHZCTTtBQVlOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9kYXNoYm9hcmQvbmF2YmFyL25hdmJhci5qc3g/MTA0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25hdmJhci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtcblx0TWROb3RpZmljYXRpb25zLFxuXHRNZE91dGxpbmVDaGF0LFxuXHRNZFB1YmxpYyxcblx0TWRTZWFyY2gsXG59IGZyb20gJ3JlYWN0LWljb25zL21kJ1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG5cdGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntwYXRobmFtZS5zcGxpdCgnLycpLnBvcCgpfTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fT5cblx0XHRcdFx0PGRpdj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJ1c2VQYXRobmFtZSIsInN0eWxlcyIsIk1kTm90aWZpY2F0aW9ucyIsIk1kT3V0bGluZUNoYXQiLCJNZFB1YmxpYyIsIk1kU2VhcmNoIiwiTmF2YmFyIiwicGF0aG5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsInNwbGl0IiwicG9wIiwibWVudSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/dashboard/navbar/navbar.jsx\n"));

/***/ })

});
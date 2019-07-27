(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~d0ae3f07"],{

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"GAND");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"GmYv");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"b9nV");


/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar aurelia_http_client_1 = __webpack_require__(/*! aurelia-http-client */ \"1aCK\");\r\nvar App = (function () {\r\n    function App(EventAgregator) {\r\n        var _this = this;\r\n        this.message = 'Hello World!';\r\n        this.menuItems = [];\r\n        var client = new aurelia_http_client_1.HttpClient();\r\n        client.get(\"/menuitems\")\r\n            .then(function (data) {\r\n            console.log(\"data: \" + data.response);\r\n            var jsonResponse = JSON.parse(data.response);\r\n            _this.menuItems = jsonResponse.menuItems;\r\n        });\r\n    }\r\n    return App;\r\n}());\r\nexports.App = App;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XG5cbmludGVyZmFjZSBJTWVueUl0ZW0ge1xuICBCdXR0b25OYW1lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSAnSGVsbG8gV29ybGQhJztcbiAgbWVudUl0ZW1zOiBJTWVueUl0ZW1bXSA9IFtdXG4gIGNvbnN0cnVjdG9yKEV2ZW50QWdyZWdhdG9yPykge1xuICAgIGxldCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpXG5cbiAgICBjbGllbnQuZ2V0KFwiL21lbnVpdGVtc1wiKVxuICAgIC50aGVuKChkYXRhKT0+e1xuICAgICAgY29uc29sZS5sb2coYGRhdGE6ICR7ZGF0YS5yZXNwb25zZX1gKVxuICAgICAgbGV0IGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZSlcbiAgICAgIHRoaXMubWVudUl0ZW1zID0ganNvblJlc3BvbnNlLm1lbnVJdGVtc1xuICAgIH0pXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQU1BO0FBR0E7QUFBQTtBQUZBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWJBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<template>\\n\\n  <require from=\\\"./login\\\"></require>\\n  <login if.bind=\\\"isLoginVisible\\\"></login>\\n\\n  <nav class=\\\"navbar navbar-default navbar-fixed-top navbar-inverse\\\">\\n    <div class=\\\"container-fluid\\\">\\n      <a class=\\\"navbar-brand\\\">Main Page</a>\\n      <ul class=\\\"nav navbar-nav\\\">\\n        <li repeat.for=\\\"item of menuItems\\\" \\n          class=\\\"nav-item nav-link active\\\">\\n\\n        <a href=\\\"#\\\">${item.ButtonName}</a></li>\\n      </ul>\\n    </div>\\n  </nav>\\n\\n</template>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/NDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcblxcbiAgPHJlcXVpcmUgZnJvbT1cXFwiLi9sb2dpblxcXCI+PC9yZXF1aXJlPlxcbiAgPGxvZ2luIGlmLmJpbmQ9XFxcImlzTG9naW5WaXNpYmxlXFxcIj48L2xvZ2luPlxcblxcbiAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1maXhlZC10b3AgbmF2YmFyLWludmVyc2VcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiPk1haW4gUGFnZTwvYT5cXG4gICAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXZiYXItbmF2XFxcIj5cXG4gICAgICAgIDxsaSByZXBlYXQuZm9yPVxcXCJpdGVtIG9mIG1lbnVJdGVtc1xcXCIgXFxuICAgICAgICAgIGNsYXNzPVxcXCJuYXYtaXRlbSBuYXYtbGluayBhY3RpdmVcXFwiPlxcblxcbiAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCI+JHtpdGVtLkJ1dHRvbk5hbWV9PC9hPjwvbGk+XFxuICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuICA8L25hdj5cXG5cXG48L3RlbXBsYXRlPlwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "e2Tw":
/*!****************************!*\
  !*** ./src/environment.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    debug: true,\r\n    testing: true\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJUdy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudC50cz83YjY0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZGVidWc6IHRydWUsXG4gIHRlc3Rpbmc6IHRydWVcbn07XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///e2Tw\n");

/***/ }),

/***/ "login":
/*!**********************!*\
  !*** ./src/login.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar aurelia_http_client_1 = __webpack_require__(/*! aurelia-http-client */ \"1aCK\");\r\nvar Login = (function () {\r\n    function Login() {\r\n        this.header = \"Log in.\";\r\n        this.userName = \"\";\r\n        this.password = \"\";\r\n    }\r\n    Login.prototype.onsubmit = function () {\r\n        var postMessage = {\r\n            userName: this.userName,\r\n            password: this.password\r\n        };\r\n        var client = new aurelia_http_client_1.HttpClient();\r\n        client.post(\"/login\", postMessage)\r\n            .then(function (message) {\r\n            console.log(\"POST response: \" + message.response);\r\n        })\r\n            .catch(function (err) {\r\n            console.log(\"err.response: \" + err.response);\r\n        });\r\n    };\r\n    return Login;\r\n}());\r\nexports.Login = Login;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbG9naW4udHM/MjVmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW4ge1xyXG4gICAgaGVhZGVyID0gXCJMb2cgaW4uXCJcclxuICAgIHVzZXJOYW1lID0gXCJcIlxyXG4gICAgcGFzc3dvcmQgPSBcIlwiXHJcblxyXG4gICAgb25zdWJtaXQoKSB7XHJcbiAgICAgICAgdmFyIHBvc3RNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICB1c2VyTmFtZTogdGhpcy51c2VyTmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNsaWVudCA9IG5ldyBIdHRwQ2xpZW50KClcclxuICAgICAgICBjbGllbnQucG9zdChcIi9sb2dpblwiLCBwb3N0TWVzc2FnZSlcclxuICAgICAgICAgICAgLnRoZW4oIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUE9TVCByZXNwb25zZTogJHttZXNzYWdlLnJlc3BvbnNlfWApfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyLnJlc3BvbnNlOiAke2Vyci5yZXNwb25zZX1gKX0pXHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQWpCQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///login\n");

/***/ }),

/***/ "login.html":
/*!************************!*\
  !*** ./src/login.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\r\\n      \\r\\n    <div id=\\\"sideNav\\\" class=\\\"login_sidenav\\\">\\r\\n      <form role=\\\"form\\\" submit.delegate=\\\"onSubmit()\\\">\\r\\n        <div class=\\\"container\\\">\\r\\n          <a href=\\\"#\\\" class=\\\"closebtn\\\" >&times;</a>\\r\\n          <div class=\\\"row\\\">${header}</div>\\r\\n          <div class=\\\"row\\\">\\r\\n            <input \\r\\n            class=\\\"sidenav-input\\\" \\r\\n            value.bind=\\\"userName\\\" \\r\\n            type=\\\"text\\\" \\r\\n            placeholder=\\\"User name\\\">\\r\\n          </div>\\r\\n          <div class=\\\"row\\\">\\r\\n            <input \\r\\n            class=\\\"sidenav-input\\\" \\r\\n            value.bind=\\\"password\\\" \\r\\n            type=\\\"password\\\" \\r\\n            placeholder=\\\"Password\\\">\\r\\n          </div>\\r\\n          <div class=\\\"row\\\">\\r\\n            <button class=\\\"btn btn-primary btn-lg\\\">Login\\r\\n            </button>\\r\\n          </div>\\r\\n        </div>\\r\\n      </form>\\r\\n    </div>\\r\\n</template>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uaHRtbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sb2dpbi5odG1sP2FkNzUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgICBcXHJcXG4gICAgPGRpdiBpZD1cXFwic2lkZU5hdlxcXCIgY2xhc3M9XFxcImxvZ2luX3NpZGVuYXZcXFwiPlxcclxcbiAgICAgIDxmb3JtIHJvbGU9XFxcImZvcm1cXFwiIHN1Ym1pdC5kZWxlZ2F0ZT1cXFwib25TdWJtaXQoKVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiY2xvc2VidG5cXFwiID4mdGltZXM7PC9hPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiR7aGVhZGVyfTwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwic2lkZW5hdi1pbnB1dFxcXCIgXFxyXFxuICAgICAgICAgICAgdmFsdWUuYmluZD1cXFwidXNlck5hbWVcXFwiIFxcclxcbiAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiIFxcclxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJVc2VyIG5hbWVcXFwiPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInNpZGVuYXYtaW5wdXRcXFwiIFxcclxcbiAgICAgICAgICAgIHZhbHVlLmJpbmQ9XFxcInBhc3N3b3JkXFxcIiBcXHJcXG4gICAgICAgICAgICB0eXBlPVxcXCJwYXNzd29yZFxcXCIgXFxyXFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1xcXCI+TG9naW5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///login.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! core-js/stable */ \"LSZE\");\r\nvar environment_1 = __webpack_require__(/*! ./environment */ \"e2Tw\");\r\nvar aurelia_pal_1 = __webpack_require__(/*! aurelia-pal */ \"70NS\");\r\nfunction configure(aurelia) {\r\n    aurelia.use\r\n        .standardConfiguration()\r\n        .feature('resources/index');\r\n    aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');\r\n    if (environment_1.default.testing) {\r\n        aurelia.use.plugin('aurelia-testing');\r\n    }\r\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\r\n}\r\nexports.configure = configure;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdjb3JlLWpzL3N0YWJsZSc7XG5pbXBvcnQge0F1cmVsaWF9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHtQTEFURk9STX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZShQTEFURk9STS5tb2R1bGVOYW1lKCdyZXNvdXJjZXMvaW5kZXgnKSk7XG5cbiAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKGVudmlyb25tZW50LmRlYnVnID8gJ2RlYnVnJyA6ICd3YXJuJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oUExBVEZPUk0ubW9kdWxlTmFtZSgnYXVyZWxpYS10ZXN0aW5nJykpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2FwcCcpKSk7XG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFaQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction configure(config) {\r\n}\r\nexports.configure = configure;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC50cz83NDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sIm1hcHBpbmdzIjoiOztBQUVBO0FBRUE7QUFGQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ })

},[[0,"runtime~app","vendors~0ba1d959","vendors~556c66f2","vendors~72fdf3f2","vendors~50e8d500","vendors~5ea1390f","vendors~ecff2e3d","vendors~9e0f4621","vendors~d939e436","vendors~41983590","vendors~987e6011"]]]);
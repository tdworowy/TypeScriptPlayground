"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_http_client_1 = require("aurelia-http-client");
var Login = (function () {
    function Login() {
        this.header = "Log in.";
        this.userName = "";
        this.password = "";
    }
    Login.prototype.onsubmit = function () {
        var postMessage = {
            userName: this.userName,
            password: this.password
        };
        var client = new aurelia_http_client_1.HttpClient();
        client.post("/login", postMessage)
            .then(function (message) {
            console.log("POST response: " + message.response);
        })
            .catch(function (err) {
            console.log("err.response: " + err.response);
        });
    };
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map
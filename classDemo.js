"use strict";
exports.__esModule = true;
exports.classDemo = void 0;
var classDemo = /** @class */ (function () {
    function classDemo(ssn) {
        this.ssn = ssn;
    }
    classDemo.prototype.getUsername = function () {
        return this.username;
    };
    classDemo.prototype.setUserName = function (userName) {
        this.username = userName;
    };
    classDemo.prototype.getSsn = function () {
        return this.ssn;
    };
    classDemo.prototype.setSsn = function (ssn) {
        this.ssn = ssn;
    };
    classDemo.prototype.getPassword = function () {
        return this.password;
    };
    classDemo.prototype.setPassword = function (password) {
        this.password = password;
    };
    return classDemo;
}());
exports.classDemo = classDemo;

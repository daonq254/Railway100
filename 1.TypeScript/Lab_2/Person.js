"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myName = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.go = function () {
        console.log("I can go!!");
    };
    Person.prototype.showInfo = function () {
        // console.log("id:"+ this.id + " name:" + this.name + " address:" + this.address);
        // Template string: ``  ${}
        console.log("id: ".concat(this.id, ", name: ").concat(this.name, ", address: ").concat(this.address));
    };
    return Person;
}());
exports.Person = Person;
var myName = "daonq";
exports.myName = myName;

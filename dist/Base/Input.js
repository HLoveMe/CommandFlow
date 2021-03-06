"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var InputNumber = /** @class */ (function (_super) {
    __extends(InputNumber, _super);
    function InputNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputNumber.prototype.value = function () {
        return rxjs_1.of(this.valueOf());
    };
    return InputNumber;
}(Number));
exports.InputNumber = InputNumber;
var InputString = /** @class */ (function (_super) {
    __extends(InputString, _super);
    function InputString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputString.prototype.value = function () {
        return rxjs_1.of(this.toString());
    };
    return InputString;
}(String));
exports.InputString = InputString;
//# sourceMappingURL=Input.js.map
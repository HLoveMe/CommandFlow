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
var ExecError = /** @class */ (function (_super) {
    __extends(ExecError, _super);
    function ExecError(work, error) {
        var _this = _super.call(this) || this;
        _this.date = new Date();
        _this.message = error.message;
        _this.name = error.name;
        _this.stack = error.stack;
        _this.work = work;
        return _this;
    }
    return ExecError;
}(Error));
exports.ExecError = ExecError;
//# sourceMappingURL=index.js.map
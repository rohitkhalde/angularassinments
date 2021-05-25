var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base(v) {
        this.v = v;
    }
    Base.prototype.display = function () {
        console.log("v=" + this.v);
    };
    Base.prototype.printData = function () {
        console.log("I am in protected class");
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived(x) {
        var _this = _super.call(this, x) || this;
        _this.x = x;
        return _this;
    }
    Derived.prototype.printData = function () {
        _super.prototype.printData.call(this);
    };
    return Derived;
}(Base));
var obj1 = new Derived("Hello world");
obj1.display();
obj1.printData();

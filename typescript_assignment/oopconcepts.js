var MyClass = /** @class */ (function () {
    function MyClass(s) {
        this.str = s;
    }
    MyClass.prototype.changeCase = function (c) {
        if (c === "U" || c === "u")
            return this.str.toUpperCase();
        if (c === "L" || c === "l")
            return this.str.toLowerCase();
    };
    return MyClass;
}());
var obj = new MyClass("Rohit Khalde");
var value = obj.changeCase("U");
console.log(value);

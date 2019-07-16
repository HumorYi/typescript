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
// 类
var Person = /** @class */ (function () {
    // 构造函数
    function Person(name) {
        this.name = name;
    }
    // 方法
    Person.prototype.info = function () { return this.name; };
    return Person;
}());
// 实例化一个类
var person = new Person("bamboo");
// 继承 封装 多态
var Animal = /** @class */ (function () {
    function Animal() {
        // 私有的成员，当前类独有
        this.money = Infinity;
    }
    return Animal;
}());
// 子类继承父类
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));

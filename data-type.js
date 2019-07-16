/* undefined 和 null 是其它所有类型的子类型 */
var un = undefined;
var nu = null;
var bool = true;
var num = 1;
var str = 'bamboo';
// 数字类型数组
var arrNum = [1, 23, 4];
// 数字类型数组
var arrNum2 = [1, 2];
// 元祖类型：数组扩展，适合已知数据个数的数组，可以定义每个位置数据存储类型，初始化时要按照每个位置指定了类型来传值
var per;
per = [1, 'a'];
/* 枚举类型 enum S */
// 数组扩展，为数组内部每个元素定义一个名字，见名知意，方便查询，替代下标查找
// 1、定义一个枚举类型数据
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
;
// 2、初始化指定的枚举类型数据
var season = Season.Spring;
// 修改枚举类型下标，下标默认从0开始
// 修改首个元素下标，后续元素会随着首个元素往后移
var Season1;
(function (Season1) {
    Season1[Season1["Spring"] = 1] = "Spring";
    Season1[Season1["Summer"] = 2] = "Summer";
    Season1[Season1["Autumn"] = 3] = "Autumn";
    Season1[Season1["Winter"] = 4] = "Winter";
})(Season1 || (Season1 = {}));
;
// 获取指定下标类型的数据
var season1 = Season[3];
var season11 = Season1.Winter;
// 修改多个元素下标
var Season2;
(function (Season2) {
    Season2[Season2["Spring"] = 1] = "Spring";
    Season2[Season2["Summer"] = 2] = "Summer";
    Season2[Season2["Autumn"] = 4] = "Autumn";
    Season2[Season2["Winter"] = 6] = "Winter";
})(Season2 || (Season2 = {}));
;
// 获取指定下标类型的数据
var season2 = Season[4];
var season22 = Season1.Winter;
/* 枚举类型 enum S */
// 任意值 any，适用未知数据类型：参数、变量
var data = 4;
data = "abc";
// 无返回值 void
function test() {
    console.log("test");
}

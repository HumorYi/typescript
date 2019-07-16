/* undefined 和 null 是其它所有类型的子类型 */
let un:undefined = undefined;
let nu:null = null;

let bool:boolean = true;
let num:number = 1;
let str:string = 'bamboo';

// 数字类型数组
let arrNum:number[] = [1,23,4];
// 数字类型数组
let arrNum2:Array<Number> = [1, 2];

// 元祖类型：数组扩展，适合已知数据个数的数组，可以定义每个位置数据存储类型，初始化时要按照每个位置指定的类型来传值
let per:[number, string];
per = [1, 'a'];

/* 枚举类型 enum S */

// 关联数据和索引数组的集合
// 为数组内部每个元素定义一个名字，见名知意，方便查询，替代下标查找

// 1、定义一个枚举类型数据
enum Season{Spring, Summer, Autumn, Winter};
// 2、初始化指定的枚举类型数据
let season:Season = Season.Spring;

// 修改枚举类型下标，下标默认从0开始

// 修改首个元素下标，后续元素会随着首个元素往后移
enum Season1{Spring=1, Summer, Autumn, Winter};

// 获取指定类型的下标数据
let season1:string = Season[3];

// 获取指定类型的名称数据
let season11:number = Season1.Winter;

// 修改多个元素下标
enum Season2{Spring=1, Summer=2, Autumn=4, Winter=6};

// 获取指定类型的下标数据
let season2:string = Season[4];

// 获取指定类型的名称数据
let season22:number = Season2.Winter;

/* 枚举类型 enum S */

// 任意值 any，适用未知数据类型：参数、变量
let data:any = 4;
data = "abc";

// 无返回值 void
function test():void {
  console.log("test");
}
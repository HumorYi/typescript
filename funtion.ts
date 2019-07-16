// 函数
// 1、x和y是参数的名字，number是参数的类型
// 2、:number指的是返回值的类型
function sum(x: number, y: number): number {
  return x + y;
}

// 函数定义完整类型：参数类型和返回值类型
// 0、函数定义外部形参与内部形参一致；
// 1、x和y是参数的名字，number是参数的类型；
// 2、=> number指的是返回值的类型
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}

// 当函数无返回值时使用 void
function test(a:string):void {
  console.log(a);
}

// 设置可选形参，在参数名后加 ?，可选形参必须放在函数参数列表定义最后面
function test2(c:number, b?:number):void {
  console.log(c);

  if (b) { console.log(b); }
}

test2(10);
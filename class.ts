// 类
class Person {
  // 类成员:
  // 属性
  name: string;
  // 构造函数
  constructor(name:string) {
    this.name = name;
  }
  // 方法
  info() { return this.name; }
}

// 实例化一个类
let person = new Person("bamboo");


// 继承 封装 多态
class Animal {
  // 成员修饰符，默认为所有成员添加public
  name:string;
  // 私有的成员，当前类独有
  private money = Infinity;
  // 受保护的成员，子类共享
  protected clothes:[];
  // 成员是只读的，不能修改
  readonly from = "nature";
}

// 子类继承父类
class Cat extends Animal {
  constructor() {
    // 在构造函数中继承父类成员
    super();
  }
}
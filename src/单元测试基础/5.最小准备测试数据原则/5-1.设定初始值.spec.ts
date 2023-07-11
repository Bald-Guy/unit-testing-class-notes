import { it, expect } from "vitest";
/**
 *  在准备测试数据的时候，和当前要测试的功能无关的数据不需要提供
 *  目的是为了保持单元测试的可读性，测试数据越少，测试用例越容易阅读
 *  ⚠️单元测试非常注重可读性、可维护性
 *  当实现功能方案有多种的时候，我们应该选择让单元测试可读性和可维护性更好的方案
 * 
 *  通过给函数入参设定初始值的方式来减少测试数据准备量
 *  是否应该为了单元测试去重构业务代码?
 *  应该, 因为测试代码也是业务代码的“用户”
 *  单元测试可以驱动我们设计出更好用的程序 API
 */

// 业务代码
export class UserA {
  name: string;
  age: number;
  email: string;
  city: string;
  constructor(name: string, age: number, email: string, city: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.city = city;
  }

  sayHi() {
    return `Hi, my name is ${this.name}.`;
  }
}

// 测试代码
it("A should say hi", () => {
  // 除了 name, 其他数据与当前测试无关, 影响可读性
  const user = new UserA("John", 18, "leo@gmail.com", "Shanghai");

  const result = user.sayHi();

  expect(result).toBe("Hi, my name is John.");
});

// 业务代码
class UserB {
  name: string;
  age: number;
  email: string;
  city: string;
  constructor(
    name: string,
    age: number = 0,
    email: string = "",
    city: string = ""
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.city = city;
  }

  sayHi() {
    return `Hi, my name is ${this.name}.`;
  }
}

// 测试代码
it("B should say hi", () => {
  const user = new UserB("John");

  const result = user.sayHi();

  expect(result).toBe("Hi, my name is John.");
});
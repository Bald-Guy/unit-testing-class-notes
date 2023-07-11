import { it, expect } from "vitest";
/**
 * expect：断言
 *  - toBe：相当于===，一般用于对比值
 *  - toEqual：常用于两个对象进行比较
 *  - toBeTruthy：测试某个值是非为真
 *  - toBeFalsy：测试某个值是非为假
 *  - toContain：测试数组或字符串中是否含某个值
 *  - toThrow：测试函数是否会抛出一个error，并且期望的error和抛出的error是一样的
 */

// toBe
it("toBe", () => {
  expect(1).toBe(1);
  expect("1").not.toBe(1);
  // expect("1").toBe(1); // 测试不通过
  expect("1").toBe("1");
});

// toEqual
it("toEqual", () => {
  expect({ a: 1 }).toEqual({ a: 1 });
  expect({ a: 1 }).not.toEqual({ a: "1" });
});

// toBe能用来对比两个对象吗？
it("toBe", () => {
  const obj1 = { a: 1 };
  const obj2 = { a: 1 };
  // expect(obj1).toBe(obj2)  // 测试不通过
  expect(obj1).not.toBe(obj2); // 因为toBe是===，比较的是引用地址

  const obj3 = obj1;
  expect(obj1).toBe(obj3);

  // expect({a: 1}).toBe({a: 1}) // 测试不通过, 提示 Object.is equality

  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

// toBeTruthy
it("toBeTruthy", () => {
  expect(1).toBeTruthy();
  expect(true).toBeTruthy();
  expect("1").toBeTruthy();
  expect({}).toBeTruthy();
  expect([]).toBeTruthy();
  expect(0).not.toBeTruthy();
  expect(false).not.toBeTruthy();
});

// toBeFalsy
it("toBeFalsy", () => {
  expect(0).toBeFalsy();
  expect(false).toBeFalsy();
  expect("").toBeFalsy();
});

// toContain
it("toContain", () => {
  expect([1, 2, 3]).toContain(1);

  const item1 = { a: 1 };
  const item2 = { b: 2 };
  const item3 = { c: 3 };
  const list = [item1, item2];
  expect(list).toContain(item1);
  // expect(list).toContain(item3) // 测试不通过
  expect(list).not.toContain(item3);

  const str = "hello world";
  expect(str).toContain("hello");
  expect(str).toContain(" ");
  expect(str).not.toContain("hi");
});

// toThrow
it("toThrow", () => {
  const fn = () => {
    throw new Error("error");
  };
  expect(fn).toThrow(); // 可以监测 error.message
  expect(fn).toThrow("error");
  expect(fn).toThrow(/error/);
  expect(fn).not.toThrow("hi");
});

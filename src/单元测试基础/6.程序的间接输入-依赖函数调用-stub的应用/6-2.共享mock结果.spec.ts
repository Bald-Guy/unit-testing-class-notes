import { vi, describe, it, expect } from "vitest";
import { doubleUserAge } from "./index";
import { userAge } from "./user";
/**
 * stub: 桩
 * 概念: 代替真实的逻辑实现
 * 这种代替是全局的、顶部的, 各个测试用例共用一个 mock 后的东西
 */

console.log(userAge()); // 2

// vi.mock 在编译时会被提升到顶部, 因此👆上面打印的结果是 2
// 并且这种代替是全局的, 会让这个测试文件中的测试用例共用一个 mock 后的东西
vi.mock("./user", () => {
  return {
    userAge: () => 2,
  };
});

describe("mock", () => {
  it("first", () => {
    const result = doubleUserAge();

    expect(result).toBe(4);
  });
  it("second", () => {
    console.log(userAge()); // 2
  });
});

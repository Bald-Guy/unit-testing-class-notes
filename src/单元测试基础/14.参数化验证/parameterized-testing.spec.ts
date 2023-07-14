import { it, expect, describe } from "vitest";

/**
 * 参数化验证:
 * 概念: 提供在多个 test case 中重用相同测试逻辑的方法
 * 对于调用逻辑相同, 仅仅是输入输出不同的多个测试用例, 也可以看成是一种重复
 *
 * 缺点:
 *  1. 报错之后不太好找到具体是哪一个: 可以用 nodejs的 format 解决
 */

// 业务代码
function checkWord(word: string) {
  return word[0] === "a";
}

// 测试代码
describe("check word", () => {
    it("ant", () => {
      const word = "ant";
      expect(checkWord(word)).toBe(true);
    });
    it("bird", () => {
      const word = "bird";
      expect(checkWord(word)).toBe(false);
    });
    it("cow", () => {
      const word = "cow";
      expect(checkWord(word)).toBe(false);
    });
    it("duck", () => {
      const word = "duck";
      expect(checkWord(word)).toBe(false);
    });

  // 数组形式
  it.each([
    ["ant", true],
    ["bird", false],
    ["cow", false],
    ["duck", false],
  ])("should return %s when word is %s", (word, expected) => {
    expect(checkWord(word)).toBe(expected);
  });

  // 对象形式
  it.each([
    { word: "ant", expected: true },
    { word: "bird", expected: false },
    { word: "cow", expected: false },
    { word: "duck", expected: false },
  ])("should return $word when word is $expected", ({ word, expected }) => {
    expect(checkWord(word)).toBe(expected);
  });
  
  // 模板字符的形式
  // 写法太复杂, 详见课程10:00处
});

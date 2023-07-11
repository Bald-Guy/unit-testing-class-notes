import { vi, it, expect } from "vitest";
import { doubleInnerHeight } from "./8-3.间接层处理";

/**
 * 非常强大，能够把间接输入的情况全部转化成处理函数的形式或者处理对象的形式
 * 这个技巧也可以用于将难测的代码抽离出去
 * 😎每天一层间接层解决不了的问题, 如果有那就再加一层
 */
vi.mock("./window.ts", () => {
  return {
    innerHeightFn: () => 200,
  };
});

it("should ", () => {
  const result = doubleInnerHeight();

  expect(result).toBe(400);
});

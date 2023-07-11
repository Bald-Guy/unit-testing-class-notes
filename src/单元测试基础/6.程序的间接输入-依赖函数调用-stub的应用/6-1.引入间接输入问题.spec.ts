import { it, expect } from "vitest";
import { doubleUserAge } from "./index";
/**
 * 间接输入
 * 概念: 待测试的功能中的逻辑（数据）依靠了其他模块的逻辑（数据）
 * 其他模块提供的数据：可能是api，可能是缓存，可能是用户输入
 * 并且这种依赖可能是同步的，也有可能是异步的
 * 我们是否可以控制间接输入的值呢🤔️
 */

it("should", () => {
  // 当依赖的 userAge 函数发生变化时，我们的测试用例也需要跟着变化, 是脆弱的测试
  const result = doubleUserAge();

  expect(result).toBe(36);
});



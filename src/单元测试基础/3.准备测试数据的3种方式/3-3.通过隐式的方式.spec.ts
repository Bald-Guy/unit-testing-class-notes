import { beforeEach, describe, it } from "vitest";
import { setActivePinia, createPinia } from "pinia";
/**
 *  通过隐式(implicit)的方式准备测试数据
 *  概念: 通过框架提供的方法去实现
 *  解决:
 *      - 代码重复的问题
 *  缺点:
 *      - 测试可读性变差(将逻辑分割开了)
 *  用更安全的方法避免缺点: 用 describe 把相关逻辑的测试用例放到一起
 *  避免将所有数据准备的逻辑都放到 beforeEach 中, 会导致测试代码难以维护
 *  
 *  3种准备测试数据的适用场景:
 *      - 准备测试数据的逻辑简单用内联
 *      - 准备测试数据的逻辑比较复杂用委托
 *      - 多个测试用例使用相同的创建数据逻辑用隐式
 */

// 测试代码
describe("implicit", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should", () => {
    // ...
  });
});

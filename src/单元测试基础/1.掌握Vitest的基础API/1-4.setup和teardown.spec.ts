import {
  beforeAll,
  beforeEach,
  describe,
  test,
  afterEach,
  afterAll,
} from "vitest";
/**
 * setup 和 teardown
 *  1.执行顺序
 *    beforeAll → beforeEach → test → afterEach → describe(beforeEach → test → afterEach) → afterAll
 *  2.在什么时候用
 *    beforeAll: 只执行一次, 在最开始的时候
 *      - 数据库连接
 *      - 创建临时文件
 *    afterAll: 只执行一次, 在最后的时候
 *      - 数据库断开连接
 *      - 删除临时文件
 *    beforeEach: 每个测试用例执行之前
 *      - 每个测试用例执行之前都需要做的事情(pinia)
 *    afterEach: 每个测试用例执行之后
 *      - 每个测试用例执行之后都需要做的事情(reset)
 */

// 1.执行顺序
beforeAll(() => {
  console.log("beforeAll");

  // 可以通过返回一个函数来实现 teardown
  // 当需要和 afterAll 共用对象时, 比较方便
  // 执行顺序在 afterAll 之后
  return () => {
    // 此处代码逻辑可以和 afterAll 达到同样的效果
  }
});

beforeEach(() => {
  console.log("beforeEach");

  // 可以通过返回一个函数来实现 teardown
  // 当需要和 afterEach 共用对象时, 比较方便
  // 执行顺序在 afterEach 之后
  return () => {
    // 此处代码逻辑可以和 afterEach 达到同样的效果
  }
});

test("first test", () => {
  console.log("first test");
});

test("second test", () => {
  console.log("second test");
});

describe("sub", () => {
  beforeEach(() => {
    console.log("sub beforeEach");
  });
  test("sub first", () => {
    console.log("sub first");
  });
  afterEach(() => {
    console.log("sub afterEach");
  });
});

afterEach(() => {
  console.log("afterEach");
});

afterAll(() => {
  console.log("afterAll");
});

import { vi, beforeEach, describe, it, expect } from "vitest";
import { doubleUserAge } from "./index";
import { userAge, userName } from "./user";
/**
 *  实际开发中, 推荐使用 vi.mock()
 *      - 全局好管理, 可以通过多个测试文件去实现 doMock 的效果
 *      - 不需要每次都进行依赖导入
 */
describe("mock", () => {
  it("first", async () => {
    vi.doUnmock("./user");
    vi.doMock("./user", () => {
      return {
        userAge: () => 2,
      };
    });

    // 使用doMock 需要注意, mock 的结果需要在下次导入时才会生效
    const { doubleUserAge } = await import("./index");

    const result = doubleUserAge();

    expect(result).toBe(4);
  });
  it("second", () => {
    console.log(userAge());
  });
});

// 当出现对同一个路径的代码文件进行mock的doMock时, 只有最先被执行的那个会生效, 后面的无法覆盖前面的, 推荐最后提到的方案👇
describe("存在多个对同一路径进行 mock 的 doMock", () => {
  beforeEach(() => {
    vi.doUnmock("./user");
    vi.doMock("./user", () => {
      return {
        userAge: () => 4,
        userName: () => "Tom",
      };
    });
  });
  it("first", async () => {
    const { doubleUserAge } = await import("./index");
    const result = doubleUserAge();
    expect(result).toBe(8);
  });
  it("should ", async () => {
    const { userName } = await import("./user");
    const result = userName();

    expect(result).toBe("Tom");
  });
});
// doMock 没有代码提升, 每个 describe 单独运行可以通过
// 因为有两个测试用例都对同一个函数进行了 mock, 每个用例想使用不同的返回值
// 如果通过命令行直接运行整个测试文件则会报错(第一个用例能通过, 但是第二个用例不能通过)
// 这种场景使用 vi.mocked(userAge).mockImplementationOnce(()=>{...}) 更合适。
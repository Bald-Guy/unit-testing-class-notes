import { vi, it, expect, describe } from "vitest";
import { login } from "./11-2.third-party-library";
import { userLogin } from "user";
/**
 * 当拿不到状态的时候（调用第三方库）就只能去验证行为
 * stub 和 mock 的区别：stub 只负责提供值，不负责记录和验证，而 mock 则需要记录值，并进行验证。
 */
// 写法类似之前的 stub 间接输入
vi.mock("user", () => {
  return {
    userLogin: vi.fn(), // mock
    // userLogin: () => 2 // stub: 只负责提供值, 不负责记录交互, 不负责验证
  };
});

describe("login", () => {
  it("should call login function from user library", async () => {
    login("John", "123456")
    
    expect(userLogin).toBeCalled() // 验证是否被调用
    expect(userLogin).toBeCalledWith("John", "123456") // 验证被调用时的参数
    expect(userLogin).toBeCalledTimes(1)  // 验证被调用次数
  });
});

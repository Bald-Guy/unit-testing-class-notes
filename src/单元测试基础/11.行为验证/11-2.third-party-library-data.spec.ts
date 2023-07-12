import { vi, it, expect, describe } from "vitest";
import { loginV2, getTip } from "./11-2.third-party-library";
import { userLogin } from "user";
/**
 * 调用第三方库时常见的使用 mock 的方式之一就是提供假值
 */

vi.mock("user", () => {
  return {
    userLogin: vi.fn().mockReturnValue(true),
    // userLogin: vi.fn(() => true) // 另一种写法
  };
});

describe("login", () => {
  it('should call loginV2 from user library', () => {
    loginV2("Tom", "654321")

    expect(userLogin).toBeCalled()  // 行为验证
    expect(getTip()).toBe("登录成功啦") // 状态验证
  });
});

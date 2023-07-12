import { vi, it, expect, describe } from "vitest";

/**
 * 业务代码
 * 监测今天是否为周五
 * @returns 如果今天是周五返回 "开心", 否则返回 "不开心"
 */
export function checkFriday(): string {
  const today = new Date();
  console.log(today.getDay());
  if (today.getDay() === 5) {
    return "happy";
  } else {
    return "sad";
  }
}

// 测试代码
describe("date", () => {
  it("should be happy when it's Friday", () => {
    // setup
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 3, 21));

    const result = checkFriday();

    expect(result).toBe("happy");

    // reset
    vi.useRealTimers();
  });
  it("should be sad when it's not Friday", () => {
    // setup
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2023, 3, 22));

    const result = checkFriday();

    expect(result).toBe("sad");

    // reset
    vi.useRealTimers(); // reset
  });
  it("third case", () => {
    checkFriday();
  });
});

// 小结: 在使用时间之前用 vi.useFakeTimers() + vi.setSystemTime() 手动设置, 测试结束后用 vi.useRealTimers() 恢复

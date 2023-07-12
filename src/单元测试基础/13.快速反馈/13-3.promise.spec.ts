import { it, expect, describe, vi } from "vitest";

// 业务代码
export function fetchUserData() {
  return new Promise((resolve, reject) => {
    resolve("1");
  });
}

export function delay(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, time);
  });
}

// 测试代码
describe("promise", () => {
  it("normal", async () => {
    const result = await fetchUserData();

    expect(result).toBe("1");
  });
  it("delay", () => {
    vi.useFakeTimers()
    const result = delay(1000); // 不加 await
    vi.advanceTimersToNextTimer()

    expect(result).resolves.toBe("ok");
  });
});

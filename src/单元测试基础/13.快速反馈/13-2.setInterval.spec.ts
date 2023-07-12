import { it, expect, describe, vi } from "vitest";

// 业务代码
export function sayHi() {
  setInterval(() => {
    console.log("hi");
  }, 100);
}

describe("setInterval", () => {
  it("should call one", () => {
    vi.spyOn(console, "log");

    sayHi();

    expect(console.log).toBeCalledWith("hi");
  });
  it("should call one", () => {
    vi.useFakeTimers()
    vi.spyOn(console, "log");

    sayHi();
    // vi.advanceTimersByTime(100)
    vi.advanceTimersToNextTimer()

    expect(console.log).toBeCalledWith("hi");
  });
});

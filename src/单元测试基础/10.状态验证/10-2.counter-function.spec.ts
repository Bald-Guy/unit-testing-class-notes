import { it, expect, describe, afterEach } from "vitest";
import { increment, getCount, reset } from "./10-2.counter-function";

describe("Counter functional", () => {
  afterEach(() => {
    reset();
  });
  it("increment", () => {
    // 0 -> 1
    increment();

    expect(getCount()).toBe(1);
  });
  it("increment second", () => {
    increment();

    expect(getCount()).toBe(1);
  });
});

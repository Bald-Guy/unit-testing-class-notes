import { it, expect, describe } from "vitest";
import { Counter } from "./10-1.counter-class";

describe("Counter", () => {
  it("increment", () => {
    // 0
    const counter = new Counter();

    // 0 -> 1
    counter.increment();

    expect(counter.getCount()).toBe(1);
  });
});

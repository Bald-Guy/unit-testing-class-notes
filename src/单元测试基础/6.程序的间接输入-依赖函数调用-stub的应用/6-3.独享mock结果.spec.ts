import { vi, describe, it, expect } from "vitest";
import { doubleUserAge} from "./index";
import { userAge} from "./user";

vi.mock("./user")
describe("mock", () => {
  it("first", () => {
    // 各自的测试用例中可以自己 mock 不同的结果
    vi.mocked(userAge).mockReturnValue(6);  // 如果前面写了 vi.mock('path'), 但测试用例中没写这行就会报错

    const result = doubleUserAge();

    expect(result).toBe(12);
  });
  it("second", () => {
    vi.mocked(userAge).mockReturnValue(10);

    console.log(userAge()); // 10
  });
  it("third", () => {
    vi.mocked(userAge).mockReturnValue(2);

    const result = doubleUserAge();

    expect(result).toBe(4);
  });
});

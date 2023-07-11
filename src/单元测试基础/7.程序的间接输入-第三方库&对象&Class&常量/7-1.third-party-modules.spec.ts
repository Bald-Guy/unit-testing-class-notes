import { vi, test, expect } from "vitest";
import { doubleUserAge } from "./7-1.third-party-modules";
import axios from "axios";
/**
 * 待测试的业务代码中调用了第三方模块, 比如: axios
 * 测试方法: 使用 vi.mock()
 */
vi.mock("axios"); // 第一个变量就填第三方模块的名字
test("第三方模块的处理: axios", async () => {
//   vi.mocked(axios).mockResolvedValue({ name: "Tom", age: 3 });
  vi.mocked(axios.get).mockResolvedValue({ name: "Tom", age: 3 });

  const result = await doubleUserAge();

  expect(result).toBe(6);
});

import { afterEach, it, expect, vi, describe } from "vitest";
import { doubleUserAgeByProcess } from "./8-1.env-process";
import { doubleUserAgeByImport } from "./8-1.env-import";

/**
 *  测试方法:
 *      1⃣️直接给环境变量赋值(测试后需要对环境变量进行修复, 比较麻烦)
 *      2⃣️使用 API
 *          - vi.stubEnv()
 *          - vi.unstubAllEnvs(): 可配合 afterEach 使用
 */

afterEach(() => {
  vi.unstubAllEnvs();
});

it("process 1", () => {
  process.env.USER_AGE = "2";

  const result = doubleUserAgeByProcess();

  expect(result).toBe(4);
});

it("process 2", () => {
  vi.stubEnv("USER_AGE", "3");

  const result = doubleUserAgeByProcess();

  expect(result).toBe(6);

//   vi.unstubAllEnvs(); // reset 环境变量
});

it('vite import', () => {
    vi.stubEnv("VITE_USER_AGE", "5")

    const result = doubleUserAgeByImport()

    expect(result).toBe(10);
});

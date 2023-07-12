import { vi, it, expect, describe } from "vitest";
// 保证给定特定输入时产生可预测的输出
/**
 *  1. 外部依赖
 *    - api
 *    - 第三方服务
 *    - 数据库
 *  2. 随机数
 *  3. 日期 date
 */

/**
 * 业务代码
 * 基于 Math.random 生成一个随机字符串
 * @param length 字符串长度
 * @returns 生成的随机字符串
 */
export function generateRandomString(length: number): string {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length); // 生成 0 到字符串长度之间的整数
    result += characters.charAt(randomIndex); // 将指定位置上的字符添加到结果字符串中
  }
  return result;
}

// 测试代码
describe("Math.random", () => {
  it("should generate random string", () => {
    const result = generateRandomString(2);

    expect(result).toBe("");
  });
  it("should generate random string", () => {
    vi.spyOn(Math, "random").mockImplementation(() => {
      return 0.1;
    });

    const result = generateRandomString(2);

    expect(result).toBe("cc");
  });
  it("should generate random string", () => {
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1;
    });
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.2;
    });

    const result = generateRandomString(2);

    expect(result).toBe("fc");
  });
});

// 小结: 找到真正产生随机数的那个函数, 然后对其使用 spyOn

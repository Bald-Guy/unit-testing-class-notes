import { describe, it, expect } from "vitest";
import { tellAge, tellByFunction } from "./7-2.use-object";
import { config } from "./config";

/**
 *  待测试的业务代码依赖了其他的对象中的属性和方法
 *  测试方法: 直接改对象中的属性和方法
 */

// vi.mock('./config')
describe("使用对象的形式", () => {
  it("使用对象上的属性", () => {
    config.allowTellAge = false;

    const result = tellAge();

    expect(result).toBe("年龄保密");
  });

  it("使用对象上的方法", () => {
    config.getAge = () => {
        return 2
    }

    const result = tellByFunction()

    expect(result).toBe("No")
  })
});

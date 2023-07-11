import { it, expect } from "vitest";
import { UserA } from "./5-1.设定初始值.spec";

/**
 * 通过委托工厂函数，来隐藏不需要的属性
 */

it("should say hi", () => {
    const user = createUser("John")

    const result = user.sayHi()

    expect(result).toBe("Hi, my name is John.")
})

function createUser(name: string) {
  return new UserA(name, 18, 'leo@gmail.com', 'Shanghai')
}
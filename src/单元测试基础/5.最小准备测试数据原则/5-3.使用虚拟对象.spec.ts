import { it, expect } from "vitest";
import { UserA } from "./5-1.设定初始值.spec";

/**
 * 通过虚拟对象的方式
 */

// 业务代码
function makeFriend(friend: UserA) {
    return `My friend is ${friend.name}.`
}

// 测试代码
it("should make friend", () => {
    const user = {name: 'Tom'} as UserA

    const result = makeFriend(user)

    expect(result).toBe("My friend is Tom.")
})
import { describe, test } from "vitest";
/**
 * filter
 *  only: 只执行当前的测试用例
 *  skip: 跳过当前的测试用例
 *  todo: 充当注释, 不会执行
 *      - 看得见的进度
 */
describe.only("description", () => {
    test("should", () => {});
})
test.only("should", () => {})

describe.skip("description", () => {})
test.skip("should", () => {})

describe.todo("description", () => {})
test.todo("add a feature")
test.todo("add b feature")
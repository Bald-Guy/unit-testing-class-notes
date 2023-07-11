import { describe, test, it } from "vitest";
/**
 * describe：创建测试套件（内含多个测试case），帮助我们把相同行为的测试放到一起，方便维护管理
 *  可以对测试套件进行控制
 *      - describe.skip 跳过里面的测试case
 *      - describe.only 只执行里面的测试case
 *  可以嵌套，但不建议超过三层
 */

describe("description", () => {
    test("should", () => {
        // ...
    });
    test("should", () => {
        // ...
    });
})

// or
describe("description", () => {
    it("should", () => {
        // ...
    });
    it("should", () => {
        // ...
    });
})

// skip
describe.skip("description", () => {
    it("should", () => {
        // ...
    });
    it("should", () => {
        // ...
    });
})

// only
describe.only("description", () => {
    it("should", () => {
        // ...
    });
    it("should", () => {
        // ...
    });
})

// nested
describe("description", () => {
    describe("description", () => {
        it("should", () => {
            // ...
        });
        it("should", () => {
            // ...
        });
    })
    describe("description", () => {
        it("should", () => {
            // ...
        });
        it("should", () => {
            // ...
        });
    })
})

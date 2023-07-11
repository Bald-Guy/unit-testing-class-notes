import { it, expect, describe, vi } from "vitest";
import { doubleUserAge, doubleUserAgeByFunction } from "./7-3.use-class";
import { User } from "./User";
/**
 *  待测试的业务代码依赖了其他 Class 中的属性和方法
 *  测试方法:
 *      1⃣️直接在mock里定义
 *      2⃣️往对象的原型链上添加对应的属性的方法
 */
vi.mock("./User", () => {
  return {
    User: class User {
      age: number = 2;
      getAge() {
        return 4;
      }
    },
  };
});
describe("使用 class 的形式", () => {
  it("属性", () => {
    const result = doubleUserAge();

    expect(result).toBe(4);
  });
  it("方法", () => {
    const result = doubleUserAgeByFunction();

    expect(result).toBe(8);
  });
//   it('方法', () => {
//     User.prototype.getAge = () => {
//         return 3
//     }

//     const result = doubleUserAgeByFunction()

//     expect(result).toBe(6)
//   });
});

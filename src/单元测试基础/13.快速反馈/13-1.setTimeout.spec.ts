import { vi, it, expect, describe } from "vitest";
// 当执行待测试系统的时候, 它必须要够快
// why: 单元测试会被频繁执行

/**
 *  1. 外部依赖
 *    - api
 *    - 第三方服务
 *    - 数据库
 *  2. time
 *    - setTimeout
 *    - setInterval
 *  3. promise
 */

// 业务代码
export class User {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  fetchData(callback: (data: string) => void, delay: number): void {
    setTimeout(() => {
      const data = `Data for user with id: ${this.id}`;
      callback(data);
    }, delay);
  }
}

// 测试代码
describe("setTimeout", () => {
  // 直接运行这个测试会报错, 因为 fetchData 里有 setTimeout, callback 要在 1 秒后才会执行, 但是在那之前 expect 已经执行, 因此会报错
  it("should fetch user data", () => {
    const user = new User("1");

    const callback = vi.fn();

    user.fetchData(callback, 1000);

    expect(callback).toBeCalledWith("Data for user with id: 1");
  });
  it("should fetch user data", () => {
    vi.useFakeTimers(); // 替换掉系统的 Timer
    const user = new User("1");

    const callback = vi.fn();

    user.fetchData(callback, 1000);
    // vi.advanceTimersByTime(1000)    // 快进 1 秒
    vi.advanceTimersToNextTimer(); // 另一种方式, 好处是不用写具体时长

    expect(callback).toBeCalledWith("Data for user with id: 1");
  });
  it("should fetch user data", () => {
    vi.useFakeTimers();
    const user = new User("1");

    const callbackA = vi.fn();
    const callbackB = vi.fn();

    user.fetchData(callbackA, 1000);
    user.fetchData(callbackB, 500);

    vi.runAllTimers();

    expect(callbackA).toBeCalledWith("Data for user with id: 1");
    expect(callbackB).toBeCalledWith("Data for user with id: 1");
  });
});

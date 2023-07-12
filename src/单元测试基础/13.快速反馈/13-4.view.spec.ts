import { it, expect, describe } from "vitest";
import flushPromises from 'flush-promises';

// 业务代码
export class View {
  count: number = 1;
  render() {
    Promise.resolve()
      .then(() => {
        this.count = 2;
      })
      .then(() => {
        this.count = 3;
      });
  }
}

// 测试代码
describe("View", () => {
  it("should change count", async () => {
    const view = new View()

    view.render()
    await flushPromises()   //

    expect(view.count).toBe(3)
  });
});



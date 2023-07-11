import { it, expect } from "vitest";
/**
 * 通过内联(inline)的方式准备测试数据
 *  概念: 将准备数据的逻辑直接写在测试用例中
 *  优点: 简单
 *  缺点:
 *      1. 可能会产生大量的重复代码
 *      2. 当 given(准备数据) 的逻辑变得复杂的时候, 会导致单元测试可读性变差.
 *         违背测试清晰明了, 简单易读的原则. 测试应当能够充当活文档的角色
 *  实际开发中的操作: 一开始写测试的时候可以用内联的方式去准备数据,
 *  当测试逻辑变得复杂或者出现重复代码时, 可以用重构的手法通过其他方式(委托和隐式)创建数据
 */

// 业务代码
interface Todo {
  title: string;
  content: string;
}
const todos: Todo[] = [];
function addTodo(todo: Todo) {
  todos.push(todo);
}

// 测试代码
it("add todo", () => {
  // 内联方式准备测试数据
  const todo: Todo = {
    title: "吃饭",
    content: "今天要和小明去吃饭",
  };

  addTodo(todo);

  expect(todos[0]).toEqual(todo);
});
